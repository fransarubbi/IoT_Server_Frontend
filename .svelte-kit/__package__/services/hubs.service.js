import { apiJson, apiFetch } from './api';
export const hubsService = {
    /**
     * GET /api/hubs?networkId={networkId}
     * Returns array of HubSettings for the given network.
     */
    getByNetwork(networkId) {
        return apiJson(`/hubs?networkId=${encodeURIComponent(networkId)}`);
    },
    /**
     * PUT /api/hubs/{id}/settings
     * Sends updated configuration to the hardware.
     * Returns 202 Accepted (processed asynchronously — backend waits up to 5 min for hardware ACK).
     */
    updateSettings(hubId, settings) {
        return apiFetch(`/hubs/${hubId}/settings`, {
            method: 'PUT',
            body: JSON.stringify(settings),
        });
    },
};
