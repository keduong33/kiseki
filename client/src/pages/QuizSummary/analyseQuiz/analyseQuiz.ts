import type { MarkedQuestion } from "../../../../../types/Quiz/Question";
import type { MarkedQuiz } from "../../../../../types/Quiz/Quiz";
import type {
  AnalysedResult,
  AnalysedSubtopics,
  AnalysedTopics,
} from "../../../../../types/Quiz/Result";
import type { SubTopic, Topic } from "../../../../../types/Subject/Subject";
import { uiSafeResult, type UISafeReturn } from "../../../common/safeReturn";

const analyseQuiz = (markedQuiz: MarkedQuiz): UISafeReturn<AnalysedResult> => {
  const topicsAnalysed = analyseResultsBasedOnTopic(markedQuiz.questions);

  const subtopicsAnalysed = analyseBasedOnSubTopics(markedQuiz.questions);

  // TODO: multiple subjects?
  const subject = markedQuiz.questions[0].subject;

  return uiSafeResult({
    topics: topicsAnalysed,
    subtopics: subtopicsAnalysed,
    totalNumberOfQuestions: markedQuiz.numberOfQuestions,
    totalNumberOfCorrectAnswers: markedQuiz.numberOfCorrectAnswers,
    subject: subject,
  } satisfies AnalysedResult);
};

const analyseResultsBasedOnTopic = (markedQuestionsList: MarkedQuestion[]) => {
  const numberOfQuestionsByTopic: Map<Topic, number> = new Map();
  const numberOfCorrectAnswersByTopic: Map<Topic, number> = new Map();

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
    } else {
      numberOfCorrectAnswersByTopic.set(
        topic,
        numberOfCorrectAnswersByTopic.get(topic) ?? 0
      );
    }
  });

  const topicsAnalysed: AnalysedTopics[] = [];

  for (const t of numberOfQuestionsByTopic.keys()) {
    const topic = t as Topic;

    topicsAnalysed.push({
      topic: topic as Topic,
      numberOfCorrectAnswers: numberOfCorrectAnswersByTopic.get(topic) ?? 0,
      numberOfQuestions: numberOfQuestionsByTopic.get(topic) ?? 0,
    } satisfies AnalysedTopics);
  }

  return topicsAnalysed;
};

const analyseBasedOnSubTopics = (markedQuestionsList: MarkedQuestion[]) => {
  const numberOfQuestionsBySubtopic: Map<SubTopic, number> = new Map();
  const numberOfCorrectAnswersBySubtopic: Map<SubTopic, number> = new Map();

  markedQuestionsList.forEach((question) => {
    question.subtopics?.forEach((subtopic) => {
      numberOfQuestionsBySubtopic.set(
        subtopic,
        (numberOfQuestionsBySubtopic.get(subtopic) ?? 0) + 1
      );

      if (question.markedCorrect) {
        numberOfCorrectAnswersBySubtopic.set(
          subtopic,
          (numberOfCorrectAnswersBySubtopic.get(subtopic) ?? 0) + 1
        );
      } else {
        numberOfCorrectAnswersBySubtopic.set(
          subtopic,
          numberOfCorrectAnswersBySubtopic.get(subtopic) ?? 0
        );
      }
    });
  });

  const subtopicsAnalysed: AnalysedSubtopics[] = [];
  for (const s of numberOfQuestionsBySubtopic.keys()) {
    const subtopic = s as SubTopic;

    subtopicsAnalysed.push({
      subtopic: subtopic as SubTopic,
      numberOfCorrectAnswers:
        numberOfCorrectAnswersBySubtopic.get(subtopic) ?? 0,
      numberOfQuestions: numberOfQuestionsBySubtopic.get(subtopic) ?? 0,
    } satisfies AnalysedSubtopics);
  }

  return subtopicsAnalysed;
};

export default analyseQuiz;
