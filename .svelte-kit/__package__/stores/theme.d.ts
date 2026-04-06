type Theme = "light" | "dark";
export declare const theme: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<Theme>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    toggle: () => void;
    set: (theme: Theme) => void;
    init: () => void;
};
export {};
