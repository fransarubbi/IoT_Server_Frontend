import { writable } from "svelte/store"

export interface User {
  id: string
  name: string
  email: string
  avatar?: string
  role: "admin" | "user"
}

function createAuthStore() {
  const { subscribe, set, update } = writable<User | null>(null)

  return {
    subscribe,
    login: (user: User) => set(user),
    logout: () => set(null),
    update: (data: Partial<User>) => update((u) => (u ? { ...u, ...data } : null)),
  }
}

export const auth = createAuthStore()
