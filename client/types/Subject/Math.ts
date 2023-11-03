export enum MathsTopic {
  Algebra = "ALGEBRA",
  Surds = "SURDS",
}

/***************************************
                ALGEBRA
 ***************************************/
export enum AlgebraSkill {
  Substitution = "Substitution",
  Solve = "Solve",
  Simplify = "Simplify",
  Factorisation = "Factorisation",
  Expansion = "Expansion",
}

export enum AlgebraSubtopic {
  "Algebraic Expressions" = "Algebraic Expressions",
  "Algebraic Fractions" = "Algebraic Fractions",
  "Binomial Products" = "Binomial Products",
  "Special Products" = "Special Products",
  "Common Factors" = "Common Factors",
  "Factorising in pairs" = "Factorising in pairs",
  "Monic Quadratic Trinomial" = "Monic Quadratic Trinomial",
  "Non-monic Quadratic Trinomial" = "Non-monic Quadratic Trinomial",
}

export enum AlgebraLinks {
  "Khan Academy" = "Sth",
  "David's Special" = "David's special link ;)",
}

/***************************************
                Surds
 ***************************************/
export enum SurdsSkill {}

export enum SurdsSubtopic {
  "Surd Rules" = "Surd Rules",
  "Addition and Subtraction of Surds" = "Addition and Subtraction of Surds",
  "Multiplication and Division of Surds" = "Multiplication and Division of Surds",
  Rationalistion = "Rationalistion",
}

/***************************************
                Indices
 ***************************************/

export enum IndicesSkill {}

export enum IndicesSubtopic {
  "Index laws" = "Index laws",
  "Negative powers" = "Negative powers",
  "Fractional powers" = "Fractional powers",
  "Unknown powers" = "Unknown powers",
}

export type MathSubTopic = AlgebraSubtopic | SurdsSubtopic | IndicesSubtopic;
export type MathSkill = AlgebraSkill | SurdsSkill | IndicesSkill;
