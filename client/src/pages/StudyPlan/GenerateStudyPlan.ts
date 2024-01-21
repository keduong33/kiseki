import type { AnalysedResult } from "../../../../types/Quiz/Result";
import type { ToStudy } from "./StudyPlan";

export const generateStudyPlan = (results: AnalysedResult[]): ToStudy[] => {
  const toStudy: ToStudy[] = [];
  const overallResult: Record<string, number[]> = {};

  results.forEach((result) => {
    // TODO: multiple topics, subtopcis, skills in 1 result
    // const topics = result.topics?.map((topic)=> topic.topic).join(',')
    // const subtopics = result.subtopics?.map((subtopic)=> subtopic.subtopic).join(',')
    // const skills = result.skills?.map((skill)=> skill.skill).join(',')

    result.skills?.forEach((skill) => {
      const topic = result.topics ? result.topics[0].topic : "";
      const subtopic = result.subtopics ? result.subtopics[0].subtopic : "";

      const skillScore = skill.correctAttempts / skill.totalAttempts;

      const key = `${result.subject}:${topic}:${subtopic}:${skill.skill}`;

      if (overallResult[key]) overallResult[key].push(skillScore);
      else overallResult[key] = [skillScore];
    });
  });

  Object.entries(overallResult).forEach(([key, scores]) => {
    const [subject, topic, subtopic, skill] = key.split(":");
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
