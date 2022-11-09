import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://ustw.pages.dev/",
  integrations: [sitemap()],
});
