import { appUrl, staticUrl } from '../app/router.js';
import { getInsuranceCategory, insuranceCategoryShowcase } from '../data/insuranceCategories.js';
import { renderEmptyState } from '../components/ui.js';

export function renderInsuranceCategoryDetailPage(slug) {
  const category = getInsuranceCategory(slug);

  if (!category) {
    return renderEmptyState({
      title: 'ไม่พบหมวดประกันที่ต้องการ',
      description: 'หมวดประกันนี้อาจถูกย้ายหรือไม่มีอยู่ในระบบ',
      actionLabel: 'กลับหน้าแรก',
      actionHref: appUrl('/'),
    });
  }

  return `
    <section class="insurance-detail-hero">
      <div class="insurance-detail-copy">
        <span class="section-eyebrow">${category.label}</span>
        <h1>${category.title}</h1>
        <p>${category.detailLead}</p>
        <div class="insurance-detail-actions">
          <button class="button button-primary" type="button" data-open-quote="true">${category.primaryAction}</button>
          <a class="button button-secondary" href="${appUrl('/')}#insurance-categories">ดูหมวดอื่น</a>
        </div>
      </div>
      <div class="insurance-detail-media">
        <img src="${staticUrl(category.image)}" alt="${category.title}" loading="eager" decoding="async" />
      </div>
    </section>

    <section class="insurance-detail-grid">
      <article class="insurance-detail-panel">
        <span class="section-eyebrow">ความคุ้มครองที่ควรดู</span>
        <h2>จุดสำคัญของ${category.title}</h2>
        <ul class="insurance-detail-list">
          ${category.highlights.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>

      <article class="insurance-detail-panel insurance-detail-panel-accent">
        <span class="section-eyebrow">ส่งให้แอดมินช่วยดู</span>
        <h2>ข้อมูลที่แนะนำให้เตรียม</h2>
        <ul class="insurance-detail-list">
          ${category.documents.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </article>
    </section>

    <section class="insurance-detail-process">
      <div>
        <span class="section-eyebrow">ขั้นตอนง่ายๆ</span>
        <h2>ส่งรายละเอียด แล้วให้ทีมงานช่วยคัดแผน</h2>
      </div>
      <div class="insurance-detail-steps">
        <article>
          <strong>1</strong>
          <h3>เลือกหมวดประกัน</h3>
          <p>เลือกประเภทที่ตรงกับความต้องการ หรือส่งรายละเอียดเพิ่มเติมหากยังไม่แน่ใจ</p>
        </article>
        <article>
          <strong>2</strong>
          <h3>แอดมินตรวจข้อมูล</h3>
          <p>ทีมงานช่วยดูเงื่อนไข งบประมาณ และความคุ้มครองที่เหมาะสมเบื้องต้น</p>
        </article>
        <article>
          <strong>3</strong>
          <h3>เสนอแผนที่เหมาะ</h3>
          <p>เปรียบเทียบตัวเลือกและส่งรายละเอียดกลับให้ตัดสินใจได้ง่ายขึ้น</p>
        </article>
      </div>
    </section>

    <section class="insurance-detail-related">
      <div class="section-header">
        <span class="section-eyebrow">หมวดประกันอื่นๆ</span>
        <h2>เลือกดูบริการประกันภัยเพิ่มเติม</h2>
      </div>
      <div class="insurance-detail-related-grid">
        ${insuranceCategoryShowcase
          .filter((item) => item.key !== category.key)
          .map(
            (item) => `
              <a class="insurance-detail-related-card" href="${appUrl(`/insurance/${item.key}`)}">
                <img src="${staticUrl(item.image)}" alt="${item.title}" loading="lazy" decoding="async" />
                <span>${item.label}</span>
                <strong>${item.title}</strong>
              </a>
            `,
          )
          .join('')}
      </div>
    </section>
  `;
}
