/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CLERK_PUBLISHABLE_DEV_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
