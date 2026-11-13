import type { ReactNode } from 'react';
import { Container, SectionHeading } from './Section';

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
    <section className="aurora relative isolate overflow-hidden pb-20 pt-32 text-white sm:pb-24 sm:pt-40">
      <div aria-hidden className="grid-lines absolute inset-0 -z-10" />
      <Container>
        <SectionHeading
          as="h1"
          tone="dark"
          eyebrow={eyebrow}
          title={title}
          intro={intro}
        />
        {children && <div className="fade-up mt-9 [animation-delay:350ms]">{children}</div>}
      </Container>
    </section>
  );
}
