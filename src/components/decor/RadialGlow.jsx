import { motion } from 'framer-motion';

const RadialGlow = ({ color = 'navy', position = 'top-right', className = '' }) => {
  const gradient =
    color === 'navy'
      ? 'radial-gradient(circle, rgba(15,42,96,0.12) 0%, rgba(15,42,96,0.02) 60%, transparent 75%)'
      : 'radial-gradient(circle, rgba(225,31,50,0.10) 0%, rgba(225,31,50,0.02) 60%, transparent 75%)';
  const positionClass = {
    'top-left': '-top-24 -left-24 sm:-top-32 sm:-left-32',
    'top-right': '-top-24 -right-24 sm:-top-32 sm:-right-32',
    'bottom-left': '-bottom-24 -left-24 sm:-bottom-32 sm:-left-32',
    'bottom-right': '-bottom-24 -right-24 sm:-bottom-32 sm:-right-32',
    'center-right': 'top-1/2 -right-20 -translate-y-1/2',
  }[position];
  return (
    <div
      className={`absolute pointer-events-none overflow-hidden z-0 ${positionClass} ${className}`}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          x: [0, 15, -10, 0],
          y: [0, -12, 14, 0],
        }}
        transition={{
          duration: color === 'navy' ? 9 : 7,
          repeat: 1 / 0,
          ease: 'easeInOut',
        }}
        className="w-[320px] h-[320px] sm:w-[480px] sm:h-[480px] rounded-full filter blur-[70px] opacity-80"
        style={{
          background: gradient,
        }}
      />
    </div>
  );
};

export default RadialGlow;
