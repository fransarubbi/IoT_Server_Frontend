import { writable } from "svelte/store";
export const currentPage = writable("edge");
export const pageParams = writable({});
export function navigateTo(page, params = {}) {
    pageParams.set(params);
    currentPage.set(page);
}
