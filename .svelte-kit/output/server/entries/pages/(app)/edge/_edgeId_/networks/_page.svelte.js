import { _ as sanitize_props, $ as spread_props, a0 as slot, a5 as store_get, a1 as ensure_array_like, a4 as attr_class, a2 as attr, a7 as unsubscribe_stores, Z as derived } from "../../../../../../chunks/index2.js";
import { e as escape_html } from "../../../../../../chunks/context.js";
import { e as edges } from "../../../../../../chunks/edges.js";
import { A as Arrow_left, n as networks, a as networksLoading } from "../../../../../../chunks/networks.js";
import "@sveltejs/kit/internal";
import "../../../../../../chunks/exports.js";
import "../../../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../../../chunks/state.svelte.js";
import { p as page } from "../../../../../../chunks/stores.js";
import { P as Page_header } from "../../../../../../chunks/page-header.js";
import { E as Empty_state } from "../../../../../../chunks/empty-state.js";
import { M as Modal } from "../../../../../../chunks/modal.js";
import { P as Plus } from "../../../../../../chunks/plus.js";
import { L as Loader } from "../../../../../../chunks/loader.js";
import { I as Icon } from "../../../../../../chunks/theme-toggle.js";
import { A as Arrow_right } from "../../../../../../chunks/arrow-right.js";
import { T as Trash_2 } from "../../../../../../chunks/trash-2.js";
function Cloud_upload($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 13v8" }],
    [
      "path",
      {
        "d": "M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"
      }
    ],
    ["path", { "d": "m8 17 4-4 4 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "cloud-upload" },
    $$sanitized_props,
    {
      /**
       * @component @name CloudUpload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTN2OCIgLz4KICA8cGF0aCBkPSJNNCAxNC44OTlBNyA3IDAgMSAxIDE1LjcxIDhoMS43OWE0LjUgNC41IDAgMCAxIDIuNSA4LjI0MiIgLz4KICA8cGF0aCBkPSJtOCAxNyA0LTQgNCA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/cloud-upload
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
function Toggle_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "9", "cy": "12", "r": "3" }],
    [
      "rect",
      { "width": "20", "height": "14", "x": "2", "y": "5", "rx": "7" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "toggle-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ToggleLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSI5IiBjeT0iMTIiIHI9IjMiIC8+CiAgPHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiB4PSIyIiB5PSI1IiByeD0iNyIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/toggle-left
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
function Toggle_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "15", "cy": "12", "r": "3" }],
    [
      "rect",
      { "width": "20", "height": "14", "x": "2", "y": "5", "rx": "7" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "toggle-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ToggleRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxNSIgY3k9IjEyIiByPSIzIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIxNCIgeD0iMiIgeT0iNSIgcng9IjciIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/toggle-right
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
function Wifi($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20h.01" }],
    ["path", { "d": "M2 8.82a15 15 0 0 1 20 0" }],
    ["path", { "d": "M5 12.859a10 10 0 0 1 14 0" }],
    ["path", { "d": "M8.5 16.429a5 5 0 0 1 7 0" }]
  ];
  Icon($$renderer, spread_props([
    { name: "wifi" },
    $$sanitized_props,
    {
      /**
       * @component @name Wifi
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjBoLjAxIiAvPgogIDxwYXRoIGQ9Ik0yIDguODJhMTUgMTUgMCAwIDEgMjAgMCIgLz4KICA8cGF0aCBkPSJNNSAxMi44NTlhMTAgMTAgMCAwIDEgMTQgMCIgLz4KICA8cGF0aCBkPSJNOC41IDE2LjQyOWE1IDUgMCAwIDEgNyAwIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/wifi
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let edgeId = derived(() => store_get($$store_subs ??= {}, "$page", page).params.edgeId);
    let currentEdge = derived(() => store_get($$store_subs ??= {}, "$edges", edges).find((e) => e.edgeId === edgeId()));
    let showCreateNetworkModal = false;
    let newNetworkId = "";
    let newNetworkName = "";
    let newNetworkDescription = "";
    let newNetworkLocation = "";
    let showDeleteNetworkModal = false;
    let showFirmwareModal = false;
    $$renderer2.push(`<div class="space-y-6">`);
    if (edgeId()) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center gap-4"><button class="flex items-center gap-2 text-sm text-muted-foreground transition-all duration-200 hover:text-foreground hover:gap-3 group">`);
      Arrow_left($$renderer2, {
        class: "h-4 w-4 transition-transform group-hover:-translate-x-1"
      });
      $$renderer2.push(`<!----> Volver a Edge Devices</button></div> `);
      Page_header($$renderer2, {
        title: "Redes",
        description: `Gestiona las redes asociadas al dispositivo ${currentEdge()?.name ?? edgeId()}`
      });
      $$renderer2.push(`<!----> <div class="card-interactive p-6 animate-fade-in"><div class="flex items-center justify-between"><div><h3 class="text-xl font-bold text-card-foreground">Redes Activas</h3> <p class="text-sm text-muted-foreground mt-1">${escape_html(store_get($$store_subs ??= {}, "$networks", networks).length)} redes configuradas</p></div> <button class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm">`);
      Plus($$renderer2, { class: "h-4 w-4" });
      $$renderer2.push(`<!----> Nueva Red</button></div></div> `);
      if (store_get($$store_subs ??= {}, "$networksLoading", networksLoading)) {
        $$renderer2.push("<!--[0-->");
        $$renderer2.push(`<div class="flex items-center justify-center py-20 text-muted-foreground gap-3">`);
        Loader($$renderer2, { class: "h-6 w-6 animate-spin" });
        $$renderer2.push(`<!----> <span class="text-sm">Cargando redes...</span></div>`);
      } else if (store_get($$store_subs ??= {}, "$networks", networks).length === 0) {
        $$renderer2.push("<!--[1-->");
        Empty_state($$renderer2, {
          icon: Wifi,
          title: "Sin redes configuradas",
          description: "Este Edge no tiene redes asociadas. Crea una nueva red para comenzar.",
          actionLabel: "Crear Red",
          onAction: () => showCreateNetworkModal = true
        });
      } else {
        $$renderer2.push("<!--[-1-->");
        $$renderer2.push(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
        const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$networks", networks));
        for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
          let network = each_array[$$index];
          $$renderer2.push(`<div class="card-interactive group p-5 flex flex-col h-full"><div class="flex items-start justify-between"><div class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/10">`);
          Wifi($$renderer2, { class: "h-5 w-5 text-accent" });
          $$renderer2.push(`<!----></div> <span${attr_class(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${network.active ? "bg-success/10 text-success border border-success/20" : "bg-muted text-muted-foreground border border-border"}`)}><span${attr_class(`h-1.5 w-1.5 rounded-full ${network.active ? "bg-success" : "bg-muted-foreground"}`)}></span> ${escape_html(network.active ? "Activa" : "Inactiva")}</span></div> <div class="flex-1"><h4 class="mt-4 font-semibold text-lg text-card-foreground">${escape_html(network.name)}</h4> <p class="text-xs text-muted-foreground font-mono mt-0.5">ID: ${escape_html(network.networkId)}</p> <div class="mt-4 space-y-2 text-sm bg-muted/40 p-3 rounded-lg"><div class="flex justify-between items-center"><span class="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Hubs</span> <div class="flex items-center justify-center bg-primary/10 text-primary font-bold px-2.5 py-0.5 rounded-full">${escape_html(network.hubCount)}</div></div></div></div> <div class="mt-5 border-t border-border pt-4"><button class="w-full btn-primary flex flex-1 items-center justify-between gap-1.5 rounded-lg py-2.5 px-4 text-xs font-semibold mb-2"><span>Ver Hubs</span> `);
          Arrow_right($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----></button> <button class="w-full flex items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-xs mb-2 transition-all duration-200 ease-out active:scale-[0.98] font-medium bg-black border border-white text-white shadow-[0_0_8px_rgba(255,255,255,0.4)] hover:shadow-[0_0_12px_rgba(255,255,255,0.6)] hover:bg-neutral-900">`);
          Cloud_upload($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----> Actualizar Firmware</button> <div class="flex gap-2"><button${attr("title", network.active ? "Desactivar red" : "Activar red")} class="btn-secondary flex-1 flex items-center justify-center gap-1.5 rounded-lg py-2 text-xs">`);
          if (network.active) {
            $$renderer2.push("<!--[0-->");
            Toggle_right($$renderer2, { class: "h-4 w-4 text-success" });
            $$renderer2.push(`<!----> Desactivar`);
          } else {
            $$renderer2.push("<!--[-1-->");
            Toggle_left($$renderer2, { class: "h-4 w-4" });
            $$renderer2.push(`<!----> Activar`);
          }
          $$renderer2.push(`<!--]--></button> <button class="flex flex-none items-center justify-center rounded-lg border border-border bg-card px-4 py-2 text-destructive transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20">`);
          Trash_2($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----></button></div></div></div>`);
        }
        $$renderer2.push(`<!--]--></div>`);
      }
      $$renderer2.push(`<!--]-->`);
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="flex flex-col items-center justify-center h-64 text-muted-foreground"><p>Dispositivo Edge no encontrado o no seleccionado.</p> <button class="mt-4 btn-secondary rounded-lg px-4 py-2">Volver</button></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Modal($$renderer2, {
      open: showCreateNetworkModal,
      title: "Añadir Nueva Red",
      onClose: () => showCreateNetworkModal = false,
      children: ($$renderer3) => {
        $$renderer3.push(`<form class="space-y-4 px-1"><div class="space-y-1.5"><label for="new-network-id" class="block text-sm font-medium text-card-foreground">ID de la Red</label> <input id="new-network-id" type="text"${attr("value", newNetworkId)} class="input-field font-mono" required="" placeholder="RED-001"/></div> <div class="space-y-1.5"><label for="new-network-name" class="block text-sm font-medium text-card-foreground">Nombre</label> <input id="new-network-name" type="text"${attr("value", newNetworkName)} class="input-field" required="" placeholder="Red de Sensores Planta A"/></div> <div class="space-y-1.5"><label for="new-network-desc" class="block text-sm font-medium text-card-foreground">Descripción</label> <input id="new-network-desc" type="text"${attr("value", newNetworkDescription)} class="input-field" placeholder="Red encargada de..."/></div> <div class="space-y-1.5"><label for="new-network-loc" class="block text-sm font-medium text-card-foreground">Ubicación</label> <input id="new-network-loc" type="text"${attr("value", newNetworkLocation)} class="input-field" placeholder="Planta Baja"/></div> `);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> <div class="flex gap-3 pt-6 pb-2"><button type="button" class="btn-secondary flex-1 rounded-xl py-3 text-sm font-medium">Cancelar</button> <button type="submit"${attr("disabled", store_get($$store_subs ??= {}, "$networksLoading", networksLoading), true)} class="btn-primary flex-1 rounded-xl py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-60">`);
        if (store_get($$store_subs ??= {}, "$networksLoading", networksLoading)) {
          $$renderer3.push("<!--[0-->");
          Loader($$renderer3, { class: "h-4 w-4 animate-spin" });
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> Crear Red</button></div></form>`);
      }
    });
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      open: showFirmwareModal,
      title: "Actualización de Firmware",
      onClose: () => showFirmwareModal = false,
      children: ($$renderer3) => {
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      open: showDeleteNetworkModal,
      title: "Protección de Borrado",
      onClose: () => showDeleteNetworkModal = false,
      children: ($$renderer3) => {
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!---->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
