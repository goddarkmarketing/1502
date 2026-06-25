import { appUrl } from '../app/router.js';
import { renderPageHero, renderSectionHeader } from '../components/ui.js';
import { icon } from '../components/icons.js';
import { t } from '../i18n/index.js';
import { getLocalizedCompanyHighlights, getLocalizedCompanyMilestones } from '../i18n/localize.js';

const HIGHLIGHT_ICONS = ['shieldCheck', 'layers', 'messagesSquare'];

const ABOUT_STATS = [
  { valueKey: 'statAssetsValue', labelKey: 'statAssetsLabel' },
  { valueKey: 'statClaimsValue', labelKey: 'statClaimsLabel' },
  { valueKey: 'statCountriesValue', labelKey: 'statCountriesLabel' },
  { valueKey: 'statProductsValue', labelKey: 'statProductsLabel' },
];

export function renderAboutPage() {
  return `
    ${renderPageHero({
      eyebrow: t('about.eyebrow'),
      title: t('about.title'),
      description: t('about.desc'),
      titleId: 'about-hero-title',
      backgroundImage: 'assets/about-hero-background.png',
      backgroundVersion: '1',
    })}

    <section class="about-stats" aria-label="${t('about.statsLabel')}">
      ${ABOUT_STATS.map(
        (stat) => `
          <article class="about-stat-card">
            <strong class="about-stat-value">${t(`about.${stat.valueKey}`)}</strong>
            <span class="about-stat-label">${t(`about.${stat.labelKey}`)}</span>
          </article>
        `,
      ).join('')}
    </section>

    <section class="about-section">
      ${renderSectionHeader({
        title: t('about.highlightsTitle'),
        description: t('about.highlightsDesc'),
      })}
      <div class="about-highlight-grid">
        ${getLocalizedCompanyHighlights()
          .map(
            (item, index) => `
              <article class="about-highlight-card">
                <span class="about-highlight-icon" aria-hidden="true">
                  ${icon(HIGHLIGHT_ICONS[index] ?? 'shieldCheck', { size: 22, strokeWidth: 2.1 })}
                </span>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>

    <section class="about-credential">
      <div class="about-credential-main">
        <span class="about-credential-icon" aria-hidden="true">
          ${icon('badgeCheck', { size: 24, strokeWidth: 2.1 })}
        </span>
        <div>
          <span class="about-credential-label">${t('about.licenseLabel')}</span>
          <strong class="about-credential-number">${t('about.licenseNumber')}</strong>
        </div>
      </div>
      <div class="about-credential-actions">
        <a class="button button-primary" href="${appUrl('/plans')}">
          ${icon('shieldCheck', { size: 18, strokeWidth: 2.2 })}
          <span>${t('nav.plans')}</span>
        </a>
        <a class="button button-secondary" href="${appUrl('/contact')}">
          ${icon('messageCircle', { size: 18, strokeWidth: 2.2 })}
          <span>${t('nav.contact')}</span>
        </a>
        <a class="button button-secondary" href="https://www.chubb.com/" target="_blank" rel="noreferrer">
          ${icon('arrowUpRight', { size: 18, strokeWidth: 2.2 })}
          <span>${t('about.chubbLinkLabel')}</span>
        </a>
      </div>
    </section>

    <section class="about-section about-timeline-section">
      ${renderSectionHeader({
        title: t('about.timelineTitle'),
        description: t('about.timelineDesc'),
      })}
      <div class="about-timeline">
        ${getLocalizedCompanyMilestones()
          .map(
            (item) => `
              <article class="about-timeline-item">
                <div class="about-timeline-marker">
                  <span class="about-timeline-year">${item.year}</span>
                </div>
                <div class="about-timeline-card">
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
