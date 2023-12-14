import type { Subject } from "../Subject/Subject";
import type { FullInfoQuestion, MarkedQuestion } from "./Question";

export type Quiz = {
  questions: FullInfoQuestion[];

  userAnswers: (string | null)[];

  quizMetaData: QuizMetaData | null;

  currentQuestionIndex: number;

  remainingTime: number;
};

export type MarkedQuiz = {
  questions: MarkedQuestion[];
  numberOfCorrectAnswers: number;
  numberOfQuestions: number;
};

export type QuizMetaData = {
  subject: Subject;
  topic: string;
  mode?: string;
  numberOfQuestions: number;
};
