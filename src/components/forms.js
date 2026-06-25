import { t } from '../i18n/index.js';
import { getPlanDisplayName } from '../i18n/localize.js';
import { staticUrl } from '../app/router.js';
import { icon } from './icons.js';

const CONTACT_OPTIONS = [
  { value: 'facebook', labelKey: 'form.facebook' },
  { value: 'line', labelKey: 'form.line' },
  { value: 'phone', labelKey: 'form.callback' },
  { value: 'email', labelKey: 'form.email' },
];

function buildQuoteFormState(draft) {
  return {
    id: draft?.id ?? '',
    planId: draft?.planId ?? '',
    fullName: draft?.fullName ?? '',
    email: draft?.email ?? '',
    phone: draft?.phone ?? '',
    ageRange: draft?.ageRange ?? '',
    contactPreference: draft?.contactPreference ?? 'line',
    coverageGoal: draft?.coverageGoal ?? '',
    note: draft?.note ?? '',
  };
}

function renderQuoteFormFields({ formId, form, errors, planOptions, actionsHtml, showLineQrPanel = true }) {
  const showLineQr = showLineQrPanel && form.contactPreference === 'line';

  return `
    <form id="${formId}" class="quote-form">
      <input type="hidden" name="id" value="${form.id}" />
      <label>
        <span>${t('form.planInterest')}</span>
        <select name="planId">
          <option value="">${t('form.chooseLater')}</option>
          ${planOptions
            .map(
              (plan) =>
                `<option value="${plan.id}" ${plan.id === form.planId ? 'selected' : ''}>${getPlanDisplayName(plan)}</option>`,
            )
            .join('')}
        </select>
        ${errors.planId ? `<small class="field-error">${errors.planId}</small>` : ''}
      </label>
      <div class="form-grid">
        <label>
          <span>${t('form.fullName')}</span>
          <input name="fullName" value="${form.fullName}" placeholder="${t('form.fullNamePlaceholder')}" />
          ${errors.fullName ? `<small class="field-error">${errors.fullName}</small>` : ''}
        </label>
        <label>
          <span>${t('form.email')}</span>
          <input name="email" type="email" value="${form.email}" placeholder="name@example.com" />
          ${errors.email ? `<small class="field-error">${errors.email}</small>` : ''}
        </label>
      </div>
      <div class="form-grid">
        <label>
          <span>${t('form.phone')}</span>
          <input name="phone" value="${form.phone}" placeholder="${t('form.phonePlaceholder')}" />
          ${errors.phone ? `<small class="field-error">${errors.phone}</small>` : ''}
        </label>
        <label>
          <span>${t('form.ageRange')}</span>
          <select name="ageRange">
            <option value="">${t('form.selectAge')}</option>
            ${['18-24', '25-34', '35-44', '45-54', '55+']
              .map(
                (ageRange) =>
                  `<option value="${ageRange}" ${ageRange === form.ageRange ? 'selected' : ''}>${ageRange}</option>`,
              )
              .join('')}
          </select>
          ${errors.ageRange ? `<small class="field-error">${errors.ageRange}</small>` : ''}
        </label>
      </div>
      <div class="form-grid">
        <label>
          <span>${t('form.contactChannel')}</span>
          <select name="contactPreference">
            ${CONTACT_OPTIONS.map(
              (channel) =>
                `<option value="${channel.value}" ${channel.value === form.contactPreference ? 'selected' : ''}>${t(channel.labelKey)}</option>`,
            ).join('')}
          </select>
        </label>
        <label>
          <span>${t('form.coverageGoal')}</span>
          <input name="coverageGoal" value="${form.coverageGoal}" placeholder="${t('form.coveragePlaceholder')}" />
          ${errors.coverageGoal ? `<small class="field-error">${errors.coverageGoal}</small>` : ''}
        </label>
      </div>
      ${
        showLineQrPanel
          ? `
      <div class="contact-qr-panel" data-line-qr-panel ${showLineQr ? '' : 'hidden'}>
        <p class="contact-qr-panel-title">${t('form.lineQrTitle')}</p>
        <p class="contact-qr-panel-desc">${t('form.lineQrHint')}</p>
        <img
          src="${staticUrl('assets/contact/line-qr.png')}?v=2"
          alt="${t('form.lineQrAlt')}"
          loading="lazy"
          decoding="async"
        />
      </div>`
          : ''
      }
      <label>
        <span>${t('form.note')}</span>
        <textarea name="note" rows="4" placeholder="${t('form.notePlaceholder')}">${form.note}</textarea>
      </label>
      ${actionsHtml}
    </form>
  `;
}

export function renderContactPageForm({ draft, errors, planOptions }) {
  const form = buildQuoteFormState(draft);

  return renderQuoteFormFields({
    formId: 'contact-page-form',
    form,
    errors,
    planOptions,
    showLineQrPanel: false,
    actionsHtml: `
      <div class="contact-page-form-actions">
        <button class="button button-primary" type="submit">${form.id ? t('form.saveEdit') : t('form.submit')}</button>
      </div>
    `,
  });
}

export function renderQuoteModal({ open, planOptions, draft, errors }) {
  if (!open) {
    return '';
  }

  const form = buildQuoteFormState(draft);

  return `
    <div class="modal-backdrop" data-modal-backdrop="true">
      <aside class="modal-panel" aria-modal="true" role="dialog" aria-labelledby="quote-modal-title">
        <div class="modal-header">
          <div>
            <h3 id="quote-modal-title">${draft?.id ? t('form.editTitle') : t('form.submitTitle')}</h3>
          </div>
          <button class="icon-button" type="button" data-modal-close="true" aria-label="ปิด">${icon('x', { size: 20, strokeWidth: 2.2 })}</button>
        </div>
        <div class="modal-scroll-area">
          ${renderQuoteFormFields({
            formId: 'quote-form',
            form,
            errors,
            planOptions,
            actionsHtml: `
              <div class="modal-actions">
                <button class="button button-secondary" type="button" data-modal-close="true">${t('form.cancel')}</button>
                <button class="button button-primary" type="submit">${draft?.id ? t('form.saveEdit') : t('form.submit')}</button>
              </div>
            `,
          })}
        </div>
      </aside>
    </div>
  `;
}
