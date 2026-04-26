<script lang="ts">
  import type { ComponentType, Snippet } from 'svelte';

  let { 
    icon, 
    title, 
    description, 
    actionLabel, 
    onAction,
    children
  }: { 
    icon: ComponentType; 
    title: string; 
    description: string; 
    actionLabel?: string; 
    onAction?: () => void;
    children?: Snippet;
  } = $props();

  const SvelteComponent = $derived(icon);
</script>

<!-- Complete redesign with modern styling and animations -->
<div class="flex flex-col items-center justify-center py-16 text-center animate-fade-in">
  <div class="relative">
    <!-- Glow effect -->
    <div class="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150"></div>
    <div class="relative flex h-20 w-20 items-center justify-center rounded-2xl 
                bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20
                shadow-lg shadow-primary/10">
      <SvelteComponent class="h-10 w-10 text-primary" />
    </div>
  </div>
  <h3 class="mt-6 text-xl font-semibold text-foreground">{title}</h3>
  <p class="mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">{description}</p>
  {#if actionLabel && onAction}
    <button
      onclick={onAction}
      class="mt-8 btn-primary rounded-xl px-6 py-3 text-sm"
    >
      {actionLabel}
    </button>
  {/if}
  {#if children}
    <div class="mt-4 w-full">
      {@render children()}
    </div>
  {/if}
</div>
