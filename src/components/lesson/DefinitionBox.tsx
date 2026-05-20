'use client';

import { clsx } from 'clsx';
import { InlineMath, BlockMath } from 'react-katex';
import { MathText } from '@/components/MathText';
import React from 'react';

interface DefinitionBoxProps {
  number: number;
  title: string;
  children: React.ReactNode;
  /** Optional LaTeX display formula shown below the text */
  formula?: string;
}

export function DefinitionBox({ number, title, children, formula }: DefinitionBoxProps) {
  const id = `def-${number}`;
  return (
    <div
      id={id}
      className={clsx(
        'my-6 rounded-xl border border-violet-500/30 bg-violet-500/5',
        'overflow-hidden group animate-fade-in'
      )}
    >
      {/* Header */}
      <div className="flex items-center gap-3 px-5 py-3 bg-violet-500/10 border-b border-violet-500/20">
        <span className="px-2 py-0.5 rounded-md bg-violet-500/20 text-violet-300 text-xs font-mono font-semibold">
          Def {number}
        </span>
        <span className="font-semibold text-violet-200"><MathText text={title} /></span>
        <a
          href={`#${id}`}
          className="ml-auto opacity-0 group-hover:opacity-100 text-text-faint hover:text-text transition-opacity text-sm"
          aria-label={`Link to definition ${number}`}
        >
          #
        </a>
      </div>
      {/* Body */}
      <div className="px-5 py-4 text-text leading-relaxed space-y-2">
        {children}
        {formula && (
          <div className="mt-3">
            <BlockMath math={formula} />
          </div>
        )}
      </div>
    </div>
  );
}

// Re-export math helpers so MDX files don't need extra imports
export { InlineMath as M, BlockMath as BM };
