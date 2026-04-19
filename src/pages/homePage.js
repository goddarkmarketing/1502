import {
  categories,
  faqs,
  partners,
  plans,
  stats,
  testimonials,
  trustPoints,
} from '../data/mockData.js';
import {
  renderCategoryCard,
  renderFaqItem,
  renderPlanCard,
  renderSectionHeader,
  renderTestimonialCard,
  renderTrustCard,
} from '../components/ui.js';
import { appUrl } from '../app/router.js';

export function renderHomePage(state) {
  const featuredPlans = plans.filter((plan) => plan.featured);

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
        <div class="hero-stats">
          ${stats
            .map(
              (item) => `
                <div class="hero-stat">
                  <strong>${item.value}</strong>
                  <span>${item.label}</span>
                  <small>${item.detail}</small>
                </div>
              `,
            )
            .join('')}
        </div>
      </div>
      <div class="hero-visual">
        <div class="illustration-card">
          <img
            class="family-illustration"
            src="https://media.istockphoto.com/id/2205778151/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/%E0%B8%84%E0%B8%A3%E0%B8%AD%E0%B8%9A%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7%E0%B8%8A%E0%B8%B2%E0%B8%A7%E0%B9%80%E0%B8%AD%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B9%83%E0%B8%8A%E0%B9%89%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2%E0%B8%AD%E0%B8%A2%E0%B8%B9%E0%B9%88%E0%B8%94%E0%B9%89%E0%B8%A7%E0%B8%A2%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%9A%E0%B9%89%E0%B8%B2%E0%B8%99.jpg?s=612x612&w=0&k=20&c=YT4cag13OSyut71ckByZ-qHy3SYW_suOtjt76DMmTlA="
            alt="ครอบครัวกำลังใช้เวลาร่วมกันในบ้าน"
          />
          <div class="hero-floating-card">
            <strong>ดูแผนได้ครบในมุมมองเดียว</strong>
            <span>เปรียบเทียบความคุ้มครอง ส่งคำขอรับคำปรึกษา และติดตามรายการที่สนใจได้สะดวก</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-surface">
      ${renderSectionHeader({
        eyebrow: 'แนะนำแผนเด่น',
        title: 'ซื้อประกันออนไลน์ เลือกง่าย คุ้มครองทันที',
        description: 'ใช้ข้อมูลชุดเดียวกันในการเทียบราคา ความคุ้มครอง และเริ่มส่งคำขอได้จากทุกหน้า',
      })}
      <div class="featured-grid">
        ${featuredPlans.map((plan) => renderPlanCard(plan, state.compareIds)).join('')}
      </div>
    </section>

    <section class="section-white">
      ${renderSectionHeader({
        title: 'แผนประกันที่ครอบคลุม',
        description: 'เลือกตามหมวดที่คุณสนใจ แล้วค่อยเจาะลึกเป็นรายแผนในหน้ารายละเอียด',
      })}
      <div class="category-slider-controls">
        <button class="slider-arrow" type="button" data-slider-target="category-slider" data-slider-direction="prev" aria-label="เลื่อนซ้าย">←</button>
        <button class="slider-arrow" type="button" data-slider-target="category-slider" data-slider-direction="next" aria-label="เลื่อนขวา">→</button>
      </div>
      <div class="category-slider-shell" id="category-slider" data-auto-slider="true">
        <div class="category-slider-track">
          ${categories.map((item) => renderCategoryCard(item)).join('')}
        </div>
      </div>
      <div class="slider-dots" id="category-slider-dots" aria-label="สถานะสไลด์">
        ${categories
          .map(
            (_, index) => `
              <button
                class="slider-dot ${index === 0 ? 'slider-dot-active' : ''}"
                type="button"
                data-slider-dot="category-slider"
                data-slider-index="${index}"
                aria-label="ไปยังการ์ดที่ ${index + 1}"
              ></button>
            `,
          )
          .join('')}
      </div>
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
                        ? `<img src="${partner.logo}" alt="${partner.name} logo" class="partner-logo-image partner-logo-image-${partner.logoScale ?? 'standard'}" />`
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
