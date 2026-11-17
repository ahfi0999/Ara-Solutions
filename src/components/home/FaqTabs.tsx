'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { hiringFaqs, trainingFaqs } from '@/content/home';
import { cn } from '@/lib/cn';
import { Container, SectionHeading } from '@/components/ui/Section';
import { FaqList } from '@/components/home/Faq';

const TABS = [
  { key: 'hiring', label: 'Hiring', items: hiringFaqs },
  { key: 'training', label: 'Training', items: trainingFaqs },
] as const;

/** FAQ with one tab per audience: hiring questions and training questions. */
export function FaqTabs() {
  const [tab, setTab] = useState<(typeof TABS)[number]['key']>('hiring');
  const current = TABS.find((t) => t.key === tab) ?? TABS[0];
  return (
    <section id="faq" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Questions, <em>answered.</em>
              </>
            }
            intro="Can't find what you're looking for? Call or WhatsApp us and we'll help."
          />
          <div
            role="tablist"
            aria-label="Questions about"
            className="mt-8 inline-flex rounded-full border border-line bg-paper p-1 shadow-soft"
          >
            {TABS.map((t) => (
              <button
                key={t.key}
                type="button"
                role="tab"
                aria-selected={tab === t.key}
                aria-controls="faq-panel"
                onClick={() => setTab(t.key)}
                className={cn(
                  'relative rounded-full px-5 py-2 text-[15px] font-medium transition-colors',
                  tab === t.key ? 'text-white' : 'text-muted hover:text-ink',
                )}
              >
                {tab === t.key && (
                  <motion.span
                    layoutId="faq-tab"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
                <span className="relative">{t.label}</span>
              </button>
            ))}
          </div>
        </div>
        <motion.div
          key={tab}
          id="faq-panel"
          role="tabpanel"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaqList items={current.items} />
        </motion.div>
      </Container>
    </section>
  );
}
