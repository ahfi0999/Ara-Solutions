'use client';

import { motion, useReducedMotion } from 'motion/react';
import { useEffect, useState } from 'react';

/** True until the first page a visitor opens has been shown. */
let firstPage = true;

/**
 * Page transition: when you move to another page, it fades and rises in. The first page a visitor opens is
 * shown at once, never hidden: starting it invisible until the scripts load left phones on a blank screen for
 * seconds and made Google count the page as slow. The wrapper stays the same element either way, so nothing
 * is rebuilt after the page loads.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const prefersReduced = useReducedMotion();
  const [fade] = useState(() => !firstPage);
  useEffect(() => {
    firstPage = false;
  }, []);
  return (
    <motion.div
      initial={fade && !prefersReduced ? { opacity: 0, y: 12 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
