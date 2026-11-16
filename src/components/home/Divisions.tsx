import { Building2, GraduationCap } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { Spotlight } from '@/components/motion/primitives';

/**
 * "Choose your path": each card points to its own section further down the home page
 * (the service and program links live there, so they are not repeated here).
 */
const DIVISIONS = [
  {
    icon: Building2,
    eyebrow: 'For businesses',
    title: 'Staffing',
    text: 'Find the right people for your team. Contract staffing, permanent hiring, recruitment process outsourcing and international consulting.',
    cta: { label: 'Explore staffing services', href: '#services' },
    dark: true,
  },
  {
    icon: GraduationCap,
    eyebrow: 'For professionals',
    title: 'Training & Placement',
    text: 'Build a technology career with industry-focused training, real projects, interview preparation and placement assistance.',
    cta: { label: 'Explore training programs', href: '#programs' },
    dark: false,
  },
];

/** The two sides of ARA Solutions, side by side. */
export function Divisions() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          align="center"
          eyebrow="What we do"
          title={
            <>
              Two divisions. <em>One goal:</em> the right person in the right role.
            </>
          }
          intro="Whether you're hiring skilled professionals or building your own tech career, we've got you covered."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {DIVISIONS.map((division, index) => (
            <Reveal key={division.title} delay={index * 0.08} className="h-full">
              <Spotlight
                color={division.dark ? 'rgb(255 255 255 / 0.10)' : 'rgb(229 35 45 / 0.06)'}
                className={
                  division.dark
                    ? 'relative flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-lift sm:p-10'
                    : 'relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-paper p-8 shadow-soft sm:p-10'
                }
              >
                {division.dark && <div aria-hidden className="grid-lines absolute inset-0 opacity-60" />}
                <div className="relative flex items-center gap-4">
                  <span
                    className={
                      division.dark
                        ? 'flex size-12 items-center justify-center rounded-2xl bg-white/10 text-white'
                        : 'flex size-12 items-center justify-center rounded-2xl bg-brand text-white'
                    }
                  >
                    <division.icon aria-hidden className="size-6" />
                  </span>
                  <p
                    className={`font-mono text-[12px] uppercase tracking-[0.18em] ${division.dark ? 'text-brand-300' : 'text-brand'}`}
                  >
                    {division.eyebrow}
                  </p>
                </div>
                <h3 className="relative mt-8 text-3xl font-semibold tracking-tight">{division.title}</h3>
                <p
                  className={`relative mt-3 text-lg leading-relaxed ${division.dark ? 'text-white/65' : 'text-muted'}`}
                >
                  {division.text}
                </p>
                <div className="relative mt-auto pt-10">
                  <ButtonLink href={division.cta.href} variant={division.dark ? 'light' : 'primary'} arrow>
                    {division.cta.label}
                  </ButtonLink>
                </div>
              </Spotlight>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
