import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight, BookOpen, Check, Cog, GraduationCap, Handshake } from 'lucide-react';
import { about, capabilities, principles, trainingApproach } from '@/content/company';
import { allPrograms } from '@/content/programs';
import { trackHref, trackPrograms, tracks } from '@/content/tracks';
import { services } from '@/content/services';
import { stats } from '@/content/site';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ButtonLink } from '@/components/ui/Button';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { Clientele } from '@/components/home/Clientele';
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
    text: `${allPrograms.length} career-focused courses`,
    href: '/training-placement/',
  },
];

/** Icons for the core capabilities, as on ARA's pitch deck. */
const CAPABILITY_ICONS = [Handshake, GraduationCap, Cog, BookOpen];

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
                className={stats.length % 2 === 1 && index === stats.length - 1 ? 'sm:col-span-2' : undefined}
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

      {/* Core capabilities, from ARA's pitch deck. */}
      <section className="pb-20 sm:pb-28">
        <Container>
          <SectionHeading
            eyebrow="Core capabilities"
            title={
              <>
                Connecting elite talent and technology to <em>accelerate growth</em>
              </>
            }
            intro="Founded in 2022 by industry veterans, delivering global digital and workforce transformation."
          />
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, index) => {
              const Icon = CAPABILITY_ICONS[index];
              return (
                <Reveal as="li" key={item.title} delay={index * 0.06} className="h-full">
                  <div className="h-full rounded-2xl border border-line bg-paper p-7 shadow-soft">
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand/[0.08] text-brand">
                      <Icon aria-hidden className="size-5" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold tracking-tight">{item.title}</h3>
                    <p className="mt-2 leading-relaxed text-muted">{item.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </Container>
      </section>

      <section className="border-y border-line bg-paper/70 py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="For businesses: the hiring challenge"
              title={about.hiringChallenge.title}
            />
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

      {/* Training & Placement */}
      <section className="py-20 sm:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <div>
            <SectionHeading
              eyebrow="For professionals: Training & Placement"
              title={
                <>
                  Training shaped by <em>real hiring</em>
                </>
              }
            />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted">
              {trainingApproach.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>
            <ul className="mt-8 flex flex-wrap gap-2">
              {trainingApproach.points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-2 rounded-full border border-line bg-paper px-3.5 py-1.5 text-[14px]"
                >
                  <Check aria-hidden className="size-4 text-brand" /> {point}
                </li>
              ))}
            </ul>
          </div>
          <div className="content-center">
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-muted">
              {allPrograms.length} courses in {tracks.length} tracks
            </p>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {tracks.map((track, index) => {
                const courses = trackPrograms(track);
                return (
                  <Reveal as="li" key={track.slug} delay={index * 0.05} className="h-full">
                    <Link
                      href={
                        track.page
                          ? trackHref(track)
                          : `/training-placement/${courses[0]?.program.slug ?? ''}/`
                      }
                      className="group flex h-full items-center justify-between gap-3 rounded-2xl border border-line bg-paper p-5 shadow-soft transition-colors hover:border-brand/30"
                    >
                      <span>
                        <span className="block font-semibold tracking-tight">{track.name}</span>
                        <span className="mt-0.5 block text-[13px] text-muted">
                          {courses.length} {courses.length === 1 ? 'course' : 'courses'}
                        </span>
                      </span>
                      <ArrowUpRight
                        aria-hidden
                        className="size-5 shrink-0 text-muted transition-colors group-hover:text-brand"
                      />
                    </Link>
                  </Reveal>
                );
              })}
            </ul>
            <ButtonLink href="/training-placement/" className="mt-6" arrow>
              Explore training programs
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-line py-20 sm:py-28">
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

      <Clientele className="border-t border-line" />
      <ClosingCta
        title="Start a conversation"
        intro="Tell us about your workforce requirements or career goals. We'll tell you how we'd approach them."
      />
    </>
  );
}
