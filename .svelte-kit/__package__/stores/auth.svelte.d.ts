import type { Session } from '@supabase/supabase-js';
export interface UserProfile {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
    role: 'admin' | 'user' | string;
    is_active: boolean;
    last_login_at?: string;
    created_at?: string;
}
/** Helper: full display name from profile */
export declare function fullName(p: UserProfile): string;
/** Helper: initials for avatar */
export declare function initials(p: UserProfile): string;
declare class AuthState {
    session: Session | null;
    profile: UserProfile | null;
    loading: boolean;
    get isAuthenticated(): boolean;
}
export declare const auth: AuthState;
/**
 * Sign in with Supabase Auth and populate auth state.
 * Throws typed errors so callers can show differentiated messages.
 */
export declare function login(email: string, password: string): Promise<void>;
/**
 * Sign out from Supabase Auth and clear all state.
 */
export declare function logout(): Promise<void>;
/**
 * Call once at app startup (e.g., in root layout).
 * Restores session from local storage and subscribes to auth changes.
 */
export declare function initAuth(): Promise<void>;
export {};
