import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

const PDF_SOURCES = [
  {
    file: 'assets/chubblife-hospital-network-2024-june.pdf',
    label: 'June 2024',
  },
  {
    file: 'assets/chubblife-hospital-network-th-2025-03.pdf',
    label: 'March 2025',
  },
];

const THAI_PROVINCES = [
  'กรุงเทพมหานคร', 'นนทบุรี', 'ปทุมธานี', 'สมุทรปราการ', 'ชลบุรี', 'เชียงใหม่', 'ภูเก็ต',
  'ขอนแก่น', 'นครราชสีมา', 'สงขลา', 'ระยอง', 'พระนครศรีอยุธยา', 'สุราษฎร์ธานี', 'อุดรธานี',
  'เชียงราย', 'นครศรีธรรมราช', 'ฉะเชิงเทรา', 'นครปฐม', 'สมุทรสาคร', 'ลำปาง', 'พิษณุโลก',
  'สระบุรี', 'ประจวบคีรีขันธ์', 'อุบลราชธานี', 'นครสวรรค์', 'กาญจนบุรี', 'ตราด', 'สุพรรณบุรี',
  'สุรินทร์', 'หนองคาย', 'พะเยา', 'ลพบุรี', 'มหาสารคาม', 'ชัยภูมิ', 'นครพนม', 'สกลนคร',
  'อำนาจเจริญ', 'บุรีรัมย์', 'ยะลา', 'ปัตตานี', 'นราธิวาส', 'กระบี่', 'ตรัง', 'พังงา',
  'ระนอง', 'แม่ฮ่องสอน', 'แพร่', 'น่าน', 'สตูล', 'พัทลุง', 'สมุทรสงคราม', 'อ่างทอง',
  'สิงห์บุรี', 'ชัยนาท', 'นครนายก', 'ปราจีนบุรี', 'สระแก้ว', 'ราชบุรี', 'เพชรบุรี', 'ชุมพร',
  'สุโขทัย', 'ตาก', 'พิจิตร', 'กำแพงเพชร', 'อุตรดิตถ์', 'เลย', 'หนองบัวลำภู', 'บึงกาฬ',
  'มุกดาหาร', 'ร้อยเอ็ด', 'ศรีสะเกษ', 'อุทัยธานี', 'เพชรบูรณ์', 'ลำพูน', 'กาฬสินธุ์', 'ยโสธร',
  'จันทบุรี', 'นิคมพัฒนา', 'อรัญประเทศ',
];

const NAME_FIXES = [
  [/น\s+้า/g, 'ำ'],
  [/กล้วยน\s*้าไท/g, 'กล้วยน้ำไท'],
  [/\*รับเฉพาะ IPD\*/g, ''],
  [/\s+/g, ' '],
];

function fixThaiName(name) {
  let value = name;
  for (const [pattern, replacement] of NAME_FIXES) {
    value = value.replace(pattern, replacement);
  }
  return value
    .replace(/กล้วยำไท/g, 'กล้วยน้ำไท')
    .replace(/กล้วยน\s*้าไท/g, 'กล้วยน้ำไท')
    .trim();
}

function cleanNamePart(namePart) {
  let value = namePart.trim();
  const cutPatterns = [
    /\s0\d[\d\s-]{7,}/,
    /\s\d+[\s,]*ถ\./,
    /\s\d+\s*ถนน/,
    /\s\d+\/\d+/,
    /\s\d+,\d+/,
    /\s\d+-\d+/,
    /\s\d+\s*หมู่/,
    /\sเลขที่/,
    /\s\d{3,}$/,
  ];

  for (const pattern of cutPatterns) {
    const match = value.match(pattern);
    if (match && match.index > 3) {
      value = value.slice(0, match.index).trim();
    }
  }

  return value;
}

function normalizePhone(value) {
  const match = String(value).match(/(0\d(?:[\s-]?\d){8,9})/);
  return match ? match[1].replace(/[\s-]/g, '') : '';
}

function extractProvince(rest) {
  const sorted = [...THAI_PROVINCES].sort((left, right) => right.length - left.length);
  for (const province of sorted) {
    if (rest.endsWith(` ${province}`) || rest.endsWith(province)) {
      return province;
    }
  }
  return '';
}

