<script lang="ts">
  import DashboardLayout from '$lib/components/dashboard-layout.svelte';
  import LoginPage from '$lib/pages/login-page.svelte';
  import { isAuthenticated, authLoading, logout } from '$lib/stores/auth';
</script>

{#if $authLoading}
  <!-- Loading screen while restoring session -->
  <div class="flex min-h-screen items-center justify-center bg-background">
    <div class="flex flex-col items-center gap-4">
      <div class="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
      <p class="text-sm text-muted-foreground">Cargando sesión...</p>
    </div>
  </div>

{:else if $isAuthenticated}
  <!-- Route guard: user is authenticated and profile is loaded -->
  <DashboardLayout onLogout={logout} />

{:else}
  <!-- Not authenticated — show login -->
  <LoginPage />
{/if}
