import { clsx } from 'clsx';
import React from 'react';

interface SummaryBoxProps {
  children: React.ReactNode;
  title?: string;
}

export function SummaryBox({ children, title = 'Key Takeaways' }: SummaryBoxProps) {
  return (
    <div className={clsx(
      'my-6 rounded-xl border border-primary/30 bg-primary/5 overflow-hidden'
    )}>
      <div className="flex items-center gap-2 px-5 py-3 bg-primary/10 border-b border-primary/20">
        <span className="text-primary text-base">★</span>
        <span className="font-semibold text-indigo-200">{title}</span>
      </div>
      <div className="px-5 py-4 text-text leading-relaxed space-y-2">
        {children}
      </div>
    </div>
  );
}
