import { getPlanDisplayName } from '../i18n/localize.js';

export const PRIMARY_PHONE = '0653561416';
export const PRIMARY_PHONE_DISPLAY = '0653561416';
export const EMAIL = 'Litapat.ta@gmail.com';
export const FACEBOOK_URL = 'https://www.facebook.com/share/1DD7YHzCBp/?mibextid=wwXIfr';
export const LINE_ID = 'Minigirl65';
export const LINE_ADD_URL = 'https://line.me/ti/p/~Minigirl65';

export function buildInquiryMessage(formValues, plan) {
  const planName = plan ? getPlanDisplayName(plan) : 'ยังไม่ได้เลือกแผน';

  return [
    'สวัสดีค่ะ ต้องการสอบถามประกันภัยผ่าน InsureWithCat',
    '',
    `ชื่อ: ${formValues.fullName}`,
    `อีเมล: ${formValues.email}`,
    `โทร: ${formValues.phone}`,
    `ช่วงอายุ: ${formValues.ageRange}`,
    `แผนที่สนใจ: ${planName}`,
    `เป้าหมายความคุ้มครอง: ${formValues.coverageGoal}`,
    formValues.note ? `หมายเหตุ: ${formValues.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildMailtoUrl(formValues, plan) {
  const subject = encodeURIComponent('สอบถามแผนประกัน — InsureWithCat');
  const body = encodeURIComponent(buildInquiryMessage(formValues, plan));
  return `mailto:${EMAIL}?subject=${subject}&body=${body}`;
}
