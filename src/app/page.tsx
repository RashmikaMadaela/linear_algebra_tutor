'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import { SYLLABUS, TOTAL_LESSONS } from '@/lib/content';
import { useProgressStore } from '@/store/progressStore';
import { clsx } from 'clsx';

function ProgressRing({
  percent,
  size = 48,
  stroke = 4,
}: {
  percent: number;
  size?: number;
  stroke?: number;
}) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const dash = (percent / 100) * circ;

  return (
    <svg width={size} height={size} className="-rotate-90">
      <circle cx={size / 2} cy={size / 2} r={r} stroke="#2e3247" strokeWidth={stroke} fill="none" />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={r}
        stroke="#6366f1"
        strokeWidth={stroke}
        fill="none"
        strokeDasharray={`${dash} ${circ}`}
        strokeLinecap="round"
        style={{ transition: 'stroke-dasharray 0.6s ease' }}
      />
    </svg>
  );
}

export default function HomePage() {
  const { hydrate, hydrated, sectionProgress } = useProgressStore();

  useEffect(() => {
    if (!hydrated) hydrate();
  }, [hydrate, hydrated]);

  const totalCompleted = SYLLABUS.reduce(
    (sum, s) => sum + Math.round((sectionProgress(s.slug, s.lessons.length) / 100) * s.lessons.length),
    0
  );
  const overallPercent = Math.round((totalCompleted / TOTAL_LESSONS) * 100);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Hero */}
      <div className="mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium mb-6">
          MA2034 · University of Moratuwa
        </div>
        <h1 className="text-5xl font-bold text-text mb-4 leading-tight">
          Linear Algebra
          <br />
          <span className="text-primary">Interactive Course</span>
        </h1>
        <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
          A proof-based journey through algebraic structures, vector spaces, inner products,
          linear transformations, spectral theory, and decompositions — with worked examples,
          interactive visualisations, and practice problems.
        </p>

        {/* Overall progress bar */}
        {hydrated && overallPercent > 0 && (
          <div className="mt-8 max-w-xs mx-auto">
            <div className="flex justify-between text-xs text-text-muted mb-1">
              <span>Overall progress</span>
              <span>{totalCompleted} / {TOTAL_LESSONS} lessons</span>
            </div>
            <div className="h-2 rounded-full bg-bg-border overflow-hidden">
              <div
                className="h-full rounded-full bg-primary transition-all duration-700"
                style={{ width: `${overallPercent}%` }}
              />
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <Link
            href={`/topics/${SYLLABUS[0].slug}/${SYLLABUS[0].lessons[0].slug}`}
            className="px-6 py-3 rounded-xl bg-primary hover:bg-primary-hover text-white font-medium transition-colors"
          >
            Start Learning →
          </Link>
          <Link
            href={`/topics/${SYLLABUS[0].slug}`}
            className="px-6 py-3 rounded-xl bg-bg-surface hover:bg-bg-elevated border border-bg-border text-text font-medium transition-colors"
          >
            View Syllabus
          </Link>
        </div>
      </div>

      {/* Section cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {SYLLABUS.map((section) => {
          const progress = sectionProgress(section.slug, section.lessons.length);
          const firstLesson = section.lessons[0];

          return (
            <Link
              key={section.slug}
              href={`/topics/${section.slug}`}
              className={clsx(
                'group relative rounded-2xl border border-bg-border bg-bg-surface p-6',
                'hover:border-primary/40 hover:bg-bg-elevated transition-all duration-200',
                'flex flex-col gap-4'
              )}
            >
              {/* Section number + icon */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-bg-elevated border border-bg-border flex items-center justify-center text-xl">
                    {section.icon}
                  </div>
                  <div>
                    <div className="text-xs text-text-faint font-mono">Section {section.number}</div>
                    <div className={clsx('font-bold text-base', section.color)}>{section.title}</div>
                  </div>
                </div>
                {hydrated && (
                  <div className="relative flex items-center justify-center">
                    <ProgressRing percent={progress} />
                    <span className="absolute text-[10px] font-mono text-text-faint">
                      {progress > 0 ? `${progress}%` : ''}
                    </span>
                  </div>
                )}
              </div>

              <p className="text-sm text-text-muted leading-relaxed flex-1">{section.description}</p>

              <div className="flex items-center justify-between text-xs text-text-faint">
                <span>{section.lessons.length} lessons</span>
                <span className="group-hover:text-primary transition-colors">Begin →</span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Feature callouts */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: '📐', title: 'Rigorous Proofs', text: 'Every theorem includes a full proof with an optional sketch for intuition.' },
          { icon: '🎯', title: 'Worked Examples', text: 'Step-by-step reveal so you can work alongside each example at your own pace.' },
          { icon: '🧠', title: 'Practice Problems', text: 'Tiered hints and full solutions — from easy computations to proof-writing.' },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border border-bg-border bg-bg-surface p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <div className="font-semibold text-text mb-1">{f.title}</div>
            <div className="text-sm text-text-muted">{f.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
