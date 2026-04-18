import { writable } from 'svelte/store';
import type { NetworkSummary } from '$lib/types';
import { networksService } from '$lib/services/networks.service';

// ---------------------------------------------------------------------------
// State stores
// ---------------------------------------------------------------------------

export const networks = writable<NetworkSummary[]>([]);
export const networksLoading = writable(false);
export const networksError = writable<string | null>(null);

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export const networksActions = {
  /** Load network summaries for a given edgeId. */
  async load(edgeId: string): Promise<void> {
    networksLoading.set(true);
    networksError.set(null);
    try {
      const data = await networksService.getByEdge(edgeId);
      networks.set(data);
    } catch (err) {
      networksError.set(err instanceof Error ? err.message : String(err));
    } finally {
      networksLoading.set(false);
    }
  },

  /** Create a new Network and reload the list. */
  async add(
    network: { networkId: string; name: string; edgeId: string },
    edgeId: string,
  ): Promise<void> {
    networksLoading.set(true);
    networksError.set(null);
    try {
      await networksService.create({ ...network, active: true });
      const data = await networksService.getByEdge(edgeId);
      networks.set(data);
    } catch (err) {
      networksError.set(err instanceof Error ? err.message : String(err));
      throw err;
    } finally {
      networksLoading.set(false);
    }
  },

  /**
   * Toggle a network active/inactive via PATCH.
   * Optimistically flips the local value and reloads on error.
   */
  async toggle(networkId: string, edgeId: string): Promise<void> {
    // Optimistic update
    networks.update((list) =>
      list.map((n) => (n.networkId === networkId ? { ...n, active: !n.active } : n)),
    );
    try {
      await networksService.toggle(networkId);
    } catch (err) {
      // Revert on failure
      networks.update((list) =>
        list.map((n) => (n.networkId === networkId ? { ...n, active: !n.active } : n)),
      );
      networksError.set(err instanceof Error ? err.message : String(err));
      throw err;
    }
  },

  /** Delete a Network and remove it from the local store. */
  async remove(networkId: string): Promise<void> {
    networksError.set(null);
    try {
      await networksService.delete(networkId);
      networks.update((list) => list.filter((n) => n.networkId !== networkId));
    } catch (err) {
      networksError.set(err instanceof Error ? err.message : String(err));
      throw err;
    }
  },

  /** Clear the network list (e.g. when navigating away). */
  clear(): void {
    networks.set([]);
    networksError.set(null);
  },
};
