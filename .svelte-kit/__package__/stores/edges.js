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
            { id: 'n1', name: 'Red Industrial', edgeId: '1', subnet: '192.168.1.0/24', gateway: '192.168.1.1', status: 'active', devices: 24, hubs: [] },
            { id: 'n2', name: 'Red Sensores', edgeId: '1', subnet: '192.168.2.0/24', gateway: '192.168.2.1', status: 'active', devices: 156, hubs: [] },
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
    const { subscribe, update, set } = writable(initialEdges);
    return {
        subscribe,
        add: (edge) => update(n => [...n, edge]),
        remove: (id) => update(n => n.filter(e => e.id !== id)),
        update: (edge) => update(n => n.map(e => e.id === edge.id ? edge : e)),
        // specific network helpers to avoid complex logic in components
        addNetwork: (edgeId, network) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: [...e.networks, network] } : e)),
        removeNetwork: (edgeId, networkId) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.filter(n => n.id !== networkId) } : e)),
        addHub: (edgeId, networkId, hub) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: [...n.hubs, hub] } : n) } : e)),
        removeHub: (edgeId, networkId, hubId) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: n.hubs.filter(h => h.id !== hubId) } : n) } : e)),
        updateHub: (edgeId, networkId, hub) => update(edges => edges.map(e => e.id === edgeId ? { ...e, networks: e.networks.map(n => n.id === networkId ? { ...n, hubs: n.hubs.map(h => h.id === hub.id ? hub : h) } : n) } : e)),
        reset: () => set(initialEdges)
    };
}
export const edges = createEdgesStore();
