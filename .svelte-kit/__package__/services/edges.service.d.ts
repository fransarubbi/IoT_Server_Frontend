import type { Edge } from '../types';
export declare const edgesService: {
    /** GET /api/edges — returns all Edge objects */
    getAll(): Promise<Edge[]>;
    /** POST /api/edges — creates a new Edge. Returns 201 with no content. */
    create(edge: Omit<Edge, "status" | "lastSeen">): Promise<Response>;
    /** DELETE /api/edges/{id} — returns 204 with no content. */
    delete(edgeId: string): Promise<Response>;
    /** GET /api/edges/{id}/download — downloads the configuration ZIP file. */
    downloadConfig(edgeId: string, name: string): Promise<void>;
};
