import type { Subject, Topic } from "../Subject/Subject";
import type { FullInfoQuestion, MarkedQuestion } from "./Question";

export type Quiz = {
  questions: FullInfoQuestion[];

  userAnswers: (string | undefined)[];

  quizMetaData: QuizMetaData | undefined;

  currentQuestionIndex: number;

  remainingTime: number;

  startTimeStamp: Date | undefined;

  endTimeStamp: Date | undefined;
};

export type MarkedQuiz = {
  questions: MarkedQuestion[];
  startTimeStamp: Date;
  endTimeStamp: Date;
  isSaved?: boolean;
};

export type QuizMetaData = {
  subject: Subject;
  topics?: Topic[];
  mode?: string;
  numberOfQuestions: number;
  status: "not submitted" | "submitted";
};
