import { formatCompact, formatCurrency, formatDate } from '../utils/format.js';
import { appUrl, staticUrl } from '../app/router.js';

function providerComparisonColumnClass(column, selectedPlanSlug) {
  return column.slug === selectedPlanSlug ? 'provider-comparison-col-selected' : '';
}

export function renderInsurerComparisonTable({ title, rows, columns, selectedPlanSlug = null }) {
  return `
    <section class="provider-comparison-section" aria-labelledby="provider-comparison-title">
      <h2 id="provider-comparison-title" class="provider-comparison-title">${title}</h2>
      <div class="provider-comparison-scroll">
        <table class="provider-comparison-table" role="grid">
          <thead>
            <tr>
              <th class="provider-comparison-corner" scope="col"><span class="sr-only">รายการเปรียบเทียบ</span></th>
              ${columns
                .map((column) => {
                  const selected = providerComparisonColumnClass(column, selectedPlanSlug);
                  return `
                <th scope="col" class="provider-comparison-brand ${selected}">
                  <div class="provider-comparison-brand-inner">
                    <img
                      class="provider-comparison-logo"
                      src="${staticUrl(column.logo)}"
                      alt="${column.provider}"
                      loading="lazy"
                      decoding="async"
                    />
                    <label class="provider-comparison-picker-label">
                      <span class="sr-only">เลือกแผน ${column.provider}</span>
                      <select
                        class="provider-comparison-plan-picker"
                        data-insurer-key="${column.insurerKey}"
                        aria-label="เลือกแผน ${column.provider}"
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
                  </div>
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
                <th scope="row" class="provider-comparison-label">${row.label}</th>
                ${columns
                  .map((column) => {
                    const cell = column.values[row.key] ?? '—';
                    const isPlanName = row.key === 'planName';
                    const selected = providerComparisonColumnClass(column, selectedPlanSlug);
                    return `
                  <td class="provider-comparison-cell ${selected} ${isPlanName ? 'provider-comparison-cell-plan' : ''}">
                    ${
                      isPlanName
                        ? `<a class="provider-comparison-plan-link" href="${appUrl(`/plans/${column.slug}`)}">${cell}</a>`
                        : cell
                    }
                  </td>
                `;
                  })
                  .join('')}
              </tr>
            `,
              )
              .join('')}
            <tr class="provider-comparison-row provider-comparison-row-actions">
              <th scope="row" class="provider-comparison-label">เลือกแผน</th>
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
                    ${isSelected ? 'เลือกแล้ว ✓' : 'เลือกแผนนี้'}
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

  const plan = plans.find((item) => item.slug === selectedPlanSlug);
  if (!plan) {
    return '';
  }

  const planTitle = plan.displayNameTh ?? plan.name;

  return `
    <aside class="provider-comparison-selection" aria-live="polite">
      <div class="provider-comparison-selection-copy">
        <span class="provider-comparison-selection-eyebrow">แผนที่คุณเลือก</span>
        <strong>${planTitle}</strong>
        <p>${plan.provider} · เบี้ยเริ่มต้น ${formatCurrency(plan.monthlyPremium)} / เดือน</p>
      </div>
      <div class="provider-comparison-selection-actions">
        <a class="button button-secondary" href="${appUrl(`/plans/${plan.slug}`)}">ดูรายละเอียด</a>
        <button class="button button-primary" type="button" data-open-quote="true" data-plan-id="${plan.id}">
          รับคำปรึกษาแผนนี้
        </button>
      </div>
    </aside>
  `;
}

export function renderSectionHeader({ eyebrow, title, description, center = false }) {
  return `
    <div class="section-header ${center ? 'section-header-center' : ''}">
      ${eyebrow ? `<span class="section-eyebrow">${eyebrow}</span>` : ''}
      <h2>${title}</h2>
      ${description ? `<p>${description}</p>` : ''}
    </div>
  `;
}

export function renderPlanCard(plan, compareIds = []) {
  const inCompare = compareIds.includes(plan.id);
  const planTitle = plan.displayNameTh ?? plan.name;
  const mediaMarkup = plan.image
    ? `
      <div class="plan-card-media plan-card-media--banner">
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
        <span class="plan-badge">${plan.badge}</span>
        <div class="plan-media-copy">
          <strong>${plan.category}</strong>
          <span>${plan.highlight}</span>
        </div>
      </div>
    `;
  return `
    <article class="plan-card">
      ${mediaMarkup}
      <div class="plan-card-body">
        <div class="plan-card-heading">
          <p class="plan-provider">${plan.provider}</p>
          <h3>${plan.displayNameTh ?? plan.name}</h3>
        </div>
        <p class="plan-description">${plan.description}</p>
        <div class="plan-meta-grid">
          <div>
            <span>เบี้ยเริ่มต้น</span>
            <strong>${formatCurrency(plan.monthlyPremium)} / เดือน</strong>
          </div>
          <div>
            <span>วงเงิน</span>
            <strong>${formatCompact(plan.coverageAmount)} บาท</strong>
          </div>
        </div>
        <ul class="plan-benefits-list">
          ${plan.benefits.map((benefit) => `<li>${benefit}</li>`).join('')}
        </ul>
        <div class="plan-actions">
          <a class="button button-primary" href="${appUrl(`/plans/${plan.slug}`)}">ดูรายละเอียด</a>
          <button class="button button-secondary compare-toggle" data-plan-id="${plan.id}">
            ${inCompare ? 'เอาออกจากเปรียบเทียบ' : 'เปรียบเทียบแผน'}
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
        <span class="category-icon">${item.icon}</span>
        <span class="category-tag">${item.tag}</span>
      </div>
      <div class="category-card-body">
        <h3>${item.name}</h3>
        <p>${item.summary}</p>
        <ul class="category-points">
          ${item.points.map((point) => `<li>${point}</li>`).join('')}
        </ul>
      </div>
      <div class="category-card-footer">
        <a href="${appUrl(`/categories/${item.slug ?? encodeURIComponent(item.name)}`)}" class="inline-link">ดูแผนในหมวดนี้</a>
        <span class="category-arrow">↗</span>
      </div>
    </article>
  `;
}

export function renderTrustCard(item, highlighted = false) {
  return `
    <article class="trust-card ${highlighted ? 'trust-card-highlighted' : ''}">
      <span class="trust-icon">${item.icon}</span>
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
          <a href="${appUrl(`/articles/${article.slug}`)}" class="inline-link">อ่านบทความ</a>
        </div>
      </div>
    </article>
  `;
}

export function renderTestimonialCard(item) {
  return `
    <article class="testimonial-card">
      <div class="stars">★★★★★</div>
      <p>${item.message}</p>
      <div class="testimonial-meta">
        <span class="avatar">${item.name.charAt(0)}</span>
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
      <button class="faq-question" type="button">
        <span>${item.question}</span>
        <span class="faq-toggle">${index === 0 ? '−' : '+'}</span>
      </button>
      <div class="faq-answer">
        <p>${item.answer}</p>
      </div>
    </article>
  `;
}

export function renderLoadingState(label = 'กำลังโหลดข้อมูล...') {
  return `
    <div class="state-panel">
      <div class="spinner"></div>
      <p>${label}</p>
    </div>
  `;
}

export function renderEmptyState({
  title = 'ยังไม่มีข้อมูล',
  description = 'ลองปรับตัวกรองหรือเริ่มต้นรายการใหม่อีกครั้ง',
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

export function renderErrorState(message = 'เกิดข้อผิดพลาดในการโหลดข้อมูล') {
  return `
    <div class="state-panel error-state">
      <h3>เกิดข้อผิดพลาด</h3>
      <p>${message}</p>
      <a class="button button-primary" href="${appUrl('/')}">กลับหน้าแรก</a>
    </div>
  `;
}

export function renderRequestTable(requests, plansById) {
  return `
    <div class="table-shell">
      <table class="request-table">
        <thead>
          <tr>
            <th>ผู้ขอคำปรึกษา</th>
            <th>แผนที่สนใจ</th>
            <th>ช่องทางติดต่อ</th>
            <th>สถานะ</th>
            <th>อัปเดตล่าสุด</th>
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
                    <strong>${plan?.name ?? 'ยังไม่ระบุแผน'}</strong>
                    <span>${request.coverageGoal}</span>
                  </td>
                  <td>${request.contactPreference}</td>
                  <td><span class="status-pill">${request.status}</span></td>
                  <td>${formatDate(request.createdAt)}</td>
                  <td class="table-actions">
                    <button class="button button-ghost request-edit" data-request-id="${request.id}">แก้ไข</button>
                    <button class="button button-ghost danger request-delete" data-request-id="${request.id}">ลบ</button>
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
