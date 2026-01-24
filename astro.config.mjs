import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

import partytown from "@astrojs/partytown";

export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: [
          { "dataLayer.push": "dataLayerPush" },
          "https://www.googletagmanager.com/gtag/js",
          "https://www.google-analytics.com/analytics.js",
        ],
      },
    }),
  ],
  output: "static",

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@astrojs/image"],
    },
  },

  adapter: cloudflare(),
});