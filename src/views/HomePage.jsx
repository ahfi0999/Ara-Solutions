'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Check,
  GraduationCap,
  Headset,
  MessagesSquare,
  Minus,
  Plus,
  Quote,
  Target,
  UsersRound,
} from 'lucide-react';
import Button from '../components/ui/Button';
import FadeUp from '../components/ui/FadeUp';
import Reveal from '../components/ui/Reveal';
import SectionHeading from '../components/ui/SectionHeading';
import { images } from '../data/images';

const STATS = [
  { value: '13+', label: 'Years in IT staffing' },
  { value: '1,000+', label: 'Professionals placed' },
  { value: '98%', label: 'Client retention' },
  { value: '3', label: 'Job-ready training tracks' },
];

const DIVISIONS = [
  {
    icon: UsersRound,
    eyebrow: 'For businesses',
    title: 'IT & Non-IT Staffing',
    text: 'Find the right people for your team. We handle IT recruitment, non-IT hiring, contract staffing and permanent placements, so you can focus on growing.',
    points: [
      'Contract & Corp-to-Corp staffing',
      'Permanent hiring, IT and non-IT',
      'Recruitment process outsourcing',
    ],
    cta: { label: 'Find the right talent', href: '/services/fulltime-staffing' },
  },
  {
    icon: GraduationCap,
    eyebrow: 'For professionals',
    title: 'Training & Placement',
    text: 'Build a technology career with industry-focused training, real-time projects and placement support, in ServiceNow, Cybersecurity and AI/ML.',
    points: ['Hands-on labs and live projects', 'Interview preparation', 'Placement assistance'],
    cta: { label: 'Explore training programs', href: '/training-placement' },
  },
];

const SERVICES = [
  {
    title: 'Corp to Corp Staffing',
    text: 'Pre-vetted contract engineers deployed on defined milestones, with compliance handled.',
    image: images.services.corpToCorp,
    href: '/services/corp-to-corp',
  },
  {
    title: 'Full-Time Staffing',
    text: 'Permanent hires across engineering, leadership and non-IT roles, measured by retention.',
    image: images.services.fulltimeStaffing,
    href: '/services/fulltime-staffing',
  },
  {
    title: 'Recruitment Process Outsourcing',
    text: 'A dedicated recruiting team that works as an extension of yours, at a lower cost per hire.',
    image: images.services.rpoSolutions,
    href: '/services/rpo',
  },
  {
    title: 'International Consulting',
    text: 'Global talent with thorough background and credential verification before any offer.',
    image: images.internationalHero,
    href: '/services/international-consulting',
  },
];

const TRACKS = [
  {
    title: 'ServiceNow',
    text: 'Platform fundamentals, ITSM, scripting and workflows, with certification preparation.',
    topics: ['ServiceNow Fundamentals', 'Scripting & Development', 'ITSM & Workflows', 'Real-Time Projects'],
    image: images.servicenowHero,
    href: '/training-placement/servicenow',
  },
  {
    title: 'Cybersecurity',
    text: 'Train for SOC analyst, cloud security, IAM and GRC roles with hands-on labs.',
    image: images.cybersecurityHero,
    href: '/training-placement/cybersecurity',
  },
  {
    title: 'AI & Machine Learning',
    text: 'Become an ML engineer, data scientist or GenAI developer through project-based learning.',
    image: images.aimlHero,
    href: '/training-placement/ai-ml',
  },
];

const REASONS = [
  {
    icon: Target,
    title: 'Complete recruitment',
    text: 'Contract, permanent and RPO hiring under one roof.',
  },
  {
    icon: GraduationCap,
    title: 'Career-focused training',
    text: 'Curriculum built around roles companies are hiring for.',
  },
  {
    icon: MessagesSquare,
    title: 'Interview preparation',
    text: 'Mock interviews and resume reviews before you apply.',
  },
  {
    icon: BadgeCheck,
    title: 'Placement assistance',
    text: 'We connect trained candidates with our hiring partners.',
  },
  {
    icon: Headset,
    title: 'Dedicated support',
    text: 'One point of contact who knows your needs.',
  },
];

