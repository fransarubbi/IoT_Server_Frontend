import { writable } from 'svelte/store';
import type { Edge } from '$lib/types';
import { edgesService } from '$lib/services/edges.service';

// ---------------------------------------------------------------------------
// State stores
// ---------------------------------------------------------------------------

export const edges = writable<Edge[]>([]);
export const edgesLoading = writable(false);
export const edgesError = writable<string | null>(null);

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export const edgesActions = {
  /** Load all edges from the API and populate the store. */
  async load(): Promise<void> {
    edgesLoading.set(true);
    edgesError.set(null);
    try {
      const data = await edgesService.getAll();
      edges.set(data);
    } catch (err) {
      edgesError.set(err instanceof Error ? err.message : String(err));
    } finally {
      edgesLoading.set(false);
    }
  },

  /** Create a new Edge via the API, then reload the list.
   * Does NOT touch edgesLoading — the caller manages its own submitting state. */
  async add(edge: Omit<Edge, 'status' | 'lastSeen'>): Promise<void> {
    try {
      await edgesService.create(edge);
      const data = await edgesService.getAll();
      edges.set(data);
    } catch (err) {
      throw err; // re-throw so the page can show the error in the modal
    }
  },

  /** Delete an Edge via the API, then remove it from the local store.
   * Does NOT touch edgesLoading — the caller manages its own submitting state. */
  async remove(edgeId: string): Promise<void> {
    try {
      await edgesService.delete(edgeId);
      edges.update((list) => list.filter((e) => e.edgeId !== edgeId));
    } catch (err) {
      throw err;
    }
  },

  /** Download the Edge configuration ZIP from the API. */
  downloadConfig(edgeId: string, name: string): Promise<void> {
    return edgesService.downloadConfig(edgeId, name);
  },
};
