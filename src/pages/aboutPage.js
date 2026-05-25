import { partners } from '../data/mockData.js';
import { staticUrl } from '../app/router.js';
import { renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedCompanyHighlights, getLocalizedCompanyMilestones } from '../i18n/localize.js';

export function renderAboutPage() {
  const highlightImages = [
    'https://media.istockphoto.com/id/2199968250/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B8%88%E0%B8%B5%E0%B8%99%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%9E%E0%B8%B9%E0%B8%94%E0%B8%84%E0%B8%B8%E0%B8%A2%E0%B8%81%E0%B8%B1%E0%B8%9A%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%84%E0%B9%89%E0%B8%B2%E0%B8%82%E0%B8%AD%E0%B8%87%E0%80%80%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B9%83%E0%B8%99%E0%B8%A3%E0%B9%89%E0%B8%B2%E0%B8%99%E0%B8%81%E0%B8%B2%E0%B9%81%E0%B8%9F.jpg?s=612x612&w=0&k=20&c=94z7QEVrYSt04Bs3m45fk3EJUxDErDIkz2ohYQeeiNc=',
    'https://media.istockphoto.com/id/1490675795/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B9%83%E0%B8%99%E0%B8%8A%E0%B8%B8%E0%B8%94%E0%B8%AA%E0%B8%B9%E0%B8%97%E0%B9%83%E0%B8%99%E0%B8%AA%E0%B8%8D%E0%B8%B2%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%87%E0%B8%B2%E0%B8%99%E0%B8%82%E0%B8%AD%E0%B8%87%E0%80%80%E0%B9%80%E0%B8%82%E0%B8%B2%E0%B9%81%E0%B8%AA%E0%B8%94%E0%B8%87%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%A0%E0%B8%B1%E0%B8%A2%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%8A%E0%B8%B5%E0%B9%89%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%9B%E0%B8%B2%E0%B8%81%E0%B8%81%E0%B8%B2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9C%E0%B8%B9%E0%B9%89%E0%B8%96%E0%B8%B7%E0%B8%AD%E0%B8%81%E0%B8%A3%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3.jpg?s=612x612&w=0&k=20&c=dAjOWdkJRc4W1yCnqFZuhpsj9ReQRafW9--U4X-BqgI=',
    'https://media.istockphoto.com/id/2230688796/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%99%E0%B8%B1%E0%B8%81%E0%B8%98%E0%B8%B8%E0%B8%A3%E0%B8%81%E0%B8%B4%E0%B8%88%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B9%81%E0%B8%95%E0%B9%88%E0%B8%87%E0%B8%95%E0%B8%B1%E0%B8%A7%E0%B8%94%E0%B8%B5%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%A3%E0%B9%88%E0%B8%8D%E0%B8%B2%E0%B8%A3%E0%B8%A7%E0%B8%A2%E0%B8%9C%E0%B9%88%E0%B8%AD%E0%B8%99%E0%B8%84%E0%B8%A5%E0%B8%B2%E0%B8%A2%E0%B9%83%E0%B8%99%E0%B9%80%E0%B8%A5%E0%B8%99%E0%B8%88%E0%B8%4C%E0%B8%AA%E0%B8%99%E0%B8%B2%E0%B8%A1%E0%B8%9A%E0%B8%B4%E0%B8%99.jpg?s=612x612&w=0&k=20&c=L_avAY80byHNL3EwaAc2LntBgNiZDjjldWOgfY7enXA=',
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