const STEPS = [
  {
    title: 'Consultation',
    text: 'We understand your roadmap, team structure and the exact roles you need to fill.',
  },
  {
    title: 'Solution design',
    text: 'We define the skills, screening criteria and engagement model that fit each role.',
  },
  {
    title: 'Delivery',
    text: 'Pre-screened candidates join your team and projects with minimal ramp-up time.',
  },
  {
    title: 'Ongoing support',
    text: 'Regular check-ins and replacement cover keep your team performing.',
  },
];

const TESTIMONIALS = [
  {
    quote:
      'ARA Solutions filled four niche ServiceNow architect positions for our London client in under two weeks. The candidates were rigorously pre-screened and hit the ground running on day one.',
    name: 'Marcus Vance',
    role: 'Head of Technology, CloudScale Europe',
    image: images.avatars.clients.marcusVance,
  },
  {
    quote:
      'Our offshore ramp in Hyderabad was our biggest strategic bet of the year. ARA delivered transparent pricing, excellent talent and zero payroll friction.',
    name: 'Priya Nambiar',
    role: 'Director of People & Culture, FinFlow Labs',
    image: images.avatars.clients.priyaSharma,
  },
  {
    quote:
      'Unlike agencies that send fifty unvetted resumes, ARA presents three targeted candidates, and all of them can pass our technical tests.',
    name: 'David Kessler',
    role: 'VP of Engineering, Apex Global Media',
    image: images.avatars.clients.davidRoss,
  },
];

const FAQS = [
  {
    q: 'How quickly can you provide candidates?',
    a: 'For contract and Corp-to-Corp roles we keep pre-vetted talent ready across Java, Python, React, Cloud and Data, so a first shortlist usually arrives within 24 to 48 hours.',
  },
  {
    q: 'How do you verify candidates?',
    a: 'We check identity documents, past employment directly with HR contacts, and educational credentials. Technical skills are assessed and reviewed by senior engineers.',
  },
  {
    q: 'Can contract engineers become permanent employees?',
    a: 'Yes. We offer contract-to-hire conversion on clear terms agreed upfront, with no surprise fees.',
  },
  {
    q: 'What does the Training & Placement program include?',
    a: 'Structured, lab-based training in ServiceNow, Cybersecurity or AI/ML, real-time projects, interview preparation and placement assistance with our hiring partners.',
  },
  {
    q: 'Do you hire for non-IT roles?',
    a: 'Yes. Our full-time staffing covers both IT and non-IT positions, from engineering and leadership to operations and support roles.',
  },
];

function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-deep text-white">
      {/* Photo on the right, fading into the navy so the text stays readable. */}
      <div className="absolute inset-0 -z-10">
        <img
          src={images.heroStaffing2}
          alt=""
          className="absolute inset-y-0 right-0 h-full w-full object-cover object-[65%_center] opacity-30 [mask-image:linear-gradient(to_right,transparent_0%,black_55%)] lg:w-[68%] lg:opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep from-30% via-navy-deep/60 to-navy-deep/0" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-32 pt-16 sm:px-6 sm:pt-20 lg:px-8 lg:pb-36 lg:pt-24">
        <div className="max-w-[640px]">
          <FadeUp>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-[13px] font-medium text-slate-200">
              <span className="size-1.5 rounded-full bg-brand" />
              IT staffing & career training · Hyderabad
            </p>
          </FadeUp>
          <FadeUp delay={0.05}>
            <h1 className="mt-6 font-display text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl lg:text-[3.25rem]">
              Empowering businesses through talent.{' '}
              <span className="text-brand-light">Transforming careers</span> through technology.
            </h1>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              ARA Solutions provides IT and non-IT staffing for growing companies, and helps professionals
              build successful careers with ServiceNow, Cybersecurity and AI/ML training and placement.
            </p>
          </FadeUp>
          <FadeUp delay={0.15} className="mt-9 flex flex-wrap gap-3">
            <Button href="/contact" size="lg" arrow>
              Hire Talent
            </Button>
            <Button href="/training-placement" size="lg" variant="outline-light" arrow>
              Explore Training
            </Button>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  return (
    <div className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <FadeUp delay={0.2}>
        <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-lift lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col bg-white px-6 py-7 text-center sm:px-8">
              <dt className="order-2 mt-1 text-sm text-muted">{stat.label}</dt>
              <dd className="font-display text-3xl font-bold tracking-tight text-navy sm:text-4xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </FadeUp>
    </div>
  );
}

