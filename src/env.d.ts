/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly GMAIL_APP_PASSWORD: string;
  readonly GMAIL_APP_EMAIL: string;
  readonly TURNSTILE_SECRET_KEY: string;
  readonly TURNSTILE_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
