/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_OPENYOURBOX_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}