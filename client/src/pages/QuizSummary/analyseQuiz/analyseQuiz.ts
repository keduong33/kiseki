import type { MarkedQuestion } from "../../../../types/Quiz/Question";
import type { MarkedQuiz } from "../../../../types/Quiz/Quiz";
import type { SubTopic, Topic } from "../../../../types/Subject/Subject";
import { uiSafeResult, type UISafeReturn } from "../../../common/safeReturn";
import type { AnalysedResult } from "../QuizSummary";

export type AnalysedTopics = Map<Topic, number>;
export type AnalysedSubtopics = Map<SubTopic, number>;

const analyseQuiz = (markedQuiz: MarkedQuiz): UISafeReturn<AnalysedResult> => {
  const { numberOfQuestionsByTopic, numberOfCorrectAnswersByTopic } =
    analyseResultsBasedOnTopic(markedQuiz.questions);

  const { numberOfCorrectAnswersBySubtopic, numberOfQuestionsBySubtopic } =
    analyseBasedOnSubTopics(markedQuiz.questions);

  // TODO: multiple subjects?
  const subject = markedQuiz.questions[0].subject;

  return uiSafeResult({
    topics: {
      numberOfQuestions: numberOfQuestionsByTopic,
      numberOfCorrectAnswers: numberOfCorrectAnswersByTopic,
    },
    subtopics: {
      numberOfQuestions: numberOfQuestionsBySubtopic,
      numberOfCorrectAnswers: numberOfCorrectAnswersBySubtopic,
    },
    overall: {
      numberOfQuestions: markedQuiz.numberOfQuestions,
      numberOfCorrectAnswers: markedQuiz.numberOfCorrectAnswers,
    },
    subject: subject,
  } satisfies AnalysedResult);
};

const analyseResultsBasedOnTopic = (markedQuestionsList: MarkedQuestion[]) => {
  const numberOfQuestionsByTopic: AnalysedTopics = new Map();
  const numberOfCorrectAnswersByTopic: AnalysedTopics = new Map();

  markedQuestionsList.forEach((question) => {
    const topic = question.topic;

    numberOfQuestionsByTopic.set(
      topic,
      (numberOfQuestionsByTopic.get(topic) ?? 0) + 1
    );

    if (question.markedCorrect) {
      numberOfCorrectAnswersByTopic.set(
        topic,
        (numberOfCorrectAnswersByTopic.get(topic) ?? 0) + 1
      );
    }
  });

  return {
    numberOfQuestionsByTopic,
    numberOfCorrectAnswersByTopic,
  };
};

const analyseBasedOnSubTopics = (markedQuestionsList: MarkedQuestion[]) => {
  const numberOfQuestionsBySubtopic: AnalysedSubtopics = new Map();
  const numberOfCorrectAnswersBySubtopic: AnalysedSubtopics = new Map();

  markedQuestionsList.forEach((question) => {
    question.subtopics.forEach((subtopic) => {
      numberOfQuestionsBySubtopic.set(
        subtopic,
        (numberOfQuestionsBySubtopic.get(subtopic) ?? 0) + 1
      );

      if (question.markedCorrect) {
        numberOfCorrectAnswersBySubtopic.set(
          subtopic,
          (numberOfCorrectAnswersBySubtopic.get(subtopic) ?? 0) + 1
        );
      }
    });
  });

  return {
    numberOfQuestionsBySubtopic,
    numberOfCorrectAnswersBySubtopic,
  };
};

export default analyseQuiz;
