import th from './locales/th.js';
import en from './locales/en.js';
import zh from './locales/zh.js';

const locales = { th, en, zh };

export const SUPPORTED_LOCALES = ['th', 'en', 'zh'];

export const LOCALE_LABELS = {
  th: 'TH',
  en: 'EN',
  zh: '中文',
};

const STORAGE_KEY = 'curated-coverage-locale';

let currentLocale = 'th';

function resolveNested(obj, key) {
  return key.split('.').reduce((acc, part) => acc?.[part], obj);
}

export function getLocale() {
  return currentLocale;
}

export function getIntlLocale() {
  if (currentLocale === 'en') return 'en-US';
  if (currentLocale === 'zh') return 'zh-CN';
  return 'th-TH';
}

export function setLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) {
    return;
  }
  currentLocale = locale;
  document.documentElement.lang = locale === 'zh' ? 'zh-CN' : locale;
}

export function initLocale(stored) {
  if (stored && SUPPORTED_LOCALES.includes(stored)) {
    setLocale(stored);
  } else {
    document.documentElement.lang = currentLocale === 'zh' ? 'zh-CN' : currentLocale;
  }
}

export function t(key, params = {}) {
  let value = resolveNested(locales[currentLocale], key);
  if (value === undefined) {
    value = resolveNested(locales.th, key);
  }
  if (typeof value !== 'string') {
    return key;
  }
  return Object.entries(params).reduce(
    (result, [paramKey, paramValue]) => result.replace(`{${paramKey}}`, String(paramValue)),
    value,
  );
}
