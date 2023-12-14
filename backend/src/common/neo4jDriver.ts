import { Driver, auth, driver } from "neo4j-driver";
import { getBackendConfig } from "./config";
import { safeError, safeResult, type SafeResponse } from "./safeResponse";

export const initNeo4jDriver = (): SafeResponse<Driver> => {
  const { neo4j } = getBackendConfig();
  if (!neo4j) {
    console.warn("Failed in Neo4jDriver", "Invalid environment");
    return safeError({ message: "Cannot connect to Neo4j Database" });
  }
  const neo4jDriver = driver(
    neo4j.uri,
    auth.basic(neo4j.username, neo4j.password)
  );

  return safeResult(neo4jDriver);
};
