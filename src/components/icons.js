import Heart from '../../node_modules/lucide/dist/esm/icons/heart.mjs';
import HeartPulse from '../../node_modules/lucide/dist/esm/icons/heart-pulse.mjs';
import Plane from '../../node_modules/lucide/dist/esm/icons/plane.mjs';
import Phone from '../../node_modules/lucide/dist/esm/icons/phone.mjs';
import Mail from '../../node_modules/lucide/dist/esm/icons/mail.mjs';
import MessageCircle from '../../node_modules/lucide/dist/esm/icons/message-circle.mjs';
import MessagesSquare from '../../node_modules/lucide/dist/esm/icons/messages-square.mjs';
import Share2 from '../../node_modules/lucide/dist/esm/icons/share-2.mjs';
import Menu from '../../node_modules/lucide/dist/esm/icons/menu.mjs';
import X from '../../node_modules/lucide/dist/esm/icons/x.mjs';
import Check from '../../node_modules/lucide/dist/esm/icons/check.mjs';
import Clock from '../../node_modules/lucide/dist/esm/icons/clock.mjs';
import ShieldCheck from '../../node_modules/lucide/dist/esm/icons/shield-check.mjs';
import Layers from '../../node_modules/lucide/dist/esm/icons/layers.mjs';
import Star from '../../node_modules/lucide/dist/esm/icons/star.mjs';
import Plus from '../../node_modules/lucide/dist/esm/icons/plus.mjs';
import Minus from '../../node_modules/lucide/dist/esm/icons/minus.mjs';
import ArrowUpRight from '../../node_modules/lucide/dist/esm/icons/arrow-up-right.mjs';
import ChevronDown from '../../node_modules/lucide/dist/esm/icons/chevron-down.mjs';
import ChevronRight from '../../node_modules/lucide/dist/esm/icons/chevron-right.mjs';
import Ellipsis from '../../node_modules/lucide/dist/esm/icons/ellipsis.mjs';
import BadgeCheck from '../../node_modules/lucide/dist/esm/icons/badge-check.mjs';
import Sparkles from '../../node_modules/lucide/dist/esm/icons/sparkles.mjs';
import Circle from '../../node_modules/lucide/dist/esm/icons/circle.mjs';
import Activity from '../../node_modules/lucide/dist/esm/icons/activity.mjs';
import Landmark from '../../node_modules/lucide/dist/esm/icons/landmark.mjs';
import PiggyBank from '../../node_modules/lucide/dist/esm/icons/piggy-bank.mjs';
import Scroll from '../../node_modules/lucide/dist/esm/icons/scroll.mjs';
import FileText from '../../node_modules/lucide/dist/esm/icons/file-text.mjs';
import Coins from '../../node_modules/lucide/dist/esm/icons/coins.mjs';
import Tag from '../../node_modules/lucide/dist/esm/icons/tag.mjs';
import Building2 from '../../node_modules/lucide/dist/esm/icons/building-2.mjs';
import BedDouble from '../../node_modules/lucide/dist/esm/icons/bed-double.mjs';
import ClipboardCheck from '../../node_modules/lucide/dist/esm/icons/clipboard-check.mjs';
import Search from '../../node_modules/lucide/dist/esm/icons/search.mjs';
import User from '../../node_modules/lucide/dist/esm/icons/user.mjs';

const ICONS = {
  heart: Heart,
  heartPulse: HeartPulse,
  plane: Plane,
  phone: Phone,
  mail: Mail,
  messageCircle: MessageCircle,
  messagesSquare: MessagesSquare,
  share2: Share2,
  menu: Menu,
  x: X,
  check: Check,
  clock: Clock,
  shieldCheck: ShieldCheck,
  layers: Layers,
  star: Star,
  plus: Plus,
  minus: Minus,
  arrowUpRight: ArrowUpRight,
  chevronDown: ChevronDown,
  chevronRight: ChevronRight,
  ellipsis: Ellipsis,
  badgeCheck: BadgeCheck,
  sparkles: Sparkles,
  circle: Circle,
  activity: Activity,
  landmark: Landmark,
  piggyBank: PiggyBank,
  scroll: Scroll,
  fileText: FileText,
  coins: Coins,
  tag: Tag,
  building2: Building2,
  bedDouble: BedDouble,
  clipboardCheck: ClipboardCheck,
  search: Search,
  user: User,
};

