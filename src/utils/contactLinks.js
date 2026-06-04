import { getPlanDisplayName } from '../i18n/localize.js';

export const WHATSAPP_NUMBER = '66617822979';
export const LINE_ADD_URL = 'https://line.me/R/ti/p/0617822979';

export function buildWhatsAppMessage(formValues, plan) {
  const planName = plan ? getPlanDisplayName(plan) : 'Not selected yet';

  return [
    'Hello, I would like to inquire about insurance via InsureMe @Thailand.',
    '',
    `Name: ${formValues.fullName}`,
    `Email: ${formValues.email}`,
    `Phone: ${formValues.phone}`,
    `Age: ${formValues.ageRange}`,
    `Plan: ${planName}`,
    `Coverage goal: ${formValues.coverageGoal}`,
    formValues.note ? `Note: ${formValues.note}` : '',
  ]
    .filter(Boolean)
    .join('\n');
}

export function buildWhatsAppUrl(formValues, plan) {
  const text = encodeURIComponent(buildWhatsAppMessage(formValues, plan));
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
