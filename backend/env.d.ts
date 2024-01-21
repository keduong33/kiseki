declare namespace NodeJS {
  export interface ProcessEnv {
    URL: string;

    // NEO4J
    NEO4J_URI: string;
    NEO4J_USERNAME: string;
    NEO4J_PASSWORD: string;

    // CLERK
    CLERK_SECRET_KEY: string;
    CLERK_ISSUER: string;

    // NEON
    NEON_DB_URL: string;

    // NOTION
    NOTION_SECRET_KEY: string;
    NOTION_QUESTION_BANK_ID: string;
  }
}
