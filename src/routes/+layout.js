// pre-render everything by default
export const prerender = true;

/** @type {import("./$types").LayoutLoad} */
export const load = ({ url }) => {
	const currentRoute = url.pathname;

	return {
		currentRoute
	};
};
