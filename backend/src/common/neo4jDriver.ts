import { Driver, auth, driver } from "neo4j-driver";
import { getBackendConfig } from "./config";

export const initDriver = (): Driver | undefined => {
  const { neo4j } = getBackendConfig();
  if (!neo4j) {
    console.warn("Failed in Neo4jDriver", "Invalid environment");
    return;
  }
  const neo4jDriver = driver(
    neo4j.uri,
    auth.basic(neo4j.username, neo4j.password)
  );

  return neo4jDriver;
};
