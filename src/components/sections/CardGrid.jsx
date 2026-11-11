import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Briefcase,
  Building2,
  CircleCheck,
  Clock,
  FileCheck,
  Globe,
  Handshake,
  Heart,
  Search,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react';
import OrbitBadge from '../decor/OrbitBadge';
import SideAnnotations from '../decor/SideAnnotations';
import { useRouter } from '../../lib/router';

const CardGrid = ({
  headline,
  cards,
  columns = 3,
  isLight = false,
  kicker,
  noBorderBottom = false,
  className = '',
}) => {
  const { navigate } = useRouter();
  const gridClass = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'sm:grid-cols-2 lg:grid-cols-4',
  }[columns];
  return (
    <section
      className={`relative overflow-hidden ${isLight ? 'py-16 sm:py-20 bg-white text-slate-800' : 'py-16 sm:py-20 bg-[#0B0E1A] text-white'} ${noBorderBottom ? 'pb-8 sm:pb-10' : ''} ${className}`}
    >
      {isLight && (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#204282]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#E71E28]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-white via-white/90 to-transparent pointer-events-none z-10" />
        </>
      )}
      <SideAnnotations position="both" isLight={isLight} />
      <OrbitBadge position="top-right" isLight={isLight} size={150} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {headline && (
          <div className="mb-10 sm:mb-12">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${isLight ? 'bg-[#E71E28]/10 border border-[#E71E28]/30 text-[#E71E28] shadow-xs' : 'bg-[#E71E28]/15 border border-[#E71E28]/40 text-white shadow-sm'}`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
              <span>{kicker || 'Workforce Architecture'}</span>
            </div>
            <h2
              className={`font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl tracking-tight ${isLight ? 'text-slate-900' : 'text-white'}`}
            >
              {headline}
            </h2>
          </div>
        )}
        <div className={`grid grid-cols-1 ${gridClass} gap-6 lg:gap-8`}>
          {cards.map((item, index) => {
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
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.012,
                }}
                className={`group p-6 sm:p-7 flex flex-col justify-between rounded-2xl sheen-sweep ${isLight ? 'glossy-card-light' : 'glossy-card'} ${item.link ? 'cursor-pointer' : ''}`}
                onClick={() => {
                  if (item.link) {
                    navigate(item.link);
                  }
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center text-white transition-transform duration-200 group-hover:scale-110 shadow-sm ${isAccent ? `bg-gradient-to-br from-[#E71E28] to-[#B8141D] ${isLight ? 'border-red-200 shadow-[0_4px_16px_rgba(231,30,40,0.3)]' : 'border-white/20'}` : `bg-gradient-to-br from-[#282870] to-[#224182] ${isLight ? 'border-blue-200 shadow-[0_4px_16px_rgba(32,66,130,0.2)]' : 'border-white/10'}`}`}
                    >
                      {cardIcon(item.icon, '#FFFFFF')}
                    </div>
                    {item.kicker && (
                      <span
                        className={`text-[11px] font-['Sora'] font-semibold tracking-wider uppercase ${isLight ? (isAccent ? 'text-[#E71E28]' : 'text-slate-500') : isAccent ? 'text-white' : 'text-slate-300'}`}
                      >
                        {item.kicker}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-['Sora'] font-bold text-lg leading-snug transition-colors ${isLight ? 'text-slate-900 group-hover:text-[#204282]' : 'text-white group-hover:text-slate-100'}`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-xs sm:text-sm font-normal leading-relaxed ${isLight ? 'text-slate-600' : 'text-slate-300'}`}
                  >
                    {item.description}
                  </p>
                </div>
                {item.link && (
                  <div
                    className={`mt-5 pt-4 border-t flex items-center text-xs font-['Sora'] font-semibold transition-colors ${isLight ? 'border-slate-200 text-slate-800 group-hover:text-[#204282] group-hover:underline' : 'border-[#224182]/30 text-white group-hover:underline'}`}
                  >
                    <span>Learn more</span>
                    <ArrowRight
                      size={14}
                      className="ml-1.5 transition-transform group-hover:translate-x-1 text-[#E71E28]"
                    />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CardGrid;

export const cardIcon = (name, color) => {
  const strokeWidth = 1.75;
  switch (name) {
    case 'heart':
      return <Heart size={20} color={color} strokeWidth={strokeWidth} />;
    case 'briefcase':
      return <Briefcase size={20} color={color} strokeWidth={strokeWidth} />;
    case 'users':
      return <Users size={20} color={color} strokeWidth={strokeWidth} />;
    case 'globe':
      return <Globe size={20} color={color} strokeWidth={strokeWidth} />;
    case 'shield':
      return <ShieldCheck size={20} color={color} strokeWidth={strokeWidth} />;
    case 'trending':
      return <TrendingUp size={20} color={color} strokeWidth={strokeWidth} />;
    case 'handshake':
      return <Handshake size={20} color={color} strokeWidth={strokeWidth} />;
    case 'file-check':
      return <FileCheck size={20} color={color} strokeWidth={strokeWidth} />;
    case 'clock':
      return <Clock size={20} color={color} strokeWidth={strokeWidth} />;
    case 'building':
      return <Building2 size={20} color={color} strokeWidth={strokeWidth} />;
    case 'award':
      return <Award size={20} color={color} strokeWidth={strokeWidth} />;
    case 'search':
      return <Search size={20} color={color} strokeWidth={strokeWidth} />;
    default:
      return <CircleCheck size={20} color={color} strokeWidth={strokeWidth} />;
  }
};
