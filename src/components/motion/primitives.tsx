'use client';

/**
 * Motion toolkit used across the site. Every component degrades to static content
 * when the visitor prefers reduced motion.
 */
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion as usePrefersReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type HTMLMotionProps,
} from 'motion/react';
import { Children, useEffect, useRef, useState, type ReactNode } from 'react';
import { cn } from '@/lib/cn';

export const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * The visitor's reduced-motion preference, safe for server rendering. The server cannot know it,
 * so the first browser render also reports `false` (matching the server HTML, so React can hydrate
 * without a mismatch); the real preference applies right after the page mounts.
 */
export function useReducedMotionSafe() {
  const prefers = usePrefersReducedMotion();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted ? Boolean(prefers) : false;
}

/** Headline that reveals word by word: each word rises out of a mask and sharpens from a blur. */
export function SplitWords({
  children,
  className,
  wordClassName,
  delay = 0,
  stagger = 0.045,
  inView = false,
}: {
  children: string;
  className?: string;
  /** Classes for each word (e.g. gradient text, which must sit on the animated element). */
  wordClassName?: string;
  delay?: number;
  stagger?: number;
  /** Animate when scrolled into view (default: on mount, for above-the-fold text). */
  inView?: boolean;
}) {
  const reduce = useReducedMotionSafe();
  const ref = useRef<HTMLSpanElement>(null);
  const visible = useInView(ref, { once: true, margin: '0px 0px -12% 0px' });
  const show = !inView || visible;
  const words = children.split(' ');
  if (reduce) return <span className={cn(className, wordClassName)}>{children}</span>;
  return (
    <span ref={ref} className={className} aria-label={children}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} aria-hidden className="inline-block overflow-hidden pb-[0.12em] align-top">
          <motion.span
            className={cn('inline-block will-change-transform', wordClassName)}
            initial={{ y: '105%', opacity: 0, filter: 'blur(8px)' }}
            animate={show ? { y: '0%', opacity: 1, filter: 'blur(0px)' } : undefined}
            transition={{ duration: 0.9, ease: EASE, delay: delay + index * stagger }}
          >
            {word}
            {index < words.length - 1 ? ' ' : ''}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Fade + rise + un-blur when scrolled into view. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'li' | 'section' | 'article' | 'tr';
}) {
  const reduce = useReducedMotionSafe();
  const Component = motion[as];
  if (reduce) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, ease: EASE, delay }}
    >
      {children}
    </Component>
  );
}

/** Reveals each child in turn. Wrap a list of cards with it. */
export function Stagger({
  children,
  className,
  gap = 0.08,
  itemClassName,
}: {
  children: ReactNode;
  className?: string;
  gap?: number;
  itemClassName?: string;
}) {
  return (
    <div className={className}>
      {Children.toArray(children).map((child, index) => (
        <Reveal key={index} delay={(index % 6) * gap} className={itemClassName}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/** Number that counts up when it scrolls into view. Server HTML shows the final value. */
export function CountUp({ value, suffix = '', className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });
  const reduce = useReducedMotionSafe();
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduce) return;
    setDisplay(0);
  }, [reduce]);

  useEffect(() => {
    if (!inView || reduce) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: EASE,
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduce, value]);

  return (
    <span ref={ref} className={cn('tabular-nums', className)}>
      {display.toLocaleString('en-IN')}
      {suffix}
    </span>
  );
}

/** Card with a soft light that follows the cursor. */
export function Spotlight({
  children,
  className,
  color = 'rgb(255 255 255 / 0.10)',
  size = 380,
  ...props
}: { children: ReactNode; className?: string; color?: string; size?: number } & Omit<HTMLMotionProps<'div'>, 'children'>) {
  const x = useMotionValue(-1000);
  const y = useMotionValue(-1000);
  const background = useMotionTemplate`radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 70%)`;
  return (
    <motion.div
      {...props}
      className={cn('group/spot relative', className)}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left);
        y.set(event.clientY - rect.top);
      }}
      onPointerLeave={() => {
        x.set(-1000);
        y.set(-1000);
      }}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{ background }}
      />
      {children}
    </motion.div>
  );
}

/** Subtle 3D tilt towards the cursor. */
export function Tilt({ children, className, max = 6 }: { children: ReactNode; className?: string; max?: number }) {
  const reduce = useReducedMotionSafe();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        px.set((event.clientX - rect.left) / rect.width);
        py.set((event.clientY - rect.top) / rect.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
    >
      {children}
    </motion.div>
  );
}

/** Element drifts slightly towards the cursor (for primary buttons). */
export function Magnetic({ children, className, strength = 0.25 }: { children: ReactNode; className?: string; strength?: number }) {
  const reduce = useReducedMotionSafe();
  const x = useSpring(0, { stiffness: 250, damping: 18 });
  const y = useSpring(0, { stiffness: 250, damping: 18 });
  if (reduce) return <span className={cn('inline-flex', className)}>{children}</span>;
  return (
    <motion.span
      className={cn('inline-flex', className)}
      style={{ x, y }}
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set((event.clientX - rect.left - rect.width / 2) * strength);
        y.set((event.clientY - rect.top - rect.height / 2) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}

/** Moves its content vertically at a different speed than the page (parallax). */
export function Parallax({ children, className, offset = 60 }: { children: ReactNode; className?: string; offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotionSafe();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);
  return (
    <motion.div ref={ref} className={className} style={reduce ? undefined : { y }}>
      {children}
    </motion.div>
  );
}

/** Thin brand-coloured bar at the top of the window showing scroll progress. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-brand via-brand-300 to-brand"
      style={{ scaleX }}
    />
  );
}

/** True when the media query matches (false during server render). */
export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const list = window.matchMedia(query);
    const update = () => setMatches(list.matches);
    update();
    list.addEventListener('change', update);
    return () => list.removeEventListener('change', update);
  }, [query]);
  return matches;
}

/** Animates the leading number of a figure such as "50+", "40%", "2x" or "6 Months". */
export function Figure({ value, className }: { value: string; className?: string }) {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <span className={className}>{value}</span>;
  return <CountUp value={Number(match[1])} suffix={match[2]} className={className} />;
}
