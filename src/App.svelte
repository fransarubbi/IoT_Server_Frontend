<script lang="ts">
  import Sidebar from './lib/components/Sidebar.svelte';
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
</script>


<div class="app" data-theme={$theme}>
  <Sidebar />
  <main class="content">
    <svelte:component this={component} />
  </main>
</div>


<style>
  :global(:root) {
    --bg-primary: #dddddd;
    --bg-secondary: #cdcdcd;
    --bg-hover: #d2d2d2;
    --text-primary: #000000;
    --text-secondary: #2a2a2a;
    --border-color: #dee2e6;
    --accent: #0d6efd;
    --accent-hover: #0b5ed7;
    --sidebar-width: 260px;
  }

  :global([data-theme="dark"]) {
    --bg-primary: #111111;
    --bg-secondary: #343434;
    --bg-hover: #494949;
    --text-primary: #ffffff;
    --text-secondary: #cdcdce;
    --border-color: #213140;
    --accent: #195789;
    --accent-hover: #2686cf;
  }

  :global(*) {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :global(body) {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
    background: var(--bg-primary);
    color: var(--text-primary);
    transition: background 0.3s, color 0.3s;
  }

  .app {
    display: flex;
    height: 100vh;
    width: 100vw;
    overflow: hidden; /* Aseguramos que nada salga de la pantalla principal */
    background-color: var(--bg-primary);
    color: var(--text-primary);
  }

  .content {
    flex: 1;   
    overflow-y: auto; /* Scroll vertical solo aquí */
    padding: 2rem;
    background: var(--bg-secondary);
    position: relative;
    height: 100%; /* Mejor usar height 100% del padre flexible */
  }

  @media (max-width: 768px) {
    .content {
      padding: 1rem;
    }
  }
</style>