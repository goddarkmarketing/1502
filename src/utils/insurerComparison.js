import { formatCompact, formatCurrency } from './format.js';
import { t } from '../i18n/index.js';
import { getComparisonExtra, getLocalizedPlan, getPlanDisplayName } from '../i18n/localize.js';

export const comparisonInsurers = [
  {
    key: 'axa',
    provider: 'AXA',
    logo: 'assets/logos/axa.svg',
    matchProvider: /axa/i,
  },
  {
    key: 'allianz',
    provider: 'Allianz Ayudhya',
    logo: 'assets/logos/allianz.svg',
    matchProvider: /allianz/i,
  },
  {
    key: 'pacific',
    provider: 'Pacific Cross',
    logo: 'assets/logos/pacific-cross.avif',
    matchProvider: /pacific/i,
  },
];

export const defaultComparisonPlanIds = {
  allianz: 'allianz-smarter-health',
  axa: 'axa-smartcare-essential',
  pacific: 'pchi-maxima-plus',
};

export const comparisonPlanExtras = {
  'allianz-smarter-health': {
    provider: 'Allianz Ayudhya',
    deductible: 'ไม่มี',
    network: 'เลือกโรงพยาบาลได้',
    hospitalCover: 'ตามเงื่อนไขแผน',
    oncology: 'ตามเงื่อนไขแผน',
  },
  'axa-smartcare-essential-plan-4': {
    provider: 'AXA Thailand',
    deductible: 'เลือกลดเบี้ยได้',
    network: 'เลือกโรงพยาบาลได้',
    hospitalCover: 'สูงสุด 10,000 บาท/คืน',
    oncology: 'ครอบคลุมตามวงเงินแผน',
  },
  'axa-international-exclusive-platinum': {
    provider: 'AXA Thailand',
    deductible: 'ตามแผนที่เลือก',
    network: 'ทั่วโลก / เอเชีย',
    hospitalCover: 'ตามวงเงินแผน',
    oncology: 'ครอบคลุมตามวงเงินแผน',
  },
  'axa-easycare-visa-plan-2': {
    provider: 'AXA Thailand',
    deductible: 'เลือกลดเบี้ยได้',
    network: 'ตามเครือข่ายแผน',
    hospitalCover: 'ตามเงื่อนไขแผน',
    oncology: 'ตามเงื่อนไขแผน',
  },
  'pacific-cross-standard-extra': {
    provider: 'Pacific Cross',
    deductible: 'มีตัวเลือก deductible',
    network: 'เครือข่าย 450+ แห่ง',
    hospitalCover: 'ตามเงื่อนไขแผน',
    oncology: 'ตามเงื่อนไขแผน',
  },
  'pacific-cross-maxima': {
    provider: 'Pacific Cross',
    deductible: 'มีตัวเลือก deductible',
    network: 'เครือข่าย 450+ แห่ง',
    hospitalCover: 'สูงสุด 5,000 บาท/คืน',
    oncology: 'ครอบคลุมตามวงเงินแผน',
  },
  'pacific-cross-maxima-plus': {
    provider: 'Pacific Cross',
    deductible: 'ไม่มี',
    network: 'เครือข่าย 450+ แห่ง',
    hospitalCover: 'สูงสุด 6,000 บาท/คืน',
    oncology: 'ครอบคลุมเต็มจำนวน',
  },
};

export function getPlansForInsurer(plans, insurer) {
  const insurerPlanOrder = {
    axa: ['axa-smartcare-essential', 'axa-easycare-visa-plan-2', 'axa-international-exclusive-platinum'],
    pacific: ['pchi-maxima-plus', 'pchi-maxima', 'pchi-standard-extra'],
    allianz: ['allianz-smarter-health'],
  };
  const order = insurerPlanOrder[insurer.key] ?? [];
  const insurerPlans = plans.filter((plan) => insurer.matchProvider.test(plan.provider));

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
  return comparisonInsurers.map((insurer) => {
    const insurerPlans = getPlansForInsurer(plans, insurer);
    const preferredId = comparisonPlanIds[insurer.key] ?? defaultComparisonPlanIds[insurer.key];
    const plan =
      insurerPlans.find((item) => item.id === preferredId) ??
      insurerPlans[0] ??
      null;

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
  }).filter(Boolean);
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
