import { plans } from '../data/mockData.js';
import { appUrl, staticUrl } from '../app/router.js';
import { renderEmptyState } from '../components/ui.js';
import { formatCompact, formatCurrency } from '../utils/format.js';

function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderPricingSection(plan) {
  const hasTables = Array.isArray(plan.pricingTables) && plan.pricingTables.length > 0;
  const pdfPaths = Array.isArray(plan.brochurePdfs)
    ? plan.brochurePdfs
    : plan.brochurePdf
      ? [plan.brochurePdf]
      : [];

  if (!hasTables && pdfPaths.length === 0) {
    return '';
  }

  const tablesHtml = hasTables
    ? plan.pricingTables
        .map((table) => {
          const title = table.title ? `<h3>${escapeHtml(table.title)}</h3>` : '<h3>ตารางเบี้ยประกันภัย</h3>';
          const thead = `<tr>${table.columns.map((c) => `<th>${escapeHtml(c)}</th>`).join('')}</tr>`;
          const tbody = table.rows
            .map((row) => `<tr>${row.map((cell) => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`)
            .join('');
          const caption = table.caption
            ? `<p class="pricing-table-caption">${escapeHtml(table.caption)}</p>`
            : '';
          return `
            <div class="pricing-table-block">
              <div class="pricing-table-head">
                ${title}
                <span class="pricing-table-unit">หน่วย: บาท</span>
              </div>
              <div class="table-shell plan-pricing-table-shell">
                <table class="plan-pricing-table plan-pricing-table-premium">
                  <thead>${thead}</thead>
                  <tbody>${tbody}</tbody>
                </table>
              </div>
              ${caption}
            </div>
          `;
        })
        .join('')
    : '';

  const noTableNotice =
    !hasTables && pdfPaths.length
      ? `
        <p class="pricing-table-caption pricing-table-caption--solo">
          ตารางเบี้ยในโบรชัวร์ฉบับนี้อาจอยู่ในรูปแบบภาพหรือหลายหน้า — กรุณาเปิดไฟล์ PDF ด้านล่างเพื่อดูตารางราคาต้นฉบับทั้งหมด
        </p>
      `
      : '';

  const pdfBlock =
    pdfPaths.length > 0
      ? `
      <div class="brochure-pdf-wrap brochure-pdf-list">
        ${pdfPaths
          .map((rel, idx) => {
            const href = staticUrl(rel);
            const name = rel.split('/').pop() || rel;
            return `
          <p class="brochure-pdf-item">
            <a class="inline-link brochure-pdf-link" href="${href}" target="_blank" rel="noreferrer" title="${escapeHtml(rel)}">
              เปิดไฟล์ PDF${pdfPaths.length > 1 ? ` (${idx + 1}/${pdfPaths.length})` : ''}: ${escapeHtml(name)}
            </a>
          </p>`;
          })
          .join('')}
      </div>
    `
      : '';

  return `
    <section class="detail-panel pricing-table-section" aria-labelledby="plan-pricing-heading">
      <h2 id="plan-pricing-heading">ตารางเบี้ยจากเอกสารแนบ</h2>
      <p class="pricing-section-lead">
        ตารางเบี้ยด้านล่างสกัดจากไฟล์ PDF ต้นฉบับของแผนนี้ — ใช้ประกอบการเปรียบเทียบเบื้องต้น และควรยืนยันอัตราสุดท้ายกับบริษัทประกัน
      </p>
      ${tablesHtml}
      ${noTableNotice}
      ${pdfBlock}
    </section>
  `;
}

export function renderPlanDetailPage(slug, state) {
  const plan = plans.find((item) => item.slug === slug);

  if (!plan) {
    return renderEmptyState({
      title: 'ไม่พบรายละเอียดแผนนี้',
      description: 'อาจมีการเปลี่ยนแปลงลิงก์หรือแผนถูกนำออกจากรายการ',
      actionLabel: 'กลับไปดูแผนทั้งหมด',
      actionHref: appUrl('/plans'),
    });
  }

  const compareActive = state.compareIds.includes(plan.id);

  return `
    <section class="detail-shell">
      <div class="detail-hero">
        <div class="detail-copy">
          <span class="section-eyebrow">${plan.category}</span>
          <h1>${plan.displayNameTh ?? plan.name}</h1>
          <p>${plan.description}</p>
          <div class="detail-highlights">
            <div>
              <span>เบี้ยรายเดือน</span>
              <strong>${formatCurrency(plan.monthlyPremium)}</strong>
            </div>
            <div>
              <span>เบี้ยรายปี</span>
              <strong>${formatCurrency(plan.annualPremium)}</strong>
            </div>
            <div>
              <span>วงเงินคุ้มครอง</span>
              <strong>${formatCompact(plan.coverageAmount)} บาท</strong>
            </div>
          </div>
          <div class="detail-actions">
            <button class="button button-primary" type="button" data-open-quote="true" data-plan-id="${plan.id}">ขอคำแนะนำแผนนี้</button>
            <button class="button button-secondary compare-toggle" type="button" data-plan-id="${plan.id}">
              ${compareActive ? 'นำออกจากเปรียบเทียบ' : 'เพิ่มไปเปรียบเทียบ'}
            </button>
          </div>
        </div>
        <div class="detail-summary-card">
          <span class="plan-badge">${plan.badge}</span>
          <h3>${plan.provider}</h3>
          <p>${plan.highlight}</p>
          <dl>
            <div>
              <dt>กลุ่มเป้าหมาย</dt>
              <dd>${plan.targetAudience}</dd>
            </div>
            <div>
              <dt>ระยะรอคอย</dt>
              <dd>${plan.waitingPeriod}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div class="detail-columns">
        <section class="detail-panel">
          <h2>ความคุ้มครองหลัก</h2>
          <ul class="coverage-list">
            ${plan.benefits.map((benefit) => `<li>${benefit}</li>`).join('')}
          </ul>
        </section>
        <section class="detail-panel">
          <h2>บริการที่ช่วยให้ตัดสินใจได้ง่ายขึ้น</h2>
          <ul class="coverage-list">
            <li>ส่งคำขอรับคำปรึกษาพร้อมข้อมูลแผนที่สนใจได้ทันที</li>
            <li>เปรียบเทียบแผนที่สนใจหลายรายการก่อนตัดสินใจ</li>
            <li>ติดตามรายการที่บันทึกไว้และกลับมาทบทวนข้อมูลได้ทุกเวลา</li>
          </ul>
        </section>
      </div>

      ${renderPricingSection(plan)}
    </section>
  `;
}
