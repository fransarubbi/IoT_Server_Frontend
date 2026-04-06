export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    role: "admin" | "user";
}
export declare const auth: {
    subscribe: (this: void, run: import("svelte/store").Subscriber<User | null>, invalidate?: () => void) => import("svelte/store").Unsubscriber;
    login: (user: User) => void;
    logout: () => void;
    update: (data: Partial<User>) => void;
};
