import { articleCategories } from '../data/mockData.js';
import { appUrl } from '../app/router.js';
import { renderArticleCard, renderEmptyState, renderPageHero } from '../components/ui.js';
import { filterCategoryIcon, icon } from '../components/icons.js';
import { t } from '../i18n/index.js';
import { getArticleCategoryLabelSync, getLocalizedArticles } from '../i18n/localize.js';

export function renderArticlesPage(query) {
  const keywordRaw = (query.get('q') ?? '').trim();
  const keyword = keywordRaw.toLowerCase();
  const category = query.get('category') ?? 'ทั้งหมด';
  const articles = getLocalizedArticles();

  const filteredArticles = articles.filter((article) => {
    const matchKeyword =
      !keyword ||
      [article.title, article.excerpt, article.category, article.categoryKey]
        .join(' ')
        .toLowerCase()
        .includes(keyword);
    const matchCategory = category === 'ทั้งหมด' || article.categoryKey === category;

    return matchKeyword && matchCategory;
  });

  return `
    ${renderPageHero({
      eyebrow: t('articles.eyebrow'),
      title: t('articles.title'),
      description: t('articles.desc'),
      backgroundImage: 'assets/articles-hero-background.png',
      backgroundVersion: '1',
    })}

    <section class="section-white articles-page">
      <div class="articles-toolbar">
        <form id="articles-filter-form" class="articles-filter-form">
          <label class="filter-field articles-search-field">
            <span class="articles-search-shell">
              ${icon('search', { size: 20, strokeWidth: 2.2, className: 'articles-search-icon' })}
              <input
                name="q"
                value="${keywordRaw}"
                placeholder="${t('articles.searchPlaceholder')}"
                aria-label="${t('articles.searchLabel')}"
              />
            </span>
          </label>
          <div class="filter-field articles-topics-field">
            <div class="chip-grid articles-chip-grid">
              ${articleCategories
                .map(
                  (item) => `
                    <button
                      class="chip ${item === category ? 'chip-active' : ''}"
                      type="button"
                      data-filter-article-category="${item}"
                    >
                      ${filterCategoryIcon(item)}
                      <span>${getArticleCategoryLabelSync(item)}</span>
                    </button>
                  `,
                )
                .join('')}
            </div>
            <input type="hidden" name="category" value="${category}" />
          </div>
        </form>
      </div>

      <div class="articles-results-bar">
        <div>
          <strong>${filteredArticles.length}</strong>
          <span>${t('articles.resultCount')}</span>
        </div>
      </div>

      ${
        filteredArticles.length
          ? `<div class="articles-grid">${filteredArticles.map((article) => renderArticleCard(article)).join('')}</div>`
          : renderEmptyState({
              title: t('articles.emptyTitle'),
              description: t('articles.emptyDesc'),
              actionLabel: t('articles.clearFilters'),
              actionHref: appUrl('/articles'),
            })
      }

      <div class="articles-cta-band">
        <div class="articles-cta-copy">
          <h2>${t('articles.ctaTitle')}</h2>
          <p>${t('articles.ctaDesc')}</p>
        </div>
        <div class="articles-cta-actions">
          <a href="${appUrl('/plans')}" class="button button-primary">${t('articles.ctaBrowsePlans')}</a>
          <button class="button button-secondary" type="button" data-open-quote="true">${t('articles.ctaGetAdvice')}</button>
        </div>
      </div>
    </section>
  `;
}
