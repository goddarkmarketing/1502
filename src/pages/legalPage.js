import { appUrl } from '../app/router.js';
import { renderSectionHeader } from '../components/ui.js';
import { getLocale } from '../i18n/index.js';
import en from '../i18n/locales/en.js';
import th from '../i18n/locales/th.js';
import zh from '../i18n/locales/zh.js';

const localeContent = { en, th, zh };

function getLegalContent(key) {
  return localeContent[getLocale()][key];
}

function renderLegalPage(content) {
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: content.eyebrow,
        title: content.title,
        description: content.intro,
      })}
    </section>

    <section class="section-white legal-page">
      <p class="legal-updated">${content.updated}</p>
      <div class="legal-sections">
        ${content.sections
          .map(
            (section) => `
              <article class="legal-section detail-panel">
                <h2>${section.heading}</h2>
                ${section.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
              </article>
            `,
          )
          .join('')}
      </div>
      <div class="cta-actions legal-page-actions">
        <a class="button button-secondary" href="${appUrl('/contact')}">${content.contactCta}</a>
        <a class="button button-primary" href="${appUrl('/')}">${content.backHome}</a>
      </div>
    </section>
  `;
}

export function renderPrivacyPage() {
  return renderLegalPage(getLegalContent('privacyPage'));
}

export function renderTermsPage() {
  return renderLegalPage(getLegalContent('termsPage'));
}
