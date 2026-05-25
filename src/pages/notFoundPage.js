import { appUrl } from '../app/router.js';
import { renderEmptyState } from '../components/ui.js';
import { t } from '../i18n/index.js';

export function renderNotFoundPage() {
  return renderEmptyState({
    title: t('state.notFoundTitle'),
    description: t('state.notFoundDesc'),
    actionLabel: t('state.backHome'),
    actionHref: appUrl('/'),
  });
}
