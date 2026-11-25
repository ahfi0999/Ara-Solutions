import { services } from './services';
import { getProgram } from './programs';
import { trackHref, trackPrograms, tracks } from './tracks';

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
  | 'workday'
  | 'program';

export type NavItem = {
  label: string;
  href: string;
  description?: string;
  /** Small icon beside the link (dropdowns and phone menu). */
  icon?: NavIcon;
  /** Colour class for the icon (program accent colours). */
  tone?: string;
  /** A course without its own page yet: generic icon, links to its card on the track page. */
  plain?: boolean;
  /** Shown with a "New" badge. */
  isNew?: boolean;
};
/** A category in a two-panel dropdown: listed on the left, its links shown on the right. */
export type NavCategory = { label: string; href: string; note: string; icon?: NavIcon; items: NavItem[] };

/** The icon shown beside each training track (phone menu). */
const TRACK_ICONS: Record<string, NavIcon> = {
  'servicenow-courses': 'servicenow',
  'salesforce-courses': 'salesforce',
  'workday-courses': 'workday',
  security: 'cybersecurity',
  'ai-and-data-courses': 'ai-ml',
  'full-stack-courses': 'full-stack-ai',
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
  /** Optional two-panel dropdown: categories on the left, the hovered one's links on the right. */
  categories?: NavCategory[];
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

/** The Training menu: one category per track, courses in the client's order. */
const trainingCategories: NavCategory[] = tracks.map((track) => {
  const first = trackPrograms(track)[0];
  return {
    label: track.name,
    href: track.page || !first ? trackHref(track) : `/training-placement/${first.program.slug}/`,
    note: `${track.courses.length} ${track.courses.length === 1 ? 'course' : 'courses'}`,
    icon: TRACK_ICONS[track.slug] ?? 'program',
    items: track.courses.flatMap((course): NavItem[] => {
      if (course.kind === 'course')
        return [
          {
            label: course.name,
            href: track.page ? `${trackHref(track)}#${course.id}` : '/training-placement/',
            icon: 'program',
            plain: true,
            isNew: course.isNew,
          },
        ];
      const program = getProgram(course.slug);
      if (!program) return [];
      // Track courses keep the simple icon, with a short line from their page; the flagship programs keep their icon.
      if (!PROGRAM_ICONS.some((slug) => slug === program.slug))
        return [
          {
            label: course.label ?? program.shortName,
            href: `/training-placement/${program.slug}/`,
            description: course.text ?? program.highlights[0],
            icon: 'program',
            plain: true,
            isNew: course.isNew,
          },
        ];
      return [
        {
          label: course.label ?? program.shortName,
          href: `/training-placement/${program.slug}/`,
          description: course.text ?? program.highlights[0],
          icon: PROGRAM_ICONS.find((slug) => slug === program.slug) ?? 'program',
          tone: tones[program.accent],
        },
      ];
    }),
  };
});

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
    categories: trainingCategories,
    items: trainingCategories.flatMap((category) => category.items),
    footer: { label: 'View all courses', href: '/training-placement/' },
  },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
];

export const isGroup = (entry: NavEntry): entry is NavGroup => 'items' in entry;
