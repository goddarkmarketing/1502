import { renderQuoteModal } from './forms.js';
import { appUrl, getRoute, staticUrl } from '../app/router.js';
import { t } from '../i18n/index.js';
import { getPlanDisplayName } from '../i18n/localize.js';
import { icon } from './icons.js';
import {
  EMAIL,
  FACEBOOK_URL,
  LINE_ADD_URL,
  LINE_ID,
  PRIMARY_PHONE,
  PRIMARY_PHONE_DISPLAY,
} from '../utils/contactLinks.js';

function renderFloatingContact() {
  const items = [
    {
      label: 'LINE',
      href: LINE_ADD_URL,
      className: 'line',
      icon: icon('messageCircle', { size: 24, strokeWidth: 1.8 }),
    },
    {
      label: 'Facebook',
      href: FACEBOOK_URL,
      className: 'facebook',
      icon: icon('share2', { size: 24, strokeWidth: 1.8 }),
    },
    {
      label: t('contact.email'),
      href: `mailto:${EMAIL}`,
      className: 'email',
      icon: icon('mail', { size: 24, strokeWidth: 1.8 }),
    },
    {
      label: t('contact.phone'),
      href: `tel:${PRIMARY_PHONE}`,
      className: 'phone',
      icon: icon('phone', { size: 24, strokeWidth: 1.8 }),
    },
  ];

  return `
    <details class="floating-contact">
      <summary class="floating-contact-trigger" aria-label="${t('contact.channels')}">
        <span class="floating-contact-ring"></span>
        ${icon('messagesSquare', { size: 24, strokeWidth: 1.9 })}
      </summary>
      <div class="floating-contact-menu">
        ${items
          .map(
            (item) => `
              <a class="floating-contact-item floating-contact-item-${item.className}" href="${item.href}" target="_blank" rel="noreferrer">
                <span class="floating-contact-icon">${item.icon}</span>
                <span class="floating-contact-label">${item.label}</span>
              </a>
            `,
          )
          .join('')}
      </div>
    </details>
  `;
}

function renderFloatingCompareBar(state, plans = []) {
  if (!state.compareIds?.length) {
    return '';
  }

  const comparePlans = state.compareIds
    .map((id) => plans.find((plan) => plan.id === id))
    .filter(Boolean);

  if (!comparePlans.length) {
    return '';
  }

  return `
    <aside class="floating-compare-bar" aria-live="polite">
      <div class="floating-compare-summary">
        <span>${t('compareBar.count', { count: comparePlans.length })}</span>
        <div class="floating-compare-items">
          ${comparePlans
            .map(
              (plan) => `
                <button class="floating-compare-chip" type="button" data-compare-remove="${plan.id}" aria-label="${t('compareBar.remove', { plan: getPlanDisplayName(plan) })}">
                  <span>${getPlanDisplayName(plan)}</span>
                  <strong aria-hidden="true">${icon('x', { size: 14, strokeWidth: 2.5 })}</strong>
                </button>
              `,
            )
            .join('')}
        </div>
      </div>
      <div class="floating-compare-actions">
        <button class="button button-primary floating-compare-view" type="button" data-compare-view="true">${t('compareBar.view')}</button>
        <button class="button button-secondary floating-compare-clear" type="button" data-compare-clear="true">${t('compareBar.clear')}</button>
      </div>
    </aside>
  `;
}

const NAV_ROUTE_GROUPS = {
  home: ['home'],
  plans: ['plans', 'plan-detail', 'compare', 'category-detail', 'insurance-category-detail'],
  about: ['about', 'hospitals'],
  articles: ['articles', 'article-detail'],
  faq: ['faq'],
  contact: ['contact'],
};

function isNavActive(navKey) {
  return NAV_ROUTE_GROUPS[navKey]?.includes(getRoute().name) ?? false;
}

function renderNavLink(href, label, navKey) {
  const active = isNavActive(navKey);
  return `<a href="${href}" class="nav-link${active ? ' nav-link-active' : ''}"${active ? ' aria-current="page"' : ''}>${label}</a>`;
}

function renderContactNavCta() {
  const active = isNavActive('contact');
  return `<a href="${appUrl('/contact')}" class="button button-primary nav-contact-cta${active ? ' nav-contact-cta-active' : ''}"${active ? ' aria-current="page"' : ''}>${t('nav.contact')}</a>`;
}

function renderAboutNav() {
  const route = getRoute();
  const aboutCurrent = route.name === 'about';
  const hospitalsCurrent = route.name === 'hospitals';

  return `
    <div class="nav-dropdown${hospitalsCurrent ? ' nav-dropdown-active' : ''}">
      <a
        href="${appUrl('/about')}"
        class="nav-link nav-dropdown-trigger${aboutCurrent ? ' nav-link-active' : ''}"
        ${aboutCurrent ? 'aria-current="page"' : ''}
      >
        <span>${t('nav.about')}</span>
        <span class="nav-dropdown-chevron" aria-hidden="true">${icon('chevronDown', { size: 16, strokeWidth: 2.2 })}</span>
      </a>
      <div class="nav-dropdown-menu" role="menu" aria-label="${t('nav.aboutMenu')}">
        <a
          href="${appUrl('/hospitals')}"
          class="nav-dropdown-link${hospitalsCurrent ? ' nav-dropdown-link-active' : ''}"
          role="menuitem"
          ${hospitalsCurrent ? 'aria-current="page"' : ''}
        >${t('nav.hospitals')}</a>
      </div>
    </div>
  `;
}

