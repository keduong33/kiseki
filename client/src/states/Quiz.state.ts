import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { FullInfoQuestion } from "../../../types/Quiz/Question";
import type { Quiz, QuizMetaData } from "../../../types/Quiz/Quiz";

type Actions = {
  setQuestions: (questions: FullInfoQuestion[]) => void;
  setUserAnswers: (userAnswers: (string | undefined)[]) => void;
  setQuizMetaData: (quizMetaData: QuizMetaData) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setRemainingTime: (time: number) => void;
  resetState: () => void;
  setStartTimeStamp: (timestamp: Date) => void;
  setEndTimeStamp: (timestamp: Date) => void;
};

const initialState: Quiz = {
  questions: [],
  userAnswers: [],
  quizMetaData: undefined,
  currentQuestionIndex: 0,
  remainingTime: 0,
  startTimeStamp: undefined,
  endTimeStamp: undefined,
};

export const useQuizState = create<Quiz & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setQuestions(questions) {
        set(() => ({ questions: questions }));
      },
      setUserAnswers(userAnswers) {
        set(() => ({ userAnswers: userAnswers }));
      },
      setQuizMetaData(quizMetaData) {
        set(() => ({ quizMetaData: quizMetaData }));
      },
      setCurrentQuestionIndex(index) {
        set(() => ({ currentQuestionIndex: index }));
      },
      setRemainingTime(time) {
        set(() => ({ remainingTime: time }));
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
    { name: "quizState", storage: createJSONStorage(() => sessionStorage) }
  )
);
