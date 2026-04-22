import { supabase } from '$lib/supabase';

/**
 * Central API configuration and fetch utilities.
 * Set VITE_API_BASE_URL in your .env file to override (e.g. http://localhost:3000/api).
 * Defaults to '/api' (relative — same origin or Vite proxy).
 */
function resolveApiBase(): string {
  try {
    // import.meta.env is available when bundled with Vite (app context).
    // In non-Vite environments (e.g. SSR without Vite) this may throw.
    const envUrl = import.meta.env['VITE_API_BASE_URL'] as string | undefined;
    return envUrl ?? '/api';
  } catch {
    return '/api';
  }
}

export const API_BASE = resolveApiBase();

// ---------------------------------------------------------------------------
// Error type
// ---------------------------------------------------------------------------

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = 'ApiError';
  }
}

// ---------------------------------------------------------------------------
// Core helpers
// ---------------------------------------------------------------------------

/**
 * Low-level fetch wrapper. Throws ApiError on non-2xx responses.
 */
export async function apiFetch(
  path: string,
  options: RequestInit = {},
): Promise<Response> {
  const url = `${API_BASE}${path}`;

  const { data: { session } } = await supabase.auth.getSession();

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string, string> ?? {}),
  };

  if (session?.access_token) {
    headers['Authorization'] = `Bearer ${session.access_token}`;
  }

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const text = await response.text().catch(() => response.statusText);
    throw new ApiError(response.status, text || `HTTP ${response.status}`);
  }

  return response;
}

/**
 * Fetch and parse JSON response.
 */
export async function apiJson<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const response = await apiFetch(path, options);
  return response.json() as Promise<T>;
}

/**
 * Fetch a binary response and trigger a browser file download.
 */
export async function downloadBlob(
  path: string,
  filename: string,
  options: RequestInit = {},
): Promise<void> {
  const response = await apiFetch(path, options);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  window.URL.revokeObjectURL(url);
}
