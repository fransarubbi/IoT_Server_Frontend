<script lang="ts">
  import Sidebar from "$lib/components/sidebar.svelte";
  import { isAuthenticated, authLoading, logout } from "$lib/stores/auth";
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";
  import Loader from "lucide-svelte/icons/loader";

  let { children } = $props();

  $effect(() => {
    if (!$authLoading && !$isAuthenticated) {
      goto("/login");
    }
  });

  function handleLogout() {
    logout();
  }
</script>

{#if $authLoading}
  <div class="flex min-h-screen items-center justify-center bg-background">
    <div class="flex flex-col items-center gap-4">
      <Loader class="h-10 w-10 animate-spin text-primary" />
      <p class="text-sm text-muted-foreground">Verificando sesión...</p>
    </div>
  </div>
{:else if $isAuthenticated}
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
{/if}
