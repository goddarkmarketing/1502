import { renderQuoteModal } from './forms.js';
import { appUrl } from '../app/router.js';

function renderFloatingContact() {
  const items = [
    {
      label: 'LINE',
      href: 'https://line.me/R/ti/p/@curatedcoverage',
      className: 'line',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="2.5" y="3" width="19" height="16" rx="8" fill="currentColor"/>
          <path d="M9.5 18.2 8.7 21l3-2h1.9c4.4 0 7.9-3 7.9-7s-3.5-7-7.9-7H10.4C6 5 2.5 8 2.5 12c0 3 2 5.6 5 6.6Z" fill="currentColor"/>
          <text x="12" y="13.6" text-anchor="middle" font-size="5.2" font-weight="700" fill="#ffffff" font-family="Arial, sans-serif">LINE</text>
        </svg>
      `,
    },
    {
      label: 'Facebook',
      href: 'https://facebook.com/insurance',
      className: 'facebook',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.5-4.7 1.3 0 2.7.2 2.7.2v2.9h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z"/>
        </svg>
      `,
    },
    {
      label: 'อีเมล',
      href: 'mailto:hello@curatedcoverage.co',
      className: 'email',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M4 6.5h16a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 20 17.5H4A1.5 1.5 0 0 1 2.5 16V8A1.5 1.5 0 0 1 4 6.5Zm-1 1.3 9 6 9-6"/>
        </svg>
      `,
    },
    {
      label: 'โทร',
      href: 'tel:021004242',
      className: 'phone',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" d="M7.2 4.5h2.2l1.2 4.1-1.8 1.8a14.7 14.7 0 0 0 4.8 4.8l1.8-1.8 4.1 1.2v2.2c0 .8-.6 1.5-1.4 1.6-.5 0-1 .1-1.4.1-7 0-12.7-5.7-12.7-12.7 0-.5 0-1 .1-1.4.1-.8.8-1.4 1.6-1.4Z"/>
        </svg>
      `,
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@insurance',
      className: 'tiktok',
      icon: `
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="currentColor" d="M16.8 3c.4 1.9 1.5 3.3 3.2 4.1v3a8.6 8.6 0 0 1-3.2-1v6.6a5.7 5.7 0 1 1-5.7-5.7c.3 0 .6 0 .9.1v3.1a2.6 2.6 0 1 0 1.7 2.5V3h3.1Z"/>
        </svg>
      `,
    },
  ];

  return `
    <details class="floating-contact">
      <summary class="floating-contact-trigger" aria-label="ช่องทางติดต่อ">
        <span class="floating-contact-ring"></span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" d="M12 4.5c4.7 0 8.5 3.1 8.5 7 0 3.3-2.7 6-6.4 6.8l-3.7 1.7.8-2.9c-4-.2-7.2-3.1-7.2-6.9 0-3.9 3.8-7 8.5-7Z"/>
          <path fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" d="M8.5 11.5h7M8.5 14.5h4.5"/>
        </svg>
      </summary>
      <div class="floating-contact-menu">
        ${items
          .map(
            (item) => `
              <a class="floating-contact-item floating-contact-item-${item.className}" href="${item.href}" target="_blank" rel="noreferrer">
                <span class="floating-contact-icon">${item.icon}</span>
                <span class="floating-contact-label">${item.label}</span>
              </a>
            `,
          )
          .join('')}
      </div>
    </details>
  `;
}

export function renderHeader(state) {
  return `
    <header class="site-header-wrap">
      <div class="site-header">
        <div class="brand-lockup">
          <a href="${appUrl('/')}" class="brand-mark">Insurance</a>
        </div>
        <nav class="site-nav ${state.mobileMenuOpen ? 'site-nav-open' : ''}">
          <a href="${appUrl('/')}" class="nav-link">หน้าแรก</a>
          <a href="${appUrl('/plans')}" class="nav-link">แผนประกัน</a>
          <a href="${appUrl('/about')}" class="nav-link">เกี่ยวกับเรา</a>
          <a href="${appUrl('/articles')}" class="nav-link">บทความ</a>
          <a href="${appUrl('/contact')}" class="nav-link">ติดต่อเรา</a>
          <button class="button button-primary nav-cta" type="button" data-open-quote="true">ส่งคำขอ</button>
        </nav>
        <button class="mobile-toggle" type="button" aria-label="เปิดเมนู">☰</button>
      </div>
    </header>
  `;
}

export function renderFooter() {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer-wrap">
      <div class="site-footer">
        <div class="footer-brand-column">
          <strong>Insurance</strong>
          <p>
            ศูนย์รวมข้อมูลแผนประกันที่ช่วยให้คุณเปรียบเทียบความคุ้มครองได้ง่ายขึ้น
            พร้อมรับคำแนะนำที่เหมาะกับความต้องการของคุณในทุกช่วงการตัดสินใจ
          </p>
          <div class="footer-contact-list">
            <span>อีเมล: hello@curatedcoverage.co</span>
            <span>โทร: 02-100-4242</span>
            <span>เวลาทำการ: ทุกวัน 09:00 - 18:00 น.</span>
          </div>
        </div>

        <div class="footer-link-column">
          <span class="footer-heading">เมนูหลัก</span>
          <a href="${appUrl('/')}">หน้าแรก</a>
          <a href="${appUrl('/plans')}">แผนทั้งหมด</a>
          <a href="${appUrl('/about')}">เกี่ยวกับเรา</a>
          <a href="${appUrl('/faq')}">คำถามที่พบบ่อย</a>
          <a href="${appUrl('/articles')}">บทความ</a>
          <a href="${appUrl('/contact')}">ติดต่อเรา</a>
        </div>

        <div class="footer-link-column">
          <span class="footer-heading">หมวดประกัน</span>
          <a href="${appUrl('/plans')}?category=สุขภาพ">ประกันสุขภาพ</a>
          <a href="${appUrl('/plans')}?category=ชีวิต">ประกันชีวิต</a>
          <a href="${appUrl('/plans')}?category=รถยนต์">ประกันรถยนต์</a>
          <a href="${appUrl('/plans')}?category=เดินทาง">ประกันเดินทาง</a>
        </div>

        <div class="footer-link-column">
          <span class="footer-heading">ข้อมูลเพิ่มเติม</span>
          <span>สำนักงานใหญ่: Bangkok, Thailand</span>
          <span>ใบอนุญาตนายหน้าประกันภัย: CC-2026-01</span>
          <span>พร้อมดูแลข้อมูลแผนประกันและประสานงานด้านคำปรึกษาอย่างต่อเนื่อง</span>
        </div>

        <div class="footer-bottom">
          <span>© ${year} Insurance. All rights reserved.</span>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </footer>
  `;
}

export function renderShell({ state, content, planOptions, quoteDraft, quoteErrors }) {
  return `
    <div class="app-shell">
      ${renderHeader(state)}
      <main>${content}</main>
      ${renderFooter()}
      ${renderFloatingContact()}
      ${renderQuoteModal({
        open: state.quoteModalOpen,
        planOptions,
        draft: quoteDraft,
        errors: quoteErrors,
      })}
      ${state.lastToast ? `<div class="toast">${state.lastToast}</div>` : ''}
    </div>
  `;
}
