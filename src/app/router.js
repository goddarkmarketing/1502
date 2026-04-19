const BASE_PATH = '/portfolio1';

function stripBasePath(pathname) {
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

  if (path === '/articles') {
    return { name: 'articles', params: {} };
  }

  if (segments[0] === 'articles' && segments[1]) {
    return { name: 'article-detail', params: { slug: segments[1] } };
  }

  if (segments[0] === 'categories' && segments[1]) {
    return { name: 'category-detail', params: { slug: segments[1] } };
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
  return url.origin === window.location.origin && url.pathname.startsWith(BASE_PATH);
}

export function appPathFromUrl(url) {
  const appPath = normalizePath(url.pathname);
  return `${appPath}${url.search || ''}`;
}
