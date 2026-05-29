import { partners } from '../data/mockData.js';
import { staticUrl } from '../app/router.js';
import { renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedCompanyHighlights, getLocalizedCompanyMilestones } from '../i18n/localize.js';

export function renderAboutPage() {
  const highlightImages = [
    'https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?auto=format&fit=crop&w=1200&q=80',
    'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  ];
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: t('about.eyebrow'),
        title: t('about.title'),
        description: t('about.desc'),
      })}
    </section>

    <section class="section-white info-grid">
      ${getLocalizedCompanyHighlights()
        .map(
          (item, index) => `
            <article class="info-card">
              <div class="info-card-media" style="background-image: linear-gradient(180deg, rgba(15, 23, 42, 0.06), rgba(15, 23, 42, 0.18)), url('${highlightImages[index] ?? highlightImages[0]}');"></div>
              <div class="info-card-body">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </div>
            </article>
          `,
        )
        .join('')}
    </section>

    <section class="license-proof">
      <span>${t('about.licenseLabel')}</span>
      <strong>${t('about.licenseNumber')}</strong>
    </section>

    <section class="section-surface about-timeline-section">
      ${renderSectionHeader({
        title: t('about.timelineTitle'),
        description: t('about.timelineDesc'),
      })}
      <div class="milestone-list milestone-timeline">
        ${getLocalizedCompanyMilestones()
          .map(
            (item) => `
              <article class="milestone-item milestone-card">
                <div class="milestone-year-wrap">
                  <span class="milestone-year">${item.year}</span>
                </div>
                <div class="milestone-content">
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="section-white">
      ${renderSectionHeader({
        title: t('about.partnersTitle'),
        description: t('about.partnersDesc'),
      })}
      <div class="logo-grid">
        ${partners
          .map(
            (partner) => `
              <article class="logo-grid-item">
                <span class="partner-logo">
                  ${
                    partner.logo
                      ? `<img src="${staticUrl(partner.logo)}" alt="${partner.name} logo" class="partner-logo-image partner-logo-image-${partner.logoScale ?? 'standard'}" loading="lazy" decoding="async" />`
                      : `<span class="partner-logo-fallback">${partner.mark}</span>`
                  }
                </span>
                <strong>${partner.name}</strong>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
