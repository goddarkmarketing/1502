import { filters } from '../data/mockData.js';
import { appUrl } from '../app/router.js';
import { renderEmptyState, renderPageHero, renderPlanCard } from '../components/ui.js';
import { filterCategoryIcon } from '../components/icons.js';
import { t } from '../i18n/index.js';
import { getFilterLabelSync, getLocalizedPlans } from '../i18n/localize.js';

export function renderPlansPage(state, query) {
  const keyword = (query.get('q') ?? '').trim().toLowerCase();
  const category = query.get('category') ?? 'ทั้งหมด';
  const sort = query.get('sort') ?? 'featured';
  const plans = getLocalizedPlans();

  let filteredPlans = plans.filter((plan) => {
    const matchKeyword =
      !keyword ||
      [plan.name, plan.provider, plan.category, plan.highlight, plan.description]
        .join(' ')
        .toLowerCase()
        .includes(keyword);
    const matchCategory = category === 'ทั้งหมด' || plan.categoryKey === category;

    return matchKeyword && matchCategory;
  });

  filteredPlans = filteredPlans.sort((left, right) => {
    if (sort === 'price-low') {
      return left.monthlyPremium - right.monthlyPremium;
    }

    if (sort === 'coverage-high') {
      return right.coverageAmount - left.coverageAmount;
    }

    return (
      Number(right.featured) - Number(left.featured) ||
      (left.featuredOrder ?? 999) - (right.featuredOrder ?? 999) ||
      left.monthlyPremium - right.monthlyPremium ||
      (left.displayName ?? left.name).localeCompare(right.displayName ?? right.name, 'th')
    );
  });

  return `
    ${renderPageHero({
      eyebrow: t('plans.eyebrow'),
      title: t('plans.title'),
      description: t('plans.desc'),
      backgroundImage: 'assets/plans-hero-background.png',
      backgroundVersion: '1',
    })}

    <section class="directory-layout">
      <aside class="filter-panel">
        <div class="filter-panel-head">
          <h2>${t('plans.filterTitle')}</h2>
          <p>${t('plans.filterDesc')}</p>
        </div>
        <form id="plans-filter-form" class="plans-filter-form">
          <label class="filter-field filter-field-search">
            <input name="q" value="${keyword}" placeholder="${t('plans.searchPlaceholder')}" aria-label="${t('plans.searchLabel')}" />
          </label>
          <div class="filter-field">
            <span class="filter-field-label">${t('plans.categoryLabel')}</span>
            <div class="chip-grid filter-chip-grid">
              ${filters
                .map(
                  (item) => `
                    <button class="chip ${item === category ? 'chip-active' : ''}" type="button" data-filter-category="${item}">
                      ${filterCategoryIcon(item)}
                      <span>${getFilterLabelSync(item)}</span>
                    </button>
                  `,
                )
                .join('')}
            </div>
            <input type="hidden" name="category" value="${category}" />
          </div>
          <label class="filter-field">
            <span class="filter-field-label">${t('plans.sortLabel')}</span>
            <select name="sort">
              <option value="featured" ${sort === 'featured' ? 'selected' : ''}>${t('plans.sortFeatured')}</option>
              <option value="price-low" ${sort === 'price-low' ? 'selected' : ''}>${t('plans.sortPriceLow')}</option>
              <option value="coverage-high" ${sort === 'coverage-high' ? 'selected' : ''}>${t('plans.sortCoverageHigh')}</option>
            </select>
          </label>
          <button class="button button-primary filter-submit" type="submit">${t('plans.updateResults')}</button>
        </form>
      </aside>
      <div class="directory-content">
        <div class="directory-toolbar">
          <div>
            <strong>${filteredPlans.length}</strong>
            <span>${t('plans.matchCount')}</span>
          </div>
          <button class="button button-secondary" type="button" data-open-quote="true">${t('plans.helpChoose')}</button>
        </div>
        ${
          filteredPlans.length
            ? `<div class="featured-grid">${filteredPlans
                .map((plan) => renderPlanCard(plan, state.compareIds))
                .join('')}</div>`
            : renderEmptyState({
                title: t('plans.emptyTitle'),
                description: t('plans.emptyDesc'),
                actionLabel: t('plans.clearFilters'),
                actionHref: appUrl('/plans'),
              })
        }
      </div>
    </section>
  `;
}
