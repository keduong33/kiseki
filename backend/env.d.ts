declare namespace NodeJS {
  export interface ProcessEnv {
    URL: string;

    // --------------------------//
    //           DEV             //
    // --------------------------//

    // NEO4J
    NEO4J_DEV_USERNAME: string;
    NEO4J_DEV_PASSWORD: string;

    // CLERK
    CLERK_SECRET_DEV_KEY: string;

    // NEON
    PGHOST_DEV: string;
    PGDATABASE_DEV: string;
    PGUSER_DEV: string;
    PGPASSWORD_DEV: string;
    ENDPOINT_ID_DEV: string;
  }
}
