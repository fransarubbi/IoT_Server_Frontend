import type { CertificateData, CertificateRequest } from '../types';
export declare const certificates: import("svelte/store").Writable<CertificateData[]>;
export declare const certificatesLoading: import("svelte/store").Writable<boolean>;
export declare const certificatesError: import("svelte/store").Writable<string | null>;
export declare const certificatesGenerating: import("svelte/store").Writable<boolean>;
export declare const certificatesActions: {
    /** Load certificate history from the API. */
    load(): Promise<void>;
    /**
     * Generate a new certificate and download the resulting ZIP.
     * Reloads the certificate list after generation.
     */
    generate(request: CertificateRequest): Promise<void>;
    /**
     * Revoke a certificate (logical delete via PATCH).
     * Updates the local status to 'revoked' immediately.
     */
    revoke(id: string): Promise<void>;
};
