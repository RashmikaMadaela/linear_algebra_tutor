const STORAGE_KEY = 'linear-algebra-progress';

export interface LessonProgress {
  completed: boolean;
  practiceScore?: number; // 0-100
  lastVisited?: string;   // ISO date string
  timeSpentSeconds?: number;
}

export interface ProgressData {
  lessons: Record<string, LessonProgress>; // key: `${sectionSlug}/${lessonSlug}`
  version: number;
}

const INITIAL_STATE: ProgressData = { lessons: {}, version: 1 };

function makeKey(sectionSlug: string, lessonSlug: string): string {
  return `${sectionSlug}/${lessonSlug}`;
}

export function loadProgress(): ProgressData {
  if (typeof window === 'undefined') return INITIAL_STATE;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_STATE;
    const parsed = JSON.parse(raw) as ProgressData;
    return parsed;
  } catch {
    return INITIAL_STATE;
  }
}

export function saveProgress(data: ProgressData): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    // storage quota exceeded — silently ignore
  }
}

export function markLessonComplete(
  sectionSlug: string,
  lessonSlug: string
): void {
  const data = loadProgress();
  const key = makeKey(sectionSlug, lessonSlug);
  data.lessons[key] = {
    ...data.lessons[key],
    completed: true,
    lastVisited: new Date().toISOString(),
  };
  saveProgress(data);
}

export function updateLessonVisit(
  sectionSlug: string,
  lessonSlug: string
): void {
  const data = loadProgress();
  const key = makeKey(sectionSlug, lessonSlug);
  data.lessons[key] = {
    completed: false,
    ...data.lessons[key],
    lastVisited: new Date().toISOString(),
  };
  saveProgress(data);
}

export function isLessonComplete(
  sectionSlug: string,
  lessonSlug: string,
  data: ProgressData
): boolean {
  return data.lessons[makeKey(sectionSlug, lessonSlug)]?.completed ?? false;
}

export function getSectionProgress(
  sectionSlug: string,
  totalLessons: number,
  data: ProgressData
): number {
  if (totalLessons === 0) return 0;
  let completed = 0;
  for (const key of Object.keys(data.lessons)) {
    if (key.startsWith(`${sectionSlug}/`) && data.lessons[key].completed) {
      completed++;
    }
  }
  return Math.round((completed / totalLessons) * 100);
}
