import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, Check } from 'lucide-react';
import { about, principles } from '@/content/company';
import { programs } from '@/content/programs';
import { services } from '@/content/services';
import { stats } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { AlumniMarquee } from '@/components/home/AlumniMarquee';
import { ClosingCta } from '@/components/home/ClosingCta';

export const metadata: Metadata = {
  title: 'About Us',
  description: about.intro,
  alternates: { canonical: '/company/about/' },
};

const whatWeDo = [
  ...services.map((service) => ({
    title: service.shortName,
    text: service.menuText,
    href: `/services/${service.slug}/`,
  })),
  {
    title: 'Training & Placement',
    text: `${programs.length} career-focused programs`,
    href: '/training-placement/',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About ARA Solutions"
        title={
          <>
            Built for ambition. <em>Powered by people.</em>
          </>
        }
        intro={about.intro}
      >
        <div className="flex flex-wrap gap-3">
          <EnquiryButton size="lg" arrow>
            Contact our team
          </EnquiryButton>
          <ButtonLink href="/company/approach/" variant="ghost-light" size="lg">
            Explore our approach
          </ButtonLink>
        </div>
      </PageHero>

      <section className="py-20 sm:py-28">
        <Container className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title={
                <>
                  Connecting talent to <em>opportunity</em>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {about.whoWeAre.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <dl className="grid content-start gap-4 sm:grid-cols-2">
            {stats.map((stat, index) => (
              <Reveal
                key={stat.label}
                delay={index * 0.06}
                className={index === 2 ? 'sm:col-span-2' : undefined}
              >
                <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-7 text-white">
                  <dd className="text-5xl font-semibold tracking-[-0.04em]">
                    {stat.value.toLocaleString('en-IN')}
                    {stat.suffix}
                  </dd>
                  <dt className="mt-8 text-white/60">{stat.label}</dt>
                </div>
              </Reveal>
            ))}
          </dl>
        </Container>
      </section>

      <section className="border-y border-line bg-paper py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading eyebrow="The hiring challenge" title={about.hiringChallenge.title} />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {about.hiringChallenge.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
          </div>
          <ul className="grid content-center gap-3">
            {about.hiringChallenge.points.map((point) => (
              <li
                key={point}
                className="flex items-center gap-4 rounded-2xl border border-line bg-canvas p-5 text-lg font-medium tracking-tight"
              >
                <span className="flex size-10 items-center justify-center rounded-xl bg-brand/[0.08] text-brand">
                  <Check aria-hidden className="size-5" />
                </span>
                {point}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <SectionHeading
            eyebrow="Our operating principles"
            title={
              <>
                The right talent, model and <em>moment</em>
              </>
            }
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {principles.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} className="h-full">
                <div className="h-full rounded-2xl border border-line bg-paper p-7 shadow-soft">
                  <span className="font-mono text-[12px] text-faint">
                    Principle {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
        <div aria-hidden className="grid-lines absolute inset-0" />
        <Container className="relative">
          <SectionHeading
            tone="dark"
            eyebrow="What we do"
            title="Workforce solutions and training, under one roof"
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whatWeDo.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group flex h-full items-start justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-white/25"
                >
                  <span>
                    <span className="block text-lg font-semibold tracking-tight">{item.title}</span>
                    <span className="mt-1 block text-[15px] text-white/60">{item.text}</span>
                  </span>
                  <ArrowUpRight
                    aria-hidden
                    className="size-5 shrink-0 text-white/40 transition-colors group-hover:text-white"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <AlumniMarquee />
      <ClosingCta
        title="Start a conversation"
        intro="Tell us about your workforce requirements or career goals. We'll tell you how we'd approach them."
      />
    </>
  );
}
