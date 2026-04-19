import { appUrl } from '../app/router.js';
import { contactChannels, officeLocations } from '../data/mockData.js';
import { renderSectionHeader } from '../components/ui.js';

function renderContactIcon(title) {
  const iconClass = title.includes('โทร')
    ? 'phone'
    : title.includes('เมล') || title.includes('อีเมล')
      ? 'mail'
      : 'line';

  if (iconClass === 'phone') {
    return `
      <span class="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <path d="M7.2 4.5h2.2l1.2 4.1-1.8 1.8a14.7 14.7 0 0 0 4.8 4.8l1.8-1.8 4.1 1.2v2.2c0 .8-.6 1.5-1.4 1.6-.5 0-1 .1-1.4.1-7 0-12.7-5.7-12.7-12.7 0-.5 0-1 .1-1.4.1-.8.8-1.4 1.6-1.4Z" />
        </svg>
      </span>
    `;
  }

  if (iconClass === 'mail') {
    return `
      <span class="contact-icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none">
          <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
          <path d="m5.5 8 6.5 5 6.5-5" />
        </svg>
      </span>
    `;
  }

  return `
    <span class="contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M12 4.5c4.7 0 8.5 3.1 8.5 7 0 3.3-2.7 6-6.4 6.8l-3.7 1.7.8-2.9c-4-.2-7.2-3.1-7.2-6.9 0-3.9 3.8-7 8.5-7Z" />
        <path d="M8.5 11.5h7" />
        <path d="M8.5 14.5h4.5" />
      </svg>
    </span>
  `;
}

export function renderContactPage() {
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: 'ติดต่อเรา',
        title: 'สอบถามข้อมูลแผนประกันหรือนัดหมายที่ปรึกษาได้ตามช่องทางที่สะดวก',
        description: 'ทีมงานพร้อมช่วยแนะนำแผนที่เหมาะกับเป้าหมายของคุณ และประสานการติดต่อกลับอย่างรวดเร็ว',
      })}
    </section>

    <section class="contact-stack">
      <div class="contact-channel-list">
        ${contactChannels
          .map(
            (item) => `
              <article class="detail-panel contact-channel-card">
                <div class="contact-channel-label">
                  ${renderContactIcon(item.title)}
                  <h3>${item.title}</h3>
                </div>
                <div class="contact-channel-body">
                  <strong>${item.detail}</strong>
                  <p>${item.note}</p>
                </div>
              </article>
            `,
          )
          .join('')}
      </div>

      <div class="detail-panel contact-office-panel">
        <h2>สำนักงานและเวลาทำการ</h2>
        <div class="location-list">
          ${officeLocations
            .map(
              (item) => `
                <article class="location-item">
                  <h3>${item.name}</h3>
                  <p>${item.address}</p>
                  <span>${item.hours}</span>
                </article>
              `,
            )
            .join('')}
        </div>
        <div class="cta-actions">
          <button class="button button-primary" type="button" data-open-quote="true">ส่งคำขอรับคำปรึกษา</button>
          <a class="button button-secondary" href="${appUrl('/faq')}">ดูคำถามที่พบบ่อย</a>
        </div>
      </div>

      <div class="detail-panel map-panel contact-map-panel">
        <h2>ตำแหน่งที่ตั้ง</h2>
        <div class="map-embed-shell">
          <iframe
            title="Insurance Map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=100.53%2C13.72%2C100.57%2C13.75&layer=mapnik&marker=13.7367%2C100.5610"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p>สำนักงานใหญ่ตั้งอยู่ในย่านสุขุมวิท กรุงเทพฯ เดินทางสะดวกทั้งรถไฟฟ้าและรถยนต์ส่วนตัว</p>
      </div>
    </section>
  `;
}
