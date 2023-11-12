import { EnglishTopic } from "./English";
import {
  AlgebraSubtopic,
  MathsTopic,
  SurdsSubtopic,
  type MathSkill,
  type MathSubTopic,
} from "./Math";

import {
  NumericalReasoningTopic,
  type NumericalReasoningSkill,
  type NumericalReasoningSubTopic,
} from "./NumericalReasoning";

export enum Subject {
  Maths = "Maths",
  English = "English",
  "Numerical Reasoning" = "Numerical Reasoning",
}

export type Topic = MathsTopic | EnglishTopic | NumericalReasoningTopic;

export type SubTopic = MathSubTopic | NumericalReasoningSubTopic;

export type Skill = MathSkill | NumericalReasoningSkill;

export const getTopicsBasedOnSubject = (subject: Subject | undefined) => {
  switch (subject) {
    case Subject.Maths:
      return Object.values(MathsTopic);

    case Subject.English:
      return Object.values(EnglishTopic);

    case Subject["Numerical Reasoning"]:
      return Object.values(NumericalReasoningTopic);

    default:
      return;
  }
};

export const getSubTopicsBasedOnTopic = (topic: Topic | undefined) => {
  switch (topic) {
    //MATH
    case MathsTopic.Algebra:
      return Object.values(AlgebraSubtopic);

    case MathsTopic.Surds:
      return Object.values(SurdsSubtopic);

    //ENGLISH

    default:
      return [];
  }
};
