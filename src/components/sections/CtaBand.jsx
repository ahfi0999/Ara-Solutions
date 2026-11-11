import { motion } from 'framer-motion';
import { ArrowRightIcon } from '../icons';
import { useRouter } from '../../lib/router';

const CtaBand = ({ headline, body, bodyClassName, cta, closing, headlineClassName }) => {
  const { navigate } = useRouter();
  return (
    <section className="bg-[#F0F5FD] text-slate-900 py-16 sm:py-24 border-t border-[#DCE8F6] relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-red-100/25 blur-3xl pointer-events-none" />
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[350px] opacity-25 pointer-events-none"
        viewBox="0 0 900 350"
        fill="none"
      >
        <path
          d="M 50 250 C 250 50, 650 50, 850 250"
          stroke="#94A3B8"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <circle cx="250" cy="115" r="4" fill="#2563EB" />
        <circle cx="650" cy="115" r="4.5" fill="#E71E28" />
      </svg>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
          className="max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 mb-5 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
            <span>Ready To Accelerate</span>
          </div>
          <h2
            className={`font-['Sora'] font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#0B1528] tracking-tight leading-tight ${headlineClassName || ''}`}
          >
            {headline}
          </h2>
          {body && (
            <p
              className={`mt-5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-5xl mx-auto ${bodyClassName || ''}`}
            >
              {body}
            </p>
          )}
          <div className="mt-8 sm:mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => navigate(cta.to)}
              className="btn-red-glossy group px-8 py-4 font-['Sora'] font-bold text-base cursor-pointer text-white shadow-lg shadow-red-500/20"
            >
              <span className="relative z-10 flex items-center gap-3">
                <span>{cta.label}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                  <ArrowRightIcon size={16} color="#FFFFFF" />
                </span>
              </span>
            </button>
          </div>
          {closing && (
            <div className="mt-10 pt-8 border-t border-slate-200/80">
              <p className="font-['Sora'] font-semibold text-sm tracking-wider uppercase text-slate-500">
                {closing}
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default CtaBand;
