import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { expertiseAreas } from '../../data/expertise';
import { useRouter } from '../../lib/router';

const ExpertiseSection = () => {
  const { navigate } = useRouter();
  const renderCard = (area, index) => {
    const Icon = area.icon;
    const isRed = area.accent === 'red';
    return (
      <motion.div
        key={area.title}
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
          duration: 0.5,
          delay: index * 0.08,
          ease: [0.16, 1, 0.3, 1],
        }}
        whileHover={{
          y: -8,
          scale: 1.015,
        }}
        onClick={() => navigate(area.to)}
        className="group relative glossy-card-light sheen-sweep p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between overflow-hidden"
      >
        <div
          className={`absolute -bottom-6 -right-6 w-32 h-32 rounded-tl-[4rem] pointer-events-none transition-all duration-300 group-hover:scale-110 ${isRed ? 'bg-gradient-to-tl from-red-100/60 via-red-50/30 to-transparent' : 'bg-gradient-to-tl from-blue-100/60 via-blue-50/30 to-transparent'}`}
        />
        <div className="relative z-10">
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105 ${isRed ? 'bg-red-50/90 border-red-100 text-[#E71E28]' : 'bg-blue-50/90 border-blue-100 text-[#2563EB]'}`}
            >
              <Icon className="w-6 h-6" strokeWidth={1.8} />
            </div>
            <div className="pt-0.5">
              <h3 className="font-['Sora'] font-bold text-base sm:text-[17px] text-[#0B1528] leading-snug group-hover:text-[#E71E28] transition-colors">
                {area.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-normal mt-1.5 leading-relaxed">
                {area.description}
              </p>
            </div>
          </div>
        </div>
        <div className="relative z-10 pt-6 mt-auto flex items-center justify-between">
          <span className="text-xs sm:text-sm font-['Sora'] font-semibold text-slate-800 group-hover:text-slate-900 transition-colors">
            Learn More
          </span>
          <div
            className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center transition-all duration-200 ${isRed ? 'bg-red-100/70 text-[#E71E28] group-hover:bg-[#E71E28] group-hover:text-white group-hover:translate-x-0.5' : 'bg-blue-100/70 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white group-hover:translate-x-0.5'}`}
          >
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>
      </motion.div>
    );
  };
  return (
    <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-14 relative">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/80 border border-slate-200 text-xs font-bold text-slate-700 tracking-wider uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
              <span>OUR EXPERTISE</span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1528] tracking-tight leading-tight">
              {'Core '}
              <span className="text-[#E71E28]">Capabilities</span>
            </h2>
            <div className="w-12 h-1 bg-[#E71E28] rounded-full mt-3 mb-4" />
            <p className="text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed font-normal">
              End-to-end workforce solutions designed to help businesses hire, train, and grow with
              confidence.
            </p>
          </div>
          <div className="hidden lg:block absolute top-2 right-48 w-28 h-12 bg-[radial-gradient(#93C5FD_2px,transparent_2px)] [background-size:12px_12px] opacity-75 pointer-events-none" />
          <div className="hidden md:block text-right pr-2 shrink-0">
            <span className="font-serif italic text-lg sm:text-xl text-slate-600 font-medium tracking-wide block leading-tight">
              People
              <br />
              Enable
              <br />
              Progress
            </span>
            <div className="w-10 h-0.5 bg-[#E71E28] rounded-full mt-1.5 ml-auto" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseAreas.map((item, index) => renderCard(item, index))}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
