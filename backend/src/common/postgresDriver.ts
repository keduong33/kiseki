import postgres from "postgres";
import { getBackendConfig } from "./config";
import { safeError, safeResult, type SafeResponse } from "./safeResponse";

export const initPostgres = (): SafeResponse<postgres.Sql> => {
  const { postgresConfig } = getBackendConfig();

  if (!postgresConfig) {
    console.warn("Failed in postgresDriver", "Invalid environment");
    return safeError({ message: "Invalid environment" });
  }

  const sql = postgres(process.env.NEON_DB_URL, { ssl: "require" });

  return safeResult(sql);
};
