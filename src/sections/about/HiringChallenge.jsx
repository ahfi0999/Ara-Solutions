import { Handshake, Target, UsersRound } from 'lucide-react';
import { images } from '../../data/images';

const HiringChallenge = () => (
  <section className="relative py-16 sm:py-24 bg-white overflow-hidden border-t border-slate-100">
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <svg
        className="absolute -top-12 right-0 w-[550px] h-[350px] opacity-40"
        viewBox="0 0 550 350"
        fill="none"
      >
        <path
          d="M 50 250 C 180 80, 420 60, 540 180"
          stroke="#94A3B8"
          strokeWidth="1.5"
          strokeDasharray="4 4"
        />
      </svg>
      <div className="absolute top-20 right-[42%] w-2.5 h-2.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_rgba(231,30,40,0.6)]" />
      <div className="absolute top-36 right-[12%] w-2.5 h-2.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_rgba(231,30,40,0.6)]" />
      <div className="absolute top-1/2 right-[10%] w-2 h-2 rounded-full bg-[#2563EB]" />
      <svg
        className="absolute -bottom-16 -right-16 w-[420px] h-[420px] opacity-45"
        viewBox="0 0 400 400"
        fill="none"
      >
        <g stroke="#CBD5E1" strokeWidth="0.8">
          <line x1="160" y1="260" x2="230" y2="300" />
          <line x1="230" y1="300" x2="310" y2="280" />
          <line x1="230" y1="300" x2="260" y2="370" />
          <line x1="310" y1="280" x2="370" y2="340" />
          <line x1="260" y1="370" x2="370" y2="340" />
          <line x1="160" y1="260" x2="190" y2="350" />
          <line x1="190" y1="350" x2="260" y2="370" />
          <line x1="310" y1="280" x2="360" y2="230" />
          <line x1="230" y1="300" x2="290" y2="210" />
          <line x1="290" y1="210" x2="360" y2="230" />
        </g>
        <circle cx="160" cy="260" r="3.5" fill="#2563EB" />
        <circle cx="230" cy="300" r="4.5" fill="#E71E28" />
        <circle cx="310" cy="280" r="4" fill="#E71E28" />
        <circle cx="260" cy="370" r="3.5" fill="#2563EB" />
        <circle cx="370" cy="340" r="3.5" fill="#94A3B8" />
        <circle cx="190" cy="350" r="3" fill="#94A3B8" />
        <circle cx="360" cy="230" r="3" fill="#2563EB" />
        <circle cx="290" cy="210" r="3" fill="#94A3B8" />
      </svg>
    </div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
            <span>The Hiring Challenge</span>
          </div>
          <h2 className="font-['Sora'] font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-[#0B1528] tracking-tight leading-[1.18] mb-6">
            Hiring is getting harder to get right, <span className="text-[#E71E28]">not easier</span>
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            <p>
              The problem in modern recruitment is rarely a lack of candidates. Job boards and automated
              platforms have made it easier than ever to generate volume. The real challenge is finding
              professionals with the right technical capability, the right operational context, and the right
              timeline — and managing the process so both sides make confident decisions.
            </p>
            <p>
              That requires more than an algorithm. It requires human discernment, market context, and a
              partner who stays accountable through joining, not just through the resume submission.
            </p>
          </div>
          <div className="w-10 h-1 bg-[#E71E28] rounded-full mt-6 mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
                <UsersRound className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-['Sora'] font-bold text-slate-900 leading-tight">Quality</div>
                <div className="text-xs font-medium text-slate-500 leading-tight">over Quantity</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-[#2563EB] shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-['Sora'] font-bold text-slate-900 leading-tight">
                  Right Talent
                </div>
                <div className="text-xs font-medium text-slate-500 leading-tight">Right Context</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center text-[#E71E28] shrink-0">
                <Handshake className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-['Sora'] font-bold text-slate-900 leading-tight">
                  Accountability
                </div>
                <div className="text-xs font-medium text-slate-500 leading-tight">Till Joining</div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-6 relative mt-6 lg:mt-0">
          <div className="text-right mb-4 pr-4 sm:pr-8">
            <span className="font-serif italic text-base sm:text-lg text-slate-600 font-medium tracking-wide">
              People
              <br />
              Technology
              <br />
              Growth
            </span>
            <div className="w-10 h-0.5 bg-[#E71E28] rounded-full mt-1.5 ml-auto" />
          </div>
          <div className="relative mx-auto max-w-[520px]">
            <div className="relative rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(15,23,42,0.1)] border border-slate-100 bg-slate-50 group">
              <img
                src={images.aboutHiringChallenge}
                alt="Talent acquisition consultant conducting structured candidate evaluation interview"
                className="w-full h-[320px] sm:h-[400px] object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-103"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HiringChallenge;
