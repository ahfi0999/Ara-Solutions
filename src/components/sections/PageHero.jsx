import { motion } from 'framer-motion';
import { ArrowRight, PhoneCall, ShieldCheck, Sparkles, UsersRound } from 'lucide-react';
import AmbientBackdrop from '../decor/AmbientBackdrop';
import HeroGlow from '../decor/HeroGlow';
import HubDiagram from '../decor/HubDiagram';
import RadialGlow from '../decor/RadialGlow';
import SideRails from '../decor/SideRails';
import TechPattern from '../decor/TechPattern';
import WaveDivider from '../decor/WaveDivider';
import { ArrowRightIcon } from '../icons';
import CountUp from '../ui/CountUp';
import { images } from '../../data/images';
import { useRouter } from '../../lib/router';

const PageHero = ({
  variant,
  headline,
  subhead,
  primaryCTA,
  secondaryCTA,
  photos,
  sidePhoto,
  badge = 'Enterprise Workforce Excellence',
  backgroundImage,
  techVariant = 'circuit',
  highlightCards,
  hasWaveBottom = false,
  headlineClassName,
}) => {
  const { navigate } = useRouter();
  if (variant === 'page')
    return (
      <header
        className={`relative bg-[#071122] text-white overflow-hidden pt-28 sm:pt-36 ${hasWaveBottom ? 'pb-24 sm:pb-32' : 'pb-16 sm:pb-24 border-b border-white/10'} min-h-[520px] flex flex-col justify-center`}
      >
        {backgroundImage && (
          <div
            className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat pointer-events-none"
            style={{
              backgroundImage: `url('${backgroundImage}')`,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#071122]/95 via-[#071122]/80 to-[#071122]/40 lg:from-[#071122]/92 lg:via-[#071122]/70 lg:to-transparent/20" />
            <div className="absolute inset-0 bg-[#204282]/20 mix-blend-color-dodge" />
            <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-[#071122] via-[#071122]/80 to-transparent" />
          </div>
        )}
        <AmbientBackdrop />
        <SideRails position="both" />
        <TechPattern variant={techVariant} hasRedAccent={true} />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div
            className={`grid grid-cols-1 ${sidePhoto ? 'lg:grid-cols-12 gap-8 lg:gap-12 items-center' : ''}`}
          >
            <div
              className={sidePhoto ? 'lg:col-span-7' : 'max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl'}
            >
              <HeroGlow color="blue" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E71E28]/15 border border-[#E71E28]/40 text-xs font-semibold text-white mb-5 shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[#E71E28] animate-pulse" />
                <span>{badge}</span>
              </div>
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                }}
                className={`font-['Sora'] font-bold text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-[1.15] drop-shadow-sm ${headlineClassName || ''}`}
              >
                {headline}
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.1,
                }}
                className="mt-5 text-base sm:text-lg text-slate-200 font-normal leading-relaxed drop-shadow-sm max-w-2xl"
              >
                {subhead}
              </motion.p>
              {primaryCTA && (
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    type="button"
                    onClick={() => navigate(primaryCTA.to)}
                    className="group inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-[#E71E28] to-[#B8141D] hover:from-[#B8141D] hover:to-[#E71E28] text-white font-['Sora'] font-bold text-sm rounded-full transition-all duration-200 cursor-pointer shadow-[0_10px_35px_rgba(231,30,40,0.45)] hover:shadow-[0_14px_45px_rgba(231,30,40,0.65)] hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>{primaryCTA.label}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                  {secondaryCTA && (
                    <button
                      type="button"
                      onClick={() => navigate(secondaryCTA.to)}
                      className="inline-flex items-center gap-2 px-6 py-4 text-slate-200 hover:text-white border border-white/25 hover:border-white text-sm font-['Sora'] font-medium rounded-full backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-200 cursor-pointer"
                    >
                      <span>{secondaryCTA.label}</span>
                    </button>
                  )}
                </div>
              )}
            </div>
            {sidePhoto && (
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.15,
                }}
                className="lg:col-span-5 relative mt-8 lg:mt-0"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl group bg-[#0B0E1A]">
                  <img
                    src={sidePhoto}
                    alt="ARA Solutions workforce leadership and culture"
                    className="w-full h-80 sm:h-96 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071122]/90 via-[#071122]/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#E71E28] text-white text-xs font-['Sora'] font-bold rounded-full tracking-wider uppercase shadow-md">
                      <Sparkles className="w-3 h-3" />
                      Hyderabad Global Hub
                    </span>
                    <span className="text-[11px] font-semibold text-slate-300">Active Delivery</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
          {highlightCards && highlightCards.length > 0 && (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.55,
                ease: 'easeOut',
                delay: 0.2,
              }}
              className="mt-12 pt-8 border-t border-white/10"
            >
              <div
                className={`grid gap-4 sm:gap-6 ${highlightCards.length === 1 ? 'grid-cols-1' : highlightCards.length === 2 ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1 md:grid-cols-3'}`}
              >
                {highlightCards.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl p-5 sm:p-6 backdrop-blur-xl bg-gradient-to-br from-[#282870]/60 via-[#204282]/40 to-[#0B0E1A]/80 border border-white/15 hover:border-[#204282]/80 shadow-[0_10px_30px_rgba(11,14,26,0.8)] transition-all group flex flex-col justify-between h-full"
                  >
                    <div>
                      {item.avatars && item.avatars.length > 0 && (
                        <div className="flex items-center -space-x-2.5 mb-3.5">
                          {item.avatars.map((entry, entryIndex) => (
                            <img
                              key={entryIndex}
                              className="inline-block h-8 w-8 rounded-full ring-2 ring-[#0B0E1A] object-cover"
                              src={entry}
                              alt="Team Member"
                            />
                          ))}
                          <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gradient-to-br from-[#E71E28] to-[#B8141D] text-white font-bold text-xs ring-2 ring-[#0B0E1A]">
                            +
                          </div>
                        </div>
                      )}
                      {item.metric !== undefined && (
                        <div className="mb-4">
                          <div className="font-['Sora'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none whitespace-nowrap">
                            {typeof item.metric === 'number' ? (
                              <CountUp end={item.metric} suffix={item.metricSuffix || '+'} />
                            ) : (
                              `${item.metric}${item.metricSuffix || ''}`
                            )}
                          </div>
                          {item.subtitle && (
                            <div className="text-xs sm:text-[13px] font-['Sora'] font-medium text-slate-300 mt-2 leading-snug">
                              {item.subtitle}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                    <div className="pt-3.5 border-t border-white/10 mt-auto">
                      <div className="text-sm font-['Sora'] font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#E71E28] shrink-0 shadow-[0_0_8px_rgba(231,30,40,0.8)]" />
                        <span>{item.title}</span>
                      </div>
                      {item.description && (
                        <p className="mt-2 text-xs text-slate-300/90 leading-relaxed">{item.description}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        {hasWaveBottom && <WaveDivider position="bottom" />}
      </header>
    );
  const defaultPhotos = [images.heroStaffing1, images.heroStaffing2];
  const heroPhotos = photos && photos.length >= 2 ? photos : defaultPhotos;
  const headlineLines =
    typeof headline === 'string'
      ? headline
          .split('.')
          .filter(Boolean)
          .map((item) => item.trim() + '.')
      : [headline];
  return (
    <section className="relative bg-[#FFFFFF] overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-28 border-b border-[#D8E0EC]">
      <RadialGlow color="navy" position="top-right" />
      <RadialGlow color="red" position="bottom-left" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-6 xl:col-span-7">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[rgba(15,42,96,0.08)] border border-[#0F2A60]/15 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#E11F32] animate-pulse" />
              <span className="text-xs font-['Sora'] font-semibold text-[#0F2A60] tracking-wide uppercase">
                Hyderabad GCC Hub & Cross-Market Sourcing
              </span>
            </div>
            <h1 className="font-['Sora'] font-extrabold text-4xl sm:text-5xl lg:text-6xl text-[#0F2A60] tracking-tight leading-[1.12]">
              {headlineLines.length > 0
                ? headlineLines.map((item, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        opacity: 0,
                        y: 16,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.45,
                        delay: index * 0.12,
                        ease: 'easeOut',
                      }}
                      className="block"
                    >
                      {index === headlineLines.length - 1 ? (
                        <span className="text-[#0F2A60] relative inline-block">
                          {item}
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#E11F32] ml-1 align-baseline" />
                        </span>
                      ) : (
                        item
                      )}
                    </motion.span>
                  ))
                : headline}
            </h1>
            <motion.p
              initial={{
                opacity: 0,
                y: 14,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.45,
                delay: 0.35,
                ease: 'easeOut',
              }}
              className="mt-6 text-lg sm:text-xl text-[#646F82] max-w-2xl font-normal leading-relaxed"
            >
              {subhead}
            </motion.p>
            {(primaryCTA || secondaryCTA) && (
              <motion.div
                initial={{
                  opacity: 0,
                  y: 14,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.45,
                  ease: 'easeOut',
                }}
                className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4"
              >
                {primaryCTA && (
                  <button
                    type="button"
                    id="hero-primary-cta"
                    onClick={() => navigate(primaryCTA.to)}
                    className="group inline-flex items-center gap-3 px-7 py-3.5 bg-[#E11F32] hover:bg-[#c8192a] text-white font-['Sora'] font-semibold text-base rounded-sm transition-all duration-200 cursor-pointer shadow-sm active:translate-y-0.5"
                  >
                    <span>{primaryCTA.label}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1.5">
                      <ArrowRightIcon size={16} color="#FFFFFF" />
                    </span>
                  </button>
                )}
                {secondaryCTA && (
                  <button
                    type="button"
                    id="hero-secondary-cta"
                    onClick={() => navigate(secondaryCTA.to)}
                    className="group inline-flex items-center gap-2 px-6 py-3.5 bg-transparent hover:bg-[#F5F7FB] text-[#0F2A60] border border-[#D8E0EC] hover:border-[#0F2A60] font-['Sora'] font-semibold text-base rounded-sm transition-all duration-200 cursor-pointer"
                  >
                    <span>{secondaryCTA.label}</span>
                    <span className="transition-transform duration-200 group-hover:translate-x-1 text-[#0F2A60]">
                      <ArrowRightIcon size={14} color="#0F2A60" />
                    </span>
                  </button>
                )}
              </motion.div>
            )}
            <div className="mt-10 pt-6 border-t border-[#D8E0EC] flex flex-wrap items-center gap-6 text-xs text-[#646F82]">
              <div className="flex items-center gap-2 font-medium">
                <div className="w-6 h-6 rounded-full bg-[rgba(15,42,96,0.08)] flex items-center justify-center text-[#0F2A60]">
                  <PhoneCall size={12} />
                </div>
                <span>Recruiters who answer phone calls</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <div className="w-6 h-6 rounded-full bg-[rgba(225,31,50,0.10)] flex items-center justify-center text-[#E11F32]">
                  <ShieldCheck size={12} />
                </div>
                <span>100% Pre-offer verification</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-6 xl:col-span-5 relative">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              <div className="absolute -top-12 -right-8 w-64 h-64 opacity-25 pointer-events-none z-0">
                <HubDiagram variant="home" animated={true} />
              </div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.94,
                  y: 16,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: 'easeOut',
                }}
                className="relative z-10 w-[86%] rounded-sm overflow-hidden border-2 border-[#D8E0EC] shadow-lg bg-[#FFFFFF] group"
              >
                <div className="overflow-hidden aspect-4/3">
                  <img
                    src={heroPhotos[0]}
                    alt="ARA Solutions recruitment advisor on candidate consultation"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-104"
                    loading="eager"
                  />
                </div>
                <div className="p-3.5 bg-[#FFFFFF] border-t border-[#D8E0EC] flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#E71E28] animate-pulse" />
                    <span className="text-xs font-['Sora'] font-semibold text-[#14142B]">
                      Active Candidate Consultation
                    </span>
                  </div>
                  <span className="text-[11px] text-[#646F82]">Hyderabad Hub</span>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  x: 20,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.35,
                  ease: 'easeOut',
                }}
                className="absolute -bottom-6 sm:-bottom-8 right-0 z-20 w-[58%] rounded-sm overflow-hidden border-2 border-[#0F2A60] shadow-xl bg-[#FFFFFF] group"
              >
                <div className="overflow-hidden aspect-4/3">
                  <img
                    src={heroPhotos[1]}
                    alt="Corporate workforce strategy session"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-104"
                    loading="lazy"
                  />
                </div>
                <div className="p-3 bg-[#0F2A60] text-white flex items-center gap-2">
                  <UsersRound size={16} className="text-[#E11F32]" />
                  <span className="font-['Sora'] font-bold text-xs">Client Strategy Delivery</span>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.5,
                  delay: 0.5,
                }}
                className="absolute -top-4 -left-4 z-30 bg-[#FFFFFF] border-2 border-[#E11F32] px-3.5 py-2 rounded-sm shadow-md flex items-center gap-2"
              >
                <div className="w-2 h-2 rounded-full bg-[#E11F32]" />
                <span className="font-['Sora'] font-bold text-xs text-[#0F2A60]">Human-Led Screening</span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageHero;
