import postgres from "postgres";
import { getBackendConfig } from "./config";
import { safeError, safeResult, type SafeResponse } from "./safeResponse";

export const initPostgres = (): SafeResponse<postgres.Sql> => {
  const { postgresConfig } = getBackendConfig();

  if (!postgresConfig) {
    console.warn("Failed in postgresDriver", "Invalid environment");
    return safeError({ message: "Invalid environment" });
  }

  const sql = postgres(postgresConfig.dbURL, {
    ssl: "require",
    idle_timeout: 20,
    max_lifetime: 60 * 30,
  });

  return safeResult(sql);
};
