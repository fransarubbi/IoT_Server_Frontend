<script lang="ts">
  import Sidebar from "$lib/components/sidebar.svelte";
  import { logout } from "$lib/stores/auth.svelte";
  import { page } from "$app/stores";

  let { children } = $props();

  function handleLogout() {
    logout();
  }
</script>

<!-- Added background gradient and improved layout -->
<div class="min-h-screen bg-background">
  <!-- Subtle background gradient -->
  <div class="fixed inset-0 pointer-events-none overflow-hidden">
    <div
      class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"
    ></div>
    <div
      class="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
    ></div>
  </div>

  <Sidebar onLogout={handleLogout} />

  <main class="relative ml-64 min-h-screen p-8">
    <div class="mx-auto max-w-7xl animate-fade-in">
      {#key $page.url.pathname}
        <div class="animate-fade-in">
          {@render children()}
        </div>
      {/key}
    </div>
  </main>
</div>
