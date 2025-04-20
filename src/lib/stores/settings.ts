import type { Setting } from '$lib/models/setting';
import { writable } from 'svelte/store';

export const settings = writable<Setting[]>([]);
