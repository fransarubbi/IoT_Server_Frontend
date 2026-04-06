<script lang="ts">
  import PageHeader from "$lib/components/page-header.svelte";
  import Modal from "$lib/components/modal.svelte";
  import StatusBadge from "$lib/components/status-badge.svelte";
  import EmptyState from "$lib/components/empty-state.svelte";
  import type { Edge } from "$lib/types";
  import { edges } from "$lib/stores/edges";
  import { navigateTo } from "$lib/stores/navigation";
  import Plus from "lucide-svelte/icons/plus";
  import Server from "lucide-svelte/icons/server";
  import NetworkIcon from "lucide-svelte/icons/network";
  import Trash2 from "lucide-svelte/icons/trash-2";
  import MapPin from "lucide-svelte/icons/map-pin";
  import Eye from "lucide-svelte/icons/eye";
  import Download from "lucide-svelte/icons/download";

  let showCreateEdgeModal = $state(false);
  let showViewEdgeModal = $state(false);
  let showDeleteEdgeModal = $state(false);

  let viewingEdge = $state<Edge | null>(null);
  let targetDeleteEdge = $state<Edge | null>(null);

  // Partial edge form state with requested default values
  let newEdge = $state<Partial<Edge>>({
    name: "",
    ubication: "",
    host_server: "127.0.0.1",
    host_port: "8080",
    cn: "localhost",
    host_local: "127.0.0.1",
    db_path: "/var/lib/edge.db",
    buffer_size: 20,
    rust_log: "Info",
    max_attempts: 3,
    frequency_phase: 5,
    frequency_safe_mode: 20,
    timeout_handshake: 30,
    timeout_phase: 60,
    timeout_safe_mode: 150,
    time_between_heartbeats_balance_mode: 20,
    time_between_heartbeats_normal: 45,
    time_between_heartbeats_safe_mode: 60
  });

  function createEdge() {
    if (!newEdge.name?.trim()) return;

    const created: Edge = {
      id_edge: crypto.randomUUID(),
      name: newEdge.name,
      ubication: newEdge.ubication || "Sin ubicación declarada",
      host_server: newEdge.host_server as string,
      host_port: newEdge.host_port as string,
      cn: newEdge.cn as string,
      host_local: newEdge.host_local as string,
      db_path: newEdge.db_path as string,
      buffer_size: Number(newEdge.buffer_size),
      rust_log: newEdge.rust_log as any,
      max_attempts: Number(newEdge.max_attempts),
      frequency_phase: Number(newEdge.frequency_phase),
      frequency_safe_mode: Number(newEdge.frequency_safe_mode),
      timeout_handshake: Number(newEdge.timeout_handshake),
      timeout_phase: Number(newEdge.timeout_phase),
      timeout_safe_mode: Number(newEdge.timeout_safe_mode),
      time_between_heartbeats_balance_mode: Number(newEdge.time_between_heartbeats_balance_mode),
      time_between_heartbeats_normal: Number(newEdge.time_between_heartbeats_normal),
      time_between_heartbeats_safe_mode: Number(newEdge.time_between_heartbeats_safe_mode),
      status: "online",
      lastSeen: new Date(),
      networks: [],
    };

    edges.add(created);
    
    // Reset defaults
    newEdge.name = "";
    newEdge.ubication = "";

    showCreateEdgeModal = false;
  }

  function confirmDeleteEdge() {
    if (targetDeleteEdge) {
      edges.remove(targetDeleteEdge.id_edge);
      showDeleteEdgeModal = false;
      targetDeleteEdge = null;
    }
  }

  function deleteEdgePrompt(edge: Edge, event: Event) {
    event.stopPropagation();
    targetDeleteEdge = edge;
    showDeleteEdgeModal = true;
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
    description="Administra y supervisa tus dispositivos Edge"
  />

  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30">
        <span class="text-sm text-muted-foreground">Total:</span>
        <span class="font-bold text-card-foreground">{$edges.length} edges</span>
      </div>
      <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5">
        <span class="relative flex h-2 w-2">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
          <span class="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
        </span>
        <span class="text-sm font-semibold text-success">{$edges.filter((e) => e.status === "online").length} en línea</span>
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
        <div
          role="button"
          tabindex="0"
          onkeydown={(e) => (e.key === "Enter" || e.key === " ") && goToNetworks(edge.id_edge)}
          onclick={() => goToNetworks(edge.id_edge)}
          class="stagger-item card-interactive group p-5 text-left w-full cursor-pointer"
          style="animation-delay: {i * 0.05}s"
        >
          <div class="flex items-start justify-between">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30">
              <Server class="h-7 w-7 text-primary" />
            </div>
            <StatusBadge status={edge.status} />
          </div>

          <h3 class="mt-4 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {edge.name}
          </h3>

          <div class="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin class="h-4 w-4" />
            {edge.ubication}
          </div>

          <div class="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
              <NetworkIcon class="h-4 w-4" />
              <span>{edge.networks.length} redes</span>
            </div>
            <div class="text-xs text-muted-foreground font-mono">
              ID: {edge.id_edge}
            </div>
          </div>

          <div class="mt-4 flex justify-end gap-2">
            <button
              onclick={(e) => deleteEdgePrompt(edge, e)}
              title="Eliminar"
              class="flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-destructive transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20"
            >
              <Trash2 class="h-4 w-4" />
            </button>
            <button
              onclick={(e) => viewEdgeConfig(edge, e)}
              title="Ver configuración"
              class="flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
            >
              <Eye class="h-4 w-4" />
            </button>
            <button
              onclick={(e) => exportEdgeConfig(edge, e)}
              title="Exportar configuración"
              class="flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/50"
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
  title="Configuración Completada Nuevo Edge"
  onClose={() => (showCreateEdgeModal = false)}
>
  <form onsubmit={(e) => { e.preventDefault(); createEdge(); }} class="px-1 text-left">
    <div class="space-y-6">
      
      <!-- System Specs -->
      <div>
        <h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Sistema</h3>
        <div class="grid grid-cols-2 gap-3">
          <div class="col-span-2 space-y-1.5">
            <label for="create-name" class="block text-xs font-semibold text-muted-foreground">Nombre</label>
            <input id="create-name" type="text" bind:value={newEdge.name} class="input-field py-1.5" required placeholder="Edge Gateway Sur" />
          </div>
          <div class="space-y-1.5">
            <label for="create-ubic" class="block text-xs font-semibold text-muted-foreground">Ubicación</label>
            <input id="create-ubic" type="text" bind:value={newEdge.ubication} class="input-field py-1.5" placeholder="Datacenter Principal" />
          </div>
          <div class="space-y-1.5">
            <label for="create-cn" class="block text-xs font-semibold text-muted-foreground">CN</label>
            <input id="create-cn" type="text" bind:value={newEdge.cn} class="input-field py-1.5 font-mono" placeholder="device.local" />
          </div>
          <div class="col-span-2 grid grid-cols-3 gap-2">
            <div class="space-y-1.5 flex-1">
                <label for="create-host_server" class="block text-xs font-semibold text-muted-foreground">Host Server</label>
                <input id="create-host_server" type="text" bind:value={newEdge.host_server} class="input-field py-1.5 font-mono" />
            </div>
            <div class="space-y-1.5 flex-[0.5]">
                <label for="create-host_port" class="block text-xs font-semibold text-muted-foreground">Host Port</label>
                <input id="create-host_port" type="text" bind:value={newEdge.host_port} class="input-field py-1.5 font-mono" />
            </div>
            <div class="space-y-1.5 flex-1">
                <label for="create-host_local" class="block text-xs font-semibold text-muted-foreground">Host Local</label>
                <input id="create-host_local" type="text" bind:value={newEdge.host_local} class="input-field py-1.5 font-mono" />
            </div>
          </div>
          <div class="col-span-2 space-y-1.5">
            <label for="create-db" class="block text-xs font-semibold text-muted-foreground">Ruta Base de Datos</label>
            <input id="create-db" type="text" bind:value={newEdge.db_path} class="input-field py-1.5 font-mono text-xs" />
          </div>
          <div class="space-y-1.5">
            <label for="create-buffer" class="block text-xs font-semibold text-muted-foreground">Tamaño Buffer (5-50)</label>
            <input id="create-buffer" type="number" min="5" max="50" bind:value={newEdge.buffer_size} class="input-field py-1.5" />
          </div>
          <div class="space-y-1.5">
            <label for="create-log" class="block text-xs font-semibold text-muted-foreground">Log</label>
            <select id="create-log" bind:value={newEdge.rust_log} class="input-field py-1.5 bg-background">
                <option value="Debug">Debug</option>
                <option value="Info">Info</option>
                <option value="Error">Error</option>
            </select>
          </div>
        </div>
      </div>

      <div class="border-t border-border"></div>

      <!-- Protocol Specs -->
      <div>
        <h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Protocolo</h3>
        <div class="grid grid-cols-2 gap-3 text-xs">
          <div class="space-y-1">
            <label for="p-max-a" class="block font-semibold text-muted-foreground">Nº máximo intentos (1-10s)</label>
            <input id="p-max-a" type="number" min="1" max="10" bind:value={newEdge.max_attempts} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-fp" class="block font-semibold text-muted-foreground">Frec. de msjs en fase (1-10m)</label>
            <input id="p-fp" type="number" min="1" max="10" bind:value={newEdge.frequency_phase} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-fs" class="block font-semibold text-muted-foreground">Frec. en safe mode (10-40s)</label>
            <input id="p-fs" type="number" min="10" max="40" bind:value={newEdge.frequency_safe_mode} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-th" class="block font-semibold text-muted-foreground">T Límite handshake (15-60s)</label>
            <input id="p-th" type="number" min="15" max="60" bind:value={newEdge.timeout_handshake} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-tp" class="block font-semibold text-muted-foreground">T Límite fases (30-120s)</label>
            <input id="p-tp" type="number" min="30" max="120" bind:value={newEdge.timeout_phase} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-ts" class="block font-semibold text-muted-foreground">T Límite safe mode (120-300s)</label>
            <input id="p-ts" type="number" min="120" max="300" bind:value={newEdge.timeout_safe_mode} class="input-field py-1" />
          </div>
          <div class="space-y-1 col-span-2 sm:col-span-1">
            <label for="p-hbb" class="block font-semibold text-muted-foreground">Heartbeat b-mode (10-40s)</label>
            <input id="p-hbb" type="number" min="10" max="40" bind:value={newEdge.time_between_heartbeats_balance_mode} class="input-field py-1" />
          </div>
          <div class="space-y-1 sm:col-span-1">
            <label for="p-hbn" class="block font-semibold text-muted-foreground">Heartbeat normal (30-60s)</label>
            <input id="p-hbn" type="number" min="30" max="60" bind:value={newEdge.time_between_heartbeats_normal} class="input-field py-1" />
          </div>
          <div class="space-y-1 col-span-2">
            <label for="p-hbs" class="block font-semibold text-muted-foreground">Heartbeat safe mode (40-80s)</label>
            <input id="p-hbs" type="number" min="40" max="80" bind:value={newEdge.time_between_heartbeats_safe_mode} class="input-field py-1" />
          </div>
        </div>
      </div>

    </div>

    <div class="flex gap-3 pt-6 pb-2">
      <button type="button" onclick={() => (showCreateEdgeModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm">
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
  title={`Configuración del Edge`}
  onClose={() => (showViewEdgeModal = false)}
>
  {#if viewingEdge}
    <div class="space-y-6">

      <!-- Status Header -->
      <div class="flex items-center gap-3 bg-muted/30 p-3 rounded-lg border border-border">
          <StatusBadge status={viewingEdge.status} />
          <div class="text-xs text-muted-foreground ml-auto pr-1 text-right">
              <div>Ult. vez visto:</div>
              <div class="font-medium text-card-foreground">{formatDate(viewingEdge.lastSeen)}</div>
          </div>
      </div>

      <!-- System Specs Readonly -->
      <div>
        <h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Sistema</h3>
        <div class="grid grid-cols-2 gap-y-3 gap-x-4 text-sm bg-card border border-border p-4 rounded-xl">
            <div class="col-span-2">
                <span class="text-muted-foreground block text-xs mb-0.5">ID del Edge</span>
                <span class="font-mono text-card-foreground font-medium">{viewingEdge.id_edge}</span>
            </div>
            <div>
                <span class="text-muted-foreground block text-xs mb-0.5">Nombre</span>
                <span class="font-medium text-card-foreground">{viewingEdge.name}</span>
            </div>
            <div>
                <span class="text-muted-foreground block text-xs mb-0.5">Ubicación</span>
                <span class="text-card-foreground">{viewingEdge.ubication}</span>
            </div>
            <div>
                <span class="text-muted-foreground block text-xs mb-0.5">Host Server</span>
                <span class="font-mono text-xs">{viewingEdge.host_server}:{viewingEdge.host_port}</span>
            </div>
            <div>
                <span class="text-muted-foreground block text-xs mb-0.5">Host Local</span>
                <span class="font-mono text-xs">{viewingEdge.host_local}</span>
            </div>
            <div class="col-span-2">
                <span class="text-muted-foreground block text-xs mb-0.5">CN</span>
                <span class="text-xs font-mono">{viewingEdge.cn}</span>
            </div>
            <div class="col-span-2">
                <span class="text-muted-foreground block text-xs mb-0.5">Ruta Base de Datos</span>
                <span class="text-xs font-mono break-all text-secondary-foreground">{viewingEdge.db_path}</span>
            </div>
            <div>
                <span class="text-muted-foreground block text-xs mb-0.5">Tamaño del Buffer</span>
                <span class="text-card-foreground">{viewingEdge.buffer_size}</span>
            </div>
            <div>
                <span class="text-muted-foreground block text-xs mb-0.5">Nivel de Log</span>
                <span class="text-card-foreground">{viewingEdge.rust_log}</span>
            </div>
        </div>
      </div>

      <!-- Protocol Specs Readonly -->
      <div>
        <h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Protocolo</h3>
        <div class="space-y-2 bg-card border border-border p-4 rounded-xl text-sm">
            <div class="flex justify-between border-b border-border/50 pb-2">
                <span class="text-muted-foreground">Número máx. intentos</span>
                <span class="font-mono">{viewingEdge.max_attempts} s</span>
            </div>
            <div class="flex justify-between border-b border-border/50 py-1">
                <span class="text-muted-foreground">Frecuencia msj (fase)</span>
                <span class="font-mono">{viewingEdge.frequency_phase} min</span>
            </div>
            <div class="flex justify-between border-b border-border/50 py-1">
                <span class="text-muted-foreground">Frecuencia msj (safe mode)</span>
                <span class="font-mono">{viewingEdge.frequency_safe_mode} s</span>
            </div>
            <div class="flex justify-between border-b border-border/50 py-1">
                <span class="text-muted-foreground">T. Límite Handshake</span>
                <span class="font-mono">{viewingEdge.timeout_handshake} s</span>
            </div>
            <div class="flex justify-between border-b border-border/50 py-1">
                <span class="text-muted-foreground">T. Límite Fases</span>
                <span class="font-mono">{viewingEdge.timeout_phase} s</span>
            </div>
            <div class="flex justify-between border-b border-border/50 py-1">
                <span class="text-muted-foreground">T. Límite Safe mode</span>
                <span class="font-mono">{viewingEdge.timeout_safe_mode} s</span>
            </div>
            <div class="flex justify-between border-b border-border/50 py-1">
                <span class="text-muted-foreground">Heartbeat (Balance)</span>
                <span class="font-mono">{viewingEdge.time_between_heartbeats_balance_mode} s</span>
            </div>
            <div class="flex justify-between border-b border-border/50 py-1">
                <span class="text-muted-foreground">Heartbeat (Normal)</span>
                <span class="font-mono">{viewingEdge.time_between_heartbeats_normal} s</span>
            </div>
            <div class="flex justify-between pt-1">
                <span class="text-muted-foreground">Heartbeat (Safe)</span>
                <span class="font-mono">{viewingEdge.time_between_heartbeats_safe_mode} s</span>
            </div>
        </div>
      </div>

      <div class="pt-4">
        <button
          onclick={() => (showViewEdgeModal = false)}
          class="btn-primary w-full rounded-xl py-3 text-sm"
        >
          Cerrar Visualizador
        </button>
      </div>
    </div>
  {/if}
</Modal>

<!-- Delete Edge Protection Modal -->
<Modal
  open={showDeleteEdgeModal}
  title="Protección de Borrado"
  onClose={() => (showDeleteEdgeModal = false)}
>
  {#if targetDeleteEdge}
    <div class="space-y-4 pt-2">
        <div class="flex flex-col items-center justify-center p-6 bg-destructive/10 border border-destructive/20 rounded-xl text-center">
            <div class="bg-destructive text-destructive-foreground p-3 rounded-full mb-3">
                <Trash2 class="h-8 w-8" />
            </div>
            <p class="text-sm font-bold text-destructive">Eliminación Destructiva</p>
        </div>

        <p class="text-card-foreground text-center text-sm px-2">
            ¿Estás seguro que quieres eliminar el edge <strong class="font-bold underline decoration-destructive underline-offset-2">{targetDeleteEdge.id_edge}</strong>?
        </p>

        <p class="text-xs text-muted-foreground text-center bg-muted/50 p-3 rounded-lg border border-border mx-2">
            Perderás automáticamente todas sus {targetDeleteEdge.networks.length} redes y hubs anexados imposibilitando su recuperación local.
        </p>

        <div class="flex gap-3 pt-4">
            <button type="button" onclick={() => (showDeleteEdgeModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">
                Cancelar
            </button>
            <button type="button" onclick={confirmDeleteEdge} class="bg-destructive hover:bg-destructive/90 text-white shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex-1 rounded-xl py-3 text-sm font-medium">
                Confirmar
            </button>
        </div>
    </div>
  {/if}
</Modal>
