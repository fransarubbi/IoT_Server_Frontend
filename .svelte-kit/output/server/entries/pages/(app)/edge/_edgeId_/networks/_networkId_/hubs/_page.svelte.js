import { _ as sanitize_props, $ as spread_props, a0 as slot, a5 as store_get, a1 as ensure_array_like, a4 as attr_class, a7 as unsubscribe_stores, Z as derived, a2 as attr } from "../../../../../../../../chunks/index2.js";
import { e as escape_html } from "../../../../../../../../chunks/context.js";
import { e as edges } from "../../../../../../../../chunks/edges.js";
import { A as Arrow_left, n as networks } from "../../../../../../../../chunks/networks.js";
import { w as writable } from "../../../../../../../../chunks/index.js";
import "../../../../../../../../chunks/api.js";
import { g as goto } from "../../../../../../../../chunks/client.js";
import { p as page } from "../../../../../../../../chunks/stores.js";
import { P as Page_header } from "../../../../../../../../chunks/page-header.js";
import { E as Empty_state } from "../../../../../../../../chunks/empty-state.js";
import { M as Modal } from "../../../../../../../../chunks/modal.js";
import { L as Loader } from "../../../../../../../../chunks/loader.js";
import { C as Cpu } from "../../../../../../../../chunks/cpu.js";
import { E as Eye } from "../../../../../../../../chunks/eye.js";
import { I as Icon } from "../../../../../../../../chunks/theme-toggle.js";
import { C as Circle_alert } from "../../../../../../../../chunks/circle-alert.js";
function Settings($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "settings" },
    $$sanitized_props,
    {
      /**
       * @component @name Settings
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNOS42NzEgNC4xMzZhMi4zNCAyLjM0IDAgMCAxIDQuNjU5IDAgMi4zNCAyLjM0IDAgMCAwIDMuMzE5IDEuOTE1IDIuMzQgMi4zNCAwIDAgMSAyLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMCAwIDMuODMxIDIuMzQgMi4zNCAwIDAgMS0yLjMzIDQuMDMzIDIuMzQgMi4zNCAwIDAgMC0zLjMxOSAxLjkxNSAyLjM0IDIuMzQgMCAwIDEtNC42NTkgMCAyLjM0IDIuMzQgMCAwIDAtMy4zMi0xLjkxNSAyLjM0IDIuMzQgMCAwIDEtMi4zMy00LjAzMyAyLjM0IDIuMzQgMCAwIDAgMC0zLjgzMUEyLjM0IDIuMzQgMCAwIDEgNi4zNSA2LjA1MWEyLjM0IDIuMzQgMCAwIDAgMy4zMTktMS45MTUiIC8+CiAgPGNpcmNsZSBjeD0iMTIiIGN5PSIxMiIgcj0iMyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/settings
       * @see https://lucide.dev/guide/packages/lucide-svelte - Documentation
       *
       * @param {Object} props - Lucide icons props and any valid SVG attribute
       * @returns {FunctionalComponent} Svelte component
       *
       */
      iconNode,
      children: ($$renderer2) => {
        $$renderer2.push(`<!--[-->`);
        slot($$renderer2, $$props, "default", {});
        $$renderer2.push(`<!--]-->`);
      },
      $$slots: { default: true }
    }
  ]));
}
const hubs = writable([]);
const hubsLoading = writable(false);
const hubsError = writable(null);
const hubsSaving = writable(null);
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let edgeId = derived(() => store_get($$store_subs ??= {}, "$page", page).params.edgeId);
    let networkId = derived(() => store_get($$store_subs ??= {}, "$page", page).params.networkId);
    let currentEdge = derived(() => store_get($$store_subs ??= {}, "$edges", edges).find((e) => e.edgeId === edgeId()));
    let currentNetwork = derived(() => store_get($$store_subs ??= {}, "$networks", networks).find((n) => n.networkId === networkId()));
    function goBack() {
      goto(`/edge/${edgeId()}/networks`);
    }
    let showInfoModal = false;
    let showEditModal = false;
    let formHub = {
      hubId: "",
      deviceName: "",
      wifiSsid: "",
      wifiPassword: "",
      mqttUri: "",
      sample: 5,
      energyMode: 1
    };
    $$renderer2.push(`<div class="space-y-6">`);
    if (networkId()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center gap-4"><button class="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground hover:gap-3 group">`);
      Arrow_left($$renderer2, {
        class: "h-4 w-4 transition-transform group-hover:-translate-x-1"
      });
      $$renderer2.push(`<!----> Volver a Redes (${escape_html(currentEdge()?.name ?? edgeId())})</button></div> `);
      Page_header($$renderer2, {
        title: `Hubs de la red: ${currentNetwork()?.name ?? networkId()}`,
        description: "Gestiona y configura los hubs de esta familia de sensores"
      });
      $$renderer2.push(`<!----> <div class="card-interactive p-6 animate-fade-in"><div class="flex items-center justify-between"><div><h3 class="text-xl font-bold text-card-foreground">Hubs Activos</h3> <p class="text-sm text-muted-foreground mt-1">${escape_html(store_get($$store_subs ??= {}, "$hubs", hubs).length)} dispositivos encontrados</p></div></div></div> `);
      if (store_get($$store_subs ??= {}, "$hubsLoading", hubsLoading)) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="flex items-center justify-center py-20 text-muted-foreground gap-3">`);
        Loader($$renderer2, { class: "h-6 w-6 animate-spin" });
        $$renderer2.push(`<!----> <span class="text-sm">Cargando hubs...</span></div>`);
      } else if (store_get($$store_subs ??= {}, "$hubs", hubs).length === 0) {
        $$renderer2.push("<!--[1-->");
        Empty_state($$renderer2, {
          icon: Cpu,
          title: "Sin dispositivos Hub",
          description: "Esta red aún no tiene Hubs asignados. Contacta a un administrador para provisionar uno.",
          actionLabel: "Volver a Redes",
          onAction: goBack
        });
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$hubs", hubs));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let hub = each_array[$$index];
          $$renderer2.push(`<div class="card-interactive group p-5 flex flex-col h-full"><div class="flex items-start justify-between"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10">`);
          Cpu($$renderer2, { class: "h-6 w-6 text-primary" });
          $$renderer2.push(`<!----></div> `);
          if (store_get($$store_subs ??= {}, "$hubsSaving", hubsSaving) === hub.hubId) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<span class="inline-flex items-center gap-1.5 rounded-full bg-warning/10 border border-warning/20 px-2.5 py-1 text-xs font-semibold text-warning">`);
            Loader($$renderer2, { class: "h-3 w-3 animate-spin" });
            $$renderer2.push(`<!----> Enviando…</span>`);
          } else {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`<span class="inline-flex items-center gap-1.5 rounded-full bg-success/10 border border-success/20 px-2.5 py-1 text-xs font-semibold text-success"><span class="h-1.5 w-1.5 rounded-full bg-success"></span> Activo</span>`);
          }
          $$renderer2.push(`<!--]--></div> <div class="mt-4 flex-1"><h4 class="text-2xl font-bold tracking-tight text-card-foreground">${escape_html(hub.hubId)}</h4> <div class="mt-2 space-y-1"><p class="text-sm text-card-foreground/80">${escape_html(hub.deviceName)}</p> <div${attr_class(`inline-block mt-2 px-2.5 py-0.5 rounded-full border ${hub.energyMode === 0 ? "bg-success/10 border-success/20 text-success" : hub.energyMode === 1 ? "bg-blue-500/10 border-blue-500/20 text-blue-500" : hub.energyMode === 2 ? "bg-destructive/10 border-destructive/20 text-destructive" : "bg-accent/10 border-accent/20 text-accent"}`)}><span class="text-[10px] font-medium">Modo Energía: ${escape_html(hub.energyMode === 0 ? "Bajo consumo" : hub.energyMode === 1 ? "Balanceado" : hub.energyMode === 2 ? "Performance" : hub.energyMode)}</span></div></div></div> <div class="mt-6 flex gap-2 border-t border-border pt-4"><button class="btn-secondary flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-medium" aria-label="Ver información del Hub">`);
          Eye($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----> Ver Info</button> <button class="btn-secondary flex items-center justify-center rounded-lg p-2.5 border border-border" aria-label="Configurar Hub">`);
          Settings($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----></button></div></div>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex flex-col items-center justify-center h-64 text-muted-foreground"><p>Red o Edge no encontrados.</p> <button class="mt-4 btn-secondary rounded-lg px-4 py-2">Volver a Inicio</button></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Modal($$renderer2, {
      open: showInfoModal,
      title: "Información del Hub",
      onClose: () => showInfoModal = false,
      children: ($$renderer3) => {
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      open: showEditModal,
      title: `Configurando Hub: ${formHub.hubId}`,
      onClose: () => showEditModal = false,
      children: ($$renderer3) => {
        $$renderer3.push(`<form class="space-y-4 px-1">`);
        if (store_get($$store_subs ??= {}, "$hubsError", hubsError)) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive">`);
          Circle_alert($$renderer3, { class: "h-3.5 w-3.5 shrink-0" });
          $$renderer3.push(`<!----> ${escape_html(store_get($$store_subs ??= {}, "$hubsError", hubsError))}</div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> `);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> <div class="space-y-1.5"><label for="hub-name" class="block text-sm font-medium text-card-foreground">Nombre del dispositivo</label> <input id="hub-name" type="text"${attr("value", formHub.deviceName)} class="input-field" required="" placeholder="Sensor Temperatura Planta 1"/></div> <div class="grid grid-cols-2 gap-3"><div class="space-y-1.5"><label for="hub-ssid" class="block text-sm font-medium text-card-foreground">WIFI SSID</label> <input id="hub-ssid" type="text"${attr("value", formHub.wifiSsid)} class="input-field" required="" placeholder="IoT_Network_5G"/></div> <div class="space-y-1.5"><label for="hub-password" class="block text-sm font-medium text-card-foreground">WIFI Contraseña</label> <input id="hub-password" type="text"${attr("value", formHub.wifiPassword)} class="input-field" required="" placeholder="***********"/></div></div> <div class="space-y-1.5"><label for="hub-mqtt" class="block text-sm font-medium text-card-foreground">MQTT URI</label> <input id="hub-mqtt" type="text"${attr("value", formHub.mqttUri)} class="input-field font-mono" required="" placeholder="mqtt://broker.hivemq.com:1883"/></div> <div class="grid grid-cols-2 gap-3"><div class="space-y-1.5"><label for="hub-sample" class="block text-sm font-medium text-card-foreground">Sample (min)</label> <input id="hub-sample" type="number"${attr("value", formHub.sample)} class="input-field" required="" placeholder="5"/></div> <div class="space-y-1.5"><label for="hub-energy" class="block text-sm font-medium text-card-foreground">Modo Energía</label> `);
        $$renderer3.select(
          {
            id: "hub-energy",
            value: formHub.energyMode,
            class: "input-field"
          },
          ($$renderer4) => {
            $$renderer4.option({ value: 0 }, ($$renderer5) => {
              $$renderer5.push(`Bajo consumo`);
            });
            $$renderer4.option({ value: 1 }, ($$renderer5) => {
              $$renderer5.push(`Balanceado`);
            });
            $$renderer4.option({ value: 2 }, ($$renderer5) => {
              $$renderer5.push(`Performance`);
            });
          }
        );
        $$renderer3.push(`</div></div> <p class="text-xs text-muted-foreground bg-muted/40 border border-border rounded-lg px-3 py-2"><strong>Nota:</strong> La respuesta 202 indica que la solicitud fue aceptada. El servidor esperará hasta 5 minutos la confirmación del hardware.</p> <div class="flex gap-3 pt-6 pb-2"><button type="button" class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">Cancelar</button> <button type="submit"${attr("disabled", store_get($$store_subs ??= {}, "$hubsSaving", hubsSaving) === formHub.hubId, true)} class="btn-primary flex-1 rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-60">`);
        if (store_get($$store_subs ??= {}, "$hubsSaving", hubsSaving) === formHub.hubId) {
          $$renderer3.push("<!--[0-->");
          Loader($$renderer3, { class: "h-4 w-4 animate-spin" });
          $$renderer3.push(`<!----> Enviando…`);
        } else {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`Enviar al Hardware`);
        }
        $$renderer3.push(`<!--]--></button></div></form>`);
      }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
