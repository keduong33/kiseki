import type { QueryResult } from "neo4j-driver";

import type {
  Neo4jResult,
  ResultStatistics,
  SkillNode,
  SubtopicNode,
  TopicNode,
} from "../../../../types/Neo4j";
import type {
  AnalysedResult,
  AnalysedSkill,
  AnalysedSubtopic,
  AnalysedTopic,
} from "../../../../types/Quiz/Result";
import type { Skill, Subtopic, Topic } from "../../../../types/Subject/Subject";

export const convertNeo4jResult = (
  neo4jResponse: QueryResult<Neo4jResult>
): AnalysedResult[] => {
  const resultMap: Map<string, AnalysedResult> = new Map();

  neo4jResponse.records.forEach((record) => {
    const result = record.get("result")?.properties;
    const level = record.get("level");
    let resultType = record.get("resultType");
    const stats = record.get("stats")?.properties;

    const currentAnalysedResult = resultMap.get(result.id);

    if (!currentAnalysedResult) {
      let analysedTopics: AnalysedTopic[] = [];
      let analysedSubtopics: AnalysedSubtopic[] = [];
      let analysedSkills: AnalysedSkill[] = [];

      if (level == "Topic") {
        resultType = resultType as TopicNode;
        analysedTopics.push(
          convertToAnalysedTopic(resultType.properties.topic, stats)
        );
      }
      if (level == "Subtopic") {
        resultType = resultType as SubtopicNode;
        analysedSubtopics.push(
          convertToAnalysedSubtopic(resultType.properties.subtopic, stats)
        );
      }
      if (level === "Skill") {
        resultType = resultType as SkillNode;
        analysedSkills.push(
          convertToAnalysedSkill(resultType.properties.skill, stats)
        );
      }

      const newAnalysedResult = {
        subject: result.subject,
        createdAt: result.createdAt.toString(),
        topics: analysedTopics,
        subtopics: analysedSubtopics,
        skills: analysedSkills,
        totalNumberOfCorrectAnswers: result.totalNumberOfCorrectAnswers,
        totalNumberOfQuestions: result.totalNumberOfQuestions,
      } satisfies AnalysedResult;
      resultMap.set(result.id, newAnalysedResult);
    } else {
      if (!currentAnalysedResult.topics) currentAnalysedResult.topics = [];
      if (!currentAnalysedResult.subtopics)
        currentAnalysedResult.subtopics = [];
      if (!currentAnalysedResult.skills) currentAnalysedResult.skills = [];

      if (level == "Topic") {
        resultType = resultType as TopicNode;
        currentAnalysedResult.topics.push(
          convertToAnalysedTopic(resultType.properties.topic, stats)
        );
      }
      if (level == "Subtopic") {
        resultType = resultType as SubtopicNode;
        currentAnalysedResult.subtopics.push(
          convertToAnalysedSubtopic(resultType.properties.subtopic, stats)
        );
      }

      if (level === "Skill") {
        resultType = resultType as SkillNode;
        currentAnalysedResult.skills.push(
          convertToAnalysedSkill(resultType.properties.skill, stats)
        );
      }
    }
  });

  const analysedResults: AnalysedResult[] = Array.from(resultMap.values());

  return analysedResults;
};

const convertToAnalysedTopic = (
  topic: Topic,
  hasTopic: ResultStatistics
): AnalysedTopic => {
  return {
    topic: topic,
    numberOfCorrectAnswers: hasTopic.numberOfCorrectAnswers,
    numberOfQuestions: hasTopic.numberOfQuestions,
  } satisfies AnalysedTopic;
};

const convertToAnalysedSubtopic = (
  subtopic: Subtopic,
  hasTopic: ResultStatistics
): AnalysedSubtopic => {
  return {
    subtopic: subtopic,
    numberOfCorrectAnswers: hasTopic.numberOfCorrectAnswers,
    numberOfQuestions: hasTopic.numberOfQuestions,
  } satisfies AnalysedSubtopic;
};

const convertToAnalysedSkill = (
  skill: Skill,
  hasTopic: ResultStatistics
): AnalysedSkill => {
  return {
    skill: skill,
    numberOfCorrectAnswers: hasTopic.numberOfCorrectAnswers,
    numberOfQuestions: hasTopic.numberOfQuestions,
  } satisfies AnalysedSkill;
};
