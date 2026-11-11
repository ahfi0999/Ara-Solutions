import { motion } from 'framer-motion';
import { images } from '../../data/images';

const DarkBackdrop = ({ className = '', hasRedGlow = true }) => (
  <div
    className={`absolute inset-0 pointer-events-none overflow-hidden -z-10 bg-gradient-to-b from-[#080E1F] via-[#0D1A38] to-[#060A16] ${className}`}
    aria-hidden="true"
  >
    <img
      src={images.techWaveBg}
      alt=""
      className="w-full h-full object-cover object-center opacity-55 mix-blend-screen filter contrast-125 brightness-110"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-[#38BDF8] via-[#E71E28]/90 to-transparent shadow-[0_0_20px_#38BDF8]" />
    <div className="absolute top-0 inset-x-0 h-28 bg-gradient-to-b from-[#38BDF8]/25 via-[#2563EB]/10 to-transparent blur-xl pointer-events-none" />
    <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[920px] h-[480px] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.35)_0%,rgba(37,99,235,0.24)_40%,rgba(30,58,138,0.1)_70%,transparent_85%)] blur-[95px] pointer-events-none" />
    <motion.div
      animate={{
        opacity: [0.45, 0.75, 0.45],
        scaleY: [1, 1.08, 1],
      }}
      transition={{
        duration: 8,
        repeat: 1 / 0,
        ease: 'easeInOut',
      }}
      className="absolute -top-24 -left-12 w-[650px] h-[850px] bg-gradient-to-br from-[#38BDF8]/30 via-[#2563EB]/16 to-transparent blur-[85px] pointer-events-none origin-top-left -rotate-12"
    />
    <motion.div
      animate={{
        opacity: [0.35, 0.65, 0.35],
        scaleY: [1, 1.1, 1],
      }}
      transition={{
        duration: 9,
        repeat: 1 / 0,
        ease: 'easeInOut',
        delay: 1,
      }}
      className="absolute -top-20 -right-16 w-[580px] h-[800px] bg-gradient-to-bl from-[#E71E28]/35 via-[#DC2626]/18 to-transparent blur-[85px] pointer-events-none origin-top-right rotate-12"
    />
    <motion.div
      animate={{
        scale: [1, 1.22, 1],
        opacity: [0.7, 0.98, 0.7],
      }}
      transition={{
        duration: 7,
        repeat: 1 / 0,
        ease: 'easeInOut',
      }}
      className="absolute top-1/5 left-1/8 w-[640px] h-[480px] rounded-full bg-gradient-to-tr from-[#1D4ED8]/75 via-[#2563EB]/60 to-[#38BDF8]/40 blur-[110px]"
    >
      <div className="absolute top-1/4 left-1/4 w-[240px] h-[240px] rounded-full bg-gradient-to-tr from-[#60A5FA]/85 via-[#93C5FD]/65 to-white/50 blur-[45px]" />
    </motion.div>
    {hasRedGlow && (
      <motion.div
        animate={{
          scale: [0.95, 1.2, 0.95],
          opacity: [0.65, 0.92, 0.65],
        }}
        transition={{
          duration: 6.5,
          repeat: 1 / 0,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-1/2 right-1/10 w-[540px] h-[420px] rounded-full bg-gradient-to-tr from-[#DC2626]/70 via-[#E71E28]/55 to-[#FB7185]/35 blur-[100px]"
      >
        <div className="absolute top-1/4 left-1/4 w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[#FF3B4A]/85 via-[#FDA4AF]/65 to-white/45 blur-[40px]" />
      </motion.div>
    )}
    <motion.div
      animate={{
        scale: [1.1, 0.95, 1.1],
        opacity: [0.45, 0.7, 0.45],
      }}
      transition={{
        duration: 8.5,
        repeat: 1 / 0,
        ease: 'easeInOut',
        delay: 2,
      }}
      className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] rounded-full bg-gradient-to-tr from-[#312E81]/70 via-[#1E40AF]/55 to-transparent blur-[115px]"
    />
    <svg
      className="absolute inset-0 w-full h-full opacity-85 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 800"
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="cyberWaveBlue" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.3" />
          <stop offset="35%" stopColor="#38BDF8" stopOpacity="0.95" />
          <stop offset="65%" stopColor="#93C5FD" stopOpacity="1" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="cyberWaveRed" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#2563EB" stopOpacity="0.2" />
          <stop offset="25%" stopColor="#FF3B4A" stopOpacity="1" />
          <stop offset="55%" stopColor="#FCA5A5" stopOpacity="1" />
          <stop offset="75%" stopColor="#E71E28" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0.2" />
        </linearGradient>
        <filter id="neonWaveGlowHigh" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="8" result="blur1" />
          <feGaussianBlur stdDeviation="3" result="blur2" />
          <feMerge>
            <feMergeNode in="blur1" />
            <feMergeNode in="blur2" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="neonPointGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.path
        d="M -100,420 C 240,260 520,540 880,380 C 1180,240 1340,480 1540,360"
        stroke="url(#cyberWaveRed)"
        strokeWidth="3.5"
        filter="url(#neonWaveGlowHigh)"
        animate={{
          d: [
            'M -100,420 C 240,260 520,540 880,380 C 1180,240 1340,480 1540,360',
            'M -100,380 C 260,300 500,500 860,420 C 1200,280 1320,440 1540,400',
            'M -100,420 C 240,260 520,540 880,380 C 1180,240 1340,480 1540,360',
          ],
        }}
        transition={{
          duration: 14,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
      />
      <motion.path
        d="M -100,460 C 220,320 540,580 900,410 C 1160,280 1360,520 1540,390"
        stroke="url(#cyberWaveBlue)"
        strokeWidth="2.8"
        strokeDasharray="16 8"
        filter="url(#neonWaveGlowHigh)"
        animate={{
          strokeDashoffset: [0, -120],
          d: [
            'M -100,460 C 220,320 540,580 900,410 C 1160,280 1360,520 1540,390',
            'M -100,430 C 240,360 520,530 870,440 C 1190,320 1340,480 1540,420',
            'M -100,460 C 220,320 540,580 900,410 C 1160,280 1360,520 1540,390',
          ],
        }}
        transition={{
          duration: 16,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
      />
      <motion.path
        d="M -100,360 C 280,480 620,280 960,450 C 1240,360 1380,420 1540,330"
        stroke="#60A5FA"
        strokeWidth="1.8"
        strokeOpacity="0.75"
        strokeDasharray="6 8"
        animate={{
          strokeDashoffset: [0, 96],
        }}
        transition={{
          duration: 18,
          repeat: 1 / 0,
          ease: 'linear',
        }}
      />
      {[
        {
          cx: 200,
          cy: 380,
          r: 3,
          fill: '#60A5FA',
          glow: '#38BDF8',
        },
        {
          cx: 340,
          cy: 330,
          r: 4,
          fill: '#FF4D58',
          glow: '#E71E28',
        },
        {
          cx: 480,
          cy: 450,
          r: 3,
          fill: '#93C5FD',
          glow: '#60A5FA',
        },
        {
          cx: 620,
          cy: 490,
          r: 4,
          fill: '#38BDF8',
          glow: '#2563EB',
        },
        {
          cx: 780,
          cy: 400,
          r: 5,
          fill: '#FF4D58',
          glow: '#E71E28',
        },
        {
          cx: 940,
          cy: 360,
          r: 3,
          fill: '#93C5FD',
          glow: '#38BDF8',
        },
        {
          cx: 1100,
          cy: 390,
          r: 4,
          fill: '#38BDF8',
          glow: '#2563EB',
        },
        {
          cx: 1260,
          cy: 460,
          r: 4.5,
          fill: '#FF4D58',
          glow: '#E71E28',
        },
      ].map((item, index) => (
        <g key={index}>
          <circle
            cx={item.cx}
            cy={item.cy}
            r={item.r * 2.2}
            fill={item.glow}
            opacity="0.5"
            filter="url(#neonPointGlow)"
          />
          <circle cx={item.cx} cy={item.cy} r={item.r} fill={item.fill} opacity="0.95" />
          <circle cx={item.cx} cy={item.cy} r={item.r * 0.4} fill="#FFFFFF" opacity="0.9" />
        </g>
      ))}
    </svg>
    {[
      {
        top: '15%',
        left: '12%',
        size: 'w-3 h-3',
        color: 'bg-[#38BDF8]',
        blur: 'blur-[2px]',
        delay: 0,
      },
      {
        top: '28%',
        left: '42%',
        size: 'w-4 h-4',
        color: 'bg-[#60A5FA]',
        blur: 'blur-[3px]',
        delay: 1.5,
      },
      {
        top: '65%',
        left: '18%',
        size: 'w-3 h-3',
        color: 'bg-[#FF4D58]',
        blur: 'blur-[2px]',
        delay: 2,
      },
      {
        top: '45%',
        left: '82%',
        size: 'w-5 h-5',
        color: 'bg-[#38BDF8]',
        blur: 'blur-[4px]',
        delay: 0.8,
      },
      {
        top: '75%',
        left: '68%',
        size: 'w-3 h-3',
        color: 'bg-[#FF4D58]',
        blur: 'blur-[2px]',
        delay: 2.5,
      },
      {
        top: '85%',
        left: '30%',
        size: 'w-4 h-4',
        color: 'bg-[#93C5FD]',
        blur: 'blur-[3px]',
        delay: 1.2,
      },
      {
        top: '22%',
        left: '88%',
        size: 'w-2.5 h-2.5',
        color: 'bg-white',
        blur: 'blur-[1px]',
        delay: 3,
      },
    ].map((item, index) => (
      <motion.div
        key={index}
        animate={{
          y: [-12, 12, -12],
          opacity: [0.4, 0.9, 0.4],
          scale: [0.9, 1.25, 0.9],
        }}
        transition={{
          duration: 5 + index,
          repeat: 1 / 0,
          ease: 'easeInOut',
          delay: item.delay,
        }}
        className={`absolute ${item.size} ${item.color} ${item.blur} rounded-full pointer-events-none shadow-[0_0_12px_currentColor]`}
        style={{
          top: item.top,
          left: item.left,
        }}
      />
    ))}
  </div>
);

export default DarkBackdrop;
