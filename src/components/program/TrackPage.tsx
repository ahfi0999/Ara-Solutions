import Link from 'next/link';
import { ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { getProgram } from '@/content/programs';
import { site, trainingLine } from '@/content/site';
import { getHub, type TrackHub } from '@/content/hubs';
import {
  trackHref,
  trackListedCourses,
  trackPrograms,
  tracks,
  type Track,
} from '@/content/tracks';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { ProgramCard } from '@/components/home/ProgramShowcase';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ClosingCta } from '@/components/home/ClosingCta';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { Journey } from '@/components/home/Journey';
import { Faq } from '@/components/home/Faq';

/**
 * A training track (e.g. ServiceNow): every course with its own page as the usual program card, in the
 * client's order (a "New" badge where the client marked one), then any course without a page yet as a
 * card with an "Ask about this course" button. Each card has an anchor (#slug) so links can point at it.
 * A track with page content in hubs.ts (e.g. Workday) also gets a comparison, a course chooser,
 * careers and salaries, certifications, why ARA, alumni, how it works, FAQs and links to other tracks.
 */
export function TrackPage({ track }: { track: Track }) {
  const programs = trackPrograms(track);
  const courses = trackListedCourses(track);
  const fresh = track.courses.filter((course) => course.isNew).length;
  const hub = getHub(track.slug);
  return (
    <>
      {hub && <HubJsonLd track={track} hub={hub} />}
      <PageHero
        eyebrow="Training track"
        title={
          hub ? (
            <AccentTitle text={hub.hero.title} accent={hub.hero.accent} />
          ) : (
            `${track.name} courses`
          )
        }
        intro={hub?.hero.intro ?? track.intro}
        breadcrumb={
          hub && (
            <nav aria-label="Breadcrumb">
              <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-white/50">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <ChevronRight aria-hidden className="size-3.5" />
                <li>
                  <Link href="/training-placement/" className="hover:text-white">
                    Training & Placement
                  </Link>
                </li>
                <ChevronRight aria-hidden className="size-3.5" />
                <li aria-current="page" className="text-white/80">
                  {track.name}
                </li>
              </ol>
            </nav>
          )
        }
      >
        {hub ? (
          <div className="flex flex-wrap items-center gap-x-6 gap-y-4">
            <EnquiryButton size="lg" arrow interest="not-sure" title={`Which ${track.name} course fits you?`}>
              Talk to an advisor
            </EnquiryButton>
            <a
              href={trainingLine.phoneHref}
              className="inline-flex items-center gap-2 text-[15px] font-medium text-white/80 hover:text-white"
            >
              <Phone aria-hidden className="size-4" /> Call {trainingLine.phone}
            </a>
            <p className="w-full text-[15px] text-white/60">
              {track.courses.length} courses{fresh > 0 && `, ${fresh} new`}. Not sure which fits you? An
              advisor will help you choose.
            </p>
          </div>
        ) : (
          <p className="text-[15px] text-white/60">
            {track.courses.length} {track.courses.length === 1 ? 'course' : 'courses'}
            {fresh > 0 && `, ${fresh} new`}
          </p>
        )}
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          {programs.length > 0 && (
            <>
              <SectionHeading
                eyebrow="Choose your course"
                title={
                  hub ? (
                    <>
                      Choose your {track.name} <em>course</em>
                    </>
                  ) : (
                    <>
                      Every course, with its full <em>syllabus</em>
                    </>
                  )
                }
                intro={
                  hub
                    ? `${hub.why.text} Open a course for its full syllabus, tools, projects and the roles it prepares you for.`
                    : 'Open a course for its curriculum, tools, projects, certifications and the roles it prepares you for.'
                }
              />
              <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {programs.map(({ entry, program }) => (
                  <li key={program.slug} id={program.slug} className="scroll-mt-32">
                    <ProgramCard program={program} isNew={entry.isNew} />
                  </li>
                ))}
              </ul>
            </>
          )}

          {courses.length > 0 && (
            <div className={programs.length > 0 ? 'mt-20' : undefined}>
              <SectionHeading
                eyebrow="More courses"
                title={
                  <>
                    More {track.name} <em>courses</em>
                  </>
                }
                intro="Ask an advisor for the syllabus, duration, fees and next batch of any of these courses."
              />
              <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    id={course.id}
                    className="flex scroll-mt-32 flex-col rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight">{course.name}</h3>
                      {course.isNew && (
                        <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                          New
                        </span>
                      )}
                    </div>
                    <p className="mt-2 leading-relaxed text-muted">
                      Part of the {track.name} track at ARA Solutions, Hyderabad, with placement assistance.
                    </p>
                    <div className="mt-auto pt-6">
                      <EnquiryButton
                        variant="dark"
                        interest="not-sure"
                        title={`${course.name}: syllabus and batches`}
                        arrow
                      >
                        Ask about this course
                      </EnquiryButton>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      {hub && <HubSections track={track} hub={hub} />}

      <ClosingCta
        line="training"
        defaultInterest="not-sure"
        title={hub?.closing.title ?? `Not sure which ${track.name} course fits you?`}
        intro={
          hub?.closing.intro ??
          'Share your background and goals, and an advisor will recommend a course and share batch dates and fees.'
        }
      />

      {hub && <OtherTracks current={track} />}
    </>
  );
}

/** A heading with one phrase set in the italic accent, e.g. "… live <em>online training</em> …". */
function AccentTitle({ text, accent }: { text: string; accent: string }) {
  const at = text.indexOf(accent);
  if (at < 0) return <>{text}</>;
  return (
    <>
      {text.slice(0, at)}
      <em>{accent}</em>
      {text.slice(at + accent.length)}
    </>
  );
}

const courseName = (slug: string) => getProgram(slug)?.name ?? slug;
const courseHref = (slug: string) => `/training-placement/${slug}/`;

const tableWrap = 'mt-10 overflow-x-auto rounded-3xl border border-line bg-paper shadow-soft';
const th = 'p-5 font-medium';
const td = 'p-5 align-top text-[15px]';

function HubSections({ track, hub }: { track: Track; hub: TrackHub }) {
  return (
    <>
      {/* Compare the courses */}
      <section id="compare" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Compare"
            title={
              <>
                Compare the {track.name} <em>courses</em>
              </>
            }
            intro="Who each course suits, coding, certification paths and the roles it prepares you for."
          />
          <div className={tableWrap}>
            <table className="w-full min-w-[900px] text-left">
              <caption className="sr-only">Comparison of ARA Solutions {track.name} courses</caption>
              <thead>
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className={th}>Course</th>
                  <th scope="col" className={th}>Best for</th>
                  <th scope="col" className={th}>Coding</th>
                  <th scope="col" className={th}>Certification paths</th>
                  <th scope="col" className={th}>Top roles</th>
                </tr>
              </thead>
              <tbody>
                {hub.compare.map((row) => (
                  <tr key={row.slug} className="border-b border-line last:border-0">
                    <th scope="row" className="p-5 align-top">
                      <Link
                        href={courseHref(row.slug)}
                        className="text-[15px] font-semibold tracking-tight hover:underline"
                      >
                        {courseName(row.slug)}
                      </Link>
                    </th>
                    <td className={`${td} text-muted`}>{row.bestFor}</td>
                    <td className={td}>{row.coding}</td>
                    <td className={td}>{row.certifications.join(', ')}</td>
                    <td className={`${td} text-muted`}>{row.roles.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      {/* Which course is right for you */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 [&>*]:min-w-0">
          <SectionHeading eyebrow="Where to start" title={hub.chooser.title} intro={hub.chooser.intro} />
          <div>
            <ul className="grid gap-3">
              {hub.chooser.rows.map((row) => (
                <li key={row.background}>
                  <Link
                    href={courseHref(row.slug)}
                    className="group flex items-center justify-between gap-6 rounded-2xl border border-line bg-paper p-5 shadow-soft transition-colors hover:border-ink/30 sm:p-6"
                  >
                    <span>
                      <span className="block text-[15px] text-muted">{row.background}</span>
                      <span className="mt-1 block text-lg font-semibold tracking-tight">
                        Start with {courseName(row.slug)}
                      </span>
                    </span>
                    <ArrowRight
                      aria-hidden
                      className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink"
                    />
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[15px] text-muted">{hub.chooser.note}</p>
          </div>
        </Container>
      </section>

      {/* Careers and salaries */}
      <section id="careers" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Careers" title={hub.careers.title} intro={hub.careers.intro} />
          <div className={tableWrap}>
            <table className="w-full min-w-[560px] text-left">
              <caption className="sr-only">{hub.careers.title}</caption>
              <thead>
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className={th}>Role</th>
                  <th scope="col" className={th}>Experience</th>
                  <th scope="col" className={th}>Annual salary in India</th>
                </tr>
              </thead>
              <tbody>
                {hub.careers.salaries.map((row) => (
                  <tr key={row.role} className="border-b border-line last:border-0">
                    <th scope="row" className="p-5 text-[15px] font-semibold tracking-tight">
                      {row.role}
                    </th>
                    <td className={td}>{row.experience}</td>
                    <td className={`${td} font-medium tabular-nums`}>{row.pay}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-faint">{hub.careers.salaryNote}</p>

          <h3 className="mt-14 text-xl font-semibold tracking-tight">Your {track.name} career path</h3>
          <ol className="mt-6 grid gap-5 md:grid-cols-3">
            {hub.careers.path.map((step, index) => (
              <li key={step.stage} className="rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-7">
                <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand">
                  Step {index + 1}
                </p>
                <p className="mt-3 text-lg font-semibold tracking-tight">{step.stage}</p>
                <p className="mt-2 leading-relaxed text-muted">{step.roles}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      {/* Certifications */}
      <section id="certifications" className="scroll-mt-24 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 [&>*]:min-w-0">
          <SectionHeading eyebrow="Certifications" title={hub.certifications.title} intro={hub.certifications.intro} />
          <div>
            <div className="overflow-x-auto rounded-3xl border border-line bg-paper shadow-soft">
              <table className="w-full min-w-[480px] text-left">
                <caption className="sr-only">{hub.certifications.title}</caption>
                <thead>
                  <tr className="border-b border-line text-[13px] text-muted">
                    <th scope="col" className={th}>Certification</th>
                    <th scope="col" className={th}>Course</th>
                  </tr>
                </thead>
                <tbody>
                  {hub.certifications.rows.map((row) => (
                    <tr key={row.name} className="border-b border-line last:border-0">
                      <td className="px-5 py-4 text-[15px]">{row.name}</td>
                      <td className="px-5 py-4 text-[15px]">
                        <Link href={courseHref(row.slug)} className="font-medium hover:underline">
                          {getProgram(row.slug)?.shortName ?? row.slug}
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-sm text-faint">{hub.certifications.note}</p>
          </div>
        </Container>
      </section>

      {/* Why ARA */}
      <section className="bg-canvas py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Why ARA" title={hub.benefits.title} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hub.benefits.items.map((item) => (
              <li key={item.title} className="rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-7">
                <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AlumniMarquee className="border-y border-line bg-paper" />
      <Journey eyebrow="Training & placement" />
      <Faq
        items={hub.faqs}
        title={
          <>
            {track.name} course <em>FAQs</em>
          </>
        }
      />
    </>
  );
}

/** Links to every other track (its page, or the course page of a one-course track). */
function OtherTracks({ current }: { current: Track }) {
  const others = tracks
    .filter((track) => track.slug !== current.slug)
    .map((track) => {
      const first = trackPrograms(track)[0];
      if (track.page) return { name: `${track.name} courses`, href: trackHref(track), count: track.courses.length };
      // A one-course track links straight to its course, by the course's name.
      return first
        ? { name: first.entry.label ?? first.program.name, href: courseHref(first.program.slug), count: null }
        : null;
    })
    .filter((item) => item !== null);
  return (
    <section className="py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Explore more"
          title={
            <>
              Explore our other <em>courses</em>
            </>
          }
        />
        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper px-5 py-4 shadow-soft transition-colors hover:border-ink/30"
              >
                <span className="text-[15px] font-semibold tracking-tight">
                  {item.name}
                  {item.count && <span className="ml-2 font-normal text-muted">{item.count}</span>}
                </span>
                <ArrowRight
                  aria-hidden
                  className="size-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-ink"
                />
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-6">
          <Link href="/training-placement/" className="text-[15px] font-medium underline-offset-4 hover:underline">
            All training programs →
          </Link>
        </p>
      </Container>
    </section>
  );
}

/** Breadcrumb, the list of courses and the FAQs, for Google. */
function HubJsonLd({ track, hub }: { track: Track; hub: TrackHub }) {
  const url = (path: string) => new URL(path, site.url).toString();
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: url('/') },
        { '@type': 'ListItem', position: 2, name: 'Training & Placement', item: url('/training-placement/') },
        { '@type': 'ListItem', position: 3, name: track.name, item: url(trackHref(track)) },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: `${track.name} courses at ${site.name}`,
      itemListElement: trackPrograms(track).map(({ program }, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: program.name,
        url: url(courseHref(program.slug)),
      })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: hub.faqs.map((item) => ({
        '@type': 'Question',
        name: item.q,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ];
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
