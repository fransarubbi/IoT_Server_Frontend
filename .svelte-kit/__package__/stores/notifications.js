import { writable } from 'svelte/store';
import { getActiveNotifications, markNotificationAsRead } from '../services/api';
// ---------------------------------------------------------------------------
// State stores
// ---------------------------------------------------------------------------
export const notifications = writable([]);
export const notificationsLoading = writable(false);
export const notificationsError = writable(null);
// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------
export const notificationsActions = {
    /** Add a single notification locally, placing it at the top sorted by descending createdAt */
    add(notification) {
        notifications.update((list) => {
            const newList = [notification, ...list];
            newList.sort((a, b) => b.createdAt - a.createdAt);
            return newList;
        });
    },
    /** Load all active notifications from the API. */
    async load() {
        notificationsLoading.set(true);
        notificationsError.set(null);
        try {
            const data = await getActiveNotifications();
            data.sort((a, b) => b.createdAt - a.createdAt);
            notifications.set(data);
        }
        catch (err) {
            notificationsError.set(err instanceof Error ? err.message : String(err));
        }
        finally {
            notificationsLoading.set(false);
        }
    },
    /**
     * Mark a notification as read via PATCH and remove it from the local list.
     * The API uses a logical delete — the item won't appear on the next GET.
     */
    async markRead(id) {
        notificationsError.set(null);
        try {
            await markNotificationAsRead(id);
            notifications.update((list) => list.filter((n) => n.id !== id));
        }
        catch (err) {
            notificationsError.set(err instanceof Error ? err.message : String(err));
            throw err;
        }
    },
    /** Mark all currently loaded notifications as read. */
    async markAllRead() {
        notificationsError.set(null);
        let current = [];
        notifications.subscribe((v) => (current = v))();
        const results = await Promise.allSettled(current.map((n) => markNotificationAsRead(n.id)));
        // Remove successfully marked notifications from the local list
        const failedIds = new Set(results
            .map((r, i) => (r.status === 'rejected' ? current[i].id : null))
            .filter((id) => id !== null));
        notifications.update((list) => list.filter((n) => failedIds.has(n.id)));
    },
};
