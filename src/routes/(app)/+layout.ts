import { redirect } from '@sveltejs/kit';
import { auth } from '$lib/stores/auth.svelte';

export async function load({ parent }) {
	await parent(); // Wait for root layout to run initAuth

	if (!auth.isAuthenticated) {
		throw redirect(303, '/login');
	}

	return {};
}
