'use client';

import { useState } from 'react';
import { clsx } from 'clsx';
import { BlockMath } from 'react-katex';
import { MathText } from '@/components/MathText';

interface TheoremBoxProps {
  number: number;
  title: string;
  children: React.ReactNode;
  /** Optional display formula */
  formula?: string;
  /** Short proof sketch shown by default */
  proofSketch?: React.ReactNode;
  /** Full proof, shown after expanding */
  proof?: React.ReactNode;
  type?: 'theorem' | 'lemma' | 'corollary' | 'proposition';
}

const TYPE_STYLES = {
  theorem:     { border: 'border-emerald-500/30', bg: 'bg-emerald-500/5', headerBg: 'bg-emerald-500/10', headerBorder: 'border-emerald-500/20', badge: 'bg-emerald-500/20 text-emerald-300', title: 'text-emerald-200', label: 'Thm' },
  lemma:       { border: 'border-teal-500/30',    bg: 'bg-teal-500/5',    headerBg: 'bg-teal-500/10',    headerBorder: 'border-teal-500/20',    badge: 'bg-teal-500/20 text-teal-300',    title: 'text-teal-200',   label: 'Lem' },
  corollary:   { border: 'border-cyan-500/30',    bg: 'bg-cyan-500/5',    headerBg: 'bg-cyan-500/10',    headerBorder: 'border-cyan-500/20',    badge: 'bg-cyan-500/20 text-cyan-300',    title: 'text-cyan-200',   label: 'Cor' },
  proposition: { border: 'border-sky-500/30',     bg: 'bg-sky-500/5',     headerBg: 'bg-sky-500/10',     headerBorder: 'border-sky-500/20',     badge: 'bg-sky-500/20 text-sky-300',     title: 'text-sky-200',    label: 'Prop' },
};

export function TheoremBox({
  number,
  title,
  children,
  formula,
  proofSketch,
  proof,
  type = 'theorem',
}: TheoremBoxProps) {
  const [proofOpen, setProofOpen] = useState(false);
  const style = TYPE_STYLES[type];
  const id = `thm-${number}`;

  return (
    <div
      id={id}
      className={clsx('my-6 rounded-xl border overflow-hidden animate-fade-in group', style.border, style.bg)}
    >
      {/* Header */}
      <div className={clsx('flex items-center gap-3 px-5 py-3 border-b', style.headerBg, style.headerBorder)}>
        <span className={clsx('px-2 py-0.5 rounded-md text-xs font-mono font-semibold', style.badge)}>
          {style.label} {number}
        </span>
        <span className={clsx('font-semibold', style.title)}><MathText text={title} /></span>
        <a
          href={`#${id}`}
          className="ml-auto opacity-0 group-hover:opacity-100 text-text-faint hover:text-text transition-opacity text-sm"
          aria-label={`Link to theorem ${number}`}
        >
          #
        </a>
      </div>

      {/* Statement */}
      <div className="px-5 py-4 text-text leading-relaxed space-y-2 font-medium italic">
        {children}
        {formula && (
          <div className="mt-3">
            <BlockMath math={formula} />
          </div>
        )}
      </div>

      {/* Proof toggle */}
      {(proofSketch || proof) && (
        <div className="border-t border-white/5">
          <button
            onClick={() => setProofOpen(!proofOpen)}
            className="w-full flex items-center gap-2 px-5 py-2 text-sm text-text-muted hover:text-text hover:bg-white/5 transition-colors"
            aria-expanded={proofOpen}
          >
            <span className={clsx('transition-transform duration-200', proofOpen ? 'rotate-90' : '')}>▶</span>
            {proofOpen ? 'Hide proof' : 'Show proof'}
          </button>

          {proofOpen && (
            <div className="px-5 pb-4 text-sm text-text-muted leading-relaxed space-y-3 animate-fade-in">
              {proofSketch && !proof && (
                <div className="bg-bg-elevated rounded-lg px-4 py-3 border border-bg-border">
                  <div className="text-xs text-text-faint font-mono uppercase tracking-wider mb-2">Proof sketch</div>
                  {proofSketch}
                </div>
              )}
              {proof && (
                <ProofBlock sketch={proofSketch}>{proof}</ProofBlock>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ---- ProofBlock (can also be used standalone) ----

interface ProofBlockProps {
  children: React.ReactNode;
  sketch?: React.ReactNode;
}

export function ProofBlock({ children, sketch }: ProofBlockProps) {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="space-y-3">
      {sketch && !showFull && (
        <div className="bg-bg-elevated rounded-lg px-4 py-3 border border-bg-border">
          <div className="text-xs text-text-faint font-mono uppercase tracking-wider mb-2">Proof sketch</div>
          <div className="text-text-muted text-sm">{sketch}</div>
          <button
            onClick={() => setShowFull(true)}
            className="mt-2 text-xs text-primary hover:text-primary-hover transition-colors underline underline-offset-2"
          >
            Show full proof →
          </button>
        </div>
      )}
      {(!sketch || showFull) && (
        <div className="bg-bg-elevated rounded-lg px-4 py-3 border border-bg-border">
          <div className="text-xs text-text-faint font-mono uppercase tracking-wider mb-2">Proof</div>
          <div className="text-text-muted text-sm space-y-2">{children}</div>
          <div className="text-right text-text-faint mt-2">□</div>
        </div>
      )}
    </div>
  );
}
