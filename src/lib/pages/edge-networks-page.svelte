<script lang="ts">
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
    import UploadCloud from "lucide-svelte/icons/upload-cloud";
    import type { Network } from "$lib/types";

    let edgeId = $derived($pageParams.edgeId);
    let currentEdge = $derived($edges.find((e) => e.id_edge === edgeId));

    // Create Modal states
    let showCreateNetworkModal = $state(false);
    let newNetworkId = $state("");
    let newNetworkDesc = $state("");
    let newNetworkLoc = $state("");

    // Edit Modal states
    let showEditNetworkModal = $state(false);
    let editForm = $state<Partial<Network>>({});
    let editingOldId = $state("");

    // Firmware Update states
    let showFirmwareModal = $state(false);
    let firmwareTargets = $state<Network | null>(null);

    // Delete Network Modal
    let showDeleteNetworkModal = $state(false);
    let targetDeleteNetwork = $state<Network | null>(null);

    function goBack() {
        navigateTo("edge");
    }

    function createNetwork() {
        if (!currentEdge || !newNetworkId.trim() || !newNetworkDesc.trim() || !newNetworkLoc.trim())
            return;

        const newNetwork: Network = {
            id: newNetworkId,
            description: newNetworkDesc,
            ubication: newNetworkLoc,
            edgeId: currentEdge.id_edge,
            status: "active",
            hubs: [],
        };

        edges.addNetwork(currentEdge.id_edge, newNetwork);

        newNetworkId = "";
        newNetworkDesc = "";
        newNetworkLoc = "";
        showCreateNetworkModal = false;
    }

    function openEditModal(network: Network) {
        editingOldId = network.id;
        editForm = { ...network };
        showEditNetworkModal = true;
    }

    function saveNetwork() {
        if (!currentEdge || !editForm.id) return;
        edges.updateNetwork(currentEdge.id_edge, editingOldId, editForm as Network);
        showEditNetworkModal = false;
    }

    function deleteNetworkPrompt(network: Network) {
        targetDeleteNetwork = network;
        showDeleteNetworkModal = true;
    }

    function confirmDeleteNetwork() {
        if (targetDeleteNetwork) {
            edges.removeNetwork(edgeId, targetDeleteNetwork.id);
            showDeleteNetworkModal = false;
            targetDeleteNetwork = null;
        }
    }

    function triggerFirmwareUpdate() {
        // En una app real, aquí se emitiría un evento al backend o Svelte action.
        showFirmwareModal = false;
        firmwareTargets = null;
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
                <ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver a Edge Devices
            </button>
        </div>

        <PageHeader
            title={`Redes de Edge`}
            description={`Gestiona las redes asociadas al dispositivo ${currentEdge.name}`}
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
            <div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {#each currentEdge.networks as network}
                    <div class="card-interactive group p-5 flex flex-col h-full">
                        <div class="flex items-start justify-between">
                            <div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">
                                <Wifi class="h-5 w-5 text-accent" />
                            </div>
                            <StatusBadge status={network.status} />
                        </div>

                        <div class="flex-1">
                            <h4 class="mt-4 font-semibold text-lg text-card-foreground">
                                {network.id}
                            </h4>
                            <p class="text-xs text-muted-foreground mt-1 line-clamp-2">
                                {network.description}
                            </p>

                            <div class="mt-4 space-y-2 text-sm bg-muted/40 p-3 rounded-lg">
                                <div class="flex justify-between items-center border-b border-border/50 pb-1.5">
                                    <span class="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Ubicación</span>
                                    <span class="font-medium text-card-foreground">{network.ubication}</span>
                                </div>
                                <div class="flex justify-between items-center pt-1">
                                    <span class="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Dispositivos</span>
                                    <div class="flex items-center justify-center bg-primary/10 text-primary font-bold px-2.5 py-0.5 rounded-full">
                                        {network.hubs?.length || 0}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 border-t border-border pt-4">
                            <button
                                onclick={() => navigateTo('network-hubs', { edgeId: currentEdge.id_edge, networkId: network.id })}
                                class="w-full btn-primary flex flex-1 items-center justify-between gap-1.5 rounded-lg py-2.5 px-4 text-xs font-semibold mb-2"
                            >
                                <span>Ver Hubs</span>
                                <ArrowRight class="h-4 w-4" />
                            </button>
                            <button
                                onclick={() => { firmwareTargets = network; showFirmwareModal = true; }}
                                class="w-full flex items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-xs mb-2 transition-all duration-200 ease-out active:scale-[0.98] font-medium border bg-blue-950/30 hover:bg-blue-900/50 text-blue-400 border-blue-800 shadow-sm hover:shadow-md"
                            >
                                <UploadCloud class="h-4 w-4" />
                                Actualizar Firmware
                            </button>
                            <div class="flex gap-2">
                                <button
                                    onclick={() => openEditModal(network)}
                                    class="btn-secondary flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs"
                                >
                                    <Settings class="h-4 w-4" />
                                    Configurar
                                </button>
                                <button
                                    onclick={() => deleteNetworkPrompt(network)}
                                    class="flex flex-none items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-destructive transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20"
                                >
                                    <Trash2 class="h-4 w-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    {:else}
        <div class="flex flex-col items-center justify-center h-64 text-muted-foreground">
            <p>Dispositivo Edge no encontrado o no seleccionado.</p>
            <button onclick={goBack} class="mt-4 btn-secondary rounded-lg px-4 py-2">Volver</button>
        </div>
    {/if}
</div>

<!-- Create Network Modal -->
<Modal
    open={showCreateNetworkModal}
    title="Añadir Nueva Red"
    onClose={() => (showCreateNetworkModal = false)}
>
    <form onsubmit={(e) => { e.preventDefault(); createNetwork(); }} class="space-y-4 px-1">
        <div class="space-y-1.5">
            <label for="new-network-id" class="block text-sm font-medium text-card-foreground">ID de la Red</label>
            <input id="new-network-id" type="text" bind:value={newNetworkId} class="input-field font-mono" required placeholder="RED-001" />
        </div>

        <div class="space-y-1.5">
            <label for="new-network-desc" class="block text-sm font-medium text-card-foreground">Descripción</label>
            <textarea id="new-network-desc" bind:value={newNetworkDesc} class="input-field min-h-[80px]" required placeholder="Red de sensores de planta..."></textarea>
        </div>

        <div class="space-y-1.5">
            <label for="new-network-loc" class="block text-sm font-medium text-card-foreground">Ubicación</label>
            <input id="new-network-loc" type="text" bind:value={newNetworkLoc} class="input-field" required placeholder="Planta Baja" />
        </div>

        <div class="flex gap-3 pt-6 pb-2">
            <button type="button" onclick={() => (showCreateNetworkModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">
                Cancelar
            </button>
            <button type="submit" class="btn-primary flex-1 rounded-xl py-3 text-sm font-medium">
                Crear Red
            </button>
        </div>
    </form>
</Modal>

<!-- Edit Network Modal -->
<Modal
    open={showEditNetworkModal}
    title="Configurar Red"
    onClose={() => (showEditNetworkModal = false)}
>
    <form onsubmit={(e) => { e.preventDefault(); saveNetwork(); }} class="space-y-4 px-1">
        <div class="space-y-1.5">
            <label for="edit-network-id" class="block text-sm font-medium text-card-foreground">ID de la Red</label>
            <input id="edit-network-id" type="text" bind:value={editForm.id} class="input-field font-mono" required placeholder="RED-001" />
        </div>

        <div class="space-y-1.5">
            <label for="edit-network-desc" class="block text-sm font-medium text-card-foreground">Descripción</label>
            <textarea id="edit-network-desc" bind:value={editForm.description} class="input-field min-h-[80px]" required placeholder="Red de sensores de planta..."></textarea>
        </div>

        <div class="space-y-1.5">
            <label for="edit-network-loc" class="block text-sm font-medium text-card-foreground">Ubicación</label>
            <input id="edit-network-loc" type="text" bind:value={editForm.ubication} class="input-field" required placeholder="Planta Baja" />
        </div>

        <div class="flex gap-3 pt-6 pb-2">
            <button type="button" onclick={() => (showEditNetworkModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">
                Cancelar
            </button>
            <button type="submit" class="btn-primary flex-1 rounded-xl py-3 text-sm font-medium">
                Guardar
            </button>
        </div>
    </form>
</Modal>

<!-- Firmware Update Modal -->
<Modal
    open={showFirmwareModal}
    title="Actualización de Firmware"
    onClose={() => (showFirmwareModal = false)}
>
    {#if firmwareTargets}
    <div class="space-y-5">
        <div class="flex flex-col items-center justify-center p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-xl text-center">
            <div class="bg-blue-600 dark:bg-blue-500 text-white p-3 rounded-full mb-3">
                <UploadCloud class="h-8 w-8" />
            </div>
            <p class="text-sm font-medium text-blue-700 dark:text-blue-400">Actualización OTA Remota</p>
        </div>
        
        <p class="text-sm text-card-foreground text-center">
            ¿Quiere actualizar el firmware de los dispositivos Hub de la red <strong class="font-bold underline decoration-blue-500 dark:decoration-blue-400 underline-offset-2">{firmwareTargets.id}</strong>?
        </p>

        <p class="text-xs text-muted-foreground text-center bg-muted/50 p-3 rounded-lg border border-border">
            Esta acción enviará la instrucción a {firmwareTargets.hubs?.length || 0} dispositivo(s). Los equipos se reiniciarán automáticamente si la actualización es exitosa.
        </p>

        <div class="flex gap-3 pt-4">
            <button type="button" onclick={() => (showFirmwareModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">
                Cancelar
            </button>
            <button type="button" onclick={triggerFirmwareUpdate} class="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white shadow-md hover:shadow-lg transition-all duration-200 ease-out active:scale-[0.98] flex-1 rounded-xl py-3 text-sm font-medium">
                Confirmar
            </button>
        </div>
    </div>
    {/if}
</Modal>

<!-- Delete Network Protection Modal -->
<Modal
  open={showDeleteNetworkModal}
  title="Protección de Borrado"
  onClose={() => (showDeleteNetworkModal = false)}
>
  {#if targetDeleteNetwork}
    <div class="space-y-4 pt-2">
        <div class="flex flex-col items-center justify-center p-6 bg-destructive/10 border border-destructive/20 rounded-xl text-center">
            <div class="bg-destructive text-destructive-foreground p-3 rounded-full mb-3">
                <Trash2 class="h-8 w-8" />
            </div>
            <p class="text-sm font-bold text-destructive">Eliminación Destructiva</p>
        </div>

        <p class="text-card-foreground text-center text-sm px-2">
            ¿Estas seguro que queres eliminar la red <strong class="font-bold underline decoration-destructive underline-offset-2">{targetDeleteNetwork.id}</strong>?
        </p>

        <p class="text-xs text-muted-foreground text-center bg-muted/50 p-3 rounded-lg border border-border mx-2">
            Perderás automáticamente todos sus Hubs anexados de modo irreversible.
        </p>

        <div class="flex gap-3 pt-4">
            <button type="button" onclick={() => (showDeleteNetworkModal = false)} class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">
                Cancelar
            </button>
            <button type="button" onclick={confirmDeleteNetwork} class="bg-destructive hover:bg-destructive/90 text-white shadow-md hover:shadow-lg transition-all active:scale-[0.98] flex-1 rounded-xl py-3 text-sm font-medium">
                Confirmar
            </button>
        </div>
    </div>
  {/if}
</Modal>
