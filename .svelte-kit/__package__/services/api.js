import { supabase } from '../supabase';
/**
 * Central API configuration and fetch utilities.
 * Set VITE_API_BASE_URL in your .env file to override (e.g. http://localhost:3000/api).
 * Defaults to '/api' (relative — same origin or Vite proxy).
 */
function resolveApiBase() {
    try {
        const envUrl = import.meta.env['VITE_API_BASE_URL'];
        return envUrl ?? '/api';
    }
    catch {
        return '/api';
    }
}
export const API_BASE = resolveApiBase();
// ---------------------------------------------------------------------------
// Error type
// ---------------------------------------------------------------------------
export class ApiError extends Error {
    status;
    constructor(status, message) {
        super(message);
        this.status = status;
        this.name = 'ApiError';
    }
}
// ---------------------------------------------------------------------------
// Core helpers
// ---------------------------------------------------------------------------
/**
 * Low-level fetch wrapper. Throws ApiError on non-2xx responses.
 */
export async function apiFetch(path, options = {}) {
    const url = `${API_BASE}${path}`;
    const { data: { session } } = await supabase.auth.getSession();
    const headers = {
        ...(options.headers ?? {}),
    };
    // Add application/json if there's a body and no content-type is set
    if (options.body && !headers['Content-Type'] && !(options.body instanceof FormData)) {
        headers['Content-Type'] = 'application/json';
    }
    if (session?.access_token) {
        headers['Authorization'] = `Bearer ${session.access_token}`;
    }
    const response = await fetch(url, {
        ...options,
        headers,
    });
    if (!response.ok) {
        let errorText = response.statusText;
        try {
            const errorJson = await response.json();
            errorText = errorJson.message || errorJson.error || errorText;
        }
        catch {
            try {
                const text = await response.text();
                if (text)
                    errorText = text;
            }
            catch {
                // Fallback to statusText
            }
        }
        throw new ApiError(response.status, errorText || `HTTP ${response.status}`);
    }
    return response;
}
/**
 * Fetch and parse JSON response.
 */
export async function apiJson(path, options = {}) {
    const response = await apiFetch(path, options);
    if (response.status === 204) {
        return undefined;
    }
    return response.json();
}
/**
 * Fetch a binary response, return Blob and trigger browser download.
 */
export async function downloadBlob(path, filename, options = {}) {
    const response = await apiFetch(path, {
        ...options,
        headers: {
            'Accept': 'application/octet-stream',
            ...options.headers,
        }
    });
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
    return blob;
}
// ===========================================================================
// MAPPED ENDPOINTS
// ===========================================================================
// --- Certificados (/api/certificates) ---
export async function getCertificates() {
    return apiJson('/certificates');
}
export async function revokeCertificate(id) {
    await apiFetch(`/certificates/${id}/revoke`, { method: 'PATCH' });
}
export async function generateCertificate(data) {
    return downloadBlob('/certificates/generate', `certificate-${data.commonName}.zip`, {
        method: 'POST',
        body: JSON.stringify(data),
    });
}
// --- Edges (/api/edges) ---
export async function getAllEdges() {
    return apiJson('/edges');
}
export async function createEdge(edge) {
    await apiFetch('/edges', {
        method: 'POST',
        body: JSON.stringify(edge),
    });
}
export async function deleteEdge(id) {
    await apiFetch(`/edges/${id}`, { method: 'DELETE' });
}
export async function downloadEdgeConfig(id) {
    return downloadBlob(`/edges/${id}/download`, `edge-config-${id}.zip`, {
        method: 'GET'
    });
}
// --- Hubs (/api/hubs) ---
export async function getHubsByNetwork(networkId) {
    return apiJson(`/hubs?networkId=${networkId}`);
}
export async function sendHubSettings(id, settings) {
    await apiFetch(`/hubs/${id}/settings`, {
        method: 'PUT',
        body: JSON.stringify(settings),
    });
}
// --- Networks (/api/networks) ---
export async function getNetworksSummary(edgeId) {
    return apiJson(`/networks?edgeId=${edgeId}`);
}
export async function getFullNetworks(edgeId) {
    return apiJson(`/networks/detail?edgeId=${edgeId}`);
}
export async function createNetwork(network) {
    await apiFetch('/networks', {
        method: 'POST',
        body: JSON.stringify(network),
    });
}
export async function updateNetworkStatus(id) {
    await apiFetch(`/networks/${id}/update`, { method: 'PATCH' });
}
export async function deleteNetwork(id) {
    await apiFetch(`/networks/${id}`, { method: 'DELETE' });
}
// --- Notifications (/api/notifications) ---
export async function getActiveNotifications() {
    return apiJson('/notifications');
}
export async function markNotificationAsRead(id) {
    await apiFetch(`/notifications/${id}/read`, { method: 'PATCH' });
}
// --- Documents (/api/documents) ---
export async function downloadDocumentation() {
    return downloadBlob('/documents/Documentacion/download', 'documentacion_sistema.pdf', {
        method: 'GET',
        headers: {
            'Accept': 'application/pdf'
        }
    });
}
