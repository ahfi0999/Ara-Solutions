import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Ear,
  GraduationCap,
  Hammer,
  Handshake,
  ScanSearch,
  Target,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { about } from '@/content/company';
import { allPrograms } from '@/content/programs';
import { trackHref, trackPrograms, tracks } from '@/content/tracks';
import { stats } from '@/content/site';
import { shareImage } from '@/lib/share-image';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { Clientele } from '@/components/home/Clientele';
import { Faq } from '@/components/home/Faq';
import { ClosingCta } from '@/components/home/ClosingCta';

export const metadata: Metadata = {
  title: { absolute: about.seo.title },
  description: about.seo.description,
  alternates: { canonical: '/company/about/' },
  openGraph: {
    title: about.seo.title,
    description: about.seo.description,
    url: '/company/about/',
    images: [shareImage],
  },
};

const NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
const trackWord = NUMBER_WORDS[tracks.length] ?? String(tracks.length);
const courseCount = `${allPrograms.length} courses in ${trackWord} tracks`;

/** The page's figures: the founders' experience as the document words it, then ARA's other headline numbers. */
const FIGURES = [
  about.experience,
  ...['Professionals placed', 'Screened talent profiles', 'To a targeted shortlist'].flatMap((label) =>
    stats
      .filter((stat) => stat.label === label)
      .map((stat) => ({ value: `${stat.value.toLocaleString('en-IN')}${stat.suffix}`, label: stat.label })),
  ),
  { value: String(allPrograms.length), label: `Courses in ${trackWord} tracks` },
];

const ONE_ROOF_ICONS: LucideIcon[] = [Target, GraduationCap, Users];
const HOW_ICONS: LucideIcon[] = [Ear, ScanSearch, Hammer, Handshake];

