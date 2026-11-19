import type { ReactNode } from 'react';
import { Container, SectionHeading } from './Section';
import { DarkHeroBackdrop } from '@/components/motion/DarkHeroBackdrop';

/** Dark header used at the top of inner pages. */
export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  return (
    <section className="aurora relative isolate overflow-hidden pb-20 pt-24 text-white sm:pb-24 sm:pt-[clamp(6.5rem,15vh,10rem)] [@media(max-width:639px)_and_(max-height:600px)]:pt-[5.25rem]">
      <DarkHeroBackdrop />
      <Container>
        <SectionHeading
          as="h1"
          tone="dark"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        {children && <div className="fade-up mt-9 [animation-delay:350ms] [@media(max-height:800px)]:mt-6">{children}</div>}
      </Container>
    </section>
  );
}
