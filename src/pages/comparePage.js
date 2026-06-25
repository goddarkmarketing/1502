import { appUrl } from '../app/router.js';
import { t } from '../i18n/index.js';
import { getLocalizedPlans, getPlanDisplayName } from '../i18n/localize.js';
import { formatCompact, formatCurrency } from '../utils/format.js';
import { renderEmptyState, renderPageHero } from '../components/ui.js';
import { icon, renderCheckListItems } from '../components/icons.js';

const compareRows = [
  {
    key: 'provider',
    labelKey: 'comparison.provider',
    value: (plan) => plan.provider,
  },
  {
    key: 'premium',
    labelKey: 'plan.monthlyPremium',
    value: (plan) => formatCurrency(plan.monthlyPremium),
  },
  {
    key: 'annualPremium',
    labelKey: 'plan.annualPremium',
    value: (plan) => formatCurrency(plan.annualPremium),
  },
  {
    key: 'coverage',
    labelKey: 'plan.coverageAmount',
    value: (plan) => `${formatCompact(plan.coverageAmount)} ${t('plan.baht')}`,
  },
  {
    key: 'targetAudience',
    labelKey: 'plan.targetAudience',
    value: (plan) => plan.targetAudience,
  },
  {
    key: 'waitingPeriod',
    labelKey: 'plan.waitingPeriod',
    value: (plan) => plan.waitingPeriod,
  },
];

function renderMobileCompareCards(selectedPlans) {
  return `
    <div class="compare-page-mobile-list">
      ${selectedPlans
        .map(
          (plan) => `
            <article class="compare-page-mobile-card">
              <div class="compare-page-mobile-head">
                <div>
                  <span>${plan.provider}</span>
                  <h2>${getPlanDisplayName(plan)}</h2>
                </div>
                <button type="button" data-compare-remove="${plan.id}" aria-label="${t('compareBar.remove', { plan: getPlanDisplayName(plan) })}">${icon('x', { size: 18, strokeWidth: 2.2 })}</button>
              </div>

              <dl class="compare-page-mobile-details">
                ${compareRows
                  .map(
                    (row) => `
                      <div>
                        <dt>${t(row.labelKey)}</dt>
                        <dd>${row.value(plan)}</dd>
                      </div>
                    `,
                  )
                  .join('')}
              </dl>

              <div class="compare-page-mobile-benefits">
                <span>${t('plan.mainCoverage')}</span>
                <ul class="compare-page-benefits">
                  ${renderCheckListItems(plan.benefits)}
                </ul>
              </div>

              <div class="compare-page-row-actions">
                <a class="button button-secondary" href="${appUrl(`/plans/${plan.slug}`)}">${t('plan.viewDetails')}</a>
                <button class="button button-primary" type="button" data-open-quote="true" data-plan-id="${plan.id}">${t('comparison.consultPlan')}</button>
              </div>
            </article>
          `,
        )
        .join('')}
    </div>
  `;
}

export function renderComparePage(state) {
  const plans = getLocalizedPlans();
  const selectedPlans = state.compareIds
    .map((id) => plans.find((plan) => plan.id === id))
    .filter(Boolean);

  if (!selectedPlans.length) {
    return renderEmptyState({
      title: t('comparePage.emptyTitle'),
      description: t('comparePage.emptyDescription'),
      actionLabel: t('comparePage.browsePlans'),
      actionHref: appUrl('/plans'),
    });
  }

  return `
    ${renderPageHero({
      eyebrow: t('comparePage.eyebrow'),
      title: t('comparePage.title'),
      description: t('comparePage.description'),
      actions: `
        <a class="button button-secondary" href="${appUrl('/plans')}">${t('comparePage.addMore')}</a>
        <button class="button button-primary" type="button" data-open-quote="true">${t('comparePage.askAdvisor')}</button>
        <button class="button button-secondary compare-page-clear-action" type="button" data-compare-clear="true">${t('compareBar.clear')}</button>
      `,
    })}

    <section class="compare-page-shell">
      <div class="compare-page-scroll">
        <table class="compare-page-table">
          <thead>
            <tr>
              <th>${t('comparison.items')}</th>
              ${selectedPlans
                .map(
                  (plan) => `
                    <th>
                      <div class="compare-page-plan-head">
                        <span>${plan.provider}</span>
                        <strong>${getPlanDisplayName(plan)}</strong>
                        <button type="button" data-compare-remove="${plan.id}">${icon('x', { size: 18, strokeWidth: 2.2 })}</button>
                      </div>
                    </th>
                  `,
                )
                .join('')}
            </tr>
          </thead>
          <tbody>
            ${compareRows
              .map(
                (row) => `
                  <tr>
                    <th>${t(row.labelKey)}</th>
                    ${selectedPlans.map((plan) => `<td>${row.value(plan)}</td>`).join('')}
                  </tr>
                `,
              )
              .join('')}
            <tr>
              <th>${t('plan.mainCoverage')}</th>
              ${selectedPlans
                .map(
                  (plan) => `
                    <td>
                      <ul class="compare-page-benefits">
                        ${renderCheckListItems(plan.benefits)}
                      </ul>
                    </td>
                  `,
                )
                .join('')}
            </tr>
            <tr>
              <th>${t('comparison.selectRow')}</th>
              ${selectedPlans
                .map(
                  (plan) => `
                    <td>
                      <div class="compare-page-row-actions">
                        <a class="button button-secondary" href="${appUrl(`/plans/${plan.slug}`)}">${t('plan.viewDetails')}</a>
                        <button class="button button-primary" type="button" data-open-quote="true" data-plan-id="${plan.id}">${t('comparison.consultPlan')}</button>
                      </div>
                    </td>
                  `,
                )
                .join('')}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
    ${renderMobileCompareCards(selectedPlans)}
  `;
}
