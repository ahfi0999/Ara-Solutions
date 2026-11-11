import { AnimatePresence, motion } from 'framer-motion';

const NavDropdown = ({
  label,
  items,
  isOpen,
  currentPath,
  onSelect,
  widthClass = 'w-[580px]',
  alignClass = '-left-20 xl:-left-24',
}) => {
  const isLongLabel = label.length > 12;
  return (
    <AnimatePresence>
      {isOpen && (
        <div className={`absolute top-full ${alignClass} pt-2.5 z-50`}>
          <motion.div
            initial={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: -8,
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
            }}
            className={`${widthClass} bg-white border border-slate-200 rounded-[24px] shadow-[0_20px_50px_rgba(15,23,42,0.18)] overflow-hidden flex`}
          >
            <div className="w-20 bg-[#F0F4FF] border-r border-slate-200 flex items-center justify-center shrink-0 py-6 select-none">
              <span
                className={`transform -rotate-90 font-['Sora'] font-bold text-[#111455] uppercase whitespace-nowrap ${isLongLabel ? 'text-xs tracking-[0.22em]' : 'text-base tracking-[0.3em]'}`}
              >
                {label}
              </span>
            </div>
            <div className="flex-1 flex flex-col divide-y divide-slate-200">
              {items.map((item) => {
                const isActive = currentPath === item.path;
                return (
                  <button
                    key={item.path}
                    type="button"
                    onClick={() => onSelect(item.path)}
                    className={`w-full text-left flex items-center justify-between px-6 py-5 cursor-pointer group transition-colors duration-200 ${isActive ? 'bg-[#F0F4FF]/60' : 'hover:bg-[#F8FAFC]'}`}
                  >
                    <div className="flex items-center gap-5 min-w-0">
                      <div className="w-14 h-14 min-w-[56px] min-h-[56px] rounded-full bg-gradient-to-br from-[#E71E28] via-[#E71E28] to-[#B91018] flex items-center justify-center text-white shadow-[0_4px_12px_rgba(231,30,40,0.35)] shrink-0 transition-transform duration-200 group-hover:scale-105">
                        {item.icon}
                      </div>
                      <span className="font-['Sora'] font-bold text-[19px] xl:text-[20px] text-[#111455] whitespace-nowrap tracking-tight">
                        {item.title}
                      </span>
                    </div>
                    <svg
                      className="w-6 h-6 text-[#E71E28] shrink-0 transition-transform duration-200 group-hover:translate-x-1 ml-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                );
              })}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavDropdown;
