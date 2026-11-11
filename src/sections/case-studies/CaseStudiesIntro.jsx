import { ArrowRight, ChartColumn, Target, Users } from 'lucide-react';
import { images } from '../../data/images';

const CaseStudiesIntro = () => (
  <section className="relative py-16 sm:py-24 bg-[#F0F5FD] overflow-hidden border-t border-[#DCE7F5]">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <div className="mb-4">
            <span className="text-xs font-['Sora'] font-bold text-[#E71E28] tracking-widest uppercase block">
              APPROACH
            </span>
            <div className="w-12 h-1 bg-[#E71E28] rounded-full mt-2" />
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1528] tracking-tight leading-[1.18] mb-5">
            Anyone can claim{' '}
            <span className="text-[#E71E28] block sm:inline">“right talent, right model.”</span> Not everyone
            can show it.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal mb-8 max-w-xl">
            We believe the best proof of our approach is how it works under real business conditions — real
            timelines, real skill constraints, and real organizational stakes. Here you'll find case studies
            from our client engagements, giving you a clear, honest look at the challenges we take on and how
            we resolve them.
          </p>
          <div className="mb-10">
            <button
              type="button"
              onClick={() => {
                const target = document.getElementById('case-studies-content');
                if (target) {
                  target.scrollIntoView({
                    behavior: 'smooth',
                  });
                }
              }}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0B1528] hover:bg-[#1E293B] text-white font-['Sora'] font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg group cursor-pointer"
            >
              <span>Explore Case Studies</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-6 border-t border-slate-100">
            <div className="flex items-center gap-3.5 sm:pr-3 sm:border-r sm:border-slate-200/80">
              <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 text-[#E71E28] flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-['Sora'] font-bold text-sm text-[#0B1528] leading-tight">
                  Real
                  <br />
                  Challenges
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-3.5 sm:px-3 sm:border-r sm:border-slate-200/80">
              <div className="w-11 h-11 rounded-2xl bg-blue-50 border border-blue-100 text-[#2563EB] flex items-center justify-center shrink-0">
                <ChartColumn className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-['Sora'] font-bold text-sm text-[#0B1528] leading-tight">
                  Practical
                  <br />
                  Solutions
                </h4>
              </div>
            </div>
            <div className="flex items-center gap-3.5 sm:pl-3">
              <div className="w-11 h-11 rounded-2xl bg-red-50 border border-red-100 text-[#E71E28] flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" strokeWidth={2} />
              </div>
              <div>
                <h4 className="font-['Sora'] font-bold text-sm text-[#0B1528] leading-tight">
                  Measurable
                  <br />
                  Results
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 xl:col-span-6 relative">
          <div className="relative mx-auto max-w-[490px]">
            <div className="absolute -bottom-8 -left-8 w-28 h-12 bg-[radial-gradient(#93C5FD_2px,transparent_2px)] [background-size:10px_10px] opacity-75 pointer-events-none z-0" />
            <svg
              className="absolute -top-7 -right-5 w-48 h-36 pointer-events-none z-10 overflow-visible"
              viewBox="0 0 180 120"
              fill="none"
            >
              <path d="M 10 90 C 35 15, 140 10, 160 85" stroke="#E71E28" strokeWidth="1.5" />
              <circle cx="160" cy="85" r="5" fill="#E71E28" />
            </svg>
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 bg-slate-50 z-10">
              <img
                src={images.casestudiesClientSuccess}
                alt="Enterprise collaboration on workforce deliverables"
                className="w-full h-[330px] sm:h-[410px] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudiesIntro;
