import { motion } from 'framer-motion';

const SideRails = ({ position = 'both', className = '' }) => (
  <div
    className={`hidden xl:block absolute inset-0 pointer-events-none overflow-hidden -z-5 ${className}`}
    aria-hidden="true"
  >
    {(position === 'left' || position === 'both') && (
      <div className="absolute top-1/3 left-6 flex flex-col items-center gap-6 opacity-40 hover:opacity-75 transition-opacity">
        <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-[#204282] to-transparent" />
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: 1 / 0,
            ease: 'easeInOut',
          }}
          className="text-[9px] font-mono text-[#204282] tracking-widest [writing-mode:vertical-lr] rotate-180"
        >
          SYS://ARA_GLOBAL_V4
        </motion.div>
        <div className="w-1.5 h-1.5 rounded-full bg-[#204282] animate-ping" />
      </div>
    )}
    {(position === 'right' || position === 'both') && (
      <div className="absolute top-1/2 right-6 flex flex-col items-center gap-6 opacity-40 hover:opacity-75 transition-opacity">
        <div className="w-1.5 h-1.5 rounded-full bg-[#E71E28] animate-pulse" />
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
          className="text-[9px] font-mono text-slate-400 tracking-widest [writing-mode:vertical-lr]"
        >
          HASH: 0x8F2E4A9C
        </motion.div>
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#E71E28]/40 via-[#204282] to-transparent" />
      </div>
    )}
  </div>
);

export default SideRails;
