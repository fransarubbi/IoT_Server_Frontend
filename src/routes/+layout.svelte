<script lang="ts">
	import '../app.css';
	import { onMount } from 'svelte';
	import { initAuth } from '$lib/stores/auth';

	let { children } = $props();

	onMount(async () => {
		await initAuth();
	});
</script>

{@render children()}
