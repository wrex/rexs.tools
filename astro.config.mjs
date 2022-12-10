import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import { astroImageTools } from "astro-imagetools";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-blog-template.netlify.app",
  integrations: [astroImageTools, mdx(), svelte()],
  // integrations: [svelte()],
  vite: {
    ssr: {
      noExternal: ["astroImageTools"],
    },
  },
});
