// src/lib/stores/navigation.ts
import { writable } from 'svelte/store';
import type { PageType } from '../types';

export const currentPage = writable<PageType>('networks');