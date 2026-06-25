import { plans } from '../data/mockData.js';
import { appUrl } from '../app/router.js';
import { renderEmptyState, renderPageHero, renderPlanCard } from '../components/ui.js';
import { renderCheckListItems } from '../components/icons.js';
import { t } from '../i18n/index.js';
import { getLocalizedCategory, getLocalizedPlans } from '../i18n/localize.js';

const categorySlugToKey = {
  'life-insurance': 'ประกันชีวิต',
  'health-insurance': 'สุขภาพ',
  'critical-illness-insurance': 'โรคร้ายแรง',
  'tax-deduction-insurance': 'ลดหย่อนภาษี',
  'retirement-planning': 'วางแผนเกษียณ',
  'estate-insurance': 'ประกันมรดก',
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
    ${renderPageHero({
      eyebrow: category.name,
      title: t('category.titleTemplate', { category: category.name }),
      description: category.summary,
    })}

    <section class="category-landing-layout">
      <aside class="detail-panel">
        <h2>${t('category.highlights')}</h2>
        <ul class="coverage-list">
          ${renderCheckListItems(category.points)}
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
