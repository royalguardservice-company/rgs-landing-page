import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [],
  output: "static",
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        limitInputPixels: false,
      },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@astrojs/image"],
    },
  },

  adapter: cloudflare(),
});