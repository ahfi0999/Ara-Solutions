import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  Cpu,
  Database,
  HeartHandshake,
  Lightbulb,
  Minus,
  Plus,
  Server,
  Shield,
  Star,
} from 'lucide-react';
import AmbientBackdrop from '../components/decor/AmbientBackdrop';
import DarkBackdrop from '../components/decor/DarkBackdrop';
import GlowOrbs from '../components/decor/GlowOrbs';
import HeroGlow from '../components/decor/HeroGlow';
import SideRails from '../components/decor/SideRails';
import TechPattern from '../components/decor/TechPattern';
import WaveDivider from '../components/decor/WaveDivider';
import CountUp from '../components/ui/CountUp';
import { images } from '../data/images';
import { useRouter } from '../lib/router';

const HomePage = () => {
  const { navigate } = useRouter();
  const [openFaq, setOpenFaq] = useState(0);
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };
  const goTo = (path) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg-[#ffffff] text-slate-900 selection:bg-[#E71E28] selection:text-white">
      <section className="relative min-h-[600px] sm:min-h-[680px] lg:min-h-[720px] flex items-center bg-[#0B0E1A] text-white">
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-[center_20%] lg:bg-[64%_25%] bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('${images.heroBg}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B0E1A]/95 via-[#0B0E1A]/70 to-transparent/10 lg:from-[#0B0E1A]/90 lg:via-[#0B0E1A]/55 lg:to-transparent/5" />
          <div className="absolute inset-0 bg-[#204282]/15 mix-blend-color-dodge" />
          <div className="absolute bottom-0 inset-x-0 h-32 sm:h-48 bg-gradient-to-t from-[#0B0E1A] via-[#0B0E1A]/75 to-transparent" />
        </div>
        <AmbientBackdrop />
        <SideRails position="both" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 lg:pt-32 pb-20 sm:pb-24 lg:pb-28 w-full flex-1 flex flex-col justify-between">
          <div className="max-w-3xl">
            <motion.div
              initial={{
                opacity: 0,
                x: -24,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.5,
                ease: 'easeOut',
              }}
            >
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#0B0E1A]/75 backdrop-blur-md border border-white/20 text-xs font-semibold text-white mb-6 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-[#E71E28] animate-pulse" />
                <span>Smart Workforce & IT Solutions For Enterprise</span>
              </div>
              <h1 className="font-['Sora'] font-bold text-3xl sm:text-5xl lg:text-[54px] text-white tracking-tight leading-[1.18] drop-shadow-sm">
                <span className="block">Future-Proof Your Business</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                  With Powerful IT Solutions
                </span>
              </h1>
              <p className="mt-6 text-base sm:text-lg text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-sm">
                Stay ahead of the curve with scalable, secure, and intelligent IT and workforce services
                tailored to your business needs. Whether you’re upgrading your infrastructure, assembling
                offshore engineering pods, or deploying elite senior contractors.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => goTo('/contact')}
                  className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#E71E28] to-[#B8141D] hover:from-[#B8141D] hover:to-[#E71E28] text-white font-['Sora'] font-bold text-sm shadow-[0_10px_35px_rgba(231,30,40,0.45)] hover:shadow-[0_14px_45px_rgba(231,30,40,0.65)] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          </div>
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
            className="mt-8 sm:mt-12 pt-6 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="rounded-2xl p-5 sm:p-6 glossy-card sheen-sweep flex flex-col justify-between group cursor-default"
              >
                <div className="flex items-center -space-x-2.5 mb-3">
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0E1A] object-cover"
                    src={images.avatars.candidates.aarav}
                    alt="Enterprise Partner"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0E1A] object-cover"
                    src={images.avatars.candidates.sneha}
                    alt="Tech Lead"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0E1A] object-cover"
                    src={images.avatars.candidates.vikram}
                    alt="Director"
                  />
                  <img
                    className="inline-block h-9 w-9 rounded-full ring-2 ring-[#0B0E1A] object-cover"
                    src={images.avatars.candidates.meera}
                    alt="Partner"
                  />
                  <div className="flex items-center justify-center h-9 w-9 rounded-full bg-gradient-to-br from-[#E71E28] to-[#B8141D] text-white font-bold text-xs ring-2 ring-[#0B0E1A]">
                    +
                  </div>
                </div>
                <div className="text-sm font-['Sora'] font-bold text-white flex items-center gap-1.5">
                  <span className="text-[#E71E28]">98%</span>
                  {' Client Retention'}
                </div>
                <div className="mt-1 text-xs text-slate-300">
                  Trusted across US, UK & India enterprise delivery hubs
                </div>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="rounded-2xl p-5 sm:p-6 glossy-card sheen-sweep flex flex-col justify-between group cursor-default"
              >
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="font-['Sora'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none">
                    <CountUp end={13} suffix="+" />
                  </span>
                  <span className="text-xs font-['Sora'] font-semibold text-slate-200">
                    Years Industry Leadership
                  </span>
                </div>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                  Our deep industry knowledge and proven methodologies help organizations achieve continuous
                  agility.
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -6,
                  scale: 1.015,
                }}
                transition={{
                  duration: 0.25,
                }}
                className="rounded-2xl p-5 sm:p-6 glossy-card sheen-sweep flex flex-col justify-between group cursor-default"
              >
                <div className="flex items-baseline gap-2 mb-1.5">
                  <span className="font-['Sora'] font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none">
                    <CountUp end={1000} suffix="+" />
                  </span>
                  <span className="text-xs font-['Sora'] font-semibold text-slate-200">
                    Placements Delivered
                  </span>
                </div>
                <div className="mt-2.5 flex items-center gap-2 text-xs text-slate-300">
                  <Shield className="w-4 h-4 text-[#E71E28] shrink-0" />
                  <span>Zero Compliance Friction • I-9 & GST Ready</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <WaveDivider position="bottom" />
      </section>
      <section className="py-20 bg-white relative overflow-hidden text-slate-800 -mt-px">
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white via-white/95 to-transparent pointer-events-none z-10" />
        <TechPattern variant="circuit" isLight={true} hasRedAccent={true} />
        <div
          className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none"
          style={{
            maskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40px, black 100px)',
            WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, transparent 40px, black 100px)',
          }}
        />
        <motion.div
          initial={{
            opacity: 0,
            y: 16,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.05,
          }}
          transition={{
            duration: 0.35,
            ease: 'easeOut',
          }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20"
        >
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            <HeroGlow isLight={true} color="blue" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E71E28]/10 border border-[#E71E28]/30 text-xs font-semibold text-[#E71E28] mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
              <span>Innovation That Drives Growth</span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
              Combining Cutting-Edge Technology, Proven Expertise, And A Client-Centric Approach To Fuel
              Business Success
            </h2>
            <p className="mt-4 text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
              We align specialized engineering capabilities with strategic commercial models to deliver
              sustainable workforce excellence without friction.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <motion.div
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
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.012,
              }}
              className="lg:col-span-4 glossy-card-light sheen-sweep p-6 sm:p-8 flex flex-col justify-between group cursor-default"
            >
              <div>
                <div className="flex -space-x-2 overflow-hidden mb-4">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={images.avatars.candidates.rohan}
                    alt="International client executive"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={images.avatars.candidates.divya}
                    alt="Indian technical leader"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
                    src={images.avatars.candidates.arjun}
                    alt="Enterprise talent partner"
                  />
                </div>
                <h3 className="font-['Sora'] font-bold text-lg text-slate-900 mb-2 leading-snug">
                  We're proud to have built lasting relationships with businesses.
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  From hyper-growth tech innovators to Fortune 500 corporations, our transparent communication
                  and zero-surprises fulfillment set the gold standard.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs font-semibold">
                <span className="text-[#E71E28] font-bold text-sm">
                  <CountUp end={99.2} decimals={1} suffix="% Retention Rate" />
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#E71E28]" />
              </div>
            </motion.div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                {
                  icon: <Compass className="w-6 h-6" />,
                  title: 'Strategic Vision',
                  desc: 'We focus on long-term workforce strategy that empowers your business to scale predictably without talent bottlenecks.',
                  iconTheme: 'blue',
                  delay: 0.16,
                },
                {
                  icon: <Lightbulb className="w-6 h-6" />,
                  title: 'Innovative Solution',
                  desc: 'Our talent acquisition leads deploy verified competency benchmarks and role-specific technical evaluation rubrics.',
                  iconTheme: 'red',
                  delay: 0.24,
                },
                {
                  icon: <HeartHandshake className="w-6 h-6" />,
                  title: 'Personalized Service',
                  desc: 'We believe strong relationships create stronger results, giving every client dedicated recruitment leads and direct accountability.',
                  iconTheme: 'blue',
                  delay: 0.32,
                },
              ].map((item, index) => (
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
                    delay: item.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                  }}
                  className="glossy-card-light sheen-sweep p-6 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${item.iconTheme === 'red' ? 'bg-gradient-to-br from-[#E71E28] to-[#B8141D] border-red-200 text-white shadow-[0_4px_16px_rgba(231,30,40,0.3)]' : 'bg-gradient-to-br from-[#282870] to-[#224182] border-blue-200 text-white shadow-[0_4px_16px_rgba(32,66,130,0.2)]'}`}
                    >
                      {item.icon}
                    </div>
                    <h4 className="font-['Sora'] font-bold text-base text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
      <motion.section
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
          amount: 0.05,
        }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
        className="py-20 bg-[#0B0E1A] relative overflow-hidden"
      >
        <DarkBackdrop hasRedGlow={true} />
        <GlowOrbs position="top-left" color="blue" size="xl" />
        <GlowOrbs position="bottom-right" color="red" size="xl" />
        <GlowOrbs position="top-right" color="navy" size="lg" />
        <TechPattern variant="mesh" />
        <TechPattern variant="wave-lines" />
        <TechPattern variant="dot-mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            <HeroGlow />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#282870]/50 to-[#224182]/50 border border-[#224182]/50 text-xs font-semibold text-slate-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_rgba(231,30,40,0.8)]" />
              <span>Our Services</span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Blending Technical Expertise With Customer-Centric Values To Help You Succeed In A Digital Era
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                title: 'Corp to Corp Staffing',
                path: '/services/corp-to-corp',
                icon: <Cpu className="w-6 h-6" />,
                desc: 'Specialized senior engineering contractors deployed on defined milestones without open-ended commitments.',
                bullet1: '24/7 Deployment Availability',
                bullet2: 'Verified Statutory & C2C Compliance',
                theme: 'red',
                delay: 0.08,
              },
              {
                title: 'Fulltime Staffing (IT & Non-IT)',
                path: '/services/fulltime-staffing',
                icon: <Shield className="w-6 h-6" />,
                desc: 'End-to-end permanent search across leadership, core product engineering, and operational domain experts.',
                bullet1: 'Rigorous Pre-Interview Screening',
                bullet2: 'Enterprise-Grade Verification',
                theme: 'red',
                delay: 0.16,
              },
              {
                title: 'Training & Placement',
                path: '/training-placement',
                icon: <Server className="w-6 h-6" />,
                desc: 'Custom curriculum pipelines delivering day-one productive talent across ServiceNow, Cyber Security, and AI/ML.',
                bullet1: 'Role-Ready Lab Simulations',
                bullet2: 'Fast Onboarding Ramp',
                theme: 'red',
                delay: 0.24,
              },
              {
                title: 'Recruitment Process Outsourcing',
                path: '/services/rpo',
                icon: <Database className="w-6 h-6" />,
                desc: 'Seamless enterprise TA extension providing dedicated sourcers, interview orchestration, and volume hiring execution.',
                bullet1: '35% Lower Cost per Hire',
                bullet2: 'Integrated ATS Workflow',
                theme: 'red',
                delay: 0.32,
              },
            ].map((item, index) => (
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
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                onClick={() => goTo(item.path)}
                className={`group glossy-card sheen-sweep p-6 cursor-pointer flex flex-col justify-between transition-all duration-300 ${item.theme === 'red' ? 'hover:border-[#E71E28]/60 hover:shadow-[0_12px_30px_rgba(231,30,40,0.25)]' : 'hover:border-[#224182]/80 hover:shadow-[0_12px_30px_rgba(32,66,130,0.35)]'}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-12 h-12 rounded-xl border flex items-center justify-center text-white transition-all duration-300 group-hover:scale-110 ${item.theme === 'red' ? 'bg-gradient-to-br from-[#E71E28] to-[#B8141D] border-white/20 shadow-[0_0_16px_rgba(231,30,40,0.4)]' : 'bg-gradient-to-br from-[#282870] to-[#224182] border-white/10'}`}
                    >
                      {item.icon}
                    </div>
                    <div
                      className={`w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-300 group-hover:rotate-45 ${item.theme === 'red' ? 'text-slate-300 group-hover:bg-[#E71E28] group-hover:text-white' : 'text-slate-300 group-hover:bg-gradient-to-r group-hover:from-[#282870] group-hover:to-[#224182] group-hover:text-white'}`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  <h3 className="font-['Sora'] font-bold text-lg text-white mb-2 group-hover:text-slate-100 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">{item.desc}</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-[#224182]/30 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#204282]/40 text-white flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </span>
                    <span>{item.bullet1}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#E71E28]/25 text-[#E71E28] flex items-center justify-center shrink-0">
                      <Check className="w-3 h-3" />
                    </span>
                    <span>{item.bullet2}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="relative rounded-3xl glossy-card p-6 sm:p-8 lg:p-10 overflow-hidden border border-[#224182]/50">
            <div className="absolute -inset-10 bg-[#204282] opacity-15 blur-3xl pointer-events-none rounded-3xl" />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
              <div className="lg:col-span-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#282870]/60 border border-[#224182]/60 text-xs font-semibold text-slate-200 mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
                  <span>Integrated Delivery Pipeline</span>
                </div>
                <h3 className="font-['Sora'] font-bold text-2xl sm:text-3xl text-white mb-3 tracking-tight">
                  Seamless talent matching engineered for zero downtime
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Every staffing deployment undergoes standardized skill assessment, cultural alignment
                  vetting, and full cross-border statutory compliance verification before reaching your desk.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-[#224182]/30">
                  <div>
                    <div className="font-['Sora'] font-black text-2xl text-white">
                      {'< '}
                      <CountUp end={48} suffix=" Hours" />
                    </div>
                    <div className="text-xs text-slate-400">First Shortlist SLA</div>
                  </div>
                  <div>
                    <div className="font-['Sora'] font-black text-2xl text-[#E71E28]">
                      <CountUp end={100} suffix="%" />
                    </div>
                    <div className="text-xs text-slate-400">Statutory Compliant</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-6 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="absolute -inset-3 rounded-2xl border border-[#204282]/40 border-dashed animate-spin-slow pointer-events-none opacity-40" />
                  <div className="absolute -inset-6 rounded-2xl border border-[#E71E28]/20 border-dotted pointer-events-none opacity-30" />
                  <div className="relative rounded-2xl overflow-hidden border-2 border-[#204282]/70 shadow-[0_0_35px_rgba(32,66,130,0.4)] h-64 sm:h-72 group">
                    <img
                      src={images.homeDeliveryHub}
                      alt="Global engineering pod reviewing codebase architecture"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E1A] via-transparent to-transparent opacity-75" />
                    <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0B0E1A]/85 backdrop-blur-md border border-[#224182]/50 text-[10px] font-medium text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
                      <span>Enterprise Delivery Hub</span>
                    </div>
                  </div>
                  <div className="absolute -top-4 -right-2 sm:-right-4 bg-[#0B0E1A]/95 backdrop-blur-xl border border-[#224182]/70 rounded-xl p-3 shadow-2xl z-20 max-w-[200px]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-[#E71E28] flex items-center justify-center text-white text-[10px] font-bold">
                        ✓
                      </div>
                      <div>
                        <div className="text-[11px] font-['Sora'] font-bold text-white">Live Code Vetted</div>
                        <div className="text-[9px] text-slate-300">Senior Architect Reviewed</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -left-2 sm:-left-4 bg-[#0B0E1A]/95 backdrop-blur-xl border border-[#E71E28]/50 rounded-xl p-3 shadow-2xl z-20 max-w-[210px]">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#282870] to-[#224182] flex items-center justify-center text-[#E71E28]">
                        <Shield className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <div className="text-[11px] font-['Sora'] font-bold text-white">
                          Zero Payroll Friction
                        </div>
                        <div className="text-[9px] text-slate-400">Hyderabad GCC Hub • Global</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
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
          amount: 0.05,
        }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
        className="py-20 bg-[#F8FAFC] border-t border-slate-200 relative overflow-hidden text-slate-800"
      >
        <TechPattern variant="rings" isLight={true} hasRedAccent={true} />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="absolute -inset-6 bg-[#204282] opacity-5 blur-3xl rounded-3xl pointer-events-none" />
              <div className="absolute -inset-4 rounded-3xl border border-[#204282]/20 border-dashed animate-spin-slow pointer-events-none opacity-40" />
              <div className="absolute -inset-8 rounded-3xl border border-[#E71E28]/20 border-dotted pointer-events-none opacity-30" />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md h-48 sm:h-56 group bg-white">
                  <img
                    src={images.services.fulltimeStaffing}
                    alt="Senior technical recruiter reviewing talent profiles in Hyderabad"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[9px] font-semibold text-slate-800 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
                    <span>Technical Leadership</span>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md h-48 sm:h-56 mt-6 group bg-white">
                  <img
                    src={images.services.corpToCorp}
                    alt="Executive interview and cross-border partnership meeting"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[9px] font-semibold text-slate-800 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#204282]" />
                    <span>Cross-Border Alignment</span>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md h-48 sm:h-56 -mt-6 group bg-white">
                  <img
                    src={images.services.rpoSolutions}
                    alt="Software engineering pod working in agile sprint"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[9px] font-semibold text-slate-800 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
                    <span>Offshore Tech Pod</span>
                  </div>
                </div>
                <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-md h-48 sm:h-56 group bg-white">
                  <img
                    src={images.services.trainingPlacement}
                    alt="Successful client interview and talent placement celebration"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/95 backdrop-blur-md border border-slate-200 text-[9px] font-semibold text-slate-800 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#204282]" />
                    <span>Client Success</span>
                  </div>
                </div>
              </div>
              <div className="absolute -top-5 -left-3 sm:-left-5 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl p-3 shadow-xl z-30 max-w-[210px]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#E71E28] text-white flex items-center justify-center font-bold text-[10px]">
                    ✓
                  </div>
                  <div>
                    <div className="text-[11px] font-['Sora'] font-bold text-slate-900">
                      Vetted Talent Pod
                    </div>
                    <div className="text-[9px] text-slate-500">Top 1% Engineering Assessment</div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-xl p-3 shadow-xl z-30 max-w-[220px]">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-md bg-gradient-to-br from-[#282870] to-[#224182] text-white flex items-center justify-center">
                    <Shield className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-['Sora'] font-bold text-slate-900">
                      Hyderabad GCC Hub
                    </div>
                    <div className="text-[9px] text-slate-500">Statutory Compliant • Zero Hassle</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-span-6">
              <div className="relative">
                <HeroGlow isLight={true} color="red" />
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E71E28]/10 border border-[#E71E28]/30 text-xs font-semibold text-[#E71E28] mb-3 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
                  <span>Why Choose Us</span>
                </div>
                <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
                  Because We Focus On Results That Matter To Your Business
                </h2>
              </div>
              <p className="mt-5 text-sm sm:text-base text-slate-600 leading-relaxed">
                Our team combines decades of specialized tech recruitment experience, advanced vetting
                methodologies, and a customer-first approach to ensure your organization thrives with
                exceptional engineering talent.
              </p>
              <div className="mt-8 rounded-2xl relative overflow-hidden bg-gradient-to-br from-[#282870] via-[#204282] to-[#12234a] p-8 sm:p-10 border border-[#224182]/40 shadow-[0_12px_36px_rgba(32,66,130,0.25)]">
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-['Sora'] font-black text-5xl sm:text-6xl text-white tracking-tight leading-none drop-shadow-md">
                      <CountUp end={10} suffix="+" />
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#E71E28] text-white text-xs font-['Sora'] font-bold tracking-wider uppercase shadow-[0_0_15px_rgba(231,30,40,0.5)]">
                      Top Ranked
                    </span>
                  </div>
                  <div className="font-['Sora'] font-bold text-xl sm:text-2xl text-white tracking-tight">
                    Years Of Industry Excellence
                  </div>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200 font-normal leading-relaxed max-w-md">
                    Delivering high-retention engineers and GCC workforce scale across Hyderabad, London, and
                    international tech corridors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
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
          amount: 0.05,
        }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
        className="py-24 sm:py-28 bg-[#0B0E1A] relative overflow-hidden text-white"
      >
        <div
          className="absolute inset-0 z-0 bg-fixed bg-cover bg-center bg-no-repeat pointer-events-none"
          style={{
            backgroundImage: `url('${images.featureBg}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0E1A]/85 via-[#0A1128]/70 to-[#0B0E1A]/90 pointer-events-none" />
        </div>
        <GlowOrbs position="top-left" color="blue" size="xl" />
        <GlowOrbs position="bottom-right" color="red" size="xl" />
        <GlowOrbs position="top-right" color="navy" size="lg" />
        <TechPattern variant="mesh" />
        <TechPattern variant="dot-mesh" />
        <TechPattern variant="wave-lines" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            <HeroGlow />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#282870]/50 to-[#224182]/50 border border-[#224182]/50 text-xs font-semibold text-slate-300 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28] shadow-[0_0_8px_rgba(231,30,40,0.8)]" />
              <span>Our Features</span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
              Feature-Rich Solutions Built To Support Your Growth And Security Needs
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <motion.div
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
                delay: 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.012,
              }}
              className="lg:col-span-6 rounded-3xl glossy-card sheen-sweep p-8 flex flex-col justify-between min-h-[320px] cursor-default"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#282870]/60 border border-[#224182]/50 text-slate-200 font-semibold text-xs mb-3">
                  Infrastructure
                </div>
                <h3 className="font-['Sora'] font-bold text-2xl text-white mb-2">
                  Cloud Infrastructure Staffing
                </h3>
                <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                  Deploy certified AWS, Azure, and GCP architects who build fault-tolerant distributed systems
                  that grow with your enterprise.
                </p>
              </div>
              <div className="pt-6 border-t border-[#224182]/30 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-['Sora'] font-extrabold text-2xl text-white">
                    <CountUp end={5} decimals={1} suffix="M+" />
                  </div>
                  <div className="text-xs text-slate-400">Target User Capacity</div>
                </div>
                <div>
                  <div className="font-['Sora'] font-extrabold text-2xl text-[#E71E28] drop-shadow-[0_0_12px_rgba(231,30,40,0.3)]">
                    <CountUp end={99.9} decimals={1} suffix="%" />
                  </div>
                  <div className="text-xs text-slate-400">Uptime Reliability SLA</div>
                </div>
              </div>
            </motion.div>
            <motion.div
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
                delay: 0.16,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -8,
                scale: 1.012,
              }}
              className="lg:col-span-6 rounded-3xl glossy-card sheen-sweep p-8 flex flex-col justify-between min-h-[320px] cursor-default"
            >
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-[#E71E28]/15 border border-[#E71E28]/40 text-white font-semibold text-xs mb-3">
                  Dedicated Support
                </div>
                <h3 className="font-['Sora'] font-bold text-2xl text-white mb-2">
                  Fast & Reliable Talent Support
                </h3>
                <p className="text-xs text-slate-300 max-w-md leading-relaxed">
                  Our recruiting leads and talent managers are available around the clock to address sprint
                  staffing, contractor onboarding, and performance reviews.
                </p>
              </div>
              <div className="pt-6 border-t border-[#224182]/30 grid grid-cols-2 gap-4">
                <div>
                  <div className="font-['Sora'] font-extrabold text-2xl text-white">
                    <CountUp end={10} suffix="K+" />
                  </div>
                  <div className="text-xs text-slate-400">Profiles Screened Annually</div>
                </div>
                <div>
                  <div className="font-['Sora'] font-extrabold text-2xl text-[#E71E28]">
                    {'< '}
                    <CountUp end={15} suffix=" Min" />
                  </div>
                  <div className="text-xs text-slate-400">Dedicated Account Response</div>
                </div>
              </div>
            </motion.div>
            <motion.div
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
                delay: 0.24,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{
                y: -6,
                scale: 1.008,
              }}
              className="lg:col-span-12 rounded-3xl glossy-card sheen-sweep p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center cursor-default"
            >
              <div className="lg:col-span-7">
                <div className="inline-block px-3 py-1 rounded-full bg-[#282870]/60 border border-[#224182]/50 text-slate-200 font-semibold text-xs mb-3">
                  Enterprise Scalability
                </div>
                <h3 className="font-['Sora'] font-bold text-2xl sm:text-3xl text-white mb-3">
                  Customized Workforce Ramps Built For Velocity
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  Whether establishing a 50-person Global Capability Center in Hyderabad or expanding remote
                  engineering clusters across the UK and US, our structured engagement pipelines eliminate
                  recruitment bottlenecks.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#224182]/30">
                  <div>
                    <div className="font-['Sora'] font-extrabold text-2xl text-white">
                      <CountUp end={50} suffix="+" />
                    </div>
                    <div className="text-xs text-slate-400">Supported Tech Stacks</div>
                  </div>
                  <div>
                    <div className="font-['Sora'] font-extrabold text-2xl text-white">
                      <CountUp end={100} suffix="+" />
                    </div>
                    <div className="text-xs text-slate-400">Placements Delivered Monthly</div>
                  </div>
                  <div>
                    <div className="font-['Sora'] font-extrabold text-2xl text-[#E71E28] drop-shadow-[0_0_12px_rgba(231,30,40,0.3)]">
                      <CountUp end={99.4} decimals={1} suffix="%" />
                    </div>
                    <div className="text-xs text-slate-400">Offer Acceptance Rate</div>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#224182]/50 shadow-2xl h-64 sm:h-72 group">
                <img
                  src={images.techTeam}
                  alt="Diverse engineering team in collaborative strategy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 bg-[#0B0E1A]/95 backdrop-blur-md border border-[#224182]/50 rounded-xl p-3.5 flex items-center justify-between shadow-lg">
                  <div>
                    <div className="flex items-center gap-1 text-[#E71E28] mb-0.5">
                      {[...[, , , , ,]].map((item, index) => (
                        <Star key={index} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-xs font-['Sora'] font-bold text-white">
                      98% Happy Satisfied Clients
                    </span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#E71E28] to-[#B8141D] text-white flex items-center justify-center font-bold text-xs shadow-[0_0_12px_rgba(231,30,40,0.5)]">
                    4.9
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      <motion.section
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
          amount: 0.05,
        }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
        className="py-20 bg-white border-t border-slate-200 relative overflow-hidden text-slate-800"
      >
        <TechPattern variant="wave-lines" isLight={true} hasRedAccent={true} />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 relative">
            <HeroGlow isLight={true} color="red" />
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E71E28]/10 border border-[#E71E28]/30 text-xs font-semibold text-[#E71E28] mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
              <span>How It Works</span>
            </div>
            <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-tight">
              Clear Steps That Ensure Scalable, Secure, And Hassle-Free IT Workforce Management
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: 'Step 01',
                title: 'Consultation',
                desc: 'We conduct an in-depth audit of your tech roadmap and team structure to design engagement models aligned with corporate milestones.',
                bullets: ['In-depth talent audit', 'Clear engagement roadmap'],
                tags: ['Planning', 'Analysis'],
                theme: 'blue',
                delay: 0.08,
              },
              {
                step: 'Step 02',
                title: 'Solution Design',
                desc: 'Our talent architects calibrate competency matrices, compensation benchmarks, and exact technical screening scorecards.',
                bullets: ['Technical vetting rubric', 'Cross-border statutory setup'],
                tags: ['IT Strategy', 'Architecture'],
                theme: 'red',
                delay: 0.16,
              },
              {
                step: 'Step 03',
                title: 'Implementation',
                desc: 'We deploy pre-screened talent pods seamlessly into your codebase, agile sprints, and project management ecosystems.',
                bullets: ['Fast 48-hour shortlisting', 'Seamless tool integration'],
                tags: ['Deployment', 'Integration'],
                theme: 'blue',
                delay: 0.24,
              },
              {
                step: 'Step 04',
                title: 'Continuous Support',
                desc: 'Ongoing feedback loops, quarterly performance syncs, and proactive headcount replacement ensure continuous delivery.',
                bullets: ['Periodic velocity reviews', 'Capacity optimization'],
                tags: ['Monitoring', 'Optimization'],
                theme: 'red',
                delay: 0.32,
              },
            ].map((item, index) => (
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
                  delay: item.delay,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className="glossy-card-light sheen-sweep p-6 flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-['Sora'] font-bold px-3 py-1 rounded-full border ${item.theme === 'red' ? 'bg-gradient-to-r from-[#E71E28] to-[#B8141D] text-white border-red-200 shadow-[0_2px_10px_rgba(231,30,40,0.3)]' : 'bg-gradient-to-r from-[#282870] to-[#224182] text-white border-blue-200 shadow-[0_2px_10px_rgba(32,66,130,0.2)]'}`}
                    >
                      {item.step}
                    </span>
                  </div>
                  <h3 className="font-['Sora'] font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    {item.bullets.map((entry, entryIndex) => (
                      <div key={entryIndex} className="flex items-center gap-2">
                        <Check
                          className={`w-3.5 h-3.5 ${item.theme === 'red' ? 'text-[#E71E28]' : 'text-[#204282]'}`}
                        />
                        <span>{entry}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-200 flex items-center gap-2">
                  {item.tags.map((entry, entryIndex) => (
                    <span
                      key={entryIndex}
                      className="px-2.5 py-1 rounded-md bg-white border border-slate-200 text-[11px] text-slate-600 font-medium"
                    >
                      {entry}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      <motion.section
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
          amount: 0.05,
        }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
        className="py-20 bg-[#0B0E1A] border-t border-[#224182]/25 relative overflow-hidden"
      >
        <DarkBackdrop hasRedGlow={true} />
        <GlowOrbs position="top-right" color="blue" size="xl" />
        <GlowOrbs position="bottom-left" color="red" size="xl" />
        <GlowOrbs position="top-left" color="navy" size="lg" />
        <TechPattern variant="mesh" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col">
              <div className="rounded-3xl overflow-hidden border border-[#224182]/40 relative h-full min-h-[420px] sm:min-h-[480px] lg:min-h-[560px] shadow-xl group">
                <img
                  src={images.recruitmentProcess}
                  alt="Recruiting advisory team ready to help"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E1A]/60 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
            <div className="lg:col-span-7">
              <div className="relative">
                <HeroGlow />
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E71E28]/15 border border-[#E71E28]/40 text-xs font-semibold text-white mb-3 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E71E28]" />
                  <span>Frequently Asked Questions</span>
                </div>
                <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-8">
                  Everything You Need To Know About Our Workforce Services And Solutions
                </h2>
              </div>
              <div className="space-y-4">
                {[
                  {
                    q: 'How quickly can ARA Solutions deploy talent for emergency or sprint needs?',
                    a: 'For Corp-to-Corp and contract staffing, we maintain pre-vetted contractor benches across Java, Python, React, Cloud, and Data stacks, allowing first interview shortlists within 24 to 48 hours.',
                  },
                  {
                    q: 'How does ARA Solutions verify candidate qualifications and credentials?',
                    a: 'Our international background verification covers statutory IDs, past employment verifications with direct HR contacts, educational authenticity, and technical challenge tests reviewed by senior architects.',
                  },
                  {
                    q: 'What makes your Hyderabad GCC hub advantageous for international firms?',
                    a: 'Hyderabad boasts one of the worlds deepest engineering talent ecosystems. We manage real estate setup, entity payroll, talent acquisition, and cultural onboarding seamlessly.',
                  },
                  {
                    q: 'Can we transition contract engineers into permanent team members?',
                    a: 'Yes. We offer seamless Contract-to-Hire conversion terms with zero surprise fees after agreed milestone periods.',
                  },
                  {
                    q: 'What is included in the Training & Placement service?',
                    a: 'We upskill candidates through structured, lab-intensive tracks in ServiceNow, Cyber Security, and AI/ML, ensuring candidates are deployment-ready on day one.',
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="glossy-card overflow-hidden transition-all hover:border-[#E71E28]/40"
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer"
                    >
                      <span className="font-['Sora'] font-semibold text-sm sm:text-base text-white">
                        {item.q}
                      </span>
                      <span className="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 shrink-0">
                        {openFaq === index ? (
                          <Minus className="w-4 h-4 text-[#E71E28]" />
                        ) : (
                          <Plus className="w-4 h-4 text-white" />
                        )}
                      </span>
                    </button>
                    {openFaq === index && (
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-[#224182]/25">
                        {item.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      <motion.section
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
          amount: 0.05,
        }}
        transition={{
          duration: 0.35,
          ease: 'easeOut',
        }}
        className="py-20 bg-white border-t border-slate-200 relative overflow-hidden text-slate-800"
      >
        <TechPattern variant="hud-radar" isLight={true} hasRedAccent={true} />
        <div className="absolute inset-0 bg-[radial-gradient(#CBD5E1_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 relative self-start">
              <HeroGlow isLight={true} color="blue" />
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#282870]/10 border border-[#224182]/20 text-xs font-semibold text-[#204282] mb-3 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#204282]" />
                <span>Our Testimonials</span>
              </div>
              <h2 className="font-['Sora'] font-extrabold text-2xl sm:text-3xl lg:text-4xl text-slate-900 tracking-tight leading-snug">
                Real Feedback From Businesses Who Trust Our IT Solutions
              </h2>
              <p className="mt-4 text-sm text-slate-600 leading-relaxed">
                Discover why tech leaders, VP of Recruitments, and founders rely on ARA Solutions for
                mission-critical talent delivery.
              </p>
              <div className="mt-8 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-1 text-[#E71E28] mb-1">
                  {[...[, , , , ,]].map((item, index) => (
                    <Star key={index} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <div className="text-xs text-slate-600">
                  {'Rated '}
                  <span className="text-[#E71E28] font-bold">4.9 / 5</span>
                  {' by over 120+ client enterprise partners'}
                </div>
              </div>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  quote:
                    'ARA Solutions filled four niche ServiceNow architect positions for our London client in under two weeks. The candidates were rigorously pre-screened and hit the ground running on day one.',
                  author: 'Marcus Vance',
                  role: 'Head of Technology, CloudScale Europe',
                  img: images.avatars.clients.marcusVance,
                  delay: 0.08,
                },
                {
                  quote:
                    'Our offshore ramp in Hyderabad was our biggest strategic gamble of the year. The team at ARA Solutions delivered transparent pricing, top 5% talent, and zero payroll friction.',
                  author: 'Priya Nambiar',
                  role: 'Director of People & Culture, FinFlow Labs',
                  img: images.avatars.clients.priyaSharma,
                  delay: 0.16,
                },
                {
                  quote:
                    'Their background verification and statutory rigor saved us from multiple non-compliant contractor situations. You can genuinely trust what they deliver.',
                  author: 'David Kessler',
                  role: 'VP of Engineering, Apex Global Media',
                  img: images.avatars.clients.davidRoss,
                  delay: 0.24,
                },
                {
                  quote:
                    'Unlike typical agency spam with 50 unvetted resumes, ARA presents three targeted candidates, all of whom can pass our technical live tests. A breath of fresh air.',
                  author: 'Elena Rostova',
                  role: 'Chief Operating Officer, Veloce Security',
                  img: images.avatars.clients.ananyaDesai,
                  delay: 0.32,
                },
              ].map((item, index) => (
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
                    delay: item.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{
                    y: -8,
                    scale: 1.012,
                  }}
                  className="glossy-card-light sheen-sweep p-6 flex flex-col justify-between group cursor-default"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-1 text-[#E71E28]">
                        {[...[, , , , ,]].map((entry, entryIndex) => (
                          <Star key={entryIndex} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="font-['Sora'] font-serif text-3xl text-slate-300 leading-none">“</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">{item.quote}</p>
                  </div>
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                    <img
                      src={item.img}
                      alt={item.author}
                      className="w-10 h-10 rounded-full object-cover ring-2 ring-slate-200"
                    />
                    <div>
                      <div className="font-['Sora'] font-bold text-xs text-slate-900">{item.author}</div>
                      <div className="text-[11px] text-slate-500">{item.role}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
