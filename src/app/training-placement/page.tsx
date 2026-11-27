import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, BadgeCheck, Check, ChevronRight, Minus, Phone } from 'lucide-react';
import { allPrograms, getProgram, type Program } from '@/content/programs';
import { getHub } from '@/content/hubs';
import { trackHref, trackPrograms, tracks, type Track } from '@/content/tracks';
import { trainingPage } from '@/content/training';
import { seoFor } from '@/content/seo';
import { site, trainingLine } from '@/content/site';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { PageHero } from '@/components/ui/PageHero';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ProgramExplorer } from '@/components/home/ProgramExplorer';
import { ProgramFinder } from '@/components/home/ProgramFinder';
import { ClosingCta } from '@/components/home/ClosingCta';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { Journey } from '@/components/home/Journey';
import { Faq } from '@/components/home/Faq';
import { LmsPlatform } from '@/components/program/LmsPlatform';
import { PathSteps } from '@/components/program/HubVisuals';
import { SalaryTable, WhyAra } from '@/components/program/TrackPage';
import { Reveal } from '@/components/motion/primitives';

export const metadata: Metadata = {
  ...seoFor('/training-placement/'),
  alternates: { canonical: '/training-placement/' },
};

/**
 * The comparison, one row per training track (hand-written; checked against the courses' own pages).
 * A track without a row here gets one generated from its courses.
 */
const TRACK_COMPARE: Record<string, { bestFor: string; coding: string; ai: string }> = {
  'servicenow-courses': {
    bestFor: 'IT, HR, customer service and risk platform careers',
    coding: 'No, except the ITSM Development and FDSE courses',
    ai: 'ServiceNow Otto and AI agents',
  },
  'salesforce-courses': {
    bestFor: 'CRM and enterprise application careers',
    coding: 'No, except the FDE course',
    ai: 'Agentforce',
  },
  'workday-courses': {
    bestFor: 'HR, finance and integration roles on Workday',
    coding: 'No, except Integration',
    ai: 'Not a focus',
  },
  security: {
    bestFor: 'Security operations and cloud security careers',
    coding: 'No',
    ai: 'Not a focus',
  },
  'ai-and-data-courses': {
    bestFor: 'AI, machine learning, data and AI product careers',
    coding: 'No, Python is taught (Agentic AI needs basic Python)',
    ai: 'Core of the track',
  },
  'full-stack-courses': {
    bestFor: 'Software development and business analysis careers',
    coding: 'No, taught from the basics',
    ai: 'AI features & AI-assisted work',
  },
};

const Yes = () => <Check aria-label="Yes" className="size-5 text-emerald-600" />;
const No = () => <Minus aria-label="No" className="size-5 text-faint" />;

const courseHref = (slug: string) => `/training-placement/${slug}/`;
/** A track's own page, or its only course's page when the track has no page. */
const trackLink = (track: Track) =>
  track.page ? trackHref(track) : courseHref(trackPrograms(track)[0]?.program.slug ?? '');
const trackAccent = (track: Track) => accent[trackPrograms(track)[0]?.program.accent ?? 'indigo'];

/** A course page's certification note that marks a later step, not an exam the course prepares you for. */
const LATER_STEP = /^(a (natural )?next step|a later step|not covered|not required|optional|an optional)/i;

/**
 * Every track's certifications, each with the courses that prepare you for it. A track with an overview page takes
 * them from that page (its certification list, plus the exams its comparison names for each course by code); a
 * track without one takes them from its courses. Later steps are left out: this list is what the courses prepare
 * you for.
 */
function trackCertifications(track: Track) {
  const certs = new Map<string, Program[]>();
  const add = (name: string, slug: string) => {
    const program = getProgram(slug);
    if (!program) return;
    const list = certs.get(name) ?? [];
    if (!list.includes(program)) list.push(program);
    certs.set(name, list);
  };
  const hub = getHub(track.slug);
  if (hub) {
    for (const row of hub.certifications.rows) if (!row.next) add(row.name, row.slug);
    for (const row of hub.compare)
      for (const code of row.certifications) {
        const cert = hub.certifications.rows.find((item) => item.name.endsWith(`(${code})`));
        if (cert) add(cert.name, row.slug);
      }
  } else {
    for (const { program } of trackPrograms(track))
      for (const cert of program.certifications ?? [])
        if (!LATER_STEP.test(cert.note ?? '')) add(cert.name, program.slug);
  }
  return [...certs].map(([name, programs]) => ({ name, programs }));
}

