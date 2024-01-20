import type { Skill, SubTopic, Subject, Topic } from "../Subject/Subject";

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

export type AnalysedSkill = {
  skill: Skill;
  numberOfCorrectAnswers: number;
  numberOfQuestions: number;
};

export type AnalysedResult = {
  subject?: Subject;
  topics?: AnalysedTopics[];
  subtopics?: AnalysedSubtopics[];
  skills?: AnalysedSkill[];
  totalNumberOfCorrectAnswers: number;
  totalNumberOfQuestions: number;
  createdAt?: string;
};
