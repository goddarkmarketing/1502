import { appUrl } from '../app/router.js';
import { renderEmptyState } from '../components/ui.js';

export function renderNotFoundPage() {
  return renderEmptyState({
    title: 'ไม่พบหน้าที่ต้องการ',
    description: 'ลิงก์นี้อาจไม่ถูกต้อง หรือหน้าถูกย้ายไปแล้ว',
    actionLabel: 'กลับหน้าแรก',
    actionHref: appUrl('/'),
  });
}
