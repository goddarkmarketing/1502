import { appUrl } from '../app/router.js';
import { articleTopics } from '../data/mockData.js';
import { renderEmptyState } from '../components/ui.js';

export function renderArticleDetailPage(slug) {
  const article = articleTopics.find((item) => item.slug === slug);

  if (!article) {
    return renderEmptyState({
      title: 'ไม่พบบทความที่ต้องการ',
      description: 'บทความนี้อาจถูกย้ายหรือไม่มีอยู่ในระบบแล้ว',
      actionLabel: 'กลับไปหน้าบทความ',
      actionHref: appUrl('/articles'),
    });
  }

  const relatedArticles = articleTopics.filter((item) => item.slug !== article.slug).slice(0, 3);

  return `
    <section class="article-detail-hero">
      <span class="section-eyebrow">${article.category}</span>
      <h1>${article.title}</h1>
      <p>${article.excerpt}</p>
      <div class="article-detail-meta">
        <span>${article.publishedAt}</span>
        <span>${article.readTime}</span>
      </div>
      <div class="article-cover-shell">
        <img src="${article.coverImage}" alt="${article.title}" class="article-cover-image" />
      </div>
    </section>

    <section class="article-detail-layout">
      <article class="article-detail-body">
        ${article.sections
          .map(
            (section) => `
              <section class="article-body-section">
                <h2>${section.heading}</h2>
                <p>${section.body}</p>
              </section>
            `,
          )
          .join('')}

        <div class="article-callout">
          <strong>ต้องการคำแนะนำเพิ่มเติม?</strong>
          <p>คุณสามารถเปิดดูแผนในหมวดเดียวกัน หรือส่งคำขอรับคำปรึกษาเพื่อให้ทีมงานช่วยแนะนำตัวเลือกที่เหมาะกับคุณได้</p>
          <div class="cta-actions">
            <a class="button button-primary" href="${appUrl('/plans')}?category=${encodeURIComponent(article.category)}">ดูแผนที่เกี่ยวข้อง</a>
            <button class="button button-secondary" type="button" data-open-quote="true">ส่งคำขอรับคำปรึกษา</button>
          </div>
        </div>
      </article>

      <aside class="article-detail-sidebar">
        <div class="detail-panel">
          <h3>บทความที่เกี่ยวข้อง</h3>
          <div class="related-article-list">
            ${relatedArticles
              .map(
                (item) => `
                  <article class="related-article-item">
                    <a href="${appUrl(`/articles/${item.slug}`)}" class="related-article-link">
                      <img src="${item.coverImage}" alt="${item.title}" class="related-article-image" />
                      <div class="related-article-copy">
                        <span>${item.category}</span>
                        <strong>${item.title}</strong>
                      </div>
                    </a>
                  </article>
                `,
              )
              .join('')}
          </div>
        </div>
      </aside>
    </section>
  `;
}
