<script lang="ts">
    import { onMount, tick } from "svelte";
    import { edges } from "../stores/edges";
    import { pageParams, navigateTo } from "../stores/navigation";
    import PageHeader from "../components/page-header.svelte";
    import StatusBadge from "../components/status-badge.svelte";
    import EmptyState from "../components/empty-state.svelte";
    import Modal from "../components/modal.svelte";
    
    // Icons
    import Cpu from "lucide-svelte/icons/cpu";
    import Eye from "lucide-svelte/icons/eye";
    import Settings from "lucide-svelte/icons/settings";
    import ArrowLeft from "lucide-svelte/icons/arrow-left";
    import Plus from "lucide-svelte/icons/plus";
    import Trash2 from "lucide-svelte/icons/trash-2";
    
    import type { Edge, Network, Hub } from "../types";

    let edgeId = $state<string>("");
    let networkId = $state<string>("");
    let currentEdge = $state<Edge | undefined>(undefined);
    let currentNetwork = $state<Network | undefined>(undefined);

    // Initial reactiveness based on route params
    $effect(() => {
        edgeId = $pageParams.edgeId;
        networkId = $pageParams.networkId;
        if (edgeId) {
            currentEdge = $edges.find((e) => e.id === edgeId);
            if (currentEdge && networkId) {
                currentNetwork = currentEdge.networks.find((n) => n.id === networkId);
                // Si hubs no existe aún en el store (compatibilidad por el mock the initial data editado)
                if (currentNetwork && !currentNetwork.hubs) {
                     currentNetwork.hubs = [];
                }
            }
        }
    });

    function goBack() {
        navigateTo("edge-networks", { edgeId });
    }

    // Modal Info
    let showInfoModal = $state(false);
    let selectedHub = $state<Hub | null>(null);

    function viewHubInfo(hub: Hub) {
        selectedHub = hub;
        showInfoModal = true;
    }

    // Modal Create / Edit
    let showEditModal = $state(false);
    let isEditing = $state(false);
    
    let formHub = $state<Partial<Hub>>({
        id: "",
        network: "",
        wifi_ssid: "",
        wifi_password: "",
        mqtt_uri: "",
        device_name: "",
        sample: "",
        energy_mode: "Normal"
    });

    function openCreateModal() {
        isEditing = false;
        formHub = {
            id: crypto.randomUUID().split("-")[0].toUpperCase(),
            network: currentNetwork?.name || "",
            wifi_ssid: "",
            wifi_password: "",
            mqtt_uri: "mqtt://broker.hivemq.com",
            device_name: "Nuevo Hub",
            sample: "1000",
            energy_mode: "Normal"
        };
        showEditModal = true;
    }

    function openEditModal(hub: Hub) {
        isEditing = true;
        // Deep copy
        formHub = { ...hub };
        showEditModal = true;
    }

    function saveHub() {
        if (!currentNetwork) return;
        
        if (isEditing) {
            edges.updateHub(edgeId, networkId, formHub as Hub);
        } else {
             // Create as full object Hub
             const newHub: Hub = {
                id: formHub.id as string,
                network: formHub.network as string,
                wifi_ssid: formHub.wifi_ssid as string,
                wifi_password: formHub.wifi_password as string,
                mqtt_uri: formHub.mqtt_uri as string,
                device_name: formHub.device_name as string,
                sample: formHub.sample as string,
                energy_mode: formHub.energy_mode as string
             };
             edges.addHub(edgeId, networkId, newHub);
        }

        showEditModal = false;
        isEditing = false;
    }

    function deleteHub(hubId: string) {
        if (confirm("¿Estás seguro de eliminar este Hub?")) {
            edges.removeHub(edgeId, networkId, hubId);
        }
    }
</script>

