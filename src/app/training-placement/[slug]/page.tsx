import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allPrograms, getProgram, programs } from '@/content/programs';
import { site } from '@/content/site';
import { seoFor } from '@/content/seo';
import { getHub } from '@/content/hubs';
import { getTrack, trackHref, trackOf, trackPages, trackPrograms } from '@/content/tracks';
import { TrackPage } from '@/components/program/TrackPage';
import { ProgramHero } from '@/components/program/ProgramHero';
import { SectionNav } from '@/components/program/SectionNav';
import { ProgramBody, type CourseChooser } from '@/components/program/ProgramBody';
import { LmsIncluded } from '@/components/program/LmsIncluded';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { Journey } from '@/components/home/Journey';
import { Faq } from '@/components/home/Faq';
import { ClosingCta } from '@/components/home/ClosingCta';
import { ProgramCard } from '@/components/home/ProgramShowcase';
import { Container, SectionHeading } from '@/components/ui/Section';
import { shareImage } from '@/lib/share-image';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // Program and course pages, plus a page for each multi-course training track (e.g. /training-placement/ai-and-data-courses/).
  return [
    ...allPrograms.map((program) => ({ slug: program.slug })),
    ...trackPages().map((track) => ({ slug: track.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrack(slug);
  if (track?.page) {
    const path = `/training-placement/${track.slug}/`;
    // A track with page content (hubs.ts) has its own SEO title and description.
    const hub = getHub(track.slug);
    const title = hub?.seo.title ?? `${track.name} Courses in Hyderabad`;
    const description = hub?.seo.description ?? track.intro;
    return {
      title,
      description,
      alternates: { canonical: path },
      openGraph: { title, description, url: path, images: [shareImage] },
      // A track whose courses have no full program page yet stays out of Google until one exists.
      ...(trackPrograms(track).length === 0 && { robots: { index: false, follow: true } }),
    };
  }
  const program = getProgram(slug);
  if (!program) return {};
  const path = `/training-placement/${program.slug}/`;
  const seo = seoFor(path);
  // Programs have titles from the SEO team (seo.ts); a course without one uses its short name,
  // e.g. "ServiceNow HRSD Course in Hyderabad".
  const title = seo?.title ?? `${program.shortName} Course in Hyderabad`;
  const description =
    seo?.description ??
    `${program.summary} Hands-on projects, interview preparation and placement assistance at ARA Solutions, Hyderabad.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path, images: [shareImage] },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (track?.page) return <TrackPage track={track} />;
  const program = getProgram(slug);
  if (!program) notFound();
  const programTrack = trackOf(program.slug);
  const path = `/training-placement/${program.slug}/`;

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'tools', label: 'Tools' },
    { id: 'projects', label: 'Projects' },
    ...(program.certifications ? [{ id: 'certifications', label: 'Certifications' }] : []),
    { id: 'careers', label: 'Careers' },
    { id: 'faq', label: 'FAQ' },
  ];

  // Three questions every program page answers, each left out when the program asks its own version.
  const shared = [
    {
      covered: /fee/i,
      q: 'What are the fees, duration and batch timings?',
      a: 'These depend on the batch. Request a callback or message us on WhatsApp and an advisor will share the current details.',
    },
    {
      covered: /online|live|recorded/i,
      q: 'Are classes live or recorded?',
      a: 'Both. Classes are live on Zoom with your trainer, and every class is recorded and added to your course on our learning platform, so you can watch it again or catch up on one you missed.',
    },
    {
      covered: /placement/i,
      q: 'Do you provide placement assistance?',
      a: 'Yes. The program includes interview preparation and placement assistance, and our alumni work at leading companies including Accenture, Deloitte, TCS and Infosys.',
    },
  ];
  const faqs = [
    ...program.faqs,
    ...shared
      .filter((item) => !program.faqs.some((own) => item.covered.test(own.q)))
      .map(({ q, a }) => ({ q, a })),
  ];

  // "Is this course right for you?": from the track page's course chooser, when it has one.
  const trackHub = programTrack ? getHub(programTrack.slug) : undefined;
  const chooser: CourseChooser | undefined =
    programTrack && trackHub
      ? {
          trackName: programTrack.name,
          trackHref: trackHref(programTrack),
          rows: trackHub.chooser.rows.map((row) => ({
            ...row,
            name: getProgram(row.slug)?.name ?? row.slug,
          })),
        }
      : undefined;

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { name: 'Home', path: '/' },
      { name: 'Training & Placement', path: '/training-placement/' },
      ...(programTrack?.page ? [{ name: programTrack.name, path: trackHref(programTrack) }] : []),
      { name: program.shortName, path },
    ].map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: new URL(crumb.path, site.url).toString(),
    })),
  };

  const courseJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: program.name,
    description: program.summary,
    provider: { '@type': 'Organization', name: site.name, sameAs: site.url },
    teaches: program.outcomes,
    coursePrerequisites: program.prerequisites,
    syllabusSections: program.modules.map((module) => ({
      '@type': 'Syllabus',
      name: module.title,
      description: module.summary,
    })),
  };

  // FAQ schema for Google: only this program's own questions. The three shared ones below them appear on
  // every program page, and Google asks for a repeated question to be marked up on one page only.
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: program.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };

  // Up to 3 suggestions: other courses in the same track first, then the same category, then the
  // flagship programs, so the list stays short however many courses exist.
  const sameTrack = programTrack ? trackPrograms(programTrack).map(({ program: item }) => item) : [];
  const related = [
    ...new Set([...sameTrack, ...allPrograms.filter((item) => item.family === program.family), ...programs]),
  ]
    .filter((item) => item.slug !== program.slug)
    .slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {program.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <ProgramHero program={program} track={programTrack?.page ? programTrack : undefined} />
      <LmsIncluded />
      <SectionNav sections={sections} />
      <ProgramBody program={program} chooser={chooser} />
      <AlumniMarquee className="border-y border-line bg-paper" />
      <Journey />
      <Faq
        items={faqs}
        title={
          program.about ? (
            <>
              {program.shortName} course <em>FAQs</em>
            </>
          ) : (
            <>
              About this <em>program</em>
            </>
          )
        }
      />
      <ClosingCta
        line="training"
        defaultInterest={program.slug}
        title={`Ready to start ${program.shortName}?`}
        intro="Request a callback and an advisor will share the latest batch dates, fees and a detailed syllabus."
      />
      <section className="py-20 sm:py-24">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              eyebrow="Explore more"
              title={
                <>
                  You may also <em>like</em>
                </>
              }
            />
            <Link
              href="/training-placement/"
              className="shrink-0 text-[15px] font-medium underline-offset-4 hover:underline"
            >
              All training programs →
            </Link>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {related.map((item) => (
              <ProgramCard key={item.slug} program={item} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
