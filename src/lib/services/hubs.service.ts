import { apiJson, apiFetch } from './api';
import type { HubSettings } from '$lib/types';

export const hubsService = {
  /**
   * GET /api/hubs?networkId={networkId}
   * Returns array of HubSettings for the given network.
   */
  getByNetwork(networkId: string): Promise<HubSettings[]> {
    return apiJson<HubSettings[]>(`/hubs?networkId=${encodeURIComponent(networkId)}`);
  },

  /**
   * PUT /api/hubs/{id}/settings
   * Sends updated configuration to the hardware.
   * Returns 202 Accepted (processed asynchronously — backend waits up to 5 min for hardware ACK).
   */
  updateSettings(hubId: string, settings: HubSettings): Promise<Response> {
    return apiFetch(`/hubs/${hubId}/settings`, {
      method: 'PUT',
      body: JSON.stringify(settings),
    });
  },
};
