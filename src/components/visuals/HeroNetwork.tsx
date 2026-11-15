'use client';

import { useEffect, useRef } from 'react';
import { useReducedMotionSafe } from '@/components/motion/primitives';

type Dot = { x: number; y: number; vx: number; vy: number; r: number };
type Spark = { a: number; b: number; t: number; speed: number };

const LINK_DISTANCE = 150; // px: dots closer than this are joined by a line
const MOUSE_RADIUS = 180; // px: dots inside this drift towards the pointer
const MAX_SPARKS = 7;

/**
 * Hero background: a slowly drifting "talent network". Dots wander, nearby dots are joined by
 * faint lines, red sparks travel along the links (people moving to companies) and dots near the
 * pointer gently gather towards it. One canvas, paused when off-screen or in a background tab,
 * and drawn as a single still frame when the visitor prefers reduced motion.
 */
export function HeroNetwork({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotionSafe();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement?.parentElement; // the hero section, which receives pointer events
    const ctx = canvas?.getContext('2d');
    if (!canvas || !host || !ctx) return;

    let width = 0;
    let height = 0;
    let dots: Dot[] = [];
    let sparks: Spark[] = [];
    let frame = 0;
    let running = false;
    let visible = true;
    let lastSpark = 0;
    const mouse = { x: -9999, y: -9999, active: false };

    /** Size the canvas; on later resizes the existing dots are stretched to fit instead of re-scattered. */
    const seed = () => {
      const rect = canvas.getBoundingClientRect();
      const previous = { width, height };
      width = rect.width;
      height = rect.height;
      const dpr = 1; // a soft background: 1x keeps it cheap on high-density screens
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (dots.length && previous.width && previous.height) {
        for (const dot of dots) {
          dot.x *= width / previous.width;
          dot.y *= height / previous.height;
        }
        return;
      }
      const count = Math.round(Math.min(95, Math.max(28, (width * height) / 15000)));
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        r: 1 + Math.random() * 1.6,
      }));
      sparks = [];
    };

    const neighbours = (i: number) => {
      const out: number[] = [];
      for (let j = 0; j < dots.length; j++) {
        if (j === i) continue;
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        if (dx * dx + dy * dy < LINK_DISTANCE * LINK_DISTANCE) out.push(j);
      }
      return out;
    };

    const draw = (time: number, move: boolean) => {
      ctx.clearRect(0, 0, width, height);

      if (move) {
        for (const dot of dots) {
          // Gentle pull towards the pointer.
          if (mouse.active) {
            const dx = mouse.x - dot.x;
            const dy = mouse.y - dot.y;
            const d = Math.hypot(dx, dy);
            if (d < MOUSE_RADIUS && d > 1) {
              dot.vx += (dx / d) * 0.012;
              dot.vy += (dy / d) * 0.012;
            }
          }
          // Keep speeds calm.
          const speed = Math.hypot(dot.vx, dot.vy);
          if (speed > 0.9) {
            dot.vx *= 0.9 / speed;
            dot.vy *= 0.9 / speed;
          }
          dot.x += dot.vx;
          dot.y += dot.vy;
          if (dot.x < -20) dot.x = width + 20;
          if (dot.x > width + 20) dot.x = -20;
          if (dot.y < -20) dot.y = height + 20;
          if (dot.y > height + 20) dot.y = -20;
        }
      }

      // Links, batched into a few brightness bands so each band is one stroke.
      ctx.lineWidth = 1;
      const bands: Path2D[] = [new Path2D(), new Path2D(), new Path2D(), new Path2D()];
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist2 = dx * dx + dy * dy;
          if (dist2 > LINK_DISTANCE * LINK_DISTANCE) continue;
          const closeness = 1 - Math.sqrt(dist2) / LINK_DISTANCE; // 0 far, 1 near
          const band = bands[Math.min(3, Math.floor(closeness * 4))];
          band.moveTo(dots[i].x, dots[i].y);
          band.lineTo(dots[j].x, dots[j].y);
        }
      }
      bands.forEach((band, index) => {
        ctx.strokeStyle = `rgba(160, 172, 255, ${((index + 0.5) / 4) * 0.32})`;
        ctx.stroke(band);
      });

      // Lines to the pointer.
      if (mouse.active) {
        for (const dot of dots) {
          const d = Math.hypot(mouse.x - dot.x, mouse.y - dot.y);
          if (d > MOUSE_RADIUS) continue;
          ctx.strokeStyle = `rgba(255, 122, 128, ${(1 - d / MOUSE_RADIUS) * 0.35})`;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }

      // Dots, in one path.
      ctx.fillStyle = 'rgba(214, 220, 255, 0.75)';
      ctx.beginPath();
      for (const dot of dots) {
        ctx.moveTo(dot.x + dot.r, dot.y);
        ctx.arc(dot.x, dot.y, dot.r, 0, Math.PI * 2);
      }
      ctx.fill();

      if (!move) return;

      // New sparks along existing links.
      if (time - lastSpark > 320 && sparks.length < MAX_SPARKS) {
        lastSpark = time;
        const a = Math.floor(Math.random() * dots.length);
        const options = neighbours(a);
        if (options.length) {
          sparks.push({ a, b: options[Math.floor(Math.random() * options.length)], t: 0, speed: 0.008 + Math.random() * 0.008 });
        }
      }

      // Sparks travelling from one dot to the next, then hopping on.
      sparks = sparks.filter((spark) => {
        spark.t += spark.speed;
        if (spark.t >= 1) {
          const next = neighbours(spark.b);
          if (!next.length || Math.random() < 0.35) return false;
          spark.a = spark.b;
          spark.b = next[Math.floor(Math.random() * next.length)];
          spark.t = 0;
        }
        const from = dots[spark.a];
        const to = dots[spark.b];
        const x = from.x + (to.x - from.x) * spark.t;
        const y = from.y + (to.y - from.y) * spark.t;
        // Glowing trail along the link.
        const tail = Math.max(0, spark.t - 0.35);
        const gradient = ctx.createLinearGradient(
          from.x + (to.x - from.x) * tail,
          from.y + (to.y - from.y) * tail,
          x,
          y,
        );
        gradient.addColorStop(0, 'rgba(229, 35, 45, 0)');
        gradient.addColorStop(1, 'rgba(255, 90, 98, 0.9)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.6;
        ctx.beginPath();
        ctx.moveTo(from.x + (to.x - from.x) * tail, from.y + (to.y - from.y) * tail);
        ctx.lineTo(x, y);
        ctx.stroke();
        ctx.lineWidth = 1;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 9);
        glow.addColorStop(0, 'rgba(255, 140, 145, 0.95)');
        glow.addColorStop(1, 'rgba(229, 35, 45, 0)');
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(x, y, 9, 0, Math.PI * 2);
        ctx.fill();
        return true;
      });
    };

    // Safety valve for slow devices: if frames keep running long, halve the dots; if it is still
    // slow after that, stop and keep the last frame as a still picture.
    let lastTime = 0;
    let slowFrames = 0;
    let degraded = false;
    const loop = (time: number) => {
      if (lastTime) {
        slowFrames = time - lastTime > 34 ? slowFrames + 1 : Math.max(0, slowFrames - 1);
      }
      lastTime = time;
      if (slowFrames > 60) {
        slowFrames = 0;
        if (!degraded) {
          degraded = true;
          dots = dots.filter((_, index) => index % 2 === 0);
          sparks = [];
        } else {
          draw(time, false);
          stop();
          return;
        }
      }
      draw(time, true);
      frame = requestAnimationFrame(loop);
    };
    const start = () => {
      if (running || reduce || !visible || document.hidden) return;
      running = true;
      lastTime = 0;
      canvas.dataset.running = 'true';
      frame = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      canvas.dataset.running = 'false';
      cancelAnimationFrame(frame);
    };

    seed();
    draw(0, false);
    canvas.style.opacity = '1';
    start();

    const resize = new ResizeObserver(() => {
      seed();
      draw(0, false);
    });
    resize.observe(canvas);

    const inView = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    inView.observe(canvas);

    const onVisibility = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVisibility);

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
      mouse.active = event.pointerType === 'mouse';
    };
    const onLeave = () => {
      mouse.active = false;
    };
    host.addEventListener('pointermove', onMove);
    host.addEventListener('pointerleave', onLeave);

    return () => {
      stop();
      resize.disconnect();
      inView.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      host.removeEventListener('pointermove', onMove);
      host.removeEventListener('pointerleave', onLeave);
    };
  }, [reduce]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={className}
      style={{ opacity: 0, transition: 'opacity 1.2s ease' }}
    />
  );
}
