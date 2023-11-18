import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { QuizQuestion } from "../../types/Quiz/Question";
import type { Quiz, QuizMetaData } from "../../types/Quiz/Quiz";

type Actions = {
  setQuestionsList: (questionsList: QuizQuestion[]) => void;
  setAnswersList: (answersList: number[]) => void;
  setQuizMetaData: (quizMetaData: QuizMetaData) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setRemainingTime: (time: number) => void;
  resetState: () => void;
};

const initialState: Quiz = {
  questionsList: [],
  answersList: [],
  quizMetaData: null,
  currentQuestionIndex: 0,
  remainingTime: 0,
};

export const quizState = create<Quiz & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setQuestionsList(questionsList) {
        set(() => ({ questionsList: questionsList }));
      },
      setAnswersList(answersList) {
        set(() => ({ answersList: answersList }));
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
      resetState() {
        set(initialState);
      },
    }),
    { name: "quizState", storage: createJSONStorage(() => sessionStorage) }
  )
);
