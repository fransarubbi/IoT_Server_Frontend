export type Page = "edge" | "certificates" | "notifications" | "firmware" | "edge-networks" | "network-hubs";
export declare const currentPage: import("svelte/store").Writable<Page>;
export declare const pageParams: import("svelte/store").Writable<Record<string, any>>;
export declare function navigateTo(page: Page, params?: Record<string, any>): void;
