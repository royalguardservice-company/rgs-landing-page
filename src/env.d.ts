/// <reference path="../.astro/types.d.ts" />
interface ImportMetaEnv {
  readonly TURNSTILE_SECRET_KEY: string;
  readonly TURNSTILE_SITE_KEY: string;
  readonly RESEND_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
