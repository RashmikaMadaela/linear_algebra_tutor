'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SYLLABUS } from '@/lib/content';

export function Breadcrumb() {
  const pathname = usePathname();
  if (!pathname || pathname === '/') return null;

  const parts = pathname.split('/').filter(Boolean);
  // parts: ["topics", sectionSlug, lessonSlug?]

  const crumbs: Array<{ label: string; href: string }> = [
    { label: 'Home', href: '/' },
  ];

  if (parts[0] === 'topics' && parts[1]) {
    const section = SYLLABUS.find((s) => s.slug === parts[1]);
    if (section) {
      crumbs.push({ label: section.title, href: `/topics/${section.slug}` });
      if (parts[2]) {
        const lesson = section.lessons.find((l) => l.slug === parts[2]);
        if (lesson) {
          crumbs.push({
            label: lesson.title,
            href: `/topics/${section.slug}/${lesson.slug}`,
          });
        }
        if (parts[3] === 'practice') {
          crumbs.push({
            label: 'Practice',
            href: pathname,
          });
        }
      }
    }
  }

  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-text-muted">
      {crumbs.map((crumb, i) => (
        <span key={crumb.href} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">/</span>}
          {i === crumbs.length - 1 ? (
            <span className="text-text">{crumb.label}</span>
          ) : (
            <Link href={crumb.href} className="hover:text-text transition-colors">
              {crumb.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
