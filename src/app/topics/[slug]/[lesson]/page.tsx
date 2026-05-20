import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { SYLLABUS, getLessonMeta, getAdjacentLessons } from '@/lib/content';
import { LessonPageClient } from './LessonPageClient';
import { mdxComponents } from '@/components/lesson/mdxComponents';

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
  const lesson = section.lessons[lessonIndex];
  return {
    title: lesson.title,
    description: lesson.description,
  };
}

async function getLessonContent(sectionSlug: string, lessonSlug: string) {
  const contentDir = path.join(process.cwd(), 'src', 'content', 'topics', sectionSlug);
  const filePath = path.join(contentDir, `${lessonSlug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, 'utf-8');
  const { content, data } = matter(raw);
  return { content, frontmatter: data };
}

export default async function LessonPage({ params }: Props) {
  const meta = getLessonMeta(params.slug, params.lesson);
  if (!meta) notFound();

  const { section, lessonIndex } = meta;
  const lesson = section.lessons[lessonIndex];
  const adjacent = getAdjacentLessons(params.slug, params.lesson);
  const lessonContent = await getLessonContent(params.slug, params.lesson);

  return (
    <LessonPageClient
      sectionSlug={params.slug}
      lessonSlug={params.lesson}
      section={section}
      lesson={lesson}
      adjacent={adjacent}
    >
      {lessonContent ? (
        <MDXRemote source={lessonContent.content} components={mdxComponents} />
      ) : (
        <div className="rounded-xl border border-bg-border bg-bg-surface px-6 py-8 text-center text-text-muted">
          <div className="text-3xl mb-3">🚧</div>
          <div className="font-semibold text-text mb-1">Content coming soon</div>
          <div className="text-sm">This lesson is being written. Check back soon!</div>
        </div>
      )}
    </LessonPageClient>
  );
}
