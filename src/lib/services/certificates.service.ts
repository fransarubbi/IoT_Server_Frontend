import { apiJson, apiFetch } from './api';
import type { CertificateData, CertificateRequest } from '$lib/types';

export const certificatesService = {
  /**
   * GET /api/certificates
   * Returns certificate history for the status table.
   */
  getAll(): Promise<CertificateData[]> {
    return apiJson<CertificateData[]>('/certificates');
  },

  /**
   * POST /api/certificates/generate
   * Generates a new certificate and triggers a ZIP download in the browser.
   * Returns 200 with binary ZIP.
   */
  async generate(request: CertificateRequest): Promise<void> {
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
  revoke(id: string): Promise<Response> {
    return apiFetch(`/certificates/${id}/revoke`, { method: 'PATCH' });
  },
};