/** "Six" for 6: the hero reads better with small counts in words. */
const inWords = (n: number) =>
  ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'][n] ?? String(n);

export default function TrainingPlacementPage() {
  const page = trainingPage;
  const at = page.hero.title.indexOf(page.hero.accent);
  return (
    <>
      <TrainingJsonLd />
      <PageHero
        eyebrow="Training & Placement"
        title={
          <>
            {page.hero.title.slice(0, at)}
            <em>{page.hero.accent}</em>
          </>
        }
        intro={page.hero.intro
          .replace('{courses}', String(allPrograms.length))
          .replace('{tracks}', inWords(tracks.length))}
        breadcrumb={
          <nav aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/50">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <ChevronRight aria-hidden className="size-3.5" />
              <li aria-current="page" className="text-white/80">
                Training & Placement
              </li>
            </ol>
          </nav>
        }
      >
        <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
          <EnquiryButton size="lg" arrow interest="not-sure" title="Which course fits you?">
            Talk to an advisor
          </EnquiryButton>
          <a
            href={trainingLine.phoneHref}
            className="inline-flex items-center gap-2 text-[15px] font-medium text-white/80 hover:text-white"
          >
            <Phone aria-hidden className="size-4" /> Call {trainingLine.phone}
          </a>
        </div>
      </PageHero>

      {/* Training tracks */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Training tracks"
            title={
              <>
                Choose your <em>training track</em>
              </>
            }
            intro={page.tracks.intro}
          />
          <div className="mt-10">
            <ProgramExplorer search overview />
          </div>
        </Container>
      </section>

      {/* Compare the tracks */}
      <section className="pb-16 sm:pb-24">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title={
              <>
                Compare the <em>courses</em>
              </>
            }
            intro="Each track side by side: who it suits, whether you need to code and where AI comes in."
          />
          <div className="mt-10 overflow-x-auto rounded-3xl border border-line bg-paper shadow-soft">
            <table className="w-full min-w-[860px] text-left">
              <caption className="sr-only">Comparison of ARA Solutions training tracks</caption>
              <thead>
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className="p-5 font-medium">
                    Track
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Courses
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Best for
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Coding needed to start
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    Certification prep
                  </th>
                  <th scope="col" className="p-5 font-medium">
                    AI in the curriculum
                  </th>
                </tr>
              </thead>
              <tbody>
                {tracks.map((track) => {
                  const courses = trackPrograms(track).map(({ program }) => program);
                  const row = TRACK_COMPARE[track.slug] ?? {
                    bestFor: track.intro,
                    coding: 'Ask an advisor',
                    ai: '—',
                  };
                  return (
                    <tr key={track.slug} className="border-b border-line last:border-0">
                      <th scope="row" className="p-5">
                        <Link href={trackLink(track)} className="group flex items-center gap-3">
                          <span className={cn('size-2 shrink-0 rounded-full', trackAccent(track).dot)} />
                          <span className="text-[15px] font-semibold tracking-tight group-hover:underline">
                            {track.name}
                          </span>
                        </Link>
                      </th>
                      <td className="p-5 text-[15px] tabular-nums">{courses.length}</td>
                      <td className="p-5 text-[15px] text-muted">{row.bestFor}</td>
                      <td className="p-5 text-[15px]">{row.coding}</td>
                      <td className="p-5">
                        {courses.some((course) => course.certifications?.length) ? <Yes /> : <No />}
                      </td>
                      <td className="p-5 text-[15px]">{row.ai}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-faint">
            All courses include hands-on projects, interview preparation and placement support.
          </p>
        </Container>
      </section>

      {/* Which course is right for you */}
      <section className="bg-canvas py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Where to start" title={page.chooser.title} intro={page.chooser.intro} />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {page.chooser.rows.map((row, index) => (
              <Reveal
                as="li"
                key={row.background}
                delay={(index % 3) * 0.08}
                className="flex flex-col rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-7"
              >
                <p className="text-[13px] font-medium text-muted">If</p>
                <h3 className="mt-1 text-lg font-semibold tracking-tight">{row.background}</h3>
                <p className="mt-5 text-[13px] font-medium text-muted">
                  {'note' in row ? row.note : 'Start with'}
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {row.courses.map((slug) => {
                    const program = getProgram(slug);
                    if (!program) return null;
                    return (
                      <li key={slug}>
                        <Link
                          href={courseHref(slug)}
                          className={cn(
                            'inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-[14px] font-medium transition-colors',
                            accent[program.accent].soft,
                            'text-ink hover:bg-ink hover:text-white',
                          )}
                        >
                          {program.shortName}
                          <ArrowRight aria-hidden className="size-3.5" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </Reveal>
            ))}
          </ul>
        </Container>
      </section>

      <ProgramFinder />

      {/* Careers and salaries */}
      <section id="careers" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Careers" title={page.careers.title} intro={page.careers.intro} />
          <SalaryTable caption={page.careers.title} salaries={page.careers.salaries} />
          <p className="mt-4 text-sm text-faint">{page.careers.salaryNote}</p>
          <h3 className="mt-14 text-xl font-semibold tracking-tight">{page.careers.pathTitle}</h3>
          <PathSteps steps={page.careers.path} />
        </Container>
      </section>

      {/* Certifications */}
      <section id="certifications" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Certifications"
            title={page.certifications.title}
            intro={page.certifications.intro}
          />
          <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track, index) => {
              const certs = trackCertifications(track);
              if (!certs.length) return null;
              const a = trackAccent(track);
              return (
                <Reveal
                  as="li"
                  key={track.slug}
                  y={24}
                  delay={(index % 3) * 0.08}
                  className="flex flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-soft"
                >
                  <div className={cn('flex items-center justify-between gap-3 px-5 py-4', a.soft)}>
                    <Link
                      href={trackLink(track)}
                      className="text-[16px] font-semibold tracking-tight text-ink underline-offset-4 hover:underline"
                    >
                      {track.name}
                    </Link>
                    <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[12px] font-medium text-muted">
                      {certs.length} {certs.length === 1 ? 'certification' : 'certifications'}
                    </span>
                  </div>
                  <ul className="grid flex-1 content-start gap-3.5 p-5">
                    {certs.map((cert) => (
                      <li key={cert.name} className="flex items-start gap-2">
                        <BadgeCheck aria-hidden className={cn('mt-0.5 size-4 shrink-0', a.text)} />
                        <span className="min-w-0">
                          <span className="block text-[14.5px] leading-snug">{cert.name}</span>
                          <span className="mt-0.5 block text-[13px] text-muted">
                            {cert.programs.map((program, i) => (
                              <span key={program.slug}>
                                {i > 0 && ', '}
                                <Link
                                  href={courseHref(program.slug)}
                                  className="underline-offset-2 hover:text-ink hover:underline"
                                >
                                  {program.shortName}
                                </Link>
                              </span>
                            ))}
                          </span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </ul>
          <p className="mt-5 text-sm text-faint">{page.certifications.note}</p>
        </Container>
      </section>

      <LmsPlatform />
      <WhyAra title={page.benefits.title} items={page.benefits.items} />
      <AlumniMarquee className="border-b border-line bg-paper" />
      <Journey eyebrow="How training and placement work" />
      <Faq
        items={page.faqs}
        title={
          <>
            IT training and placement <em>FAQs</em>
          </>
        }
      />
      <ClosingCta
        line="training"
        defaultInterest="not-sure"
        title={page.closing.title}
        intro={page.closing.intro}
      />

      {/* Every course, by track: a link to each course page. */}
      <section className="border-t border-line py-20 sm:py-24">
        <Container>
          <SectionHeading
            eyebrow="All courses"
            title={
              <>
                Explore all our <em>courses</em>
              </>
            }
          />
          <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {tracks.map((track) => (
              <div key={track.slug}>
                <Link
                  href={trackLink(track)}
                  className="inline-flex items-center gap-2 text-[16px] font-semibold tracking-tight hover:underline"
                >
                  <span className={cn('size-2 rounded-full', trackAccent(track).dot)} />
                  {track.name}
                </Link>
                <ul className="mt-3 space-y-2">
                  {trackPrograms(track).map(({ entry, program }) => (
                    <li key={program.slug}>
                      <Link
                        href={courseHref(program.slug)}
                        className="text-[15px] text-muted underline-offset-4 hover:text-ink hover:underline"
                      >
                        {entry.label ?? program.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}

/** Breadcrumb, every course and the FAQs, for Google. */
function TrainingJsonLd() {
  const url = (path: string) => new URL(path, site.url).toString();
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: url('/') },
        { '@type': 'ListItem', position: 2, name: 'Training & Placement', item: url('/training-placement/') },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `IT training courses at ${site.name}`,
      itemListElement: tracks
        .flatMap((track) => trackPrograms(track).map(({ program }) => program))
        .map((program, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: program.name,
          url: url(courseHref(program.slug)),
        })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: trainingPage.faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
