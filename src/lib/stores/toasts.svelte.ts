import type { Notification } from '$lib/types';

export interface Toast {
  id: number;
  notification: Notification;
}

class ToastStore {
  toasts = $state<Toast[]>([]);

  add(notification: Notification) {
    const id = Date.now() + Math.random();
    this.toasts.push({ id, notification });
    
    setTimeout(() => {
      this.remove(id);
    }, 5000);
  }

  remove(id: number) {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }
}

export const toasts = new ToastStore();
