import { apiJson, apiFetch } from './api';
export const networksService = {
    /**
     * GET /api/networks?edgeId={edgeId}
     * Returns NetworkSummary array (includes hubCount) — for UI cards.
     */
    getByEdge(edgeId) {
        return apiJson(`/networks?edgeId=${encodeURIComponent(edgeId)}`);
    },
    /**
     * GET /api/networks/detail?edgeId={edgeId}
     * Returns full Network objects — for technical detail views.
     */
    getDetailByEdge(edgeId) {
        return apiJson(`/networks/detail?edgeId=${encodeURIComponent(edgeId)}`);
    },
    /** POST /api/networks — creates a new Network. Returns 201 with no content. */
    create(network) {
        return apiFetch('/networks', {
            method: 'POST',
            body: JSON.stringify(network),
        });
    },
    /**
     * PATCH /api/networks/{id}/update — toggles network active/inactive.
     * Returns 200 with no content.
     */
    toggle(networkId) {
        return apiFetch(`/networks/${networkId}/update`, { method: 'PATCH' });
    },
    /** DELETE /api/networks/{id} — returns 204 with no content. */
    delete(networkId) {
        return apiFetch(`/networks/${networkId}`, { method: 'DELETE' });
    },
};
