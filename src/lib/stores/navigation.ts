import { writable } from "svelte/store"

export type Page = "edge" | "certificates" | "notifications" | "firmware"

export const currentPage = writable<Page>("edge")
