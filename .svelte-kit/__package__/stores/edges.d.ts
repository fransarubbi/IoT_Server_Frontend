import type { Edge } from "../types";
export declare const edges: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Edge[]>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    add: (edge: Edge) => void;
    remove: (id: string) => void;
    update: (edge: Edge) => void;
    addNetwork: (edgeId: string, network: any) => void;
    updateNetwork: (edgeId: string, oldNetworkId: string, newNetwork: any) => void;
    removeNetwork: (edgeId: string, networkId: string) => void;
    addHub: (edgeId: string, networkId: string, hub: any) => void;
    removeHub: (edgeId: string, networkId: string, hubId: string) => void;
    updateHub: (edgeId: string, networkId: string, hub: any) => void;
    reset: () => void;
};
