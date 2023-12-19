import type { SubTopic, Subject, Topic } from "../Subject/Subject";

export type AnalysedTopics = {
  topic: Topic;
  numberOfCorrectAnswers: number;
  numberOfQuestions: number;
};
export type AnalysedSubtopics = {
  subtopic: SubTopic;
  numberOfCorrectAnswers: number;
  numberOfQuestions: number;
};

export type AnalysedResult = {
  topics?: AnalysedTopics[];
  subtopics?: AnalysedSubtopics[];
  subject?: Subject;
  totalNumberOfCorrectAnswers: number;
  totalNumberOfQuestions: number;
  createdAt?: string;
};
