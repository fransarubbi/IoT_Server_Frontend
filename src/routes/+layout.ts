import { initAuth, auth } from '$lib/stores/auth.svelte';

export const ssr = false; // Disable SSR since Supabase auth relies on localStorage

export async function load() {
	if (auth.loading) {
		await initAuth();
	}
	return {};
}
