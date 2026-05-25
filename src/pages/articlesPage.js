import { renderArticleCard, renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedArticles } from '../i18n/localize.js';

export function renderArticlesPage() {
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: t('articles.eyebrow'),
        title: t('articles.title'),
        description: t('articles.desc'),
      })}
    </section>

    <section class="section-white articles-grid">
      ${getLocalizedArticles().map((article) => renderArticleCard(article)).join('')}
    </section>
  `;
}
