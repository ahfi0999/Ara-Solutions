import { programPreview } from './programs';
import { services } from './services';

export type NavItem = { label: string; href: string; description?: string; dot?: string };
export type NavGroup = { label: string; match: string; items: NavItem[]; footer?: NavItem };
export type NavEntry = NavGroup | NavItem;

const dots: Record<string, string> = {
  sky: 'bg-sky-400',
  emerald: 'bg-emerald-400',
  violet: 'bg-violet-400',
  rose: 'bg-rose-400',
  amber: 'bg-amber-400',
  indigo: 'bg-indigo-400',
};

/** Main navigation, same structure as ARA's original website. */
export const navigation: NavEntry[] = [
  {
    label: 'Company',
    match: '/company',
    items: [
      { label: 'About us', href: '/company/about/', description: 'Who we are and how we work' },
      { label: 'Our approach', href: '/company/approach/', description: 'Discover, deliver, support' },
      { label: 'Case studies', href: '/company/case-studies/', description: 'Outcomes we have delivered' },
    ],
  },
  {
    label: 'Services',
    match: '/services',
    items: services.map((service) => ({
      label: service.shortName,
      href: `/services/${service.slug}/`,
      description: service.menuText,
    })),
  },
  {
    label: 'Training & Placement',
    match: '/training-placement',
    items: programPreview().shown.map((program) => ({
      label: program.shortName,
      href: `/training-placement/${program.slug}/`,
      description: program.highlights[0],
      dot: dots[program.accent],
    })),
    footer: { label: `All ${programPreview().total} programs`, href: '/training-placement/' },
  },
  { label: 'Careers', href: '/careers/' },
  { label: 'Contact', href: '/contact/' },
];

export const isGroup = (entry: NavEntry): entry is NavGroup => 'items' in entry;
