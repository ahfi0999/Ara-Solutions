import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { FileSearch, HandHeart, Mail, Phone, ShieldCheck, UserCheck } from 'lucide-react';
import { site } from '@/content/site';
import { privacy, type Privacy, type PrivacyBlock } from '@/content/privacy';
import { PageHero } from '@/components/ui/PageHero';
import { Container } from '@/components/ui/Section';
import { OnThisPage } from '@/components/ui/OnThisPage';

export const metadata: Metadata = {
  title: 'Privacy Notice',
  description:
    'How ARA Solutions collects, uses and protects your personal information, and your rights under India’s Digital Personal Data Protection Act, 2023.',
  alternates: { canonical: '/privacy/' },
};

const SUMMARY_ICONS: Record<Privacy['summary'][number]['icon'], typeof FileSearch> = {
  collect: FileSearch,
  use: HandHeart,
  sell: ShieldCheck,
  control: UserCheck,
};

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

function ContactCard() {
  const rows = [
    { icon: Mail, label: 'Email', value: site.email, href: site.emailHref },
    { icon: Phone, label: 'Phone', value: site.phone, href: site.phoneHref },
  ];
  return (
    <div className="rounded-3xl bg-ink p-6 text-white shadow-lift sm:p-8">
      <p className="text-lg font-semibold tracking-tight">{site.legalName}</p>
      <p className="mt-1 text-[15px] text-white/60">
        {site.address.area}, {site.address.city}, {site.address.region}, {site.address.country}
      </p>
      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {rows.map((row) => (
          <div key={row.label}>
            <dt className="sr-only">{row.label}</dt>
            <dd>
              <a
                href={row.href}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-[15px] font-medium transition-colors hover:border-white/25 hover:bg-white/[0.08]"
              >
                <row.icon aria-hidden className="size-4 shrink-0 text-brand-300" />
                {row.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-[14px] leading-relaxed text-white/60">
        We will acknowledge your request promptly and respond within the time the law requires.
      </p>
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
            <li key={item.text} className="relative pl-6">
              <span aria-hidden className="absolute left-0.5 top-[0.72em] size-1.5 rounded-full bg-brand" />
              {item.lead && <strong className="font-semibold text-text">{item.lead}. </strong>}
              {rich(item.text)}
            </li>
          ))}
        </ul>
      );
    case 'table':
      return (
        <>
          <div className="hidden overflow-hidden rounded-2xl border border-line bg-paper sm:block">
            <table className="w-full text-left text-[15px] leading-relaxed">
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
                          className="whitespace-nowrap px-4 py-3.5 font-mono text-[13px] font-medium text-text"
                        >
                          {cell}
                        </th>
                      ) : (
                        <td key={j} className={j === 2 ? 'px-4 py-3.5' : 'whitespace-nowrap px-4 py-3.5'}>
                          {cell}
                        </td>
                      ),
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {/* Phones: one card per row instead of a squeezed table. */}
          <ul className="space-y-3 sm:hidden" aria-label={block.caption}>
            {block.rows.map((row) => (
              <li key={row[0]} className="rounded-2xl border border-line bg-paper p-4 text-[15px]">
                <p className="font-mono text-[13px] font-medium text-text">{row[0]}</p>
                <dl className="mt-2 space-y-1.5">
                  {row.slice(1).map((cell, j) => (
                    <div key={j} className="grid grid-cols-[5.5rem_minmax(0,1fr)] gap-2">
                      <dt className="text-[13px] leading-6 text-faint">{block.head[j + 1]}</dt>
                      <dd className="leading-relaxed">{cell}</dd>
                    </div>
                  ))}
                </dl>
              </li>
            ))}
          </ul>
        </>
      );
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
            Privacy <em>notice</em>
          </>
        }
        intro={privacy.intro}
      >
        <dl className="flex flex-wrap gap-x-8 gap-y-2 text-[15px]">
          <div className="flex gap-2">
            <dt className="text-white/50">Last updated</dt>
            <dd className="font-medium text-white">{privacy.updated}</dd>
          </div>
          <div className="flex gap-2">
            <dt className="text-white/50">Applies to</dt>
            <dd className="font-medium text-white">{privacy.appliesTo}</dd>
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
              <div className="rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-8">
                <h2 className="text-lg font-semibold tracking-tight">Privacy at a glance</h2>
                <ul className="mt-6 grid gap-6 sm:grid-cols-2">
                  {privacy.summary.map((item) => {
                    const Icon = SUMMARY_ICONS[item.icon];
                    return (
                      <li key={item.title} className="flex gap-4">
                        <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand">
                          <Icon aria-hidden className="size-5" />
                        </span>
                        <div>
                          <p className="font-semibold tracking-tight">{item.title}</p>
                          <p className="mt-1 text-[15px] leading-relaxed text-muted">{item.text}</p>
                        </div>
                      </li>
                    );
                  })}
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
