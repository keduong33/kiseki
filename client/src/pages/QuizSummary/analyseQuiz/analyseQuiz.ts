import type { MarkedQuestion } from "../../../../../types/Quiz/Question";
import type { MarkedQuiz } from "../../../../../types/Quiz/Quiz";
import type {
  AnalysedResult,
  AnalysedSkill,
  AnalysedSubtopic,
  AnalysedTopic,
} from "../../../../../types/Quiz/Result";
import type {
  Skill,
  Subtopic,
  Topic,
} from "../../../../../types/Subject/Subject";
import { uiSafeResult, type UISafeReturn } from "../../../common/safeReturn";

const analyseQuiz = (markedQuiz: MarkedQuiz): UISafeReturn<AnalysedResult> => {
  const analysedTopics = analyseResultsBasedOnTopic(markedQuiz.questions);

  const analysedSubtopics = analyseBasedOnSubTopics(markedQuiz.questions);

  const analysedSkills = analyseBasedOnSkills(markedQuiz.questions);

  const totalNumberOfCorrectAnswers = markedQuiz.questions.reduce(
    (sum, question) => (question.markedCorrect ? sum + 1 : sum),
    0
  );

  // TODO: multiple subjects?
  const subject = markedQuiz.questions[0].subject;

  return uiSafeResult({
    topics: analysedTopics,
    subtopics: analysedSubtopics,
    skills: analysedSkills,
    totalNumberOfQuestions: markedQuiz.questions.length,
    totalNumberOfCorrectAnswers: totalNumberOfCorrectAnswers,
    subject: subject,
  } satisfies AnalysedResult);
};

const analyseResultsBasedOnTopic = (markedQuestionsList: MarkedQuestion[]) => {
  const numberOfQuestionsByTopic: Map<Topic, number> = new Map();
  const numberOfCorrectAnswersByTopic: Map<Topic, number> = new Map();

  markedQuestionsList.forEach((question) => {
    const topic = question.topic;

    numberOfQuestionsByTopic.set(
      topic[0],
      (numberOfQuestionsByTopic.get(topic[0]) ?? 0) + 1
    );

    if (question.markedCorrect) {
      numberOfCorrectAnswersByTopic.set(
        topic[0],
        (numberOfCorrectAnswersByTopic.get(topic[0]) ?? 0) + 1
      );
    } else {
      numberOfCorrectAnswersByTopic.set(
        topic[0],
        numberOfCorrectAnswersByTopic.get(topic[0]) ?? 0
      );
    }
  });

  const analysedTopics: AnalysedTopic[] = [];

  for (const t of numberOfQuestionsByTopic.keys()) {
    const topic = t as Topic;

    analysedTopics.push({
      topic: topic as Topic,
      numberOfCorrectAnswers: numberOfCorrectAnswersByTopic.get(topic) ?? 0,
      numberOfQuestions: numberOfQuestionsByTopic.get(topic) ?? 0,
    } satisfies AnalysedTopic);
  }

  return analysedTopics;
};

const analyseBasedOnSubTopics = (markedQuestionsList: MarkedQuestion[]) => {
  const numberOfQuestionsBySubtopic: Map<Subtopic, number> = new Map();
  const numberOfCorrectAnswersBySubtopic: Map<Subtopic, number> = new Map();

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

  const analysedSubtopics: AnalysedSubtopic[] = [];
  for (const s of numberOfQuestionsBySubtopic.keys()) {
    const subtopic = s as Subtopic;

    analysedSubtopics.push({
      subtopic: subtopic as Subtopic,
      numberOfCorrectAnswers:
        numberOfCorrectAnswersBySubtopic.get(subtopic) ?? 0,
      numberOfQuestions: numberOfQuestionsBySubtopic.get(subtopic) ?? 0,
    } satisfies AnalysedSubtopic);
  }

  return analysedSubtopics;
};

const analyseBasedOnSkills = (markedQuestionsList: MarkedQuestion[]) => {
  const numberOfQuestionsBySkill: Map<Skill, number> = new Map();
  const numberOfCorrectAnswersBySkill: Map<Skill, number> = new Map();

  markedQuestionsList.forEach((question) => {
    question.skills?.forEach((skill) => {
      numberOfQuestionsBySkill.set(
        skill,
        (numberOfQuestionsBySkill.get(skill) ?? 0) + 1
      );

      if (question.markedCorrect) {
        numberOfCorrectAnswersBySkill.set(
          skill,
          (numberOfCorrectAnswersBySkill.get(skill) ?? 0) + 1
        );
      } else {
        numberOfCorrectAnswersBySkill.set(
          skill,
          numberOfCorrectAnswersBySkill.get(skill) ?? 0
        );
      }
    });
  });

  const analysedSkills: AnalysedSkill[] = [];
  for (const s of numberOfQuestionsBySkill.keys()) {
    const skill = s as Skill;

    analysedSkills.push({
      skill: skill as Skill,
      numberOfCorrectAnswers: numberOfCorrectAnswersBySkill.get(skill) ?? 0,
      numberOfQuestions: numberOfQuestionsBySkill.get(skill) ?? 0,
    } satisfies AnalysedSkill);
  }

  return analysedSkills;
};

export default analyseQuiz;
