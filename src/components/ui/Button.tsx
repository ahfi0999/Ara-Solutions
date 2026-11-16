import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ComponentProps, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'light' | 'dark' | 'ghost-light' | 'ghost-dark';
type Size = 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-tight transition-all duration-200 disabled:pointer-events-none disabled:opacity-60';

const variants: Record<Variant, string> = {
  primary:
    'btn-shine bg-brand text-white shadow-[0_8px_24px_-8px_rgb(229_35_45/0.7)] hover:bg-brand-600 hover:shadow-[0_12px_32px_-8px_rgb(229_35_45/0.8)]',
  light: 'bg-white text-ink hover:bg-white/90',
  dark: 'bg-ink text-white hover:bg-navy',
  'ghost-light':
    'border border-white/20 bg-white/5 text-white backdrop-blur hover:border-white/40 hover:bg-white/10',
  'ghost-dark': 'border border-line bg-paper text-text hover:border-text/30',
};

const sizes: Record<Size, string> = {
  md: 'h-11 px-5 text-[15px]',
  lg: 'h-13 px-7 text-base',
};

type Common = { variant?: Variant; size?: Size; arrow?: boolean; className?: string; children: ReactNode };

function Content({ children, arrow }: { children: ReactNode; arrow?: boolean }) {
  return (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );
}

/** Link styled as a button. External / tel / mailto / WhatsApp links render a plain <a>. */
export function ButtonLink({
  href,
  variant = 'primary',
  size = 'md',
  arrow,
  className,
  children,
  ...props
}: Common & { href: string } & Omit<ComponentProps<'a'>, 'href' | 'className' | 'children'>) {
  const classes = cn(base, variants[variant], sizes[size], className);
  // External links, phone/email and in-page "#section" links use a plain <a>
  // (in-page links are then scrolled smoothly by the site's smooth-scroll).
  const external = /^(https?:|tel:|mailto:|#)/.test(href);
  if (external) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...props}
      >
        <Content arrow={arrow}>{children}</Content>
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...props}>
      <Content arrow={arrow}>{children}</Content>
    </Link>
  );
}

export function Button({
  variant = 'primary',
  size = 'md',
  arrow,
  className,
  children,
  type = 'button',
  ...props
}: Common & Omit<ComponentProps<'button'>, 'className' | 'children'>) {
  return (
    <button type={type} className={cn(base, variants[variant], sizes[size], className)} {...props}>
      <Content arrow={arrow}>{children}</Content>
    </button>
  );
}
