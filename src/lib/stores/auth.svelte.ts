import { supabase } from '$lib/supabase';
import type { Session } from '@supabase/supabase-js';
import { goto } from '$app/navigation';

// ─── Types ────────────────────────────────────────────────────────────────────

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
export function fullName(p: UserProfile): string {
  return `${p.first_name} ${p.last_name}`.trim();
}

/** Helper: initials for avatar */
export function initials(p: UserProfile): string {
  const f = p.first_name?.charAt(0) ?? '';
  const l = p.last_name?.charAt(0) ?? '';
  return (f + l).toUpperCase() || 'U';
}

// ─── Auth State Class (Svelte 5 Runes) ────────────────────────────────────────

class AuthState {
  session: Session | null = $state(null);
  profile: UserProfile | null = $state(null);
  loading: boolean = $state(true);

  get isAuthenticated() {
    return !!this.session && !!this.profile;
  }
}

export const auth = new AuthState();

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Fetch the user profile from public.users filtered by auth user id.
 * Returns the profile or throws a typed error.
 */
async function fetchProfile(userId: string): Promise<UserProfile> {
  const { data, error } = await supabase
    .from('users')
    .select('id, email, first_name, last_name, role, is_active, last_login_at, created_at')
    .eq('id', userId)
    .single();

  if (error) {
    throw new Error('PROFILE_NOT_FOUND');
  }

  return data as UserProfile;
}

/**
 * Record last login timestamp in public.users.
 * Errors here are non-fatal; we just silently ignore them.
 */
async function recordLastLogin(userId: string): Promise<void> {
  await supabase
    .from('users')
    .update({ last_login_at: new Date().toISOString() })
    .eq('id', userId);
}

// ─── Auth Actions ─────────────────────────────────────────────────────────────

/**
 * Sign in with Supabase Auth and populate auth state.
 * Throws typed errors so callers can show differentiated messages.
 */
export async function login(email: string, password: string): Promise<void> {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    const msg = error.message.toLowerCase();
    if (msg.includes('invalid login credentials') || msg.includes('invalid credentials')) {
      throw new Error('INVALID_CREDENTIALS');
    }
    if (msg.includes('email not confirmed')) {
      throw new Error('EMAIL_NOT_CONFIRMED');
    }
    if (msg.includes('network') || error.status === 0) {
      throw new Error('NETWORK_ERROR');
    }
    throw new Error('INVALID_CREDENTIALS'); // default auth failure
  }

  const userId = data.session.user.id;

  // Fetch public profile — throws PROFILE_NOT_FOUND if missing
  const userProfile = await fetchProfile(userId);

  // Block disabled users BEFORE setting any state
  if (!userProfile.is_active) {
    await supabase.auth.signOut();
    throw new Error('USER_DISABLED');
  }

  // Persist session and profile
  auth.session = data.session;
  auth.profile = userProfile;

  // Non-fatal: record login time
  await recordLastLogin(userId);
}

/**
 * Sign out from Supabase Auth and clear all state.
 */
export async function logout(): Promise<void> {
  await supabase.auth.signOut();
  auth.session = null;
  auth.profile = null;
  if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
    goto('/login');
  }
}

// ─── Session Hydration ────────────────────────────────────────────────────────

/**
 * Call once at app startup (e.g., in root layout).
 * Restores session from local storage and subscribes to auth changes.
 */
export async function initAuth(): Promise<void> {
  // Restore existing session (handles page reload / token refresh)
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    try {
      const userProfile = await fetchProfile(data.session.user.id);
      if (userProfile.is_active) {
        auth.session = data.session;
        auth.profile = userProfile;
      } else {
        // Profile disabled — force sign out
        await supabase.auth.signOut();
      }
    } catch {
      // Profile missing — clear session
      await supabase.auth.signOut();
    }
  }

  auth.loading = false;

  // Listen for token refresh / sign-out events from Supabase
  supabase.auth.onAuthStateChange(async (event, newSession) => {
    if (event === 'SIGNED_OUT' || !newSession) {
      auth.session = null;
      auth.profile = null;
      if (typeof window !== 'undefined' && window.location.pathname !== '/login') {
        goto('/login');
      }
      return;
    }

    if (event === 'TOKEN_REFRESHED' && newSession) {
      auth.session = newSession;
    }
  });
}
