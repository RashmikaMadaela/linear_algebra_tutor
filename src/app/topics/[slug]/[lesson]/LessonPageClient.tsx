'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { clsx } from 'clsx';
import { useProgressStore } from '@/store/progressStore';
import type { Section, Lesson } from '@/types/lesson';

interface Adjacent {
  prev: { sectionSlug: string; lessonSlug: string; title: string } | null;
  next: { sectionSlug: string; lessonSlug: string; title: string } | null;
}

interface LessonPageClientProps {
  sectionSlug: string;
  lessonSlug: string;
  section: Section;
  lesson: Lesson;
  adjacent: Adjacent;
  children: React.ReactNode;
}

export function LessonPageClient({
  sectionSlug,
  lessonSlug,
  section,
  lesson,
  adjacent,
  children,
}: LessonPageClientProps) {
  const { recordVisit, markComplete, isComplete, hydrate, hydrated } = useProgressStore();

  useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrate, hydrated]);

  useEffect(() => {
    recordVisit(sectionSlug, lessonSlug);
  }, [sectionSlug, lessonSlug, recordVisit]);

  const completed = hydrated && isComplete(sectionSlug, lessonSlug);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Lesson header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <Link
            href={`/topics/${sectionSlug}`}
            className={clsx('text-xs font-medium px-2 py-0.5 rounded-md border', section.color,
              'bg-bg-surface border-bg-border hover:border-current/40 transition-colors')}
          >
            Section {section.number}: {section.title}
          </Link>
          {lesson.estimatedMinutes && (
            <span className="text-xs text-text-faint">{lesson.estimatedMinutes} min read</span>
          )}
        </div>
        <h1 className="text-4xl font-bold text-text mb-3">{lesson.title}</h1>
        <p className="text-text-muted leading-relaxed">{lesson.description}</p>

        {/* Notes refs */}
        {lesson.notesRef && (
          <div className="flex flex-wrap gap-1.5 mt-3">
            {lesson.notesRef.definitions?.map((n) => (
              <span key={`d${n}`} className="text-xs px-2 py-0.5 rounded-md bg-violet-500/10 text-violet-400 border border-violet-500/20">
                Definition {n}
              </span>
            ))}
            {lesson.notesRef.theorems?.map((n) => (
              <span key={`t${n}`} className="text-xs px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Theorem {n}
              </span>
            ))}
            {lesson.notesRef.examples?.map((n) => (
              <span key={`e${n}`} className="text-xs px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/20">
                Example {n}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* MDX Content */}
      <article className="prose-lesson">
        {children}
      </article>

      {/* Complete button */}
      <div className="mt-12 flex items-center justify-between py-6 border-t border-bg-border">
        <div className="text-sm text-text-muted">
          {completed ? (
            <span className="text-success flex items-center gap-1.5">
              ✓ Lesson completed
            </span>
          ) : (
            'Mark this lesson as complete when you\'re done.'
          )}
        </div>
        {!completed && (
          <button
            onClick={() => markComplete(sectionSlug, lessonSlug)}
            className="px-5 py-2 rounded-xl bg-success/20 hover:bg-success/30 text-success border border-success/30 text-sm font-medium transition-colors"
          >
            Mark complete ✓
          </button>
        )}
        <Link
          href={`/topics/${sectionSlug}/${lessonSlug}/practice`}
          className="px-5 py-2 rounded-xl bg-primary/20 hover:bg-primary/30 text-primary border border-primary/30 text-sm font-medium transition-colors"
        >
          Practice problems →
        </Link>
      </div>

      {/* Prev / Next navigation */}
      <div className="flex justify-between gap-4 mt-4">
        {adjacent.prev ? (
          <Link
            href={`/topics/${adjacent.prev.sectionSlug}/${adjacent.prev.lessonSlug}`}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors max-w-[45%]"
          >
            <span>←</span>
            <span className="truncate">{adjacent.prev.title}</span>
          </Link>
        ) : <div />}
        {adjacent.next && (
          <Link
            href={`/topics/${adjacent.next.sectionSlug}/${adjacent.next.lessonSlug}`}
            className="flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors max-w-[45%] text-right"
          >
            <span className="truncate">{adjacent.next.title}</span>
            <span>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}
