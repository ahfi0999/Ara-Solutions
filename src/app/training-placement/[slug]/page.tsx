import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProgram, programs } from '@/content/programs';
import { site } from '@/content/site';
import { seoFor } from '@/content/seo';
import { getTrack, trackPages, trackPrograms } from '@/content/tracks';
import { TrackPage } from '@/components/program/TrackPage';
import { ProgramHero } from '@/components/program/ProgramHero';
import { SectionNav } from '@/components/program/SectionNav';
import { ProgramBody } from '@/components/program/ProgramBody';
import { LmsIncluded } from '@/components/program/LmsIncluded';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { Journey } from '@/components/home/Journey';
import { Faq } from '@/components/home/Faq';
import { ClosingCta } from '@/components/home/ClosingCta';
import { ProgramCard } from '@/components/home/ProgramShowcase';
import { Container, SectionHeading } from '@/components/ui/Section';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // Program pages, plus a page for each multi-course training track (e.g. /training-placement/ai-and-data/).
  return [
    ...programs.map((program) => ({ slug: program.slug })),
    ...trackPages().map((track) => ({ slug: track.slug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const track = getTrack(slug);
  if (track?.page) {
    const path = `/training-placement/${track.slug}/`;
    const title = `${track.name} Courses in Hyderabad`;
    const description = track.intro;
    return {
      title,
      description,
      alternates: { canonical: path },
      openGraph: { title, description, url: path },
      // A track whose courses have no full program page yet stays out of Google until one exists.
      ...(trackPrograms(track).length === 0 && { robots: { index: false, follow: true } }),
    };
  }
  const program = getProgram(slug);
  if (!program) return {};
  const path = `/training-placement/${program.slug}/`;
  const seo = seoFor(path);
  const title = seo?.title ?? `${program.name} Course in Hyderabad`;
  const description =
    seo?.description ??
    `${program.summary} Hands-on projects, interview preparation and placement assistance at ARA Solutions, Hyderabad.`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { title, description, url: path },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const track = getTrack(slug);
  if (track?.page) return <TrackPage track={track} />;
  const program = getProgram(slug);
  if (!program) notFound();

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'curriculum', label: 'Curriculum' },
    { id: 'tools', label: 'Tools' },
    { id: 'projects', label: 'Projects' },
    ...(program.certifications ? [{ id: 'certifications', label: 'Certifications' }] : []),
    { id: 'careers', label: 'Careers' },
    { id: 'faq', label: 'FAQ' },
  ];

  const faqs = [
    ...program.faqs,
    {
      q: 'What are the fees, duration and batch timings?',
      a: 'These depend on the batch. Request a callback or message us on WhatsApp and an advisor will share the current details.',
    },
    {
      q: 'Are classes live or recorded?',
      a: 'Both. Classes are live on Zoom with your trainer, and every class is recorded and added to your course on our learning platform, so you can watch it again or catch up on one you missed.',
    },
    {
      q: 'Do you provide placement assistance?',
      a: 'Yes. The program includes interview preparation and placement assistance, and our alumni work at leading companies including Accenture, Deloitte, TCS and Infosys.',
    },
  ];

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

  // Up to 3 suggestions: same category first, so the list stays short however many courses exist.
  const others = programs.filter((item) => item.slug !== program.slug);
  const related = [
    ...others.filter((item) => item.family === program.family),
    ...others.filter((item) => item.family !== program.family),
  ].slice(0, 3);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }} />
      {program.faqs.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      )}
      <ProgramHero program={program} />
      <LmsIncluded />
      <SectionNav sections={sections} />
      <ProgramBody program={program} />
      <AlumniMarquee className="border-y border-line bg-paper" />
      <Journey />
      <Faq
        items={faqs}
        title={
          <>
            About this <em>program</em>
          </>
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
              All {programs.length} programs →
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
