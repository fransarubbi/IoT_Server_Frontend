import { writable } from 'svelte/store';
import { hubsService } from '../services/hubs.service';
// ---------------------------------------------------------------------------
// State stores
// ---------------------------------------------------------------------------
export const hubs = writable([]);
export const hubsLoading = writable(false);
export const hubsError = writable(null);
/** Tracks which hubId is currently sending settings (202 in-progress). */
export const hubsSaving = writable(null);
// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------
export const hubsActions = {
    /** Load hubs for a given networkId. */
    async load(networkId) {
        hubsLoading.set(true);
        hubsError.set(null);
        try {
            const data = await hubsService.getByNetwork(networkId);
            hubs.set(data);
        }
        catch (err) {
            hubsError.set(err instanceof Error ? err.message : String(err));
        }
        finally {
            hubsLoading.set(false);
        }
    },
    /**
     * Send new settings to a Hub via PUT.
     * The backend responds 202 Accepted and processes asynchronously.
     * Optimistically updates the local store.
     */
    async updateSettings(hubId, settings) {
        hubsError.set(null);
        hubsSaving.set(hubId);
        try {
            await hubsService.updateSettings(hubId, settings);
            // Optimistic local update
            hubs.update((list) => list.map((h) => (h.hubId === hubId ? settings : h)));
        }
        catch (err) {
            hubsError.set(err instanceof Error ? err.message : String(err));
            throw err;
        }
        finally {
            hubsSaving.set(null);
        }
    },
    /** Clear the hub list (e.g. when navigating away). */
    clear() {
        hubs.set([]);
        hubsError.set(null);
    },
};
