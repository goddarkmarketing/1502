import { filters, plans } from '../data/mockData.js';
import { appUrl } from '../app/router.js';
import { renderEmptyState, renderPlanCard, renderSectionHeader } from '../components/ui.js';

export function renderPlansPage(state, query) {
  const keyword = (query.get('q') ?? '').trim().toLowerCase();
  const category = query.get('category') ?? 'ทั้งหมด';
  const sort = query.get('sort') ?? 'featured';

  let filteredPlans = plans.filter((plan) => {
    const matchKeyword =
      !keyword ||
      [plan.name, plan.provider, plan.category, plan.highlight, plan.description]
        .join(' ')
        .toLowerCase()
        .includes(keyword);
    const matchCategory = category === 'ทั้งหมด' || plan.category === category;

    return matchKeyword && matchCategory;
  });

  filteredPlans = filteredPlans.sort((left, right) => {
    if (sort === 'price-low') {
      return left.monthlyPremium - right.monthlyPremium;
    }

    if (sort === 'coverage-high') {
      return right.coverageAmount - left.coverageAmount;
    }

    return Number(right.featured) - Number(left.featured) || right.rating - left.rating;
  });

  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: 'Plans Directory',
        title: 'เลือกแผนที่เหมาะกับงบและเป้าหมายของคุณ',
        description:
          'ค้นหา กรอง และเปรียบเทียบแผนประกันตามงบประมาณ ความคุ้มครอง และความต้องการของคุณได้ในที่เดียว',
      })}
    </section>

    <section class="directory-layout">
      <aside class="filter-panel">
        <form id="plans-filter-form">
          <label>
            <span>ค้นหาแผนหรือผู้ให้บริการ</span>
            <input name="q" value="${keyword}" placeholder="เช่น สุขภาพ / Auto Shield" />
          </label>
          <label>
            <span>หมวดประกัน</span>
            <div class="chip-grid">
              ${filters
                .map(
                  (item) => `
                    <button class="chip ${item === category ? 'chip-active' : ''}" type="button" data-filter-category="${item}">
                      ${item}
                    </button>
                  `,
                )
                .join('')}
            </div>
          </label>
          <input type="hidden" name="category" value="${category}" />
          <label>
            <span>เรียงลำดับ</span>
            <select name="sort">
              <option value="featured" ${sort === 'featured' ? 'selected' : ''}>แนะนำก่อน</option>
              <option value="price-low" ${sort === 'price-low' ? 'selected' : ''}>เบี้ยต่ำไปสูง</option>
              <option value="coverage-high" ${sort === 'coverage-high' ? 'selected' : ''}>วงเงินสูงสุดก่อน</option>
            </select>
          </label>
          <button class="button button-primary" type="submit">อัปเดตผลลัพธ์</button>
        </form>
      </aside>
      <div class="directory-content">
        <div class="directory-toolbar">
          <div>
            <strong>${filteredPlans.length}</strong>
            <span>แผนที่ตรงกับเงื่อนไข</span>
          </div>
          <button class="button button-secondary" type="button" data-open-quote="true">ให้ช่วยเลือกแผน</button>
        </div>
        ${
          filteredPlans.length
            ? `<div class="featured-grid">${filteredPlans
                .map((plan) => renderPlanCard(plan, state.compareIds))
                .join('')}</div>`
            : renderEmptyState({
                title: 'ยังไม่พบแผนที่ตรงกับเงื่อนไข',
                description: 'ลองล้างคำค้นหาหรือเปลี่ยนหมวดประกัน แล้วระบบจะอัปเดตผลลัพธ์ให้ทันที',
                actionLabel: 'ล้างตัวกรอง',
                actionHref: appUrl('/plans'),
              })
        }
      </div>
    </section>
  `;
}
