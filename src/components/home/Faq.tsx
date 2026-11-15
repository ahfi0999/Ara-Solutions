import { Plus } from 'lucide-react';
import { Container, SectionHeading } from '@/components/ui/Section';

/** Accessible FAQ built on native <details>, so it works without JavaScript. */
export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {items.map((item, index) => (
        <details key={item.q} className="group" open={index === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left text-lg font-medium tracking-tight [&::-webkit-details-marker]:hidden">
            {item.q}
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line transition-all duration-300 group-open:rotate-45 group-open:border-brand group-open:bg-brand group-open:text-white">
              <Plus aria-hidden className="size-4" />
            </span>
          </summary>
          <p className="-mt-2 pb-6 pr-12 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq({
  items,
  title,
}: {
  items: readonly { q: string; a: string }[];
  title?: React.ReactNode;
}) {
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <SectionHeading
          eyebrow="FAQ"
          title={
            title ?? (
              <>
                Questions, <em>answered.</em>
              </>
            )
          }
          intro="Can't find what you're looking for? Call or WhatsApp us and we'll help."
        />
        <FaqList items={items} />
      </Container>
    </section>
  );
}
