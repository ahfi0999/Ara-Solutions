import { useEffect, useState } from 'react';

const HubDiagram = ({ animated = true, className = '', variant = 'home' }) => {
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    if (!animated || variant === 'page') {
      setDrawn(true);
      return;
    }
    const timer = setTimeout(() => {
      setDrawn(true);
    }, 150);
    return () => clearTimeout(timer);
  }, [animated, variant]);
  const lineStyle = (length, delay) =>
    variant === 'page'
      ? {
          strokeDasharray: length,
          strokeDashoffset: 0,
          opacity: 0.18,
        }
      : {
          strokeDasharray: length,
          strokeDashoffset: drawn ? 0 : length,
          transition: `stroke-dashoffset 1.4s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity 0.8s ease ${delay}ms`,
          opacity: drawn ? 1 : 0.2,
        };
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 480 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[540px] drop-shadow-sm"
      >
        <defs>
          <linearGradient id="navyGradient1" x1="60" y1="360" x2="380" y2="40" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F2A60" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#1E478C" stopOpacity="1" />
          </linearGradient>
          <linearGradient
            id="navyGradient2"
            x1="100"
            y1="380"
            x2="440"
            y2="100"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#0F2A60" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#133169" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <path
          d="M 50,340 C 130,370 210,310 260,210 C 310,110 370,60 430,70"
          stroke="url(#navyGradient2)"
          strokeWidth={variant === 'page' ? '2.5' : '3'}
          strokeLinecap="round"
          fill="none"
          style={lineStyle(620, 100)}
        />
        <path
          d="M 80,350 C 140,320 190,200 240,110 C 270,55 310,40 350,65 C 390,90 410,170 380,260"
          stroke="url(#navyGradient1)"
          strokeWidth={variant === 'page' ? '3.5' : '4.5'}
          strokeLinecap="round"
          fill="none"
          style={lineStyle(750, 250)}
        />
        <path
          d="M 120,330 C 180,290 220,190 270,140 C 320,90 380,120 400,210 C 410,255 390,320 330,350"
          stroke="#0F2A60"
          strokeWidth={variant === 'page' ? '2.5' : '3.5'}
          strokeLinecap="round"
          fill="none"
          style={lineStyle(680, 400)}
        />
        <path
          d="M 160,230 C 220,205 290,200 360,225 C 400,240 430,220 445,190"
          stroke="#E11F32"
          strokeWidth={variant === 'page' ? '3' : '4'}
          strokeLinecap="round"
          fill="none"
          style={lineStyle(480, 600)}
        />
        <circle
          cx="300"
          cy="52"
          r={variant === 'page' ? '3' : '4.5'}
          fill="#E11F32"
          className="transition-opacity duration-700"
          style={{
            opacity: +!!drawn,
            transitionDelay: '900ms',
          }}
        />
        <circle
          cx="445"
          cy="190"
          r="3"
          fill="#0F2A60"
          className="transition-opacity duration-700"
          style={{
            opacity: drawn ? 0.8 : 0,
            transitionDelay: '1050ms',
          }}
        />
      </svg>
    </div>
  );
};

export default HubDiagram;
