import type { Subject, Topic } from "../Subject/Subject";
import type { FullInfoQuestion, MarkedQuestion } from "./Question";

export type Quiz = {
  questions: FullInfoQuestion[];

  userAnswers: (string | undefined)[];

  quizMetaData: QuizMetaData | undefined;

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
  topics?: Topic[];
  mode?: string;
  numberOfQuestions: number;
  status: "not submitted" | "submitted";
};
