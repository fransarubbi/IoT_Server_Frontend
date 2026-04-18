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
 * Fetch a binary response and trigger a browser file download.
 */
export declare function downloadBlob(path: string, filename: string, options?: RequestInit): Promise<void>;
