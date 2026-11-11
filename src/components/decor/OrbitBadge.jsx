import { motion } from 'framer-motion';

const OrbitBadge = ({ position = 'top-right', isLight = true, size = 180 }) => {
  const positionClass = {
    'top-right': 'top-6 right-6',
    'bottom-left': 'bottom-6 left-6',
    'top-left': 'top-6 left-6',
    'bottom-right': 'bottom-6 right-6',
  }[position];
  return (
    <div
      className={`hidden md:block absolute ${positionClass} pointer-events-none select-none -z-5`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 40,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className={`w-full h-full rounded-full border border-dashed ${isLight ? 'border-slate-300/70' : 'border-[#204282]/40'} relative`}
      >
        <span
          className={`absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-1 ${isLight ? 'bg-[#204282]' : 'bg-[#38BDF8]'}`}
        />
        <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1 h-2 bg-[#E71E28]" />
      </motion.div>
      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className={`absolute inset-6 rounded-full border ${isLight ? 'border-slate-200' : 'border-white/10'} relative`}
      >
        <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#E71E28] shadow-[0_0_8px_#E71E28]" />
      </motion.div>
      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: 1 / 0,
          ease: 'linear',
        }}
        className="absolute inset-0 origin-center"
      >
        <div
          className={`w-1/2 h-[1px] bg-gradient-to-r from-transparent ${isLight ? 'via-[#204282]/50 to-[#E71E28]' : 'via-[#204282]/80 to-[#E71E28]'} absolute top-1/2 left-0`}
        />
      </motion.div>
      <div className="absolute inset-[42%] rounded-full bg-slate-100/50 border border-slate-300 flex items-center justify-center">
        <motion.span
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: 1 / 0,
            ease: 'easeInOut',
          }}
          className="w-1.5 h-1.5 rounded-full bg-[#204282]"
        />
      </div>
    </div>
  );
};

export default OrbitBadge;
