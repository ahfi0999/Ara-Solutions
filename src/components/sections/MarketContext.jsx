import { motion } from 'framer-motion';

const MarketContext = ({
  kicker = 'Market Context',
  headlinePrefix = 'Why It ',
  headlineHighlight = 'Matters Now',
  paragraphs = [
    'India’s demand for cybersecurity professionals is approaching a million roles, while the qualified talent pool available to fill them sits at a fraction of that — and the gap is widest in exactly the specialized areas (cloud security, identity and access management, threat intelligence) that pay the most.',
    'Security roles already carry some of the longest hiring cycles in the tech sector, often stretching past 90 days, and the large majority of Indian companies are actively increasing security budgets rather than cutting them.',
  ],
  metrics = [
    {
      icon: 'chart',
      color: 'red',
      title: 'Rising Demand',
      subtitle: '~1 million cybersecurity roles in India',
    },
    {
      icon: 'users',
      color: 'blue',
      title: 'Talent Shortage',
      subtitle: 'Qualified professionals are only a fraction of the demand.',
    },
    {
      icon: 'shield',
      color: 'red',
      title: 'Higher Investment',
      subtitle: 'Most Indian companies are increasing security budgets.',
    },
  ],
  footerAnnotation = 'PEOPLE . PLATFORMS . PROGRESS',
  image,
  imageAlt = 'Technology specialist working in enterprise operations center',
  card1Title,
  card1Icon = 'shield',
  card2Title,
  card2Icon = 'users',
  card3Title,
  card3Icon = 'trending',
}) => (
  <section className="relative py-16 sm:py-20 lg:py-24 bg-[#FFFFFF] border-y border-slate-100 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <motion.div
          initial={{
            opacity: 0,
            x: -24,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.55,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-7 flex flex-col justify-between"
        >
          {kicker && (
            <div className="w-fit inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF1F2] border border-[#FFE4E6] text-xs font-semibold text-slate-700 mb-5 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#E71E28]" />
              <span>{kicker}</span>
            </div>
          )}
          <div>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[46px] leading-[1.15] tracking-tight">
              <span className="text-[#0B1538]">{headlinePrefix}</span>
              <span className="text-[#E71E28]">{headlineHighlight}</span>
            </h2>
            <div className="w-12 h-1 bg-[#E71E28] rounded-full mt-3.5 mb-6" />
          </div>
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {paragraphs.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-7 mt-7 border-t border-slate-100">
              {metrics.map((item, index) => (
                <div key={index} className="flex items-start gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${item.color === 'blue' ? 'bg-[#EEF4FF] border border-[#D5E1F2] text-[#204282]' : 'bg-[#FFF0F2] border border-[#FED7D7] text-[#E71E28]'}`}
                  >
                    {metricIcon(item.icon, 'w-5 h-5')}
                  </div>
                  <div>
                    <div className="font-['Sora'] font-bold text-slate-900 text-sm leading-snug">
                      {item.title}
                    </div>
                    <div className="text-xs text-slate-500 leading-snug mt-1">{item.subtitle}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {footerAnnotation && (
            <div className="flex items-center gap-4 pt-10 text-xs font-semibold tracking-[0.22em] text-slate-400 font-['Sora'] uppercase">
              <span className="w-12 h-0.5 bg-[#E71E28] shrink-0" />
              <span>{footerAnnotation}</span>
            </div>
          )}
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: 24,
            scale: 0.98,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="lg:col-span-5 relative mt-6 lg:mt-0"
        >
          <div className="absolute -top-7 -left-7 sm:-top-9 sm:-left-9 z-0 pointer-events-none select-none opacity-70">
            <div className="grid grid-cols-6 gap-2.5">
              {Array.from({
                length: 36,
              }).map((item, index) => (
                <span key={index} className="w-1.5 h-1.5 rounded-full bg-slate-300" />
              ))}
            </div>
          </div>
          <svg
            className="absolute -top-12 -right-8 sm:-top-14 sm:-right-10 w-[300px] sm:w-[380px] h-[380px] pointer-events-none z-0 overflow-visible"
            viewBox="0 0 380 380"
            fill="none"
          >
            <path
              d="M 50 35 C 190 25, 340 70, 340 280"
              stroke="#E71E28"
              strokeWidth="1.75"
              strokeOpacity="0.85"
              fill="none"
            />
            <circle cx="125" cy="32" r="5" fill="#E71E28" />
            <circle cx="285" cy="95" r="5.5" fill="#E71E28" />
            <circle cx="340" cy="235" r="4.5" fill="#E71E28" />
          </svg>
          <div className="relative z-10">
            <div className="relative rounded-[28px] sm:rounded-[32px] overflow-hidden border border-slate-200/90 shadow-[0_20px_50px_rgba(11,21,56,0.14)] bg-slate-950">
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#E71E28]/70 to-[#E71E28] z-10" />
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                className="w-full h-auto aspect-4/3 sm:aspect-16/11 object-cover object-center"
              />
            </div>
            {card1Title && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.15,
                  duration: 0.4,
                }}
                className="absolute top-6 sm:top-8 -left-3 sm:-left-8 lg:-left-9 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-4.5 sm:py-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] border border-slate-100 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF0F2] text-[#E71E28] flex items-center justify-center shrink-0 border border-[#FED7D7]/60">
                  {metricIcon(card1Icon, 'w-5 h-5')}
                </div>
                <div>
                  <div className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1538] leading-snug">
                    {card1Title}
                  </div>
                  <div className="w-7 h-0.5 bg-[#E71E28] rounded-full mt-2" />
                </div>
              </motion.div>
            )}
            {card2Title && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: 14,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.25,
                  duration: 0.4,
                }}
                className="absolute top-1/2 -translate-y-1/2 -right-3 sm:-right-8 lg:-right-10 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-4.5 sm:py-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] border border-slate-100 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF0F2] text-[#E71E28] flex items-center justify-center shrink-0 border border-[#FED7D7]/60">
                  {metricIcon(card2Icon, 'w-5 h-5')}
                </div>
                <div>
                  <div className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1538] leading-snug">
                    {card2Title}
                  </div>
                  <div className="w-7 h-0.5 bg-[#E71E28] rounded-full mt-2" />
                </div>
              </motion.div>
            )}
            {card3Title && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: -14,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.35,
                  duration: 0.4,
                }}
                className="absolute -bottom-4 sm:-bottom-5 right-2 sm:-right-4 lg:-right-6 z-20 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 sm:px-4.5 sm:py-3.5 shadow-[0_12px_32px_rgba(15,23,42,0.12)] border border-slate-100 flex items-start gap-3"
              >
                <div className="w-10 h-10 rounded-full bg-[#FFF0F2] text-[#E71E28] flex items-center justify-center shrink-0 border border-[#FED7D7]/60">
                  {metricIcon(card3Icon, 'w-5 h-5')}
                </div>
                <div>
                  <div className="font-['Sora'] font-bold text-xs sm:text-sm text-[#0B1538] leading-snug">
                    {card3Title}
                  </div>
                  <div className="w-7 h-0.5 bg-[#E71E28] rounded-full mt-2" />
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MarketContext;

export const metricIcon = (name, className = 'w-5 h-5') => {
  switch (name) {
    case 'chart':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M18 20V10" />
          <path d="M12 20V4" />
          <path d="M6 20v-6" />
        </svg>
      );
    case 'users':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
    case 'shield':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="M12 8v6M9 11h6" />
        </svg>
      );
    case 'trending':
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M3 3v18h18" />
          <path d="m19 9-5 5-4-4-3 3" />
          <path d="M19 5v4h-4" />
        </svg>
      );
    default:
      return (
        <svg
          className={className}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
};
