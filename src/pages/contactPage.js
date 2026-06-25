import { staticUrl } from '../app/router.js';
import { renderContactPageForm } from '../components/forms.js';
import { renderPageHero } from '../components/ui.js';
import { contactIconForTitle } from '../components/icons.js';
import { t } from '../i18n/index.js';
import { getLocalizedContactChannels } from '../i18n/localize.js';
import {
  EMAIL,
  FACEBOOK_URL,
  LINE_ADD_URL,
  PRIMARY_PHONE,
} from '../utils/contactLinks.js';

function getChannelHref(title) {
  const normalized = title.toLowerCase();

  if (normalized.includes('facebook')) {
    return FACEBOOK_URL;
  }

  if (normalized.includes('line')) {
    return LINE_ADD_URL;
  }

  if (normalized.includes('email') || title.includes('อีเมล') || title.includes('เมล')) {
    return `mailto:${EMAIL}`;
  }

  if (normalized.includes('call') || title.includes('โทร')) {
    return `tel:${PRIMARY_PHONE}`;
  }

  return '';
}

export function renderContactPage({ quoteDraft, quoteErrors, planOptions }) {
  return `
    ${renderPageHero({
      eyebrow: t('contactPage.eyebrow'),
      title: t('contactPage.title'),
      titleLine2: t('contactPage.titleLine2'),
      description: t('contactPage.desc'),
      backgroundImage: 'assets/contact-hero-background.png',
      backgroundVersion: '1',
    })}

    <section class="section-white contact-page-layout">
      <aside class="contact-page-sidebar">
        <div class="contact-page-card">
          <h2>${t('contactPage.channelsTitle')}</h2>
          <ul class="contact-page-channel-list">
            ${getLocalizedContactChannels()
              .map((item) => {
                const href = getChannelHref(item.title);
                const content = `
                  <span class="contact-page-channel-icon">${contactIconForTitle(item.title)}</span>
                  <span class="contact-page-channel-copy">
                    <strong>${item.title}</strong>
                    <span>${item.detail}</span>
                    <small>${item.note}</small>
                  </span>
                `;

                return href
                  ? `<li><a class="contact-page-channel-item" href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noreferrer"' : ''}>${content}</a></li>`
                  : `<li><div class="contact-page-channel-item">${content}</div></li>`;
              })
              .join('')}
          </ul>
        </div>

        <div class="contact-page-card contact-page-line-card">
          <div class="contact-page-line-copy">
            <h2>${t('contactPage.lineQrTitle')}</h2>
            <p>${t('contactPage.lineQrDesc')}</p>
            <div class="contact-page-line-actions">
              <a class="button button-primary" href="${LINE_ADD_URL}" target="_blank" rel="noreferrer">${t('contactPage.openLine')}</a>
              <a class="button button-secondary" href="${FACEBOOK_URL}" target="_blank" rel="noreferrer">${t('contactPage.openFacebook')}</a>
            </div>
          </div>
          <div class="contact-page-line-qr">
            <img
              src="${staticUrl('assets/contact/line-qr.png')}?v=2"
              alt="${t('contactPage.lineQrAlt')}"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </aside>

      <div class="contact-page-main">
        <div class="contact-page-card contact-page-form-card">
          <div class="contact-page-form-head">
            <h2>${t('contactPage.formTitle')}</h2>
            <p>${t('contactPage.formDesc')}</p>
          </div>
          ${renderContactPageForm({
            draft: quoteDraft,
            errors: quoteErrors,
            planOptions,
          })}
        </div>
      </div>
    </section>
  `;
}
