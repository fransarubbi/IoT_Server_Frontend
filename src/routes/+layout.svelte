<script lang="ts">
	import '../app.css';
	import Toaster from '$lib/components/toaster.svelte';

	let { children } = $props();
</script>

<Toaster />
{@render children()}
