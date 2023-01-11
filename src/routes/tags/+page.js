/** @type {import("./$types").PageLoad} */
export const load = async ({ fetch, params }) => {
	const response = await fetch(`/api/posts`);
	const posts = await response.json();

	return {
		posts
	};
};
