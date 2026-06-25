import { formatCurrency, formatDate } from '../utils/format.js';
import { appUrl, staticUrl } from '../app/router.js';
import { t } from '../i18n/index.js';
import { getLocalizedPlan, getPlanDisplayName } from '../i18n/localize.js';
import { icon, renderEyebrow, renderStars } from './icons.js';

function providerComparisonColumnClass(column, selectedPlanSlug) {
  return column.slug === selectedPlanSlug ? 'provider-comparison-col-selected' : '';
}

const COMPARISON_ROW_ICONS = {
  provider: 'shieldCheck',
  planName: 'fileText',
  annualLimit: 'coins',
  annualPremium: 'tag',
  deductible: 'shieldCheck',
  network: 'building2',
  hospitalCover: 'bedDouble',
  oncology: 'activity',
};

function renderComparisonRowLabel(label, rowKey, isActionRow = false) {
  const iconName = isActionRow ? 'clipboardCheck' : COMPARISON_ROW_ICONS[rowKey] ?? 'circle';

  return `
    <span class="provider-comparison-label-inner">
      <span class="provider-comparison-label-icon">${icon(iconName, { size: 18, strokeWidth: 2 })}</span>
      <span>${label}</span>
    </span>
  `;
}

function renderComparisonCellContent(row, cell, column) {
  if (row.key === 'provider') {
    return `
      <span class="provider-comparison-provider-mark">
        <span class="provider-comparison-provider-icon">${icon('badgeCheck', { size: 16, strokeWidth: 2.4 })}</span>
        <span>${cell}</span>
      </span>
    `;
  }

  if (row.key === 'planName') {
    return `<a class="provider-comparison-plan-link" href="${appUrl(`/plans/${column.slug}`)}">${cell}</a>`;
  }

  return cell;
}

