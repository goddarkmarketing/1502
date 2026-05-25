import { appUrl } from '../app/router.js';
import { renderFaqItem, renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedFaqs } from '../i18n/localize.js';

export function renderFaqPage() {
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: t('faqPage.eyebrow'),
        title: t('faqPage.title'),
        description: t('faqPage.desc'),
      })}
    </section>

    <section class="section-white faq-page-layout">
      <div class="faq-page-sidebar">
        <div class="detail-panel">
          <h3>${t('faqPage.popularTopics')}</h3>
          <a href="${appUrl('/plans')}">${t('faqPage.choosingPlan')}</a>
          <a href="${appUrl('/contact')}">${t('faqPage.contactingAdvisor')}</a>
          <a href="${appUrl('/articles')}">${t('faqPage.recommendedArticles')}</a>
        </div>
      </div>
      <div class="faq-list">
        ${getLocalizedFaqs().map((item, index) => renderFaqItem(item, index)).join('')}
      </div>
    </section>
  `;
}
