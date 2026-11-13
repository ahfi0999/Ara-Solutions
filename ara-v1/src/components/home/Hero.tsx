'use client';

import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { stats } from '@/content/site';
import { ButtonLink } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { CountUp, EASE, Magnetic, SplitWords, useReducedMotionSafe } from '@/components/motion/primitives';
import { TalentOrbit } from '@/components/visuals/TalentOrbit';
import { HeroNetwork } from '@/components/visuals/HeroNetwork';
import { MediaBackground } from '@/components/motion/MediaBackground';

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 18, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, ease: EASE, delay },
});

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotionSafe();
  const mx = useMotionValue(-1000);
  const my = useMotionValue(-1000);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${mx}px ${my}px, rgb(255 255 255 / 0.07), transparent 60%)`;

  // Hero content drifts up and fades as you scroll past it.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const orbitY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={ref}
      className="relative isolate overflow-hidden bg-ink pb-16 pt-32 text-white sm:pb-20 sm:pt-40"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(event.clientX - rect.left);
        my.set(event.clientY - rect.top);
      }}
    >
      <MediaBackground
        video="/videos/hero-team.mp4"
        poster="/videos/hero-team.jpg"
        eager
        control
        overlayClassName="bg-gradient-to-r from-ink/90 via-ink/75 to-ink/55"
      />
      {/* Background: drifting aurora, moving talent network, cursor light */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="blob-a absolute -right-[10%] -top-[20%] size-[70vw] max-w-[900px] rounded-full bg-[radial-gradient(circle,rgb(46_58_190/0.55),transparent_65%)] blur-3xl" />
        <div className="blob-b absolute -bottom-[30%] -left-[15%] size-[60vw] max-w-[800px] rounded-full bg-[radial-gradient(circle,rgb(229_35_45/0.35),transparent_65%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_40%,rgb(31_38_128/0.55),transparent)]" />
        <div className="grid-lines absolute inset-0 opacity-50" />
        <HeroNetwork className="absolute inset-0 h-full w-full [mask-image:linear-gradient(to_right,rgb(0_0_0/0.5),black_55%)]" />
        {!reduce && <motion.div className="absolute inset-0" style={{ background: spotlight }} />}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink" />
      </div>

      <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 [&>*]:min-w-0">
        <motion.div style={reduce ? undefined : { y: contentY, opacity: contentOpacity }}>
          <motion.p
            {...fadeUp(0)}
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] py-1.5 pl-1.5 pr-4 text-[13px] text-white/75 backdrop-blur"
          >
            <span className="relative flex size-5 items-center justify-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-brand/40 [animation-duration:2.4s]" />
              <span className="size-2 rounded-full bg-brand" />
            </span>
            IT staffing &amp; training · Hyderabad
          </motion.p>

          <h1 className="mt-7 text-balance text-[2.4rem] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[4.1rem]">
            <SplitWords delay={0.15}>Empowering businesses through talent.</SplitWords>{' '}
            <SplitWords
              delay={0.45}
              className="font-serif font-normal italic tracking-[-0.02em]"
              wordClassName="text-gradient pr-[0.06em]"
            >
              Transforming careers
            </SplitWords>{' '}
            <SplitWords delay={0.6}>through technology.</SplitWords>
          </h1>

          <motion.p {...fadeUp(0.75)} className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/65">
            IT and non-IT staffing, recruitment and consulting for growing companies, and industry-focused training
            and placement for people building a tech career.
          </motion.p>

          <motion.div {...fadeUp(0.9)} className="mt-9 flex flex-wrap gap-3">
            <Magnetic>
              <EnquiryButton size="lg" arrow interest="hiring" title="Tell us about the talent you need">
                Hire talent
              </EnquiryButton>
            </Magnetic>
            <Magnetic>
              <ButtonLink href="/training-placement/" variant="ghost-light" size="lg">
                Explore training
              </ButtonLink>
            </Magnetic>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -8 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
          style={reduce ? undefined : { y: orbitY }}
        >
          <TalentOrbit />
        </motion.div>
      </Container>

      <Container className="mt-16 sm:mt-20">
        <motion.dl
          {...fadeUp(1.05)}
          className="grid grid-cols-1 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur sm:grid-cols-3 sm:divide-x sm:divide-y-0"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex items-baseline gap-3 px-6 py-5 sm:flex-col sm:gap-1 sm:px-8 sm:py-6">
              <dd className="order-1 text-3xl font-semibold tracking-tight sm:text-4xl">
                <CountUp value={stat.value} suffix={stat.suffix} />
              </dd>
              <dt className="order-2 text-sm text-white/55">{stat.label}</dt>
            </div>
          ))}
        </motion.dl>
      </Container>
    </section>
  );
}
