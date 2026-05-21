'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { BlockMath } from 'react-katex';
import { MathText } from '@/components/MathText';

interface Step {
  label: string;
  content: React.ReactNode;
  formula?: string;
}

interface StepRevealProps {
  title?: string;
  steps?: Step[];
}

export function StepReveal({ title = 'Worked Example', steps }: StepRevealProps) {
  const [revealed, setRevealed] = useState(0);
  const safeSteps = Array.isArray(steps) ? steps : [];
  const stepCount = safeSteps.length;

  return (
    <div className="my-6 rounded-xl border border-amber-500/30 bg-amber-500/5 overflow-hidden animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3 bg-amber-500/10 border-b border-amber-500/20">
        <span className="px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 text-xs font-mono font-semibold">
          Example
        </span>
        <span className="font-semibold text-amber-200"><MathText text={title} /></span>
        <span className="ml-auto text-xs text-text-faint">
          {Math.min(revealed, stepCount)} / {stepCount} steps
        </span>
      </div>

      {/* Steps */}
      <div className="px-5 py-4 space-y-4">
        {safeSteps.slice(0, revealed).map((step, i) => (
          <div
            key={i}
            className="flex gap-4 animate-fade-in"
          >
            <div className="flex flex-col items-center shrink-0">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-300 text-xs font-mono font-bold">
                {i + 1}
              </div>
              {i < stepCount - 1 && <div className="w-px flex-1 bg-amber-500/20 mt-1" />}
            </div>
            <div className="flex-1 pb-4">
              <div className="text-sm font-semibold text-amber-200 mb-1"><MathText text={step.label} /></div>
              <div className="text-text text-sm leading-relaxed">{step.content}</div>
              {step.formula && (
                <div className="mt-2">
                  <BlockMath math={step.formula} />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex items-center gap-3 px-5 pb-4">
        {revealed < stepCount && (
          <button
            onClick={() => setRevealed((r) => r + 1)}
            className="px-4 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-medium transition-colors"
          >
            Next step →
          </button>
        )}
        {revealed === stepCount && stepCount > 0 && (
          <span className="text-sm text-success">✓ All steps revealed</span>
        )}
        {revealed > 0 && (
          <button
            onClick={() => setRevealed(0)}
            className="px-3 py-1.5 rounded-lg text-text-faint hover:text-text text-sm transition-colors"
          >
            Reset
          </button>
        )}
        {revealed === 0 && stepCount > 0 && (
          <button
            onClick={() => setRevealed(1)}
            className="px-4 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-sm font-medium transition-colors"
          >
            Show first step →
          </button>
        )}
        {stepCount === 0 && (
          <span className="text-sm text-text-faint">No steps provided for this example.</span>
        )}
      </div>
    </div>
  );
}
