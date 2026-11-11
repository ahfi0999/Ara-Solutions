import { ChartColumn, Clock, Users } from 'lucide-react';
import { images } from '../../data/images';

const WhyProcessMatters = () => (
  <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100/90 border border-slate-200 text-xs font-bold text-slate-700 tracking-wider uppercase mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
            <span>WHY IT MATTERS</span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1528] tracking-tight leading-[1.15] mb-3">
            {'A bad process costs more than a '}
            <span className="text-[#E71E28]">slow one</span>
          </h2>
          <div className="w-12 h-1 bg-[#E71E28] rounded-full mb-6" />
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 sm:mb-10">
            <p>
              Every failed hire has a cost that rarely shows up on the recruitment invoice — lost project
              momentum, team frustration, and the time spent starting the search all over again.
            </p>
            <p>
              ARA Solutions works from a simple conviction: a well-structured recruitment{' '}
              <span className="font-semibold text-slate-800">process</span>
              {' protects your'} <span className="font-semibold text-slate-800">business</span>
              {' from'} <span className="font-semibold text-slate-800">bad hires</span>, keeps candidates
              engaged, and produces outcomes both sides can stand behind.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-slate-100">
            <div className="flex items-start gap-3 sm:pr-3 sm:border-r sm:border-slate-200/80">
              <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100/80 text-[#E71E28] flex items-center justify-center shrink-0">
                <ChartColumn className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Sora'] font-bold text-sm text-[#0B1528] leading-tight">
                  Lower Hiring Costs
                </h4>
                <p className="text-xs text-slate-500 font-normal mt-1 leading-snug">
                  Reduce rework and replacement costs.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:px-2 sm:border-r sm:border-slate-200/80">
              <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100/80 text-[#E71E28] flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Sora'] font-bold text-sm text-[#0B1528] leading-tight">
                  Faster Productivity
                </h4>
                <p className="text-xs text-slate-500 font-normal mt-1 leading-snug">
                  Get the right people on board sooner.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 sm:pl-2">
              <div className="w-10 h-10 rounded-2xl bg-red-50 border border-red-100/80 text-[#E71E28] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-['Sora'] font-bold text-sm text-[#0B1528] leading-tight">
                  Stronger Teams
                </h4>
                <p className="text-xs text-slate-500 font-normal mt-1 leading-snug">
                  Higher retention and better outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div className="relative mx-auto max-w-[480px]">
            <div className="absolute -top-7 left-12 w-28 h-10 bg-[radial-gradient(#93C5FD_2px,transparent_2px)] [background-size:10px_10px] opacity-75 pointer-events-none z-0" />
            <svg
              className="absolute -top-8 -right-4 w-48 h-36 pointer-events-none z-10 overflow-visible"
              viewBox="0 0 180 120"
              fill="none"
            >
              <path d="M 20 80 C 40 10, 140 10, 160 90" stroke="#E71E28" strokeWidth="1.5" />
              <circle cx="95" cy="22" r="5" fill="#E71E28" />
              <circle cx="160" cy="88" r="4.5" fill="#E71E28" />
            </svg>
            <div className="absolute -bottom-8 -right-2 sm:-bottom-10 sm:right-0 z-20 pointer-events-none text-right">
              <span className="font-serif italic text-base sm:text-lg text-slate-500 font-medium leading-tight block">
                Right People
                <br />
                Brighter
                <br />
                Tomorrow
              </span>
              <div className="w-10 h-0.5 bg-[#E71E28] rounded-full mt-1.5 ml-auto" />
            </div>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 bg-slate-50 z-10">
              <img
                src={images.approachTalentVetting}
                alt="Senior recruiter conducting rigorous talent vetting and qualification"
                className="w-full h-[330px] sm:h-[410px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default WhyProcessMatters;
