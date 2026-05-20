export interface NotesRef {
  definitions?: number[];
  theorems?: number[];
  examples?: number[];
  corollaries?: number[];
}

export interface Prerequisite {
  slug: string;
  lesson: string;
  label: string;
}

export interface Lesson {
  slug: string;
  title: string;
  description: string;
  estimatedMinutes: number;
  notesRef?: NotesRef;
  prerequisites?: Prerequisite[];
}

export interface Section {
  slug: string;
  number: string; // "I", "II", etc.
  title: string;
  description: string;
  color: string; // tailwind color class for accent
  icon: string;  // emoji
  lessons: Lesson[];
}

export interface LessonFrontmatter {
  title: string;
  description: string;
  section: string;
  sectionSlug: string;
  order: number;
  estimatedMinutes: number;
  notesRef?: NotesRef;
  prerequisites?: Prerequisite[];
}

export interface CompiledLesson {
  frontmatter: LessonFrontmatter;
  content: string; // serialized MDX
}
