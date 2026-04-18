import type { HubSettings } from '../types';
export declare const hubs: import("svelte/store").Writable<HubSettings[]>;
export declare const hubsLoading: import("svelte/store").Writable<boolean>;
export declare const hubsError: import("svelte/store").Writable<string | null>;
/** Tracks which hubId is currently sending settings (202 in-progress). */
export declare const hubsSaving: import("svelte/store").Writable<string | null>;
export declare const hubsActions: {
    /** Load hubs for a given networkId. */
    load(networkId: string): Promise<void>;
    /**
     * Send new settings to a Hub via PUT.
     * The backend responds 202 Accepted and processes asynchronously.
     * Optimistically updates the local store.
     */
    updateSettings(hubId: string, settings: HubSettings): Promise<void>;
    /** Clear the hub list (e.g. when navigating away). */
    clear(): void;
};
