<script lang="ts">
  import { X } from 'lucide-svelte';
  import type { Snippet } from 'svelte';

  interface Props {
    children: Snippet;
    open?: boolean;
    title: string;
    onClose: () => void;
  }

  let {
    children,
    open = false,
    title,
    onClose
  }: Props = $props();

  function handleBackdropClick() {
    onClose();
  }

  function handleCloseClick() {
    onClose();
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
    <!-- Backdrop -->
    <div
      class="absolute inset-0 bg-background/80 backdrop-blur-md cursor-pointer"
      onclick={handleBackdropClick}
      onkeydown={(e) => e.key === 'Escape' && onClose()}
      role="button"
      tabindex="-1"
      aria-label="Close modal"
    ></div>

    <!-- Modal -->
    <div class="relative z-10 m-auto w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border 
                bg-card p-6 shadow-2xl shadow-black/20 animate-scale-in">
      <div class="flex items-center justify-between mb-5">
        <h2 class="text-lg font-semibold text-card-foreground">{title}</h2>
        <!-- Close button -->
        <button
          type="button"
          onclick={handleCloseClick}
          class="flex h-9 w-9 items-center justify-center rounded-xl 
                 text-muted-foreground transition-all duration-200
                 hover:bg-destructive/10 hover:text-destructive hover:rotate-90
                 active:scale-90"
          aria-label="Close"
        >
          <X class="h-5 w-5" />
        </button>
      </div>
      
      {#if children}
        {@render children()}
      {/if}
    </div>
  </div>
{/if}
