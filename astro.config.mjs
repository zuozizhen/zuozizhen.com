import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

export default defineConfig({
  site: "https://zuozizhen.com/",
  integrations: [
    tailwind(),
    mdx(),
    sitemap(),
    icon(),
  ],
});
