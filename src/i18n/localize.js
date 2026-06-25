import { t, getLocale } from './index.js';
import {
  articleTopics,
  categories,
  companyHighlights,
  companyMilestones,
  contactChannels,
  faqs,
  insurerComparison,
  officeLocations,
  plans,
  testimonials,
  trustPoints,
} from '../data/mockData.js';
import { insuranceCategoryShowcase } from '../data/insuranceCategories.js';
import { comparisonPlanExtras } from '../utils/insurerComparison.js';
import contentEn from './content/en.js';
import contentZh from './content/zh.js';

const contentByLocale = { en: contentEn, zh: contentZh };

function getContentMap() {
  const locale = getLocale();
  return locale === 'th' ? null : contentByLocale[locale] ?? null;
}

function contentMap(key) {
  return getContentMap()?.[key] ?? null;
}

export function getCategoryLabelSync(categoryKey) {
  const map = {
    ประกันชีวิต: () => t('filters.life'),
    สุขภาพ: () => t('filters.health'),
    โรคร้ายแรง: () => t('filters.criticalIllness'),
    ลดหย่อนภาษี: () => t('filters.taxDeduction'),
    วางแผนเกษียณ: () => t('filters.retirement'),
    ประกันมรดก: () => t('filters.estate'),
  };
  if (getLocale() === 'th') return categoryKey;
  return map[categoryKey]?.() ?? categoryKey;
}

export function getFilterLabelSync(filterValue) {
  if (filterValue === 'ทั้งหมด') return t('filters.all');
  return getCategoryLabelSync(filterValue);
}

export function getArticleCategoryLabelSync(categoryKey) {
  if (categoryKey === 'ทั้งหมด') return t('filters.all');
  const map = {
    สุขภาพ: () => t('filters.health'),
    ชีวิต: () => t('filters.life'),
    โรคร้ายแรง: () => t('filters.criticalIllness'),
    ลดหย่อนภาษี: () => t('filters.taxDeduction'),
    เดินทาง: () => t('articleCategories.travel'),
    อุบัติเหตุ: () => t('articleCategories.accident'),
  };
  if (getLocale() === 'th') return categoryKey;
  return map[categoryKey]?.() ?? categoryKey;
}

export function getLocalizedFaqs() {
  const map = contentMap('faqs');
  return faqs.map((item, index) => ({
    ...item,
    question: map?.[index]?.question ?? item.question,
    answer: map?.[index]?.answer ?? item.answer,
  }));
}

export function getLocalizedTrustPoints() {
  const map = contentMap('trustPoints');
  return trustPoints.map((item, index) => ({
    ...item,
    title: map?.[index]?.title ?? item.title,
    description: map?.[index]?.description ?? item.description,
  }));
}

export function getLocalizedTestimonials() {
  const map = contentMap('testimonials');
  return testimonials.map((item, index) => ({
    ...item,
    name: map?.[index]?.name ?? item.name,
    role: map?.[index]?.role ?? item.role,
    message: map?.[index]?.message ?? item.message,
  }));
}

export function getLocalizedCompanyHighlights() {
  const map = contentMap('companyHighlights');
  return companyHighlights.map((item, index) => ({
    ...item,
    title: map?.[index]?.title ?? item.title,
    description: map?.[index]?.description ?? item.description,
  }));
}

export function getLocalizedCompanyMilestones() {
  const map = contentMap('companyMilestones');
  return companyMilestones.map((item, index) => ({
    ...item,
    title: map?.[index]?.title ?? item.title,
    description: map?.[index]?.description ?? item.description,
  }));
}

export function getLocalizedContactChannels() {
  const map = contentMap('contactChannels');
  return contactChannels.map((item, index) => ({
    ...item,
    title: map?.[index]?.title ?? item.title,
    note: map?.[index]?.note ?? item.note,
  }));
}

export function getLocalizedOfficeLocations() {
  const map = contentMap('officeLocations');
  return officeLocations.map((item, index) => ({
    ...item,
    name: map?.[index]?.name ?? item.name,
    address: map?.[index]?.address ?? item.address,
    hours: map?.[index]?.hours ?? item.hours,
  }));
}

