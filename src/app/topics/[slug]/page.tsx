import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SYLLABUS } from '@/lib/content';
import { clsx } from 'clsx';

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return SYLLABUS.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const section = SYLLABUS.find((s) => s.slug === params.slug);
  if (!section) return {};
  return {
    title: `Section ${section.number}: ${section.title}`,
    description: section.description,
  };
}

export default function TopicPage({ params }: Props) {
  const section = SYLLABUS.find((s) => s.slug === params.slug);
  if (!section) notFound();

  const sectionIndex = SYLLABUS.indexOf(section);
  const prevSection = sectionIndex > 0 ? SYLLABUS[sectionIndex - 1] : null;
  const nextSection = sectionIndex < SYLLABUS.length - 1 ? SYLLABUS[sectionIndex + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-2xl bg-bg-surface border border-bg-border flex items-center justify-center text-2xl">
            {section.icon}
          </div>
          <div>
            <div className="text-xs text-text-faint font-mono">Section {section.number}</div>
            <h1 className={clsx('text-3xl font-bold', section.color)}>{section.title}</h1>
          </div>
        </div>
        <p className="text-text-muted leading-relaxed">{section.description}</p>
      </div>

      {/* Lesson list */}
      <div className="space-y-3">
        {section.lessons.map((lesson, i) => {
          const totalMins = lesson.estimatedMinutes;
          const notesRef = lesson.notesRef;

          return (
            <Link
              key={lesson.slug}
              href={`/topics/${section.slug}/${lesson.slug}`}
              className={clsx(
                'group flex items-start gap-4 rounded-xl border border-bg-border bg-bg-surface px-5 py-4',
                'hover:border-primary/40 hover:bg-bg-elevated transition-all duration-200'
              )}
            >
              {/* Number */}
              <div className="w-8 h-8 rounded-lg bg-bg-elevated border border-bg-border flex items-center justify-center text-sm font-mono text-text-faint shrink-0 mt-0.5">
                {i + 1}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-text group-hover:text-primary transition-colors">
                  {lesson.title}
                </div>
                <div className="text-sm text-text-muted mt-0.5 leading-snug">{lesson.description}</div>

                {/* Tags */}
                {notesRef && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {notesRef.definitions?.map((n) => (
                      <span key={`d${n}`} className="text-xs px-1.5 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
                        Def {n}
                      </span>
                    ))}
                    {notesRef.theorems?.map((n) => (
                      <span key={`t${n}`} className="text-xs px-1.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Thm {n}
                      </span>
                    ))}
                    {notesRef.examples?.map((n) => (
                      <span key={`e${n}`} className="text-xs px-1.5 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                        Ex {n}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Time */}
              <div className="text-xs text-text-faint shrink-0 mt-1">{totalMins} min</div>
            </Link>
          );
        })}
      </div>

      {/* Prev/Next section nav */}
      <div className="mt-10 flex justify-between gap-4">
        {prevSection ? (
          <Link
            href={`/topics/${prevSection.slug}`}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
          >
            ← Section {prevSection.number}: {prevSection.title}
          </Link>
        ) : <div />}
        {nextSection && (
          <Link
            href={`/topics/${nextSection.slug}`}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors"
          >
            Section {nextSection.number}: {nextSection.title} →
          </Link>
        )}
      </div>
    </div>
  );
}
