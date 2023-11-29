/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_DEV_AUTH0_DOMAIN: string;
  readonly VITE_DEV_AUTH0_CLIENT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
