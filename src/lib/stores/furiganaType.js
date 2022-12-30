import { writable } from 'svelte/store';

export const furiganaType = writable('romaji');

let furiType = '';

if (typeof localStorage !== 'undefined' && localStorage.getItem('furiganaType')) {
	furiType = localStorage.getItem('furiganaType') || 'romaji';
	furiganaType.set(furiType);
}
