<script lang="ts">
  import { onMount } from "svelte";
  import PageHeader from "$lib/components/page-header.svelte";
  import Modal from "$lib/components/modal.svelte";
  import StatusBadge from "$lib/components/status-badge.svelte";
  import EmptyState from "$lib/components/empty-state.svelte";
  import type { Edge } from "$lib/types";
  import { edges, edgesLoading, edgesActions } from "$lib/stores/edges";
  import { goto } from "$app/navigation";
  import Plus from "lucide-svelte/icons/plus";
  import Server from "lucide-svelte/icons/server";
  import NetworkIcon from "lucide-svelte/icons/network";
  import Trash2 from "lucide-svelte/icons/trash-2";
  import MapPin from "lucide-svelte/icons/map-pin";
  import Eye from "lucide-svelte/icons/eye";
  import Download from "lucide-svelte/icons/download";
  import Loader from "lucide-svelte/icons/loader";
  import AlertCircle from "lucide-svelte/icons/alert-circle";
  import RefreshCw from "lucide-svelte/icons/refresh-cw";

  onMount(() => {
    edgesActions.load();
  });

  // Modal visibility
  let showCreateEdgeModal = $state(false);
  let showViewEdgeModal   = $state(false);
  let showDeleteEdgeModal = $state(false);

  // Selected items
  let viewingEdge       = $state<Edge | null>(null);
  let targetDeleteEdge  = $state<Edge | null>(null);

  // Local action states (independent from the global list-loading state)
  let isSubmitting  = $state(false);
  let actionError   = $state<string | null>(null);

  // Form state with default values
  let newEdge = $state<Edge>({
    edgeId: "",
    name: "",
    location: "",
    hostServer: "127.0.0.1",
    hostPort: 8080,
    cn: "localhost",
    hostLocal: "127.0.0.1",
    dataBasePath: "/var/lib/edge.db",
    bufferLength: 20,
    logLevel: "INFO",
    maxNumberHandshakeAttempts: 3,
    frequencyMessagesPhase: 5,
    frequencyMessagesSafeMode: 20,
    handshakeTimeLimit: 30,
    phaseTimeLimit: 60,
    safeModeTimeLimit: 150,
    heartbeatBalanceModeTime: 20,
    heartbeatNormalTime: 45,
    heartbeatSafeModeTime: 60,
  });

  async function createEdge() {
    if (!newEdge.name?.trim() || !newEdge.edgeId?.trim()) return;
    actionError = null;
    isSubmitting = true;
    try {
      await edgesActions.add({ ...newEdge });
      newEdge.edgeId = "";
      newEdge.name = "";
      newEdge.location = "";
      showCreateEdgeModal = false;
    } catch (err) {
      actionError = err instanceof Error ? err.message : String(err);
    } finally {
      isSubmitting = false;
    }
  }

  async function confirmDeleteEdge() {
    if (!targetDeleteEdge) return;
    actionError = null;
    isSubmitting = true;
    try {
      await edgesActions.remove(targetDeleteEdge.edgeId);
      showDeleteEdgeModal = false;
      targetDeleteEdge = null;
    } catch (err) {
      actionError = err instanceof Error ? err.message : String(err);
    } finally {
      isSubmitting = false;
    }
  }

  function deleteEdgePrompt(edge: Edge, event: Event) {
    event.stopPropagation();
    targetDeleteEdge = edge;
    actionError = null;
    showDeleteEdgeModal = true;
  }

  function viewEdgeConfig(edge: Edge, event: Event) {
    event.stopPropagation();
    viewingEdge = edge;
    showViewEdgeModal = true;
  }

  async function downloadEdgeConfig(edge: Edge, event: Event) {
    event.stopPropagation();
    try {
      await edgesActions.downloadConfig(edge.edgeId);
    } catch (err) {
      // non-critical, silent fail
      console.error("Download failed:", err);
    }
  }

  function goToNetworks(edgeId: string) {
    goto(`/edge/${edgeId}/networks`);
  }

  function formatDate(iso: string): string {
    return new Intl.DateTimeFormat("es", {
      dateStyle: "short",
      timeStyle: "short",
    }).format(new Date(iso));
  }
</script>

