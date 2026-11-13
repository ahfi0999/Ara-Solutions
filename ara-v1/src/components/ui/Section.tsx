import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { HeadingReveal } from '@/components/motion/HeadingReveal';

export function Container({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cn('mx-auto w-full max-w-7xl px-5 sm:px-8', className)}>{children}</div>;
}

/** Small uppercase label above section titles. */
export function Eyebrow({
  children,
  tone = 'light',
  className,
}: {
  children: ReactNode;
  tone?: 'light' | 'dark';
  className?: string;
}) {
  return (
    <p
      className={cn(
        'inline-flex items-center gap-2 font-mono text-[12px] font-medium uppercase tracking-[0.18em]',
        tone === 'dark' ? 'text-brand-300' : 'text-brand',
        className,
      )}
    >
      <span aria-hidden className={cn('h-px w-6', tone === 'dark' ? 'bg-brand-300/70' : 'bg-brand/70')} />
      {children}
    </p>
  );
}

/**
 * Section heading. Wrap words in <em> inside `title` to set them in the italic serif accent,
 * e.g. title={<>Learn the skills <em>companies hire for</em></>}.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  tone = 'light',
  className,
  as: Tag = 'h2',
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  intro?: ReactNode;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  as?: 'h1' | 'h2';
}) {
  const dark = tone === 'dark';
  return (
    <HeadingReveal className={cn(align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl', className)}>
      {[
        eyebrow ? (
          <Eyebrow key="eyebrow" tone={tone} className={align === 'center' ? 'justify-center' : undefined}>
            {eyebrow}
          </Eyebrow>
        ) : null,
        <Tag
          key="title"
          className={cn(
            'mt-4 text-balance text-[2rem] font-semibold leading-[1.08] tracking-[-0.035em] sm:text-5xl',
            '[&_em]:font-serif [&_em]:font-normal [&_em]:italic [&_em]:tracking-[-0.01em]',
            dark ? 'text-white [&_em]:text-brand-300' : 'text-text [&_em]:text-brand',
          )}
        >
          {title}
        </Tag>,
        intro ? (
          <p
            key="intro"
            className={cn('mt-5 text-pretty text-lg leading-relaxed', dark ? 'text-white/65' : 'text-muted')}
          >
            {intro}
          </p>
        ) : null,
      ]}
    </HeadingReveal>
  );
}
