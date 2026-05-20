import { notFound } from 'next/navigation';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SYLLABUS, getLessonMeta } from '@/lib/content';
import { PracticeCard } from '@/components/practice/PracticeCard';
import type { PracticeQuestion } from '@/types/practice';

interface Props {
  params: { slug: string; lesson: string };
}

export function generateStaticParams() {
  const params: Array<{ slug: string; lesson: string }> = [];
  for (const section of SYLLABUS) {
    for (const lesson of section.lessons) {
      params.push({ slug: section.slug, lesson: lesson.slug });
    }
  }
  return params;
}

export function generateMetadata({ params }: Props): Metadata {
  const meta = getLessonMeta(params.slug, params.lesson);
  if (!meta) return {};
  const { section, lessonIndex } = meta;
  return { title: `Practice: ${section.lessons[lessonIndex].title}` };
}

async function getPracticeQuestions(
  sectionSlug: string,
  lessonSlug: string
): Promise<PracticeQuestion[]> {
  try {
    const mod = await import(
      `@/content/practice/${sectionSlug}/${lessonSlug}`
    );
    return (mod.questions ?? mod.default) as PracticeQuestion[];
  } catch {
    return [];
  }
}

export default async function PracticePage({ params }: Props) {
  const meta = getLessonMeta(params.slug, params.lesson);
  if (!meta) notFound();

  const { section, lessonIndex } = meta;
  const lesson = section.lessons[lessonIndex];
  const questions = await getPracticeQuestions(params.slug, params.lesson);

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Header */}
      <div className="mb-8">
        <Link
          href={`/topics/${params.slug}/${params.lesson}`}
          className="text-sm text-text-muted hover:text-text transition-colors inline-flex items-center gap-1 mb-4"
        >
          ← Back to {lesson.title}
        </Link>
        <h1 className="text-3xl font-bold text-text mb-2">Practice: {lesson.title}</h1>
        <p className="text-text-muted">
          Test your understanding with these problems. Use hints if you get stuck — solutions are
          always available.
        </p>
      </div>

      {/* Questions */}
      {questions.length > 0 ? (
        <div className="space-y-6">
          {questions.map((q, i) => (
            <PracticeCard key={q.id} question={q} number={i + 1} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-bg-border bg-bg-surface px-6 py-8 text-center text-text-muted">
          <div className="text-3xl mb-3">🚧</div>
          <div className="font-semibold text-text mb-1">Practice problems coming soon</div>
          <div className="text-sm">Questions for this lesson are being prepared.</div>
        </div>
      )}
    </div>
  );
}
