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

export const getBackendConfig = (hostname?: string): ConfigType => {
  if (!hostname) hostname = new URL(process.env.URL).hostname;
  switch (hostname) {
    case "localhost":
    case "192.168.1.103":
    case "dev--edupath.netlify.app":
      return {
        clerk: {
          ...basicClerkConfig,
          secretKey: process.env.CLERK_SECRET_DEV_KEY,
          issuer: "https://active-macaque-95.clerk.accounts.dev",
        },
        neo4j: {
          uri: "neo4j+s://7d0aef41.databases.neo4j.io:7687",
          username: process.env.NEO4J_DEV_USERNAME,
          password: process.env.NEO4J_DEV_PASSWORD,
        },
        postgresConfig: {
          dbURL: process.env.NEON_DB_DEV_URL,
        },
      } satisfies ConfigType;
    default:
      return {};
  }
};
