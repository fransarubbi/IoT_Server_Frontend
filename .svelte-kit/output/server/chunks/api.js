import { createClient } from "@supabase/supabase-js";
const PUBLIC_SUPABASE_URL = "https://drtzymeqjhegqstmxjef.supabase.co";
const PUBLIC_SUPABASE_PUBLISHABLE_KEY = "sb_publishable_0Fa7UN_Upjq45ZdJDVrdNw_wY-UZiAp";
const supabase = createClient(PUBLIC_SUPABASE_URL, PUBLIC_SUPABASE_PUBLISHABLE_KEY);
function resolveApiBase() {
  try {
    const envUrl = "http://localhost:8080/api";
    return envUrl ?? "/api";
  } catch {
    return "/api";
  }
}
const API_BASE = resolveApiBase();
class ApiError extends Error {
  constructor(status, message) {
    super(message);
    this.status = status;
    this.name = "ApiError";
  }
  status;
}
async function apiFetch(path, options = {}) {
  const url = `${API_BASE}${path}`;
  const { data: { session } } = await supabase.auth.getSession();
  const headers = {
    ...options.headers ?? {}
  };
  if (options.body && !headers["Content-Type"] && !(options.body instanceof FormData)) {
    headers["Content-Type"] = "application/json";
  }
  if (session?.access_token) {
    headers["Authorization"] = `Bearer ${session.access_token}`;
  }
  const response = await fetch(url, {
    ...options,
    headers
  });
  if (!response.ok) {
    let errorText = response.statusText;
    try {
      const errorJson = await response.json();
      errorText = errorJson.message || errorJson.error || errorText;
    } catch {
      try {
        const text = await response.text();
        if (text) errorText = text;
      } catch {
      }
    }
    throw new ApiError(response.status, errorText || `HTTP ${response.status}`);
  }
  return response;
}
async function apiJson(path, options = {}) {
  const response = await apiFetch(path, options);
  if (response.status === 204) {
    return void 0;
  }
  return response.json();
}
async function getActiveNotifications() {
  return apiJson("/notifications");
}
async function markNotificationAsRead(id) {
  await apiFetch(`/notifications/${id}/read`, { method: "PATCH" });
}
export {
  API_BASE as A,
  getActiveNotifications as g,
  markNotificationAsRead as m,
  supabase as s
};
