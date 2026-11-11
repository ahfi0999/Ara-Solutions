'use client';

import { motion } from 'framer-motion';

/** Fades each page in when the route changes (a template re-mounts on every navigation). */
export default function Template({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2, ease: 'easeInOut' }}
      className="w-full flex-1"
    >
      {children}
    </motion.div>
  );
}
