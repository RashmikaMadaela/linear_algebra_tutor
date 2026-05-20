'use client';

import { create } from 'zustand';
import {
  loadProgress,
  markLessonComplete,
  updateLessonVisit,
  isLessonComplete,
  getSectionProgress,
  type ProgressData,
} from '@/lib/progress';

interface ProgressStore {
  data: ProgressData;
  hydrated: boolean;
  hydrate: () => void;
  markComplete: (sectionSlug: string, lessonSlug: string) => void;
  recordVisit: (sectionSlug: string, lessonSlug: string) => void;
  isComplete: (sectionSlug: string, lessonSlug: string) => boolean;
  sectionProgress: (sectionSlug: string, totalLessons: number) => number;
}

export const useProgressStore = create<ProgressStore>((set, get) => ({
  data: { lessons: {}, version: 1 },
  hydrated: false,

  hydrate: () => {
    const data = loadProgress();
    set({ data, hydrated: true });
  },

  markComplete: (sectionSlug, lessonSlug) => {
    markLessonComplete(sectionSlug, lessonSlug);
    set({ data: loadProgress() });
  },

  recordVisit: (sectionSlug, lessonSlug) => {
    updateLessonVisit(sectionSlug, lessonSlug);
    set({ data: loadProgress() });
  },

  isComplete: (sectionSlug, lessonSlug) => {
    return isLessonComplete(sectionSlug, lessonSlug, get().data);
  },

  sectionProgress: (sectionSlug, totalLessons) => {
    return getSectionProgress(sectionSlug, totalLessons, get().data);
  },
}));
