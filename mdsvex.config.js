import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	layout: {
		blog: 'src/routes/blog/postLayout.svelte'
	},

	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
