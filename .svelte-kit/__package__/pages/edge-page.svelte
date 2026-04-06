<script lang="ts">
  import PageHeader from "../components/page-header.svelte";
  import Modal from "../components/modal.svelte";
  import StatusBadge from "../components/status-badge.svelte";
  import EmptyState from "../components/empty-state.svelte";
  import type { Edge } from "../types";
  import { edges } from "../stores/edges";
  import { navigateTo } from "../stores/navigation";
  import Plus from "lucide-svelte/icons/plus";
  import Server from "lucide-svelte/icons/server";
  import NetworkIcon from "lucide-svelte/icons/network";
  import Trash2 from "lucide-svelte/icons/trash-2";
  import MapPin from "lucide-svelte/icons/map-pin";
  import Eye from "lucide-svelte/icons/eye";
  import Download from "lucide-svelte/icons/download";

  let showCreateEdgeModal = $state(false);
  let showViewEdgeModal = $state(false);
  let viewingEdge = $state<Edge | null>(null);

  let newEdgeName = $state("");
  let newEdgeLocation = $state("");

  function createEdge() {
    if (!newEdgeName.trim()) return;

    const newEdge: Edge = {
      id: crypto.randomUUID(),
      name: newEdgeName,
      location: newEdgeLocation || "Sin ubicación",
      status: "online",
      lastSeen: new Date(),
      networks: [],
    };

    edges.add(newEdge);
    newEdgeName = "";
    newEdgeLocation = "";
    showCreateEdgeModal = false;
  }

  function deleteEdge(id: string, event: Event) {
    event.stopPropagation();
    if (confirm("¿Estás seguro de que deseas eliminar este Edge?")) {
      edges.remove(id);
    }
  }

  function viewEdgeConfig(edge: Edge, event: Event) {
    event.stopPropagation();
    viewingEdge = edge;
    showViewEdgeModal = true;
  }

  function exportEdgeConfig(edge: Edge, event: Event) {
    event.stopPropagation();
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(edge, null, 2));
    const downloadAnchorNode = document.createElement("a");
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute(
      "download",
      `edge_config_${edge.name}.json`,
    );
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  function goToNetworks(edgeId: string) {
    navigateTo("edge-networks", { edgeId });
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat("es", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(date));
  }
</script>

