export type HintLevel = 0 | 1 | 2 | 3; // 0=no hint, 1=nudge, 2=partial, 3=full

export type ProblemType =
  | 'proof'
  | 'computation'
  | 'true-false'
  | 'multiple-choice'
  | 'short-answer'
  | 'verification'
  | 'reasoning';

export type Difficulty = 'easy' | 'medium' | 'hard';

export type HintObject = { level: HintLevel; text: string };
export type Hint = string | HintObject;

export interface PracticeQuestion {
  id: string;
  type: ProblemType;
  difficulty: Difficulty;
  question: string;    // LaTeX/MDX (formerly 'statement')
  hints: Hint[];
  solution?: string;    // LaTeX/MDX — full worked solution
  relatedDefinitions?: number[];
  relatedTheorems?: number[];
}

export interface PracticeSet {
  sectionSlug: string;
  lessonSlug: string;
  questions: PracticeQuestion[];
}
