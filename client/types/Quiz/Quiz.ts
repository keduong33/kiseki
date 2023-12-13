import type { Subject } from "../Subject/Subject";
import type { FullInfoQuestion } from "./Question";

export type Quiz = {
  questions: FullInfoQuestion[];

  userAnswers: (string | null)[];

  quizMetaData: QuizMetaData | null;

  currentQuestionIndex: number;

  remainingTime: number;
};

export type QuizMetaData = {
  subject: Subject;
  topic: string;
  mode?: string;
  numberOfQuestions: number;
};
