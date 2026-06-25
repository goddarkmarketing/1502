import { appUrl, staticUrl } from '../app/router.js';
import { renderEmptyState, renderPageHero } from '../components/ui.js';
import { renderDetailListItems, renderEyebrow } from '../components/icons.js';
import { t } from '../i18n/index.js';
import {
  getLocalizedInsuranceCategory,
  getLocalizedInsuranceCategories,
} from '../i18n/localize.js';

export function renderInsuranceCategoryDetailPage(slug) {
  const category = getLocalizedInsuranceCategory(slug);

  if (!category) {
    return renderEmptyState({
      title: t('insuranceDetail.notFoundTitle'),
      description: t('insuranceDetail.notFoundDescription'),
      actionLabel: t('state.backHome'),
      actionHref: appUrl('/'),
    });
  }

  const relatedCategories = getLocalizedInsuranceCategories().filter((item) => item.key !== category.key);

  return `
    ${renderPageHero({
      eyebrow: category.label,
      title: category.title,
      description: category.detailLead,
      actions: `
        <button class="button button-primary" type="button" data-open-quote="true">${category.primaryAction}</button>
        <a class="button button-secondary" href="${appUrl('/')}#insurance-categories">${t('insuranceDetail.viewOtherCategories')}</a>
      `,
    })}

    <section class="insurance-detail-media-section">
      <div class="insurance-detail-media">
        <img src="${staticUrl(category.image)}" alt="${category.title}" loading="eager" decoding="async" />
      </div>
    </section>

    <section class="insurance-detail-grid">
      <article class="insurance-detail-panel">
        ${renderEyebrow(t('insuranceDetail.coverageEyebrow'))}
        <h2>${t('insuranceDetail.highlightsTitle', { title: category.title })}</h2>
        <ul class="insurance-detail-list">
          ${renderDetailListItems(category.highlights)}
        </ul>
      </article>

      <article class="insurance-detail-panel insurance-detail-panel-accent">
        ${renderEyebrow(t('insuranceDetail.documentsEyebrow'))}
        <h2>${t('insuranceDetail.documentsTitle')}</h2>
        <ul class="insurance-detail-list">
          ${renderDetailListItems(category.documents)}
        </ul>
      </article>
    </section>

    <section class="insurance-detail-process">
      <div>
        ${renderEyebrow(t('insuranceDetail.processEyebrow'))}
        <h2>${t('insuranceDetail.processTitle')}</h2>
      </div>
      <div class="insurance-detail-steps">
        <article>
          <strong>1</strong>
          <h3>${t('insuranceDetail.step1Title')}</h3>
          <p>${t('insuranceDetail.step1Description')}</p>
        </article>
        <article>
          <strong>2</strong>
          <h3>${t('insuranceDetail.step2Title')}</h3>
          <p>${t('insuranceDetail.step2Description')}</p>
        </article>
        <article>
          <strong>3</strong>
          <h3>${t('insuranceDetail.step3Title')}</h3>
          <p>${t('insuranceDetail.step3Description')}</p>
        </article>
      </div>
    </section>

    <section class="insurance-detail-related">
      <div class="section-header">
        ${renderEyebrow(t('insuranceDetail.relatedEyebrow'))}
        <h2>${t('insuranceDetail.relatedTitle')}</h2>
      </div>
      <div class="insurance-detail-related-grid">
        ${relatedCategories
          .map(
            (item) => `
              <a class="insurance-detail-related-card" href="${appUrl(`/insurance/${item.key}`)}">
                <img src="${staticUrl(item.image)}" alt="${item.title}" loading="lazy" decoding="async" />
                <span>${item.label}</span>
                <strong>${item.title}</strong>
              </a>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
