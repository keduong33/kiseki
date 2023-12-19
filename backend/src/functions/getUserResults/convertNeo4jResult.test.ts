import { describe, it } from "vitest";
import { mock1Neo4jResult } from "./_neo4jMockResult";
import { convertNeo4jResult } from "./convertNeo4jResult";

describe.todo("convertNeo4jResult", () => {
  it("should convert 1 result correctly", () => {
    const test = convertNeo4jResult(mock1Neo4jResult);
  });

  it.todo("should convert 2 results correctly", () => {});
});
