import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const BASE =
  'group inline-flex items-center justify-center gap-2 rounded-lg font-display text-sm font-semibold transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand';

const VARIANTS = {
  primary: 'bg-brand text-white hover:bg-brand-dark',
  navy: 'bg-navy text-white hover:bg-navy-soft',
  outline: 'border border-line bg-white text-ink hover:border-navy hover:text-navy',
  'outline-light': 'border border-white/30 text-white hover:border-white hover:bg-white/10',
};

const SIZES = {
  md: 'h-11 px-5',
  lg: 'h-12 px-6',
};

/**
 * Site-wide button. Renders a real link (good for SEO and accessibility)
 * when `href` is given, otherwise a <button>.
 */
export default function Button({
  href,
  variant = 'primary',
  size = 'md',
  arrow = false,
  className = '',
  children,
  ...props
}) {
  const classes = `${BASE} ${VARIANTS[variant]} ${SIZES[size]} ${className}`;
  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          aria-hidden="true"
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
        />
      )}
    </>
  );
  if (href) {
    const external = /^(https?:|mailto:|tel:)/.test(href);
    return external ? (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    ) : (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }
  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
}
