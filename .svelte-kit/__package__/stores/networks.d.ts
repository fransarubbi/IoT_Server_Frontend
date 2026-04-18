import type { NetworkSummary } from '../types';
export declare const networks: import("svelte/store").Writable<NetworkSummary[]>;
export declare const networksLoading: import("svelte/store").Writable<boolean>;
export declare const networksError: import("svelte/store").Writable<string | null>;
export declare const networksActions: {
    /** Load network summaries for a given edgeId. */
    load(edgeId: string): Promise<void>;
    /** Create a new Network and reload the list. */
    add(network: {
        networkId: string;
        name: string;
        edgeId: string;
    }, edgeId: string): Promise<void>;
    /**
     * Toggle a network active/inactive via PATCH.
     * Optimistically flips the local value and reloads on error.
     */
    toggle(networkId: string, edgeId: string): Promise<void>;
    /** Delete a Network and remove it from the local store. */
    remove(networkId: string): Promise<void>;
    /** Clear the network list (e.g. when navigating away). */
    clear(): void;
};
