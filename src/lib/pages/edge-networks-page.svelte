<script lang="ts">
    import { onMount } from "svelte";
    import { edges } from "$lib/stores/edges";
    import { pageParams, navigateTo } from "$lib/stores/navigation";
    import PageHeader from "$lib/components/page-header.svelte";
    import StatusBadge from "$lib/components/status-badge.svelte";
    import EmptyState from "$lib/components/empty-state.svelte";
    import Modal from "$lib/components/modal.svelte";
    import Wifi from "lucide-svelte/icons/wifi";
    import ArrowLeft from "lucide-svelte/icons/arrow-left";
    import Settings from "lucide-svelte/icons/settings";
    import Trash2 from "lucide-svelte/icons/trash-2";
    import Plus from "lucide-svelte/icons/plus";
    import ArrowRight from "lucide-svelte/icons/arrow-right";
    import type { Network, Edge } from "$lib/types";

    let edgeId = $state<string>("");
    let currentEdge = $state<Edge | undefined>(undefined);

    // Modal states
    let showCreateNetworkModal = $state(false);
    let newNetworkName = $state("");
    let newNetworkSubnet = $state("");
    let newNetworkGateway = $state("");

    // Subscribe to params and store
    $effect(() => {
        edgeId = $pageParams.edgeId;
        if (edgeId) {
            currentEdge = $edges.find((e) => e.id === edgeId);
        }
    });

    function goBack() {
        navigateTo("edge");
    }

    function createNetwork() {
        if (!currentEdge || !newNetworkName.trim() || !newNetworkSubnet.trim())
            return;

        const newNetwork: Network = {
            id: crypto.randomUUID(),
            name: newNetworkName,
            edgeId: currentEdge.id,
            subnet: newNetworkSubnet,
            gateway: newNetworkGateway || "Auto",
            status: "active",
            devices: 0,
        };

        edges.addNetwork(currentEdge.id, newNetwork);

        newNetworkName = "";
        newNetworkSubnet = "";
        newNetworkGateway = "";
        showCreateNetworkModal = false;
    }

    function deleteNetwork(networkId: string) {
        if (confirm("¿Estás seguro de eliminar esta red?")) {
            edges.removeNetwork(edgeId, networkId);
        }
    }
</script>

<div class="space-y-6">
    {#if currentEdge}
        <div class="flex items-center gap-4">
            <button
                onclick={goBack}
                class="flex items-center gap-2 text-sm text-muted-foreground
                 transition-all duration-200 hover:text-foreground hover:gap-3
                 group"
            >
                <ArrowLeft
                    class="h-4 w-4 transition-transform group-hover:-translate-x-1"
                />
                Volver a Edge Devices
            </button>
        </div>

        <PageHeader
            title={`Redes: ${currentEdge.name}`}
            description="Gestiona las redes asociadas a este dispositivo Edge"
        />

        <div class="card-interactive p-6 animate-fade-in">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-xl font-bold text-card-foreground">
                        Redes Activas
                    </h3>
                    <p class="text-sm text-muted-foreground mt-1">
                        {currentEdge.networks.length} redes configuradas
                    </p>
                </div>
                <button
                    onclick={() => (showCreateNetworkModal = true)}
                    class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
                >
                    <Plus class="h-4 w-4" />
                    Nueva Red
                </button>
            </div>
        </div>

        {#if currentEdge.networks.length === 0}
            <EmptyState
                icon={Wifi}
                title="Sin redes configuradas"
                description="Este Edge no tiene redes asociadas. Crea una nueva red para comenzar."
                actionLabel="Crear Red"
                onAction={() => (showCreateNetworkModal = true)}
            />
        {:else}
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {#each currentEdge.networks as network}
                    <div class="card-interactive group p-5">
                        <div class="flex items-start justify-between">
                            <div
                                class="flex h-11 w-11 items-center justify-center rounded-xl
                            bg-gradient-to-br from-accent/20 to-accent/10"
                            >
                                <Wifi class="h-5 w-5 text-accent" />
                            </div>
                            <StatusBadge status={network.status} />
                        </div>

                        <h4 class="mt-4 font-semibold text-card-foreground">
                            {network.name}
                        </h4>

                        <div class="mt-3 space-y-2 text-sm">
                            <div class="flex justify-between">
                                <span class="text-muted-foreground">Subnet</span
                                >
                                <span class="font-mono text-card-foreground"
                                    >{network.subnet}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span class="text-muted-foreground"
                                    >Gateway</span
                                >
                                <span class="font-mono text-card-foreground"
                                    >{network.gateway}</span
                                >
                            </div>
                            <div class="flex justify-between">
                                <span class="text-muted-foreground"
                                    >Dispositivos</span
                                >
                                <span class="font-semibold text-primary"
                                    >{network.devices}</span
                                >
                            </div>
                        </div>

                        <div class="mt-4 flex gap-2">
                            <button
                                onclick={() => navigateTo('network-hubs', { edgeId: currentEdge.id, networkId: network.id })}
                                class="btn-primary flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs flex-1"
                            >
                                Ver Hubs
                                <ArrowRight class="h-3.5 w-3.5" />
                            </button>
                            <button
                                class="btn-secondary flex items-center justify-center gap-1.5 rounded-lg py-2 px-3 text-xs"
                            >
                                <Settings class="h-3.5 w-3.5" />
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
    {:else}
        <div
            class="flex flex-col items-center justify-center h-64 text-muted-foreground"
        >
            <p>Dispositivo no encontrado o no seleccionado.</p>
            <button
                onclick={goBack}
                class="mt-4 btn-secondary rounded-lg px-4 py-2">Volver</button
            >
        </div>
    {/if}
</div>

<!-- Create Network Modal -->
<Modal
    open={showCreateNetworkModal}
    title="Nueva Red"
    onClose={() => (showCreateNetworkModal = false)}
>
    <form
        onsubmit={(e) => {
            e.preventDefault();
            createNetwork();
        }}
        class="space-y-5"
    >
        <div class="space-y-2">
            <label
                for="network-name"
                class="block text-sm font-medium text-card-foreground"
            >
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
            <label
                for="network-subnet"
                class="block text-sm font-medium text-card-foreground"
            >
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
            <label
                for="network-gateway"
                class="block text-sm font-medium text-card-foreground"
            >
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
                onclick={() => (showCreateNetworkModal = false)}
                class="btn-secondary flex-1 rounded-xl py-3 text-sm"
            >
                Cancelar
            </button>
            <button
                type="submit"
                class="btn-primary flex-1 rounded-xl py-3 text-sm"
            >
                Crear Red
            </button>
        </div>
    </form>
</Modal>
