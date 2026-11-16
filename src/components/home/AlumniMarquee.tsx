import { alumniCompanies } from '@/content/home';
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Section';
import { LogoMarquee } from '@/components/home/LogoMarquee';

const HEIGHT = { sm: 22, md: 26, lg: 36 } as const;

const ALUMNI = alumniCompanies.map((company) => ({
  id: company.logo,
  name: company.name,
  src: `/logos/alumni/${company.logo}.svg`,
  height: HEIGHT[company.size],
}));

/**
 * "Where our alumni work": one rolling row of logos (pauses on hover), in the same style as the
 * home page's client section. Used on the Training & Placement pages.
 */
export function AlumniMarquee({
  title = 'Where our alumni work',
  className,
}: {
  title?: string;
  className?: string;
}) {
  return (
    <section aria-labelledby="alumni-title" className={cn('overflow-hidden py-16 sm:py-20', className)}>
      <Container>
        <h2
          id="alumni-title"
          className="flex items-center gap-4 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-muted"
        >
          <span aria-hidden className="h-px flex-1 bg-text/15" />
          {title}
          <span aria-hidden className="h-px flex-1 bg-text/15" />
        </h2>
      </Container>
      <div className="mt-8">
        <LogoMarquee items={ALUMNI} duration={60} label={title} />
      </div>
    </section>
  );
}
