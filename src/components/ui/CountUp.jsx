'use client';

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

// useLayoutEffect warns during server rendering; fall back to useEffect there.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

/** Splits "1,000+" into { prefix: '', number: 1000, suffix: '+', decimals: 0 }. */
function parse(value) {
  const match = String(value).match(/^([^\d]*)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) return null;
  const [, prefix, digits, suffix] = match;
  const decimals = digits.includes('.') ? digits.split('.')[1].length : 0;
  return {
    prefix,
    number: Number(digits.replace(/,/g, '')),
    suffix,
    decimals,
    grouped: digits.includes(','),
  };
}

/**
 * Counts up to `value` (e.g. "1,000+", "98%") when it scrolls into view.
 * The server HTML contains the final value, so search engines and no-JS visitors see the real number.
 */
export default function CountUp({ value, duration = 1600, className = '' }) {
  const parsed = parse(value);
  const ref = useRef(null);
  const [current, setCurrent] = useState(parsed ? parsed.number : null);

  useIsomorphicLayoutEffect(() => {
    if (!parsed) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    setCurrent(0); // reset before first paint, then animate once visible
    let frame;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - (1 - progress) ** 3;
          setCurrent(parsed.number * eased);
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    observer.observe(ref.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration]);

  if (!parsed) return <span className={className}>{value}</span>;
  const shown = current.toLocaleString('en-US', {
    minimumFractionDigits: parsed.decimals,
    maximumFractionDigits: parsed.decimals,
    useGrouping: parsed.grouped,
  });
  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {parsed.prefix}
      {shown}
      {parsed.suffix}
    </span>
  );
}
