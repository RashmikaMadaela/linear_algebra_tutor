'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { SYLLABUS } from '@/lib/content';
import { useProgressStore } from '@/store/progressStore';
import { clsx } from 'clsx';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();
  const { sectionProgress, hydrate, hydrated } = useProgressStore();

  useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrate, hydrated]);

  // Determine which section is active so it auto-expands
  const activeSection = SYLLABUS.find(
    (s) => pathname?.includes(`/topics/${s.slug}`)
  )?.slug;

  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(activeSection ? [activeSection] : [])
  );

  useEffect(() => {
    if (activeSection) {
      setExpandedSections((prev) => new Set([...prev, activeSection]));
    }
  }, [activeSection]);

  const toggleSection = (slug: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/60 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      <aside
        className={clsx(
          'fixed top-0 left-0 z-30 h-full w-72 flex flex-col',
          'bg-bg-surface border-r border-bg-border',
          'transition-transform duration-300',
          'lg:static lg:translate-x-0',
          isOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        {/* Logo / Title */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-bg-border">
          <Link href="/" className="flex items-center gap-2 group" onClick={onClose}>
            <span className="text-2xl">𝕃</span>
            <div>
              <div className="font-semibold text-sm text-text leading-tight group-hover:text-primary transition-colors">
                Linear Algebra
              </div>
              <div className="text-xs text-text-muted">MA2034 · Interactive</div>
            </div>
          </Link>
          <button
            className="lg:hidden p-1 rounded text-text-muted hover:text-text"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto py-4 px-2" aria-label="Course navigation">
          {SYLLABUS.map((section) => {
            const isExpanded = expandedSections.has(section.slug);
            const progress = sectionProgress(section.slug, section.lessons.length);
            const isActiveSection = section.slug === activeSection;

            return (
              <div key={section.slug} className="mb-1">
                {/* Section header */}
                <button
                  onClick={() => toggleSection(section.slug)}
                  className={clsx(
                    'w-full flex items-center gap-2 px-3 py-2 rounded-lg text-left text-sm',
                    'transition-colors duration-150',
                    isActiveSection
                      ? 'bg-primary/10 text-primary'
                      : 'text-text-muted hover:bg-bg-elevated hover:text-text'
                  )}
                  aria-expanded={isExpanded}
                >
                  <span className="w-6 h-6 flex items-center justify-center text-base shrink-0">
                    {section.icon}
                  </span>
                  <span className="flex-1 font-medium">
                    <span className="text-text-faint text-xs mr-1">{section.number}.</span>
                    {section.title}
                  </span>
                  {/* Progress ring */}
                  {progress > 0 && (
                    <span className="text-xs text-text-faint">{progress}%</span>
                  )}
                  <span
                    className={clsx(
                      'text-xs transition-transform duration-200',
                      isExpanded ? 'rotate-90' : 'rotate-0'
                    )}
                  >
                    ›
                  </span>
                </button>

                {/* Lessons */}
                {isExpanded && (
                  <div className="ml-4 mt-1 mb-2 border-l border-bg-border pl-3 space-y-0.5 animate-fade-in">
                    {section.lessons.map((lesson) => {
                      const lessonPath = `/topics/${section.slug}/${lesson.slug}`;
                      const isActive = pathname === lessonPath;

                      return (
                        <Link
                          key={lesson.slug}
                          href={lessonPath}
                          onClick={onClose}
                          className={clsx(
                            'flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-colors',
                            isActive
                              ? 'bg-primary/20 text-primary font-medium'
                              : 'text-text-muted hover:bg-bg-elevated hover:text-text'
                          )}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-current opacity-50 shrink-0" />
                          {lesson.title}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-bg-border">
          <div className="text-xs text-text-faint">
            MA2034 · University of Moratuwa
          </div>
        </div>
      </aside>
    </>
  );
}
