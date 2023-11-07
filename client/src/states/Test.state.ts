import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { TestQuestion } from "../../types/Test/Question";
import type { Test, TestMetaData } from "../../types/Test/Test";

type Actions = {
  setQuestionsList: (questionsList: TestQuestion[]) => void;
  setAnswersList: (answersList: number[]) => void;
  setTestMetaData: (testMetaData: TestMetaData) => void;
  setCurrentQuestionIndex: (index: number) => void;
  setRemainingTime: (time: number) => void;
  resetState: () => void;
};

const initialState: Test = {
  questionsList: [],
  answersList: [],
  testMetaData: null,
  currentQuestionIndex: 0,
  remainingTime: 0,
};

export const testState = create<Test & Actions>()(
  persist(
    (set) => ({
      ...initialState,
      setQuestionsList(questionsList) {
        set(() => ({ questionsList: questionsList }));
      },
      setAnswersList(answersList) {
        set(() => ({ answersList: answersList }));
      },
      setTestMetaData(testMetaData) {
        set(() => ({ testMetaData: testMetaData }));
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
    { name: "testState", storage: createJSONStorage(() => sessionStorage) }
  )
);
