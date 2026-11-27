import type { ReactNode } from 'react';
import { alumniCompanies, clientele } from '@/content/home';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ButtonLink } from '@/components/ui/Button';
import { LogoMarquee, type MarqueeLogo } from '@/components/home/LogoMarquee';

export const ALUMNI_HEIGHT = { sm: 24, md: 28, lg: 38 } as const;

const CLIENTS: MarqueeLogo[] = clientele.map((client) => ({
  id: client.name,
  name: client.name,
  src: client.logo ? `/logos/clients/${client.logo}` : undefined,
  height: client.height,
}));

/** LTIMindtree is already in the client row, so it is not repeated here. */
const ALUMNI: MarqueeLogo[] = alumniCompanies
  .filter((company) => company.logo !== 'ltimindtree')
  .map((company) => ({
    id: company.logo,
    name: company.name,
    src: `/logos/alumni/${company.logo}.svg`,
    height: ALUMNI_HEIGHT[company.size],
  }));

/**
 * Proof in one place: organisations ARA has recruited for (from ARA's pitch deck), rolling one way,
 * and the companies where professionals trained by ARA now work, rolling the other way.
 * `alumni={false}` shows the client row only (used on the staffing service pages). The About page passes its
 * own heading and labels, links "Hire with ARA" to the services page and adds a link under the logos.
 */
export function Clientele({
  alumni = true,
  className,
  title,
  alumniLabel = 'And where the professionals we trained now work',
  hireHref,
  more,
}: {
  alumni?: boolean;
  className?: string;
  title?: ReactNode;
  alumniLabel?: string;
  /** Link "Hire with ARA" to this page instead of opening the enquiry form. */
  hireHref?: string;
  /** Shown centred under the logos. */
  more?: ReactNode;
}) {
  return (
    <section id="clients" className={cn('py-20 sm:py-28', className)}>
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Clientele"
            title={
              title ?? (
                <>
                  Organisations we have <em>recruited for</em>
                </>
              )
            }
            intro="Clients in India, the USA and the UK trust ARA Solutions with their IT and non‑IT hiring."
          />
          {hireHref ? (
            <ButtonLink href={hireHref} size="lg" arrow className="shrink-0 self-start lg:self-auto">
              Hire with ARA
            </ButtonLink>
          ) : (
            <EnquiryButton size="lg" arrow interest="hiring" className="shrink-0 self-start lg:self-auto">
              Hire with ARA
            </EnquiryButton>
          )}
        </div>

        <div className="mt-12">
          <LogoMarquee items={CLIENTS} duration={70} label="Organisations we have recruited for" />
        </div>

        {alumni && (
          <>
            <p className="mt-14 flex items-center gap-4 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-muted">
              <span aria-hidden className="h-px flex-1 bg-text/15" />
              {alumniLabel}
              <span aria-hidden className="h-px flex-1 bg-text/15" />
            </p>
            <div className="mt-8">
              <LogoMarquee
                items={ALUMNI}
                duration={55}
                reverse
                label="Companies where professionals trained by ARA work"
              />
            </div>
          </>
        )}
        {more && <div className="mt-12 flex justify-center">{more}</div>}
      </Container>
    </section>
  );
}
