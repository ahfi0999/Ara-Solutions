import { Building2, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { Spotlight } from '@/components/motion/primitives';

/**
 * "Choose your path": each card points to its own section further down the home page
 * (the service and program links live there, so they are not repeated here).
 * Both cards carry the same weight: each shows its own photo under the same dark overlay,
 * and keeps its colour in the icon and button (navy for businesses, red for professionals).
 */
const DIVISIONS = [
  {
    key: 'staffing',
    icon: Building2,
    eyebrow: 'For businesses',
    title: 'Staffing',
    text: 'Find the right people for your team. Contract staffing, permanent hiring, recruitment process outsourcing and international consulting.',
    cta: { label: 'Explore staffing services', href: '#services' },
    photo: '/images/services/fulltime-staffing.jpg',
  },
  {
    key: 'training',
    icon: GraduationCap,
    eyebrow: 'For professionals',
    title: 'Training & Placement',
    text: 'Build a technology career with industry-focused training, real projects, interview preparation and placement assistance.',
    cta: { label: 'Explore training programs', href: '#programs' },
    photo: '/videos/learn-classroom.jpg',
  },
] as const;

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
          {DIVISIONS.map((division, index) => {
            const isTraining = division.key === 'training';
            return (
              <Reveal key={division.key} delay={index * 0.08} className="h-full">
                <Spotlight
                  color="rgb(255 255 255 / 0.10)"
                  className="relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-ink p-8 text-white shadow-lift sm:p-10"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element -- static card photo */}
                  <img
                    src={division.photo}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 -z-10 size-full object-cover transition-transform duration-700 ease-out group-hover/spot:scale-105"
                  />
                  {/* The same dark overlay on both, lighter towards the bottom right where there is no text. */}
                  <div
                    aria-hidden
                    className="absolute inset-0 -z-10 bg-gradient-to-br from-ink/95 via-ink/85 to-ink/55"
                  />
                  <div className="relative flex items-center gap-4">
                    <span
                      className={cn(
                        'flex size-12 items-center justify-center rounded-2xl text-white',
                        isTraining ? 'bg-brand' : 'bg-white/10 backdrop-blur',
                      )}
                    >
                      <division.icon aria-hidden className="size-6" />
                    </span>
                    <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand-300">
                      {division.eyebrow}
                    </p>
                  </div>
                  <h3 className="relative mt-8 text-3xl font-semibold tracking-tight">{division.title}</h3>
                  <p className="relative mt-3 text-lg leading-relaxed text-white/70">{division.text}</p>
                  <div className="relative mt-auto pt-10">
                    <ButtonLink href={division.cta.href} variant={isTraining ? 'primary' : 'light'} arrow>
                      {division.cta.label}
                    </ButtonLink>
                  </div>
                </Spotlight>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
