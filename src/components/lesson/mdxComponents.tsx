import type { MDXComponents } from 'mdx/types';
import { DefinitionBox } from './DefinitionBox';
import { TheoremBox, ProofBlock } from './TheoremBox';
import { StepReveal } from './StepReveal';
import { SummaryBox } from './SummaryBox';
import { InlineMath, BlockMath } from 'react-katex';

export const mdxComponents: MDXComponents = {
  // Custom lesson components
  DefinitionBox,
  TheoremBox,
  ProofBlock,
  StepReveal,
  SummaryBox,

  // Math helpers
  M: ({ math }: { math: string }) => <InlineMath math={math} />,
  BM: ({ math }: { math: string }) => <BlockMath math={math} />,

  // Typography overrides with Tailwind
  h2: ({ children }) => (
    <h2 className="text-2xl font-bold text-text mt-10 mb-4 pb-2 border-b border-bg-border">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-xl font-semibold text-text mt-8 mb-3">{children}</h3>
  ),
  p: ({ children }) => (
    <p className="text-text leading-relaxed mb-4">{children}</p>
  ),
  ul: ({ children }) => (
    <ul className="list-disc list-inside space-y-1 mb-4 text-text">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="list-decimal list-inside space-y-1 mb-4 text-text">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => (
    <strong className="font-semibold text-text">{children}</strong>
  ),
  em: ({ children }) => <em className="italic text-text-muted">{children}</em>,
  code: ({ children }) => (
    <code className="text-accent bg-bg-surface border border-bg-border rounded px-1.5 py-0.5 text-sm font-mono">
      {children}
    </code>
  ),
  pre: ({ children }) => (
    <pre className="bg-bg-surface border border-bg-border rounded-xl p-4 overflow-x-auto text-sm font-mono mb-4">
      {children}
    </pre>
  ),
  hr: () => <hr className="border-bg-border my-8" />,
  blockquote: ({ children }) => (
    <blockquote className="border-l-4 border-primary/50 pl-4 my-4 text-text-muted italic">
      {children}
    </blockquote>
  ),
};
