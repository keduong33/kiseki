import postgres from "postgres";
import { getBackendConfig } from "./config";
import { safeError, safeResult, type SafeResponse } from "./safeResponse";

export const initPostgres = (): SafeResponse<postgres.Sql> => {
  const { postgresConfig } = getBackendConfig();

  if (!postgresConfig) {
    console.warn("Failed in postgresDriver", "Invalid environment");
    return safeError({ message: "Invalid environment" });
  }

  const sql = postgres({
    host: postgresConfig.PGHOST,
    database: postgresConfig.PGDATABASE,
    username: postgresConfig.PGUSER,
    password: postgresConfig.PGPASSWORD,
    port: 5432,
    ssl: "require",
    connection: {
      options: `project=${postgresConfig.ENDPOINT_ID}`,
    },
  });

  return safeResult(sql);
};
