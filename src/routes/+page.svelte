<script lang="ts">
  import DashboardLayout from '$lib/components/dashboard-layout.svelte';
  import LoginPage from '$lib/pages/login-page.svelte';
  import { auth } from '$lib/stores/auth';
</script>

{#if $auth}
  <DashboardLayout onLogout={() => auth.logout()} />
{:else}
  <LoginPage onLogin={() => console.log("Usuario logueado")} />
{/if}
