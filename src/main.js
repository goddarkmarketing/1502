import { createApp } from './app/App.js';
import { initLocale } from './i18n/index.js';

const GITHUB_PAGES_PATH_KEY = 'gh-pages-spa-path';

function restoreGithubPagesPath() {
  const pendingPath = window.sessionStorage.getItem(GITHUB_PAGES_PATH_KEY);

  if (!pendingPath) {
    return;
  }

  window.sessionStorage.removeItem(GITHUB_PAGES_PATH_KEY);
  window.history.replaceState({}, '', pendingPath);
}

restoreGithubPagesPath();

try {
  const storedLocale = window.localStorage.getItem('curated-coverage-locale');
  if (storedLocale) {
    initLocale(JSON.parse(storedLocale));
  }
} catch {
  /* ignore */
}

createApp(document.querySelector('#app'));
