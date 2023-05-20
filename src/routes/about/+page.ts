import type { PageLoad } from './$types';

export const load = (() => {
	return {
		title: 'Hello world'
	};
}) satisfies PageLoad;
