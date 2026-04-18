import type { CertificateData, CertificateRequest } from '../types';
export declare const certificatesService: {
    /**
     * GET /api/certificates
     * Returns certificate history for the status table.
     */
    getAll(): Promise<CertificateData[]>;
    /**
     * POST /api/certificates/generate
     * Generates a new certificate and triggers a ZIP download in the browser.
     * Returns 200 with binary ZIP.
     */
    generate(request: CertificateRequest): Promise<void>;
    /**
     * PATCH /api/certificates/{id}/revoke
     * Logical revocation. Returns 204 with no content.
     */
    revoke(id: string): Promise<Response>;
};
