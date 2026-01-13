<script lang="ts">
  import PageHeader from '$lib/components/page-header.svelte';
  import Modal from '$lib/components/modal.svelte';
  import StatusBadge from '$lib/components/status-badge.svelte';
  import EmptyState from '$lib/components/empty-state.svelte';
  import type { Edge, Network } from '$lib/types';
  import Plus from 'lucide-svelte/icons/plus';
  import Server from 'lucide-svelte/icons/server';
  import NetworkIcon from 'lucide-svelte/icons/network';
  import Settings from 'lucide-svelte/icons/settings';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import ArrowLeft from 'lucide-svelte/icons/arrow-left';
  import MapPin from 'lucide-svelte/icons/map-pin';
  import Clock from 'lucide-svelte/icons/clock';
  import Wifi from 'lucide-svelte/icons/wifi';

  let edges = $state<Edge[]>([
    {
      id: '1',
      name: 'Edge Gateway Alpha',
      status: 'online',
      location: 'Datacenter Principal',
      lastSeen: new Date(),
      networks: [
        { id: 'n1', name: 'Red Industrial', edgeId: '1', subnet: '192.168.1.0/24', gateway: '192.168.1.1', status: 'active', devices: 24 },
        { id: 'n2', name: 'Red Sensores', edgeId: '1', subnet: '192.168.2.0/24', gateway: '192.168.2.1', status: 'active', devices: 156 },
      ]
    },
    {
      id: '2',
      name: 'Edge Gateway Beta',
      status: 'warning',
      location: 'Planta Norte',
      lastSeen: new Date(Date.now() - 300000),
      networks: [
        { id: 'n3', name: 'Red Producción', edgeId: '2', subnet: '10.0.1.0/24', gateway: '10.0.1.1', status: 'active', devices: 48 },
      ]
    },
    {
      id: '3',
      name: 'Edge Gateway Gamma',
      status: 'offline',
      location: 'Sucursal Sur',
      lastSeen: new Date(Date.now() - 86400000),
      networks: []
    },
  ]);

  let selectedEdge = $state<Edge | null>(null);
  let showCreateEdgeModal = $state(false);
  let showCreateNetworkModal = $state(false);

  let newEdgeName = $state('');
  let newEdgeLocation = $state('');
  let newNetworkName = $state('');
  let newNetworkSubnet = $state('');
  let newNetworkGateway = $state('');

  function createEdge() {
    if (!newEdgeName.trim()) return;
    
    const newEdge: Edge = {
      id: crypto.randomUUID(),
      name: newEdgeName,
      location: newEdgeLocation || 'Sin ubicación',
      status: 'online',
      lastSeen: new Date(),
      networks: []
    };
    
    edges = [...edges, newEdge];
    newEdgeName = '';
    newEdgeLocation = '';
    showCreateEdgeModal = false;
  }

  function createNetwork() {
    if (!selectedEdge || !newNetworkName.trim() || !newNetworkSubnet.trim()) return;
    
    const newNetwork: Network = {
      id: crypto.randomUUID(),
      name: newNetworkName,
      edgeId: selectedEdge.id,
      subnet: newNetworkSubnet,
      gateway: newNetworkGateway || 'Auto',
      status: 'active',
      devices: 0
    };
    
    edges = edges.map(e => 
      e.id === selectedEdge!.id 
        ? { ...e, networks: [...e.networks, newNetwork] }
        : e
    );
    selectedEdge = edges.find(e => e.id === selectedEdge!.id) || null;
    
    newNetworkName = '';
    newNetworkSubnet = '';
    newNetworkGateway = '';
    showCreateNetworkModal = false;
  }

  function deleteEdge(id: string) {
    edges = edges.filter(e => e.id !== id);
    if (selectedEdge?.id === id) selectedEdge = null;
  }

  function deleteNetwork(networkId: string) {
    if (!selectedEdge) return;
    
    edges = edges.map(e => 
      e.id === selectedEdge!.id 
        ? { ...e, networks: e.networks.filter(n => n.id !== networkId) }
        : e
    );
    selectedEdge = edges.find(e => e.id === selectedEdge!.id) || null;
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es', { 
      dateStyle: 'short', 
      timeStyle: 'short' 
    }).format(date);
  }
</script>

