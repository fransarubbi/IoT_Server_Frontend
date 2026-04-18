import { apiJson, apiFetch, downloadBlob } from './api';
import type { Edge } from '$lib/types';

export const edgesService = {
  /** GET /api/edges — returns all Edge objects */
  getAll(): Promise<Edge[]> {
    return apiJson<Edge[]>('/edges');
  },

  /** POST /api/edges — creates a new Edge. Returns 201 with no content. */
  create(edge: Omit<Edge, 'status' | 'lastSeen'>): Promise<Response> {
    return apiFetch('/edges', {
      method: 'POST',
      body: JSON.stringify(edge),
    });
  },

  /** DELETE /api/edges/{id} — returns 204 with no content. */
  delete(edgeId: string): Promise<Response> {
    return apiFetch(`/edges/${edgeId}`, { method: 'DELETE' });
  },

  /** GET /api/edges/{id}/download — downloads the configuration ZIP file. */
  downloadConfig(edgeId: string, name: string): Promise<void> {
    return downloadBlob(`/edges/${edgeId}/download`, `edge_config_${name}.zip`);
  },
};