export function getLocalizedCategories() {
  const map = contentMap('categories');
  return categories.map((item) => {
    const localized = map?.[item.slug] ?? {};
    return {
      ...item,
      name: localized.name ?? item.name,
      tag: localized.tag ?? item.tag,
      summary: localized.summary ?? item.summary,
      points: localized.points ?? item.points,
    };
  });
}

export function getLocalizedCategory(slug) {
  return getLocalizedCategories().find((item) => item.slug === slug);
}

export function getLocalizedInsuranceCategories() {
  const map = contentMap('insuranceCategories');
  return insuranceCategoryShowcase.map((item) => {
    const localized = map?.[item.key] ?? {};
    return {
      ...item,
      label: localized.label ?? item.label,
      title: localized.title ?? item.title,
      description: localized.description ?? item.description,
      primaryAction: localized.primaryAction ?? item.primaryAction,
      secondaryAction: localized.secondaryAction ?? item.secondaryAction,
      detailLead: localized.detailLead ?? item.detailLead,
      highlights: localized.highlights ?? item.highlights,
      documents: localized.documents ?? item.documents,
    };
  });
}

export function getLocalizedInsuranceCategory(key) {
  return getLocalizedInsuranceCategories().find((item) => item.key === key);
}

export function getLocalizedArticles() {
  const map = contentMap('articles');
  return articleTopics.map((item) => {
    const localized = map?.[item.slug] ?? {};
    return {
      ...item,
      categoryKey: item.category,
      title: localized.title ?? item.title,
      excerpt: localized.excerpt ?? item.excerpt,
      category: localized.category ?? getCategoryLabelSync(item.category),
      readTime: localized.readTime ?? item.readTime,
      publishedAt: localized.publishedAt ?? item.publishedAt,
      sections: localized.sections ?? item.sections,
    };
  });
}

export function getLocalizedArticle(slug) {
  return getLocalizedArticles().find((item) => item.slug === slug);
}

export function getPlanDisplayName(plan) {
  const locale = getLocale();
  if (locale === 'en') return plan.name;
  if (locale === 'zh') {
    const map = getContentMap()?.plans?.[plan.id];
    return map?.displayName ?? plan.name;
  }
  return plan.displayNameTh ?? plan.name;
}

export function getLocalizedPlan(plan) {
  if (!plan) return plan;
  const map = getContentMap()?.plans?.[plan.id];
  if (!map) {
    return {
      ...plan,
      categoryKey: plan.category,
      displayName: getPlanDisplayName(plan),
      category: getCategoryLabelSync(plan.category),
    };
  }
  return {
    ...plan,
    categoryKey: plan.category,
    displayName: map.displayName ?? getPlanDisplayName(plan),
    category: map.category ?? getCategoryLabelSync(plan.category),
    badge: map.badge ?? plan.badge,
    highlight: map.highlight ?? plan.highlight,
    description: map.description ?? plan.description,
    benefits: map.benefits ?? plan.benefits,
    targetAudience: map.targetAudience ?? plan.targetAudience,
    waitingPeriod: map.waitingPeriod ?? plan.waitingPeriod,
  };
}

export function getLocalizedPlans() {
  return plans.map((plan) => getLocalizedPlan(plan));
}

export function getInsurerComparisonTitle() {
  if (getLocale() === 'th') return insurerComparison.title;
  return t('comparison.title');
}

export function getInsurerComparisonRows() {
  if (getLocale() === 'th') return insurerComparison.rows;
  return insurerComparison.rows.map((row) => ({
    ...row,
    label: t(`comparison.${row.key}`),
  }));
}

export function getComparisonExtra(slug) {
  const extras = comparisonPlanExtras[slug];
  if (!extras) return extras;
  const map = getContentMap()?.comparisonExtras?.[slug];
  if (!map) return extras;
  return { ...extras, ...map };
}
