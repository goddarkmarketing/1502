import { renderShell } from '../components/layout.js';
import { appPathFromUrl, getRoute, isInternalAppUrl, migrateLegacyHashRoute, navigate } from './router.js';
import {
  changeLocale,
  clearCompare,
  deleteRequest,
  getState,
  hydrateStore,
  removeCompare,
  selectPlan,
  setComparisonPlan,
  setState,
  subscribe,
  toggleCompare,
  upsertRequest,
} from './store.js';
import { t } from '../i18n/index.js';
import { plans } from '../data/mockData.js';
import { buildWhatsAppUrl } from '../utils/contactLinks.js';
import { renderAboutPage } from '../pages/aboutPage.js';
import { renderArticleDetailPage } from '../pages/articleDetailPage.js';
import { renderArticlesPage } from '../pages/articlesPage.js';
import { renderCategoryPage } from '../pages/categoryPage.js';
import { renderContactPage } from '../pages/contactPage.js';
import { renderFaqPage } from '../pages/faqPage.js';
import { renderHomePage } from '../pages/homePage.js';
import { renderComparePage } from '../pages/comparePage.js';
import { renderInsuranceCategoryDetailPage } from '../pages/insuranceCategoryDetailPage.js';
import { renderNotFoundPage } from '../pages/notFoundPage.js';
import { renderPlanDetailPage } from '../pages/planDetailPage.js';
import { renderPlansPage } from '../pages/plansPage.js';

let rootElement = null;
let quoteErrors = {};

function buildQuoteDraft(existing = {}, planId = '') {
  return {
    id: existing.id ?? '',
    planId: existing.planId ?? planId ?? '',
    fullName: existing.fullName ?? '',
    email: existing.email ?? '',
    phone: existing.phone ?? '',
    ageRange: existing.ageRange ?? '',
    contactPreference: existing.contactPreference ?? 'whatsapp',
    coverageGoal: existing.coverageGoal ?? '',
    note: existing.note ?? '',
  };
}

function openQuoteModal(planId = '', requestId = '') {
  const state = getState();
  const existingRequest = requestId ? state.requests.find((request) => request.id === requestId) : null;
  quoteErrors = {};
  setState({
    quoteModalOpen: true,
    editingRequestId: requestId || null,
    quoteDraft: buildQuoteDraft(existingRequest ?? {}, planId),
  });
}

function closeQuoteModal() {
  quoteErrors = {};
  setState({
    quoteModalOpen: false,
    editingRequestId: null,
    quoteDraft: null,
  });
}

function validateQuoteForm(formValues) {
  const errors = {};

  if (!formValues.fullName.trim()) {
    errors.fullName = t('validation.fullName');
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
    errors.email = t('validation.email');
  }

  if (!/^0[0-9]{8,9}$/.test(formValues.phone.replace(/[^0-9]/g, ''))) {
    errors.phone = t('validation.phone');
  }

  if (!formValues.ageRange) {
    errors.ageRange = t('validation.ageRange');
  }

  if (!formValues.coverageGoal.trim()) {
    errors.coverageGoal = t('validation.coverageGoal');
  }

  return errors;
}

function parseForm(event) {
  const formData = new FormData(event.target);
  return {
    id: formData.get('id')?.toString() || '',
    planId: formData.get('planId')?.toString() || '',
    fullName: formData.get('fullName')?.toString() || '',
    email: formData.get('email')?.toString() || '',
    phone: formData.get('phone')?.toString() || '',
    ageRange: formData.get('ageRange')?.toString() || '',
    contactPreference: formData.get('contactPreference')?.toString() || 'whatsapp',
    coverageGoal: formData.get('coverageGoal')?.toString() || '',
    note: formData.get('note')?.toString() || '',
  };
}

function renderCurrentPage(state) {
  const route = getRoute();
  const query = new URLSearchParams(window.location.search);

  if (route.name === 'home') {
    return renderHomePage(state);
  }

  if (route.name === 'plans') {
    return renderPlansPage(state, query);
  }

  if (route.name === 'compare') {
    return renderComparePage(state);
  }

  if (route.name === 'plan-detail') {
    return renderPlanDetailPage(route.params.slug, state);
  }

  if (route.name === 'about') {
    return renderAboutPage();
  }

  if (route.name === 'contact') {
    return renderContactPage();
  }

  if (route.name === 'faq') {
    return renderFaqPage();
  }

  if (route.name === 'articles') {
    return renderArticlesPage();
  }

  if (route.name === 'article-detail') {
    return renderArticleDetailPage(route.params.slug);
  }

  if (route.name === 'category-detail') {
    return renderCategoryPage(route.params.slug, state);
  }

  if (route.name === 'insurance-category-detail') {
    return renderInsuranceCategoryDetailPage(route.params.slug);
  }

  return renderNotFoundPage();
}

