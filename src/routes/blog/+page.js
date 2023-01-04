export const load = async ({ fetch }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	/** @type {Object.<string,number>} */
	const tagCounts = {};

	posts.forEach((post) => {
		post.meta.tags.map((tag) => {
			if (tagCounts[tag]) {
				tagCounts[tag] += 1;
			} else {
				tagCounts[tag] = 1;
			}
		});
	});

	return {
		posts,
		tagCounts
	};
};
