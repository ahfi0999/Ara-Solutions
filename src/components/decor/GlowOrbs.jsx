import { motion } from 'framer-motion';

const GlowOrbs = ({ position = 'top-right', color = 'blue', size = 'lg', className = '' }) => {
  const positionClass = {
    'top-left': '-top-20 -left-20',
    'top-right': '-top-20 -right-20',
    'bottom-left': '-bottom-20 -left-20',
    'bottom-right': '-bottom-20 -right-20',
    center: 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
  }[position];
  const sizeClass = {
    sm: 'w-72 h-72 blur-2xl',
    md: 'w-[440px] h-[440px] blur-3xl',
    lg: 'w-[600px] h-[600px] blur-[120px]',
    xl: 'w-[800px] h-[800px] blur-[150px]',
  }[size];
  const colorClass = {
    blue: 'bg-gradient-to-tr from-[#1D4ED8]/85 via-[#2563EB]/65 to-[#38BDF8]/45',
    navy: 'bg-gradient-to-tr from-[#1E3A8A]/90 via-[#2563EB]/70 to-[#0284C7]/45',
    red: 'bg-gradient-to-tr from-[#DC2626]/80 via-[#E71E28]/65 to-[#FDA4AF]/40',
  }[color];
  const coreClass = {
    blue: 'bg-gradient-to-tr from-[#60A5FA]/80 via-[#93C5FD]/60 to-white/40',
    navy: 'bg-gradient-to-tr from-[#38BDF8]/75 via-[#93C5FD]/50 to-white/35',
    red: 'bg-gradient-to-tr from-[#FF3B4A]/80 via-[#FDA4AF]/60 to-white/40',
  }[color];
  return (
    <motion.div
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.75, 1, 0.75],
      }}
      transition={{
        duration: 7,
        repeat: 1 / 0,
        ease: 'easeInOut',
      }}
      className={`absolute ${positionClass} ${sizeClass} ${colorClass} rounded-full pointer-events-none -z-10 ${className}`}
      aria-hidden="true"
    >
      <div className={`absolute top-1/3 left-1/3 w-1/3 h-1/3 rounded-full ${coreClass} blur-2xl`} />
    </motion.div>
  );
};

export default GlowOrbs;