function syncLineQrPanel(root, preference) {
  const panel = root.querySelector('[data-line-qr-panel]');
  if (panel) {
    panel.hidden = preference !== 'line';
  }
}

function bindEvents() {
  rootElement.addEventListener('click', (event) => {
    const target = event.target;

    if (!(target instanceof HTMLElement)) {
      return;
    }

    const anchor = target.closest('a[href]');
    if (anchor instanceof HTMLAnchorElement && anchor.target !== '_blank') {
      const href = anchor.getAttribute('href') || '';
      if (href.startsWith('#')) {
        return;
      }
      if (!href.startsWith('mailto:') && !href.startsWith('tel:')) {
        const url = new URL(anchor.href, window.location.origin);
        if (isInternalAppUrl(url)) {
          event.preventDefault();
          navigate(appPathFromUrl(url));
          return;
        }
      }
    }

    if (target.closest('.mobile-toggle')) {
      setState({ mobileMenuOpen: !getState().mobileMenuOpen });
      return;
    }

    const localeButton = target.closest('[data-locale]');
    if (localeButton instanceof HTMLElement) {
      changeLocale(localeButton.getAttribute('data-locale') || 'th');
      return;
    }

    const quoteTrigger = target.closest('[data-open-quote]');
    if (quoteTrigger) {
      openQuoteModal(quoteTrigger.getAttribute('data-plan-id') || '');
      return;
    }

    if (target.matches('[data-modal-close="true"]') || target.closest('[data-modal-close="true"]')) {
      closeQuoteModal();
      return;
    }

    const compareButton = target.closest('.compare-toggle');
    if (compareButton) {
      toggleCompare(compareButton.getAttribute('data-plan-id'));
      render();
      return;
    }

    const compareRemoveButton = target.closest('[data-compare-remove]');
    if (compareRemoveButton) {
      removeCompare(compareRemoveButton.getAttribute('data-compare-remove'));
      render();
      return;
    }

    if (target.closest('[data-compare-clear]')) {
      clearCompare();
      render();
      return;
    }

    if (target.closest('[data-compare-view]')) {
      navigate('/compare');
      return;
    }

    const comparisonSelectButton = target.closest('.provider-comparison-select');
    if (comparisonSelectButton) {
      selectPlan(comparisonSelectButton.getAttribute('data-plan-slug') || '');
      render();
      return;
    }

    const categoryButton = target.closest('[data-filter-category]');
    if (categoryButton) {
      const form = document.querySelector('#plans-filter-form');
      const categoryInput = form?.querySelector('input[name="category"]');
      if (form && categoryInput) {
        categoryInput.value = categoryButton.getAttribute('data-filter-category') || 'ทั้งหมด';
        form.requestSubmit();
      }
      return;
    }

    const insuranceCategoryButton = target.closest('[data-insurance-category]');
    if (insuranceCategoryButton instanceof HTMLElement) {
      const categoryKey = insuranceCategoryButton.getAttribute('data-insurance-category');
      const showcase = insuranceCategoryButton.closest('.insurance-category-showcase');
      if (showcase && categoryKey) {
        showcase.querySelectorAll('[data-insurance-category]').forEach((button) => {
          const isActive = button.getAttribute('data-insurance-category') === categoryKey;
          button.classList.toggle('insurance-category-tab-active', isActive);
          button.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        showcase.querySelectorAll('[data-insurance-category-panel]').forEach((panel) => {
          panel.classList.toggle(
            'insurance-category-panel-active',
            panel.getAttribute('data-insurance-category-panel') === categoryKey,
          );
        });
      }
      return;
    }

    const sliderArrow = target.closest('[data-slider-target]');
    if (sliderArrow) {
      const sliderId = sliderArrow.getAttribute('data-slider-target');
      const slider = document.getElementById(sliderId);
      const direction = sliderArrow.getAttribute('data-slider-direction');
      if (slider) {
        moveSliderByCard(slider, direction === 'prev' ? -1 : 1);
      }
      return;
    }

    const sliderDot = target.closest('[data-slider-dot]');
    if (sliderDot) {
      const sliderId = sliderDot.getAttribute('data-slider-dot');
      const slider = document.getElementById(sliderId);
      const nextIndex = Number(sliderDot.getAttribute('data-slider-index') || '0');
      if (slider) {
        goToSliderIndex(slider, nextIndex);
      }
      return;
    }

    const faqItem = target.closest('.faq-item');
    const faqQuestion = target.closest('.faq-question');
    if (faqItem && faqQuestion) {
      document.querySelectorAll('.faq-item').forEach((item) => item.classList.remove('faq-item-open'));
      faqItem.classList.add('faq-item-open');
      document.querySelectorAll('.faq-toggle').forEach((toggle) => {
        toggle.textContent = '+';
      });
      const toggle = faqItem.querySelector('.faq-toggle');
      if (toggle) {
        toggle.textContent = '−';
      }
      return;
    }

    const editButton = target.closest('.request-edit');
    if (editButton) {
      openQuoteModal('', editButton.getAttribute('data-request-id') || '');
      return;
    }

    const deleteButton = target.closest('.request-delete');
    if (deleteButton) {
      deleteRequest(deleteButton.getAttribute('data-request-id'));
      render();
    }
  });

  rootElement.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) {
      return;
    }

    if (target.matches('.provider-comparison-plan-picker')) {
      setComparisonPlan(target.getAttribute('data-insurer-key') || '', target.value);
      render();
    }
  });

  rootElement.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLSelectElement)) {
      return;
    }

    if (target.name === 'contactPreference' && target.closest('#quote-form')) {
      syncLineQrPanel(rootElement, target.value);
    }
  });

  rootElement.addEventListener('submit', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLFormElement)) {
      return;
    }

    if (target.id === 'quote-form') {
      event.preventDefault();
      const payload = parseForm(event);
      const errors = validateQuoteForm(payload);
      const existingRequest = payload.id
        ? getState().requests.find((request) => request.id === payload.id)
        : null;

      if (Object.keys(errors).length) {
        quoteErrors = errors;
        setState({ quoteDraft: payload });
        render();
        return;
      }

      quoteErrors = {};
      const selectedPlan = payload.planId ? plans.find((plan) => plan.id === payload.planId) : null;
      upsertRequest({
        ...payload,
        id: payload.id || `qr-${crypto.randomUUID()}`,
        status: existingRequest?.status ?? 'ใหม่',
        createdAt: existingRequest?.createdAt ?? new Date().toISOString(),
      });

      if (payload.contactPreference === 'whatsapp') {
        window.open(buildWhatsAppUrl(payload, selectedPlan), '_blank', 'noopener,noreferrer');
      }

      render();
      return;
    }

    if (target.id === 'plans-filter-form') {
      event.preventDefault();
      const formData = new FormData(target);
      const query = new URLSearchParams();
      if (formData.get('q')) {
        query.set('q', formData.get('q').toString());
      }
      if (formData.get('category')) {
        query.set('category', formData.get('category').toString());
      }
      if (formData.get('sort')) {
        query.set('sort', formData.get('sort').toString());
      }
      navigate(`/plans?${query.toString()}`);
    }
  });

  window.addEventListener('popstate', () => {
    setState({ mobileMenuOpen: false });
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    render();
  });
}

