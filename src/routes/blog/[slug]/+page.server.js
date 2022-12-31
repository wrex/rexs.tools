import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */

export const load = async ({ params }) => {
	try {
		const post = await import(`../posts/${params.slug}.md`);
		console.log(post);

		return {
			PostContent: post.default.render().html,
			meta: { ...post.metadata, slug: params.slug }
		};
	} catch (err) {
		console.log(err);
		throw error(404, {
			message: `No posts found`
		});
	}
};
