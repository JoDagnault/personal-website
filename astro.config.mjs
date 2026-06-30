import { defineConfig } from "astro/config";
import { defaultLocale, locales } from "./src/i18n/locales.ts";

import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://jodagnault.com/",
  redirects: {
    "/": "/en/",
  },

  i18n: {
    locales,
    defaultLocale,
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [mdx()],
});