function render() {
  const state = getState();
  const route = getRoute();
  const showCompareBar = route.name !== 'compare';
  rootElement.innerHTML = renderShell({
    state,
    content: renderCurrentPage(state),
    planOptions: plans,
    quoteDraft: state.quoteDraft,
    quoteErrors,
    showCompareBar,
  });
  document.body.classList.toggle('modal-open', state.quoteModalOpen);
  document.body.classList.toggle('compare-bar-open', showCompareBar && state.compareIds.length > 0);
  setupAutoSliders();
}

function getSliderCardSelector(slider) {
  return slider.dataset.sliderCard || '.category-card';
}

function getSliderVisibleCount(slider) {
  if (slider.id === 'plan-slider') {
    if (window.matchMedia('(max-width: 760px)').matches) {
      return 1;
    }
    if (window.matchMedia('(max-width: 1080px)').matches) {
      return 2;
    }
    return 3;
  }

  return 1;
}

function getSliderMaxIndex(slider, cards) {
  const visibleCount = getSliderVisibleCount(slider);
  return Math.max(0, cards.length - visibleCount);
}

function getSliderMetrics(slider) {
  const cards = Array.from(slider.querySelectorAll(getSliderCardSelector(slider)));
  if (!cards.length) {
    return { cards: [], step: slider.clientWidth, activeIndex: 0, maxIndex: 0 };
  }

  const firstCard = cards[0];
  const gap = 22;
  const step = firstCard.getBoundingClientRect().width + gap;
  const maxIndex = getSliderMaxIndex(slider, cards);
  const activeIndex = Math.max(0, Math.min(maxIndex, Math.round(slider.scrollLeft / step)));

  return { cards, step, activeIndex, maxIndex };
}

