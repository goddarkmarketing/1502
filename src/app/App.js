import { renderShell } from '../components/layout.js';
import { appPathFromUrl, getRoute, isInternalAppUrl, migrateLegacyHashRoute, navigate } from './router.js';
import { deleteRequest, getState, hydrateStore, setState, subscribe, toggleCompare, upsertRequest } from './store.js';
import { plans } from '../data/mockData.js';
import { renderAboutPage } from '../pages/aboutPage.js';
import { renderArticleDetailPage } from '../pages/articleDetailPage.js';
import { renderArticlesPage } from '../pages/articlesPage.js';
import { renderCategoryPage } from '../pages/categoryPage.js';
import { renderContactPage } from '../pages/contactPage.js';
import { renderFaqPage } from '../pages/faqPage.js';
import { renderHomePage } from '../pages/homePage.js';
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
    contactPreference: existing.contactPreference ?? 'โทรกลับ',
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
    errors.fullName = 'กรุณาระบุชื่อผู้ติดต่อ';
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email.trim())) {
    errors.email = 'กรุณาระบุอีเมลให้ถูกต้อง';
  }

  if (!/^0[0-9]{8,9}$/.test(formValues.phone.replace(/[^0-9]/g, ''))) {
    errors.phone = 'กรุณาระบุเบอร์โทร 9-10 หลัก';
  }

  if (!formValues.ageRange) {
    errors.ageRange = 'กรุณาเลือกช่วงอายุ';
  }

  if (!formValues.coverageGoal.trim()) {
    errors.coverageGoal = 'กรุณาระบุเป้าหมายความคุ้มครอง';
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
    contactPreference: formData.get('contactPreference')?.toString() || 'โทรกลับ',
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

  return renderNotFoundPage();
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
      upsertRequest({
        ...payload,
        id: payload.id || `qr-${crypto.randomUUID()}`,
        status: existingRequest?.status ?? 'ใหม่',
        createdAt: existingRequest?.createdAt ?? new Date().toISOString(),
      });
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
  rootElement.innerHTML = renderShell({
    state,
    content: renderCurrentPage(state),
    planOptions: plans,
    quoteDraft: state.quoteDraft,
    quoteErrors,
  });
  document.body.classList.toggle('modal-open', state.quoteModalOpen);
  setupAutoSliders();
}

function getSliderMetrics(slider) {
  const cards = Array.from(slider.querySelectorAll('.category-card'));
  if (!cards.length) {
    return { cards: [], step: slider.clientWidth, activeIndex: 0 };
  }

  const firstCard = cards[0];
  const step = firstCard.getBoundingClientRect().width + 22;
  const activeIndex = Math.max(0, Math.min(cards.length - 1, Math.round(slider.scrollLeft / step)));

  return { cards, step, activeIndex };
}

function syncSliderDots(slider) {
  const sliderId = slider.id;
  const { activeIndex } = getSliderMetrics(slider);
  document.querySelectorAll(`[data-slider-dot="${sliderId}"]`).forEach((dot, index) => {
    dot.classList.toggle('slider-dot-active', index === activeIndex);
  });
}

function goToSliderIndex(slider, nextIndex) {
  const { cards, step } = getSliderMetrics(slider);
  const clampedIndex = Math.max(0, Math.min(cards.length - 1, nextIndex));
  slider.scrollTo({
    left: clampedIndex * step,
    behavior: 'smooth',
  });
  window.setTimeout(() => syncSliderDots(slider), 220);
}

function moveSliderByCard(slider, direction) {
  const { cards, activeIndex } = getSliderMetrics(slider);
  if (!cards.length) {
    return;
  }

  let nextIndex = activeIndex + direction;
  if (nextIndex >= cards.length) {
    nextIndex = 0;
  }
  if (nextIndex < 0) {
    nextIndex = cards.length - 1;
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

      const { cards, activeIndex } = getSliderMetrics(slider);
      if (!cards.length) {
        schedule();
        return;
      }

      const nextIndex = activeIndex >= cards.length - 1 ? 0 : activeIndex + 1;
      goToSliderIndex(slider, nextIndex);
      schedule();
    };

    const schedule = () => {
      const timeoutId = window.setTimeout(step, 2600);
      slider.dataset.autoSliderTimer = String(timeoutId);
    };

    schedule();
  });
}

export function createApp(root) {
  rootElement = root;
  migrateLegacyHashRoute();
  bindEvents();
  subscribe(() => render());
  hydrateStore();
  render();
}
