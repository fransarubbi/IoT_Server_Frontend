<script lang="ts">
  import Sidebar from "./sidebar.svelte";
  import { currentPage } from "../stores/navigation";
  import EdgePage from "../pages/edge-page.svelte";
  import CertificatesPage from "../pages/certificates-page.svelte";
  import NotificationsPage from "../pages/notifications-page.svelte";
  import FirmwarePage from "../pages/firmware-page.svelte";

  import EdgeNetworksPage from "../pages/edge-networks-page.svelte";
  import NetworkHubsPage from "../pages/network-hubs-page.svelte";

  import type { Component } from "svelte";
  import type { Page } from "../stores/navigation";

  let { onLogout }: { onLogout?: () => void } = $props();

  const pages: Record<Page, Component> = {
    edge: EdgePage,
    "edge-networks": EdgeNetworksPage,
    certificates: CertificatesPage,
    notifications: NotificationsPage,
    firmware: FirmwarePage,
    "network-hubs": NetworkHubsPage,
  };

  let SvelteComponent = $derived(pages[$currentPage]);
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

  <Sidebar {onLogout} />

  <main class="relative ml-64 min-h-screen p-8">
    <div class="mx-auto max-w-7xl animate-fade-in">
      {#key $currentPage}
        <div class="animate-fade-in">
          <SvelteComponent />
        </div>
      {/key}
    </div>
  </main>
</div>
