/**
 * Internal links: where a text names one of our pages (a course, a track, a staffing service), that name
 * becomes a link to it. Used for FAQ answers and course notes, so new content gets its links automatically.
 *
 * A course is matched by its full name only when the name cannot be mistaken for a job title or a field
 * (it has "&", ":", brackets or "with", e.g. "Salesforce Admin & Developer with Agentforce"); otherwise only
 * as "<name> course" or "<name> program" ("Salesforce Admin course", not the job "Salesforce Administrator").
 * Matching ignores capitals and needs whole words. The program data is already in every page's scripts
 * (the menu uses it), so this adds no download.
 */
import { allPrograms } from '@/content/programs';
import { trackHref, tracks } from '@/content/tracks';

type Target = { phrase: string; href: string };

const distinctive = (name: string) => /[&:(]| with /.test(name);

// Earlier short names the texts still use ("our Salesforce FDE course").
const ALSO_CALLED: Record<string, string[]> = {
  'servicenow-crm': ['ServiceNow CRM'],
  'servicenow-fdse': ['ServiceNow FDSE'],
  'salesforce-fde': ['Salesforce FDE'],
};

const TARGETS: Target[] = [
  ...allPrograms.flatMap((program) => {
    const href = `/training-placement/${program.slug}/`;
    const phrases = new Set([
      ...(distinctive(program.name) ? [program.name] : []),
      `${program.name} course`,
      `${program.name} program`,
      `${program.shortName} course`,
      `${program.shortName} program`,
      ...(ALSO_CALLED[program.slug] ?? []).flatMap((name) => [`${name} course`, `${name} program`]),
    ]);
    return [...phrases].map((phrase) => ({ phrase, href }));
  }),
  ...tracks
    .filter((track) => track.page)
    .map((track) => ({ phrase: `${track.name} courses`, href: trackHref(track) })),
  { phrase: 'staffing services page', href: '/services/' },
  { phrase: 'fulltime staffing', href: '/services/fulltime-staffing/' },
  { phrase: 'contract staffing', href: '/services/corp-to-corp/' },
  { phrase: 'recruitment process outsourcing', href: '/services/rpo/' },
  { phrase: 'international consulting', href: '/services/international-consulting/' },
  // Longest first, so "Salesforce Admin & Developer course" wins over a shorter name inside it.
].sort((a, b) => b.phrase.length - a.phrase.length);

const escape = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const PATTERN = new RegExp(
  `(?<![\\w-])(?:${TARGETS.map((target) => escape(target.phrase)).join('|')})(?![\\w-])`,
  'gi',
);
const BY_PHRASE = new Map(TARGETS.map((target) => [target.phrase.toLowerCase(), target.href]));

/** The look of a link inside running text: underlined, so it reads as a link without changing the colour. */
export const INLINE_LINK =
  'font-medium underline decoration-brand/40 decoration-1 underline-offset-[3px] transition-colors hover:text-brand hover:decoration-brand';

export type TextPiece = string | { text: string; href: string };

/** Splits a text into plain parts and links: each page is linked once, and never the page being read. */
export function linkPieces(text: string, currentPath?: string): TextPiece[] {
  const used = new Set<string>();
  const pieces: TextPiece[] = [];
  let last = 0;
  for (const match of text.matchAll(PATTERN)) {
    const href = BY_PHRASE.get(match[0].toLowerCase());
    if (!href || used.has(href) || href === currentPath) continue;
    used.add(href);
    if (match.index > last) pieces.push(text.slice(last, match.index));
    pieces.push({ text: match[0], href });
    last = match.index + match[0].length;
  }
  if (last < text.length) pieces.push(text.slice(last));
  return pieces;
}
