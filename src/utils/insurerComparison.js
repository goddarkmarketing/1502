import { formatCompact, formatCurrency } from './format.js';
import { t } from '../i18n/index.js';
import { getComparisonExtra, getLocalizedPlan, getPlanDisplayName } from '../i18n/localize.js';

export const comparisonInsurers = [
  {
    key: 'chubb-life',
    provider: 'ชับบ์ ไลฟ์ · ประกันชีวิต',
    logo: 'assets/category-showcase/other.png',
    matchCategory: 'ประกันชีวิต',
  },
  {
    key: 'chubb-health',
    provider: 'ชับบ์ ไลฟ์ · สุขภาพ',
    logo: 'assets/category-showcase/health.png',
    matchCategory: 'สุขภาพ',
  },
  {
    key: 'chubb-estate',
    provider: 'ชับบ์ ไลฟ์ · มรดก',
    logo: 'assets/category-showcase/other.png',
    matchCategory: 'ประกันมรดก',
  },
];

export const defaultComparisonPlanIds = {
  'chubb-life': 'chubb-life-protector',
  'chubb-health': 'chubb-3d-health-excellence',
  'chubb-estate': 'chubb-lifetime-value',
};

export const comparisonPlanExtras = {
  'chubb-life-protector': {
    provider: 'ชับบ์ ไลฟ์',
    deductible: '—',
    network: '—',
    hospitalCover: '—',
    oncology: '—',
  },
  'chubb-3d-health-excellence': {
    provider: 'ชับบ์ ไลฟ์',
    deductible: 'ตามเงื่อนไขแผน',
    network: 'เครือข่ายโรงพยาบาลชับบ์ ไลฟ์ แคร์',
    hospitalCover: 'ครอบคลุมทุกมิติสุขภาพ',
    oncology: 'ตามเงื่อนไขแผน',
  },
  'chubb-health-premium-extra': {
    provider: 'ชับบ์ ไลฟ์',
    deductible: 'ตามเงื่อนไขสัญญาเพิ่มเติม',
    network: 'โรงพยาบาลตามเงื่อนไขกรมธรรม์',
    hospitalCover: 'เหมาจ่ายตามจริง',
    oncology: 'ตามเงื่อนไขแผน',
  },
  'chubb-lifetime-value': {
    provider: 'ชับบ์ ไลฟ์',
    deductible: '—',
    network: '—',
    hospitalCover: '—',
    oncology: '—',
  },
  'chubb-retirement-plus-happiness': {
    provider: 'ชับบ์ ไลฟ์',
    deductible: 'ไม่มี',
    network: '—',
    hospitalCover: '—',
    oncology: '—',
  },
  'chubb-ci-extra-plus': {
    provider: 'ชับบ์ ไลฟ์',
    deductible: '—',
    network: '—',
    hospitalCover: '—',
    oncology: 'คุ้มครองโรคร้ายแรงตลอดชีพ',
  },
  'chubb-basic-work-play': {
    provider: 'ชับบ์สามัคคี',
    deductible: 'ตามเงื่อนไขแผน',
    network: '—',
    hospitalCover: 'ตามเงื่อนไขแผน',
    oncology: 'ตามเงื่อนไขแผน',
  },
};

export function getPlansForInsurer(plans, insurer) {
  const insurerPlanOrder = {
    'chubb-life': [
      'chubb-life-protector',
      'chubb-life-protector-90-20',
      'chubb-whole-life-extra',
    ],
    'chubb-health': [
      'chubb-3d-health-excellence',
      'chubb-health-premium-extra',
      'chubb-basic-work-play',
    ],
    'chubb-estate': [
      'chubb-lifetime-value',
      'chubb-signature-legacy-10',
      'chubb-century-life-protection',
    ],
  };
  const order = insurerPlanOrder[insurer.key] ?? [];
  const insurerPlans = plans.filter((plan) => plan.category === insurer.matchCategory);

  if (!order.length) {
    return insurerPlans;
  }

  return [...insurerPlans].sort((left, right) => {
    const leftIndex = order.indexOf(left.id);
    const rightIndex = order.indexOf(right.id);
    return (leftIndex === -1 ? 999 : leftIndex) - (rightIndex === -1 ? 999 : rightIndex);
  });
}

function buildComparisonValues(plan, insurer) {
  const localized = getLocalizedPlan(plan);
  const extras = getComparisonExtra(plan.slug) ?? {};

  return {
    provider: extras.provider ?? insurer.provider,
    planName: localized.displayName ?? getPlanDisplayName(plan),
    annualLimit:
      plan.coverageAmount > 0
        ? `${formatCompact(plan.coverageAmount)} ${t('plan.baht')}`
        : t('comparison.asPerPlan'),
    annualPremium:
      plan.annualPremium > 0 ? formatCurrency(plan.annualPremium) : t('comparison.inquireDetails'),
    deductible: extras.deductible ?? t('comparison.perPlanTerms'),
    network: extras.network ?? t('comparison.perNetwork'),
    hospitalCover: extras.hospitalCover ?? t('comparison.perPlanTerms'),
    oncology: extras.oncology ?? t('comparison.perPlanTerms'),
  };
}

export function buildComparisonColumns(plans, comparisonPlanIds) {
  return comparisonInsurers
    .map((insurer) => {
      const insurerPlans = getPlansForInsurer(plans, insurer);
      const preferredId = comparisonPlanIds[insurer.key] ?? defaultComparisonPlanIds[insurer.key];
      const plan =
        insurerPlans.find((item) => item.id === preferredId) ?? insurerPlans[0] ?? null;

      if (!plan) {
        return null;
      }

      return {
        insurerKey: insurer.key,
        provider: insurer.provider,
        logo: insurer.logo,
        planId: plan.id,
        slug: plan.slug,
        planOptions: insurerPlans.map((item) => ({
          id: item.id,
          label: getPlanDisplayName(item),
        })),
        values: buildComparisonValues(plan, insurer),
      };
    })
    .filter(Boolean);
}

export function buildComparisonTableData({
  plans,
  rows,
  title,
  comparisonPlanIds,
  selectedPlanSlug,
}) {
  return {
    title,
    rows,
    columns: buildComparisonColumns(plans, comparisonPlanIds),
    selectedPlanSlug,
  };
}
