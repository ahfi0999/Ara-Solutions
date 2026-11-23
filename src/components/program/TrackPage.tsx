import { trackListedCourses, trackPrograms, type Track } from '@/content/tracks';
import { PageHero } from '@/components/ui/PageHero';
import { Container, SectionHeading } from '@/components/ui/Section';
import { ProgramCard } from '@/components/home/ProgramShowcase';
import { EnquiryButton } from '@/components/enquiry/EnquiryProvider';
import { ClosingCta } from '@/components/home/ClosingCta';

/**
 * A training track (e.g. ServiceNow): its full programs as the usual program cards, then its other
 * courses as cards with an "Ask about this course" button (a "New" badge where the client marked one).
 * Each course card has an anchor (#id) so the menu can link straight to it.
 */
export function TrackPage({ track }: { track: Track }) {
  const programs = trackPrograms(track);
  const courses = trackListedCourses(track);
  const fresh = track.courses.filter((course) => course.kind === 'course' && course.isNew).length;
  return (
    <>
      <PageHero eyebrow="Training track" title={`${track.name} courses`} intro={track.intro}>
        <p className="text-[15px] text-white/60">
          {track.courses.length} {track.courses.length === 1 ? 'course' : 'courses'}
          {fresh > 0 && `, ${fresh} new`}
        </p>
      </PageHero>

      <section className="py-16 sm:py-24">
        <Container>
          {programs.length > 0 && (
            <>
              <SectionHeading
                eyebrow="Full programs"
                title={
                  <>
                    Programs with the full <em>syllabus</em>
                  </>
                }
                intro="Curriculum, projects, certifications and careers, each on its own page."
              />
              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {programs.map(({ program }) => (
                  <ProgramCard key={program.slug} program={program} />
                ))}
              </div>
            </>
          )}

          {courses.length > 0 && (
            <div className={programs.length > 0 ? 'mt-20' : undefined}>
              <SectionHeading
                eyebrow="More courses"
                title={
                  <>
                    More {track.name} <em>courses</em>
                  </>
                }
                intro="Ask an advisor for the syllabus, duration, fees and next batch of any of these courses."
              />
              <ul className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <li
                    key={course.id}
                    id={course.id}
                    className="flex scroll-mt-32 flex-col rounded-3xl border border-line bg-paper p-6 shadow-soft sm:p-7"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="text-xl font-semibold tracking-tight">{course.name}</h3>
                      {course.isNew && (
                        <span className="shrink-0 rounded-full bg-brand px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-white">
                          New
                        </span>
                      )}
                    </div>
                    <p className="mt-2 leading-relaxed text-muted">
                      Part of the {track.name} track at ARA Solutions, Hyderabad, with placement assistance.
                    </p>
                    <div className="mt-auto pt-6">
                      <EnquiryButton
                        variant="dark"
                        interest="not-sure"
                        title={`${course.name}: syllabus and batches`}
                        arrow
                      >
                        Ask about this course
                      </EnquiryButton>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </Container>
      </section>

      <ClosingCta
        line="training"
        defaultInterest="not-sure"
        title={`Not sure which ${track.name} course fits you?`}
        intro="Share your background and goals, and an advisor will recommend a course and share batch dates and fees."
      />
    </>
  );
}
