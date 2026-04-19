import { appUrl } from '../app/router.js';
import { faqs } from '../data/mockData.js';
import { renderFaqItem, renderSectionHeader } from '../components/ui.js';

export function renderFaqPage() {
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: 'FAQ',
        title: 'คำถามที่พบบ่อยเกี่ยวกับการเลือกแผนและการขอคำปรึกษา',
        description: 'รวมคำตอบสำหรับคำถามสำคัญที่ลูกค้ามักใช้ประกอบการตัดสินใจก่อนเลือกแผนประกัน',
      })}
    </section>

    <section class="section-white faq-page-layout">
      <div class="faq-page-sidebar">
        <div class="detail-panel">
          <h3>หัวข้อยอดนิยม</h3>
          <a href="${appUrl('/plans')}">การเลือกแผนประกัน</a>
          <a href="${appUrl('/contact')}">การติดต่อที่ปรึกษา</a>
          <a href="${appUrl('/articles')}">บทความแนะนำ</a>
        </div>
      </div>
      <div class="faq-list">
        ${faqs.map((item, index) => renderFaqItem(item, index)).join('')}
      </div>
    </section>
  `;
}
