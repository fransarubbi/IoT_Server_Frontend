import { apiJson, apiFetch, downloadBlob } from './api';
export const edgesService = {
    /** GET /api/edges — returns all Edge objects */
    getAll() {
        return apiJson('/edges');
    },
    /** POST /api/edges — creates a new Edge. Returns 201 with no content. */
    create(edge) {
        return apiFetch('/edges', {
            method: 'POST',
            body: JSON.stringify(edge),
        });
    },
    /** DELETE /api/edges/{id} — returns 204 with no content. */
    delete(edgeId) {
        return apiFetch(`/edges/${edgeId}`, { method: 'DELETE' });
    },
    /** GET /api/edges/{id}/download — downloads the configuration ZIP file. */
    downloadConfig(edgeId, name) {
        return downloadBlob(`/edges/${edgeId}/download`, `edge_config_${name}.zip`);
    },
};
