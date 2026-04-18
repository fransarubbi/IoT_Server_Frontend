import { writable } from 'svelte/store';
import { certificatesService } from '../services/certificates.service';
// ---------------------------------------------------------------------------
// State stores
// ---------------------------------------------------------------------------
export const certificates = writable([]);
export const certificatesLoading = writable(false);
export const certificatesError = writable(null);
export const certificatesGenerating = writable(false);
// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------
export const certificatesActions = {
    /** Load certificate history from the API. */
    async load() {
        certificatesLoading.set(true);
        certificatesError.set(null);
        try {
            const data = await certificatesService.getAll();
            certificates.set(data);
        }
        catch (err) {
            certificatesError.set(err instanceof Error ? err.message : String(err));
        }
        finally {
            certificatesLoading.set(false);
        }
    },
    /**
     * Generate a new certificate and download the resulting ZIP.
     * Reloads the certificate list after generation.
     */
    async generate(request) {
        certificatesGenerating.set(true);
        certificatesError.set(null);
        try {
            await certificatesService.generate(request);
            // Reload list so the new entry appears in the table
            const data = await certificatesService.getAll();
            certificates.set(data);
        }
        catch (err) {
            certificatesError.set(err instanceof Error ? err.message : String(err));
            throw err;
        }
        finally {
            certificatesGenerating.set(false);
        }
    },
    /**
     * Revoke a certificate (logical delete via PATCH).
     * Updates the local status to 'revoked' immediately.
     */
    async revoke(id) {
        certificatesError.set(null);
        try {
            await certificatesService.revoke(id);
            certificates.update((list) => list.map((c) => (c.id === id ? { ...c, status: 'revoked' } : c)));
        }
        catch (err) {
            certificatesError.set(err instanceof Error ? err.message : String(err));
            throw err;
        }
    },
};
