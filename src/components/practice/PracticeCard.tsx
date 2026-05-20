'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { MathText } from '@/components/MathText';
import type { PracticeQuestion, Hint } from '@/types/practice';

function normalizeHints(hints: Hint[]): { level: number; text: string }[] {
  return hints.map((h, i) =>
    typeof h === 'string' ? { level: i + 1, text: h } : h
  );
}

interface PracticeCardProps {
  question: PracticeQuestion;
  number: number;
}

const DIFFICULTY_STYLES = {
  easy:   'bg-success/10 text-success border-success/30',
  medium: 'bg-warning/10 text-warning border-warning/30',
  hard:   'bg-error/10 text-error border-error/30',
};

const TYPE_LABELS: Record<string, string> = {
  proof:            'Proof',
  computation:      'Computation',
  verification:     'Verification',
  reasoning:        'Reasoning',
  'true-false':     'True / False',
  'multiple-choice':'MCQ',
  'short-answer':   'Short Answer',
};

export function PracticeCard({ question, number }: PracticeCardProps) {
  const [hintLevel, setHintLevel] = useState<number>(0);
  const [showSolution, setShowSolution] = useState(false);

  const normalizedHints = normalizeHints(question.hints);
  const availableHints = normalizedHints.filter((h) => h.level <= 3);
  const currentHint = availableHints[hintLevel - 1];

  return (
    <div className="rounded-xl border border-bg-border bg-bg-surface overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3 bg-bg-elevated border-b border-bg-border">
        <span className="font-mono text-text-faint text-sm">Q{number}</span>
        <span className="text-xs px-2 py-0.5 rounded-full border text-text-muted border-bg-border">
          {TYPE_LABELS[question.type]}
        </span>
        <span className={clsx('text-xs px-2 py-0.5 rounded-full border', DIFFICULTY_STYLES[question.difficulty])}>
          {question.difficulty}
        </span>
      </div>

      {/* Question */}
      <div className="px-5 py-4">
        <div className="text-text leading-relaxed text-sm">
          <MathText text={question.question} />
        </div>
      </div>

      {/* Hint revealed so far */}
      {currentHint && (
        <div className="mx-5 mb-3 px-4 py-3 rounded-lg bg-accent/5 border border-accent/20 text-sm text-text-muted animate-fade-in">
          <span className="text-xs text-accent font-mono uppercase tracking-wider mr-2">
            Hint {hintLevel}
          </span>
          <MathText text={currentHint.text} />
        </div>
      )}

      {/* Solution */}
      {showSolution && (
        <div className="mx-5 mb-4 px-4 py-3 rounded-lg bg-success/5 border border-success/20 text-sm text-text animate-fade-in">
          <div className="text-xs text-success font-mono uppercase tracking-wider mb-2">Solution</div>
          {question.solution ? (
            <div><MathText text={question.solution} /></div>
          ) : (
            <div className="text-text-muted italic">Solution not yet available.</div>
          )}
        </div>
      )}

      {/* Actions */}
      <div className="flex items-center gap-2 px-5 pb-4">
        {!showSolution && hintLevel < availableHints.length && (
          <button
            onClick={() => setHintLevel((l) => l + 1)}
            className="px-3 py-1.5 rounded-lg text-accent bg-accent/10 hover:bg-accent/20 text-xs font-medium transition-colors"
          >
            Hint {hintLevel + 1} / {availableHints.length}
          </button>
        )}
        {!showSolution && (
          <button
            onClick={() => setShowSolution(true)}
            className="px-3 py-1.5 rounded-lg text-success bg-success/10 hover:bg-success/20 text-xs font-medium transition-colors"
          >
            Show solution
          </button>
        )}
        {showSolution && (
          <button
            onClick={() => { setShowSolution(false); setHintLevel(0); }}
            className="px-3 py-1.5 rounded-lg text-text-faint hover:text-text text-xs transition-colors"
          >
            Reset
          </button>
        )}
      </div>
    </div>
  );
}
