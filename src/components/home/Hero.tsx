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
import { cn } from '@/lib/cn';

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
      className="relative isolate overflow-hidden bg-ink pb-16 pt-24 text-white [@media(max-width:639px)_and_(max-height:600px)]:pt-[5.25rem] sm:pb-20 sm:pt-[clamp(6.5rem,15vh,10rem)]"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        mx.set(event.clientX - rect.left);
        my.set(event.clientY - rect.top);
      }}
    >
      <MediaBackground
        video="/videos/hero-team.mp4"
        mobileVideo="/videos/hero-team-mobile.mp4"
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
          <h1 className="text-balance text-[length:clamp(1.95rem,9.4vw,2.4rem)] font-semibold leading-[1.04] tracking-[-0.045em] sm:text-6xl lg:text-[length:clamp(2.6rem,min(4.2vw,7.4vh),4.1rem)] [@media(max-width:639px)_and_(max-height:600px)]:text-[length:clamp(1.7rem,8.4vw,2.05rem)]">
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

          <motion.p
            {...fadeUp(0.75)}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-white/65 sm:text-lg [@media(max-height:760px)]:mt-4"
          >
            IT and non-IT staffing, recruitment and consulting for growing companies, and industry-focused
            training and placement for people building a tech career.
          </motion.p>

          <motion.div {...fadeUp(0.9)} className="mt-9 flex flex-wrap gap-3 [@media(max-height:760px)]:mt-6">
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
          className="grid grid-cols-2 rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur lg:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={cn(
                'flex flex-col gap-1 border-white/10 px-5 py-5 sm:px-8 sm:py-6',
                index % 2 === 0 && 'border-r',
                index < 2 && 'border-b lg:border-b-0',
                index === 1 && 'lg:border-r',
              )}
            >
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