function rebuildPlanSliderDots(slider) {
  if (slider.id !== 'plan-slider') {
    return;
  }

  const dotsContainer = document.getElementById('plan-slider-dots');
  if (!dotsContainer) {
    return;
  }

  const { activeIndex, maxIndex } = getSliderMetrics(slider);
  const slideCount = maxIndex + 1;

  dotsContainer.innerHTML = Array.from({ length: slideCount }, (_, index) => {
    const isActive = index === activeIndex;
    return `
      <button
        class="slider-dot ${isActive ? 'slider-dot-active' : ''}"
        type="button"
        data-slider-dot="plan-slider"
        data-slider-index="${index}"
        aria-label="${t('home.sliderGoTo', { n: index + 1 })}"
      ></button>
    `;
  }).join('');
}

function syncSliderDots(slider) {
  if (slider.id === 'plan-slider') {
    rebuildPlanSliderDots(slider);
    return;
  }

  const sliderId = slider.id;
  const { activeIndex } = getSliderMetrics(slider);
  document.querySelectorAll(`[data-slider-dot="${sliderId}"]`).forEach((dot, index) => {
    dot.classList.toggle('slider-dot-active', index === activeIndex);
  });
}

function goToSliderIndex(slider, nextIndex) {
  const { cards, step, maxIndex } = getSliderMetrics(slider);
  const clampedIndex = Math.max(0, Math.min(maxIndex, nextIndex));
  slider.scrollTo({
    left: clampedIndex * step,
    behavior: 'smooth',
  });
  window.setTimeout(() => syncSliderDots(slider), 220);
}

function moveSliderByCard(slider, direction) {
  const { cards, activeIndex, maxIndex } = getSliderMetrics(slider);
  if (!cards.length) {
    return;
  }

  let nextIndex = activeIndex + direction;
  if (nextIndex > maxIndex) {
    nextIndex = 0;
  }
  if (nextIndex < 0) {
    nextIndex = maxIndex;
  }

  goToSliderIndex(slider, nextIndex);
}

function setupAutoSliders() {
  document.querySelectorAll('[data-auto-slider="true"]').forEach((slider) => {
    if (!(slider instanceof HTMLElement)) {
      return;
    }

    const previousTimer = Number(slider.dataset.autoSliderTimer || '0');
    if (previousTimer) {
      window.clearTimeout(previousTimer);
    }

    syncSliderDots(slider);

    slider.onscroll = () => {
      syncSliderDots(slider);
    };

    const step = () => {
      if (slider.matches(':hover') || document.hidden) {
        schedule();
        return;
      }

      const { cards, activeIndex, maxIndex } = getSliderMetrics(slider);
      if (!cards.length) {
        schedule();
        return;
      }

      const nextIndex = activeIndex >= maxIndex ? 0 : activeIndex + 1;
      goToSliderIndex(slider, nextIndex);
      schedule();
    };

    const schedule = () => {
      const timeoutId = window.setTimeout(step, 2600);
      slider.dataset.autoSliderTimer = String(timeoutId);
    };

    schedule();
  });

  const planSlider = document.getElementById('plan-slider');
  if (planSlider instanceof HTMLElement && !window.planSliderResizeBound) {
    window.planSliderResizeBound = true;
    window.addEventListener('resize', () => {
      rebuildPlanSliderDots(planSlider);
    });
  }
}

export function createApp(root) {
  rootElement = root;
  migrateLegacyHashRoute();
  bindEvents();
  subscribe(() => render());
  hydrateStore();
  render();
}
