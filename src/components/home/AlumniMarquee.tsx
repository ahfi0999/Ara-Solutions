import { alumniCompanies } from '@/content/home';
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Section';
import { LogoMarquee } from '@/components/home/LogoMarquee';
import { ALUMNI_HEIGHT } from '@/components/home/Clientele';

const ALUMNI = alumniCompanies.map((company) => ({
  id: company.logo,
  name: company.name,
  src: `/logos/alumni/${company.logo}.svg`,
  height: ALUMNI_HEIGHT[company.size],
}));

/**
 * "Where our alumni work": one rolling band of logos (pauses on hover), in the same style as the
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
    <section aria-labelledby="alumni-title" className={cn('py-16 sm:py-20', className)}>
      <Container>
        <h2
          id="alumni-title"
          className="flex items-center gap-4 text-center font-mono text-[12px] uppercase tracking-[0.2em] text-muted"
        >
          <span aria-hidden className="h-px flex-1 bg-text/15" />
          {title}
          <span aria-hidden className="h-px flex-1 bg-text/15" />
        </h2>
        <div className="mt-8">
          <LogoMarquee items={ALUMNI} duration={60} label={title} />
        </div>
      </Container>
    </section>
  );
}
