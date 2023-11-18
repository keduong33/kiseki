import type { Subject } from "../Subject/Subject";
import type { QuizQuestion } from "./Question";

export type Quiz = {
  questionsList: QuizQuestion[];

  answersList: number[];

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
