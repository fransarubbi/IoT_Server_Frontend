<script lang="ts">
  import Sidebar from './lib/components/Sidebar.svelte';
  
  // Páginas
  import Networks from './lib/pages/Networks.svelte';
  import Certificates from './lib/pages/Certificates.svelte';
  import Firmware from './lib/pages/Firmware.svelte';
  import Notifications from './lib/pages/Notifications.svelte';
  
  import { theme } from './lib/stores/theme';
  import { currentPage } from './lib/stores/navigation';
  import type { PageType } from './lib/types';

  const pages: Record<PageType, any> = {
    networks: Networks,
    certificates: Certificates,
    firmware: Firmware,
    notifications: Notifications
  };

  $: component = pages[$currentPage];

  $: {
    document.body.setAttribute('data-theme', $theme);
  }
</script>

<div class="app">
  
  <Sidebar />

  <main class="content">
    <svelte:component this={component} />
  </main>

</div>

<style>
  /* ESTRUCTURA (LAYOUT) */
  .app {
    display: flex;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: transparent; 
    color: var(--text-primary);
  }

  .content {
    flex: 1;
    height: 100%;
    overflow-y: auto;
    padding: 2rem;
    background-color: var(--bg-secondary);
    position: relative;
  }

  @media (max-width: 768px) {
    .content {
      padding: 1rem;
      width: 100%; 
    }
  }
</style>