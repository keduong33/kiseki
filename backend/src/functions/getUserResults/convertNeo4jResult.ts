import type { QueryResult } from "neo4j-driver";
import type {
  Neo4jResultTopicSubtopic,
  ResultStatistics,
  SubtopicNode,
  TopicNode,
} from "../../../../client/types/Neo4j";
import type {
  AnalysedResult,
  AnalysedSubtopics,
  AnalysedTopics,
} from "../../../../client/types/Quiz/Result";
import type { SubTopic, Topic } from "../../../../client/types/Subject/Subject";

export const convertNeo4jResult = (
  neo4jResponse: QueryResult<Neo4jResultTopicSubtopic>
): AnalysedResult[] => {
  const resultMap: Map<string, AnalysedResult> = new Map();

  neo4jResponse.records.forEach((record) => {
    const result = record.get("result")?.properties;
    const level = record.get("level");
    let resultType = record.get("resultType");
    const stats = record.get("stats")?.properties;

    const currentAnalysedResult = resultMap.get(result.id);

    // TODO: Maybe Subtopic is Topic with a boolean or something --> less label

    if (currentAnalysedResult) {
      if (!currentAnalysedResult.topics) currentAnalysedResult.topics = [];
      if (!currentAnalysedResult.subtopics)
        currentAnalysedResult.subtopics = [];

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
    } else {
      let analysedTopics: AnalysedTopics[] = [];
      let analysedSubtopics: AnalysedSubtopics[] = [];

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

      const newAnalysedResult = {
        subject: result.subject,
        createdAt: result.createdAt.toString(),
        topics: analysedTopics,
        subtopics: analysedSubtopics,
        totalNumberOfCorrectAnswers: result.totalNumberOfCorrectAnswers,
        totalNumberOfQuestions: result.totalNumberOfQuestions,
      } satisfies AnalysedResult;
      resultMap.set(result.id, newAnalysedResult);
    }
  });

  const analysedResults: AnalysedResult[] = Array.from(resultMap.values());

  return analysedResults;
};

const convertToAnalysedTopic = (
  topic: Topic,
  hasTopic: ResultStatistics
): AnalysedTopics => {
  return {
    topic: topic,
    numberOfCorrectAnswers: hasTopic.numberOfCorrectAnswers,
    numberOfQuestions: hasTopic.numberOfQuestions,
  } satisfies AnalysedTopics;
};

const convertToAnalysedSubtopic = (
  subtopic: SubTopic,
  hasTopic: ResultStatistics
): AnalysedSubtopics => {
  return {
    subtopic: subtopic,
    numberOfCorrectAnswers: hasTopic.numberOfCorrectAnswers,
    numberOfQuestions: hasTopic.numberOfQuestions,
  } satisfies AnalysedSubtopics;
};
