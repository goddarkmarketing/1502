import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PDFParse } from 'pdf-parse';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pdfPath = path.join(__dirname, '../assets/chubblife-hospital-network-th-june2026.pdf');
const buffer = fs.readFileSync(pdfPath);
const parser = new PDFParse({ data: buffer });
const result = await parser.getText();
const text = result.text;

fs.writeFileSync(path.join(__dirname, '../temp-hospital-raw.txt'), text, 'utf8');

const lines = text.split('\n').map((l) => l.trim()).filter(Boolean);
const hospitals = [];
let currentProvince = '';

for (const line of lines) {
  if (/^จังหวัด/.test(line) || /^กรุงเทพ/.test(line) && line.length < 30) {
    currentProvince = line.replace(/^จังหวัด\s*/, '');
    continue;
  }
  const match = line.match(/^\d+\s+(?:โรงพยาบาล|คลินิก|ศูนย์)\s+(.+)$/);
  if (match) {
    hospitals.push({ name: match[1].trim(), province: currentProvince });
    continue;
  }
  const match2 = line.match(/^\d+\s+(.+)$/);
  if (match2 && /โรงพยาบาล|คลินิก|ศูนย์|Hospital|Clinic/i.test(match2[1])) {
    hospitals.push({ name: match2[1].trim(), province: currentProvince });
  }
}

console.log('Total hospitals found:', hospitals.length);
console.log(JSON.stringify(hospitals.slice(0, 10), null, 2));
console.log('--- sample lines ---');
console.log(lines.slice(0, 40).join('\n'));
