import type { Skill, SubTopic, Subject, Topic } from "./Subject/Subject";

export type TestQuestion = {
  question: string;
  options: string[];
  timer: number;
  questionImage: string;
};

export type FullInfoQuestion = TestQuestion & {
  correctOption: number;
  subject: Subject;
  topic: Topic;
  feedback: string;
  subtopics: SubTopic[];
  skills: Skill[];
};

export type AnsweredQuestion = TestQuestion & {
  markedCorrect: boolean;
};
