import type { Notification } from '../types';
export declare const notifications: import("svelte/store").Writable<Notification[]>;
export declare const notificationsLoading: import("svelte/store").Writable<boolean>;
export declare const notificationsError: import("svelte/store").Writable<string | null>;
export declare const notificationsActions: {
    /** Load all active notifications from the API. */
    load(): Promise<void>;
    /**
     * Mark a notification as read via PATCH and remove it from the local list.
     * The API uses a logical delete — the item won't appear on the next GET.
     */
    markRead(id: number): Promise<void>;
    /** Mark all currently loaded notifications as read. */
    markAllRead(): Promise<void>;
};
