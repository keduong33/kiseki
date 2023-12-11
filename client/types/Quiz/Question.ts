import type { ParsedFromCSVQuestion } from "../../src/pages/AddQuestions/AddQuestions";
import type { Skill, SubTopic, Subject, Topic } from "../Subject/Subject";

export type QuizQuestion = {
  id: string;
  name: string;
  content: string;
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

export type QuestionFromBackend = {
  id: string;
  name: string;
  content: string;
  option_a: string;
  option_b: string;
  option_c: string;
  option_d: string;
  option_e: string;
  option_a_image_url: string;
  option_b_image_url: string;
  option_c_image_url: string;
  option_d_image_url: string;
  option_e_image_url: string;
  correct_options: string;
  feedback: string;
  subject: string;
  topic: string | null;
  subtopic: string | null;
  skill: string | null;
  time_in_ms: number;
  randomise_options: boolean;
};

export const convertBackendQuestionToFullInfo = (
  inputQuestion: QuestionFromBackend
): FullInfoQuestion => {
  const question = {
    id: inputQuestion.id,
    name: inputQuestion.name,
    content: inputQuestion.content,
    options: [
      inputQuestion.option_a,
      inputQuestion.option_b,
      inputQuestion.option_c,
      inputQuestion.option_d,
      inputQuestion.option_e,
    ],
    optionsImageUrl: [
      inputQuestion.option_a_image_url,
      inputQuestion.option_b_image_url,
      inputQuestion.option_c_image_url,
      inputQuestion.option_d_image_url,
      inputQuestion.option_e_image_url,
    ],
    correctOptions: inputQuestion.correct_options.split(","),
    feedback: inputQuestion.feedback,
    subject: inputQuestion.subject as Subject,
    topic: inputQuestion.topic as Topic,
    subtopics: inputQuestion.subtopic?.split(",") as SubTopic[],
    skills: inputQuestion.skill?.split(",") as Skill[],
    timeInMs: inputQuestion.time_in_ms,
    randomiseOptions: inputQuestion.randomise_options,
  } satisfies FullInfoQuestion;
  return question;
};

export const convertParsedQuestionToFullInfo = (
  parsedQuestion: ParsedFromCSVQuestion
): FullInfoQuestion => {
  const question = {
    id: "",
    name: parsedQuestion["Name"],
    content: parsedQuestion["Question"],
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
