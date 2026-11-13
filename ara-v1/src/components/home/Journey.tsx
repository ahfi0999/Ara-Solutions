'use client';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { journey } from '@/content/home';
import { Container, SectionHeading } from '@/components/ui/Section';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';

/** Learner journey with a progress line that fills as you scroll. */
export function Journey() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="journey" className="py-20 sm:py-28">
      <Container className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                From your first call to <em>your first offer.</em>
              </>
            }
            intro="A clear, supported path. You always know what comes next and who to ask."
          />
          <EnquiryButton className="mt-8" arrow>
            Start with step one
          </EnquiryButton>
        </div>

        <ol ref={listRef} className="relative">
          <span aria-hidden className="absolute bottom-6 left-[19px] top-6 w-px bg-line" />
          <motion.span
            aria-hidden
            style={{ scaleY: reduce ? 1 : progress }}
            className="absolute bottom-6 left-[19px] top-6 w-px origin-top bg-brand"
          />
          {journey.map((step, index) => (
            <li key={step.title} className="relative flex gap-6 pb-12 last:pb-0">
              <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-paper font-mono text-sm font-medium text-text shadow-soft">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="pt-1.5">
                <h3 className="text-xl font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-muted">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
