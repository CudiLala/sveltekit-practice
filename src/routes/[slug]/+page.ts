// import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (() => {
	return {
		title: 'Hello world',
		content: `<p class="text-xl">\`Hello world\` is the content</p>`
	};
}) satisfies PageLoad;
