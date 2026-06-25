import { featuredHospitals, hospitalNetwork, hospitalNetworkPdf } from '../data/hospitalNetwork.js';
import { staticUrl } from '../app/router.js';
import { t } from '../i18n/index.js';

export function renderHospitalNetworkSection({
  showHeader = true,
  showSlider = true,
  showGrid = true,
  showCta = true,
  className = '',
} = {}) {
  const sectionClass = ['hospital-network-section', className].filter(Boolean).join(' ');

  return `
    <section class="${sectionClass}">
      ${
        showHeader
          ? `
        <p class="partner-intro">${t('home.partnerIntro')}</p>
        <h2 class="partner-title">${t('home.partnerTitle')}</h2>
      `
          : ''
      }
      <p class="hospital-network-count">${t('home.hospitalCount', { count: hospitalNetwork.length })}</p>
      ${
        showSlider
          ? `
      <div class="partner-slider-shell">
        <div class="partner-strip">
          ${[...featuredHospitals, ...featuredHospitals]
            .map(
              (hospital) => `
                <article class="partner-card">
                  <span class="partner-logo">
                    ${
                      hospital.logo
                        ? `<img src="${staticUrl(hospital.logo)}" alt="${hospital.nameTh} logo" class="partner-logo-image partner-logo-image-${hospital.logoScale ?? 'standard'}" loading="lazy" decoding="async" />`
                        : `<span class="partner-logo-fallback">${hospital.mark}</span>`
                    }
                  </span>
                  <strong>${hospital.nameTh}</strong>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
      `
          : ''
      }
      ${
        showGrid
          ? `
      <div class="hospital-network-grid" role="list">
        ${hospitalNetwork
          .map(
            (hospital) => `
              <span class="hospital-network-item" role="listitem">${hospital.nameTh}</span>
            `,
          )
          .join('')}
      </div>
      `
          : ''
      }
      ${
        showCta
          ? `
      <div class="home-articles-cta hospital-network-cta">
        <a
          class="button button-secondary"
          href="${staticUrl(`assets/${hospitalNetworkPdf}`)}"
          target="_blank"
          rel="noopener noreferrer"
        >${t('home.viewAllHospitals')}</a>
      </div>
      `
          : ''
      }
    </section>
  `;
}
