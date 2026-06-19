import { fetchEventSource } from '@microsoft/fetch-event-source';
import { notificationsActions } from '$lib/stores/notifications';
import { edgeStates } from '$lib/stores/edges';
import { API_BASE } from '$lib/services/api';

let sseAbortController: AbortController | null = null;

export function initSSE(token: string) {
  if (sseAbortController) {
    sseAbortController.abort();
  }
  sseAbortController = new AbortController();

  fetchEventSource(`${API_BASE}/stream`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    },
    signal: sseAbortController.signal,
    onmessage(ev) {
      if (ev.event === 'EDGE_STATE') {
        try {
          const data = JSON.parse(ev.data);
          if (data.edgeId && data.state) {
            edgeStates.update(s => ({ ...s, [data.edgeId]: data.state }));
          }
        } catch (e) {
          console.error('Error parsing EDGE_STATE', e);
        }
      } else if (ev.event === 'NOTIFICATION') {
        try {
          const data = JSON.parse(ev.data);
          notificationsActions.add(data);
        } catch (e) {
          console.error('Error parsing NOTIFICATION', e);
        }
      }
    },
    onerror(err) {
      console.error('SSE Error:', err);
      // throw err will trigger retry automatically by fetch-event-source
      // if we return without throwing, it might stop retrying depending on the error
      throw err;
    }
  });
}

export function closeSSE() {
  if (sseAbortController) {
    sseAbortController.abort();
    sseAbortController = null;
  }
}
