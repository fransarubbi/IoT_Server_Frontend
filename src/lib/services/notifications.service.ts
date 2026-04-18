import { apiJson, apiFetch } from './api';
import type { Notification } from '$lib/types';

export const notificationsService = {
  /**
   * GET /api/notifications
   * Returns all active (unread) notifications.
   */
  getAll(): Promise<Notification[]> {
    return apiJson<Notification[]>('/notifications');
  },

  /**
   * PATCH /api/notifications/{id}/read
   * Logical delete — marks the notification as read/dismissed.
   * Returns 204 with no content.
   */
  markRead(id: number): Promise<Response> {
    return apiFetch(`/notifications/${id}/read`, { method: 'PATCH' });
  },
};
