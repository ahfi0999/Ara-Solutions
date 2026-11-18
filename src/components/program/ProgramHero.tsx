import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { Program } from '@/content/programs';
import { accent } from '@/lib/accent';
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Section';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ProgramVisual } from '@/components/visuals/ProgramVisual';
import { SplitWords, Tilt } from '@/components/motion/primitives';
import { ProgramHeroPhoto } from '@/components/program/ProgramHeroPhoto';

export function ProgramHero({ program }: { program: Program }) {
  const a = accent[program.accent];
  return (
    <section className="aurora relative isolate overflow-hidden pb-16 pt-24 text-white sm:pb-24 sm:pt-[clamp(6.5rem,14vh,9rem)] [@media(max-width:639px)_and_(max-height:600px)]:pt-[5.25rem]">
      {program.image && <ProgramHeroPhoto src={program.image} />}
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <div
        aria-hidden
        className={cn('absolute -right-32 top-10 -z-10 size-[480px] rounded-full blur-[120px]', a.glow)}
      />
      <Container>
        <nav aria-label="Breadcrumb" className="fade-up [@media(max-width:639px)_and_(max-height:600px)]:hidden">
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
              {program.shortName}
            </li>
          </ol>
        </nav>

        <div className="mt-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] [&>*]:min-w-0 [@media(max-height:800px)]:mt-6 [@media(max-width:639px)_and_(max-height:600px)]:mt-0">
          <div>
            <div className="fade-up flex flex-wrap items-center gap-3 [animation-delay:60ms] [@media(max-width:639px)_and_(max-height:600px)]:hidden">
              {program.logo && (
                <span className="inline-flex h-9 items-center rounded-full bg-white px-4 shadow-soft">
                  {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logo */}
                  <img src={program.logo} alt={`${program.shortName} logo`} className="h-5 w-auto" />
                </span>
              )}
              <p className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-wider text-white/75 backdrop-blur">
                <span className={cn('size-1.5 rounded-full', a.dot)} />
                {program.family}
              </p>
            </div>
            <h1 className="mt-6 text-balance text-[length:clamp(1.85rem,8.6vw,2.25rem)] font-semibold leading-[1.04] tracking-[-0.04em] sm:text-[length:clamp(2.6rem,min(6vw,7.6vh),3.75rem)] [@media(max-height:800px)]:mt-4 [@media(max-width:639px)_and_(max-height:600px)]:mt-0">
              <SplitWords delay={0.15} stagger={0.06}>
                {program.name}
              </SplitWords>
            </h1>
            <p className="fade-up mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/65 [animation-delay:180ms] sm:text-lg [@media(max-height:800px)]:mt-4">
              {program.summary}
            </p>
            <div className="fade-up mt-9 flex flex-wrap gap-3 [animation-delay:240ms] [@media(max-height:800px)]:mt-6">
              <EnquiryButton
                size="lg"
                arrow
                interest={program.slug}
                title={`Talk to an advisor about ${program.shortName}`}
              >
                Talk to an advisor
              </EnquiryButton>
              <EnquiryButton
                size="lg"
                variant="ghost-light"
                interest={program.slug}
                title={`Get the detailed ${program.shortName} syllabus`}
              >
                Get the syllabus
              </EnquiryButton>
            </div>
            <ul className="fade-up mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-white/70 [animation-delay:300ms]">
              {program.highlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className={cn('size-1.5 rounded-full', a.dot)} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="fade-up [animation-delay:200ms]">
            <Tilt max={5}>
              <div className="animate-float">
                <ProgramVisual program={program} />
              </div>
            </Tilt>
            <p className="mt-3 text-center font-mono text-[11px] text-white/35">
              Illustration of the kind of work you&apos;ll do
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
