import { plans } from '../data/mockData.js';
import { appUrl, staticUrl } from '../app/router.js';
import { renderEmptyState } from '../components/ui.js';
import { formatCompact, formatCurrency } from '../utils/format.js';
import { t } from '../i18n/index.js';
import { getLocalizedPlan, getPlanDisplayName } from '../i18n/localize.js';

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPricingSection(plan) {
  const hasTables = Array.isArray(plan.pricingTables) && plan.pricingTables.length > 0;
  const pdfPaths = Array.isArray(plan.brochurePdfs)
    ? plan.brochurePdfs
    : plan.brochurePdf
      ? [plan.brochurePdf]
      : [];

  if (!hasTables && pdfPaths.length === 0) {
    return '';
  }

  const tablesHtml = hasTables
    ? plan.pricingTables
        .map((table) => {
          const title = table.title ? `<h3>${escapeHtml(table.title)}</h3>` : `<h3>${t('plan.pricingTable')}</h3>`;
          const thead = `<tr>${table.columns.map((c) => `<th>${escapeHtml(c)}</th>`).join('')}</tr>`;
          const tbody = table.rows
            .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`)
            .join('');
          const caption = table.caption
            ? `<p class="pricing-table-caption">${escapeHtml(table.caption)}</p>`
            : '';
          return `
            <div class="pricing-table-block">
              <div class="pricing-table-head">
                ${title}
                <span class="pricing-table-unit">${t('plan.pricingUnit')}</span>
              </div>
              <div class="table-shell plan-pricing-table-shell">
                <table class="plan-pricing-table plan-pricing-table-premium">
                  <thead>${thead}</thead>
                  <tbody>${tbody}</tbody>
                </table>
              </div>
              ${caption}
            </div>
          `;
        })
        .join('')
    : '';

  const noTableNotice =
    !hasTables && pdfPaths.length
      ? `
        <p class="pricing-table-caption pricing-table-caption--solo">
          ${t('plan.pricingNotice')}
        </p>
      `
      : '';

  const pdfBlock =
    pdfPaths.length > 0
      ? `
      <div class="brochure-pdf-wrap brochure-pdf-list">
        ${pdfPaths
          .map((rel, idx) => {
            const href = staticUrl(rel);
            const name = rel.split('/').pop() || rel;
            return `
          <p class="brochure-pdf-item">
            <a class="inline-link brochure-pdf-link" href="${href}" target="_blank" rel="noreferrer" title="${escapeHtml(rel)}">
              ${t('plan.openPdf')}${pdfPaths.length > 1 ? ` (${idx + 1}/${pdfPaths.length})` : ''}: ${escapeHtml(name)}
            </a>
          </p>`;
          })
          .join('')}
      </div>
    `
      : '';

  return `
    <section class="detail-panel pricing-table-section" aria-labelledby="plan-pricing-heading">
      <h2 id="plan-pricing-heading">${t('plan.pricingTitle')}</h2>
      <p class="pricing-section-lead">
        ${t('plan.pricingLead')}
      </p>
      ${tablesHtml}
      ${noTableNotice}
      ${pdfBlock}
    </section>
  `;
}

export function renderPlanDetailPage(slug, state) {
  const rawPlan = plans.find((item) => item.slug === slug);

  if (!rawPlan) {
    return renderEmptyState({
      title: t('plan.notFoundTitle'),
      description: t('plan.notFoundDesc'),
      actionLabel: t('plan.backToPlans'),
      actionHref: appUrl('/plans'),
    });
  }

  const plan = getLocalizedPlan(rawPlan);
  const compareActive = state.compareIds.includes(plan.id);
  const planTitle = plan.displayName ?? getPlanDisplayName(plan);

  return `
    <section class="detail-shell">
      <div class="detail-hero">
        <div class="detail-copy">
          <span class="section-eyebrow">${plan.category}</span>
          <h1>${planTitle}</h1>
          <p>${plan.description}</p>
          <div class="detail-highlights">
            <div>
              <span>${t('plan.monthlyPremium')}</span>
              <strong>${formatCurrency(plan.monthlyPremium)}</strong>
            </div>
            <div>
              <span>${t('plan.annualPremium')}</span>
              <strong>${formatCurrency(plan.annualPremium)}</strong>
            </div>
            <div>
              <span>${t('plan.coverageAmount')}</span>
              <strong>${formatCompact(plan.coverageAmount)} ${t('plan.baht')}</strong>
            </div>
          </div>
          <div class="detail-actions">
            <button class="button button-primary" type="button" data-open-quote="true" data-plan-id="${plan.id}">${t('plan.requestAdvice')}</button>
            <button class="button button-secondary compare-toggle" type="button" data-plan-id="${plan.id}">
              ${compareActive ? t('plan.removeFromCompare') : t('plan.addCompare')}
            </button>
          </div>
        </div>
        <div class="detail-summary-card">
          <span class="plan-badge">${plan.badge}</span>
          <h3>${plan.provider}</h3>
          <p>${plan.highlight}</p>
          <dl>
            <div>
              <dt>${t('plan.targetAudience')}</dt>
              <dd>${plan.targetAudience}</dd>
            </div>
            <div>
              <dt>${t('plan.waitingPeriod')}</dt>
              <dd>${plan.waitingPeriod}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="detail-columns">
        <section class="detail-panel">
          <h2>${t('plan.mainCoverage')}</h2>
          <ul class="coverage-list">
            ${plan.benefits.map((benefit) => `<li>${benefit}</li>`).join('')}
          </ul>
        </section>
        <section class="detail-panel">
          <h2>${t('plan.decisionServices')}</h2>
          <ul class="coverage-list">
            <li>${t('plan.service1')}</li>
            <li>${t('plan.service2')}</li>
            <li>${t('plan.service3')}</li>
          </ul>
        </section>
      </div>

      ${renderPricingSection(rawPlan)}
    </section>
  `;
}
