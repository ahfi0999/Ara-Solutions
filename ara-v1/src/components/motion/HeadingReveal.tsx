'use client';

import { motion } from 'motion/react';
import type { ReactNode } from 'react';
import { EASE, useReducedMotionSafe } from './primitives';

/** Section heading block: eyebrow, title and intro rise out of a mask one after another. */
export function HeadingReveal({ children, className }: { children: ReactNode[]; className?: string }) {
  const reduce = useReducedMotionSafe();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <div className={className}>
      {children.filter(Boolean).map((child, index) => (
        <div key={index} className="overflow-hidden pb-1">
          <motion.div
            initial={{ y: '60%', opacity: 0, filter: 'blur(6px)' }}
            whileInView={{ y: '0%', opacity: 1, filter: 'blur(0px)' }}
            viewport={{ once: true, margin: '0px 0px -12% 0px' }}
            transition={{ duration: 0.9, ease: EASE, delay: index * 0.1 }}
          >
            {child}
          </motion.div>
        </div>
      ))}
    </div>
  );
}
