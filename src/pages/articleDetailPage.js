import { appUrl } from '../app/router.js';
import { renderEmptyState, renderPageHero } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedArticle, getLocalizedArticles } from '../i18n/localize.js';

export function renderArticleDetailPage(slug) {
  const article = getLocalizedArticle(slug);

  if (!article) {
    return renderEmptyState({
      title: t('articles.notFoundTitle'),
      description: t('articles.notFoundDesc'),
      actionLabel: t('articles.backToArticles'),
      actionHref: appUrl('/articles'),
    });
  }

  const relatedArticles = getLocalizedArticles().filter((item) => item.slug !== article.slug).slice(0, 3);

  return `
    ${renderPageHero({
      eyebrow: article.category,
      title: article.title,
      description: article.excerpt,
      extra: `
        <div class="article-detail-meta">
          <span>${article.publishedAt}</span>
          <span>${article.readTime}</span>
        </div>
      `,
    })}

    <section class="article-detail-cover">
      <div class="article-cover-shell">
        <img src="${article.coverImage}" alt="${article.title}" class="article-cover-image" />
      </div>
    </section>

    <section class="article-detail-layout">
      <article class="article-detail-body">
        ${article.sections
          .map(
            (section) => `
              <section class="article-body-section">
                <h2>${section.heading}</h2>
                <p>${section.body}</p>
              </section>
            `,
          )
          .join('')}

        <div class="article-callout">
          <strong>${t('articles.needMore')}</strong>
          <p>${t('articles.needMoreDesc')}</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${appUrl('/plans')}">${t('articles.relatedPlans')}</a>
            <button class="button button-secondary" type="button" data-open-quote="true">${t('articles.submitRequest')}</button>
          </div>
        </div>
      </article>

      <aside class="article-detail-sidebar">
        <div class="detail-panel">
          <h3>${t('articles.relatedTitle')}</h3>
          <div class="related-article-list">
            ${relatedArticles
              .map(
                (item) => `
                  <article class="related-article-item">
                    <a href="${appUrl(`/articles/${item.slug}`)}" class="related-article-link">
                      <img src="${item.coverImage}" alt="${item.title}" class="related-article-image" />
                      <div class="related-article-copy">
                        <span>${item.category}</span>
                        <strong>${item.title}</strong>
                      </div>
                    </a>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </aside>
    </section>
  `;
}
