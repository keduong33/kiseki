import type { Skill, SubTopic, Subject, Topic } from "./Subject/Subject";

export type Question = {
  question: string;
  subject: Subject;
  topic: Topic;
  subtopics: SubTopic[];
  skills: Skill[];

  options: string[];
  correctOption: number;
  feedback: string;

  timer: number;
  questionImage: string;
};

export type AnsweredQuestion = Question & {
  markedCorrect: boolean;
};
