import { plans } from '../data/mockData.js';
import { appUrl } from '../app/router.js';
import { renderEmptyState } from '../components/ui.js';
import { formatCompact, formatCurrency } from '../utils/format.js';

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
            <div>
              <dt>คะแนนรีวิว</dt>
              <dd>★ ${plan.rating}</dd>
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
    </section>
  `;
}
