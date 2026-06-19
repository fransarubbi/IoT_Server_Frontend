import "clsx";
import { A as API_BASE, s as supabase } from "./api.js";
import { g as goto } from "./client.js";
import { fetchEventSource } from "@microsoft/fetch-event-source";
import { b as notificationsActions } from "./notifications.js";
import { b as edgeStates } from "./edges.js";
let sseAbortController = null;
function initSSE(token) {
  if (sseAbortController) {
    sseAbortController.abort();
  }
  sseAbortController = new AbortController();
  fetchEventSource(`${API_BASE}/stream`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    },
    signal: sseAbortController.signal,
    onmessage(ev) {
      if (ev.event === "EDGE_STATE") {
        try {
          const data = JSON.parse(ev.data);
          if (data.edgeId && data.state) {
            edgeStates.update((s) => ({ ...s, [data.edgeId]: data.state }));
          }
        } catch (e) {
          console.error("Error parsing EDGE_STATE", e);
        }
      } else if (ev.event === "NOTIFICATION") {
        try {
          const data = JSON.parse(ev.data);
          notificationsActions.add(data);
        } catch (e) {
          console.error("Error parsing NOTIFICATION", e);
        }
      }
    },
    onerror(err) {
      console.error("SSE Error:", err);
      throw err;
    }
  });
}
function closeSSE() {
  if (sseAbortController) {
    sseAbortController.abort();
    sseAbortController = null;
  }
}
function fullName(p) {
  return `${p.first_name} ${p.last_name}`.trim();
}
function initials(p) {
  const f = p.first_name?.charAt(0) ?? "";
  const l = p.last_name?.charAt(0) ?? "";
  return (f + l).toUpperCase() || "U";
}
class AuthState {
  session = null;
  profile = null;
  loading = true;
  get isAuthenticated() {
    return !!this.session && !!this.profile;
  }
}
const auth = new AuthState();
async function fetchProfile(userId) {
  const { data, error } = await supabase.from("users").select("id, email, first_name, last_name, role, is_active, last_login_at, created_at").eq("id", userId).single();
  if (error) {
    throw new Error("PROFILE_NOT_FOUND");
  }
  return data;
}
async function initAuth() {
  const { data } = await supabase.auth.getSession();
  if (data.session) {
    try {
      const userProfile = await fetchProfile(data.session.user.id);
      if (userProfile.is_active) {
        auth.session = data.session;
        auth.profile = userProfile;
        initSSE(data.session.access_token);
      } else {
        await supabase.auth.signOut();
      }
    } catch {
      await supabase.auth.signOut();
    }
  }
  auth.loading = false;
  supabase.auth.onAuthStateChange(async (event, newSession) => {
    if (event === "SIGNED_OUT" || !newSession) {
      auth.session = null;
      auth.profile = null;
      closeSSE();
      if (typeof window !== "undefined" && window.location.pathname !== "/login") {
        goto();
      }
      return;
    }
    if (event === "TOKEN_REFRESHED" && newSession) {
      auth.session = newSession;
      initSSE(newSession.access_token);
    }
    if (event === "SIGNED_IN" && newSession) {
      auth.session = newSession;
      initSSE(newSession.access_token);
    }
  });
}
export {
  auth as a,
  initials as b,
  fullName as f,
  initAuth as i
};
