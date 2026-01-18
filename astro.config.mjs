import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [],
  output: "static",
  adapter: vercel(),
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      exclude: ["@astrojs/image"],
    },
  },
});
