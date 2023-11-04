import type { AnsweredQuestion, Question } from "../../../../types/Question";
import type { Subject } from "../../../../types/Subject/Subject";

interface TestI {
  questionsList: Question[];

  answersList: number[];

  answeredQuestionsList: AnsweredQuestion[];

  quizMetaData: TestMetaData | null;

  currentQuestionIndex: number;

  remainingTime: number;
}

export interface TestMetaData {
  subject: Subject;
  topic?: string | undefined;
  mode?: string;
  numberOfQuestions: number;
}

// export class Test implements TestI {
//   questionsList: Question[];
//   answersList: number[];
//   answeredQuestionsList: AnsweredQuestion[];
//   quizMetaData: TestMetaData | null;
//   currentQuestionIndex: number;
//   remainingTime: number;

//   constructor(test: DocumentData) {
//     this.currentQuestionIndex = ;
//   }
// }
