import { Briefcase, GraduationCap, Handshake, MapPin, ShieldCheck, Target } from 'lucide-react';
import { alumniCompanies } from '@/content/home';
import { principles } from '@/content/company';
import { site } from '@/content/site';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Spotlight } from '@/components/motion/primitives';
import { cn } from '@/lib/cn';
import { MediaBackground } from '@/components/motion/MediaBackground';

function Card({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <Spotlight
      className={cn(
        'h-full overflow-hidden rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur transition-colors duration-500 hover:border-white/20',
        className,
      )}
      color="rgb(255 122 128 / 0.10)"
    >
      {children}
    </Spotlight>
  );
}

function CardTitle({ icon: Icon, title, text }: { icon: typeof Target; title: string; text: string }) {
  return (
    <>
      <span className="flex size-10 items-center justify-center rounded-xl bg-white/[0.07] text-brand-300">
        <Icon aria-hidden className="size-5" />
      </span>
      <h3 className="mt-5 text-xl font-semibold tracking-tight text-white">{title}</h3>
      <p className="mt-2 leading-relaxed text-white/60">{text}</p>
    </>
  );
}

/** Why companies and learners choose ARA. Genuine strengths only. */
export function WhyAra() {
  return (
    <section id="why-ara" className="relative isolate overflow-hidden bg-ink py-20 text-white sm:py-28">
      <MediaBackground video="/videos/why-meeting.mp4" mobileVideo="/videos/why-meeting-mobile.mp4" poster="/videos/why-meeting.jpg" overlayClassName="bg-ink/80" />
      <div aria-hidden className="grid-lines absolute inset-0" />
      <Container className="relative">
        <SectionHeading
          tone="dark"
          eyebrow="Why ARA Solutions"
          title={
            <>
              Hiring is getting harder to get right. <em>We make it our job.</em>
            </>
          }
          intro="More than 13 years in IT staffing, with human judgement, market context and accountability that lasts until the candidate joins."
        />

        <div className="mt-14 grid gap-4 md:grid-cols-6">
          <Reveal className="md:col-span-4">
            <Card>
              <CardTitle
                icon={Target}
                title="The right talent, the right model, the right moment"
                text="Capability and context over keyword matches, an engagement structure that fits your reality, and speed without cutting corners."
              />
              <ul className="mt-7 grid gap-3 sm:grid-cols-3">
                {principles.map((principle) => (
                  <li
                    key={principle.title}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <p className="font-medium">{principle.title}</p>
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.05}>
            <Card>
              <CardTitle
                icon={Handshake}
                title="Accountability till joining"
                text="Our role doesn't end at the resume or the offer. We follow through onboarding and beyond."
              />
            </Card>
          </Reveal>
          <Reveal className="md:col-span-2" delay={0.05}>
            <Card>
              <CardTitle
                icon={ShieldCheck}
                title="Verified, screened talent"
                text="Technical screening, background checks and credential verification before candidates reach you."
              />
            </Card>
          </Reveal>
          <Reveal className="md:col-span-4" delay={0.1}>
            <Card>
              <CardTitle
                icon={Briefcase}
                title="Placement network"
                text="Our alumni and placed professionals work at leading companies."
              />
              <ul
                className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4"
                aria-label="Some companies where our alumni work"
              >
                {alumniCompanies.slice(0, 7).map((company) => (
                  <li key={company.logo}>
                    {/* eslint-disable-next-line @next/next/no-img-element -- small SVG logos */}
                    <img
                      src={`/logos/alumni/${company.logo}.svg`}
                      alt={company.name}
                      loading="lazy"
                      className={cn(
                        'w-auto opacity-70 brightness-0 invert',
                        company.size === 'lg' ? 'h-8' : 'h-5',
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Card>
          </Reveal>
          <Reveal className="md:col-span-3" delay={0.05}>
            <Card>
              <CardTitle
                icon={GraduationCap}
                title="Training shaped by hiring"
                text="We know what employers screen for, so our programs teach exactly that, with interview preparation and placement assistance."
              />
            </Card>
          </Reveal>
          <Reveal className="md:col-span-3" delay={0.1}>
            <Card>
              <CardTitle
                icon={MapPin}
                title="Rooted in Hyderabad, serving globally"
                text={`Based in ${site.address.area}, Hyderabad, supporting clients across India, the US, the UK and beyond.`}
              />
            </Card>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
