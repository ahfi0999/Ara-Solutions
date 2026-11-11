import { useEffect, useRef, useState } from 'react';

const CountUp = ({ end, duration = 2000, prefix = '', suffix = '', decimals = 0, className = '' }) => {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      {
        threshold: 0.1,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    let frame;
    const tick = (now) => {
      startTime ||= now;
      const progress = Math.min((now - startTime) / duration, 1);
      const current = (progress === 1 ? 1 : 1 - 2 ** (-10 * progress)) * end;
      setValue(current);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setValue(end);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);
  const display = value.toFixed(decimals);
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

export default CountUp;