<div class="space-y-6">
  <PageHeader
    title="Dispositivos Edge"
    description="Administra y supervisa tus dispositivos Edge"
  />

  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30">
        <span class="text-sm text-muted-foreground">Total:</span>
        <span class="font-bold text-card-foreground">{$edges.length} edges</span>
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

  <!--
    Only show the full-page spinner on the FIRST load (when the list is empty).
    Never show it while a modal action is in progress.
  -->
  {#if $edgesLoading && $edges.length === 0}
    <div class="flex items-center justify-center py-20 text-muted-foreground gap-3">
      <Loader class="h-6 w-6 animate-spin" />
      <span class="text-sm">Cargando dispositivos...</span>
    </div>
  {:else if $edges.length === 0}
    <EmptyState
      icon={Server}
      title="Sin Edge Devices"
      description="No tienes ningún dispositivo Edge configurado. Crea uno para comenzar a gestionar tu infraestructura IoT."
      actionLabel="Crear Edge Device"
      onAction={() => (showCreateEdgeModal = true)}
    >
      <!-- Retry button when load failed -->
      <button
        onclick={() => edgesActions.load()}
        class="mt-3 flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <RefreshCw class="h-3.5 w-3.5" />
        Reintentar conexión
      </button>
    </EmptyState>
  {:else}
    <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {#each $edges as edge, i}
        <div
          role="button"
          tabindex="0"
          onkeydown={(e) => (e.key === "Enter" || e.key === " ") && goToNetworks(edge.edgeId)}
          onclick={() => goToNetworks(edge.edgeId)}
          class="stagger-item card-interactive group p-5 text-left w-full cursor-pointer"
          style="animation-delay: {i * 0.05}s"
        >
          <div class="flex items-start justify-between">
            <div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30">
              <Server class="h-7 w-7 text-primary" />
            </div>
          </div>

          <h3 class="mt-4 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">
            {edge.name}
          </h3>

          {#if edge.location}
            <div class="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin class="h-4 w-4" />
              {edge.location}
            </div>
          {/if}

          <div class="mt-4 flex items-center justify-between border-t border-border pt-4">
            <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
              <NetworkIcon class="h-4 w-4" />
              <span>Ver redes</span>
            </div>
            <div class="text-xs text-muted-foreground font-mono">
              ID: {edge.edgeId}
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
              onclick={(e) => downloadEdgeConfig(edge, e)}
              title="Descargar configuración ZIP"
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
  title="Nuevo Edge Device"
  onClose={() => (showCreateEdgeModal = false)}
>
  <form onsubmit={(e) => { e.preventDefault(); createEdge(); }} class="px-1 text-left">
    <div class="space-y-6">

      <!-- System Specs -->
      <div>
        <h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Sistema</h3>
        <div class="grid grid-cols-2 gap-3">
          <div class="space-y-1.5">
            <label for="create-edgeId" class="block text-xs font-semibold text-muted-foreground">ID del Edge</label>
            <input id="create-edgeId" type="text" bind:value={newEdge.edgeId} class="input-field py-1.5 font-mono" required placeholder="edge-001" />
          </div>
          <div class="space-y-1.5">
            <label for="create-name" class="block text-xs font-semibold text-muted-foreground">Nombre</label>
            <input id="create-name" type="text" bind:value={newEdge.name} class="input-field py-1.5" required placeholder="Edge Gateway Sur" />
          </div>
          <div class="col-span-2 space-y-1.5">
            <label for="create-ubic" class="block text-xs font-semibold text-muted-foreground">Ubicación</label>
            <input id="create-ubic" type="text" bind:value={newEdge.location} class="input-field py-1.5" placeholder="Datacenter Principal" />
          </div>
          <div class="space-y-1.5">
            <label for="create-cn" class="block text-xs font-semibold text-muted-foreground">CN</label>
            <input id="create-cn" type="text" bind:value={newEdge.cn} class="input-field py-1.5 font-mono" placeholder="device.local" />
          </div>
          <div class="col-span-2 grid grid-cols-3 gap-2">
            <div class="space-y-1.5 flex-1">
              <label for="create-hostServer" class="block text-xs font-semibold text-muted-foreground">Host Server</label>
              <input id="create-hostServer" type="text" bind:value={newEdge.hostServer} class="input-field py-1.5 font-mono" />
            </div>
            <div class="space-y-1.5 flex-[0.5]">
              <label for="create-port" class="block text-xs font-semibold text-muted-foreground">Puerto</label>
              <input id="create-port" type="number" bind:value={newEdge.hostPort} class="input-field py-1.5 font-mono" />
            </div>
            <div class="space-y-1.5 flex-1">
              <label for="create-hostLocal" class="block text-xs font-semibold text-muted-foreground">Host Local</label>
              <input id="create-hostLocal" type="text" bind:value={newEdge.hostLocal} class="input-field py-1.5 font-mono" />
            </div>
          </div>
          <div class="col-span-2 space-y-1.5">
            <label for="create-db" class="block text-xs font-semibold text-muted-foreground">Ruta Base de Datos</label>
            <input id="create-db" type="text" bind:value={newEdge.dataBasePath} class="input-field py-1.5 font-mono text-xs" />
          </div>
          <div class="space-y-1.5">
            <label for="create-buffer" class="block text-xs font-semibold text-muted-foreground">Tamaño Buffer (5-50)</label>
            <input id="create-buffer" type="number" min="5" max="50" bind:value={newEdge.bufferLength} class="input-field py-1.5" />
          </div>
          <div class="space-y-1.5">
            <label for="create-log" class="block text-xs font-semibold text-muted-foreground">Log</label>
            <select id="create-log" bind:value={newEdge.logLevel} class="input-field py-1.5 bg-background">
              <option value="DEBUG">Debug</option>
              <option value="INFO">Info</option>
              <option value="WARN">Warn</option>
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
            <label for="p-max-a" class="block font-semibold text-muted-foreground">Nº máximo intentos (1-10)</label>
            <input id="p-max-a" type="number" min="1" max="10" bind:value={newEdge.maxNumberHandshakeAttempts} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-fp" class="block font-semibold text-muted-foreground">Frec. msjs en fase (1-10m)</label>
            <input id="p-fp" type="number" min="1" max="10" bind:value={newEdge.frequencyMessagesPhase} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-fs" class="block font-semibold text-muted-foreground">Frec. safe mode (10-40s)</label>
            <input id="p-fs" type="number" min="10" max="40" bind:value={newEdge.frequencyMessagesSafeMode} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-th" class="block font-semibold text-muted-foreground">T Límite handshake (15-60s)</label>
            <input id="p-th" type="number" min="15" max="60" bind:value={newEdge.handshakeTimeLimit} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-tp" class="block font-semibold text-muted-foreground">T Límite fases (30-120s)</label>
            <input id="p-tp" type="number" min="30" max="120" bind:value={newEdge.phaseTimeLimit} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-ts" class="block font-semibold text-muted-foreground">T Límite safe mode (120-300s)</label>
            <input id="p-ts" type="number" min="120" max="300" bind:value={newEdge.safeModeTimeLimit} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-hbb" class="block font-semibold text-muted-foreground">Heartbeat b-mode (10-40s)</label>
            <input id="p-hbb" type="number" min="10" max="40" bind:value={newEdge.heartbeatBalanceModeTime} class="input-field py-1" />
          </div>
          <div class="space-y-1">
            <label for="p-hbn" class="block font-semibold text-muted-foreground">Heartbeat normal (30-60s)</label>
            <input id="p-hbn" type="number" min="30" max="60" bind:value={newEdge.heartbeatNormalTime} class="input-field py-1" />
          </div>
          <div class="space-y-1 col-span-2">
            <label for="p-hbs" class="block font-semibold text-muted-foreground">Heartbeat safe mode (40-80s)</label>
            <input id="p-hbs" type="number" min="40" max="80" bind:value={newEdge.heartbeatSafeModeTime} class="input-field py-1" />
          </div>
        </div>
      </div>

      <!-- Error only shows for user-triggered failures (inside the modal) -->
      {#if actionError}
        <div class="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive">
          <AlertCircle class="h-3.5 w-3.5 shrink-0" />
          {actionError}
        </div>
      {/if}

    </div>

    <div class="flex gap-3 pt-6 pb-2">
      <button type="button" onclick={() => (showCreateEdgeModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm">
        Cancelar
      </button>
      <button type="submit" disabled={isSubmitting} class="btn-primary flex-1 rounded-xl py-3 text-sm disabled:opacity-60 flex items-center justify-center gap-2">
        {#if isSubmitting}
          <Loader class="h-4 w-4 animate-spin" />
        {/if}
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
    <div class="space-y-6">

      <div>
        <h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Sistema</h3>
        <div class="grid grid-cols-2 gap-y-3 gap-x-4 text-sm bg-card border border-border p-4 rounded-xl">
          <div class="col-span-2">
            <span class="text-muted-foreground block text-xs mb-0.5">ID del Edge</span>
            <span class="font-mono text-card-foreground font-medium">{viewingEdge.edgeId}</span>
          </div>
          <div>
            <span class="text-muted-foreground block text-xs mb-0.5">Nombre</span>
            <span class="font-medium text-card-foreground">{viewingEdge.name}</span>
          </div>
          <div>
            <span class="text-muted-foreground block text-xs mb-0.5">Ubicación</span>
            <span class="text-card-foreground">{viewingEdge.location}</span>
          </div>
          <div>
            <span class="text-muted-foreground block text-xs mb-0.5">Host Server</span>
            <span class="font-mono text-xs">{viewingEdge.hostServer}:{viewingEdge.hostPort}</span>
          </div>
          <div>
            <span class="text-muted-foreground block text-xs mb-0.5">Host Local</span>
            <span class="font-mono text-xs">{viewingEdge.hostLocal}</span>
          </div>
          <div class="col-span-2">
            <span class="text-muted-foreground block text-xs mb-0.5">CN</span>
            <span class="text-xs font-mono">{viewingEdge.cn}</span>
          </div>
          <div class="col-span-2">
            <span class="text-muted-foreground block text-xs mb-0.5">Ruta Base de Datos</span>
            <span class="text-xs font-mono break-all text-secondary-foreground">{viewingEdge.dataBasePath}</span>
          </div>
          <div>
            <span class="text-muted-foreground block text-xs mb-0.5">Tamaño del Buffer</span>
            <span class="text-card-foreground">{viewingEdge.bufferLength}</span>
          </div>
          <div>
            <span class="text-muted-foreground block text-xs mb-0.5">Nivel de Log</span>
            <span class="text-card-foreground">{viewingEdge.logLevel}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Protocolo</h3>
        <div class="space-y-2 bg-card border border-border p-4 rounded-xl text-sm">
          <div class="flex justify-between border-b border-border/50 pb-2">
            <span class="text-muted-foreground">Número máx. intentos</span>
            <span class="font-mono">{viewingEdge.maxNumberHandshakeAttempts} s</span>
          </div>
          <div class="flex justify-between border-b border-border/50 py-1">
            <span class="text-muted-foreground">Frecuencia msj (fase)</span>
            <span class="font-mono">{viewingEdge.frequencyMessagesPhase} min</span>
          </div>
          <div class="flex justify-between border-b border-border/50 py-1">
            <span class="text-muted-foreground">Frecuencia msj (safe mode)</span>
            <span class="font-mono">{viewingEdge.frequencyMessagesSafeMode} s</span>
          </div>
          <div class="flex justify-between border-b border-border/50 py-1">
            <span class="text-muted-foreground">T. Límite Handshake</span>
            <span class="font-mono">{viewingEdge.handshakeTimeLimit} s</span>
          </div>
          <div class="flex justify-between border-b border-border/50 py-1">
            <span class="text-muted-foreground">T. Límite Fases</span>
            <span class="font-mono">{viewingEdge.phaseTimeLimit} s</span>
          </div>
          <div class="flex justify-between border-b border-border/50 py-1">
            <span class="text-muted-foreground">T. Límite Safe mode</span>
            <span class="font-mono">{viewingEdge.safeModeTimeLimit} s</span>
          </div>
          <div class="flex justify-between border-b border-border/50 py-1">
            <span class="text-muted-foreground">Heartbeat (Balance)</span>
            <span class="font-mono">{viewingEdge.heartbeatBalanceModeTime} s</span>
          </div>
          <div class="flex justify-between border-b border-border/50 py-1">
            <span class="text-muted-foreground">Heartbeat (Normal)</span>
            <span class="font-mono">{viewingEdge.heartbeatNormalTime} s</span>
          </div>
          <div class="flex justify-between pt-1">
            <span class="text-muted-foreground">Heartbeat (Safe)</span>
            <span class="font-mono">{viewingEdge.heartbeatSafeModeTime} s</span>
          </div>
        </div>
      </div>

      <div class="pt-4">
        <button onclick={() => (showViewEdgeModal = false)} class="btn-primary w-full rounded-xl py-3 text-sm">
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
        ¿Estás seguro que quieres eliminar el edge <strong class="font-bold underline decoration-destructive underline-offset-2">{targetDeleteEdge.edgeId}</strong>?
      </p>

      <p class="text-xs text-muted-foreground text-center bg-muted/50 p-3 rounded-lg border border-border mx-2">
        Se eliminarán también todas sus redes y hubs asociados de forma irreversible.
      </p>

      {#if actionError}
        <div class="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive">
          <AlertCircle class="h-3.5 w-3.5 shrink-0" />
          {actionError}
        </div>
      {/if}

      <div class="flex gap-3 pt-4">
        <button type="button" onclick={() => (showDeleteEdgeModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">
          Cancelar
        </button>
        <button type="button" onclick={confirmDeleteEdge} disabled={isSubmitting} class="bg-destructive hover:bg-destructive/90 text-white shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex-1 rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-60">
          {#if isSubmitting}
            <Loader class="h-4 w-4 animate-spin" />
          {/if}
          Confirmar
        </button>
      </div>
    </div>
  {/if}
</Modal>
