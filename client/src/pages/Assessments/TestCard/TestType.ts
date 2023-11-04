import type {
  AnsweredQuestion,
  TestQuestion,
} from "../../../../types/Question";
import type { Subject } from "../../../../types/Subject/Subject";

export type Test = {
  questionsList: TestQuestion[];

  answersList: number[];

  answeredQuestionsList: AnsweredQuestion[];

  quizMetaData: TestMetaData | null;

  currentQuestionIndex: number;

  remainingTime: number;
};

export type TestMetaData = {
  subject: Subject;
  topic?: string | undefined;
  mode?: string;
  numberOfQuestions: number;
};
