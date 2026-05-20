'use client';

import { InlineMath, BlockMath } from 'react-katex';

/**
 * Renders a plain string that may contain $...$ (inline) and $$...$$ (block) LaTeX.
 * Safe to use wherever text could include math notation.
 */
export function MathText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let key = 0;

  // Split on $$...$$ first, then on $...$
  const blockSplit = text.split(/\$\$([\s\S]+?)\$\$/g);

  for (let i = 0; i < blockSplit.length; i++) {
    if (i % 2 === 1) {
      parts.push(<BlockMath key={key++} math={blockSplit[i]} />);
    } else {
      const inlineSplit = blockSplit[i].split(/\$((?:[^$\\]|\\.)+?)\$/g);
      for (let j = 0; j < inlineSplit.length; j++) {
        if (j % 2 === 1) {
          parts.push(<InlineMath key={key++} math={inlineSplit[j]} />);
        } else if (inlineSplit[j]) {
          parts.push(<span key={key++}>{inlineSplit[j]}</span>);
        }
      }
    }
  }

  return <>{parts}</>;
}
