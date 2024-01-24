import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { MarkedQuestion } from "../../../types/Quiz/Question";
import type { MarkedQuiz } from "../../../types/Quiz/Quiz";

type Actions = {
  setMarkedQuestions: (questions: MarkedQuestion[]) => void;
  setStartTimeStamp: (timestamp: Date) => void;
  setEndTimeStamp: (timestamp: Date) => void;
  setIsSaved: (isSaved: boolean) => void;
  resetState: () => void;
};

const initialState: MarkedQuiz = {
  questions: [],
  startTimeStamp: new Date(),
  endTimeStamp: new Date(),
  isSaved: false,
};

export const useMarkedQuizState = create<MarkedQuiz & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setIsSaved(isSaved) {
        set(() => ({ isSaved: isSaved }));
      },
      setMarkedQuestions(questions) {
        set(() => ({ questions: questions }));
      },
      setStartTimeStamp(timestamp) {
        set(() => ({ startTimeStamp: timestamp }));
      },
      setEndTimeStamp(timestamp) {
        set(() => ({ endTimeStamp: timestamp }));
      },
      resetState() {
        set(initialState);
      },
    }),
    {
      name: "markedQuizState",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
