import type { LayoutLoad } from './$types';

export const load = (() => {
	return {
		sections: [
			{ href: '/', title: 'Home' },
			{ href: '/about', title: 'About' }
		]
	};
}) satisfies LayoutLoad;
