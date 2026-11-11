import { motion } from 'framer-motion';
import {
  BookOpen,
  Calendar,
  ChartNoAxesColumn,
  CircleCheck,
  Clock,
  FileText,
  Headphones,
  Search,
  Star,
  Users,
} from 'lucide-react';

const ProcessSteps = ({ kicker, headline, subhead, steps, tags }) => {
  const connector = connectorPath(steps.length);
  const gridClass =
    steps.length === 5
      ? 'grid-cols-1 md:grid-cols-3 lg:grid-cols-5'
      : steps.length === 4
        ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
        : 'grid-cols-1 md:grid-cols-3';
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-8 sm:w-10 h-[3px] bg-[#E71E28] rounded-full" />
              <span className="font-['Sora'] font-bold text-xs sm:text-[13px] text-[#E71E28] uppercase tracking-[0.14em]">
                {kicker || 'EXECUTION RIGOR'}
              </span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-[40px] text-[#0B1C44] tracking-tight leading-tight">
              {headline ? (
                headline.includes('RPO Delivery') ? (
                  <>
                    {headline.split('RPO Delivery')[0]}
                    <span className="text-[#E71E28]">RPO Delivery</span>
                    {headline.split('RPO Delivery')[1]}
                  </>
                ) : (
                  headline
                )
              ) : (
                'The 5-Stage RPO Delivery Framework'
              )}
            </h2>
            {subhead && (
              <p className="mt-3 text-slate-500 text-sm sm:text-base font-normal max-w-2xl leading-relaxed">
                {subhead}
              </p>
            )}
          </div>
          <div className="hidden md:flex items-center gap-6 shrink-0 pb-1">
            <div className="flex items-center gap-3">
              <div className="w-[3px] h-11 bg-[#E71E28] rounded-full" />
              <div className="font-['Sora'] text-[11px] font-semibold text-slate-400 tracking-[0.22em] leading-[1.38] uppercase">
                <div>PEOPLE</div>
                <div>PROCESS</div>
                <div>PROGRESS</div>
              </div>
            </div>
            <div className="grid grid-cols-6 gap-2 opacity-35 pl-2" aria-hidden="true">
              {Array.from({
                length: 24,
              }).map((item, index) => (
                <span key={index} className="w-1.5 h-1.5 rounded-full bg-red-400" />
              ))}
            </div>
          </div>
        </div>
        <div className="relative">
          <div
            className="hidden lg:block absolute top-7 left-0 right-0 w-full pointer-events-none z-0 overflow-visible"
            aria-hidden="true"
          >
            <svg
              viewBox="0 0 1000 70"
              className="w-full h-16 overflow-visible"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="stepperWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0B2558" stopOpacity="0.75" />
                  <stop offset="10%" stopColor="#CBD5E1" stopOpacity="0.5" />
                  <stop offset="25%" stopColor="#FCA5A5" stopOpacity="0.8" />
                  <stop offset="50%" stopColor="#CBD5E1" stopOpacity="0.5" />
                  <stop offset="75%" stopColor="#FCA5A5" stopOpacity="0.8" />
                  <stop offset="90%" stopColor="#CBD5E1" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#E71E28" stopOpacity="0.9" />
                </linearGradient>
              </defs>
              <path
                d={connector.d}
                stroke="url(#stepperWaveGradient)"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
              />
              <circle
                cx={connector.startDotX}
                cy={connector.startDotY}
                r="6.5"
                fill="#0B2558"
                className="drop-shadow-xs"
              />
              <circle
                cx={connector.dotX}
                cy={connector.dotY}
                r="6.5"
                fill="#E71E28"
                className="drop-shadow-xs"
              />
            </svg>
          </div>
          <div className={`grid ${gridClass} gap-8 lg:gap-5 relative z-10`}>
            {steps.map((item, index) => {
              const isAccent = index % 2 === 1;
              return (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 28,
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
                    duration: 0.45,
                    delay: index * 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                  }}
                  className="flex flex-col items-center text-center group cursor-default transition-all duration-300"
                >
                  <div className="relative mb-5">
                    <div
                      className={`w-13 h-13 rounded-full flex items-center justify-center font-['Sora'] font-extrabold text-base transition-transform duration-300 group-hover:scale-110 ${isAccent ? 'bg-gradient-to-br from-[#E71E28] to-[#B8141D] text-white shadow-[0_6px_20px_rgba(231,30,40,0.35)] ring-8 ring-red-50/90' : 'bg-gradient-to-br from-[#282870] to-[#204282] text-white shadow-[0_6px_20px_rgba(32,66,130,0.3)] ring-8 ring-blue-50/90'}`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 shadow-2xs transition-transform duration-300 group-hover:scale-110 ${isAccent ? 'bg-red-50/90 text-[#E71E28] border border-red-100/70' : 'bg-blue-50/90 text-[#204282] border border-blue-100/70'}`}
                  >
                    {stepIcon(item.label, index)}
                  </div>
                  <h3 className="font-['Sora'] font-bold text-lg sm:text-xl text-[#0B1C44] tracking-tight mb-2 group-hover:text-[#204282] transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed max-w-[215px] mx-auto min-h-[58px]">
                    {item.description}
                  </p>
                  <div
                    className={`w-8 h-1 rounded-full mt-4 transition-all duration-300 group-hover:w-14 ${isAccent ? 'bg-[#E71E28]' : 'bg-[#204282]'}`}
                  />
                </motion.div>
              );
            })}
          </div>
        </div>
        {tags && tags.length > 0 && (
          <motion.div
            initial={{
              opacity: 0,
              y: 24,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mt-16 sm:mt-20 glossy-card-light sheen-sweep px-6 py-5 sm:px-8 sm:py-6 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5 shrink-0">
              <div className="font-['Sora'] font-extrabold text-sm sm:text-[15px] text-[#0B1C44] tracking-[0.06em] uppercase leading-tight">
                <div>DELIVERY</div>
                <div>STANDARDS</div>
              </div>
              <div className="hidden lg:block w-px h-9 bg-slate-200 shrink-0" aria-hidden="true" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 flex-1">
              {tags.map((item, index) => (
                <div key={index} className="flex items-center gap-3.5 group cursor-default">
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200 group-hover:scale-110 ${index % 2 === 1 ? 'bg-red-50 text-[#E71E28] border-red-100/80 group-hover:bg-[#E71E28] group-hover:text-white' : 'bg-blue-50 text-[#204282] border-blue-100/80 group-hover:bg-[#204282] group-hover:text-white'}`}
                  >
                    {tagIcon(item, index)}
                  </div>
                  <span className="text-xs sm:text-[13.5px] font-['Sora'] font-semibold text-slate-800 leading-snug group-hover:text-[#204282] transition-colors">
                    {item}
                  </span>
                  {index < tags.length - 1 && (
                    <div
                      className="hidden lg:block ml-auto w-px h-8 bg-slate-200/80 shrink-0"
                      aria-hidden="true"
                    />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProcessSteps;

export const stepIcon = (title, index) => {
  const text = title.toLowerCase();
  if (text.includes('plan')) return <FileText className="w-5 h-5" strokeWidth={2.2} />;
  if (text.includes('source')) return <Users className="w-5 h-5" strokeWidth={2.2} />;
  if (text.includes('screen') || text.includes('assess'))
    return <Search className="w-5 h-5" strokeWidth={2.2} />;
  if (text.includes('coordinate') || text.includes('schedule'))
    return <Calendar className="w-5 h-5" strokeWidth={2.2} />;
  if (text.includes('support') || text.includes('engage') || text.includes('connect'))
    return <Headphones className="w-5 h-5" strokeWidth={2.2} />;
  if (text.includes('train')) return <BookOpen className="w-5 h-5" strokeWidth={2.2} />;
  if (text.includes('prepare')) return <CircleCheck className="w-5 h-5" strokeWidth={2.2} />;
  const fallbackIcons = [
    <FileText key={0} className="w-5 h-5" strokeWidth={2.2} />,
    <Users key={1} className="w-5 h-5" strokeWidth={2.2} />,
    <Search key={2} className="w-5 h-5" strokeWidth={2.2} />,
    <Calendar key={3} className="w-5 h-5" strokeWidth={2.2} />,
    <Headphones key={4} className="w-5 h-5" strokeWidth={2.2} />,
  ];
  return fallbackIcons[index % fallbackIcons.length];
};

export const tagIcon = (label, index) => {
  const text = label.toLowerCase();
  return text.includes('recruiter') || text.includes('talent') || text.includes('interview') ? (
    <Users className="w-5 h-5" strokeWidth={2.2} />
  ) : text.includes('sla') || text.includes('time') || text.includes('zone') ? (
    <Clock className="w-5 h-5" strokeWidth={2.2} />
  ) : text.includes('experience') || text.includes('candidate') || text.includes('curriculum') ? (
    <Star className="w-5 h-5 fill-current" strokeWidth={1.5} />
  ) : text.includes('reporting') ||
    text.includes('pipeline') ||
    text.includes('compliance') ||
    text.includes('market') ||
    text.includes('portfolio') ? (
    <ChartNoAxesColumn className="w-5 h-5" strokeWidth={2.2} />
  ) : index % 2 === 1 ? (
    <Clock className="w-5 h-5" strokeWidth={2.2} />
  ) : (
    <Users className="w-5 h-5" strokeWidth={2.2} />
  );
};

export const connectorPath = (count) =>
  count === 5
    ? {
        d: 'M 35 42 C 55 42, 75 28, 100 28 C 140 28, 160 56, 200 56 C 240 56, 260 28, 300 28 C 340 28, 360 56, 400 56 C 440 56, 460 28, 500 28 C 540 28, 560 56, 600 56 C 640 56, 660 28, 700 28 C 740 28, 760 56, 800 56 C 840 56, 860 28, 900 28 C 925 28, 945 42, 965 42',
        startDotX: 35,
        startDotY: 42,
        dotX: 965,
        dotY: 42,
      }
    : {
        d: 'M 40 42 C 65 42, 95 28, 125 28 C 175 28, 200 56, 250 56 C 300 56, 325 28, 375 28 C 425 28, 450 56, 500 56 C 550 56, 575 28, 625 28 C 675 28, 700 56, 750 56 C 800 56, 825 28, 875 28 C 905 28, 935 42, 960 42',
        startDotX: 40,
        startDotY: 42,
        dotX: 960,
        dotY: 42,
      };
