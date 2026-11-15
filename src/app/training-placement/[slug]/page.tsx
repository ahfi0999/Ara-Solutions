import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProgram, programs } from '@/content/programs';
import { site } from '@/content/site';
import { ProgramHero } from '@/components/program/ProgramHero';
import { SectionNav } from '@/components/program/SectionNav';
import { ProgramBody } from '@/components/program/ProgramBody';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { Journey } from '@/components/home/Journey';
import { Faq } from '@/components/home/Faq';
import { ClosingCta } from '@/components/home/ClosingCta';
import { ProgramCard } from '@/components/home/ProgramShowcase';
import { Container, SectionHeading } from '@/components/ui/Section';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return programs.map((program) => ({ slug: program.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = getProgram(slug);
  if (!program) return {};
  const title = `${program.name} Course in Hyderabad`;
  return {
    title,
    description: `${program.summary} Hands-on projects, interview preparation and placement assistance at ARA Solutions, Hyderabad.`,
    alternates: { canonical: `/training-placement/${program.slug}/` },
    openGraph: { title, description: program.tagline, url: `/training-placement/${program.slug}/` },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
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
    educationalLevel: program.level,
    syllabusSections: program.modules.map((module) => ({
      '@type': 'Syllabus',
      name: module.title,
      description: module.summary,
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
      <ProgramHero program={program} />
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
            <Link href="/training-placement/" className="shrink-0 text-[15px] font-medium underline-offset-4 hover:underline">
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
