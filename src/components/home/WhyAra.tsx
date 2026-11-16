import { Check, Globe2, ShieldCheck, Video } from 'lucide-react';
import { hiringBarriers as BARRIERS, pillars } from '@/content/home';
import { site } from '@/content/site';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CountUp, Spotlight } from '@/components/motion/primitives';
import { cn } from '@/lib/cn';
import { MediaBackground } from '@/components/motion/MediaBackground';

/** After-joining partnership, from ARA's pitch deck ("Our commitment doesn't end at joining"). */
const COMMITMENT = [
  'Pre-hiring alignment',
  'Active collaboration',
  'Transition support',
  'Proactive engagement',
  'Continued commitment',
];

const ICONS: Record<string, typeof Video> = {
  'L1 interview + video': Video,
  'Background check': ShieldCheck,
};

function Card({
  className,
  accent = false,
  children,
}: {
  className?: string;
  /** Solid brand-red card instead of the default glass card. */
  accent?: boolean;
  children: React.ReactNode;
}) {
  return (
    <Spotlight
      className={cn(
        'flex h-full flex-col overflow-hidden rounded-3xl border p-7 backdrop-blur transition-colors duration-500 sm:p-8',
        accent
          ? 'border-white/15 bg-brand/90 hover:border-white/30'
          : 'border-white/[0.08] bg-white/[0.03] hover:border-white/20',
        className,
      )}
      color={accent ? 'rgb(255 255 255 / 0.14)' : 'rgb(255 122 128 / 0.10)'}
    >
      {children}
    </Spotlight>
  );
}

function Solves({ items }: { items: readonly string[] }) {
  return (
    <div className="mt-auto pt-6">
      <p className="text-[13px] text-white/45">Solves</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[13px] font-medium text-white/80"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

/** Why companies choose ARA: the four pillars from ARA's pitch deck, plus reach and after-joining support. */
export function WhyAra() {
  const [turnaround, support, ...checks] = pillars;
  return (
    <section id="why-ara" className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
      <MediaBackground
        video="/videos/why-meeting.mp4"
        mobileVideo="/videos/why-meeting-mobile.mp4"
        poster="/videos/why-meeting.jpg"
        overlayClassName="bg-ink/80"
      />
      <div aria-hidden className="grid-lines absolute inset-0" />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Why ARA Solutions"
          title={
            <>
              Our pillars. <em>Your hiring advantage.</em>
            </>
          }
          intro="Founded in 2022 by industry veterans, we connect elite talent and technology to accelerate enterprise growth. Four pillars tackle the barriers that slow hiring down."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {/* The two headline pillars, with their big figures. */}
          {[turnaround, support].map((pillar, index) => (
            <Reveal key={pillar.title} className="md:col-span-3" delay={index * 0.06}>
              <Card>
                {'big' in pillar && (
                  <p
                    aria-hidden
                    className="text-7xl font-semibold leading-none tracking-[-0.05em] sm:text-8xl"
                  >
                    {/^\d+$/.test(pillar.big.value) ? (
                      <CountUp value={Number(pillar.big.value)} />
                    ) : (
                      pillar.big.value
                    )}
                    <span className="text-brand-300">{pillar.big.unit}</span>
                  </p>
                )}
                <h3 className="mt-6 text-2xl font-semibold tracking-tight">{pillar.title}</h3>
                <p className="mt-2 max-w-md leading-relaxed text-white/65">{pillar.text}</p>
                <Solves items={pillar.solves} />
              </Card>
            </Reveal>
          ))}

          {/* Quality checks on every candidate. */}
          {checks.map((pillar, index) => {
            const Icon = ICONS[pillar.title] ?? ShieldCheck;
            return (
              <Reveal key={pillar.title} className="md:col-span-2" delay={0.06 + index * 0.06}>
                <Card>
                  <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.08] text-brand-300">
                    <Icon aria-hidden className="size-5" />
                  </span>
                  <h3 className="mt-5 text-xl font-semibold tracking-tight">{pillar.title}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{pillar.text}</p>
                  <Solves items={pillar.solves} />
                </Card>
              </Reveal>
            );
          })}

          {/* The deck's question: one partner for all six barriers. */}
          <Reveal className="md:col-span-2" delay={0.18}>
            <Card accent>
              <h3 className="text-xl font-semibold tracking-tight">
                One partner for all six hiring barriers
              </h3>
              <ul className="mt-5 space-y-2.5">
                {BARRIERS.map((barrier) => (
                  <li key={barrier} className="flex items-center gap-2.5 text-[15px] text-white/90">
                    <Check aria-hidden className="size-4 shrink-0" />
                    {barrier}
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>

          {/* Reach. */}
          <Reveal className="md:col-span-3" delay={0.06}>
            <Card>
              <span className="flex size-11 items-center justify-center rounded-xl bg-white/[0.08] text-brand-300">
                <Globe2 aria-hidden className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">Global hubs: US, EU and Asia</h3>
              <p className="mt-2 leading-relaxed text-white/65">
                {`Based in ${site.address.area}, Hyderabad, with clients in India, the USA and the UK, and recruitment coverage across European markets.`}
              </p>
            </Card>
          </Reveal>

          {/* After joining. */}
          <Reveal className="md:col-span-3" delay={0.12}>
            <Card>
              <h3 className="text-xl font-semibold tracking-tight">Our commitment doesn’t end at joining</h3>
              <p className="mt-2 leading-relaxed text-white/65">
                Beyond recruitment, beyond placement: a partnership that lasts.
              </p>
              <ol className="mt-6 flex flex-wrap gap-2">
                {COMMITMENT.map((step, index) => (
                  <li
                    key={step}
                    className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] py-1 pl-1 pr-3 text-[13px] text-white/80"
                  >
                    <span className="flex size-6 items-center justify-center rounded-full bg-brand text-[11px] font-semibold text-white">
                      {index + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </Card>
          </Reveal>
        </div>

        <p className="mt-12 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">
          Qualified talent · Faster hiring · Stronger teams
        </p>
      </Container>
    </section>
  );
}
