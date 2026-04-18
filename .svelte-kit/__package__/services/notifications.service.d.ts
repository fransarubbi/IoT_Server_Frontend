import type { Notification } from '../types';
export declare const notificationsService: {
    /**
     * GET /api/notifications
     * Returns all active (unread) notifications.
     */
    getAll(): Promise<Notification[]>;
    /**
     * PATCH /api/notifications/{id}/read
     * Logical delete — marks the notification as read/dismissed.
     * Returns 204 with no content.
     */
    markRead(id: number): Promise<Response>;
};
