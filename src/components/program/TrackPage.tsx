import Link from 'next/link';
import {
  ArrowRight,
  Award,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  FlaskConical,
  Handshake,
  Phone,
  Terminal,
  Video,
} from 'lucide-react';
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
import { Reveal, Spotlight } from '@/components/motion/primitives';
import { CourseMap, PathSteps, SalaryBar } from '@/components/program/HubVisuals';
import { cn } from '@/lib/cn';

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
        aside={
          hub && (
            <CourseMap
              name={track.name}
              logo={programs[0]?.program.logo}
              courses={programs.map(({ entry, program }) => ({
                slug: program.slug,
                label: program.shortName.startsWith(`${track.name} `)
                  ? program.shortName.slice(track.name.length + 1)
                  : program.shortName,
                isNew: entry.isNew,
              }))}
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

/** "Coding" column: a coloured badge for no coding, coding taught in the course, or coding required. */
function CodingBadge({ text }: { text: string }) {
  const kind = /^no coding/i.test(text) ? 'none' : /required/i.test(text) ? 'required' : 'taught';
  const Icon = kind === 'none' ? Check : kind === 'required' ? Terminal : Code2;
  return (
    <span
      className={cn(
        'inline-flex items-start gap-1.5 rounded-xl px-2.5 py-1 text-[13px] font-medium leading-snug',
        kind === 'none' && 'bg-emerald-50 text-emerald-700',
        kind === 'taught' && 'bg-sky-50 text-sky-700',
        kind === 'required' && 'bg-amber-50 text-amber-800',
      )}
    >
      <Icon aria-hidden className="mt-0.5 size-3.5 shrink-0" strokeWidth={2.5} />
      {text}
    </span>
  );
}

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

/** Certifications grouped by the course that prepares you for them, in the order they first appear. */
function certificationGroups(hub: TrackHub) {
  const groups: { slug: string; names: string[] }[] = [];
  for (const row of hub.certifications.rows) {
    const group = groups.find((item) => item.slug === row.slug);
    if (group) group.names.push(row.name);
    else groups.push({ slug: row.slug, names: [row.name] });
  }
  return groups;
}

const tableWrap = 'mt-10 overflow-x-auto rounded-3xl border border-line bg-paper shadow-soft';
const th = 'p-5 font-medium';
const td = 'p-5 align-top text-[15px]';
/** A table cell that becomes a stacked line of a card on phones (the comparison table). */
const tdStack = `${td} max-md:block max-md:px-0 max-md:pb-0 max-md:pt-4`;

/** A cell's column name, shown only on phones, where the table's header row is hidden. */
function PhoneLabel({ children }: { children: string }) {
  return <span className="mb-1.5 block text-[12px] font-medium text-faint md:hidden">{children}</span>;
}

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
            <table className="w-full text-left md:min-w-[900px]">
              <caption className="sr-only">Comparison of ARA Solutions {track.name} courses</caption>
              <thead className="max-md:hidden">
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className={th}>Course</th>
                  <th scope="col" className={th}>Best for</th>
                  <th scope="col" className={th}>Coding</th>
                  <th scope="col" className={th}>Certification paths</th>
                  <th scope="col" className={th}>Top roles</th>
                </tr>
              </thead>
              <tbody>
                {hub.compare.map((row, index) => (
                  <Reveal
                    as="tr"
                    key={row.slug}
                    y={16}
                    delay={index * 0.06}
                    className="group border-b border-line transition-colors last:border-0 hover:bg-canvas/70 max-md:block max-md:p-5"
                  >
                    <th scope="row" className="relative p-5 align-top max-md:block max-md:p-0">
                      <span
                        aria-hidden
                        className="absolute inset-y-3 left-0 w-1 scale-y-0 rounded-full bg-brand transition-transform duration-300 group-hover:scale-y-100"
                      />
                      <Link
                        href={courseHref(row.slug)}
                        className="text-[15px] font-semibold tracking-tight hover:underline"
                      >
                        {courseName(row.slug)}
                      </Link>
                    </th>
                    <td className={`${tdStack} text-muted`}>
                      <PhoneLabel>Best for</PhoneLabel>
                      {row.bestFor}
                    </td>
                    <td className={tdStack}>
                      <PhoneLabel>Coding</PhoneLabel>
                      <CodingBadge text={row.coding} />
                    </td>
                    <td className={tdStack}>
                      <PhoneLabel>Certification paths</PhoneLabel>
                      <ul className="flex flex-wrap gap-1.5">
                        {row.certifications.map((name) => (
                          <li
                            key={name}
                            className="rounded-lg border border-line bg-canvas px-2.5 py-0.5 text-[13px] font-medium"
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    </td>
                    <td className={`${tdStack} text-muted`}>
                      <PhoneLabel>Top roles</PhoneLabel>
                      {row.roles.join(', ')}
                    </td>
                  </Reveal>
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
              {hub.chooser.rows.map((row, index) => (
                <Reveal as="li" key={row.background} y={18} delay={index * 0.06}>
                  <Link
                    href={courseHref(row.slug)}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-line bg-paper p-5 shadow-soft transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-0.5 hover:border-ink/30 hover:shadow-lift sm:gap-6 sm:p-6"
                  >
                    <span
                      aria-hidden
                      className="flex size-10 shrink-0 items-center justify-center rounded-full bg-canvas font-mono text-[13px] font-semibold text-muted transition-colors duration-300 group-hover:bg-brand group-hover:text-white"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex-1">
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
                </Reveal>
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
            <table className="w-full text-left md:min-w-[560px]">
              <caption className="sr-only">{hub.careers.title}</caption>
              <thead className="max-md:hidden">
                <tr className="border-b border-line text-[13px] text-muted">
                  <th scope="col" className={th}>Role</th>
                  <th scope="col" className={th}>Experience</th>
                  <th scope="col" className={th}>Annual salary in India</th>
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
                      <th scope="row" className="p-5 text-[15px] font-semibold tracking-tight max-md:col-span-2 max-md:p-0">
                        {row.role}
                      </th>
                      <td className={`${td} max-md:p-0 max-md:text-muted`}>{row.experience}</td>
                      <td className={`${td} font-medium tabular-nums max-md:p-0 max-md:text-right`}>{row.pay}</td>
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
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20 [&>*]:min-w-0">
          <SectionHeading eyebrow="Certifications" title={hub.certifications.title} intro={hub.certifications.intro} />
          <div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {certificationGroups(hub).map((group, index) => (
                <Reveal
                  as="li"
                  key={group.slug}
                  y={20}
                  delay={(index % 4) * 0.07}
                  className="group rounded-2xl border border-line bg-paper p-5 shadow-soft transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lift"
                >
                  <div className="flex items-center gap-3">
                    <span
                      aria-hidden
                      className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-ink text-white transition-[rotate,scale] duration-300 group-hover:rotate-[-8deg] group-hover:scale-110"
                    >
                      <Award className="size-4" />
                    </span>
                    <Link
                      href={courseHref(group.slug)}
                      className="text-[15px] font-semibold tracking-tight hover:underline"
                    >
                      {getProgram(group.slug)?.shortName ?? group.slug}
                    </Link>
                  </div>
                  <ul className="mt-4 grid gap-2">
                    {group.names.map((name) => (
                      <li key={name} className="flex items-start gap-2 text-[14.5px] leading-snug">
                        <BadgeCheck aria-hidden className="mt-0.5 size-4 shrink-0 text-emerald-600" />
                        {name}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              ))}
            </ul>
            <p className="mt-4 text-sm text-faint">{hub.certifications.note}</p>
          </div>
        </Container>
      </section>

      {/* Why ARA */}
      <section className="bg-canvas py-20 sm:py-28">
        <Container>
          <SectionHeading eyebrow="Why ARA" title={hub.benefits.title} />
          <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {hub.benefits.items.map((item, index) => {
              const Icon = BENEFIT_ICONS[index % BENEFIT_ICONS.length];
              return (
                <Reveal as="li" key={item.title} delay={index * 0.08} className="h-full">
                  <Spotlight
                    color="rgb(229 35 45 / 0.07)"
                    className="group h-full rounded-3xl border border-line bg-paper p-6 shadow-soft transition-[border-color,box-shadow,translate] duration-300 hover:-translate-y-1 hover:border-ink/25 hover:shadow-lift sm:p-7"
                  >
                    <span
                      aria-hidden
                      className="flex size-12 items-center justify-center rounded-2xl bg-ink text-white transition-[background-color,rotate,scale] duration-300 group-hover:rotate-[-6deg] group-hover:scale-110 group-hover:bg-brand"
                    >
                      <Icon className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
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
          {others.map((item, index) => (
            <Reveal as="li" key={item.href} y={16} delay={(index % 3) * 0.06}>
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
            </Reveal>
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
