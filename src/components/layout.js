import { renderQuoteModal } from './forms.js';
import { appUrl, staticUrl } from '../app/router.js';
import { LOCALE_LABELS, SUPPORTED_LOCALES, t } from '../i18n/index.js';
import { getPlanDisplayName } from '../i18n/localize.js';

function renderFloatingContact() {
  const items = [
    {
      label: 'LINE',
      href: 'https://line.me/R/ti/p/0617822979',
      className: 'line',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="3" width="19" height="16" rx="8" fill="currentColor"/>
          <path d="M9.5 18.2 8.7 21l3-2h1.9c4.4 0 7.9-3 7.9-7s-3.5-7-7.9-7H10.4C6 5 2.5 8 2.5 12c0 3 2 5.6 5 6.6Z" fill="currentColor"/>
          <text x="12" y="13.6" text-anchor="middle" font-size="5.2" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif">LINE</text>
        </svg>
      `,
    },
    {
      label: 'WhatsApp',
      href: 'https://wa.me/66617822979',
      className: 'whatsapp',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M12 2.5a9.3 9.3 0 0 0-8 14l-1 4.2 4.3-1a9.3 9.3 0 1 0 4.7-17.2Zm0 2a7.3 7.3 0 0 1 6.2 11.2l-.3.4.6 1.8-1.9-.5-.4.2A7.3 7.3 0 0 1 5 11.8a7.3 7.3 0 0 1 7-7.3Zm-3.1 3.7c-.2 0-.5.1-.7.4-.3.3-.9.9-.9 2.1s.9 2.4 1 2.5c.1.2 1.8 2.8 4.4 3.8 2.2.9 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.2-.5-.3l-1.7-.8c-.2-.1-.4-.1-.6.2l-.7.9c-.1.2-.3.2-.5.1a6 6 0 0 1-1.8-1.1 6.6 6.6 0 0 1-1.2-1.6c-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2.1-.3 0-.5l-.8-1.8c-.2-.4-.4-.4-.6-.4h-.5Z"/>
        </svg>
      `,
    },
    {
      label: t('contact.email'),
      href: 'mailto:phuketwealth@gmail.com',
      className: 'email',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm-1 1.3 9 6 9-6"/>
        </svg>
      `,
    },
    {
      label: t('contact.phone'),
      href: 'tel:0617822979',
      className: 'phone',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M7.2 4.5h2.2l1.2 4.1-1.8 1.8a14.7 14.7 0 0 0 4.8 4.8l1.8-1.8 4.1 1.2v2.2c0 .8-.6 1.5-1.4 1.6-.5 0-1 .1-1.4.1-7 0-12.7-5.7-12.7-12.7 0-.5 0-1 .1-1.4.1-.8.8-1.4 1.6-1.4Z"/>
        </svg>
      `,
    },
  ];

  return `
    <details class="floating-contact">
      <summary class="floating-contact-trigger" aria-label="${t('contact.channels')}">
        <span class="floating-contact-ring"></span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M12 4.5c4.7 0 8.5 3.1 8.5 7 0 3.3-2.7 6-6.4 6.8l-3.7 1.7.8-2.9c-4-.2-7.2-3.1-7.2-6.9 0-3.9 3.8-7 8.5-7Z"/>
          <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" d="M8.5 11.5h7M8.5 14.5h4.5"/>
        </svg>
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

function renderLangSwitcher(state) {
  return `
    <div class="lang-switcher" role="group" aria-label="${t('lang.label')}">
      ${SUPPORTED_LOCALES.map(
        (locale) => `
          <button
            type="button"
            class="lang-switcher-btn ${state.locale === locale ? 'lang-switcher-btn-active' : ''}"
            data-locale="${locale}"
            aria-pressed="${state.locale === locale ? 'true' : 'false'}"
          >${LOCALE_LABELS[locale]}</button>
        `,
      ).join('')}
    </div>
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
                  <strong aria-hidden="true">×</strong>
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

export function renderHeader(state) {
  return `
    <header class="site-header-wrap">
      <div class="site-header">
        <div class="brand-lockup">
          <a href="${appUrl('/')}" class="brand-mark" aria-label="InsureMe @Thailand">
            <img src="${staticUrl('assets/logos/insureme-thailand.png')}?v=2" alt="InsureMe @Thailand" />
          </a>
        </div>
        <nav class="site-nav ${state.mobileMenuOpen ? 'site-nav-open' : ''}">
          <a href="${appUrl('/')}" class="nav-link">${t('nav.home')}</a>
          <a href="${appUrl('/plans')}" class="nav-link">${t('nav.plans')}</a>
          <a href="${appUrl('/about')}" class="nav-link">${t('nav.about')}</a>
          <a href="${appUrl('/articles')}" class="nav-link">${t('nav.articles')}</a>
          <a href="${appUrl('/contact')}" class="nav-link">${t('nav.contact')}</a>
          ${renderLangSwitcher(state)}
          <button class="button button-primary nav-cta" type="button" data-open-quote="true">${t('nav.submitRequest')}</button>
        </nav>
        <div class="header-actions">
          ${renderLangSwitcher(state)}
          <button class="mobile-toggle" type="button" aria-label="${t('nav.openMenu')}">☰</button>
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
        <div class="footer-brand-column">
          <strong>InsureMe @Thailand</strong>
          <p>${t('footer.tagline')}</p>
          <div class="footer-contact-list">
            <span>${t('footer.email')}: phuketwealth@gmail.com</span>
            <span>WhatsApp / LINE: 0617822979</span>
            <span>${t('footer.phone')}: 0617822979</span>
            <span>${t('footer.hours')}</span>
          </div>
        </div>

        <div class="footer-link-column">
          <span class="footer-heading">${t('footer.mainMenu')}</span>
          <a href="${appUrl('/')}">${t('nav.home')}</a>
          <a href="${appUrl('/plans')}">${t('footer.allPlans')}</a>
          <a href="${appUrl('/about')}">${t('nav.about')}</a>
          <a href="${appUrl('/faq')}">${t('footer.faq')}</a>
          <a href="${appUrl('/articles')}">${t('nav.articles')}</a>
          <a href="${appUrl('/contact')}">${t('nav.contact')}</a>
        </div>

        <div class="footer-link-column">
          <span class="footer-heading">${t('footer.categories')}</span>
          <a href="${appUrl('/plans')}?category=สุขภาพ">${t('footer.health')}</a>
          <a href="${appUrl('/plans')}?category=ชีวิต">${t('footer.life')}</a>
          <a href="${appUrl('/plans')}?category=รถยนต์">${t('footer.car')}</a>
          <a href="${appUrl('/plans')}?category=เดินทาง">${t('footer.travel')}</a>
        </div>

        <div class="footer-link-column">
          <span class="footer-heading">${t('footer.moreInfo')}</span>
          <span>${t('footer.hq')}</span>
          <span>${t('footer.license')}</span>
          <span>${t('footer.support')}</span>
        </div>

        <div class="footer-bottom">
          <span>© ${year} InsureMe @Thailand. ${t('footer.rights')}</span>
          <a href="${appUrl('/privacy')}">${t('footer.privacy')}</a>
          <a href="${appUrl('/terms')}">${t('footer.terms')}</a>
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
