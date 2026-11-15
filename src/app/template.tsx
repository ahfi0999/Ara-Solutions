'use client';

import { motion } from 'motion/react';
import { useReducedMotionSafe } from '@/components/motion/primitives';

/** Page transition: each page fades and rises in when you navigate. */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotionSafe();
  if (reduce) return children;
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
