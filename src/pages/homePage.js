import { renderHospitalNetworkSection } from '../components/hospitalNetworkSection.js';
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
import { categoryShowcaseIcon, icon, renderEyebrow } from '../components/icons.js';

function renderInsuranceCategoryShowcase() {
  const insuranceCategoryShowcase = getLocalizedInsuranceCategories();

  return `
    <section class="insurance-category-showcase" id="insurance-categories" aria-labelledby="insurance-category-title">
      <div class="insurance-category-heading-band">
        <div class="insurance-category-heading">
          ${renderEyebrow(t('insuranceShowcase.eyebrow'))}
          <h2 id="insurance-category-title">${t('insuranceShowcase.title')}</h2>
          <p>${t('insuranceShowcase.description')}</p>
        </div>
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
                <span class="insurance-category-icon">${categoryShowcaseIcon(item.icon)}</span>
                <span class="insurance-category-label">${item.label}</span>
                <span class="insurance-category-arrow">${icon('chevronRight', { size: 18, strokeWidth: 2.4 })}</span>
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
                  ${renderEyebrow(item.label)}
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
  const homeFeaturedPlans =
    featuredPlans.length >= 4
      ? featuredPlans.slice(0, 4)
      : [
          ...featuredPlans,
          ...plans.filter((plan) => !plan.featured).slice(0, 4 - featuredPlans.length),
        ];
  const faqs = getLocalizedFaqs();
  const articleTopics = getLocalizedArticles();
  const testimonials = getLocalizedTestimonials();

  return `
    <section
      class="hero-section"
      style="--hero-background: url('${staticUrl('assets/hero-background.png')}?v=1')"
      aria-label="${t('home.heroAlt')}"
    >
      <div class="hero-section-inner">
        <div class="hero-copy">
          ${renderEyebrow(t('home.eyebrow'), 'hero-eyebrow')}
          <h1>
            <span class="hero-line hero-line-dark">${t('home.titleLine1')}</span>
            <span class="hero-line hero-line-accent">${t('home.titleLine2')}</span>
          </h1>
          <p>${t('home.subtitle')}</p>
          <div class="hero-actions">
            <a class="button button-primary" href="${appUrl('/plans')}">
              ${icon('shieldCheck', { size: 18, strokeWidth: 2.2 })}
              <span>${t('home.choosePlan')}</span>
            </a>
            <button class="button button-secondary" type="button" data-open-quote="true">
              ${icon('messageCircle', { size: 18, strokeWidth: 2.2 })}
              <span>${t('home.getConsultation')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>

    ${renderInsuranceCategoryShowcase()}

    <section class="section-surface home-plans-section">
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
          ${homeFeaturedPlans.map((plan) => renderPlanCard(plan, state.compareIds)).join('')}
        </div>
      </div>
      <div class="slider-dots" id="plan-slider-dots" aria-label="${t('home.sliderStatus')}">
        ${Array.from({ length: Math.max(1, homeFeaturedPlans.length - 3 + 1) }, (_, index) => `
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

    ${renderHospitalNetworkSection({ className: 'partner-section', showGrid: false, showCta: false })}

    <section class="section-white home-testimonials-section">
      ${renderSectionHeader({
        title: t('home.testimonialTitle'),
        description: t('home.testimonialDesc'),
        center: true,
      })}
      <div
        class="testimonial-slider-shell"
        id="testimonial-slider"
        data-auto-slider="true"
        data-slider-card=".testimonial-card"
      >
        <div class="testimonial-slider-track testimonial-grid">
          ${testimonials.map((item) => renderTestimonialCard(item)).join('')}
        </div>
      </div>
      <div class="slider-dots" id="testimonial-slider-dots" aria-label="${t('home.sliderStatus')}">
        ${Array.from({ length: testimonials.length }, (_, index) => `
          <button
            class="slider-dot ${index === 0 ? 'slider-dot-active' : ''}"
            type="button"
            data-slider-dot="testimonial-slider"
            data-slider-index="${index}"
            aria-label="${t('home.sliderGoTo', { n: index + 1 })}"
          ></button>
        `).join('')}
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
        ${articleTopics.slice(0, 4).map((article) => renderArticleCard(article)).join('')}
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

    <section class="cta-section" aria-labelledby="home-cta-title">
      <div class="cta-section-mesh" aria-hidden="true"></div>
      <div class="cta-section-inner">
        <div class="cta-copy">
          ${renderEyebrow(t('home.ctaEyebrow'), 'cta-eyebrow')}
          <h2 id="home-cta-title">${t('home.ctaTitle')}</h2>
          <p>${t('home.ctaDesc')}</p>
        </div>
        <div class="cta-actions-card">
          <div class="cta-actions">
            <a class="button button-primary" href="${appUrl('/plans')}">
              ${icon('shieldCheck', { size: 18, strokeWidth: 2.2 })}
              <span>${t('home.ctaChoose')}</span>
            </a>
            <button class="button button-secondary" type="button" data-open-quote="true">
              ${icon('messageCircle', { size: 18, strokeWidth: 2.2 })}
              <span>${t('home.ctaSubmit')}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}