function extractNameAndPhone(rest) {
  const phoneMatch = rest.match(/(0\d{1,2}[\s-]?\d{2,3}[\s-]?\d{3,4})/);
  const phone = phoneMatch ? normalizePhone(phoneMatch[1]) : '';
  let namePart = phoneMatch ? rest.slice(0, phoneMatch.index).trim() : rest;

  const province = extractProvince(namePart);
  if (province) {
    namePart = namePart.slice(0, namePart.lastIndexOf(province)).trim();
    namePart = namePart.replace(/\s+[^\s]+$/, '').trim();
  }

  namePart = cleanNamePart(namePart);

  return { namePart, phone, province };
}

function parseHospitalLines(text) {
  const lines = text.split('\n').map((line) => line.trim()).filter(Boolean);
  const items = [];

  for (const line of lines) {
    if (line.includes('ลำดับที่') && line.includes('ชื่อ')) continue;
    if (line.includes('รายชื่อโรงพยาบาล') || line.includes('บริษัท ชับบ์') || line.includes('อัปเดต')) {
      continue;
    }
    if (line.startsWith('--')) continue;

    const match = line.match(/^(\d+)\s+(โรงพยาบาล|คลินิก|ศูนย์)\s+(.+)$/);
    if (!match) continue;

    const { namePart, phone, province } = extractNameAndPhone(match[3]);
    const prefix = match[2];
    const nameTh = fixThaiName(`${prefix} ${namePart}`);

    items.push({
      nameTh,
      phone,
      province,
      type: prefix === 'คลินิก' ? 'clinic' : 'hospital',
    });
  }

  return items;
}

