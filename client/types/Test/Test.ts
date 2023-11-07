import type { Subject } from "../Subject/Subject";
import type { TestQuestion } from "./Question";

export type Test = {
  questionsList: TestQuestion[];

  answersList: number[];

  testMetaData: TestMetaData | null;

  currentQuestionIndex: number;

  remainingTime: number;
};

export type TestMetaData = {
  subject: Subject;
  topic: string;
  mode?: string;
  numberOfQuestions: number;
};
