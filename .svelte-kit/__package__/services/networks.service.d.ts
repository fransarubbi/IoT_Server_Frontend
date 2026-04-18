import type { NetworkSummary, Network } from '../types';
export declare const networksService: {
    /**
     * GET /api/networks?edgeId={edgeId}
     * Returns NetworkSummary array (includes hubCount) — for UI cards.
     */
    getByEdge(edgeId: string): Promise<NetworkSummary[]>;
    /**
     * GET /api/networks/detail?edgeId={edgeId}
     * Returns full Network objects — for technical detail views.
     */
    getDetailByEdge(edgeId: string): Promise<Network[]>;
    /** POST /api/networks — creates a new Network. Returns 201 with no content. */
    create(network: Pick<Network, "networkId" | "name" | "active" | "edgeId">): Promise<Response>;
    /**
     * PATCH /api/networks/{id}/update — toggles network active/inactive.
     * Returns 200 with no content.
     */
    toggle(networkId: string): Promise<Response>;
    /** DELETE /api/networks/{id} — returns 204 with no content. */
    delete(networkId: string): Promise<Response>;
};
