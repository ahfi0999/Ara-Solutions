import { motion } from 'framer-motion';

const AmbientBackdrop = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden z-1" aria-hidden="true">
    <motion.div
      animate={{
        scale: [1, 1.22, 1],
        opacity: [0.5, 0.75, 0.5],
      }}
      transition={{
        duration: 7,
        repeat: 1 / 0,
        ease: 'easeInOut',
      }}
      className="absolute -top-12 right-1/12 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[#204282]/60 to-[#224182]/30 blur-[120px]"
    />
    <motion.div
      animate={{
        scale: [1.15, 1, 1.15],
        opacity: [0.45, 0.65, 0.45],
      }}
      transition={{
        duration: 9,
        repeat: 1 / 0,
        ease: 'easeInOut',
        delay: 1,
      }}
      className="absolute top-1/4 left-1/4 w-[680px] h-[480px] rounded-full bg-gradient-to-tr from-[#282870]/60 via-[#204282]/40 to-transparent blur-[140px]"
    />
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.35, 0.6, 0.35],
      }}
      transition={{
        duration: 6,
        repeat: 1 / 0,
        ease: 'easeInOut',
        delay: 1.5,
      }}
      className="absolute bottom-8 right-1/6 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#E71E28]/45 to-transparent blur-[110px]"
    />
    <motion.div
      animate={{
        x: ['-20%', '120%'],
        opacity: [0, 0.5, 0],
      }}
      transition={{
        duration: 10,
        repeat: 1 / 0,
        ease: 'easeInOut',
        repeatDelay: 2,
      }}
      className="absolute top-20 right-0 w-[550px] h-[2px] bg-gradient-to-r from-transparent via-[#204282] to-transparent rotate-[-15deg] blur-[1px]"
    />
    <div className="hidden sm:block absolute top-12 sm:top-16 lg:top-24 right-4 sm:right-8 lg:right-16 xl:right-24 w-[240px] sm:w-[300px] lg:w-[320px] h-[240px] sm:h-[300px] lg:h-[320px] opacity-80 pointer-events-none">
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 60,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className="absolute inset-0 rounded-full border border-[#204282]/45 border-dashed"
      >
        <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#204282]" />
        <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-1 bg-[#204282]" />
        <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-1 h-2 bg-[#204282]" />
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-2 bg-[#204282]" />
      </motion.div>
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 45,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className="absolute inset-8 rounded-full border border-white/20"
      >
        <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 flex items-center justify-center">
          <span className="w-3 h-3 rounded-full bg-[#E71E28] shadow-[0_0_12px_#E71E28] animate-pulse" />
          <span className="absolute w-6 h-6 rounded-full border border-[#E71E28]/40 animate-ping" />
        </div>
        <div className="absolute top-1/2 -left-1.5 -translate-y-1/2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#204282] shadow-[0_0_10px_#204282]" />
        </div>
      </motion.div>
      <div className="absolute inset-[110px] rounded-full bg-[#282870]/30 border border-[#204282]/40 backdrop-blur-sm flex items-center justify-center">
        <motion.div
          animate={{
            scale: [0.9, 1.15, 0.9],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 3.5,
            repeat: 1 / 0,
            ease: 'easeInOut',
          }}
          className="w-4 h-4 rounded-full bg-gradient-to-tr from-[#204282] to-[#E71E28] shadow-[0_0_14px_rgba(231,30,40,0.6)]"
        />
      </div>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 10,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className="absolute inset-0 origin-center"
      >
        <div className="w-1/2 h-[1.5px] bg-gradient-to-r from-transparent via-[#204282]/80 to-[#E71E28] absolute top-1/2 left-0" />
      </motion.div>
    </div>
    <svg
      className="hidden sm:block absolute top-0 right-0 w-[300px] sm:w-[420px] h-[380px] sm:h-[500px] pointer-events-none opacity-55"
      viewBox="0 0 420 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="circuit-grad-blue" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#204282" stopOpacity="0.2" />
          <stop offset="50%" stopColor="#204282" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#E71E28" stopOpacity="0.8" />
        </linearGradient>
        <filter id="packet-glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M 50 80 L 180 80 L 260 160 L 380 160 L 420 200"
        stroke="#204282"
        strokeWidth="1.5"
        strokeDasharray="4 4"
        strokeOpacity="0.5"
      />
      <motion.circle
        r="4"
        fill="#E71E28"
        filter="url(#packet-glow)"
        animate={{
          cx: [50, 180, 260, 380, 420],
          cy: [80, 80, 160, 160, 200],
          opacity: [0, 1, 1, 1, 0],
        }}
        transition={{
          duration: 5,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
      />
      <path
        d="M 120 320 L 220 320 L 300 240 L 420 240"
        stroke="#224182"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        strokeOpacity="0.6"
      />
      <motion.circle
        r="3.5"
        fill="#204282"
        filter="url(#packet-glow)"
        animate={{
          cx: [120, 220, 300, 420],
          cy: [320, 320, 240, 240],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 6,
          repeat: 1 / 0,
          ease: 'easeInOut',
          delay: 1.5,
        }}
      />
      <circle cx="180" cy="80" r="3" fill="#204282" />
      <circle cx="260" cy="160" r="3.5" fill="#E71E28" />
      <circle cx="220" cy="320" r="3" fill="#204282" />
      <circle cx="300" cy="240" r="3.5" fill="#204282" />
    </svg>
    <motion.div
      animate={{
        y: [-15, 15, -15],
        x: [-5, 5, -5],
        opacity: [0.3, 0.8, 0.3],
      }}
      transition={{
        duration: 7,
        repeat: 1 / 0,
        ease: 'easeInOut',
      }}
      className="absolute top-1/4 right-1/3 w-1.5 h-1.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_#E71E28]"
    />
    <motion.div
      animate={{
        y: [12, -12, 12],
        x: [4, -4, 4],
        opacity: [0.4, 0.9, 0.4],
      }}
      transition={{
        duration: 8,
        repeat: 1 / 0,
        ease: 'easeInOut',
        delay: 1,
      }}
      className="absolute top-1/3 right-1/5 w-2 h-2 rounded-full bg-[#204282] shadow-[0_0_10px_#204282]"
    />
    <motion.div
      animate={{
        y: [-10, 10, -10],
        opacity: [0.2, 0.7, 0.2],
      }}
      transition={{
        duration: 6,
        repeat: 1 / 0,
        ease: 'easeInOut',
        delay: 2,
      }}
      className="absolute top-1/2 right-12 w-1.5 h-1.5 rounded-full bg-slate-300 shadow-[0_0_6px_#fff]"
    />
  </div>
);

export default AmbientBackdrop;
