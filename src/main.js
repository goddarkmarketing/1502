import { createApp } from './app/App.js';

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

createApp(document.querySelector('#app'));
