import type { Skill, SubTopic, Subject, Topic } from "../Subject/Subject";

export type AnalysedTopic = {
  topic: Topic;
  numberOfCorrectAnswers: number;
  numberOfQuestions: number;
};
export type AnalysedSubtopic = {
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
  topics?: AnalysedTopic[];
  subtopics?: AnalysedSubtopic[];
  skills?: AnalysedSkill[];
  totalNumberOfCorrectAnswers: number;
  totalNumberOfQuestions: number;
  createdAt?: string;
};
