import { writable } from "svelte/store";
function createAuthStore() {
    const { subscribe, set, update } = writable(null);
    return {
        subscribe,
        login: (user) => set(user),
        logout: () => set(null),
        update: (data) => update((u) => (u ? { ...u, ...data } : null)),
    };
}
export const auth = createAuthStore();
