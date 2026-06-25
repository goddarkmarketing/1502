import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function parsePdfEntries(text) {
  const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
  const map = new Map();
  for (const line of lines) {
    const m = line.match(/^(\d+)\s+(.+)/);
    if (!m) continue;
    const n = +m[1];
    if (n > 126 || map.has(n)) continue;
    map.set(n, m[2]);
  }
  return map;
}

function fixThaiEncoding(s) {
  return s
    .replace(/ำ/g, 'า')
    .replace(/้า/g, '้ำ')
    .replace(/น้าไท/g, 'น้ำไท')
    .replace(/กล้วยน้าไท/g, 'กล้วยน้ำไท');
}

const TH_PROVINCES = [
  'กรุงเทพมหานคร', 'นนทบุรี', 'ปทุมธานี', 'สมุทรปราการ', 'ชลบุรี', 'เชียงใหม่', 'ภูเก็ต',
  'ขอนแก่น', 'นครราชสีมา', 'สงขลา', 'ระยอง', 'พระนครศรีอยุธยา', 'สุราษฎร์ธานี', 'อุดรธานี',
  'เชียงราย', 'นครศรีธรรมราช', 'ฉะเชิงเทรา', 'นครปฐม', 'สมุทรสาคร', 'ลำปาง', 'พิษณุโลก',
  'สระบุรี', 'ประจวบคีรีขันธ์', 'อุบลราชธานี', 'นครสวรรค์', 'กาญจนบุรี', 'ตราด', 'สุพรรณบุรี',
  'สุรินทร์', 'หนองคาย', 'พะเยา', 'ลพบุรี', 'มหาสารคาม', 'ชัยภูมิ', 'นครพนม', 'สกลนคร',
  'อำนาจเจริญ', 'บุรีรัมย์', 'ยะลา', 'ปัตตานี', 'นราธิวาส', 'กระบี่', 'ตรัง', 'พังงา',
  'ระนอง', 'แม่ฮ่องสอน', 'แพร่', 'น่าน', 'สตูล', 'พัทลุง', 'สมุทรสงคราม', 'อ่างทอง',
  'สิงห์บุรี', 'ชัยนาท', 'นครนายก', 'ปราจีนบุรี', 'สระแก้ว', 'ราชบุรี', 'เพชรบุรี', 'ชุมพร',
  'สุโขทัย', 'ตาก', 'พิจิตร', 'กำแพงเพชร', 'อุตรดิตถ์', 'เลย', 'หนองบัวลำภู', 'บึงกาฬ',
  'มุกดาหาร', 'ร้อยเอ็ด', 'ศรีสะเกษ', 'อุทัยธานี', 'พระนครศรีอยุธยา', 'ปทุมธานี',
  'นครปฐม', 'สมุทรสาคร', 'ชลบุรี', 'ระยอง', 'จันทบุรี', 'ตราด', 'สระแก้ว', 'ปราจีนบุรี',
  'นครนายก', 'สระบุรี', 'ลพบุรี', 'สิงห์บุรี', 'อ่างทอง', 'พิจิตร', 'เพชรบูรณ์', 'เลย',
  'หนองบัวลำภู', 'อุดรธานี', 'หนองคาย', 'บึงกาฬ', 'สกลนคร', 'นครพนม', 'มุกดาหาร',
  'กาฬสินธุ์', 'ร้อยเอ็ด', 'มหาสารคาม', 'ขอนแก่น', 'ชัยภูมิ', 'อำนาจเจริญ', 'อุบลราชธานี',
  'ยโสธร', 'ศรีสะเกษ', 'สุรินทร์', 'บุรีรัมย์', 'นครราชสีมา', 'ชัยนาท', 'นครสวรรค์',
  'อุทัยธานี', 'กำแพงเพชร', 'ตาก', 'สุโขทัย', 'พิษณุโลก', 'เพชรบุรี', 'ราชบุรี', 'กาญจนบุรี',
  'สุพรรณบุรี', 'นครปฐม', 'สมุทรสาคร', 'สมุทรสงคราม', 'เพชรบูรณ์', 'ลำปาง', 'ลำพูน',
  'เชียงราย', 'แพร่', 'น่าน', 'พะเยา', 'แม่ฮ่องสอน', 'นครศรีธรรมราช', 'กระบี่', 'พังงา',
  'ภูเก็ต', 'สุราษฎร์ธานี', 'ระนอง', 'ชุมพร', 'สงขลา', 'สตูล', 'ตรัง', 'พัทลุง', 'ปัตตานี',
  'ยะลา', 'นราธิวาส',
];

const THAI_NAME_OVERRIDES = {
  1: 'คลินิกสหคลินิกกล้วยน้ำไท',
  2: 'คลินิกเวชกรรมเปาโล สาขาซันทาวเวอร์สบี',
  11: 'โรงพยาบาลราชวิถี',
  12: 'โรงพยาบาลคณะแพทยศาสตร์วชิรพยาบาล มหาวิทยาลัยนวมินทราธิราช',
  19: 'โรงพยาบาลพีเอ็มจี (เดิมชื่อ รพ.พระราม 2)',
  27: 'โรงพยาบาลผู้สูงอายุขนส่งกลางกล้วยน้ำไท 2',
  33: 'คลินิกเวชกรรม จุฬารัตน์ 8',
  37: 'โรงพยาบาลวิมุต-เทพธารินทร์ (เดิม เทพธารินทร์)',
  40: 'โรงพยาบาลธนบุรี ทวีวัฒนา (เดิมธนบุรี 2)',
  50: 'โรงพยาบาลพญาไท พหลโยธิน : BDMS (เปาโล พหลโยธิน)',
  125: 'คลินิกเวชกรรมกล้วยน้ำไท สาขา ลาซาล',
  126: 'คลินิกเวชกรรมกล้วยน้ำไท สาขา คู้บอน',
};

