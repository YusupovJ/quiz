import { IQuestion } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface QuestionStore {
  questions: IQuestion[];
  currentOrder: number;
  result: string;
  start: (variantQuestions: IQuestion[]) => void;
  next: () => void;
  correct: () => void;
  wrong: () => void;
  finish: () => void;
}

export const useQuestionStore = create(
  persist<QuestionStore>(
    (set) => ({
      questions: [],
      currentOrder: 0,
      result: "",
      start: (variantQuestions: IQuestion[]) => {
        set(() => {
          return { questions: variantQuestions };
        });
      },
      next: () => set((state) => ({ currentOrder: state.currentOrder + 1 })),
      correct: () => set((state) => ({ result: state.result + "1" })),
      wrong: () => set((state) => ({ result: state.result + "0" })),
      finish: () => {
        set(() => ({
          questions: [],
          currentOrder: 0,
          result: "",
        }));
      },
    }),
    {
      name: "questions",
    }
  )
);