function toEnglishName(nameTh) {
  let name = nameTh
    .replace(/^โรงพยาบาล\s+/, 'Hospital ')
    .replace(/^คลินิก\s+/, 'Clinic ')
    .replace(/^ศูนย์\s+/, 'Center ');

  const translitMap = {
    กรุงเทพ: 'Bangkok',
    สมิติเวช: 'Samitivej',
    พญาไท: 'Phyathai',
    บีเอ็นเอช: 'BNH',
    เกษมราษฎร์: 'Kasemrad',
    ธนบุรี: 'Thonburi',
    บางปะกอก: 'Bangpakok',
    จุฬารัตน์: 'Chularat',
    เปาโล: 'Paolo',
    เทพธารินทร์: 'Theptarin',
    ราชวิถี: 'Rajavithi',
    วชิรพยาบาล: 'Wachira',
    ยันฮี: 'Yanhee',
    กล้วยน้ำไท: 'Kluaynamthai',
    ชีวิต: 'Chivit',
    ศิริ: 'Siri',
    ปิยะเวช: 'Piyavate',
    นวมินทร์: 'Navamin',
    รามาธิบดี: 'Ramathibodi',
    ศิริราช: 'Siriraj',
  };

  for (const [thai, latin] of Object.entries(translitMap)) {
    if (nameTh.includes(thai)) {
      name = name.replace(thai, latin);
    }
  }

  return name
    .replace(/[^\x00-\x7F]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim() || nameTh;
}

async function extractPdfText(relativePath) {
  const absolutePath = path.join(root, relativePath);
  const buffer = fs.readFileSync(absolutePath);
  const parser = new PDFParse({ data: new Uint8Array(buffer) });
  const result = await parser.getText();
  return result.text;
}

function mergeHospitalLists(primary, secondary) {
  const byPhone = new Map();
  const byName = new Map();
  const merged = [];

  for (const item of [...primary, ...secondary]) {
    const phoneKey = item.phone;
    const nameKey = item.nameTh.toLowerCase();

    if (phoneKey && byPhone.has(phoneKey)) {
      const existing = byPhone.get(phoneKey);
      if (item.nameTh.length > existing.nameTh.length) {
        Object.assign(existing, item);
      }
      continue;
    }

    if (byName.has(nameKey)) {
      const existing = byName.get(nameKey);
      if (!existing.phone && item.phone) existing.phone = item.phone;
      if (!existing.province && item.province) existing.province = item.province;
      continue;
    }

    merged.push(item);
    if (phoneKey) byPhone.set(phoneKey, item);
    byName.set(nameKey, item);
  }

  return merged.sort((left, right) => left.nameTh.localeCompare(right.nameTh, 'th'));
}

async function main() {
  const sourcePaths = [
    path.join(root, 'assets/chubblife-hospital-network-2024-june.pdf'),
    path.join(root, 'assets/chubblife-hospital-network-th-2025-03.pdf'),
  ];

  const downloadPaths = [
    'C:/Users/OPTIONCOMPUTER/Downloads/chubblife-hospital-network-2024-june.pdf',
    'C:/Users/OPTIONCOMPUTER/Downloads/รายชื่อโรงพยาบาลเครือข่าย 03-2025.pdf',
  ];

  for (let index = 0; index < sourcePaths.length; index += 1) {
    if (!fs.existsSync(sourcePaths[index]) && fs.existsSync(downloadPaths[index])) {
      fs.mkdirSync(path.dirname(sourcePaths[index]), { recursive: true });
      fs.copyFileSync(downloadPaths[index], sourcePaths[index]);
    }
  }

  const readableText = await extractPdfText(PDF_SOURCES[0].file);
  const readableItems = parseHospitalLines(readableText);

  let merged = readableItems;
  if (fs.existsSync(path.join(root, PDF_SOURCES[1].file))) {
    const secondaryText = await extractPdfText(PDF_SOURCES[1].file);
    const secondaryItems = parseHospitalLines(secondaryText);
    if (secondaryItems.length) {
      merged = mergeHospitalLists(readableItems, secondaryItems);
    }
  }

  const hospitalNetwork = merged.map((item, index) => ({
    id: index + 1,
    nameTh: item.nameTh,
    nameEn: toEnglishName(item.nameTh),
    type: item.type,
    province: item.province || undefined,
    phone: item.phone || undefined,
  }));

  const featuredHospitals = [
    { search: 'โรงพยาบาล สมิติเวชสุขุมวิท', logo: 'assets/hospitals/samitivej.png', logoScale: 'wide', mark: 'SJ' },
    { search: 'โรงพยาบาล กรุงเทพ', logo: 'assets/hospitals/bangkok-hospital.png', logoScale: 'wide', mark: 'BH' },
    { search: 'โรงพยาบาล บีเอ็นเอช', logo: 'assets/hospitals/bnh.png', logoScale: 'standard', mark: 'BNH' },
    { search: 'โรงพยาบาล พญาไท 1', logo: 'assets/hospitals/phyathai.png', logoScale: 'wide', mark: 'PT' },
    { search: 'โรงพยาบาล ยันฮี', logo: 'assets/hospitals/yanhee.png', logoScale: 'standard', mark: 'YH' },
    { search: 'โรงพยาบาล ราชวิถี', logo: 'assets/hospitals/rajavithi.png', logoScale: 'standard', mark: 'RV' },
  ].map((item) => {
    const hospital =
      hospitalNetwork.find((entry) => entry.nameTh === item.search) ??
      hospitalNetwork.find((entry) => entry.nameTh.includes(item.search));
    return {
      id: hospital.id,
      logo: item.logo,
      logoScale: item.logoScale,
      mark: item.mark,
      nameTh: hospital.nameTh,
      nameEn: hospital.nameEn,
    };
  });

  const out = `// Chubb Life hospital network — updated from official PDF lists (2024 + Mar 2025)
// Sources:
// - assets/chubblife-hospital-network-2024-june.pdf
// - assets/chubblife-hospital-network-th-2025-03.pdf

export const hospitalNetworkPdf = 'chubblife-hospital-network-th-2025-03.pdf';

export const hospitalNetwork = ${JSON.stringify(hospitalNetwork, null, 2)};

export const featuredHospitals = ${JSON.stringify(featuredHospitals, null, 2)};
`;

  fs.writeFileSync(path.join(root, 'src/data/hospitalNetwork.js'), out, 'utf8');
  console.log(`Wrote ${hospitalNetwork.length} hospitals`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
