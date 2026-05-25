import { plans } from '../data/mockData.js';
import { appUrl } from '../app/router.js';
import { renderEmptyState, renderPlanCard, renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedCategory, getLocalizedPlans } from '../i18n/localize.js';

const categorySlugToKey = {
  'health-insurance': 'สุขภาพ',
};

export function renderCategoryPage(slug, state) {
  const category = getLocalizedCategory(slug);

  if (!category) {
    return renderEmptyState({
      title: t('category.notFoundTitle'),
      description: t('category.notFoundDesc'),
      actionLabel: t('category.viewAllPlans'),
      actionHref: appUrl('/plans'),
    });
  }

  const categoryKey = categorySlugToKey[slug] ?? category.name;
  const categoryPlans = getLocalizedPlans().filter((plan) => {
    const raw = plans.find((item) => item.id === plan.id);
    return raw?.category === categoryKey;
  });

  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: category.name,
        title: t('category.titleTemplate', { category: category.name }),
        description: category.summary,
      })}
    </section>

    <section class="category-landing-layout">
      <aside class="detail-panel">
        <h2>${t('category.highlights')}</h2>
        <ul class="coverage-list">
          ${category.points.map((point) => `<li>${point}</li>`).join('')}
        </ul>
        <button class="button button-primary" type="button" data-open-quote="true">${t('category.requestAdvice')}</button>
      </aside>
      <div>
        <div class="directory-toolbar">
          <div>
            <strong>${categoryPlans.length}</strong>
            <span>${t('category.planCount', { category: category.name })}</span>
          </div>
          <a class="button button-secondary" href="${appUrl('/plans')}?category=${encodeURIComponent(categoryKey)}">${t('category.fullView')}</a>
        </div>
        <div class="featured-grid">
          ${categoryPlans.map((plan) => renderPlanCard(plan, state.compareIds)).join('')}
        </div>
      </div>
    </section>
  `;
}
