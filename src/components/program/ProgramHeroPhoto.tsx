'use client';

import { motion } from 'motion/react';
import { useReducedMotionSafe } from '@/components/motion/primitives';

/**
 * The program's photo behind its top banner, under a navy overlay (like the home page's video hero).
 * It drifts in very slowly so the banner never feels static; visitors who prefer reduced motion get a still photo.
 * The photos are about 1,000px wide, so a slight blur keeps them soft rather than pixelated on large screens.
 */
export function ProgramHeroPhoto({ src }: { src: string }) {
  const reduce = useReducedMotionSafe();
  return (
    <div aria-hidden className="absolute inset-0 -z-20 overflow-hidden">
      <motion.img
        src={src}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover blur-[2px]"
        initial={{ scale: 1.06 }}
        animate={reduce ? undefined : { scale: 1.16 }}
        transition={{ duration: 26, ease: 'linear', repeat: Infinity, repeatType: 'reverse' }}
      />
      {/* Darker on the left, where the text is; the photo shows more on the right. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/85 to-ink/65" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-ink/80" />
    </div>
  );
}
