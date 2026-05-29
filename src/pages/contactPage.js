import { appUrl } from '../app/router.js';
import { renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedContactChannels, getLocalizedOfficeLocations } from '../i18n/localize.js';

const googleMapsUrl = 'https://maps.app.goo.gl/2GkiD3bE3g7Z4cHeA?g_st=al';
const googleMapsEmbedUrl = 'https://maps.google.com/maps?q=7.886,98.395&z=17&output=embed';

function renderContactIcon(title) {
  const iconClass = title.includes('โทร') || title.toLowerCase().includes('call')
    ? 'phone'
    : title.includes('เมล') || title.includes('อีเมล') || title.toLowerCase().includes('email')
      ? 'mail'
      : 'line';

  if (iconClass === 'phone') {
    return `
      <span class="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7.2 4.5h2.2l1.2 4.1-1.8 1.8a14.7 14.7 0 0 0 4.8 4.8l1.8-1.8 4.1 1.2v2.2c0 .8-.6 1.5-1.4 1.6-.5 0-1 .1-1.4.1-7 0-12.7-5.7-12.7-12.7 0-.5 0-1 .1-1.4.1-.8.8-1.4 1.6-1.4Z" />
        </svg>
      </span>
    `;
  }

  if (iconClass === 'mail') {
    return `
      <span class="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
          <path d="m5.5 8 6.5 5 6.5-5" />
        </svg>
      </span>
    `;
  }

  return `
    <span class="contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 4.5c4.7 0 8.5 3.1 8.5 7 0 3.3-2.7 6-6.4 6.8l-3.7 1.7.8-2.9c-4-.2-7.2-3.1-7.2-6.9 0-3.9 3.8-7 8.5-7Z" />
        <path d="M8.5 11.5h7" />
        <path d="M8.5 14.5h4.5" />
      </svg>
    </span>
  `;
}

export function renderContactPage() {
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: t('contactPage.eyebrow'),
        title: t('contactPage.title'),
        description: t('contactPage.desc'),
      })}
    </section>

    <section class="contact-stack">
      <div class="contact-channel-list">
        ${getLocalizedContactChannels()
          .map(
            (item) => `
              <article class="detail-panel contact-channel-card">
                <div class="contact-channel-label">
                  ${renderContactIcon(item.title)}
                  <h3>${item.title}</h3>
                </div>
                <div class="contact-channel-body">
                  <strong>${item.detail}</strong>
                  <p>${item.note}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>

      <div class="detail-panel contact-office-panel">
        <h2>${t('contactPage.officeTitle')}</h2>
        <div class="location-list">
          ${getLocalizedOfficeLocations()
            .map(
              (item) => `
                <article class="location-item">
                  <h3>${item.name}</h3>
                  <p>${item.address}</p>
                  <span>${item.hours}</span>
                </article>
              `,
            )
            .join('')}
        </div>
        <div class="license-proof license-proof-compact">
          <span>${t('contactPage.licenseLabel')}</span>
          <strong>${t('contactPage.licenseNumber')}</strong>
        </div>
        <div class="cta-actions">
          <button class="button button-primary" type="button" data-open-quote="true">${t('contactPage.submitRequest')}</button>
          <a class="button button-secondary" href="${appUrl('/faq')}">${t('contactPage.viewFaq')}</a>
        </div>
      </div>

      <div class="detail-panel map-panel contact-map-panel">
        <h2>${t('contactPage.mapTitle')}</h2>
        <div class="map-embed-shell">
          <iframe
            title="Phuket Wealth Map"
            src="${googleMapsEmbedUrl}"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p>${t('contactPage.mapDesc')}</p>
        <a class="button button-primary" href="${googleMapsUrl}" target="_blank" rel="noreferrer">${t('contactPage.openMap')}</a>
      </div>
    </section>
  `;
}
