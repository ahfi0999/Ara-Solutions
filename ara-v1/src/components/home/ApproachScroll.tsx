'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { approachSteps } from '@/content/company';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { EASE, useMediaQuery } from '@/components/motion/primitives';

/**
 * "Discover · Deliver · Support" as a pinned scroll story: the section stays in view while
 * each step becomes active in turn. Falls back to a simple list for reduced motion.
 */
export function ApproachScroll() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const desktop = useMediaQuery('(min-width: 1024px) and (min-height: 700px)');
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useMotionValueEvent(scrollYProgress, 'change', (value) => {
    setActive(Math.min(approachSteps.length - 1, Math.floor(value * approachSteps.length)));
  });

  const heading = (
    <SectionHeading
      eyebrow="Our approach"
      title={
        <>
          Three steps. <em>No shortcuts.</em>
        </>
      }
      intro="A structured process that respects your timelines without cutting corners on qualification."
    />
  );

  if (reduce || !desktop) {
    return (
      <section ref={ref} className="py-20 sm:py-28">
        <Container>
          {heading}
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {approachSteps.map((step, index) => (
              <li key={step.title} className="border-t-2 border-text pt-6">
                <span className="font-mono text-sm text-brand">{String(index + 1).padStart(2, '0')}</span>
                <h3 className="mt-3 text-2xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-muted">{step.text}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <Container className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16 [&>*]:min-w-0">
          <div>
            {heading}
            <div className="mt-10 flex items-end gap-6">
              <div className="relative h-[7.5rem] w-[9rem] overflow-hidden sm:h-[10rem] sm:w-[12rem]">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={active}
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: '0%', opacity: 1 }}
                    exit={{ y: '-100%', opacity: 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    className="absolute inset-0 font-serif text-[7.5rem] italic leading-none text-brand sm:text-[10rem]"
                  >
                    {String(active + 1).padStart(2, '0')}
                  </motion.span>
                </AnimatePresence>
              </div>
              <ButtonLink href="/company/approach/" variant="ghost-dark" className="mb-4" arrow>
                See our approach
              </ButtonLink>
            </div>
          </div>

          <div className="relative pl-8">
            <span aria-hidden className="absolute bottom-0 left-0 top-0 w-px bg-line" />
            <motion.span
              aria-hidden
              className="absolute left-0 top-0 w-px origin-top bg-brand"
              style={{ scaleY: progress, height: '100%' }}
            />
            <ol className="space-y-5">
              {approachSteps.map((step, index) => {
                const isActive = index === active;
                return (
                  <motion.li
                    key={step.title}
                    animate={{ opacity: isActive ? 1 : 0.35, x: isActive ? 0 : -6 }}
                    transition={{ duration: 0.5, ease: EASE }}
                    className={cn(
                      'rounded-3xl border p-6 transition-colors duration-500 sm:p-8',
                      isActive ? 'border-line bg-paper shadow-lift' : 'border-transparent',
                    )}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">{step.title}</h3>
                      <span className="rounded-full bg-canvas px-3 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                        {step.tag}
                      </span>
                    </div>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{step.text}</p>
                  </motion.li>
                );
              })}
            </ol>
          </div>
        </Container>
      </div>
    </section>
  );
}