<div class="space-y-6">
    {#if currentEdge && currentNetwork}
        <div class="flex items-center gap-4">
            <button
                onclick={goBack}
                class="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground hover:gap-3 group"
            >
                <ArrowLeft class="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Volver a Redes ({currentEdge.name})
            </button>
        </div>

        <PageHeader
            title={`Hubs de la red: ${currentNetwork.name}`}
            description="Gestiona y monitorea los dispositivos Hub conectados a esta red"
        />

        <div class="card-interactive p-6 animate-fade-in">
            <div class="flex items-center justify-between">
                <div>
                    <h3 class="text-xl font-bold text-card-foreground">
                        Hubs Activos
                    </h3>
                    <p class="text-sm text-muted-foreground mt-1">
                        {currentNetwork.hubs?.length || 0} dispositivos encontrados
                    </p>
                </div>
                <button
                    onclick={openCreateModal}
                    class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
                >
                    <Plus class="h-4 w-4" />
                    Añadir Hub
                </button>
            </div>
        </div>

        {#if !currentNetwork.hubs || currentNetwork.hubs.length === 0}
            <EmptyState
                icon={Cpu}
                title="Sin dispositivos Hub"
                description="Esta red aún no tiene Hubs asignados. Añade un nuevo dispositivo para empezar a recolectar datos."
                actionLabel="Añadir Hub"
                onAction={openCreateModal}
            />
        {:else}
            <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {#each currentNetwork.hubs as hub}
                    <div class="card-interactive group p-5 flex flex-col h-full">
                        <div class="flex items-start justify-between">
                            <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">
                                <Cpu class="h-6 w-6 text-primary" />
                            </div>
                            <StatusBadge status="active" />
                        </div>

                        <div class="mt-4 flex-1">
                            <h4 class="text-2xl font-bold tracking-tight text-card-foreground">
                                {hub.id}
                            </h4>
                            <div class="mt-2 space-y-1">
                                <p class="text-xs font-semibold uppercase text-muted-foreground tracking-wider">{hub.network}</p>
                                <p class="text-sm text-card-foreground/80">{hub.device_name}</p>
                                <div class="inline-block mt-2 px-2.5 py-0.5 rounded-full bg-accent/10 border border-accent/20">
                                    <span class="text-[10px] font-medium text-accent">Modo Energía: {hub.energy_mode}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Action Buttons at bottom -->
                        <div class="mt-6 flex gap-2 border-t border-border pt-4">
                            <button
                                onclick={() => viewHubInfo(hub)}
                                class="btn-secondary flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-medium"
                                aria-label="Ver información del Hub"
                            >
                                <Eye class="h-4 w-4" />
                                Ver Info
                            </button>
                            <button
                                onclick={() => openEditModal(hub)}
                                class="btn-secondary flex items-center justify-center rounded-lg p-2.5 border border-border"
                                aria-label="Configurar Hub"
                            >
                                <Settings class="h-4 w-4" />
                            </button>
                            <button
                                onclick={() => deleteHub(hub.id)}
                                class="flex items-center justify-center rounded-lg border border-border bg-card p-2.5 text-destructive transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20"
                                aria-label="Eliminar Hub"
                            >
                                <Trash2 class="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                {/each}
            </div>
        {/if}
    {:else}
         <div class="flex flex-col items-center justify-center h-64 text-muted-foreground">
            <p>Red o Edge no encontrados.</p>
            <button onclick={() => navigateTo('edge')} class="mt-4 btn-secondary rounded-lg px-4 py-2">Volver a Inicio</button>
        </div>
    {/if}
</div>

<!-- Info Modal -->
<Modal
    open={showInfoModal}
    title="Información del Hub"
    onClose={() => (showInfoModal = false)}
>
    {#if selectedHub}
        <div class="space-y-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">ID</span>
                    <span class="text-sm font-medium">{selectedHub.id}</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Red</span>
                    <span class="text-sm font-medium">{selectedHub.network}</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Nombre</span>
                    <span class="text-sm font-medium">{selectedHub.device_name}</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">WIFI SSID</span>
                    <span class="text-sm font-medium">{selectedHub.wifi_ssid}</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">WIFI Contraseña</span>
                     <!-- Hidden or showing bullets usually but since it's an info dialog about a mock hub, we can reveal or mask -->
                    <span class="text-sm font-medium blur-sm hover:blur-none transition-all cursor-pointer select-all select-all font-mono">{selectedHub.wifi_password || '********'}</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">MQTT URI</span>
                    <span class="text-sm font-medium font-mono truncate" title={selectedHub.mqtt_uri}>{selectedHub.mqtt_uri}</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Sample (ms)</span>
                    <span class="text-sm font-medium">{selectedHub.sample}</span>
                </div>
                <div class="bg-card border border-border rounded-lg p-3">
                    <span class="block text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-1">Modo Energía</span>
                    <span class="text-sm font-medium">{selectedHub.energy_mode}</span>
                </div>
            </div>
            
            <div class="pt-4 flex justify-end">
                 <button onclick={() => (showInfoModal = false)} class="btn-primary px-5 py-2.5 rounded-xl text-sm">Cerrar</button>
            </div>
        </div>
    {/if}
</Modal>

<!-- Edit/Create Modal -->
<Modal
    open={showEditModal}
    title={isEditing ? "Configurar Hub" : "Añadir Nuevo Hub"}
    onClose={() => (showEditModal = false)}
>
    <!-- Use preventDefault properly -->
    <form onsubmit={(e) => { e.preventDefault(); saveHub(); }} class="space-y-4 max-h-[70vh] overflow-y-auto px-1">
        <div class="space-y-1.5">
            <label for="hub-id" class="block text-sm font-medium text-card-foreground">ID del Hub</label>
            <!-- ID usually cannot change if already created, but requirement says "modificar" - we will allow it or keep it static. Better to allow modify if the business logic allows. -->
            <input id="hub-id" type="text" bind:value={formHub.id} class="input-field font-mono" required placeholder="H-0001" />
        </div>

        <div class="space-y-1.5">
            <label for="hub-network" class="block text-sm font-medium text-card-foreground">Red (Nombre)</label>
            <input id="hub-network" type="text" bind:value={formHub.network} class="input-field" required placeholder="Red Industrial Beta..." />
        </div>

        <div class="space-y-1.5">
            <label for="hub-name" class="block text-sm font-medium text-card-foreground">Nombre (Device Name)</label>
            <input id="hub-name" type="text" bind:value={formHub.device_name} class="input-field" required placeholder="Sensor Temperatura Planta 1" />
        </div>
        
        <div class="grid grid-cols-2 gap-3">
             <div class="space-y-1.5">
                <label for="hub-ssid" class="block text-sm font-medium text-card-foreground">WIFI SSID</label>
                <input id="hub-ssid" type="text" bind:value={formHub.wifi_ssid} class="input-field" required placeholder="IoT_Network_5G" />
            </div>
            <div class="space-y-1.5">
                <label for="hub-password" class="block text-sm font-medium text-card-foreground">WIFI Contraseña</label>
                <input id="hub-password" type="text" bind:value={formHub.wifi_password} class="input-field" required placeholder="***********" />
            </div>
        </div>

        <div class="space-y-1.5">
            <label for="hub-mqtt" class="block text-sm font-medium text-card-foreground">MQTT URI</label>
            <input id="hub-mqtt" type="text" bind:value={formHub.mqtt_uri} class="input-field font-mono" required placeholder="mqtt://broker.hivemq.com" />
        </div>

        <div class="grid grid-cols-2 gap-3">
            <div class="space-y-1.5">
                <label for="hub-sample" class="block text-sm font-medium text-card-foreground">Sample (ms)</label>
                <input id="hub-sample" type="number" bind:value={formHub.sample} class="input-field" required placeholder="1000" />
            </div>
            <div class="space-y-1.5">
                <label for="hub-energy" class="block text-sm font-medium text-card-foreground">Modo Energía</label>
                <select id="hub-energy" bind:value={formHub.energy_mode} class="input-field">
                    <option value="Normal">Normal</option>
                    <option value="Ahorro Básico">Ahorro Básico</option>
                    <option value="Ultra Ahorro">Ultra Ahorro (Deep Sleep)</option>
                    <option value="Alto Rendimiento">Alto Rendimiento</option>
                </select>
            </div>
        </div>
        
        <div class="flex gap-3 pt-6 pb-2">
            <button
                type="button"
                onclick={() => (showEditModal = false)}
                class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium"
            >
                Cancelar
            </button>
            <button
                type="submit"
                class="btn-primary flex-1 rounded-xl py-3 text-sm font-medium"
            >
                Guardar
            </button>
        </div>
    </form>
</Modal>
