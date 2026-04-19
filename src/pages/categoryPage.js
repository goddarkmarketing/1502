import { appUrl } from '../app/router.js';
import { categories, plans } from '../data/mockData.js';
import { renderEmptyState, renderPlanCard, renderSectionHeader } from '../components/ui.js';

export function renderCategoryPage(slug, state) {
  const category = categories.find((item) => item.slug === slug);

  if (!category) {
    return renderEmptyState({
      title: 'ไม่พบหมวดประกันที่ต้องการ',
      description: 'หมวดที่คุณเปิดอาจถูกย้ายหรือไม่มีอยู่ในระบบ',
      actionLabel: 'ดูแผนทั้งหมด',
      actionHref: appUrl('/plans'),
    });
  }

  const categoryPlans = plans.filter((plan) => plan.category === category.name);

  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: category.name,
        title: `เลือก${category.name}ที่เหมาะกับเป้าหมายของคุณ`,
        description: category.summary,
      })}
    </section>

    <section class="category-landing-layout">
      <aside class="detail-panel">
        <h2>จุดเด่นของหมวดนี้</h2>
        <ul class="coverage-list">
          ${category.points.map((point) => `<li>${point}</li>`).join('')}
        </ul>
        <button class="button button-primary" type="button" data-open-quote="true">ขอคำแนะนำหมวดนี้</button>
      </aside>
      <div>
        <div class="directory-toolbar">
          <div>
            <strong>${categoryPlans.length}</strong>
            <span>แผนในหมวด ${category.name}</span>
          </div>
          <a class="button button-secondary" href="${appUrl('/plans')}?category=${encodeURIComponent(category.name)}">ดูแบบเต็มหน้า</a>
        </div>
        <div class="featured-grid">
          ${categoryPlans.map((plan) => renderPlanCard(plan, state.compareIds)).join('')}
        </div>
      </div>
    </section>
  `;
}