function extractThaiName(raw, id) {
  if (THAI_NAME_OVERRIDES[id]) return THAI_NAME_OVERRIDES[id];

  let s = fixThaiEncoding(raw);
  s = s.replace(/\s0\d{8,9}$/, '').replace(/\t/g, ' ');

  for (const province of TH_PROVINCES) {
    const re = new RegExp(`\\s[\\u0E00-\\u0E7F\\s]+\\s${province.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}$`);
    const m = s.match(re);
    if (m) {
      s = s.slice(0, m.index).trim();
      break;
    }
    if (s.endsWith(province)) {
      s = s.slice(0, -province.length).trim();
      break;
    }
  }

  const roadSplit = s.match(/\s\d+\s+ถนน/);
  if (roadSplit && roadSplit.index > 5) s = s.slice(0, roadSplit.index).trim();

  const patterns = [
    /\s\d+[\s,]*ถ\./,
    /\s\d+\s+ซอย/,
    /\s\d+[\s,]*หมู่/,
    /\s\d+[\s,]*ม\./,
    /\sเลขที่\s/,
    /\s\d+,\d+/,
    /\s\d+\/\d+/,
    /\s\d+\s+อาคาร/,
  ];

  let cut = s.length;
  for (const pattern of patterns) {
    const m = s.match(pattern);
    if (m && m.index > 0 && m.index < cut) cut = m.index;
  }
  if (cut < s.length) s = s.slice(0, cut).trim();

  return s.replace(/\s+/g, ' ').trim();
}

function extractEnName(raw) {
  let s = raw.replace(/^(Hospital|Clinic|Center|Centre)\s+/i, '');
  s = s.replace(/\s0\d{8,9}$/, '');
  const addr = s.match(/\s(\d+[\/,\-]|\d+\s+Moo|\d+\s+Soi|\d+\s+Terminal)/i);
  if (addr && addr.index > 0) s = s.slice(0, addr.index).trim();
  return s.trim();
}

function titleCaseEn(name) {
  return name
    .toLowerCase()
    .replace(/\bbdms\b/gi, 'BDMS')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

const thMap = parsePdfEntries(fs.readFileSync(path.join(root, 'temp-hospital-raw.txt'), 'utf8'));
const enMap = parsePdfEntries(fs.readFileSync(path.join(root, 'temp-hospital-en.txt'), 'utf8'));

const hospitalNetwork = [];
for (let id = 1; id <= 126; id += 1) {
  const thRaw = thMap.get(id) || '';
  const enRaw = enMap.get(id) || '';
  const type = /คลินิก|Clinic/i.test(`${thRaw} ${enRaw}`) ? 'clinic' : 'hospital';
  hospitalNetwork.push({
    id,
    nameTh: extractThaiName(thRaw, id),
    nameEn: titleCaseEn(extractEnName(enRaw)),
    type,
  });
}

const featuredHospitals = [
  {
    id: 14,
    logo: 'assets/hospitals/samitivej.png',
    logoScale: 'wide',
    mark: 'SJ',
  },
  {
    id: 23,
    logo: 'assets/hospitals/bangkok-hospital.png',
    logoScale: 'wide',
    mark: 'BH',
  },
  {
    id: 43,
    logo: 'assets/hospitals/bnh.png',
    logoScale: 'standard',
    mark: 'BNH',
  },
  {
    id: 52,
    logo: 'assets/hospitals/phyathai.png',
    logoScale: 'wide',
    mark: 'PT',
  },
  {
    id: 20,
    logo: 'assets/hospitals/yanhee.png',
    logoScale: 'standard',
    mark: 'YH',
  },
  {
    id: 11,
    logo: 'assets/hospitals/rajavithi.png',
    logoScale: 'standard',
    mark: 'RV',
  },
].map((item) => {
  const hospital = hospitalNetwork.find((h) => h.id === item.id);
  return {
    ...item,
    nameTh: hospital.nameTh,
    nameEn: hospital.nameEn,
  };
});

const out = `// Chubb Life hospital network — June 2026 (126 facilities)
// Source: assets/chubblife-hospital-network-th-june2026.pdf

export const hospitalNetworkPdf = 'chubblife-hospital-network-th-june2026.pdf';

export const hospitalNetwork = ${JSON.stringify(hospitalNetwork, null, 2)};

export const featuredHospitals = ${JSON.stringify(featuredHospitals, null, 2)};
`;

fs.writeFileSync(path.join(root, 'src/data/hospitalNetwork.js'), out, 'utf8');
console.log('Wrote', hospitalNetwork.length, 'hospitals');
console.log('Sample:', hospitalNetwork.slice(10, 15).map((h) => h.nameTh));
