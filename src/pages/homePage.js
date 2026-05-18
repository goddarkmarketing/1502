import {
  articleTopics,
  faqs,
  insurerComparison,
  partners,
  plans,
  testimonials,
  trustPoints,
} from '../data/mockData.js';
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

export function renderHomePage(state) {
  return `
    <section class="hero-section">
      <div class="hero-copy">
        <span class="hero-eyebrow">แพลตฟอร์มคัดเลือกประกันออนไลน์</span>
        <h1>
          <span class="hero-line hero-line-dark">ปกป้องทุกสิ่งที่สำคัญ</span>
          <span class="hero-line hero-line-accent">เพื่อคนที่คุณรัก</span>
        </h1>
        <p>
          เปรียบเทียบแผนประกันสุขภาพ ชีวิต รถยนต์ และที่อยู่อาศัยในโครงสร้างเดียวกัน
          พร้อมส่งคำขอรับคำปรึกษาที่ติดตามต่อได้จริง
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="${appUrl('/plans')}">เลือกแผนที่ใช่</a>
          <button class="button button-secondary" type="button" data-open-quote="true">รับคำปรึกษาเบื้องต้น</button>
        </div>
      </div>
      <div class="hero-visual">
        <img
          class="hero-visual-image"
          src="${staticUrl('assets/hero-insurance-visual.png')}"
          alt="ดูแลให้ครบในทุกช่วงชีวิต — เปรียบเทียบความคุ้มครองและติดตามแผนประกันได้สะดวก"
          loading="eager"
          decoding="async"
        />
      </div>
    </section>

    <section class="section-surface">
      <div class="plan-section-top">
        ${renderSectionHeader({
          eyebrow: 'แนะนำแผนเด่น',
          title: 'ซื้อประกันออนไลน์ เลือกง่าย คุ้มครองทันที',
          description: 'ใช้ข้อมูลชุดเดียวกันในการเทียบราคา ความคุ้มครอง และเริ่มส่งคำขอได้จากทุกหน้า',
        })}
        <div class="plan-slider-controls">
          <button class="slider-arrow" type="button" data-slider-target="plan-slider" data-slider-direction="prev" aria-label="เลื่อนแผนก่อนหน้า">←</button>
          <button class="slider-arrow" type="button" data-slider-target="plan-slider" data-slider-direction="next" aria-label="เลื่อนแผนถัดไป">→</button>
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
          ${plans.map((plan) => renderPlanCard(plan, state.compareIds)).join('')}
        </div>
      </div>
      <div class="slider-dots" id="plan-slider-dots" aria-label="สถานะสไลด์แผนประกัน">
        ${Array.from({ length: Math.max(1, plans.length - 3 + 1) }, (_, index) => `
              <button
                class="slider-dot ${index === 0 ? 'slider-dot-active' : ''}"
                type="button"
                data-slider-dot="plan-slider"
                data-slider-index="${index}"
                aria-label="ไปยังสไลด์ที่ ${index + 1}"
              ></button>
            `).join('')}
      </div>
    </section>

    <section class="section-white provider-comparison-wrap">
      ${renderInsurerComparisonTable(
        buildComparisonTableData({
          plans,
          rows: insurerComparison.rows,
          title: insurerComparison.title,
          comparisonPlanIds: state.comparisonPlanIds,
          selectedPlanSlug: state.selectedPlanSlug,
        }),
      )}
      ${renderSelectedPlanBar(plans, state.selectedPlanSlug)}
    </section>

    <section class="section-surface centered-block">
      ${renderSectionHeader({
        title: 'ทำไมลูกค้าถึงไว้วางใจเรา',
        description: 'เราจัดข้อมูลให้เข้าใจง่าย เพื่อช่วยให้คุณเลือกแผนที่เหมาะสมและตัดสินใจได้มั่นใจขึ้น',
        center: true,
      })}
      <div class="trust-grid">
        ${trustPoints.map((item, index) => renderTrustCard(item, index === 1)).join('')}
      </div>
    </section>

    <section class="partner-section">
      <p class="partner-intro">พาร์ตเนอร์เครือข่ายและผู้ให้บริการตัวอย่าง</p>
      <h2 class="partner-title">เครือข่ายพันธมิตรที่ช่วยให้การดูแลของคุณต่อเนื่องทุกช่วงเวลา</h2>
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
        title: 'เสียงตอบรับจากลูกค้าตัวจริง',
        description: 'โครงสร้างรีวิวแบบเดียวกับ UI reference พร้อมใช้เป็นบล็อก social proof จริง',
        center: true,
      })}
      <div class="testimonial-grid">
        ${testimonials.map((item) => renderTestimonialCard(item)).join('')}
      </div>
    </section>

    <section class="section-white home-articles-section">
      ${renderSectionHeader({
        eyebrow: 'บทความ',
        title: 'บทความแนะนำ',
        description: 'อ่านสาระประกันที่ช่วยให้ตัดสินใจเลือกความคุ้มครองได้มั่นใจขึ้น',
        center: true,
      })}
      <div class="articles-grid home-articles-grid">
        ${articleTopics.slice(0, 3).map((article) => renderArticleCard(article)).join('')}
      </div>
      <div class="home-articles-cta">
        <a class="button button-secondary" href="${appUrl('/articles')}">ดูบทความทั้งหมด</a>
      </div>
    </section>

    <section class="section-surface faq-section">
      ${renderSectionHeader({
        title: 'คำถามที่พบบ่อย (FAQ)',
        description: 'ตอบคำถามสำคัญก่อนเริ่มใช้งานหรือส่งคำขอ',
        center: true,
      })}
      <div class="faq-list">
        ${faqs.map((item, index) => renderFaqItem(item, index)).join('')}
      </div>
    </section>

    <section class="cta-section">
      <div>
        <h2>พร้อมเริ่มต้นความคุ้มครองของคุณหรือยัง?</h2>
        <p>เริ่มเปรียบเทียบแผนที่เหมาะกับคุณ หรือส่งคำขอรับคำปรึกษาเพื่อให้ทีมงานช่วยดูแลต่อได้ทันที</p>
      </div>
      <div class="cta-actions">
        <a class="button button-light" href="${appUrl('/plans')}">เลือกแผนเลย</a>
        <button class="button button-secondary inverted" type="button" data-open-quote="true">ส่งคำขอรับคำปรึกษา</button>
      </div>
    </section>
  `;
}
