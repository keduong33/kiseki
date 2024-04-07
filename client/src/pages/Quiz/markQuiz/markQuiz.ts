import type {
  FullInfoQuestion,
  MarkedQuestion,
} from "../../../../../types/Quiz/Question";
import type { MarkedQuiz } from "../../../../../types/Quiz/Quiz";
import {
  uiSafeError,
  uiSafeResult,
  type UISafeReturn,
} from "../../../common/safeReturn";
import { convertCharToNumber } from "../commonQuizFunctions";

export const markQuiz = (
  userAnswers: (string | undefined)[],
  questions: FullInfoQuestion[],
  startTimeStamp: Date,
  endTimeStamp: Date
): UISafeReturn<MarkedQuiz> => {
  if (userAnswers.length <= 0) {
    return uiSafeError(new Error("User Answers do not exist"));
  }

  if (questions.length <= 0) {
    return uiSafeError(new Error("Questions List does not exist"));
  }

  if (userAnswers.length !== questions.length) {
    return uiSafeError(new Error("Invalid user answer lists"));
  }

  const markedQuestions: MarkedQuestion[] = [];

  // Assumptions: Questions & Answers are saved in the same order

  for (let index = 0; index < questions.length; index++) {
    const question = questions[index];
    const userAnswer = userAnswers[index] ?? -1;

    /*TODO: Add these features (multiple answers & shuffled questions):
      - mark shuffled questions
      - mark question with multiple answers
    */

    // Right now there is only 1 correct answer
    const correctAnswerIndexes = question.correctOptions.map((answer) =>
      convertCharToNumber(answer)
    );

    const correctAnswerIndex = correctAnswerIndexes[0];

    const isCorrect =
      userAnswer === question.options[correctAnswerIndex] ||
      userAnswer === question.optionImageUrls[correctAnswerIndex];

    const markedQuestion = {
      ...question,
      markedCorrect: isCorrect,
    } satisfies MarkedQuestion;

    markedQuestions.push(markedQuestion);
  }

  const markedQuiz: MarkedQuiz = {
    questions: markedQuestions,
    startTimeStamp: startTimeStamp,
    endTimeStamp: endTimeStamp,
  } satisfies MarkedQuiz;

  return uiSafeResult(markedQuiz);
};
