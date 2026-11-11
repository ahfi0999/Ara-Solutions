import { motion } from 'framer-motion';

const CareerPaths = ({
  kicker = 'CAREER PATHS',
  headlinePrefix = 'Where ',
  headlineHighlight = 'This Leads',
  subhead = 'Explore some of the key roles that open up through this track and be part of a future-ready technology ecosystem.',
  roles = [],
}) => {
  const allRoles = roles;
  const topRoles = allRoles.slice(0, 3);
  const wideRoles = allRoles.slice(3, 5);
  const roleIcon = (name) => {
    switch (name) {
      case 'chip':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="5" y="5" width="14" height="14" rx="2" />
            <rect x="9" y="9" width="6" height="6" />
            <line x1="9" y1="1" x2="9" y2="5" />
            <line x1="15" y1="1" x2="15" y2="5" />
            <line x1="9" y1="19" x2="9" y2="23" />
            <line x1="15" y1="19" x2="15" y2="23" />
            <line x1="19" y1="9" x2="23" y2="9" />
            <line x1="19" y1="15" x2="23" y2="15" />
            <line x1="1" y1="9" x2="5" y2="9" />
            <line x1="1" y1="15" x2="5" y2="15" />
          </svg>
        );
      case 'brain':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9.5 3A2.5 2.5 0 0 1 12 5.5v13a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-4.54z" />
            <path d="M14.5 3A2.5 2.5 0 0 0 12 5.5v13a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-4.54z" />
            <circle cx="8" cy="10" r="1" fill="currentColor" />
            <circle cx="16" cy="10" r="1" fill="currentColor" />
            <circle cx="8" cy="15" r="1" fill="currentColor" />
            <circle cx="16" cy="15" r="1" fill="currentColor" />
          </svg>
        );
      case 'trend-chart':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 20h18" />
            <rect x="5" y="13" width="3" height="7" rx="0.5" fill="currentColor" fillOpacity="0.2" />
            <rect x="10.5" y="9" width="3" height="11" rx="0.5" fill="currentColor" fillOpacity="0.2" />
            <rect x="16" y="5" width="3" height="15" rx="0.5" fill="currentColor" fillOpacity="0.2" />
            <polyline points="5 12 10.5 7 18 3" />
            <polyline points="14 3 18 3 18 7" />
          </svg>
        );
      case 'code':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        );
      case 'shield':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            <polyline points="9 12 11 14 15 10" />
          </svg>
        );
      case 'gear':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="3" />
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
          </svg>
        );
      case 'users':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        );
      case 'file-search':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="8" y1="12" x2="12" y2="12" />
            <line x1="8" y1="16" x2="11" y2="16" />
            <circle cx="15.5" cy="15.5" r="2.5" />
            <line x1="17.3" y1="17.3" x2="20" y2="20" />
          </svg>
        );
      case 'cloud':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
          </svg>
        );
      case 'server':
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="3" width="18" height="5" rx="2" />
            <circle cx="7" cy="5.5" r="0.75" fill="currentColor" />
            <rect x="3" y="9.5" width="18" height="5" rx="2" />
            <circle cx="7" cy="12" r="0.75" fill="currentColor" />
            <rect x="3" y="16" width="18" height="5" rx="2" />
            <circle cx="7" cy="18.5" r="0.75" fill="currentColor" />
          </svg>
        );
      default:
        return (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 20V7" />
            <path d="M12 20V11" />
            <path d="M6 20v-5" />
          </svg>
        );
    }
  };
  const renderRole = (role, order, wide = false) => {
    const isPink = role.cornerAccent ? role.cornerAccent === 'pink' : role.badgeColor === 'red';
    return (
      <motion.div
        key={role.title}
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          delay: order * 0.08,
          duration: 0.5,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="group relative bg-white rounded-[24px] sm:rounded-[28px] border border-slate-100 shadow-[0_10px_32px_rgba(15,23,42,0.06)] overflow-hidden flex flex-col hover:shadow-[0_18px_42px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 transition-all duration-300"
      >
        <div
          className={`relative ${wide ? 'aspect-[16/7.5] sm:aspect-[16/7.5]' : 'aspect-[16/10] sm:aspect-[16/10]'} w-full overflow-hidden bg-slate-900`}
        >
          <img
            src={role.image}
            alt={role.title}
            loading="lazy"
            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
          {role.imageOverlay?.text && (
            <div
              className={`absolute top-4 ${role.imageOverlay.position === 'top-left' ? 'left-6 text-left' : 'right-6 text-right'} pointer-events-none select-none`}
            >
              <div className="font-['Sora'] font-bold text-sm sm:text-[15px] text-[#1E293B] leading-snug drop-shadow-xs">
                {role.imageOverlay.text.map((item, index) => (
                  <div key={index}>{item}</div>
                ))}
              </div>
              {role.imageOverlay.hasUnderline && (
                <div
                  className={`w-5 h-[2.5px] bg-[#E71E28] rounded-full mt-1.5 ${role.imageOverlay.position === 'top-left' ? 'mr-auto' : 'ml-auto'}`}
                />
              )}
            </div>
          )}
        </div>
        <div className="relative p-6 sm:p-7 pt-11 sm:pt-12 pb-7 flex-1 flex flex-col justify-start">
          <div
            className={`absolute -bottom-10 -right-10 w-28 h-28 rounded-full pointer-events-none select-none z-0 ${isPink ? 'bg-[#FFF0F2]' : 'bg-[#EEF4FF]'}`}
          />
          <div className="absolute -top-7 left-6 sm:left-7 z-20">
            <div
              className={`w-14 h-14 rounded-full border-[3.5px] border-white shadow-[0_6px_20px_rgba(15,23,42,0.1)] flex items-center justify-center transition-transform duration-300 group-hover:scale-108 ${role.badgeColor === 'blue' ? 'bg-[#EEF4FF] text-[#204282]' : 'bg-[#FFF0F2] text-[#E71E28]'}`}
            >
              {roleIcon(role.icon)}
            </div>
          </div>
          <h3 className="relative z-10 font-['Sora'] font-bold text-base sm:text-[19px] text-[#0B1538] leading-snug group-hover:text-[#204282] transition-colors">
            {role.title}
          </h3>
          <p className="relative z-10 text-xs sm:text-[14px] text-[#64748B] mt-2 leading-relaxed font-normal">
            {role.description}
          </p>
          <div className="relative z-10 w-8 h-[3.5px] bg-[#E71E28] rounded-full mt-4" />
        </div>
      </motion.div>
    );
  };
  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-t border-slate-100 overflow-hidden">
      <div className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full bg-[#FFF0F2] pointer-events-none opacity-90 z-0" />
      <div className="absolute -bottom-28 -right-28 w-[380px] h-[380px] rounded-full bg-[#FFF0F2] pointer-events-none opacity-85 z-0" />
      <svg
        className="absolute top-0 right-0 h-full w-56 sm:w-72 lg:w-96 pointer-events-none select-none overflow-visible z-0 opacity-85"
        viewBox="0 0 380 900"
        fill="none"
      >
        <path
          d="M 380 90 C 240 180, 240 380, 380 520"
          stroke="#E71E28"
          strokeWidth="1.2"
          strokeOpacity="0.45"
          fill="none"
        />
        <path
          d="M 380 200 C 210 360, 210 650, 380 880"
          stroke="#E71E28"
          strokeWidth="1.3"
          strokeOpacity="0.55"
          fill="none"
        />
        <circle cx="275" cy="235" r="4.5" fill="#E71E28" />
        <circle cx="275" cy="235" r="9" stroke="#E71E28" strokeWidth="1" strokeOpacity="0.3" fill="none" />
        <circle cx="242" cy="725" r="4.5" fill="#E71E28" />
        <circle cx="242" cy="725" r="9" stroke="#E71E28" strokeWidth="1" strokeOpacity="0.3" fill="none" />
      </svg>
      <div className="absolute top-8 right-1/4 sm:right-[32%] pointer-events-none select-none z-0 opacity-70 hidden xl:block">
        <div className="grid grid-cols-7 gap-3.5">
          {Array.from({
            length: 28,
          }).map((item, index) => (
            <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-8 left-4 sm:left-8 lg:left-14 pointer-events-none select-none z-0 opacity-70 hidden sm:block">
        <div className="grid grid-cols-7 gap-3.5">
          {Array.from({
            length: 28,
          }).map((item, index) => (
            <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          ))}
        </div>
      </div>
      <div className="absolute bottom-12 right-6 sm:right-10 pointer-events-none select-none z-0 opacity-70 hidden lg:block">
        <div className="grid grid-cols-7 gap-3.5">
          {Array.from({
            length: 28,
          }).map((item, index) => (
            <span key={index} className="w-1.5 h-1.5 rounded-full bg-[#CBD5E1]" />
          ))}
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-12 sm:mb-14">
          <div className="max-w-xl">
            <div className="flex items-center gap-3 mb-3">
              <span className="w-9 h-[3px] bg-[#E71E28] rounded-full inline-block" />
              <span className="font-['Sora'] text-xs sm:text-sm font-bold tracking-[0.2em] text-[#475569] uppercase">
                {kicker}
              </span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[48px] leading-[1.12] tracking-tight">
              <span className="text-[#0B1538]">{headlinePrefix}</span>
              <span className="text-[#E71E28]">{headlineHighlight}</span>
            </h2>
            <p className="text-[#475569] text-sm sm:text-base lg:text-[17px] font-normal leading-relaxed mt-3.5">
              {subhead}
            </p>
          </div>
          <div className="hidden lg:flex flex-col items-start shrink-0 pt-1">
            <div className="flex items-start gap-3">
              <div className="w-[2.5px] h-11 bg-[#E71E28] rounded-full shrink-0 mt-0.5" />
              <div className="font-['Sora'] text-[11px] font-bold tracking-[0.24em] text-[#1E293B] leading-[1.35] uppercase">
                <div>PEOPLE</div>
                <div>PLATFORMS</div>
                <div>PROGRESS</div>
              </div>
            </div>
            <div className="mt-4 pl-3.5">
              <div className="font-['Sora'] text-sm font-medium text-[#475569] leading-snug">
                Build
                <br />
                What's Next
              </div>
              <div className="w-8 h-[2px] bg-[#E71E28] rounded-full mt-2" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {topRoles.map((item, index) => renderRole(item, index, false))}
        </div>
        {wideRoles.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-7 mt-6 sm:mt-7">
            {wideRoles.map((item, index) => renderRole(item, index + 3, true))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CareerPaths;
