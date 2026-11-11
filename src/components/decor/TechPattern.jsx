import { motion } from 'framer-motion';

const TechPattern = ({ variant = 'circuit', className = '', hasRedAccent = false, isLight = false }) =>
  variant === 'circuit' ? (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: isLight ? [0.35, 0.55, 0.35] : [0.45, 0.7, 0.45],
        }}
        transition={{
          duration: 7,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/4 left-1/6 w-[560px] h-[560px] rounded-full ${isLight ? 'bg-gradient-to-tr from-[#204282]/12 via-[#282870]/8 to-transparent blur-[110px]' : 'bg-gradient-to-tr from-[#204282]/50 via-[#282870]/40 to-transparent blur-[110px]'}`}
      />
      <motion.div
        animate={{
          scale: [1.15, 1, 1.15],
          opacity: isLight ? [0.3, 0.5, 0.3] : [0.4, 0.65, 0.4],
        }}
        transition={{
          duration: 9,
          repeat: 1 / 0,
          ease: 'easeInOut',
          delay: 1,
        }}
        className={`absolute bottom-1/4 right-1/6 w-[580px] h-[580px] rounded-full ${isLight ? 'bg-gradient-to-tr from-[#282870]/12 via-[#204282]/8 to-transparent blur-[130px]' : 'bg-gradient-to-tr from-[#282870]/60 via-[#204282]/45 to-transparent blur-[130px]'}`}
      />
      {hasRedAccent && (
        <motion.div
          animate={{
            scale: [0.95, 1.15, 0.95],
            opacity: isLight ? [0.2, 0.4, 0.2] : [0.25, 0.5, 0.25],
          }}
          transition={{
            duration: 6,
            repeat: 1 / 0,
            ease: 'easeInOut',
            delay: 2,
          }}
          className={`absolute top-1/2 right-1/4 w-[420px] h-[420px] rounded-full ${isLight ? 'bg-gradient-to-tr from-[#E71E28]/10 to-transparent blur-[100px]' : 'bg-gradient-to-tr from-[#E71E28]/35 to-transparent blur-[100px]'}`}
        />
      )}
      <svg
        className={`absolute w-full h-full ${isLight ? 'opacity-65' : 'opacity-35'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        fill="none"
      >
        <defs>
          <filter
            id={isLight ? 'circuit-dot-glow-light' : 'circuit-dot-glow'}
            x="-50%"
            y="-50%"
            width="200%"
            height="200%"
          >
            <feGaussianBlur stdDeviation={isLight ? '1.5' : '2.5'} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <motion.path
          d="M -100 200 L 300 200 L 450 350 L 900 350 L 1050 500 L 1300 500"
          stroke="#204282"
          strokeOpacity={isLight ? 0.4 : 0.8}
          strokeWidth={isLight ? '1.75' : '1.5'}
          strokeDasharray="8 8"
          animate={{
            strokeDashoffset: [0, -64],
          }}
          transition={{
            duration: 25,
            repeat: 1 / 0,
            ease: 'linear',
          }}
        />
        <motion.circle
          r={isLight ? '5' : '4'}
          fill={hasRedAccent ? '#E71E28' : '#204282'}
          filter={`url(#${isLight ? 'circuit-dot-glow-light' : 'circuit-dot-glow'})`}
          animate={{
            cx: [-100, 300, 450, 900, 1050, 1300],
            cy: [200, 200, 350, 350, 500, 500],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 18,
            repeat: 1 / 0,
            ease: 'linear',
          }}
        />
        <motion.path
          d="M -50 650 L 250 650 L 400 500 L 700 500 L 850 650 L 1350 650"
          stroke="#224182"
          strokeOpacity={isLight ? 0.4 : 0.8}
          strokeWidth={isLight ? '1.75' : '1.5'}
          strokeDasharray="6 6"
          animate={{
            strokeDashoffset: [0, 48],
          }}
          transition={{
            duration: 30,
            repeat: 1 / 0,
            ease: 'linear',
          }}
        />
        <motion.circle
          r={isLight ? '4.5' : '3.5'}
          fill={isLight ? '#282870' : '#204282'}
          filter={`url(#${isLight ? 'circuit-dot-glow-light' : 'circuit-dot-glow'})`}
          animate={{
            cx: [1350, 850, 700, 400, 250, -50],
            cy: [650, 650, 500, 500, 650, 650],
            opacity: [0, 1, 1, 1, 1, 0],
          }}
          transition={{
            duration: 22,
            repeat: 1 / 0,
            ease: 'linear',
            delay: 3,
          }}
        />
        <circle cx="300" cy="200" r="4.5" fill="#204282" fillOpacity={isLight ? 0.7 : 1} />
        <circle cx="450" cy="350" r="4" fill="#224182" fillOpacity={isLight ? 0.6 : 1} />
        <circle cx="900" cy="350" r="4.5" fill={hasRedAccent ? '#E71E28' : '#204282'} />
        <circle cx="400" cy="500" r="4" fill="#224182" fillOpacity={isLight ? 0.6 : 1} />
        <circle cx="700" cy="500" r="5" fill={hasRedAccent ? '#E71E28' : '#204282'} />
      </svg>
    </div>
  ) : variant === 'wave-lines' ? (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 8.5,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/3 left-1/3 w-[560px] h-[340px] rounded-full ${isLight ? 'bg-[#204282]/10 blur-[110px]' : 'bg-[#204282]/35 blur-[110px]'}`}
      />
      <div
        className={`absolute bottom-10 right-1/4 w-[420px] h-[300px] rounded-full ${isLight ? 'bg-[#282870]/10 blur-[100px]' : 'bg-[#282870]/40 blur-[100px]'}`}
      />
      <svg
        className={`absolute w-full h-full ${isLight ? 'opacity-55' : 'opacity-30'}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 600"
        fill="none"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,250 C320,160 540,340 840,240 C1140,140 1300,320 1440,260"
          stroke="#204282"
          strokeWidth={isLight ? '1.75' : '1.5'}
          strokeDasharray="10 10"
          strokeOpacity={isLight ? 0.45 : 0.8}
          animate={{
            strokeDashoffset: [0, -120],
          }}
          transition={{
            duration: 35,
            repeat: 1 / 0,
            ease: 'linear',
          }}
        />
        <motion.path
          d="M0,320 C280,400 620,200 960,340 C1200,420 1340,280 1440,310"
          stroke="#224182"
          strokeWidth={isLight ? '1.75' : '1.5'}
          strokeDasharray="6 6"
          strokeOpacity={isLight ? 0.45 : 0.8}
          animate={{
            strokeDashoffset: [0, 80],
          }}
          transition={{
            duration: 28,
            repeat: 1 / 0,
            ease: 'linear',
          }}
        />
        <motion.path
          d="M0,180 C400,280 720,120 1080,260 C1280,340 1380,210 1440,230"
          stroke="#282870"
          strokeWidth="1"
          strokeOpacity={isLight ? 0.35 : 0.8}
        />
      </svg>
      <motion.div
        animate={{
          x: [0, 60, 0],
          y: [0, -25, 0],
          opacity: [0.4, 0.9, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className="absolute top-1/2 left-1/4 w-2.5 h-2.5 rounded-full bg-[#204282] shadow-[0_0_10px_#204282]"
      />
      {hasRedAccent && (
        <motion.div
          animate={{
            x: [0, -50, 0],
            y: [0, 30, 0],
            opacity: [0.3, 0.85, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: 1 / 0,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute top-1/3 right-1/4 w-2.5 h-2.5 rounded-full bg-[#E71E28] shadow-[0_0_10px_#E71E28]"
        />
      )}
    </div>
  ) : variant === 'dot-mesh' || variant === 'mesh' ? (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7.5,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className={`absolute top-10 right-1/4 w-[500px] h-[320px] rounded-full ${isLight ? 'bg-[#204282]/8 blur-[110px]' : 'bg-[#204282]/30 blur-[110px]'}`}
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 9,
          repeat: 1 / 0,
          ease: 'easeInOut',
          delay: 1,
        }}
        className={`absolute bottom-10 left-1/4 w-[460px] h-[280px] rounded-full ${isLight ? 'bg-[#282870]/8 blur-[100px]' : 'bg-[#282870]/40 blur-[100px]'}`}
      />
      <svg
        className={`absolute inset-0 w-full h-full ${isLight ? 'opacity-40' : 'opacity-20'}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`tech-dot-mesh-${variant}-${isLight ? 'light' : 'dark'}`}
            width="36"
            height="36"
            patternUnits="userSpaceOnUse"
          >
            <circle
              cx="2"
              cy="2"
              r="1.5"
              fill={isLight ? '#204282' : '#224182'}
              fillOpacity={isLight ? 0.6 : 1}
            />
            <line
              x1="2"
              y1="2"
              x2="38"
              y2="2"
              stroke="#204282"
              strokeWidth="0.5"
              strokeOpacity={isLight ? 0.35 : 0.3}
              strokeDasharray="3 3"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#tech-dot-mesh-${variant}-${isLight ? 'light' : 'dark'})`}
        />
      </svg>
      <motion.div
        animate={{
          x: ['-50%', '150%'],
          opacity: isLight ? [0, 0.4, 0] : [0, 0.25, 0],
        }}
        transition={{
          duration: 14,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className={`absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-transparent ${isLight ? 'via-[#204282]/10' : 'via-[#204282]/15'} to-transparent skew-x-12`}
      />
    </div>
  ) : variant === 'rings' ? (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className={`absolute top-1/4 right-1/4 w-[520px] h-[400px] rounded-full ${isLight ? 'bg-[#204282]/10 blur-[120px]' : 'bg-[#204282]/35 blur-[120px]'}`}
      />
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 80,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className={`absolute -right-28 -top-28 w-[540px] h-[540px] rounded-full border ${isLight ? 'border-[#204282]/35' : 'border-[#204282]/40'} border-dashed ${isLight ? 'opacity-70' : 'opacity-45'}`}
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_#E71E28]" />
      </motion.div>
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 60,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className={`absolute -right-16 -top-16 w-[430px] h-[430px] rounded-full border ${isLight ? 'border-[#224182]/30' : 'border-[#224182]/35'} ${isLight ? 'opacity-60' : 'opacity-40'}`}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#204282] shadow-[0_0_8px_#204282]" />
      </motion.div>
      <div
        className={`absolute -left-20 -bottom-20 w-[480px] h-[480px] rounded-full border ${isLight ? 'border-[#282870]/30' : 'border-[#282870]/40'} border-dotted ${isLight ? 'opacity-55' : 'opacity-35'}`}
      />
    </div>
  ) : variant === 'cyber-grid' || variant === 'hud-radar' ? (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`} aria-hidden="true">
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.45, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className={`absolute -top-10 -right-10 w-[480px] h-[480px] rounded-full ${isLight ? 'bg-[#204282]/10 blur-[110px]' : 'bg-[#204282]/35 blur-[110px]'}`}
      />
      <div
        className={`absolute -bottom-10 -left-10 w-[420px] h-[420px] rounded-full ${isLight ? 'bg-[#282870]/10 blur-[100px]' : 'bg-[#282870]/40 blur-[100px]'}`}
      />
      <div
        className={`absolute top-10 right-10 w-72 h-72 rounded-full border ${isLight ? 'border-[#204282]/25' : 'border-[#204282]/30'} ${isLight ? 'opacity-60' : 'opacity-40'}`}
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 15,
            repeat: 1 / 0,
            ease: 'linear',
          }}
          className="w-full h-full origin-center relative"
        >
          <div
            className={`w-1/2 h-[1.5px] bg-gradient-to-r from-transparent to-[#204282] absolute top-1/2 left-0 ${isLight ? 'opacity-90' : 'opacity-100'}`}
          />
        </motion.div>
      </div>
    </div>
  ) : null;

export default TechPattern;