const FILTER_CATEGORY_ICONS = {
  'ทั้งหมด': 'layers',
  'ประกันชีวิต': 'heart',
  'ชีวิต': 'heart',
  'สุขภาพ': 'heartPulse',
  'โรคร้ายแรง': 'activity',
  'ลดหย่อนภาษี': 'landmark',
  'วางแผนเกษียณ': 'piggyBank',
  'ประกันมรดก': 'scroll',
  'เดินทาง': 'plane',
  'อุบัติเหตุ': 'shieldCheck',
};

export function filterCategoryIcon(categoryKey) {
  return icon(FILTER_CATEGORY_ICONS[categoryKey] ?? 'layers', {
    size: 16,
    strokeWidth: 2.1,
    className: 'filter-chip-icon',
  });
}

const SHOWCASE_ICONS = {
  life: 'heart',
  health: 'heartPulse',
  critical: 'activity',
  tax: 'landmark',
  retirement: 'piggyBank',
  estate: 'scroll',
};

function iconNodeToSvg(iconNode, options = {}) {
  const {
    size = 24,
    strokeWidth = 2,
    className = '',
    fill = 'none',
    stroke = 'currentColor',
  } = options;

  const lucideClass = className ? `lucide ${className}` : 'lucide';
  const children = iconNode
    .map(([tag, props]) => {
      const propString = Object.entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
      return `<${tag} ${propString}/>`;
    })
    .join('');

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" class="${lucideClass}">${children}</svg>`;
}

export function icon(name, options = {}) {
  const iconNode = ICONS[name];
  if (!iconNode) {
    return '';
  }

  return iconNodeToSvg(iconNode, options);
}

export function categoryShowcaseIcon(type) {
  const iconName = SHOWCASE_ICONS[type] ?? 'ellipsis';
  return icon(iconName, { size: 22, strokeWidth: 2 });
}

export function renderEyebrow(text, className = 'section-eyebrow') {
  return `<span class="${className}">${icon('sparkles', { size: 12, className: 'eyebrow-icon', strokeWidth: 2.2 })}<span>${text}</span></span>`;
}

export function renderStars(count = 5) {
  return Array.from({ length: count }, () => icon('star', { size: 16, className: 'star-icon', strokeWidth: 2, fill: 'currentColor' })).join('');
}

export function renderCheckListItems(items, itemClassName = 'check-list-item') {
  return items
    .map(
      (item) => `
        <li class="${itemClassName}">
          <span class="list-check-icon" aria-hidden="true">${icon('check', { size: 16, strokeWidth: 2.5 })}</span>
          <span>${item}</span>
        </li>
      `,
    )
    .join('');
}

export function renderDetailListItems(items) {
  return renderCheckListItems(items, 'insurance-detail-list-item');
}

export function contactIconForTitle(title) {
  const normalized = title.toLowerCase();
  let iconName = 'messageCircle';

  if (title.includes('โทร') || normalized.includes('call')) {
    iconName = 'phone';
  } else if (title.includes('เมล') || title.includes('อีเมล') || normalized.includes('email')) {
    iconName = 'mail';
  } else if (normalized.includes('facebook')) {
    iconName = 'share2';
  }

  const extraClass = iconName === 'share2' ? ' contact-icon-facebook' : '';

  return `<span class="contact-icon${extraClass}" aria-hidden="true">${icon(iconName, { size: 24, strokeWidth: 1.8 })}</span>`;
}
