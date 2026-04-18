import { writable, derived } from 'svelte/store';
import { supabase } from '$lib/supabase';
import type { Session } from '@supabase/supabase-js';

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

// ─── Stores ───────────────────────────────────────────────────────────────────

export const session = writable<Session | null>(null);
export const profile = writable<UserProfile | null>(null);
export const authLoading = writable<boolean>(true);

/** Derived: true when there is an active session AND the profile is loaded */
export const isAuthenticated = derived(
  [session, profile],
  ([$session, $profile]) => !!$session && !!$profile
);

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
 * Sign in with Supabase Auth and populate profile store.
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

  // Block disabled users BEFORE setting any store
  if (!userProfile.is_active) {
    await supabase.auth.signOut();
    throw new Error('USER_DISABLED');
  }

  // Persist session and profile
  session.set(data.session);
  profile.set(userProfile);

  // Non-fatal: record login time
  await recordLastLogin(userId);
}

/**
 * Sign out from Supabase Auth and clear all stores.
 */
export async function logout(): Promise<void> {
  await supabase.auth.signOut();
  session.set(null);
  profile.set(null);
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
        session.set(data.session);
        profile.set(userProfile);
      } else {
        // Profile disabled — force sign out
        await supabase.auth.signOut();
      }
    } catch {
      // Profile missing — clear session
      await supabase.auth.signOut();
    }
  }

  authLoading.set(false);

  // Listen for token refresh / sign-out events from Supabase
  supabase.auth.onAuthStateChange(async (event, newSession) => {
    if (event === 'SIGNED_OUT' || !newSession) {
      session.set(null);
      profile.set(null);
      return;
    }

    if (event === 'TOKEN_REFRESHED' && newSession) {
      session.set(newSession);
    }
  });
}
