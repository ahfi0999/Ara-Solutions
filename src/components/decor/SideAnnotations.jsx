import { motion } from 'framer-motion';

const SideAnnotations = ({ position = 'both', isLight = true }) => (
  <div
    className="hidden xl:block absolute inset-0 pointer-events-none overflow-hidden select-none"
    aria-hidden="true"
  >
    {(position === 'left' || position === 'both') && (
      <div className="absolute top-1/3 left-4 xl:left-8 flex flex-col items-center gap-5">
        <div className="relative w-[1px] h-32 bg-gradient-to-b from-transparent via-slate-300 to-transparent">
          <motion.div
            animate={{
              y: [0, 128, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6,
              repeat: 1 / 0,
              ease: 'easeInOut',
            }}
            className={`w-1.5 h-1.5 -left-[2.5px] rounded-full absolute ${isLight ? 'bg-[#204282] shadow-[0_0_8px_#204282]' : 'bg-[#38BDF8] shadow-[0_0_10px_#38BDF8]'}`}
          />
        </div>
        <motion.div
          animate={{
            opacity: [0.25, 0.65, 0.25],
          }}
          transition={{
            duration: 4.5,
            repeat: 1 / 0,
            ease: 'easeInOut',
          }}
          className={`text-[9px] font-mono tracking-widest [writing-mode:vertical-lr] rotate-180 ${isLight ? 'text-slate-400' : 'text-slate-500'}`}
        >
          SYS://ARA_NET
        </motion.div>
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 30,
            repeat: 1 / 0,
            ease: 'linear',
          }}
          className={`w-4 h-4 rounded-full border border-dashed ${isLight ? 'border-slate-300 text-slate-400' : 'border-slate-700 text-slate-500'} flex items-center justify-center`}
        >
          <span className="w-1 h-1 rounded-full bg-[#E71E28]" />
        </motion.div>
      </div>
    )}
    {(position === 'right' || position === 'both') && (
      <div className="absolute top-1/2 right-4 xl:right-8 flex flex-col items-center gap-5">
        <motion.div
          animate={{
            scale: [1, 1.25, 1],
            opacity: [0.4, 0.9, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: 1 / 0,
            ease: 'easeInOut',
          }}
          className="w-1.5 h-1.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_#E71E28]"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: 1 / 0,
            ease: 'easeInOut',
            delay: 1,
          }}
          className={`text-[9px] font-mono tracking-widest [writing-mode:vertical-lr] ${isLight ? 'text-slate-400' : 'text-slate-500'}`}
        >
          NODE: 0xHYD_SEC
        </motion.div>
        <div className="relative w-[1px] h-28 bg-gradient-to-b from-transparent via-[#E71E28]/40 to-transparent">
          <motion.div
            animate={{
              y: [0, 112, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 5,
              repeat: 1 / 0,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="w-1.5 h-1.5 -left-[2.5px] rounded-full bg-[#E71E28] absolute"
          />
        </div>
      </div>
    )}
  </div>
);

export default SideAnnotations;
