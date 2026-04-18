import type { Edge } from '../types';
export declare const edges: import("svelte/store").Writable<Edge[]>;
export declare const edgesLoading: import("svelte/store").Writable<boolean>;
export declare const edgesError: import("svelte/store").Writable<string | null>;
export declare const edgesActions: {
    /** Load all edges from the API and populate the store. */
    load(): Promise<void>;
    /** Create a new Edge via the API, then reload the list.
     * Does NOT touch edgesLoading — the caller manages its own submitting state. */
    add(edge: Omit<Edge, "status" | "lastSeen">): Promise<void>;
    /** Delete an Edge via the API, then remove it from the local store.
     * Does NOT touch edgesLoading — the caller manages its own submitting state. */
    remove(edgeId: string): Promise<void>;
    /** Download the Edge configuration ZIP from the API. */
    downloadConfig(edgeId: string, name: string): Promise<void>;
};
