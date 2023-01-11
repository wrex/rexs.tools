export const fetchMarkdownPosts = async () => {
	/** @type {{[path: string]: Function }} */
	const allPostFiles = import.meta.glob('/src/routes/blog/**/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			// srcPath: '/src/routes/blog/foo/+page.md' => '/src/routes/blog/foo/'
			// route: '/src/routes/blog/foo/+page.md' => '/blog/foo'

			return {
				meta: metadata,
				srcPath: path.slice(0, -8),
				route: path.slice(11, -8)
			};
		})
	);

	return allPosts;
};
