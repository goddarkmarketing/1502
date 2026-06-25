import th from './locales/th.js';

const locales = { th };

export const SUPPORTED_LOCALES = ['th'];

let currentLocale = 'th';

function resolveNested(obj, key) {
  return key.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function getLocale() {
  return currentLocale;
}

export function getIntlLocale() {
  return 'th-TH';
}

export function setLocale() {
  currentLocale = 'th';
  document.documentElement.lang = 'th';
}

export function initLocale() {
  setLocale();
}

export function t(key, params = {}) {
  let value = resolveNested(locales.th, key);
  if (typeof value !== 'string') {
    return key;
  }
  return Object.entries(params).reduce(
    (result, [paramKey, paramValue]) => result.replace(`{${paramKey}}`, String(paramValue)),
    value,
  );
}
