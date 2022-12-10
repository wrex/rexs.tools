import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-template.netlify.app",
  integrations: [
    mdx(),
    svelte(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
