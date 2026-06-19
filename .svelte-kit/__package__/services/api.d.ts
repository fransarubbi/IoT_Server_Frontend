import type { CertificateData, CertificateRequest, Edge, HubSettings, Network, NetworkSummary, Notification } from '../types';
export declare const API_BASE: string;
export declare class ApiError extends Error {
    readonly status: number;
    constructor(status: number, message: string);
}
/**
 * Low-level fetch wrapper. Throws ApiError on non-2xx responses.
 */
export declare function apiFetch(path: string, options?: RequestInit): Promise<Response>;
/**
 * Fetch and parse JSON response.
 */
export declare function apiJson<T>(path: string, options?: RequestInit): Promise<T>;
/**
 * Fetch a binary response, return Blob and trigger browser download.
 */
export declare function downloadBlob(path: string, filename: string, options?: RequestInit): Promise<Blob>;
export declare function getCertificates(): Promise<CertificateData[]>;
export declare function revokeCertificate(id: string): Promise<void>;
export declare function generateCertificate(data: CertificateRequest): Promise<Blob>;
export declare function getAllEdges(): Promise<Edge[]>;
export declare function createEdge(edge: Edge): Promise<void>;
export declare function deleteEdge(id: string): Promise<void>;
export declare function downloadEdgeConfig(id: string): Promise<Blob>;
export declare function getHubsByNetwork(networkId: string): Promise<HubSettings[]>;
export declare function sendHubSettings(id: string, settings: HubSettings): Promise<void>;
export declare function getNetworksSummary(edgeId: string): Promise<NetworkSummary[]>;
export declare function getFullNetworks(edgeId: string): Promise<Network[]>;
export declare function createNetwork(network: Network): Promise<void>;
export declare function updateNetworkStatus(id: string): Promise<void>;
export declare function deleteNetwork(id: string): Promise<void>;
export declare function getActiveNotifications(): Promise<Notification[]>;
export declare function markNotificationAsRead(id: number): Promise<void>;
export declare function downloadDocumentation(): Promise<Blob>;
