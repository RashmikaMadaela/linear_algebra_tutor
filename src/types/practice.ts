export type HintLevel = 0 | 1 | 2 | 3; // 0=no hint, 1=nudge, 2=partial, 3=full

export type ProblemType =
  | 'proof'
  | 'computation'
  | 'true-false'
  | 'multiple-choice'
  | 'short-answer';

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Hint {
  level: HintLevel;
  text: string; // may contain LaTeX
}

export interface PracticeQuestion {
  id: string;
  type: ProblemType;
  difficulty: Difficulty;
  statement: string;   // LaTeX/MDX
  hints: Hint[];
  solution: string;    // LaTeX/MDX — full worked solution
  relatedDefinitions?: number[];
  relatedTheorems?: number[];
}

export interface PracticeSet {
  sectionSlug: string;
  lessonSlug: string;
  questions: PracticeQuestion[];
}
