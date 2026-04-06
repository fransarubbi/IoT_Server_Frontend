import { writable } from "svelte/store";
// Initial mock data
const initialEdges = [
    {
        id: '1',
        name: 'Edge Gateway Alpha',
        status: 'online',
        location: 'Datacenter Principal',
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
        id: '2',
        name: 'Edge Gateway Beta',
        status: 'warning',
        location: 'Planta Norte',
        lastSeen: new Date(Date.now() - 300000),
        networks: [
            {
                id: 'RED-MANT', description: 'Sensores de diagnóstico de equipos inactivos', ubication: 'Almacén 2', edgeId: '2', status: 'active', hubs: []
            },
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
    const { subscribe, update, set } = writable(initialEdges);
    return {
        subscribe,
        add: (edge) => update(n => [...n, edge]),
        remove: (id) => update(n => n.filter(e => e.id !== id)),
        update: (edge) => update(n => n.map(e => e.id === edge.id ? edge : e)),
        // specific network helpers to avoid complex logic in components
        addNetwork: (edgeId, network) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: [...e.networks, network] } : e)),
        updateNetwork: (edgeId, oldNetworkId, newNetwork) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === oldNetworkId ? newNetwork : n) } : e)),
        removeNetwork: (edgeId, networkId) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.filter(n => n.id !== networkId) } : e)),
        addHub: (edgeId, networkId, hub) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: [...n.hubs, hub] } : n) } : e)),
        removeHub: (edgeId, networkId, hubId) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: n.hubs.filter(h => h.id !== hubId) } : n) } : e)),
        updateHub: (edgeId, networkId, hub) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: n.hubs.map(h => h.id === hub.id ? hub : h) } : n) } : e)),
        reset: () => set(initialEdges)
    };
}
export const edges = createEdgesStore();