export default function AboutPage() {
  return (
    <>
      <AboutJsonLd />
      {/* 1. Hero */}
      <PageHero
        eyebrow="About ARA Solutions"
        title={
          <>
            IT Staffing and Training Company <em>in Hyderabad</em>
          </>
        }
        intro={
          <>
            <span className="block text-xl font-medium text-white sm:text-2xl">{about.tagline}</span>
            <span className="mt-4 block">
              <strong className="font-semibold text-white">{about.lead}</strong> {about.intro}
            </span>
          </>
        }
        aside={
          <figure className="relative overflow-hidden rounded-3xl border border-white/10 shadow-[0_40px_80px_-30px_rgb(0_0_0/0.8)]">
            {/* eslint-disable-next-line @next/next/no-img-element -- static hero photo */}
            <img
              src="/videos/why-meeting.jpg"
              alt="Team meeting around a conference table"
              title="Team meeting around a conference table"
              className="aspect-[4/3] w-full object-cover"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent"
            />
            <figcaption className="absolute inset-x-5 bottom-5 flex flex-wrap gap-2 text-[13px] font-medium">
              <span className="rounded-full bg-white px-3 py-1.5 text-ink">Founded in 2022</span>{' '}
              <span className="rounded-full bg-white/15 px-3 py-1.5 text-white backdrop-blur">
                Hyderabad, Telangana
              </span>{' '}
              <span className="rounded-full bg-white/15 px-3 py-1.5 text-white backdrop-blur">
                Staffing, training and placement
              </span>
            </figcaption>
          </figure>
        }
      >
        <div className="flex flex-wrap gap-3">
          <EnquiryButton size="lg" arrow interest="hiring" title="Tell us about the talent you need">
            Hire talent
          </EnquiryButton>
          <ButtonLink href="/training-placement/" variant="ghost-light" size="lg">
            Explore our courses
          </ButtonLink>
          <ButtonLink href="/contact/" variant="ghost-light" size="lg">
            Talk to us
          </ButtonLink>
        </div>
      </PageHero>

      {/* 2. About ARA Solutions */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <SectionHeading
            eyebrow="Who we are"
            title={
              <>
                About <em>ARA Solutions</em>
              </>
            }
          />
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:pt-10">
            {about.story.map((paragraph, index) => (
              <p key={paragraph.slice(0, 24)} className={index === 0 ? 'text-xl text-text' : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. What we do */}
      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="Staffing and training"
            title={
              <>
                What <em>we do</em>
              </>
            }
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            <WhatWeDoCard
              photo="/images/services/rpo.jpg"
              photoAlt="Recruitment team working together on laptops"
              title={about.forBusinesses.title}
              intro={about.forBusinesses.intro}
            >
              <ul className="mt-6 grid gap-2.5">
                {about.forBusinesses.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}/`}
                      className="group flex items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-white/25 hover:bg-white/[0.06]"
                    >
                      <span>
                        <span className="block font-semibold tracking-tight">{service.name}</span>{' '}
                        <span className="mt-0.5 block text-[15px] text-white/60">{service.text}</span>
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="mt-0.5 size-5 shrink-0 text-white/40 transition-colors group-hover:text-white"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </WhatWeDoCard>
            <WhatWeDoCard
              photo="/videos/learn-classroom.jpg"
              photoAlt="Learners in a classroom training session with a trainer"
              title={about.forProfessionals.title}
              intro={about.forProfessionals.text}
            >
              <ul className="mt-6 flex flex-wrap gap-2">
                {tracks.map((track) => {
                  const courses = trackPrograms(track);
                  return (
                    <li key={track.slug}>
                      <Link
                        href={
                          track.page
                            ? trackHref(track)
                            : `/training-placement/${courses[0]?.program.slug ?? ''}/`
                        }
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3.5 py-1.5 text-[14px] transition-colors hover:border-white/35 hover:bg-white/10"
                      >
                        {track.name}{' '}
                        <span className="text-white/50">
                          {courses.length} {courses.length === 1 ? 'course' : 'courses'}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-8">
                <ButtonLink href="/training-placement/" variant="light" arrow>
                  See all {courseCount}
                </ButtonLink>
              </div>
            </WhatWeDoCard>
          </div>
        </Container>
      </section>

      {/* 4. Why staffing and training under one roof */}
      <section className="border-b border-line bg-paper/70 py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Why ARA Solutions"
            title={
              <>
                Why staffing and training <em>under one roof</em>
              </>
            }
          />
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {about.oneRoof.map((item, index) => {
              const Icon = ONE_ROOF_ICONS[index] ?? Target;
              return (
                <Reveal as="li" key={item.title} delay={index * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-canvas p-7 shadow-soft">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand/[0.08] text-brand">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      {/* 5. How we work */}
      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our process"
            title={
              <>
                How <em>we work</em>
              </>
            }
          />
          <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {about.howWeWork.map((step, index) => {
              const Icon = HOW_ICONS[index] ?? Handshake;
              return (
                <Reveal as="li" key={step.title} delay={index * 0.06} className="h-full">
                  <div className="relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-7 shadow-soft">
                    <span
                      aria-hidden
                      className="absolute -right-2 -top-4 font-mono text-[88px] font-semibold leading-none text-ink/[0.05]"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="relative flex size-11 items-center justify-center rounded-xl bg-ink text-white">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="relative mt-5 text-xl font-semibold tracking-tight">{step.title}</h3>
                    <p className="relative mt-2 leading-relaxed text-muted">{step.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </Container>
      </section>

      {/* 6. ARA Solutions in numbers */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading
            eyebrow="At a glance"
            title={
              <>
                ARA Solutions <em>in numbers</em>
              </>
            }
          />
          <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {FIGURES.map((figure, index) => (
              <Reveal
                key={figure.label}
                delay={index * 0.06}
                className={index === 0 ? 'sm:col-span-2 lg:col-span-1' : undefined}
              >
                <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-ink p-7 text-white">
                  <div aria-hidden className="grid-lines absolute inset-0" />
                  <dd className="relative text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                    {figure.value}
                  </dd>
                  <dt className="relative mt-8 text-white/60">{figure.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      {/* 8. Companies we have recruited for, and where our learners work */}
      <Clientele
        className="border-t border-line"
        title={
          <>
            Companies we have <em>recruited for</em>
          </>
        }
        alumniLabel="Where our learners now work"
        hireHref="/services/"
        more={
          <Link
            href="/company/case-studies/"
            className="group inline-flex items-center gap-2 font-semibold text-text transition-colors hover:text-brand"
          >
            Read our case studies
            <ArrowRight aria-hidden className="size-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        }
      />

      {/* 9. Questions people ask */}
      <div className="border-t border-line">
        <Faq
          items={about.faqs}
          title={
            <>
              Questions people ask about <em>ARA Solutions</em>
            </>
          }
        />
      </div>

      {/* 10. Closing call to action */}
      <ClosingCta
        title={about.closing}
        intro="Tell us what you need: the right people for your team, or the right course for your career."
        email
        actions={
          <div className="mt-8 flex flex-wrap gap-3">
            <EnquiryButton size="lg" arrow interest="hiring" title="Tell us about the talent you need">
              Hire talent
            </EnquiryButton>
            <ButtonLink href="/training-placement/" variant="ghost-light" size="lg">
              Find the right course
            </ButtonLink>
          </div>
        }
      />
    </>
  );
}

/** One of the two "What we do" cards: a photo on top, then the title, intro and the card's own content. */
function WhatWeDoCard({
  photo,
  photoAlt,
  title,
  intro,
  children,
}: {
  photo: string;
  photoAlt: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03]">
      <div className="relative h-48 overflow-hidden sm:h-56">
        {/* eslint-disable-next-line @next/next/no-img-element -- static card photo */}
        <img
          src={photo}
          alt={photoAlt}
          title={photoAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 size-full object-cover"
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/20 to-ink" />
      </div>
      <div className="flex flex-1 flex-col gap-0 p-7 sm:p-8">
        <h3 className="text-2xl font-semibold tracking-tight">{title}</h3>
        <p className="mt-2 leading-relaxed text-white/65">{intro}</p>
        {children}
      </div>
    </div>
  );
}

/** The page's questions for Google (FAQ rich results). */
function AboutJsonLd() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: about.faqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
