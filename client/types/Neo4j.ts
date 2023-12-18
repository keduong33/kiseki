import { Integer, Node, Relationship } from "neo4j-driver";
import type { AnalysedResult } from "./Quiz/Result";

type StudentProperties = {
  id: string;
};

export type Neo4jUser = Node<Integer, StudentProperties>;

export type Neo4jQuizResult = Node<Integer, AnalysedResult>;

export type Neo4jTookQuiz = Relationship<
  Integer,
  {
    date: string;
  }
>;
