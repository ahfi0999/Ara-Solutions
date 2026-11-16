import { clientele } from '@/content/home';
import { Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';

/** "Organisations we have recruited for": client logos grouped by industry, from ARA's pitch deck. */
export function Clientele() {
  return (
    <section id="clients" className="py-20 sm:py-28">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Clientele"
            title={
              <>
                Organisations we have <em>recruited for</em>
              </>
            }
            intro="Clients in India, the USA and the UK trust ARA Solutions with their IT and non‑IT hiring."
          />
          <EnquiryButton size="lg" arrow interest="hiring" className="shrink-0 self-start lg:self-auto">
            Hire with ARA
          </EnquiryButton>
        </div>
        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {clientele.map((client, index) => (
            <Reveal
              as="li"
              key={client.name}
              y={20}
              delay={(index % 4) * 0.07 + Math.floor(index / 4) * 0.05}
            >
              <div className="flex h-28 flex-col items-center justify-center gap-3 rounded-2xl border border-line bg-paper px-4 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-lift sm:h-32 sm:px-6">
                <div className="flex h-14 w-full items-center justify-center">
                  {client.logo ? (
                    /* eslint-disable-next-line @next/next/no-img-element -- small logo files */
                    <img
                      src={`/logos/clients/${client.logo}`}
                      alt={client.name}
                      loading="lazy"
                      style={{ '--logo-h': `${client.height ?? 28}px` } as React.CSSProperties}
                      className="h-[calc(var(--logo-h)*0.8)] w-auto max-w-full object-contain sm:h-(--logo-h)"
                    />
                  ) : (
                    <span className="text-balance text-center text-[15px] font-semibold leading-tight tracking-tight text-ink">
                      {client.name}
                    </span>
                  )}
                </div>
                <p className="text-center text-[12px] leading-snug text-muted">{client.sector}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