export function renderInsurerComparisonTable({ title, rows, columns, selectedPlanSlug = null }) {
  return `
    <section class="provider-comparison-section" id="provider-comparison" aria-labelledby="provider-comparison-title">
      <h2 id="provider-comparison-title" class="provider-comparison-title">${title}</h2>
      <div class="provider-comparison-scroll">
        <table class="provider-comparison-table" role="grid">
          <thead>
            <tr>
              <th class="provider-comparison-corner" scope="col"><span class="sr-only">${t('comparison.items')}</span></th>
              ${columns
                .map((column) => {
                  const selected = providerComparisonColumnClass(column, selectedPlanSlug);
                  return `
                <th scope="col" class="provider-comparison-brand ${selected}">
                  <label class="provider-comparison-picker-label">
                    <span class="sr-only">${t('comparison.selectPlan', { provider: column.provider })}</span>
                    <select
                      class="provider-comparison-plan-picker"
                      data-insurer-key="${column.insurerKey}"
                      aria-label="${t('comparison.selectPlan', { provider: column.provider })}"
                    >
                      ${(column.planOptions ?? [])
                        .map(
                          (option) => `
                        <option value="${option.id}" ${option.id === column.planId ? 'selected' : ''}>
                          ${option.label}
                        </option>
                      `,
                        )
                        .join('')}
                    </select>
                  </label>
                </th>
              `;
                })
                .join('')}
            </tr>
          </thead>
          <tbody>
            ${rows
              .map(
                (row, index) => `
              <tr class="provider-comparison-row ${index % 2 === 1 ? 'provider-comparison-row-alt' : ''}">
                <th scope="row" class="provider-comparison-label">${renderComparisonRowLabel(row.label, row.key)}</th>
                ${columns
                  .map((column) => {
                    const cell = column.values[row.key] ?? '—';
                    const selected = providerComparisonColumnClass(column, selectedPlanSlug);
                    return `
                  <td class="provider-comparison-cell ${selected} ${row.key === 'planName' ? 'provider-comparison-cell-plan' : ''}">
                    ${renderComparisonCellContent(row, cell, column)}
                  </td>
                `;
                  })
                  .join('')}
              </tr>
            `,
              )
              .join('')}
            <tr class="provider-comparison-row provider-comparison-row-actions">
              <th scope="row" class="provider-comparison-label">${renderComparisonRowLabel(t('comparison.selectRow'), 'select', true)}</th>
              ${columns
                .map((column) => {
                  const isSelected = column.slug === selectedPlanSlug;
                  const selected = providerComparisonColumnClass(column, selectedPlanSlug);
                  return `
                <td class="provider-comparison-cell provider-comparison-cell-action ${selected}">
                  <button
                    class="button ${isSelected ? 'button-primary' : 'button-secondary'} provider-comparison-select"
                    type="button"
                    data-plan-slug="${column.slug}"
                    data-plan-id="${column.planId}"
                    aria-pressed="${isSelected ? 'true' : 'false'}"
                  >
                    ${
                      isSelected
                        ? `<span class="button-with-icon">${icon('check', { size: 16, strokeWidth: 2.5 })}<span>${t('comparison.selected')}</span></span>`
                        : `<span class="button-with-icon">${icon('clipboardCheck', { size: 16, strokeWidth: 2.2 })}<span>${t('comparison.selectThis')}</span></span>`
                    }
                  </button>
                </td>
              `;
                })
                .join('')}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

export function renderSelectedPlanBar(plans, selectedPlanSlug) {
  if (!selectedPlanSlug) {
    return '';
  }

  const plan = getLocalizedPlan(plans.find((item) => item.slug === selectedPlanSlug));
  if (!plan) {
    return '';
  }

  const planTitle = plan.displayName ?? getPlanDisplayName(plan);

  return `
    <aside class="provider-comparison-selection" aria-live="polite">
      <div class="provider-comparison-selection-copy">
        <span class="provider-comparison-selection-eyebrow">${t('comparison.yourSelection')}</span>
        <strong>${planTitle}</strong>
        <p>${plan.provider} · ${t('plan.premiumFrom')} ${formatCurrency(plan.monthlyPremium)} ${t('plan.perMonth')}</p>
      </div>
      <div class="provider-comparison-selection-actions">
        <a class="button button-secondary" href="${appUrl(`/plans/${plan.slug}`)}">${t('plan.viewDetails')}</a>
        <button class="button button-primary" type="button" data-open-quote="true" data-plan-id="${plan.id}">
          ${t('comparison.consultPlan')}
        </button>
      </div>
    </aside>
  `;
}

export function renderSectionHeader({ eyebrow, title, description, center = false }) {
  return `
    <div class="section-header ${center ? 'section-header-center' : ''}">
      ${eyebrow ? renderEyebrow(eyebrow) : ''}
      <h2>${title}</h2>
      ${description ? `<p>${description}</p>` : ''}
    </div>
  `;
}

export function renderPageHero({
  eyebrow,
  title,
  titleLine2 = '',
  description = '',
  titleId = '',
  ariaLabel = '',
  actions = '',
  extra = '',
  wide = false,
  backgroundImage = 'assets/hero-background.png',
  backgroundVersion = '1',
}) {
  const ariaAttrs = ariaLabel
    ? ` aria-label="${ariaLabel}"`
    : titleId
      ? ` aria-labelledby="${titleId}"`
      : '';

  const titleMarkup = titleLine2
    ? `<span class="hero-title-line">${title}</span><span class="hero-title-line">${titleLine2}</span>`
    : title;

  return `
    <section
      class="hero-section page-hero-banner"
      style="--hero-background: url('${staticUrl(backgroundImage)}?v=${backgroundVersion}')"
      ${ariaAttrs}
    >
      <div class="hero-section-inner">
        <div class="hero-copy ${wide ? 'hero-copy-wide' : ''}">
          ${eyebrow ? renderEyebrow(eyebrow, 'hero-eyebrow') : ''}
          <h1${titleId ? ` id="${titleId}"` : ''}${titleLine2 ? ' class="hero-title-stack"' : ''}>${titleMarkup}</h1>
          ${description ? `<p>${description}</p>` : ''}
          ${extra}
          ${actions ? `<div class="hero-actions">${actions}</div>` : ''}
        </div>
      </div>
    </section>
  `;
}

export function renderPlanCard(plan, compareIds = []) {
  const localized = getLocalizedPlan(plan);
  const inCompare = compareIds.includes(plan.id);
  const planTitle = localized.displayName ?? getPlanDisplayName(plan);
  const providerTag = `<span class="plan-provider-tag">${plan.provider}</span>`;
  const mediaMarkup = plan.image
    ? `
      <div class="plan-card-media plan-card-media--banner">
        ${providerTag}
        <img
          class="plan-card-image"
          src="${staticUrl(plan.image)}"
          alt="${planTitle}"
          loading="lazy"
          decoding="async"
        />
      </div>
    `
    : `
      <div class="plan-card-media plan-card-media-${plan.category}">
        ${providerTag}
        <span class="plan-badge">${localized.badge}</span>
        <div class="plan-media-copy">
          <strong>${localized.category}</strong>
          <span>${localized.highlight}</span>
        </div>
      </div>
    `;
  return `
    <article class="plan-card">
      ${mediaMarkup}
      <div class="plan-card-body">
        <div class="plan-card-heading">
          <h3>${planTitle}</h3>
        </div>
        <p class="plan-description">${localized.description}</p>
        <div class="plan-actions">
          <a class="button button-primary" href="${appUrl(`/plans/${plan.slug}`)}">${t('plan.viewDetails')}</a>
          <button class="button button-secondary compare-toggle" type="button" data-plan-id="${plan.id}">
            ${inCompare ? t('plan.removeCompare') : t('plan.compare')}
          </button>
        </div>
      </div>
    </article>
  `;
}

export function renderCategoryCard(item) {
  return `
    <article class="category-card">
      <div class="category-card-top">
        <span class="category-icon">${icon(item.icon)}</span>
        <span class="category-tag">${item.tag}</span>
      </div>
      <div class="category-card-body">
        <h3>${item.name}</h3>
        <p>${item.summary}</p>
        <ul class="category-points">
          ${item.points
            .map(
              (point) => `
                <li>
                  <span class="category-point-icon" aria-hidden="true">${icon('circle', { size: 8, fill: 'currentColor', strokeWidth: 0 })}</span>
                  <span>${point}</span>
                </li>
              `,
            )
            .join('')}
        </ul>
      </div>
      <div class="category-card-footer">
        <a href="${appUrl(`/categories/${item.slug ?? encodeURIComponent(item.name)}`)}" class="inline-link">${t('category.viewPlans')}</a>
        <span class="category-arrow">${icon('arrowUpRight', { size: 20, strokeWidth: 2.2 })}</span>
      </div>
    </article>
  `;
}

export function renderTrustCard(item, highlighted = false) {
  return `
    <article class="trust-card ${highlighted ? 'trust-card-highlighted' : ''}">
      <span class="trust-icon">${icon(item.icon)}</span>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    </article>
  `;
}

export function renderArticleCard(article) {
  return `
    <article class="article-card">
      <div class="article-card-media">
        <img
          src="${article.coverImage}"
          alt="${article.title}"
          class="article-card-image"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div class="article-card-body">
        <span class="article-meta">${article.category} • ${article.readTime}</span>
        <h3>${article.title}</h3>
        <p>${article.excerpt}</p>
        <div class="article-footer">
          <span>${article.publishedAt}</span>
          <a href="${appUrl(`/articles/${article.slug}`)}" class="inline-link">${t('articles.readArticle')}</a>
        </div>
      </div>
    </article>
  `;
}

export function renderFeaturedArticleCard(article) {
  return `
    <article class="article-featured-card">
      <a href="${appUrl(`/articles/${article.slug}`)}" class="article-featured-media" aria-hidden="true" tabindex="-1">
        <img
          src="${article.coverImage}"
          alt=""
          class="article-featured-image"
          loading="lazy"
          decoding="async"
        />
      </a>
      <div class="article-featured-body">
        <span class="article-featured-badge">${t('articles.featuredLabel')}</span>
        <span class="article-meta">${article.category} • ${article.readTime}</span>
        <h2><a href="${appUrl(`/articles/${article.slug}`)}">${article.title}</a></h2>
        <p>${article.excerpt}</p>
        <div class="article-featured-footer">
          <span>${article.publishedAt}</span>
          <a href="${appUrl(`/articles/${article.slug}`)}" class="button button-primary">${t('articles.readArticle')}</a>
        </div>
      </div>
    </article>
  `;
}

export function renderTestimonialCard(item) {
  return `
    <article class="testimonial-card">
      <div class="stars">${renderStars(5)}</div>
      <p>${item.message}</p>
      <div class="testimonial-meta">
        <span class="avatar" aria-hidden="true">${icon('user', { size: 20, strokeWidth: 2.1 })}</span>
        <div>
          <strong>${item.name}</strong>
          <span>${item.role}</span>
        </div>
      </div>
    </article>
  `;
}

export function renderFaqItem(item, index) {
  return `
    <article class="faq-item ${index === 0 ? 'faq-item-open' : ''}" data-faq-index="${index}">
      <button class="faq-question" type="button" aria-expanded="${index === 0 ? 'true' : 'false'}">
        <span class="faq-question-copy">
          <span class="faq-question-label">${t('home.faqQuestionLabel')}</span>
          <span class="faq-question-text">${item.question}</span>
        </span>
        <span class="faq-toggle" aria-hidden="true">${index === 0 ? icon('minus', { size: 18, strokeWidth: 2.4 }) : icon('plus', { size: 18, strokeWidth: 2.4 })}</span>
      </button>
      <div class="faq-answer">
        <div class="faq-answer-inner">
          <span class="faq-answer-label">${t('home.faqAnswerLabel')}</span>
          <p>${item.answer}</p>
        </div>
      </div>
    </article>
  `;
}

export function renderLoadingState(label) {
  return `
    <div class="state-panel">
      <div class="spinner"></div>
      <p>${label ?? t('state.loading')}</p>
    </div>
  `;
}

export function renderEmptyState({
  title = t('state.emptyTitle'),
  description = t('state.emptyDesc'),
  actionLabel = '',
  actionHref = appUrl('/plans'),
}) {
  return `
    <div class="state-panel">
      <h3>${title}</h3>
      <p>${description}</p>
      ${actionLabel ? `<a class="button button-primary" href="${actionHref}">${actionLabel}</a>` : ''}
    </div>
  `;
}

export function renderErrorState(message = t('state.errorDefault')) {
  return `
    <div class="state-panel error-state">
      <h3>${t('state.errorTitle')}</h3>
      <p>${message}</p>
      <a class="button button-primary" href="${appUrl('/')}">${t('state.backHome')}</a>
    </div>
  `;
}

export function renderRequestTable(requests, plansById) {
  return `
    <div class="table-shell">
      <table class="request-table">
        <thead>
          <tr>
            <th>${t('table.requester')}</th>
            <th>${t('table.planInterest')}</th>
            <th>${t('table.contactChannel')}</th>
            <th>${t('table.status')}</th>
            <th>${t('table.lastUpdated')}</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          ${requests
            .map((request) => {
              const plan = plansById.get(request.planId);
              return `
                <tr>
                  <td>
                    <strong>${request.fullName}</strong>
                    <span>${request.phone}</span>
                  </td>
                  <td>
                    <strong>${plan ? getPlanDisplayName(plan) : t('table.noPlan')}</strong>
                    <span>${request.coverageGoal}</span>
                  </td>
                  <td>${request.contactPreference}</td>
                  <td><span class="status-pill">${request.status}</span></td>
                  <td>${formatDate(request.createdAt)}</td>
                  <td class="table-actions">
                    <button class="button button-ghost request-edit" data-request-id="${request.id}">${t('table.edit')}</button>
                    <button class="button button-ghost danger request-delete" data-request-id="${request.id}">${t('table.delete')}</button>
                  </td>
                </tr>
              `;
            })
            .join('')}
        </tbody>
      </table>
    </div>
  `;
}
