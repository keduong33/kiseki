import { Integer, Node, Relationship } from "neo4j-driver";
import type { Skill, Subtopic, Topic } from "./Subject/Subject";

type StudentProperties = {
  id: string;
};

export type Neo4jUser = Node<Integer, StudentProperties>;

export type Neo4jResult = {
  question: QuestionNode;
  skill: SkillNode;
  attempt: AttemptRelationship;
};

export type QuestionNode = Node<
  Integer,
  {
    id: string;
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
    subtopic: Subtopic;
  }
>;

export type SkillNode = Node<
  Integer,
  {
    skill: Skill;
  }
>;

export type Attempt = {
  id: string;
  correct: boolean;
};

export type AttemptRelationship = Relationship<Integer, Attempt>;
