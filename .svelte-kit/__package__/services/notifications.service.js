import { apiJson, apiFetch } from './api';
export const notificationsService = {
    /**
     * GET /api/notifications
     * Returns all active (unread) notifications.
     */
    getAll() {
        return apiJson('/notifications');
    },
    /**
     * PATCH /api/notifications/{id}/read
     * Logical delete — marks the notification as read/dismissed.
     * Returns 204 with no content.
     */
    markRead(id) {
        return apiFetch(`/notifications/${id}/read`, { method: 'PATCH' });
    },
};
