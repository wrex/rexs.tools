import { writable } from 'svelte/store';

export const furiganaType = writable('romaji');

if (typeof localStorage !== 'undefined' && localStorage.getItem('furiganaType')) {
	let type = localStorage.getItem('furiganaType') || 'romaji';
	furiganaType.set(type);
}