function Divisions() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="What we do"
          title="Two divisions, one goal: the right person in the right role"
          intro="Whether you're hiring skilled professionals or building your own tech career, we've got you covered."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {DIVISIONS.map((division, index) => {
            const Icon = division.icon;
            return (
              <Reveal
                key={division.title}
                delay={index * 0.08}
                className="flex flex-col rounded-2xl border border-line bg-white p-8 shadow-card sm:p-10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-navy text-white">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand">
                    {division.eyebrow}
                  </p>
                </div>
                <h3 className="mt-6 font-display text-2xl font-bold text-ink">{division.title}</h3>
                <p className="mt-3 leading-relaxed text-body">{division.text}</p>
                <ul className="mt-6 space-y-3">
                  {division.points.map((point) => (
                    <li key={point} className="flex items-center gap-3 text-[15px] text-ink">
                      <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-tint text-brand">
                        <Check aria-hidden="true" className="size-3" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button href={division.cta.href} variant={index === 0 ? 'primary' : 'navy'} arrow>
                    {division.cta.label}
                  </Button>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section className="bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Staffing services"
            title="Hiring models that fit how you work"
            intro="Flexible engagement options, from a single contractor to a full recruiting team."
          />
          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-2 font-display text-sm font-semibold text-navy hover:text-brand"
          >
            Talk to our team
            <ArrowRight
              aria-hidden="true"
              className="size-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service, index) => (
            <Reveal key={service.href} delay={index * 0.06}>
              <Link
                href={service.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-card transition-shadow duration-300 hover:shadow-lift"
              >
                <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt=""
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-semibold text-ink">{service.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-body">{service.text}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-5 font-display text-sm font-semibold text-brand">
                    Learn more
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Training() {
  const [featured, ...others] = TRACKS;
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Training & placement"
          title="Build your technology career"
          intro="Learn from experienced trainers, get hands-on with real projects, and get placement support when you're ready."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <Link
              href={featured.href}
              className="group relative flex h-full min-h-[460px] flex-col justify-end overflow-hidden rounded-2xl bg-navy-deep p-8 text-white sm:p-10"
            >
              <img
                src={featured.image}
                alt=""
                loading="lazy"
                className="absolute inset-0 size-full object-cover opacity-70 transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/80 to-navy-deep/20" />
              <div className="relative">
                <p className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-brand-light">
                  Most popular track
                </p>
                <h3 className="mt-3 font-display text-3xl font-bold">{featured.title} Training</h3>
                <p className="mt-3 max-w-lg leading-relaxed text-slate-300">{featured.text}</p>
                <ul className="mt-6 grid max-w-lg grid-cols-2 gap-x-6 gap-y-2.5 text-sm text-slate-200">
                  {featured.topics.map((topic) => (
                    <li key={topic} className="flex items-center gap-2">
                      <Check aria-hidden="true" className="size-4 text-brand-light" strokeWidth={2.5} />
                      {topic}
                    </li>
                  ))}
                </ul>
                <span className="mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-brand px-5 font-display text-sm font-semibold transition-colors group-hover:bg-brand-dark">
                  View ServiceNow program
                  <ArrowRight aria-hidden="true" className="size-4" />
                </span>
              </div>
            </Link>
          </Reveal>
          <div className="grid gap-6 lg:col-span-2">
            {others.map((track, index) => (
              <Reveal key={track.href} delay={0.08 + index * 0.06}>
                <Link
                  href={track.href}
                  className="group flex h-full gap-5 overflow-hidden rounded-2xl border border-line bg-white p-5 shadow-card transition-shadow duration-300 hover:shadow-lift"
                >
                  <div className="w-28 shrink-0 overflow-hidden rounded-xl bg-slate-100 sm:w-36">
                    <img
                      src={track.image}
                      alt=""
                      loading="lazy"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div className="flex flex-col py-1">
                    <h3 className="font-display text-lg font-semibold text-ink">{track.title}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-body">{track.text}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-3 font-display text-sm font-semibold text-brand">
                      View program
                      <ArrowUpRight aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="border-y border-line bg-mist py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Why ARA Solutions" title="Why companies and candidates choose us" />
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.05} className="bg-white p-7">
                <span className="flex size-11 items-center justify-center rounded-xl bg-brand-tint text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-base font-semibold text-ink">{reason.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-body">{reason.text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="How we work"
            title="A clear process from first call to final hire"
            intro="No guesswork and no resume dumps. Just a structured path to the right candidate."
          />
          <Button href="/company/approach" variant="outline" arrow className="mt-8">
            See our approach
          </Button>
        </div>
        <ol className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
          {STEPS.map((step, index) => (
            <Reveal as="li" key={step.title} delay={index * 0.06} className="border-t-2 border-line pt-6">
              <span className="font-display text-sm font-semibold text-brand">
                Step {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-xl font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 leading-relaxed text-body">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="bg-navy-deep py-24 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading tone="dark" eyebrow="Client stories" title="Trusted by teams that hire seriously" />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((item, index) => (
            <Reveal
              as="figure"
              key={item.name}
              delay={index * 0.06}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-8"
            >
              <Quote aria-hidden="true" className="size-8 text-brand-light" />
              <blockquote className="mt-5 flex-1 leading-relaxed text-slate-200">{item.quote}</blockquote>
              <figcaption className="mt-8 flex items-center gap-4 border-t border-white/10 pt-6">
                <img src={item.image} alt="" loading="lazy" className="size-11 rounded-full object-cover" />
                <span>
                  <span className="block font-display text-sm font-semibold text-white">{item.name}</span>
                  <span className="block text-[13px] text-slate-400">{item.role}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently asked questions"
            intro="Can't find what you're looking for? Our team is happy to help."
          />
          <Button href="/contact" variant="outline" arrow className="mt-8">
            Ask a question
          </Button>
        </div>
        <div className="divide-y divide-line border-y border-line lg:col-span-8">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left font-display text-lg font-semibold text-ink transition-colors hover:text-navy"
                  >
                    {item.q}
                    <span
                      className={`flex size-8 shrink-0 items-center justify-center rounded-full border transition-colors ${isOpen ? 'border-brand bg-brand text-white' : 'border-line text-ink'}`}
                    >
                      {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                    </span>
                  </button>
                </h3>
                <div
                  className={`grid transition-all duration-300 ${isOpen ? 'grid-rows-[1fr] pb-6 opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                >
                  <p className="overflow-hidden pr-14 leading-relaxed text-body">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className="px-4 pb-24 sm:px-6 sm:pb-28 lg:px-8">
      <Reveal className="relative isolate mx-auto max-w-[76rem] overflow-hidden rounded-3xl bg-navy px-6 py-16 text-center text-white sm:px-16 sm:py-20">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(#fff_1px,transparent_1px),linear-gradient(90deg,#fff_1px,transparent_1px)] [background-size:48px_48px]"
        />
        <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
          Let&apos;s build your next opportunity together
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-slate-300">
          Whether you&apos;re looking for skilled professionals or planning your career in technology, ARA
          Solutions is here to help.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button href="/contact" size="lg" arrow>
            Hire Talent
          </Button>
          <Button href="/training-placement" size="lg" variant="outline-light">
            Enquire About Training
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBar />
      <Divisions />
      <Services />
      <Training />
      <WhyUs />
      <Process />
      <Testimonials />
      <Faq />
      <FinalCta />
    </>
  );
}
