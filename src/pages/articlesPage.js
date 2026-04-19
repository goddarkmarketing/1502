import { appUrl } from '../app/router.js';
import { articleTopics } from '../data/mockData.js';
import { renderSectionHeader } from '../components/ui.js';

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
      ${articleTopics
        .map(
          (article) => `
            <article class="article-card">
              <div class="article-card-media">
                <img src="${article.coverImage}" alt="${article.title}" class="article-card-image" />
              </div>
              <div class="article-card-body">
                <span class="article-meta">${article.category} • ${article.readTime}</span>
                <h3>${article.title}</h3>
                <p>${article.excerpt}</p>
                <div class="article-footer">
                  <span>${article.publishedAt}</span>
                  <a href="${appUrl(`/articles/${article.slug}`)}" class="inline-link">อ่านบทความ</a>
                </div>
              </div>
            </article>
          `,
        )
        .join('')}
    </section>
  `;
}
