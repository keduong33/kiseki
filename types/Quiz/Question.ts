import type { Skill, Subject, Subtopic, Topic } from "../Subject/Subject";

export type ParsedFromCSVQuestion = {
  Name: string;
  Question: string;
  "Option A": string;
  "Option B": string;
  "Option C": string;
  "Option D": string;
  "Option E": string;
  "Option A Image URL": string;
  "Option B Image URL": string;
  "Option C Image URL": string;
  "Option D Image URL": string;
  "Option E Image URL": string;
  "Correct Options": string;
  Feedback: string;
  Subject: string;
  Topic: string;
  Subtopic: string;
  Skill: string;
  "Time in s": number;
};

export type QuizQuestion = {
  id?: string;
  question: string;
  options: (string | undefined)[];
  optionImageUrls: (string | undefined)[];
  timeInS: number;
};

//TODO: Revise
//Current state: the app can only deal with 1 topic, 1 subtopic, 1 skill for now
export type FullInfoQuestion = QuizQuestion & {
  correctOptions: string[];
  feedback?: string;
  subject: Subject;
  topic: Topic[];
  subtopics: Subtopic[];
  skills: Skill[];
};

export type MarkedQuestion = FullInfoQuestion & {
  markedCorrect: boolean;
};

export type QuestionFromBackend = {
  id?: string;
  question: string;

  option_a?: string;
  option_b?: string;
  option_c?: string;
  option_d?: string;
  option_e?: string;
  option_a_image_url?: string;
  option_b_image_url?: string;
  option_c_image_url?: string;
  option_d_image_url?: string;
  option_e_image_url?: string;

  correct_options: string;
  feedback?: string;
  time_in_s?: string;

  subject: string;
  topic: string;
  subtopic: string;
  skill: string;

  difficulty?: string;
  curriculum?: string;
};

export const convertBackendQuestionToFullInfo = (
  inputQuestion: QuestionFromBackend
): FullInfoQuestion => {
  const question = {
    id: inputQuestion.id,
    question: inputQuestion.question,
    options: [
      inputQuestion.option_a,
      inputQuestion.option_b,
      inputQuestion.option_c,
      inputQuestion.option_d,
      inputQuestion.option_e,
    ],
    optionImageUrls: [
      inputQuestion.option_a_image_url,
      inputQuestion.option_b_image_url,
      inputQuestion.option_c_image_url,
      inputQuestion.option_d_image_url,
      inputQuestion.option_e_image_url,
    ],
    correctOptions: inputQuestion.correct_options.split(","),
    feedback: inputQuestion.feedback,
    subject: inputQuestion.subject as Subject,
    topic: inputQuestion.topic.split(",") as Topic[],
    subtopics: inputQuestion.subtopic.split(",") as Subtopic[],
    skills: inputQuestion.skill.split(",") as Skill[],
    timeInS: parseInt(inputQuestion.time_in_s ?? "0"),
  } satisfies FullInfoQuestion;
  return question;
};

export const convertParsedQuestionToFullInfo = (
  parsedQuestion: ParsedFromCSVQuestion
): FullInfoQuestion => {
  const question = {
    id: "",
    question: parsedQuestion["Question"],
    options: [
      parsedQuestion["Option A"],
      parsedQuestion["Option B"],
      parsedQuestion["Option C"],
      parsedQuestion["Option D"],
      parsedQuestion["Option E"],
    ],
    optionImageUrls: [
      parsedQuestion["Option A Image URL"],
      parsedQuestion["Option B Image URL"],
      parsedQuestion["Option C Image URL"],
      parsedQuestion["Option D Image URL"],
      parsedQuestion["Option E Image URL"],
    ],
    correctOptions: parsedQuestion["Correct Options"].split(","),
    feedback: parsedQuestion["Feedback"],
    subject: parsedQuestion.Subject as Subject,
    topic: parsedQuestion.Topic.split(",") as Topic[],
    subtopics: parsedQuestion.Subtopic.split(",") as Subtopic[],
    skills: parsedQuestion.Skill.split(",") as Skill[],
    timeInS: parsedQuestion["Time in s"],
  } satisfies FullInfoQuestion;
  return question;
};
