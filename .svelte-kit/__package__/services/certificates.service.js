import { apiJson, apiFetch } from './api';
export const certificatesService = {
    /**
     * GET /api/certificates
     * Returns certificate history for the status table.
     */
    getAll() {
        return apiJson('/certificates');
    },
    /**
     * POST /api/certificates/generate
     * Generates a new certificate and triggers a ZIP download in the browser.
     * Returns 200 with binary ZIP.
     */
    async generate(request) {
        const response = await apiFetch('/certificates/generate', {
            method: 'POST',
            body: JSON.stringify(request),
        });
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `cert_${request.displayName.replace(/\s+/g, '_')}.zip`;
        document.body.appendChild(a);
        a.click();
        a.remove();
        window.URL.revokeObjectURL(url);
    },
    /**
     * PATCH /api/certificates/{id}/revoke
     * Logical revocation. Returns 204 with no content.
     */
    revoke(id) {
        return apiFetch(`/certificates/${id}/revoke`, { method: 'PATCH' });
    },
};
