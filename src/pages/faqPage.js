import { appUrl } from '../app/router.js';
import { renderFaqItem, renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';
import { getLocalizedFaqs } from '../i18n/localize.js';

export function renderFaqPage() {
  const faqs = getLocalizedFaqs();

  return `
    <section class="section-surface faq-section faq-page-section">
      ${renderSectionHeader({
        title: t('home.faqTitle'),
        description: t('home.faqDesc'),
        center: true,
      })}
      <div class="faq-list">
        ${faqs.map((item, index) => renderFaqItem(item, index)).join('')}
      </div>
    </section>

    <section class="faq-page-cta">
      <div class="faq-page-cta-copy">
        <h2>${t('faqPage.ctaTitle')}</h2>
        <p>${t('faqPage.ctaDesc')}</p>
      </div>
      <div class="faq-page-cta-actions">
        <a class="button button-primary" href="${appUrl('/contact')}">${t('faqPage.ctaContact')}</a>
        <a class="button button-secondary" href="${appUrl('/plans')}">${t('faqPage.ctaPlans')}</a>
      </div>
    </section>
  `;
}
