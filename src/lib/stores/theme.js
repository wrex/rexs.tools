import { writable } from 'svelte/store';

const theme = writable('dark');

export { theme };

if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
	let localTheme = localStorage.getItem('theme') || 'dark';
	theme.set(localTheme);
}
