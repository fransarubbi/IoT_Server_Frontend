import { writable } from "svelte/store"

export type Page = "edge" | "certificates" | "notifications" | "firmware" | "edge-networks" | "network-hubs"

export const currentPage = writable<Page>("edge")
export const pageParams = writable<Record<string, any>>({})

export function navigateTo(page: Page, params: Record<string, any> = {}) {
    pageParams.set(params)
    currentPage.set(page)
}