<div class="space-y-6">
  <PageHeader 
    title={selectedEdge ? selectedEdge.name : 'Edge Devices'}
    description={selectedEdge ? 'Gestión de redes asociadas' : 'Administra y configura tus dispositivos Edge'}
  />

  {#if selectedEdge}
    <!-- Network View -->
    <div class="space-y-4 animate-fade-in">
      <div class="flex items-center gap-4">
        <!-- Enhanced back button with animations -->
        <button
          onclick={() => selectedEdge = null}
          class="flex items-center gap-2 text-sm text-muted-foreground 
                 transition-all duration-200 hover:text-foreground hover:gap-3
                 group"
        >
          <ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Volver a Edge Devices
        </button>
      </div>

      <!-- Enhanced Edge Info Card -->
      <div class="card-interactive p-6">
        <div class="flex items-start justify-between">
          <div class="flex items-center gap-4">
            <div class="relative">
              <div class="absolute inset-0 rounded-2xl bg-primary/20 blur-lg"></div>
              <div class="relative flex h-14 w-14 items-center justify-center rounded-2xl 
                          bg-gradient-to-br from-primary to-primary/80 shadow-lg shadow-primary/25">
                <Server class="h-7 w-7 text-primary-foreground" />
              </div>
            </div>
            <div>
              <div class="flex items-center gap-3">
                <h3 class="text-xl font-bold text-card-foreground">{selectedEdge.name}</h3>
                <StatusBadge status={selectedEdge.status} />
              </div>
              <div class="mt-2 flex items-center gap-4 text-sm text-muted-foreground">
                <span class="flex items-center gap-1.5">
                  <MapPin class="h-4 w-4" />
                  {selectedEdge.location}
                </span>
                <span class="flex items-center gap-1.5">
                  <Clock class="h-4 w-4" />
                  {formatDate(selectedEdge.lastSeen)}
                </span>
              </div>
            </div>
          </div>
          <button
            onclick={() => showCreateNetworkModal = true}
            class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
          >
            <Plus class="h-4 w-4" />
            Nueva Red
          </button>
        </div>
      </div>

      <!-- Networks Grid -->
      {#if selectedEdge.networks.length === 0}
        <EmptyState
          icon={NetworkIcon}
          title="Sin redes configuradas"
          description="Este Edge no tiene redes asociadas. Crea una nueva red para comenzar."
          actionLabel="Crear Red"
          onAction={() => showCreateNetworkModal = true}
        />
      {:else}
        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {#each selectedEdge.networks as network, i}
            <!-- Enhanced network cards with staggered animations -->
            <div class="stagger-item card-interactive group p-5" style="animation-delay: {i * 0.05}s">
              <div class="flex items-start justify-between">
                <div class="flex h-11 w-11 items-center justify-center rounded-xl 
                            bg-gradient-to-br from-accent/20 to-accent/10
                            transition-transform duration-300 group-hover:scale-110">
                  <Wifi class="h-5 w-5 text-accent" />
                </div>
                <StatusBadge status={network.status} />
              </div>
              
              <h4 class="mt-4 font-semibold text-card-foreground">{network.name}</h4>
              
              <div class="mt-3 space-y-2 text-sm">
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Subnet</span>
                  <span class="font-mono text-card-foreground">{network.subnet}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Gateway</span>
                  <span class="font-mono text-card-foreground">{network.gateway}</span>
                </div>
                <div class="flex justify-between">
                  <span class="text-muted-foreground">Dispositivos</span>
                  <span class="font-semibold text-primary">{network.devices}</span>
                </div>
              </div>

              <div class="mt-4 flex gap-2 opacity-0 transition-all duration-300 
                          translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                <button class="btn-secondary flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2 text-xs">
                  <Settings class="h-3.5 w-3.5" />
                  Configurar
                </button>
                <button 
                  onclick={() => deleteNetwork(network.id)}
                  class="flex items-center justify-center rounded-lg border border-border bg-card 
                         px-3 py-2 text-destructive transition-all duration-200
                         hover:bg-destructive hover:text-destructive-foreground hover:border-destructive
                         hover:shadow-lg hover:shadow-destructive/20"
                >
                  <Trash2 class="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  {:else}
    <!-- Edge List View -->
    <div class="flex items-center justify-between animate-slide-in">
      <div class="flex items-center gap-3">
        <div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5
                    transition-all duration-200 hover:border-primary/30">
          <span class="text-sm text-muted-foreground">Total:</span>
          <span class="font-bold text-card-foreground">{edges.length} edges</span>
        </div>
        <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5">
          <span class="relative flex h-2 w-2">
            <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
            <span class="relative inline-flex h-2 w-2 rounded-full bg-success"></span>
          </span>
          <span class="text-sm font-semibold text-success">{edges.filter(e => e.status === 'online').length} en línea</span>
        </div>
      </div>
      
      <button
        onclick={() => showCreateEdgeModal = true}
        class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
      >
        <Plus class="h-4 w-4" />
        Nuevo Edge
      </button>
    </div>

    {#if edges.length === 0}
      <EmptyState
        icon={Server}
        title="Sin Edge Devices"
        description="No tienes ningún dispositivo Edge configurado. Crea uno para comenzar a gestionar tu infraestructura IoT."
        actionLabel="Crear Edge Device"
        onAction={() => showCreateEdgeModal = true}
      />
    {:else}
      <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {#each edges as edge, i}
          <!-- Enhanced edge cards with staggered animations -->
          <button
            onclick={() => selectedEdge = edge}
            class="stagger-item card-interactive group p-5 text-left"
            style="animation-delay: {i * 0.05}s"
          >
            <div class="flex items-start justify-between">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl 
                          bg-gradient-to-br from-primary/20 to-primary/10
                          transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30">
                <Server class="h-7 w-7 text-primary" />
              </div>
              <StatusBadge status={edge.status} />
            </div>
            
            <h3 class="mt-4 text-lg font-semibold text-card-foreground 
                       transition-colors group-hover:text-primary">{edge.name}</h3>
            
            <div class="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin class="h-4 w-4" />
              {edge.location}
            </div>
            
            <div class="mt-4 flex items-center justify-between border-t border-border pt-4">
              <div class="flex items-center gap-1.5 text-sm text-muted-foreground">
                <NetworkIcon class="h-4 w-4" />
                <span>{edge.networks.length} redes</span>
              </div>
              <span class="text-xs text-muted-foreground">
                {formatDate(edge.lastSeen)}
              </span>
            </div>
          </button>
        {/each}
      </div>
    {/if}
  {/if}
</div>

<!-- Create Edge Modal -->
<Modal open={showCreateEdgeModal} title="Nuevo Edge Device" onClose={() => showCreateEdgeModal = false}>
  <form onsubmit={(e) => { e.preventDefault(); createEdge(); }} class="space-y-5">
    <div class="space-y-2">
      <label for="edge-name" class="block text-sm font-medium text-card-foreground">
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
      <label for="edge-location" class="block text-sm font-medium text-card-foreground">
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
        onclick={() => showCreateEdgeModal = false}
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

<!-- Create Network Modal -->
<Modal open={showCreateNetworkModal} title="Nueva Red" onClose={() => showCreateNetworkModal = false}>
  <form onsubmit={(e) => { e.preventDefault(); createNetwork(); }} class="space-y-5">
    <div class="space-y-2">
      <label for="network-name" class="block text-sm font-medium text-card-foreground">
        Nombre de la Red
      </label>
      <input
        id="network-name"
        type="text"
        bind:value={newNetworkName}
        placeholder="Red Industrial..."
        class="input-field"
        required
      />
    </div>
    
    <div class="space-y-2">
      <label for="network-subnet" class="block text-sm font-medium text-card-foreground">
        Subnet (CIDR)
      </label>
      <input
        id="network-subnet"
        type="text"
        bind:value={newNetworkSubnet}
        placeholder="192.168.1.0/24"
        class="input-field font-mono"
        required
      />
    </div>
    
    <div class="space-y-2">
      <label for="network-gateway" class="block text-sm font-medium text-card-foreground">
        Gateway
      </label>
      <input
        id="network-gateway"
        type="text"
        bind:value={newNetworkGateway}
        placeholder="192.168.1.1"
        class="input-field font-mono"
      />
    </div>
    
    <div class="flex gap-3 pt-2">
      <button
        type="button"
        onclick={() => showCreateNetworkModal = false}
        class="btn-secondary flex-1 rounded-xl py-3 text-sm"
      >
        Cancelar
      </button>
      <button type="submit" class="btn-primary flex-1 rounded-xl py-3 text-sm">
        Crear Red
      </button>
    </div>
  </form>
</Modal>