export function renderHeader(state) {
  return `
    <header class="site-header-wrap">
      <div class="site-header">
        <div class="brand-lockup">
          <a href="${appUrl('/')}" class="brand-mark" aria-label="InsureWithCat">
            <img src="${staticUrl('assets/logos/insurewithcat.png')}?v=1" alt="InsureWithCat" />
          </a>
        </div>
        <nav class="site-nav ${state.mobileMenuOpen ? 'site-nav-open' : ''}">
          ${renderNavLink(appUrl('/'), t('nav.home'), 'home')}
          ${renderNavLink(appUrl('/plans'), t('nav.plans'), 'plans')}
          ${renderAboutNav()}
          ${renderNavLink(appUrl('/articles'), t('nav.articles'), 'articles')}
          ${renderNavLink(appUrl('/faq'), t('nav.faq'), 'faq')}
          ${renderContactNavCta()}
        </nav>
        <div class="header-actions">
          <button class="mobile-toggle" type="button" aria-label="${t('nav.openMenu')}">${icon('menu', { size: 22, strokeWidth: 2 })}</button>
        </div>
      </div>
    </header>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer-wrap">
      <div class="site-footer">
        <div class="footer-main">
          <div class="footer-brand-column">
            <a href="${appUrl('/')}" class="footer-brand-mark" aria-label="InsureMe @Thailand">
              <img src="${staticUrl('assets/logos/insurewithcat.png')}?v=1" alt="InsureWithCat" width="220" height="48" />
            </a>
            <p class="footer-tagline">${t('footer.tagline')}</p>
            <ul class="footer-contact-list">
              <li>
                <a class="footer-contact-item" href="mailto:${EMAIL}">
                  ${icon('mail', { size: 17, strokeWidth: 2 })}
                  <span>${EMAIL}</span>
                </a>
              </li>
              <li>
                <a class="footer-contact-item" href="${LINE_ADD_URL}" target="_blank" rel="noreferrer">
                  ${icon('messageCircle', { size: 17, strokeWidth: 2 })}
                  <span>LINE: ${LINE_ID}</span>
                </a>
              </li>
              <li>
                <a class="footer-contact-item" href="${FACEBOOK_URL}" target="_blank" rel="noreferrer">
                  ${icon('share2', { size: 17, strokeWidth: 2 })}
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a class="footer-contact-item" href="tel:${PRIMARY_PHONE}">
                  ${icon('phone', { size: 17, strokeWidth: 2 })}
                  <span>${PRIMARY_PHONE_DISPLAY}</span>
                </a>
              </li>
              <li>
                <span class="footer-contact-item footer-contact-item-static">
                  ${icon('clock', { size: 17, strokeWidth: 2 })}
                  <span>${t('footer.hours')}</span>
                </span>
              </li>
            </ul>
          </div>

          <div class="footer-columns">
            <div class="footer-link-column">
              <span class="footer-heading">${t('footer.mainMenu')}</span>
              <a href="${appUrl('/')}">${t('nav.home')}</a>
              <a href="${appUrl('/plans')}">${t('footer.allPlans')}</a>
              <a href="${appUrl('/about')}">${t('nav.about')}</a>
              <a href="${appUrl('/hospitals')}">${t('nav.hospitals')}</a>
              <a href="${appUrl('/faq')}">${t('footer.faq')}</a>
              <a href="${appUrl('/articles')}">${t('nav.articles')}</a>
              <a href="${appUrl('/contact')}">${t('nav.contact')}</a>
            </div>

            <div class="footer-link-column">
              <span class="footer-heading">${t('footer.categories')}</span>
              <a href="${appUrl('/plans')}?category=${encodeURIComponent('ประกันชีวิต')}">${t('footer.life')}</a>
              <a href="${appUrl('/plans')}?category=${encodeURIComponent('สุขภาพ')}">${t('footer.health')}</a>
              <a href="${appUrl('/plans')}?category=${encodeURIComponent('โรคร้ายแรง')}">${t('footer.criticalIllness')}</a>
              <a href="${appUrl('/plans')}?category=${encodeURIComponent('ลดหย่อนภาษี')}">${t('footer.taxDeduction')}</a>
              <a href="${appUrl('/plans')}?category=${encodeURIComponent('วางแผนเกษียณ')}">${t('footer.retirement')}</a>
              <a href="${appUrl('/plans')}?category=${encodeURIComponent('ประกันมรดก')}">${t('footer.estate')}</a>
            </div>

            <div class="footer-link-column footer-info-column">
              <span class="footer-heading">${t('footer.moreInfo')}</span>
              <span class="footer-info-line">
                ${icon('building2', { size: 16, strokeWidth: 2 })}
                <span>${t('footer.hq')}</span>
              </span>
              <span class="footer-info-line">
                ${icon('badgeCheck', { size: 16, strokeWidth: 2 })}
                <span>${t('footer.license')}</span>
              </span>
              <span class="footer-info-line">${t('footer.support')}</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <span class="footer-copyright">© ${year} InsureMe @Thailand. ${t('footer.rights')}</span>
          <div class="footer-legal-links">
            <a href="${appUrl('/privacy')}">${t('footer.privacy')}</a>
            <a href="${appUrl('/terms')}">${t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}

export function renderShell({ state, content, planOptions, quoteDraft, quoteErrors, showCompareBar = true }) {
  return `
    <div class="app-shell">
      ${renderHeader(state)}
      <main>${content}</main>
      ${renderFooter()}
      ${renderFloatingContact()}
      ${renderQuoteModal({
        open: state.quoteModalOpen,
        planOptions,
        draft: quoteDraft,
        errors: quoteErrors,
      })}
      ${showCompareBar ? renderFloatingCompareBar(state, planOptions) : ''}
      ${state.lastToast ? `<div class="toast">${state.lastToast}</div>` : ''}
    </div>
  `;
}
