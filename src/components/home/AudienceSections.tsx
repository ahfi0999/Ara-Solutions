import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  FlaskConical,
  FolderKanban,
  MessagesSquare,
  type LucideIcon,
} from 'lucide-react';
import { trainingPillars } from '@/content/home';
import { trainingApproach } from '@/content/company';
import { caseStudies } from '@/content/records';
import { programs } from '@/content/programs';
import { stats } from '@/content/site';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { CountUp, Figure } from '@/components/motion/primitives';

/**
 * A header band that starts one audience's half of the home page ("For businesses" / "For professionals"),
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
  text: string;
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

const PILLAR_ICONS: LucideIcon[] = [FlaskConical, FolderKanban, BadgeCheck, MessagesSquare, Briefcase];

/** "Why learn with ARA": the five things every program includes (the training twin of "Why ARA"). */
export function TrainingPillars() {
  return (
    <section id="why-learn" className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
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
        <ol className="relative mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {trainingPillars.map((pillar, index) => {
            const Icon = PILLAR_ICONS[index];
            return (
              <Reveal as="li" key={pillar.title} delay={index * 0.08} className="h-full">
                <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition-colors duration-300 hover:border-white/25 hover:bg-white/[0.07]">
                  <span className="flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-xl bg-brand text-white shadow-[0_10px_30px_-10px_rgb(229_35_45/0.8)] transition-transform duration-300 group-hover:-translate-y-1 group-hover:-rotate-6">
                      <Icon aria-hidden className="size-6" />
                    </span>
                    <span className="font-mono text-sm text-white/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </span>
                  <h3 className="mt-6 text-lg font-semibold tracking-tight">{pillar.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-white/60">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </ol>
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-4">
          <ButtonLink href="/training-placement/" variant="light" arrow>
            Explore all programs
          </ButtonLink>
          <p className="text-white/60">
            Built on 13+ years in the IT industry and 1,000+ professionals placed.
          </p>
        </div>
      </Container>
    </section>
  );
}

/** Training figures: real numbers only (from ARA's original website and the program list). */
const CAREER_FIGURES = [
  ...stats.filter((stat) => /placed|years/i.test(stat.label)),
  { value: programs.length, suffix: '', label: 'Career-focused programs' },
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
            <div className="flex h-full flex-col rounded-3xl bg-ink p-8 text-white shadow-lift sm:p-10">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brand-300">
                For businesses
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Hiring results</h3>
              <ul className="mt-8 space-y-6">
                {caseStudies.slice(0, 3).map((study) => (
                  <li
                    key={study.id}
                    className="flex items-baseline gap-5 border-b border-white/10 pb-6 last:border-0"
                  >
                    <span className="w-24 shrink-0 text-4xl font-semibold tracking-tight">
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
            <div className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8 shadow-soft sm:p-10">
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-brand">For professionals</p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">Careers built</h3>
              <ul className="mt-8 space-y-6">
                {CAREER_FIGURES.map((figure) => (
                  <li
                    key={figure.label}
                    className="flex items-baseline gap-5 border-b border-line pb-6 last:border-0"
                  >
                    <span className="w-24 shrink-0 text-4xl font-semibold tracking-tight text-ink">
                      <CountUp value={figure.value} suffix={figure.suffix} />
                    </span>
                    <span className="font-medium">{figure.label}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/company/case-studies/#training-outcomes"
                className="mt-auto inline-flex items-center gap-2 pt-6 text-[15px] font-medium text-brand hover:text-ink"
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
