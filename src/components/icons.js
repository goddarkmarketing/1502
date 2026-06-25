import Heart from '../vendor/lucide/icons/heart.mjs';
import HeartPulse from '../vendor/lucide/icons/heart-pulse.mjs';
import Plane from '../vendor/lucide/icons/plane.mjs';
import Phone from '../vendor/lucide/icons/phone.mjs';
import Mail from '../vendor/lucide/icons/mail.mjs';
import MessageCircle from '../vendor/lucide/icons/message-circle.mjs';
import MessagesSquare from '../vendor/lucide/icons/messages-square.mjs';
import Share2 from '../vendor/lucide/icons/share-2.mjs';
import Menu from '../vendor/lucide/icons/menu.mjs';
import X from '../vendor/lucide/icons/x.mjs';
import Check from '../vendor/lucide/icons/check.mjs';
import Clock from '../vendor/lucide/icons/clock.mjs';
import ShieldCheck from '../vendor/lucide/icons/shield-check.mjs';
import Layers from '../vendor/lucide/icons/layers.mjs';
import Star from '../vendor/lucide/icons/star.mjs';
import Plus from '../vendor/lucide/icons/plus.mjs';
import Minus from '../vendor/lucide/icons/minus.mjs';
import ArrowUpRight from '../vendor/lucide/icons/arrow-up-right.mjs';
import ChevronDown from '../vendor/lucide/icons/chevron-down.mjs';
import ChevronRight from '../vendor/lucide/icons/chevron-right.mjs';
import Ellipsis from '../vendor/lucide/icons/ellipsis.mjs';
import BadgeCheck from '../vendor/lucide/icons/badge-check.mjs';
import Sparkles from '../vendor/lucide/icons/sparkles.mjs';
import Circle from '../vendor/lucide/icons/circle.mjs';
import Activity from '../vendor/lucide/icons/activity.mjs';
import Landmark from '../vendor/lucide/icons/landmark.mjs';
import PiggyBank from '../vendor/lucide/icons/piggy-bank.mjs';
import Scroll from '../vendor/lucide/icons/scroll.mjs';
import FileText from '../vendor/lucide/icons/file-text.mjs';
import Coins from '../vendor/lucide/icons/coins.mjs';
import Tag from '../vendor/lucide/icons/tag.mjs';
import Building2 from '../vendor/lucide/icons/building-2.mjs';
import BedDouble from '../vendor/lucide/icons/bed-double.mjs';
import ClipboardCheck from '../vendor/lucide/icons/clipboard-check.mjs';
import Search from '../vendor/lucide/icons/search.mjs';
import User from '../vendor/lucide/icons/user.mjs';

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
