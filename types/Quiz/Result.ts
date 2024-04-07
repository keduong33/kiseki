import type { Skill, Subject, Subtopic, Topic } from "../Subject/Subject";

export type AnalysedTopic = {
  topic: Topic;
} & Proficiency;
export type AnalysedSubtopic = {
  subtopic: Subtopic;
} & Proficiency;

export type AnalysedSkill = {
  skill: Skill;
} & Proficiency;

export type AnalysedResult = {
  subject?: Subject;
  topics?: AnalysedTopic[];
  subtopics?: AnalysedSubtopic[];
  skills?: AnalysedSkill[];
  totalNumberOfCorrectAnswers: number;
  totalNumberOfQuestions: number;
  createdAt?: string;
};

export type Proficiency = {
  correctAttempts: number;
  totalAttempts: number;
};
