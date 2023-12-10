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
    NEON_DB_DEV_URL: string;
  }
}
