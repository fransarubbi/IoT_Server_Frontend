import { writable } from 'svelte/store';
import { getAllEdges, createEdge, deleteEdge, downloadEdgeConfig } from '../services/api';
// ---------------------------------------------------------------------------
// State stores
// ---------------------------------------------------------------------------
export const edges = writable([]);
export const edgesLoading = writable(false);
export const edgesError = writable(null);
// Store to keep track of dynamic Edge states received via SSE
export const edgeStates = writable({});
// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------
export const edgesActions = {
    /** Load all edges from the API and populate the store. */
    async load() {
        edgesLoading.set(true);
        edgesError.set(null);
        try {
            const data = await getAllEdges();
            edges.set(data);
        }
        catch (err) {
            edgesError.set(err instanceof Error ? err.message : String(err));
        }
        finally {
            edgesLoading.set(false);
        }
    },
    /** Create a new Edge via the API, then reload the list.
     * Does NOT touch edgesLoading — the caller manages its own submitting state. */
    async add(edge) {
        try {
            await createEdge(edge);
            const data = await getAllEdges();
            edges.set(data);
        }
        catch (err) {
            throw err; // re-throw so the page can show the error in the modal
        }
    },
    /** Delete an Edge via the API, then remove it from the local store.
     * Does NOT touch edgesLoading — the caller manages its own submitting state. */
    async remove(edgeId) {
        try {
            await deleteEdge(edgeId);
            edges.update((list) => list.filter((e) => e.edgeId !== edgeId));
        }
        catch (err) {
            throw err;
        }
    },
    /** Download the Edge configuration ZIP from the API. */
    downloadConfig(edgeId) {
        return downloadEdgeConfig(edgeId);
    },
};
