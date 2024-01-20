import { DateTime, Integer, Node, Relationship } from "neo4j-driver";
import type { Skill, SubTopic, Subject, Topic } from "./Subject/Subject";

type StudentProperties = {
  id: string;
};

export type Neo4jUser = Node<Integer, StudentProperties>;

export type Neo4jResult = {
  result: ResultNode;
  level: "Topic" | "Subtopic" | "Skill";
  resultType: TopicNode | SubtopicNode | SkillNode;
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

export type SkillNode = Node<
  Integer,
  {
    skill: Skill;
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
