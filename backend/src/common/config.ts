type ConfigType = {
  clerk?: ClerkConfig;
  neo4j?: Neo4jConfig;
  postgresConfig?: PostgresConfig;
};

type ClerkConfig = {
  secretKey?: string;
  backendAPI: string;
  issuer: string | null;
};

type Neo4jConfig = {
  uri: string;
  username: string;
  password: string;
};

type PostgresConfig = {
  dbURL: string;
};

const basicClerkConfig = {
  backendAPI: " https://api.clerk.dev/v1/",
};

export const getBackendConfig = (): ConfigType => {
  return {
    clerk: {
      ...basicClerkConfig,
      secretKey: process.env.CLERK_SECRET_KEY,
      issuer: process.env.CLERK_ISSUER,
    },
    neo4j: {
      uri: process.env.NEO4J_URI,
      username: process.env.NEO4J_USERNAME,
      password: process.env.NEO4J_PASSWORD,
    },
    postgresConfig: {
      dbURL: process.env.NEON_DB_URL,
    },
  } satisfies ConfigType;
};
