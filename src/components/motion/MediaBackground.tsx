'use client';

import { useEffect, useRef, useState } from 'react';
import { Pause, Play } from 'lucide-react';
import { cn } from '@/lib/cn';

/**
 * Looping, muted background video for a dark section, under a navy overlay so text stays readable.
 * - The poster (a still frame) shows first, so the section is never empty.
 * - The video only loads and plays while the section is on screen (`eager` starts loading at once, for the hero).
 * - Phones play a light version (`mobileVideo`, about 1 MB); larger screens play the HD version.
 * - Visitors who prefer reduced motion get the still image only.
 * - An optional pause button (`control`) lets visitors stop the motion.
 * Place it as the first child of a `relative isolate` section.
 */
export function MediaBackground({
  video,
  mobileVideo,
  poster,
  eager = false,
  control = false,
  overlayClassName = 'bg-ink/75',
  className,
}: {
  video: string;
  /** Light version for phones; falls back to `video` when not given. */
  mobileVideo?: string;
  poster: string;
  eager?: boolean;
  control?: boolean;
  overlayClassName?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);
  const [source, setSource] = useState(video);
  const [paused, setPaused] = useState(false);
  const pausedRef = useRef(false);

  // Decide once on the client whether this visitor should get video at all.
  useEffect(() => {
    const large = window.matchMedia('(min-width: 768px)').matches;
    setSource(large ? video : (mobileVideo ?? video));
    setEnabled(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, [video, mobileVideo]);

  // Load and play only while on screen.
  useEffect(() => {
    const element = ref.current;
    if (!enabled || !element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!element.src) {
            // iOS and Android only autoplay videos that are muted and inline.
            element.muted = true;
            element.setAttribute('muted', '');
            element.setAttribute('playsinline', '');
            element.src = source;
          }
          if (!pausedRef.current) element.play().catch(() => {});
        } else {
          element.pause();
        }
      },
      { rootMargin: eager ? '400px 0px' : '200px 0px' },
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [enabled, source, eager]);

  const toggle = () => {
    const element = ref.current;
    if (!element) return;
    pausedRef.current = !pausedRef.current;
    setPaused(pausedRef.current);
    if (pausedRef.current) element.pause();
    else element.play().catch(() => {});
  };

  return (
    <>
      <div aria-hidden className={cn('absolute inset-0 -z-20 overflow-hidden', className)}>
        {/* eslint-disable-next-line @next/next/no-img-element -- poster behind the video */}
        <img src={poster} alt="" className="absolute inset-0 size-full object-cover" fetchPriority={eager ? 'high' : 'auto'} />
        {enabled && (
          <video
            ref={ref}
            muted
            loop
            playsInline
            preload="none"
            poster={poster}
            className="absolute inset-0 size-full object-cover"
          />
        )}
        <div className={cn('absolute inset-0', overlayClassName)} />
      </div>
      {control && enabled && (
        <button
          type="button"
          onClick={toggle}
          aria-label={paused ? 'Play background video' : 'Pause background video'}
          className="absolute bottom-5 left-5 z-10 flex size-9 items-center justify-center rounded-full border border-white/20 bg-black/30 text-white/80 backdrop-blur transition-colors hover:bg-black/50 hover:text-white"
        >
          {paused ? <Play aria-hidden className="size-4" /> : <Pause aria-hidden className="size-4" />}
        </button>
      )}
    </>
  );
}
