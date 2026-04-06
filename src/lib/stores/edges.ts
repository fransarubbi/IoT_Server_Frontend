import { writable } from "svelte/store";
import type { Edge, Hub } from "$lib/types";

// Initial mock data
const initialEdges: Edge[] = [
    {
        id: '1',
        name: 'Edge Gateway Alpha',
        status: 'online',
        location: 'Datacenter Principal',
        lastSeen: new Date(),
        networks: [
            { 
                id: 'n1', name: 'Red Industrial', edgeId: '1', subnet: '192.168.1.0/24', gateway: '192.168.1.1', status: 'active', devices: 24, 
                hubs: [
                    { id: 'H-XW9R', network: 'Red Industrial', device_name: 'Sensor Humedad y Tº', wifi_ssid: 'IoT_Industrial_Net', wifi_password: 'pass_industrial', mqtt_uri: 'mqtt://broker.hivemq.com:1883', sample: '2000', energy_mode: 'Bajo consumo' },
                    { id: 'H-Q1L2', network: 'Red Industrial', device_name: 'Medidor de Nivel', wifi_ssid: 'IoT_Industrial_Net', wifi_password: 'pass_industrial', mqtt_uri: 'mqtt://broker.hivemq.com:1883', sample: '5000', energy_mode: 'Balanceado' }
                ] 
            },
            { 
                id: 'n2', name: 'Red Sensores', edgeId: '1', subnet: '192.168.2.0/24', gateway: '192.168.2.1', status: 'active', devices: 156, 
                hubs: [
                    { id: 'H-Z8K0', network: 'Red Sensores', device_name: 'Monitor de Presión', wifi_ssid: 'SensorNet', wifi_password: 'sensor_pass', mqtt_uri: 'mqtt://broker.hivemq.com:1883', sample: '1000', energy_mode: 'Performance' }
                ] 
            },
        ]
    },
    {
        id: '2',
        name: 'Edge Gateway Beta',
        status: 'warning',
        location: 'Planta Norte',
        lastSeen: new Date(Date.now() - 300000),
        networks: [
            { id: 'n3', name: 'Red Producción', edgeId: '2', subnet: '10.0.1.0/24', gateway: '10.0.1.1', status: 'active', devices: 48, hubs: [] },
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
];

function createEdgesStore() {
    const { subscribe, update, set } = writable<Edge[]>(initialEdges);

    return {
        subscribe,
        add: (edge: Edge) => update(n => [...n, edge]),
        remove: (id: string) => update(n => n.filter(e => e.id !== id)),
        update: (edge: Edge) => update(n => n.map(e => e.id === edge.id ? edge : e)),
        // specific network helpers to avoid complex logic in components
        addNetwork: (edgeId: string, network: any) => update(edges =>
            edges.map(e => e.id === edgeId ? { ...e, networks: [...e.networks, network] } : e)
        ),
        removeNetwork: (edgeId: string, networkId: string) => update(edges =>
            edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.filter(n => n.id !== networkId) } : e)
        ),
        addHub: (edgeId: string, networkId: string, hub: any) => update(edges =>
            edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: [...n.hubs, hub] } : n) } : e)
        ),
        removeHub: (edgeId: string, networkId: string, hubId: string) => update(edges =>
            edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: n.hubs.filter(h => h.id !== hubId) } : n) } : e)
        ),
        updateHub: (edgeId: string, networkId: string, hub: any) => update(edges =>
            edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: n.hubs.map(h => h.id === hub.id ? hub : h) } : n) } : e)
        ),
        reset: () => set(initialEdges)
    };
}

export const edges = createEdgesStore();
