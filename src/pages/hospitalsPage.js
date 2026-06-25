import { renderHospitalNetworkSection } from '../components/hospitalNetworkSection.js';
import { renderSectionHeader } from '../components/ui.js';
import { t } from '../i18n/index.js';

export function renderHospitalsPage() {
  return `
    <section class="section-surface hospitals-page-section">
      ${renderSectionHeader({
        title: t('home.partnerTitle'),
        description: t('hospitalsPage.desc'),
        center: true,
      })}
      ${renderHospitalNetworkSection({ showHeader: false, showSlider: false, className: 'hospitals-page-network' })}
    </section>
  `;
}
