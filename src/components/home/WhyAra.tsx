import { Container, SectionHeading } from '@/components/ui/Section';
import { MediaBackground } from '@/components/motion/MediaBackground';
import { WhyAraBento } from '@/components/home/WhyAraBento';

/** Why companies choose ARA: the four pillars from ARA's pitch deck, plus reach and after-joining support. */
export function WhyAra() {
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

        <WhyAraBento />

        <p className="mt-12 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-white/50">
          Qualified talent · Faster hiring · Stronger teams
        </p>
      </Container>
    </section>
  );
}
