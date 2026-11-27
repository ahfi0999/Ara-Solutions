import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight, type LucideIcon } from 'lucide-react';
import { trainingApproach } from '@/content/company';
import { caseStudies } from '@/content/records';
import { allPrograms } from '@/content/programs';
import { stats, type Stat } from '@/content/site';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { CountUp, Figure } from '@/components/motion/primitives';
import { MediaBackground } from '@/components/motion/MediaBackground';
import { TrainingPillarCards } from '@/components/home/TrainingPillarCards';

/**
 * A header band that starts one audience's half of the home page ("For businesses" / "For individuals"),
 * so each visitor can see where their part begins.
 */
export function AudienceBand({
  id,
  label,
  title,
  text,
  href,
  cta,
  icon: Icon,
}: {
  id: string;
  label: string;
  title: string;
  text: ReactNode;
  href: string;
  cta: string;
  icon: LucideIcon;
}) {
  return (
    <section id={id} aria-label={label} className="border-y border-line bg-paper py-12 sm:py-14">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-5">
          <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-ink text-white shadow-soft">
            <Icon aria-hidden className="size-7" />
          </span>
          <div>
            <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brand">{label}</p>
            <h2 className="mt-1 text-2xl font-semibold tracking-tight sm:text-3xl">{title}</h2>
            <p className="mt-1 text-muted">{text}</p>
          </div>
        </div>
        <ButtonLink href={href} arrow className="shrink-0 self-start sm:self-auto">
          {cta}
        </ButtonLink>
      </Container>
    </section>
  );
}

/** "Why learn with ARA": what every program includes (the training twin of "Why ARA"). */
export function TrainingPillars() {
  return (
    <section id="why-learn" className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
      {/* Free Mixkit clip 48166, "Group of college students working together in a classroom" (Mixkit licence). */}
      <MediaBackground
        video="/videos/learn-classroom.mp4"
        mobileVideo="/videos/learn-classroom-mobile.mp4"
        poster="/videos/learn-classroom.jpg"
        alt="Learners in a classroom training session with a trainer"
        overlayClassName="bg-ink/80"
      />
      <div aria-hidden className="grid-lines absolute inset-0" />
      <div aria-hidden className="absolute -right-40 top-0 size-[520px] rounded-full bg-brand/20 blur-3xl" />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Why learn with ARA"
          title={
            <>
              Training shaped by <em>real hiring</em>
            </>
          }
          intro={trainingApproach.paragraphs[0]}
        />
        <TrainingPillarCards />
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <ButtonLink href="/training-placement/" variant="light" arrow>
            Explore all programs
          </ButtonLink>
          <p className="text-white/60">
            Built on 2 decades in the IT industry and 1,000+ professionals placed.
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Training figures: real numbers only (from ARA's original website and the program list). */
const CAREER_FIGURES: Stat[] = [
  ...stats.filter((stat) => /placed|experience/i.test(stat.label)),
  { value: allPrograms.length, suffix: '', label: 'Career-focused courses' },
];

/** Results for both audiences, side by side: hiring case studies and careers built. */
export function ResultsSplit() {
  return (
    <section id="results" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Results"
          title={
            <>
              Outcomes on <em>both sides</em>
            </>
          }
          intro="The teams we have helped hire, and the careers our training has helped build."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-lift sm:p-10">
              <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-60" />
              <div
                aria-hidden
                className="absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-[radial-gradient(circle,rgb(46_58_190/0.5),transparent_65%)] blur-2xl"
              />
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brand-300">
                For businesses
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Hiring results</h3>
              <ul className="mt-8 space-y-6">
                {caseStudies.slice(0, 3).map((study) => (
                  <li
                    key={study.id}
                    className="flex flex-col gap-1 border-b sm:flex-row sm:items-baseline sm:gap-5 border-white/10 pb-6 last:border-0"
                  >
                    <span className="shrink-0 text-[2rem] font-semibold tracking-tight sm:w-56 sm:text-4xl">
                      <Figure value={study.metrics[0].value} />
                    </span>
                    <span>
                      <span className="block font-medium">{study.metrics[0].label}</span>
                      <span className="mt-0.5 block text-[14px] text-white/60">{study.title}</span>
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href="/company/case-studies/"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-medium text-brand-300 hover:text-white"
              >
                View case studies <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
          </Reveal>
          <Reveal className="h-full" delay={0.08}>
            <div className="surface-wine relative isolate flex h-full flex-col overflow-hidden rounded-3xl p-8 text-white shadow-lift sm:p-10">
              <div aria-hidden className="grid-lines absolute inset-0 -z-10 opacity-60" />
              <div
                aria-hidden
                className="absolute -right-24 -top-24 -z-10 size-80 rounded-full bg-[radial-gradient(circle,rgb(255_110_118/0.35),transparent_65%)] blur-2xl"
              />
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-white/75">
                For individuals
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Careers built</h3>
              <ul className="mt-8 space-y-6">
                {CAREER_FIGURES.map((figure) => (
                  <li
                    key={figure.label}
                    className="flex flex-col gap-1 border-b sm:flex-row sm:items-baseline sm:gap-5 border-white/15 pb-6 last:border-0"
                  >
                    <span className="shrink-0 text-[2rem] font-semibold tracking-tight sm:w-56 sm:text-4xl">
                      {figure.text ?? <CountUp value={figure.value} suffix={figure.suffix} />}
                    </span>
                    <span className="font-medium">{figure.label}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/company/case-studies/#training-outcomes"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-medium text-white/85 hover:text-white"
              >
                See training outcomes <ArrowRight aria-hidden className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
