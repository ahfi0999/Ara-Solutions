import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import { site } from '@/content/site';
import { privacy, privacyRequestHref, type PrivacyBlock } from '@/content/privacy';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Section';
import { OnThisPage } from '@/components/ui/OnThisPage';
import { cn } from '@/lib/cn';

export const metadata: Metadata = {
  title: { absolute: 'Privacy Notice | ARA Solutions Hyderabad' },
  description:
    'How ARA Solutions collects, uses and protects your personal data across our website, training, placement and staffing services. Your rights and how to contact us.',
  alternates: { canonical: '/privacy/' },
};

const address = `${site.address.city}, ${site.address.region}, ${site.address.country}`;

/** Turns **bold** and [label](href) in the notice text into markup. */
function rich(text: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g).map((part, i) => {
    const bold = part.match(/^\*\*([^*]+)\*\*$/);
    if (bold)
      return (
        <strong key={i} className="font-semibold text-text">
          {bold[1]}
        </strong>
      );
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (link) {
      const external = /^https?:/.test(link[2]);
      return (
        <a
          key={i}
          href={link[2]}
          {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
          className="font-medium text-text underline decoration-line decoration-2 underline-offset-4 transition-colors hover:decoration-brand"
        >
          {link[1]}
        </a>
      );
    }
    return part;
  });
}

/** Section 13: who to contact, including for complaints, and a button that starts a privacy request email. */
function ContactCard() {
  const rows = [
    { icon: Building2, label: 'Company', value: site.legalName },
    {
      icon: Mail,
      label: 'Email',
      value: `${site.email} (subject line: “Privacy request”)`,
      href: privacyRequestHref,
    },
    { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
    { icon: MapPin, label: 'Address', value: address },
  ];
  return (
    <div className="rounded-3xl bg-ink p-6 text-white shadow-lift sm:p-8">
      <dl className="grid gap-4 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label} className="flex gap-3">
            <row.icon aria-hidden className="mt-1 size-4 shrink-0 text-brand-300" />
            <div className="min-w-0">
              <dt className="text-[13px] text-white/50">{row.label}</dt>
              <dd className="mt-0.5 text-[15px] font-medium">
                {row.href ? (
                  <a
                    href={row.href}
                    className="underline decoration-white/30 underline-offset-4 hover:decoration-white"
                  >
                    {row.value}
                  </a>
                ) : (
                  row.value
                )}
              </dd>
            </div>
          </div>
        ))}
      </dl>
      <a
        href={privacyRequestHref}
        className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-brand px-6 text-[15px] font-medium text-white transition-colors hover:bg-brand-600"
      >
        <Mail aria-hidden className="size-4" />
        Send a privacy request
      </a>
    </div>
  );
}

function Table({ block }: { block: Extract<PrivacyBlock, { kind: 'table' }> }) {
  const rowHead = block.rowHead ?? 'bold';
  return (
    // Phones scroll the table sideways, so the text keeps its size.
    <div className="overflow-x-auto rounded-2xl border border-line bg-paper">
      <table
        className={cn(
          'w-full text-left text-[15px] leading-relaxed',
          block.head.length > 2 && 'min-w-[40rem]',
        )}
      >
        <caption className="sr-only">{block.caption}</caption>
        <thead className="bg-canvas text-[13px] text-muted">
          <tr>
            {block.head.map((head) => (
              <th key={head} scope="col" className="px-4 py-3 font-medium">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-line">
          {block.rows.map((row) => (
            <tr key={row[0]} className="align-top">
              {row.map((cell, j) =>
                j === 0 ? (
                  <th
                    key={j}
                    scope="row"
                    className={cn(
                      'px-4 py-3.5 text-text',
                      rowHead === 'code' && 'whitespace-nowrap font-mono text-[13px] font-medium',
                      rowHead === 'bold' && 'font-medium',
                      rowHead === 'plain' && 'font-normal',
                    )}
                  >
                    {rich(cell)}
                  </th>
                ) : (
                  <td key={j} className="px-4 py-3.5">
                    {rich(cell)}
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Block({ block }: { block: PrivacyBlock }) {
  switch (block.kind) {
    case 'text':
      return <p>{rich(block.text)}</p>;
    case 'list':
      return (
        <ul className="space-y-3">
          {block.items.map((item) => (
            <li key={item} className="relative pl-6">
              <span aria-hidden className="absolute left-0.5 top-[0.72em] size-1.5 rounded-full bg-brand" />
              {rich(item)}
            </li>
          ))}
        </ul>
      );
    case 'table':
      return <Table block={block} />;
    case 'contact':
      return <ContactCard />;
  }
}

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title={
          <>
            Privacy <em>Notice</em>
          </>
        }
        intro={privacy.intro}
      >
        <dl className="flex flex-wrap gap-x-8 gap-y-2 text-[15px]">
          <div className="flex gap-2">
            <dt className="text-white/50">Company</dt>
            <dd className="font-medium text-white">
              {site.legalName}, {address}
            </dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-white/50">Last updated</dt>
            <dd className="font-medium text-white">{privacy.updated}</dd>
          </div>
        </dl>
      </PageHero>

      <section className="py-14 sm:py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 xl:gap-24">
            <aside>
              <OnThisPage items={privacy.sections.map(({ id, title }) => ({ id, title }))} />
            </aside>

            <div className="min-w-0 max-w-3xl">
              <div className="rounded-3xl border border-line bg-canvas p-6 sm:p-8">
                <h2 className="text-lg font-semibold tracking-tight">Privacy at a glance</h2>
                <ul className="mt-5 space-y-3 text-[16px] leading-relaxed text-muted">
                  {privacy.glance.map((item) => (
                    <li key={item} className="relative pl-6">
                      <span
                        aria-hidden
                        className="absolute left-0.5 top-[0.68em] size-1.5 rounded-full bg-brand"
                      />
                      {rich(item)}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-14 space-y-12">
                {privacy.sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`${section.id}-title`}
                    className="border-t border-line pt-12 first:border-0 first:pt-0"
                  >
                    <h2
                      id={`${section.id}-title`}
                      className="flex items-baseline gap-4 text-2xl font-semibold tracking-[-0.02em] sm:text-[1.75rem]"
                    >
                      <span className="font-mono text-sm font-medium text-brand">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      {section.title}
                    </h2>
                    <div className="mt-5 space-y-5 text-[17px] leading-relaxed text-muted">
                      {section.blocks.map((block, i) => (
                        <Block key={i} block={block} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
