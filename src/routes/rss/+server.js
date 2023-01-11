import { fetchMarkdownPosts } from '$lib/utils';
import { siteURL, siteTitle, siteDescription } from '$lib/config';

export const prerender = true;

export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();
	const sortedPosts = allPosts.sort(
		(a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
	);

	const body = render(sortedPosts);
	const options = {
		headers: {
			'Cache-Control': 'max-age=0, s-maxage=3600',
			'Content-Type': 'application/xml'
		}
	};

	return new Response(body, options);
};

/**
 * render the xml output
 * @param {import("$lib/types").Post[]} posts
 * @returns {string}
 */
const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${siteTitle}</title>
<description>${siteDescription}</description>
<link>${siteURL}</link>
<atom:link href="${siteURL}/rss.xml" rel="self" type="application/rss+xml"/>
${posts
	.map(
		(post) => `<item>
<guid isPermaLink="true">${siteURL}blog/${post.route}</guid>
<title>${post.meta.title}</title>
<link>${siteURL}/blog/${post.route}</link>
<description>${post.meta.title}</description>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`
	)
	.join('')}
</channel>
</rss>
`;
