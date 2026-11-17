'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView, type TargetAndTransition } from 'motion/react';
import { useReducedMotionSafe } from '@/components/motion/primitives';

/*
 * Small "scenes": little animations inside cards that play once when the card scrolls into view and again on
 * hover. A scene is keyed by its run count, so each play remounts it and animates from the start; before the
 * first play it rests at its start state; with reduced motion it shows the finished state straight away.
 */

/** What a scene needs: how many times it has played (0 = not yet) and whether to skip motion. */
export type SceneProps = { run: number; reduce: boolean };

/** Start and end states for a scene's animated parts (see the note above). */
export function useScene({ run, reduce }: SceneProps) {
  return {
    from: (start: TargetAndTransition) => (reduce ? false : start),
    to: (end: TargetAndTransition) => (reduce || run > 0 ? end : undefined),
  } as const;
}

/** Drives a scene: `ref` goes on the scene's frame; `replay` on the card's hover. */
export function useSceneRun(amount = 0.6) {
  const ref = useRef<HTMLDivElement>(null);
  const seen = useInView(ref, { once: true, amount });
  const reduce = useReducedMotionSafe();
  const [run, setRun] = useState(0);
  useEffect(() => {
    if (seen) setRun((count) => (count === 0 ? 1 : count));
  }, [seen]);
  const replay = () => setRun((count) => count + 1);
  return { ref, run, reduce, replay } as const;
}

/** Typewriter easing: jumps one character at a time. */
export const typing =
  (characters: number) =>
  (t: number): number =>
    Math.round(t * characters) / characters;
