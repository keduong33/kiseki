import { DateTime, Integer, Node, Relationship } from "neo4j-driver";
import type { SubTopic, Subject, Topic } from "../../types/Subject/Subject";

type StudentProperties = {
  id: string;
};

export type Neo4jUser = Node<Integer, StudentProperties>;

export type Neo4jResultTopicSubtopic = {
  result: ResultNode;
  level: "Topic" | "Subtopic";
  resultType: TopicNode | SubtopicNode;
  stats: StatsRelationship;
};

export type ResultNode = Node<
  Integer,
  {
    id: string;
    subject?: Subject;
    totalNumberOfCorrectAnswers: number;
    totalNumberOfQuestions: number;
    createdAt: DateTime;
  }
>;

export type TopicNode = Node<
  Integer,
  {
    topic: Topic;
  }
>;

export type SubtopicNode = Node<
  Integer,
  {
    subtopic: SubTopic;
  }
>;

export type ResultStatistics = {
  numberOfCorrectAnswers: number;
  numberOfQuestions: number;
};

export type StatsRelationship = Relationship<Integer, ResultStatistics>;

export type TookQuizRelationship = Relationship<
  Integer,
  {
    date: string;
  }
>;
