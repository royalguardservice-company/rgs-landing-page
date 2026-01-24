/// <reference path="../.astro/types.d.ts" />

// Define your Cloudflare environment variables and bindings
interface Env {
  TURNSTILE_SECRET_KEY: string;
  TURNSTILE_SITE_KEY: string;
  RESEND_API_KEY: string;
  RESEND_FROM_EMAIL?: string;
  RESEND_TO_EMAIL?: string;
}

// Extend App.Locals with Cloudflare Runtime type
type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}
