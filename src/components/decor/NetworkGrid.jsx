import { motion } from 'framer-motion';

const NetworkGrid = ({ isLight = true }) => (
  <div
    className="relative pointer-events-none select-none overflow-hidden h-36 w-full opacity-85"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 460 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full text-slate-300"
    >
      <defs>
        <filter id="globe-dot-glow-red" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="globe-dot-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="horizon-grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#204282" stopOpacity="0.1" />
          <stop offset="25%" stopColor="#204282" stopOpacity="0.7" />
          <stop offset="50%" stopColor="#E71E28" stopOpacity="0.8" />
          <stop offset="75%" stopColor="#204282" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#204282" stopOpacity="0.1" />
        </linearGradient>
      </defs>
      <motion.ellipse
        cx="230"
        cy="170"
        rx="220"
        ry="110"
        stroke="#CBD5E1"
        strokeWidth="1"
        strokeDasharray="4 4"
        animate={{
          strokeDashoffset: [0, -32],
        }}
        transition={{
          duration: 16,
          repeat: 1 / 0,
          ease: 'linear',
        }}
      />
      <motion.ellipse
        cx="230"
        cy="170"
        rx="170"
        ry="85"
        stroke="#94A3B8"
        strokeWidth="0.8"
        strokeDasharray="3 3"
        strokeOpacity="0.6"
        animate={{
          strokeDashoffset: [0, 24],
        }}
        transition={{
          duration: 12,
          repeat: 1 / 0,
          ease: 'linear',
        }}
      />
      <ellipse
        cx="230"
        cy="170"
        rx="120"
        ry="60"
        stroke="#CBD5E1"
        strokeWidth="0.8"
        strokeDasharray="2 3"
        strokeOpacity="0.4"
      />
      <path
        d="M 10 140 Q 230 40 450 140"
        stroke="url(#horizon-grad)"
        strokeWidth="1.5"
        strokeDasharray="5 5"
        opacity="0.75"
      />
      <motion.circle
        r="3.5"
        fill="#E71E28"
        filter="url(#globe-dot-glow-red)"
        animate={{
          cx: [20, 95, 190, 280, 360, 440],
          cy: [138, 108, 74, 78, 108, 138],
          opacity: [0, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
      />
      <motion.circle
        r="3"
        fill="#204282"
        filter="url(#globe-dot-glow-blue)"
        animate={{
          cx: [430, 360, 280, 190, 95, 30],
          cy: [136, 108, 78, 74, 108, 136],
          opacity: [0, 1, 1, 1, 1, 0],
        }}
        transition={{
          duration: 7.5,
          repeat: 1 / 0,
          ease: 'easeInOut',
          delay: 2,
        }}
      />
      <g>
        <motion.circle
          cx="95"
          cy="108"
          r="8"
          stroke="#E71E28"
          strokeWidth="1"
          fill="none"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.8,
            repeat: 1 / 0,
            ease: 'easeOut',
          }}
          style={{
            transformOrigin: '95px 108px',
          }}
        />
        <circle cx="95" cy="108" r="4.5" fill="#E71E28" filter="url(#globe-dot-glow-red)" />
      </g>
      <g>
        <motion.circle
          cx="190"
          cy="74"
          r="7"
          stroke="#204282"
          strokeWidth="0.8"
          fill="none"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3.2,
            repeat: 1 / 0,
            ease: 'easeOut',
            delay: 0.8,
          }}
          style={{
            transformOrigin: '190px 74px',
          }}
        />
        <circle cx="190" cy="74" r="3.5" fill="#204282" filter="url(#globe-dot-glow-blue)" />
      </g>
      <g>
        <motion.circle
          cx="280"
          cy="78"
          r="7.5"
          stroke="#E71E28"
          strokeWidth="1"
          fill="none"
          animate={{
            scale: [1, 2.2, 1],
            opacity: [0.6, 0, 0.6],
          }}
          transition={{
            duration: 2.6,
            repeat: 1 / 0,
            ease: 'easeOut',
            delay: 1.4,
          }}
          style={{
            transformOrigin: '280px 78px',
          }}
        />
        <circle cx="280" cy="78" r="4" fill="#E71E28" filter="url(#globe-dot-glow-red)" />
      </g>
      <g>
        <motion.circle
          cx="360"
          cy="108"
          r="7"
          stroke="#204282"
          strokeWidth="0.8"
          fill="none"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 3.5,
            repeat: 1 / 0,
            ease: 'easeOut',
            delay: 0.5,
          }}
          style={{
            transformOrigin: '360px 108px',
          }}
        />
        <circle cx="360" cy="108" r="3.5" fill="#204282" />
      </g>
      {Array.from({
        length: 8,
      }).map((item, index) =>
        Array.from({
          length: 15,
        }).map((entry, entryIndex) => {
          const x = 32 + entryIndex * 28;
          const y = 56 + index * 13;
          if (y > 45 && y < 150) {
            const highlighted = (index + entryIndex) % 7 === 0;
            return (
              <circle
                key={`matrix-dot-${index}-${entryIndex}`}
                cx={x}
                cy={y}
                r={highlighted ? '1.5' : '0.9'}
                fill={highlighted ? '#204282' : '#94A3B8'}
                opacity={highlighted ? '0.45' : '0.22'}
              />
            );
          }
          return null;
        }),
      )}
    </svg>
    <div className="absolute bottom-1 right-2 flex items-center gap-2 text-[9px] font-mono text-slate-400">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
      <span>NETWORK_GRID // 10 Gbps</span>
    </div>
  </div>
);

export default NetworkGrid;
