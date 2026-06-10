import { partners } from '../data/mockData.js';
import {
  renderArticleCard,
  renderFaqItem,
  renderInsurerComparisonTable,
  renderSelectedPlanBar,
  renderPlanCard,
  renderSectionHeader,
  renderTestimonialCard,
  renderTrustCard,
} from '../components/ui.js';
import { appUrl, staticUrl } from '../app/router.js';
import { buildComparisonTableData } from '../utils/insurerComparison.js';
import { t } from '../i18n/index.js';
import {
  getInsurerComparisonRows,
  getInsurerComparisonTitle,
  getLocalizedArticles,
  getLocalizedFaqs,
  getLocalizedPlans,
  getLocalizedInsuranceCategories,
  getLocalizedTestimonials,
  getLocalizedTrustPoints,
  getPlanDisplayName,
} from '../i18n/localize.js';

function renderCategoryIcon(type) {
  const icons = {
    plane:
      '<path d="M4 13.5 20 5l-4.2 14-3.5-5.3-5.6 3.6-2.7-3.8Z"/><path d="m12.3 13.7 7.2-8.2"/>',
    car:
      '<path d="M5 15h14l-1.2-4.2A2.5 2.5 0 0 0 15.4 9H8.6a2.5 2.5 0 0 0-2.4 1.8L5 15Z"/><path d="M7 15v2.5M17 15v2.5"/><circle cx="8" cy="18" r="1.4"/><circle cx="16" cy="18" r="1.4"/><path d="M7.5 12h9"/>',
    health:
      '<path d="M12 5v14M5 12h14"/><path d="M7.3 4.8h9.4a2.5 2.5 0 0 1 2.5 2.5v9.4a2.5 2.5 0 0 1-2.5 2.5H7.3a2.5 2.5 0 0 1-2.5-2.5V7.3a2.5 2.5 0 0 1 2.5-2.5Z"/>',
    home:
      '<path d="M4 11.5 12 5l8 6.5"/><path d="M6.5 10.5v8h11v-8"/><path d="M10 18.5v-5h4v5"/>',
    advisor:
      '<path d="M12 12a3.8 3.8 0 1 0 0-7.6 3.8 3.8 0 0 0 0 7.6Z"/><path d="M4.8 20c.9-3.6 3.5-5.4 7.2-5.4s6.3 1.8 7.2 5.4"/><path d="M16.6 6.2c1.8.7 3 2.1 3.4 4.1"/>',
    more:
      '<circle cx="6.5" cy="12" r="1.2"/><circle cx="12" cy="12" r="1.2"/><circle cx="17.5" cy="12" r="1.2"/>',
  };

  return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[type] ?? icons.more}</svg>`;
}

function renderInsuranceCategoryShowcase() {
  const insuranceCategoryShowcase = getLocalizedInsuranceCategories();

  return `
    <section class="insurance-category-showcase" id="insurance-categories" aria-labelledby="insurance-category-title">
      <div class="insurance-category-heading">
        <span class="section-eyebrow">${t('insuranceShowcase.eyebrow')}</span>
        <h2 id="insurance-category-title">${t('insuranceShowcase.title')}</h2>
        <p>${t('insuranceShowcase.description')}</p>
      </div>

      <div class="insurance-category-tabs" role="tablist" aria-label="${t('insuranceShowcase.tabsLabel')}">
        ${insuranceCategoryShowcase
          .map(
            (item, index) => `
              <button
                class="insurance-category-tab ${index === 0 ? 'insurance-category-tab-active' : ''}"
                type="button"
                role="tab"
                aria-selected="${index === 0 ? 'true' : 'false'}"
                data-insurance-category="${item.key}"
              >
                <span class="insurance-category-icon">${renderCategoryIcon(item.icon)}</span>
                <span>${item.label}</span>
              </button>
            `,
          )
          .join('')}
      </div>

      <div class="insurance-category-panels">
        ${insuranceCategoryShowcase
          .map(
            (item, index) => `
              <article class="insurance-category-panel ${index === 0 ? 'insurance-category-panel-active' : ''}" data-insurance-category-panel="${item.key}">
                <div class="insurance-category-media">
                  <img src="${staticUrl(item.image)}" alt="${item.title}" loading="${index === 0 ? 'eager' : 'lazy'}" decoding="async" />
                </div>
                <div class="insurance-category-copy">
                  <span class="section-eyebrow">${item.label}</span>
                  <h3>${item.title}</h3>
                  <p>${item.description}</p>
                  <div class="insurance-category-actions">
                    <a class="button button-secondary" href="${appUrl(`/insurance/${item.key}`)}">${item.secondaryAction}</a>
                    <button class="button button-primary" type="button" data-open-quote="true">${item.primaryAction}</button>
                  </div>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}

function renderMobileCompareShortcut(plans, compareIds = []) {
  const comparePlans = compareIds
    .map((id) => plans.find((plan) => plan.id === id))
    .filter(Boolean);

  if (!comparePlans.length) {
    return '';
  }

  return `
    <div class="mobile-compare-shortcut" aria-live="polite">
      <div>
        <span>${t('compareBar.count', { count: comparePlans.length })}</span>
        <strong>${comparePlans.map((plan) => getPlanDisplayName(plan)).join(' · ')}</strong>
      </div>
      <div class="mobile-compare-shortcut-actions">
        <button class="button button-primary" type="button" data-compare-view="true">${t('compareBar.view')}</button>
        <button class="button button-secondary" type="button" data-compare-clear="true">${t('compareBar.clear')}</button>
      </div>
    </div>
  `;
}

export function renderHomePage(state) {
  const plans = getLocalizedPlans();
  const featuredPlans = [...plans]
    .filter((plan) => plan.featured)
    .sort((left, right) => (left.featuredOrder ?? 999) - (right.featuredOrder ?? 999));
  const faqs = getLocalizedFaqs();
  const articleTopics = getLocalizedArticles();

  return `
    <section class="hero-section">
      <div class="hero-copy">
        <span class="hero-eyebrow">${t('home.eyebrow')}</span>
        <h1>
          <span class="hero-line hero-line-dark">${t('home.titleLine1')}</span>
          <span class="hero-line hero-line-accent">${t('home.titleLine2')}</span>
        </h1>
        <p>${t('home.subtitle')}</p>
        <div class="hero-actions">
          <a class="button button-primary" href="${appUrl('/plans')}">${t('home.choosePlan')}</a>
          <button class="button button-secondary" type="button" data-open-quote="true">${t('home.getConsultation')}</button>
        </div>
      </div>
      <div class="hero-visual">
        <img
          class="hero-visual-image"
          src="${staticUrl('assets/hero-insurance-visual.png')}"
          alt="${t('home.heroAlt')}"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>

    ${renderInsuranceCategoryShowcase()}

    <section class="section-surface">
      <div class="plan-section-top">
        ${renderSectionHeader({
          eyebrow: t('home.featuredEyebrow'),
          title: t('home.featuredTitle'),
          description: t('home.featuredDesc'),
        })}
        <div class="plan-slider-controls">
          <button class="slider-arrow" type="button" data-slider-target="plan-slider" data-slider-direction="prev" aria-label="${t('home.sliderPrev')}">←</button>
          <button class="slider-arrow" type="button" data-slider-target="plan-slider" data-slider-direction="next" aria-label="${t('home.sliderNext')}">→</button>
        </div>
      </div>
      <div
        class="plan-slider-shell"
        id="plan-slider"
        data-auto-slider="true"
        data-slider-card=".plan-card"
        data-slider-visible="3"
      >
        <div class="plan-slider-track">
          ${featuredPlans.map((plan) => renderPlanCard(plan, state.compareIds)).join('')}
        </div>
      </div>
      <div class="slider-dots" id="plan-slider-dots" aria-label="${t('home.sliderStatus')}">
        ${Array.from({ length: Math.max(1, featuredPlans.length - 3 + 1) }, (_, index) => `
              <button
                class="slider-dot ${index === 0 ? 'slider-dot-active' : ''}"
                type="button"
                data-slider-dot="plan-slider"
                data-slider-index="${index}"
                aria-label="${t('home.sliderGoTo', { n: index + 1 })}"
              ></button>
            `).join('')}
      </div>
      ${renderMobileCompareShortcut(plans, state.compareIds)}
    </section>

    <section class="section-white provider-comparison-wrap">
      ${renderInsurerComparisonTable(
        buildComparisonTableData({
          plans,
          rows: getInsurerComparisonRows(),
          title: getInsurerComparisonTitle(),
          comparisonPlanIds: state.comparisonPlanIds,
          selectedPlanSlug: state.selectedPlanSlug,
        }),
      )}
      ${renderSelectedPlanBar(plans, state.selectedPlanSlug)}
    </section>

    <section class="section-surface centered-block">
      ${renderSectionHeader({
        title: t('home.trustTitle'),
        description: t('home.trustDesc'),
        center: true,
      })}
      <div class="trust-grid">
        ${getLocalizedTrustPoints().map((item, index) => renderTrustCard(item, index === 1)).join('')}
      </div>
    </section>

    <section class="partner-section">
      <p class="partner-intro">${t('home.partnerIntro')}</p>
      <h2 class="partner-title">${t('home.partnerTitle')}</h2>
      <div class="partner-slider-shell">
        <div class="partner-strip">
          ${[...partners, ...partners]
            .map(
              (partner) => `
                <article class="partner-card">
                  <span class="partner-logo">
                    ${
                      partner.logo
                        ? `<img src="${staticUrl(partner.logo)}" alt="${partner.name} logo" class="partner-logo-image partner-logo-image-${partner.logoScale ?? 'standard'}" loading="lazy" decoding="async" />`
                        : `<span class="partner-logo-fallback">${partner.mark}</span>`
                    }
                  </span>
                  <strong>${partner.name}</strong>
                </article>
              `,
            )
            .join('')}
        </div>
      </div>
    </section>

    <section class="section-white">
      ${renderSectionHeader({
        title: t('home.testimonialTitle'),
        description: t('home.testimonialDesc'),
        center: true,
      })}
      <div class="testimonial-grid">
        ${getLocalizedTestimonials().map((item) => renderTestimonialCard(item)).join('')}
      </div>
    </section>

    <section class="section-white home-articles-section">
      ${renderSectionHeader({
        eyebrow: t('home.articlesEyebrow'),
        title: t('home.articlesTitle'),
        description: t('home.articlesDesc'),
        center: true,
      })}
      <div class="articles-grid home-articles-grid">
        ${articleTopics.slice(0, 3).map((article) => renderArticleCard(article)).join('')}
      </div>
      <div class="home-articles-cta">
        <a class="button button-secondary" href="${appUrl('/articles')}">${t('home.allArticles')}</a>
      </div>
    </section>

    <section class="section-surface faq-section">
      ${renderSectionHeader({
        title: t('home.faqTitle'),
        description: t('home.faqDesc'),
        center: true,
      })}
      <div class="faq-list">
        ${faqs.map((item, index) => renderFaqItem(item, index)).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div>
        <h2>${t('home.ctaTitle')}</h2>
        <p>${t('home.ctaDesc')}</p>
      </div>
      <div class="cta-actions">
        <a class="button button-light" href="${appUrl('/plans')}">${t('home.ctaChoose')}</a>
        <button class="button button-secondary inverted" type="button" data-open-quote="true">${t('home.ctaSubmit')}</button>
      </div>
    </section>
  `;
}
