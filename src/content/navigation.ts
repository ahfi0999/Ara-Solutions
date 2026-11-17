import { programPreview } from './programs';
import { services } from './services';

/** Icons available to menu links (mapped to icon components in the header). */
export type NavIcon =
  | 'about'
  | 'approach'
  | 'cases'
  | 'corp-to-corp'
  | 'fulltime-staffing'
  | 'rpo'
  | 'international-consulting'
  | 'salesforce'
  | 'servicenow'
  | 'ai-ml'
  | 'agentic-ai'
  | 'cybersecurity'
  | 'full-stack-ai'
  | 'program';

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  /** Small icon beside the link (dropdowns and phone menu). */
  icon?: NavIcon;
  /** Colour class for the icon (program accent colours). */
  tone?: string;
};
/**
 * A menu with a dropdown. With `href`, the label itself opens that overview page (the dropdown still
 * opens on hover, and from the arrow button on touch screens and for keyboard users).
 * `strip` is the short name written sideways down the dropdown's left edge.
 */
export type NavGroup = {
  label: string;
  strip: string;
  match: string;
  href?: string;
  items: NavItem[];
  footer?: NavItem;
};
export type NavEntry = NavGroup | NavItem;

/** Program accent colours for the menu icons (written out in full so Tailwind can detect them). */
const tones: Record<string, string> = {
  sky: 'text-sky-600',
  emerald: 'text-emerald-600',
  violet: 'text-violet-600',
  rose: 'text-rose-600',
  amber: 'text-amber-600',
  indigo: 'text-indigo-600',
};

/** Programs with their own menu icon; any other program gets the generic one. */
const PROGRAM_ICONS = [
  'salesforce',
  'servicenow',
  'ai-ml',
  'agentic-ai',
  'cybersecurity',
  'full-stack-ai',
] as const;

/** Main navigation, same structure as ARA's original website. */
export const navigation: NavEntry[] = [
  {
    label: 'Company',
    strip: 'Company',
    match: '/company',
    items: [
      {
        label: 'About us',
        href: '/company/about/',
        description: 'Who we are: staffing and training',
        icon: 'about',
      },
      {
        label: 'Our approach',
        href: '/company/approach/',
        description: 'How we hire and how we train',
        icon: 'approach',
      },
      {
        label: 'Case studies',
        href: '/company/case-studies/',
        description: 'Hiring results and alumni careers',
        icon: 'cases',
      },
    ],
  },
  {
    label: 'Services',
    strip: 'Services',
    match: '/services',
    href: '/services/',
    items: services.map((service) => ({
      label: service.shortName,
      href: `/services/${service.slug}/`,
      description: service.menuText,
      icon: service.slug,
    })),
    footer: { label: 'All staffing services', href: '/services/' },
  },
  {
    label: 'Training & Placement',
    strip: 'Training',
    match: '/training-placement',
    href: '/training-placement/',
    items: programPreview().shown.map((program) => ({
      label: program.shortName,
      href: `/training-placement/${program.slug}/`,
      description: program.highlights[0],
      icon: PROGRAM_ICONS.find((slug) => slug === program.slug) ?? 'program',
      tone: tones[program.accent],
    })),
    footer: { label: `All ${programPreview().total} programs`, href: '/training-placement/' },
  },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
];

export const isGroup = (entry: NavEntry): entry is NavGroup => 'items' in entry;
