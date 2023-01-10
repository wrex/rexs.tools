/** @type {import('./$types').PageLoad} */
export const load = async ({ fetch, params }) => {
	const { tag } = params;
	const response = await fetch(`/api/posts`);
	/** @type { import("$lib/types").Post[] } */
	const allPosts = await response.json();

	const posts = allPosts.filter((post) => post.meta.tags.includes(tag));

	return {
		tag,
		posts
	};
};
