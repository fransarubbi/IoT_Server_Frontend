import { writable } from "svelte/store";
import type { Edge, Hub, Network } from "$lib/types";

// Initial mock data
const initialEdges: Edge[] = [
    {
        id_edge: '1',
        name: 'Edge Gateway Alpha',
        status: 'online',
        ubication: 'Datacenter Principal',
        host_server: '192.168.1.100',
        host_port: '8080',
        cn: 'edge-alpha.local',
        host_local: '127.0.0.1',
        db_path: '/var/lib/iot/data.db',
        buffer_size: 20,
        rust_log: 'Info',
        max_attempts: 3,
        frequency_phase: 5,
        frequency_safe_mode: 20,
        timeout_handshake: 30,
        timeout_phase: 60,
        timeout_safe_mode: 150,
        time_between_heartbeats_balance_mode: 20,
        time_between_heartbeats_normal: 45,
        time_between_heartbeats_safe_mode: 60,
        lastSeen: new Date(),
        networks: [
            { 
                id: 'RED-IND-01', description: 'Red de sensores industriales de temperatura y humedad en área caliente', ubication: 'Planta Principal - Sector A', edgeId: '1', status: 'active', 
                hubs: [
                    { id: 'H-XW9R', network: 'RED-IND-01', device_name: 'Sensor Cintas', wifi_ssid: 'IoT_Industrial_Net', wifi_password: 'pass_industrial', mqtt_uri: 'mqtt://broker.hivemq.com:1883', sample: '30', energy_mode: 'Bajo consumo' },
                    { id: 'H-Q1L2', network: 'RED-IND-01', device_name: 'Medidor Nivel Tanque 3', wifi_ssid: 'IoT_Industrial_Net', wifi_password: 'pass_industrial', mqtt_uri: 'mqtt://broker.hivemq.com:1883', sample: '15', energy_mode: 'Balanceado' }
                ] 
            },
            { 
                id: 'RED-PRESION-02', description: 'Monitoreo de válvulas de presión y control de fluidos', ubication: 'Planta Principal - Anexo Tuberías', edgeId: '1', status: 'active', 
                hubs: [
                    { id: 'H-Z8K0', network: 'RED-PRESION-02', device_name: 'Válvula Reguladora P09', wifi_ssid: 'SensorNet', wifi_password: 'sensor_pass', mqtt_uri: 'mqtt://broker.hivemq.com:1883', sample: '5', energy_mode: 'Performance' }
                ] 
            },
        ]
    },
    {
        id_edge: '2',
        name: 'Edge Gateway Beta',
        status: 'warning',
        ubication: 'Planta Norte',
        host_server: '10.0.0.50',
        host_port: '9000',
        cn: 'edge-beta.remote',
        host_local: '127.0.0.1',
        db_path: '/mnt/data/edge.db',
        buffer_size: 10,
        rust_log: 'Debug',
        max_attempts: 5,
        frequency_phase: 2,
        frequency_safe_mode: 15,
        timeout_handshake: 45,
        timeout_phase: 90,
        timeout_safe_mode: 240,
        time_between_heartbeats_balance_mode: 15,
        time_between_heartbeats_normal: 30,
        time_between_heartbeats_safe_mode: 80,
        lastSeen: new Date(Date.now() - 300000),
        networks: [
            { 
                id: 'RED-MANT', description: 'Sensores de diagnóstico de equipos inactivos', ubication: 'Almacén 2', edgeId: '2', status: 'active', hubs: [] 
            },
        ]
    },
    {
        id_edge: '3',
        name: 'Edge Gateway Gamma',
        status: 'offline',
        ubication: 'Sucursal Sur',
        host_server: '172.16.0.5',
        host_port: '8080',
        cn: 'gamma-node.local',
        host_local: '0.0.0.0',
        db_path: '/opt/iot/storage.db',
        buffer_size: 50,
        rust_log: 'Error',
        max_attempts: 10,
        frequency_phase: 10,
        frequency_safe_mode: 40,
        timeout_handshake: 60,
        timeout_phase: 120,
        timeout_safe_mode: 300,
        time_between_heartbeats_balance_mode: 40,
        time_between_heartbeats_normal: 60,
        time_between_heartbeats_safe_mode: 80,
        lastSeen: new Date(Date.now() - 86400000),
        networks: []
    },
];

function createEdgesStore() {
    const { subscribe, update, set } = writable<Edge[]>(initialEdges);

    return {
        subscribe,
        add: (edge: Edge) => update(n => [...n, edge]),
        remove: (id_edge: string) => update(n => n.filter(e => e.id_edge !== id_edge)),
        update: (edge: Edge) => update(n => n.map(e => e.id_edge === edge.id_edge ? edge : e)),
        // specific network helpers to avoid complex logic in components
        addNetwork: (edgeId: string, network: Network) => update(edges =>
            edges.map(e => e.id_edge === edgeId ? { ...e, networks: [...e.networks, network] } : e)
        ),
        updateNetwork: (edgeId: string, oldNetworkId: string, newNetwork: Network) => update(edges =>
            edges.map(e => e.id_edge === edgeId ? { ...e, networks: e.networks.map(n => n.id === oldNetworkId ? newNetwork : n) } : e)
        ),
        removeNetwork: (edgeId: string, networkId: string) => update(edges =>
            edges.map(e => e.id_edge === edgeId ? { ...e, networks: e.networks.filter((n: Network) => n.id !== networkId) } : e)
        ),
        addHub: (edgeId: string, networkId: string, hub: Hub) => update(edges =>
            edges.map(e => e.id_edge === edgeId ? { ...e, networks: e.networks.map((n: Network) => n.id === networkId ? { ...n, hubs: [...n.hubs, hub] } : n) } : e)
        ),
        removeHub: (edgeId: string, networkId: string, hubId: string) => update(edges =>
            edges.map(e => e.id_edge === edgeId ? { ...e, networks: e.networks.map((n: Network) => n.id === networkId ? { ...n, hubs: n.hubs.filter((h: Hub) => h.id !== hubId) } : n) } : e)
        ),
        updateHub: (edgeId: string, networkId: string, hub: Hub) => update(edges =>
            edges.map(e => e.id_edge === edgeId ? { ...e, networks: e.networks.map((n: Network) => n.id === networkId ? { ...n, hubs: n.hubs.map((h: Hub) => h.id === hub.id ? hub : h) } : n) } : e)
        ),
        reset: () => set(initialEdges)
    };
}

export const edges = createEdgesStore();
