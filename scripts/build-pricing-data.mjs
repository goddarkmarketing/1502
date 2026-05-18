/**
 * สร้าง src/data/planPdfPricing.js จากข้อมูลตารางใน PDF
 * รัน: node scripts/build-pricing-data.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');

function readNumberRun(lines, startIdx, n) {
  const nums = [];
  let i = startIdx;
  while (nums.length < n && i < lines.length && /^[\d,]+$/.test(lines[i])) {
    nums.push(parseInt(lines[i].replace(/,/g, ''), 10));
    i++;
  }
  return { nums, nextIdx: i };
}

function parseIePremiumSegment(text) {
  const lines = text.split('\n').map((l) => l.trim());
  let i = 0;
  while (i < lines.length && lines[i] !== '0' && lines[i] !== '21' && lines[i] !== '51') i++;
  if (i >= lines.length) return null;
  const ages = [];
  while (i < lines.length && /^\d+$/.test(lines[i])) {
    ages.push(parseInt(lines[i], 10));
    i++;
  }
  const n = ages.length;
  const zones = [];

  while (i < lines.length && lines[i] !== 'WW') {
    if (lines[i].includes('แผน')) return null;
    i++;
  }

  for (let metal = 0; metal < 4; metal++) {
    if (i >= lines.length || lines[i] !== 'WW') return ages.length ? { ages, zones } : null;
    i++;
    const w1 = readNumberRun(lines, i, n);
    if (w1.nums.length < n) return { ages, zones };
    i = w1.nextIdx;
    zones.push({ nums: w1.nums });
    const w2 = readNumberRun(lines, i, n);
    if (w2.nums.length < n) return { ages, zones };
    i = w2.nextIdx;
    zones.push({ nums: w2.nums });
    if (i >= lines.length || lines[i] !== 'Asia') return { ages, zones };
    i++;
    const a1 = readNumberRun(lines, i, n);
    if (a1.nums.length < n) return { ages, zones };
    i = a1.nextIdx;
    zones.push({ nums: a1.nums });
  }
  return { ages, zones };
}

function fmtCell(n) {
  if (n == null || n === '') return '';
  return Number(n).toLocaleString('en-US');
}

async function iePlatinumTable() {
  const buf = fs.readFileSync(path.join(root, 'PDF', 'IE Premium .pdf'));
  const p = new PDFParse({ data: new Uint8Array(buf) });
  const full = await p.getText();
  await p.destroy();
  const segments = full.text.split(/\n-- \d+ of \d+ --\n/);

  const rows = [];
  for (const seg of segments) {
    const parsed = parseIePremiumSegment(seg);
    if (!parsed || parsed.zones.length < 3) continue;
    const plat = parsed.zones.slice(-3);
    for (let j = 0; j < parsed.ages.length; j++) {
      rows.push([
        String(parsed.ages[j]),
        fmtCell(plat[0].nums[j]),
        fmtCell(plat[1].nums[j]),
        fmtCell(plat[2].nums[j]),
      ]);
    }
  }

  return {
    title: 'ตารางเบี้ยประกันภัย (รวมอากรแสตมป์) — แผนแพลทินัม International Exclusive',
    columns: [
      'อายุ (ปี)',
      'เบี้ยรายปี — ทั่วโลกไม่รวมสหรัฐ (อัตราที่ 1)',
      'เบี้ยรายปี — ทั่วโลกไม่รวมสหรัฐ (อัตราที่ 2)',
      'เบี้ยรายปี — เอเชีย',
    ],
    rows,
    caption:
      'ดึงจาก IE Premium .pdf — อายุ 0–50 ปีสกัดอัตโนมัติครบ; ช่วง 51–80 ปีใน PDF หน้า 3 จัดรูปแบบต่างจากหน้า 1–2 จึงต้องดูยอดเพิ่มเติมจากไฟล์ต้นฉบับ',
  };
}

async function smartCarePlan4Table() {
  const buf = fs.readFileSync(path.join(root, 'PDF', 'Premium Essential .pdf'));
  const p = new PDFParse({ data: new Uint8Array(buf) });
  const t = await p.getTable();
  await p.destroy();
  const tbl = t.pages[0].tables[0];
  const ages = tbl[0][0]
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => /^\d+-\d+$/.test(s) || s === '61-64');
  const plan4cell = tbl[0][4];
  const lines = plan4cell.split('\n').map((s) => s.trim());
  const nums = [];
  for (const line of lines) {
    const m = line.match(/^([\d,]+)/);
    if (m) nums.push(m[1]);
  }
  const rows = ages.map((age, i) => [age, nums[i] ?? '']);
  return {
    title: 'ตารางเบี้ยประกันภัยรายปี (รวมอากรแสตมป์) — SmartCare Essential แผน 4',
    columns: ['ช่วงอายุ (ปี)', 'เบี้ยรายปี (บาท) — แผน 4'],
    rows,
    caption: 'ดึงจาก Premium Essential .pdf',
  };
}

async function easyCareTable() {
  const buf = fs.readFileSync(path.join(root, 'PDF', 'Premium  EasyCare .pdf'));
  const p = new PDFParse({ data: new Uint8Array(buf) });
  const t = await p.getTable();
  await p.destroy();
  const main = t.pages[0].tables[0];
  const ages = main[0][0]
    .split('\n')
    .map((s) => s.trim())
    .filter((s) => /^\d+-\d+$/.test(s));
  const dedRow = main[1];
  const deductibles = dedRow.slice(1, 4).map((c) => c.replace(/\n/g, ' ').trim());
  const dataRow = main[2];
  const blocks = dataRow.slice(1);
  const parseCol = (cell) =>
    cell
      .split('\n')
      .map((s) => s.trim())
      .filter((s) => /^[\d,]+$/.test(s));
  const cols = blocks.map(parseCol);
  const maxLen = Math.max(ages.length, ...cols.map((c) => c.length));
  const colHeaders = [
    'ช่วงอายุ (ปี)',
    ...deductibles.flatMap((d, di) => [
      `แผน 1 — ${d} (บาท/เดือน)`,
      `แผน 2 — ${d} (บาท/เดือน)`,
    ]),
  ];
  const rows = [];
  for (let i = 0; i < maxLen; i++) {
    const row = [ages[i] ?? ''];
    for (let c = 0; c < 6; c++) row.push(cols[c]?.[i] ?? '');
    rows.push(row);
  }
  return {
    title: 'ตารางเบี้ยประกันภัยรายเดือน — EasyCare Visa (รวมอากรแสตมป์)',
    columns: colHeaders,
    rows,
    caption: 'ดึงจาก Premium  EasyCare .pdf',
  };
}

const pchNote = {
  title: 'ตารางเบี้ยในโบรชัวร์ Pacific Cross',
  columns: ['หมายเหตุ'],
  rows: [
    [
      'สกัดข้อความจาก PCHI Standard / Maxima / Premier ไม่ได้ครบ — ตารางเบี้ยในเอกสารจัดเป็นภาพหรือฟอนต์พิเศษ โปรดเปิด PDF เพื่อดูยอดเบี้ยทุกช่วงอายุ',
    ],
  ],
  caption: '',
};

async function main() {
  const smart = await smartCarePlan4Table();
  const ie = await iePlatinumTable();
  const easy = await easyCareTable();

  const out = {
    'axa-smartcare-essential-plan-4': {
      brochurePdfs: ['PDF/Premium Essential .pdf', 'PDF/SmartCare Essential Brchour.pdf'],
      pricingTables: [smart],
    },
    'axa-international-exclusive-platinum': {
      brochurePdfs: ['PDF/IE Premium .pdf'],
      pricingTables: [ie],
    },
    'axa-easycare-visa-plan-2': {
      brochurePdfs: ['PDF/Premium  EasyCare .pdf'],
      pricingTables: [easy],
    },
    'pacific-cross-standard-extra': {
      brochurePdfs: ['PDF/PCHI Standard .pdf'],
      pricingTables: [{ ...pchNote }],
    },
    'pacific-cross-maxima': {
      brochurePdfs: ['PDF/PCHI Maxima .pdf'],
      pricingTables: [{ ...pchNote }],
    },
    'pacific-cross-maxima-plus': {
      brochurePdfs: ['PDF/PCHI Premier .pdf'],
      pricingTables: [{ ...pchNote }],
    },
    'allianz-smarter-health': {
      brochurePdfs: ['PDF/Allianz - Smarter Health-Y.01.01.2026.pdf'],
      pricingTables: [
        {
          title: 'ตารางเบี้ย Allianz Smarter Health',
          columns: ['หมายเหตุ'],
          rows: [
            ['เอกสารเป็นหน้าภาพ — สกัดตารางอัตโนมัติไม่ได้ กรุณาเปิด PDF'],
          ],
          caption: '',
        },
      ],
    },
  };

  const header = `/* eslint-disable */\n// สร้างโดย scripts/build-pricing-data.mjs — อย่าแก้มือ; รัน: node scripts/build-pricing-data.mjs\n\n`;
  const body = `export const pdfPricingBySlug = ${JSON.stringify(out, null, 2)};\n`;
  fs.writeFileSync(path.join(root, 'src', 'data', 'planPdfPricing.js'), header + body, 'utf8');
  console.log('OK: src/data/planPdfPricing.js');
  console.log('SmartCare rows:', smart.rows.length, 'IE rows:', ie.rows.length, 'EasyCare rows:', easy.rows.length);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
