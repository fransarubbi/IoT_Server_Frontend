<script lang="ts">
  import { theme } from '../stores/theme';
  import { Sun, Moon } from 'lucide-svelte';
</script>

<!-- Complete redesign with modern animated toggle -->
<button
  onclick={() => theme.toggle()}
  class="group relative flex h-10 w-10 items-center justify-center rounded-xl 
         bg-secondary border border-border
         transition-all duration-300 ease-out
         hover:bg-primary/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10
         focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background
         active:scale-95"
  aria-label="Toggle theme"
>
  <div class="relative h-5 w-5">
    {#if $theme === 'dark'}
      <Sun class="h-5 w-5 text-warning transition-all duration-300 group-hover:rotate-45 group-hover:scale-110" />
    {:else}
      <Moon class="h-5 w-5 text-primary transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110" />
    {/if}
  </div>
  
  <!-- Glow effect on hover -->
  <div class="absolute inset-0 rounded-xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5"></div>
</button>
