import type { QueryResult } from "neo4j-driver";

import type { Neo4jResult } from "../../../../types/Neo4j";
import type { AnalysedSkill, Proficiency } from "../../../../types/Quiz/Result";
import type { Skill } from "../../../../types/Subject/Subject";

//TODO: multiple topics, subtopics, skills on 1 attempt

export const convertNeo4jResult = (
  neo4jResponse: QueryResult<Neo4jResult>
): AnalysedSkill[] => {
  const skillsProficiency: Map<Skill, Proficiency> = new Map();

  neo4jResponse.records.forEach((record) => {
    const skill = record.get("skill").properties;
    const attempt = record.get("attempt")?.properties;

    const currentProficiency = skillsProficiency.get(skill.skill);

    if (!currentProficiency) {
      const updatedProficiency = {
        correctAttempts: attempt.correct ? 1 : 0,
        totalAttempts: 1,
      } satisfies Proficiency;

      skillsProficiency.set(skill.skill, updatedProficiency);
    } else {
      const updatedProficiency = {
        correctAttempts: attempt.correct
          ? currentProficiency.correctAttempts + 1
          : currentProficiency.correctAttempts,
        totalAttempts: currentProficiency.totalAttempts + 1,
      } satisfies Proficiency;

      skillsProficiency.set(skill.skill, updatedProficiency);
    }
  });

  return Array.from(skillsProficiency).map((skillProficiency) => {
    return {
      skill: skillProficiency[0],
      correctAttempts: skillProficiency[1].correctAttempts,
      totalAttempts: skillProficiency[1].totalAttempts,
    } satisfies AnalysedSkill;
  });
};
