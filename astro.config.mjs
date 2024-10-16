import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-clz.pages.dev",
  base: "/",
  markdown: {
    syntaxHighlight: "prism",
  },
});
