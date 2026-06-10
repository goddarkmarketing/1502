/** โฟลเดอร์โปรเจคบนเซิร์ฟเวอร์ (เช่น /portfolio3) — คำนวณจากตำแหน่งไฟล์นี้ ไม่ต้องแก้มือเมื่อย้ายโฟลเดอร์ */
function computeBasePath() {
  try {
    const root = new URL('../..', import.meta.url);
    let p = decodeURIComponent(root.pathname);
    if (p.endsWith('/')) p = p.slice(0, -1);
    return p;
  } catch {
    return '';
  }
}

const BASE_PATH = computeBasePath();

function stripBasePath(pathname) {
  if (!BASE_PATH) {
    return pathname || '/';
  }
  if (pathname === BASE_PATH || pathname === `${BASE_PATH}/`) {
    return '/';
  }
  if (pathname.startsWith(`${BASE_PATH}/`)) {
    return pathname.slice(BASE_PATH.length) || '/';
  }
  return pathname || '/';
}

function normalizePath(pathname) {
  const cleaned = stripBasePath(pathname.split('?')[0] || '/');
  return cleaned.startsWith('/') ? cleaned : `/${cleaned}`;
}

export function appUrl(path = '/') {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  return normalized === '/' ? `${BASE_PATH}/` : `${BASE_PATH}${normalized}`;
}

/** Static asset path (e.g. PDF under /PDF/) — each path segment is URL-encoded. */
export function staticUrl(relativePath) {
  const clean = String(relativePath).replace(/^\/+/, '');
  if (!clean) {
    return `${BASE_PATH}/`;
  }
  return `${BASE_PATH}/${clean.split('/').map(encodeURIComponent).join('/')}`;
}

export function getCurrentPath() {
  return normalizePath(window.location.pathname);
}

export function getRoute() {
  const path = getCurrentPath();
  const segments = path.split('/').filter(Boolean);

  if (path === '/') {
    return { name: 'home', params: {} };
  }

  if (path === '/plans') {
    return { name: 'plans', params: {} };
  }

  if (path === '/compare') {
    return { name: 'compare', params: {} };
  }

  if (segments[0] === 'plans' && segments[1]) {
    return { name: 'plan-detail', params: { slug: segments[1] } };
  }

  if (path === '/about') {
    return { name: 'about', params: {} };
  }

  if (path === '/contact') {
    return { name: 'contact', params: {} };
  }

  if (path === '/faq') {
    return { name: 'faq', params: {} };
  }

  if (path === '/privacy') {
    return { name: 'privacy', params: {} };
  }

  if (path === '/terms') {
    return { name: 'terms', params: {} };
  }

  if (path === '/articles') {
    return { name: 'articles', params: {} };
  }

  if (segments[0] === 'articles' && segments[1]) {
    return { name: 'article-detail', params: { slug: segments[1] } };
  }

  if (segments[0] === 'categories' && segments[1]) {
    return { name: 'category-detail', params: { slug: segments[1] } };
  }

  if (segments[0] === 'insurance' && segments[1]) {
    return { name: 'insurance-category-detail', params: { slug: segments[1] } };
  }

  return { name: 'not-found', params: {} };
}

export function navigate(path) {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  const [pathname, search = ''] = normalized.split('?');
  const nextUrl = `${appUrl(pathname)}${search ? `?${search}` : ''}`;
  const currentUrl = `${window.location.pathname}${window.location.search}`;

  if (currentUrl === nextUrl) {
    window.dispatchEvent(new PopStateEvent('popstate'));
    return;
  }

  window.history.pushState({}, '', nextUrl);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

export function migrateLegacyHashRoute() {
  const hash = window.location.hash;

  if (hash.startsWith('#/')) {
    const nextPath = hash.slice(1);
    const [pathname, search = ''] = nextPath.split('?');
    const nextUrl = `${appUrl(pathname)}${search ? `?${search}` : ''}`;
    window.history.replaceState({}, '', nextUrl);
    return true;
  }

  if (hash === '#') {
    window.history.replaceState({}, '', appUrl('/'));
    return true;
  }

  return false;
}

export function isInternalAppUrl(url) {
  if (url.origin !== window.location.origin) return false;
  if (!BASE_PATH) return true;
  return url.pathname === BASE_PATH || url.pathname.startsWith(`${BASE_PATH}/`);
}

export function appPathFromUrl(url) {
  const appPath = normalizePath(url.pathname);
  return `${appPath}${url.search || ''}`;
}
