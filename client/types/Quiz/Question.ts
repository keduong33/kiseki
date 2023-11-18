import type { ParsedFromCSVQuestion } from "../../src/pages/AddQuestions/AddQuestions";
import type { Skill, SubTopic, Subject, Topic } from "../Subject/Subject";

export type QuizQuestion = {
  id: string;
  name: string;
  question: string;
  options: string[];
  optionsImageUrl: string[];
  timeInMs: number;
  randomiseOptions: boolean;
};

export type FullInfoQuestion = QuizQuestion & {
  correctOptions: string[];
  feedback: string;
  subject: Subject;
  topic: Topic;
  subtopics: SubTopic[];
  skills: Skill[];
};

export const convertParsedQuestionToFullInfo = (
  parsedQuestion: ParsedFromCSVQuestion
): FullInfoQuestion => {
  const question = {
    id: "",
    name: parsedQuestion["Name"],
    question: parsedQuestion["Question"],
    options: [
      parsedQuestion["Option A"],
      parsedQuestion["Option B"],
      parsedQuestion["Option C"],
      parsedQuestion["Option D"],
      parsedQuestion["Option E"],
    ],
    optionsImageUrl: [
      parsedQuestion["Option A Image URL"],
      parsedQuestion["Option B Image URL"],
      parsedQuestion["Option C Image URL"],
      parsedQuestion["Option D Image URL"],
      parsedQuestion["Option E Image URL"],
    ],
    correctOptions: parsedQuestion["Correct Options"].split(","),
    feedback: parsedQuestion["Feedback"],
    subject: parsedQuestion.Subject as Subject,
    topic: parsedQuestion.Topic as Topic,
    subtopics: parsedQuestion.Subtopic.split(",") as SubTopic[],
    skills: parsedQuestion.Skill.split(",") as Skill[],
    timeInMs: parsedQuestion["Time in ms"],
    randomiseOptions: parsedQuestion["Randomise Options"],
  } satisfies FullInfoQuestion;
  return question;
};
