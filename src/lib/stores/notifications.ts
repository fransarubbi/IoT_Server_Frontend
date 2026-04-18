import { writable } from 'svelte/store';
import type { Notification } from '$lib/types';
import { notificationsService } from '$lib/services/notifications.service';

// ---------------------------------------------------------------------------
// State stores
// ---------------------------------------------------------------------------

export const notifications = writable<Notification[]>([]);
export const notificationsLoading = writable(false);
export const notificationsError = writable<string | null>(null);

// ---------------------------------------------------------------------------
// Actions
// ---------------------------------------------------------------------------

export const notificationsActions = {
  /** Load all active notifications from the API. */
  async load(): Promise<void> {
    notificationsLoading.set(true);
    notificationsError.set(null);
    try {
      const data = await notificationsService.getAll();
      notifications.set(data);
    } catch (err) {
      notificationsError.set(err instanceof Error ? err.message : String(err));
    } finally {
      notificationsLoading.set(false);
    }
  },

  /**
   * Mark a notification as read via PATCH and remove it from the local list.
   * The API uses a logical delete — the item won't appear on the next GET.
   */
  async markRead(id: number): Promise<void> {
    notificationsError.set(null);
    try {
      await notificationsService.markRead(id);
      notifications.update((list) => list.filter((n) => n.id !== id));
    } catch (err) {
      notificationsError.set(err instanceof Error ? err.message : String(err));
      throw err;
    }
  },

  /** Mark all currently loaded notifications as read. */
  async markAllRead(): Promise<void> {
    notificationsError.set(null);
    let current: Notification[] = [];
    notifications.subscribe((v) => (current = v))();

    const results = await Promise.allSettled(
      current.map((n) => notificationsService.markRead(n.id)),
    );

    // Remove successfully marked notifications from the local list
    const failedIds = new Set(
      results
        .map((r, i) => (r.status === 'rejected' ? current[i].id : null))
        .filter((id): id is number => id !== null),
    );
    notifications.update((list) => list.filter((n) => failedIds.has(n.id)));
  },
};
