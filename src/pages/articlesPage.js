import { articleTopics } from '../data/mockData.js';
import { renderArticleCard, renderSectionHeader } from '../components/ui.js';

export function renderArticlesPage() {
  return `
    <section class="page-hero compact">
      ${renderSectionHeader({
        eyebrow: 'บทความ',
        title: 'สาระประกันที่ช่วยให้ตัดสินใจได้ง่ายขึ้น',
        description: 'รวมบทความสำหรับทำความเข้าใจแผนประกัน เงื่อนไขสำคัญ และแนวทางเลือกความคุ้มครองให้เหมาะกับไลฟ์สไตล์',
      })}
    </section>

    <section class="section-white articles-grid">
      ${articleTopics.map((article) => renderArticleCard(article)).join('')}
    </section>
  `;
}
