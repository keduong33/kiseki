import type { AnalysedSkill } from "../../../../types/Quiz/Result";
import type { ToStudy } from "./StudyPlan";

export const generateStudyPlan = (
  analysedSkills: AnalysedSkill[]
): ToStudy[] => {
  const toStudy: ToStudy[] = [];
  const overallResult: Record<string, number[]> = {};

  analysedSkills.forEach((analysedSkill) => {
    // TODO: multiple topics, subtopcis, skills in 1 result
    // const topics = result.topics?.map((topic)=> topic.topic).join(',')
    // const subtopics = result.subtopics?.map((subtopic)=> subtopic.subtopic).join(',')
    // const skills = result.skills?.map((skill)=> skill.skill).join(',')
    const skillScore =
      analysedSkill.correctAttempts / analysedSkill.totalAttempts;

    const key = `${analysedSkill.skill}`;

    if (overallResult[key]) overallResult[key].push(skillScore);
    else overallResult[key] = [skillScore];
  });

  Object.entries(overallResult).forEach(([key, scores]) => {
    const subject = "Mathematics";
    const topic = "Algebra";
    const subtopic = "Factorisation";
    const skill = key;
    const average =
      scores.reduce((sum, score) => sum + score, 0) / scores.length;

    if (average < 0.7)
      toStudy.push({
        subject: subject,
        topic: topic,
        subtopic: subtopic,
        skill: skill,
      } satisfies ToStudy);
  });

  return toStudy;
};
