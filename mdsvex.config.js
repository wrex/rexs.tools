import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		blog: 'src/routes/blog/postLayout.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings]
});

export default config;
