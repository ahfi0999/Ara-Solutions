import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  ChevronRight,
  FlaskConical,
  GraduationCap,
  Handshake,
  Phone,
  Video,
} from 'lucide-react';
import { getProgram } from '@/content/programs';
import { site, trainingLine } from '@/content/site';
import { getHub, type TrackHub } from '@/content/hubs';
import { trackHref, trackListedCourses, trackPrograms, tracks, type Track } from '@/content/tracks';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { ProgramCard } from '@/components/home/ProgramShowcase';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ClosingCta } from '@/components/home/ClosingCta';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { Journey } from '@/components/home/Journey';
import { Faq } from '@/components/home/Faq';
import { Reveal, Spotlight } from '@/components/motion/primitives';
import { CareerFlow, CourseExplorer, CourseMap, PathSteps, SalaryBar } from '@/components/program/HubVisuals';
import { cn } from '@/lib/cn';
import { accent } from '@/lib/accent';

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
        title={hub ? <AccentTitle text={hub.hero.title} accent={hub.hero.accent} /> : `${track.name} courses`}
        intro={hub?.hero.intro ?? track.intro}
        aside={
          hub && (
            <CourseMap
              name={track.name}
              logo={programs[0]?.program.logo}
              courses={programs.map(({ entry, program }) => {
                const row = hub.compare.find((item) => item.slug === program.slug);
                return {
                  slug: program.slug,
                  label: shortLabel(track, program.shortName),
                  isNew: entry.isNew,
                  certifications: row?.certifications ?? [],
                  coding: row?.coding ?? '',
                };
              })}
            />
          )
        }
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
                {programs.map(({ entry, program }, index) => (
                  <Reveal as="li" key={program.slug} delay={(index % 3) * 0.08}>
                    <div id={program.slug} className="h-full scroll-mt-32">
                      <ProgramCard program={program} isNew={entry.isNew} />
                    </div>
                  </Reveal>
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

/** Icons for the four "Why ARA" points, in order: hiring-led training, live classes, labs and projects, placement. */
const BENEFIT_ICONS = [BriefcaseBusiness, Video, FlaskConical, Handshake];

/** The low and high ends of a pay range such as "₹2.7 L to ₹10 L", in lakh. */
function payRange(pay: string): [number, number] | null {
  const numbers = pay.match(/\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  return numbers.length >= 2 ? [numbers[0], numbers[1]] : null;
}

/** The salary bars' shared scale: the highest pay, rounded up to the next 5 lakh. */
function salaryScale(hub: TrackHub) {
  const top = Math.max(...hub.careers.salaries.map((row) => payRange(row.pay)?.[1] ?? 0));
  return Math.max(5, Math.ceil(top / 5) * 5);
}

/**
 * Certifications grouped by the course that prepares you for them, in the order they first appear. A course also
 * gets the exams the comparison table lists for it by code (ServiceNow Masters: CSA, CAD and CIS-HR), first, so a
 * course that covers several modules shows every exam it prepares you for, not only the ones listed under it.
 */
function certificationGroups(hub: TrackHub) {
  type Cert = TrackHub['certifications']['rows'][number];
  const groups: { slug: string; certs: Cert[] }[] = [];
  for (const row of hub.certifications.rows) {
    const group = groups.find((item) => item.slug === row.slug);
    if (group) group.certs.push(row);
    else groups.push({ slug: row.slug, certs: [row] });
  }
  for (const group of groups) {
    const codes = hub.compare.find((row) => row.slug === group.slug)?.certifications ?? [];
    const extra = codes
      .map((code) => hub.certifications.rows.find((row) => row.name.endsWith(`(${code})`)))
      .filter((cert): cert is Cert => cert !== undefined && !group.certs.includes(cert));
    group.certs = [...extra, ...group.certs];
  }
  return groups;
}

const tableWrap =
  'mt-10 overflow-x-auto overflow-y-hidden rounded-3xl border border-line bg-paper shadow-soft';

/** A course's short name without the track name, e.g. "Masters" for "ServiceNow Masters". */
const shortLabel = (track: Track, shortName: string) =>
  shortName.startsWith(`${track.name} `) ? shortName.slice(track.name.length + 1) : shortName;
const th = 'p-5 font-medium';
const td = 'p-5 align-top text-[15px]';

/** The course's own accent colour (the one its course card uses). */
const courseAccent = (slug: string) => accent[getProgram(slug)?.accent ?? 'indigo'];

/** Background of the navy "Why ARA" section: faint grid lines and two slowly breathing glows (red and indigo). */
function DarkGlow() {
  return (
    <>
      <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-40" />
      <div
        aria-hidden
        className="absolute -right-48 top-0 -z-10 size-[560px] rounded-full bg-brand/25 blur-[140px] motion-safe:animate-[pulse_7s_ease-in-out_infinite]"
      />
      <div
        aria-hidden
        className="absolute -left-48 bottom-0 -z-10 size-[560px] rounded-full bg-indigo-500/25 blur-[140px] motion-safe:animate-[pulse_9s_ease-in-out_infinite]"
      />
    </>
  );
}

function HubSections({ track, hub }: { track: Track; hub: TrackHub }) {
  return (
    <>
      {/* Compare the courses */}
      <section id="compare" className="scroll-mt-24 py-20 sm:py-28">
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
          <CourseExplorer
            courses={hub.compare.map((row) => {
              const listed = trackPrograms(track).find(({ program }) => program.slug === row.slug);
              return {
                slug: row.slug,
                label: shortLabel(track, getProgram(row.slug)?.shortName ?? row.slug),
                name: courseName(row.slug),
                isNew: listed?.entry.isNew,
                bestFor: row.bestFor,
                coding: row.coding,
                exams: row.certifications.map((code) => {
                  const cert = hub.certifications.rows.find((item) => item.name.endsWith(`(${code})`));
                  return { code, name: cert?.name ?? code, badge: cert?.badge };
                }),
                roles: row.roles,
              };
            })}
          />
        </Container>
      </section>

      {/* Which course is right for you */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Where to start" title={hub.chooser.title} intro={hub.chooser.intro} />
          <CareerFlow
            note={hub.chooser.note}
            rows={hub.chooser.rows.map((row) => {
              const compare = hub.compare.find((item) => item.slug === row.slug);
              return {
                label: row.label,
                background: row.background,
                slug: row.slug,
                name: courseName(row.slug),
                certifications: compare?.certifications ?? [],
                role: compare?.roles[0] ?? '',
              };
            })}
          />
        </Container>
      </section>

      {/* Careers and salaries */}
      <section id="careers" className="scroll-mt-24 bg-canvas py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Careers" title={hub.careers.title} intro={hub.careers.intro} />
          <div className={tableWrap}>
            <table className="w-full text-left md:min-w-[560px]">
              <caption className="sr-only">{hub.careers.title}</caption>
              <thead className="max-md:hidden">
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className={th}>
                    Role
                  </th>
                  <th scope="col" className={th}>
                    Experience
                  </th>
                  <th scope="col" className={th}>
                    Annual salary in India
                  </th>
                  <th scope="col" className={cn(th, 'hidden w-[34%] md:table-cell')}>
                    <span className="flex justify-between gap-4">
                      <span>₹0</span>
                      <span>₹{salaryScale(hub)} L a year</span>
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {hub.careers.salaries.map((row, index) => {
                  const range = payRange(row.pay);
                  return (
                    <tr
                      key={row.role}
                      className="border-b border-line transition-colors last:border-0 hover:bg-canvas/70 max-md:grid max-md:grid-cols-2 max-md:gap-x-4 max-md:gap-y-1 max-md:p-5"
                    >
                      <th
                        scope="row"
                        className="p-5 text-[15px] font-semibold tracking-tight max-md:col-span-2 max-md:p-0"
                      >
                        {row.role}
                      </th>
                      <td className={`${td} max-md:p-0 max-md:text-muted`}>{row.experience}</td>
                      <td className={`${td} font-medium tabular-nums max-md:p-0 max-md:text-right`}>
                        {row.pay}
                      </td>
                      <td className="p-5 align-middle max-md:col-span-2 max-md:p-0 max-md:pt-3">
                        {range && (
                          <SalaryBar
                            min={range[0]}
                            max={range[1]}
                            scale={salaryScale(hub)}
                            delay={index * 0.15}
                          />
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-faint">{hub.careers.salaryNote}</p>

          <h3 className="mt-14 text-xl font-semibold tracking-tight">Your {track.name} career path</h3>
          <PathSteps steps={hub.careers.path} />
        </Container>
      </section>

      {/* Certifications */}
      <section id="certifications" className="scroll-mt-24 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Certifications"
            title={hub.certifications.title}
            intro={hub.certifications.intro}
          />
          {/* Three cards a row at most, so a course with three exams shows its badges side by side. */}
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {certificationGroups(hub).map((group, index) => {
              const a = courseAccent(group.slug);
              const badges = group.certs.filter((cert) => cert.badge);
              return (
                <Reveal
                  as="li"
                  key={group.slug}
                  y={24}
                  delay={(index % 4) * 0.08}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-paper shadow-soft transition-[box-shadow,translate] duration-300 hover:-translate-y-1.5 hover:shadow-lift"
                >
                  {/* The header takes the course's colour; a light sweeps across it on hover. */}
                  <div className={cn('relative overflow-hidden px-5 pb-5 pt-5', a.soft)}>
                    <span
                      aria-hidden
                      className="absolute inset-y-0 -left-1/3 w-1/4 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/70 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[620%]"
                    />
                    {/* The official badges of the exams (they lift one after another on hover), or an award icon
                        where the issuer publishes no badge. */}
                    {badges.length > 0 ? (
                      <div className="relative flex flex-wrap gap-2">
                        {badges.map((cert, badgeIndex) => (
                          <Image
                            key={cert.name}
                            src={cert.badge!}
                            alt={`${cert.name} badge`}
                            title={cert.name}
                            width={96}
                            height={96}
                            quality={90}
                            style={{ transitionDelay: `${badgeIndex * 70}ms` }}
                            className="size-24 drop-shadow-[0_6px_14px_rgb(13_17_80/0.2)] transition-transform duration-300 group-hover:-translate-y-1.5"
                          />
                        ))}
                      </div>
                    ) : (
                      <span
                        aria-hidden
                        className={cn(
                          'relative flex size-10 items-center justify-center rounded-xl text-white transition-[rotate,scale] duration-300 group-hover:rotate-[-8deg] group-hover:scale-110',
                          a.bg,
                        )}
                      >
                        <Award className="size-5" />
                      </span>
                    )}
                    <div className="relative mt-4 flex items-center justify-between gap-3">
                      <Link
                        href={courseHref(group.slug)}
                        className="text-[16px] font-semibold tracking-tight text-ink underline-offset-4 hover:underline"
                      >
                        {getProgram(group.slug)?.shortName ?? group.slug}
                      </Link>
                      <span className="shrink-0 rounded-full bg-white px-2.5 py-0.5 text-[12px] font-medium text-muted">
                        {group.certs.length} {group.certs.length === 1 ? 'exam' : 'exams'}
                      </span>
                    </div>
                  </div>
                  <ul className="grid flex-1 content-start gap-2.5 p-5">
                    {group.certs.map((cert) => (
                      <li key={cert.name} className="flex items-start gap-2 text-[14.5px] leading-snug">
                        <BadgeCheck aria-hidden className={cn('mt-0.5 size-4 shrink-0', a.text)} />
                        {cert.name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              );
            })}
          </ul>
          <p className="mt-5 text-sm text-faint">{hub.certifications.note}</p>
        </Container>
      </section>

      {/* Why ARA */}
      <section className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
        <DarkGlow />
        <Container>
          <SectionHeading tone="dark" eyebrow="Why ARA" title={hub.benefits.title} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hub.benefits.items.map((item, index) => {
              const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
              return (
                <Reveal as="li" key={item.title} delay={index * 0.08} className="h-full">
                  <Spotlight
                    color="rgb(255 255 255 / 0.09)"
                    className="group h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-[border-color,background-color,translate] duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] sm:p-7"
                  >
                    <span
                      aria-hidden
                      className="pointer-events-none absolute right-5 top-3 font-mono text-6xl font-semibold text-white/[0.06] transition-colors duration-300 group-hover:text-brand-300/20"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span
                      aria-hidden
                      className="relative flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-300 to-brand text-white shadow-[0_8px_28px_rgb(229_35_45/0.45)] transition-[rotate,scale] duration-300 group-hover:rotate-[-6deg] group-hover:scale-110"
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="relative mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="relative mt-2 leading-relaxed text-white/65">{item.text}</p>
                  </Spotlight>
                </Reveal>
              );
            })}
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
      if (track.page)
        return {
          name: `${track.name} courses`,
          href: trackHref(track),
          count: track.courses.length,
          tone: first?.program.accent ?? 'indigo',
        };
      // A one-course track links straight to its course, by the course's name.
      return first
        ? {
            name: first.entry.label ?? first.program.name,
            href: courseHref(first.program.slug),
            count: null,
            tone: first.program.accent,
          }
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
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((item, index) => {
            const a = accent[item.tone];
            return (
              <Reveal as="li" key={item.href} y={16} delay={(index % 3) * 0.07}>
                {/* Navy tile tinted with the track's colour; the colour glow grows on hover. */}
                <Link
                  href={item.href}
                  className="group relative flex h-full items-center justify-between gap-4 overflow-hidden rounded-2xl bg-ink px-5 py-5 text-white shadow-soft transition-[box-shadow,translate] duration-300 hover:-translate-y-1 hover:shadow-lift"
                >
                  <span
                    aria-hidden
                    className={cn('absolute inset-0 bg-gradient-to-br opacity-90', a.gradient)}
                  />
                  <span
                    aria-hidden
                    className={cn(
                      'absolute -right-12 -top-14 size-40 rounded-full opacity-60 blur-3xl transition-[scale,opacity] duration-700 group-hover:scale-150 group-hover:opacity-100',
                      a.glow,
                    )}
                  />
                  <span aria-hidden className="grid-lines absolute inset-0 opacity-30" />
                  <span className="relative flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex size-10 items-center justify-center rounded-xl bg-white/10 transition-transform duration-300 group-hover:scale-110"
                    >
                      <GraduationCap className={cn('size-5', a.textOnDark)} />
                    </span>
                    <span>
                      <span className="block text-[15px] font-semibold tracking-tight">{item.name}</span>
                      {item.count && (
                        <span className="mt-0.5 block text-[13px] text-white/60">
                          {item.count} {item.count === 1 ? 'course' : 'courses'}
                        </span>
                      )}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden
                    className="relative size-4 shrink-0 text-white/60 transition-transform group-hover:translate-x-1 group-hover:text-white"
                  />
                </Link>
              </Reveal>
            );
          })}
        </ul>
        <p className="mt-6">
          <Link
            href="/training-placement/"
            className="text-[15px] font-medium underline-offset-4 hover:underline"
          >
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