<div class="space-y-6">
  <PageHeader
    title="Edge Devices"
    description="Administra y configura tus dispositivos Edge"
  />

  <!-- Edge List View -->
  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      <div
        class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5
                    transition-all duration-200 hover:border-primary/30"
      >
        <span class="text-sm text-muted-foreground">Total:</span>
        <span class="font-bold text-card-foreground">{$edges.length} edges</span
        >
      </div>
      <div
        class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5"
      >
        <span class="relative flex h-2 w-2">
          <span
            class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"
          ></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-success"
          ></span>
        </span>
        <span class="text-sm font-semibold text-success"
          >{$edges.filter((e) => e.status === "online").length} en línea</span
        >
      </div>
    </div>

    <button
      onclick={() => (showCreateEdgeModal = true)}
      class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
    >
      <Plus class="h-4 w-4" />
      Nuevo Edge
    </button>
  </div>

  {#if $edges.length === 0}
    <EmptyState
      icon={Server}
      title="Sin Edge Devices"
      description="No tienes ningún dispositivo Edge configurado. Crea uno para comenzar a gestionar tu infraestructura IoT."
      actionLabel="Crear Edge Device"
      onAction={() => (showCreateEdgeModal = true)}
    />
  {:else}
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {#each $edges as edge, i}
        <!-- Enhanced edge cards with staggered animations -->
        <div
          role="button"
          tabindex="0"
          onkeydown={(e) =>
            (e.key === "Enter" || e.key === " ") && goToNetworks(edge.id)}
          onclick={() => goToNetworks(edge.id)}
          class="stagger-item card-interactive group p-5 text-left w-full cursor-pointer"
          style="animation-delay: {i * 0.05}s"
        >
          <div class="flex items-start justify-between">
            <div
              class="flex h-14 w-14 items-center justify-center rounded-2xl
                          bg-gradient-to-br from-primary/20 to-primary/10
                          transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30"
            >
              <Server class="h-7 w-7 text-primary" />
            </div>
            <StatusBadge status={edge.status} />
          </div>

          <h3
            class="mt-4 text-lg font-semibold text-card-foreground
                       transition-colors group-hover:text-primary"
          >
            {edge.name}
          </h3>

          <div
            class="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground"
          >
            <MapPin class="h-4 w-4" />
            {edge.location}
          </div>

          <div
            class="mt-4 flex items-center justify-between border-t border-border pt-4"
          >
            <div
              class="flex items-center gap-1.5 text-sm text-muted-foreground"
            >
              <NetworkIcon class="h-4 w-4" />
              <span>{edge.networks.length} redes</span>
            </div>
          </div>

          <div class="mt-4 flex justify-end gap-2">
            <button
              onclick={(e) => deleteEdge(edge.id, e)}
              title="Eliminar"
              class="flex items-center justify-center rounded-lg border border-border bg-card
                         px-3 py-2 text-destructive transition-all duration-200
                         hover:bg-destructive hover:text-destructive-foreground hover:border-destructive
                         hover:shadow-lg hover:shadow-destructive/20"
            >
              <Trash2 class="h-4 w-4" />
            </button>
            <button
              onclick={(e) => viewEdgeConfig(edge, e)}
              title="Ver configuración"
              class="flex items-center justify-center rounded-lg border border-border bg-card
                           px-3 py-2 text-foreground transition-all duration-200
                           hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            >
              <Eye class="h-4 w-4" />
            </button>
            <button
              onclick={(e) => exportEdgeConfig(edge, e)}
              title="Exportar configuración"
              class="flex items-center justify-center rounded-lg border border-border bg-card
                           px-3 py-2 text-foreground transition-all duration-200
                           hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            >
              <Download class="h-4 w-4" />
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<!-- Create Edge Modal -->
<Modal
  open={showCreateEdgeModal}
  title="Nuevo Edge Device"
  onClose={() => (showCreateEdgeModal = false)}
>
  <form
    onsubmit={(e) => {
      e.preventDefault();
      createEdge();
    }}
    class="space-y-5"
  >
    <div class="space-y-2">
      <label
        for="edge-name"
        class="block text-sm font-medium text-card-foreground"
      >
        Nombre
      </label>
      <input
        id="edge-name"
        type="text"
        bind:value={newEdgeName}
        placeholder="Edge Gateway..."
        class="input-field"
        required
      />
    </div>

    <div class="space-y-2">
      <label
        for="edge-location"
        class="block text-sm font-medium text-card-foreground"
      >
        Ubicación
      </label>
      <input
        id="edge-location"
        type="text"
        bind:value={newEdgeLocation}
        placeholder="Datacenter, Planta..."
        class="input-field"
      />
    </div>

    <div class="flex gap-3 pt-2">
      <button
        type="button"
        onclick={() => (showCreateEdgeModal = false)}
        class="btn-secondary flex-1 rounded-xl py-3 text-sm"
      >
        Cancelar
      </button>
      <button type="submit" class="btn-primary flex-1 rounded-xl py-3 text-sm">
        Crear Edge
      </button>
    </div>
  </form>
</Modal>

<!-- View Edge Config Modal -->
<Modal
  open={showViewEdgeModal}
  title="Configuración del Edge"
  onClose={() => (showViewEdgeModal = false)}
>
  {#if viewingEdge}
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-4 text-sm">
        <div>
          <span class="text-muted-foreground block">ID</span>
          <span class="font-mono text-card-foreground">{viewingEdge.id}</span>
        </div>
        <div>
          <span class="text-muted-foreground block">Estado</span>
          <StatusBadge status={viewingEdge.status} />
        </div>
        <div>
          <span class="text-muted-foreground block">Nombre</span>
          <span class="font-medium text-card-foreground"
            >{viewingEdge.name}</span
          >
        </div>
        <div>
          <span class="text-muted-foreground block">Ubicación</span>
          <span class="text-card-foreground">{viewingEdge.location}</span>
        </div>
        <div>
          <span class="text-muted-foreground block">Última conexión</span>
          <span class="text-card-foreground"
            >{formatDate(viewingEdge.lastSeen)}</span
          >
        </div>
        <div>
          <span class="text-muted-foreground block">Redes asociadas</span>
          <span class="text-card-foreground">{viewingEdge.networks.length}</span
          >
        </div>
      </div>
      <div class="pt-4">
        <button
          onclick={() => (showViewEdgeModal = false)}
          class="btn-primary w-full rounded-xl py-2.5 text-sm"
        >
          Cerrar
        </button>
      </div>
    </div>
  {/if}
</Modal>
