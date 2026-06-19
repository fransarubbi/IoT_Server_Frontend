import { _ as sanitize_props, $ as spread_props, a0 as slot, a5 as store_get, a1 as ensure_array_like, a6 as attr_style, a7 as unsubscribe_stores, a2 as attr, a3 as stringify } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/context.js";
import { P as Page_header } from "../../../../chunks/page-header.js";
import { M as Modal } from "../../../../chunks/modal.js";
import { S as Status_badge } from "../../../../chunks/status-badge.js";
import { E as Empty_state } from "../../../../chunks/empty-state.js";
import { e as edges, a as edgesLoading, b as edgeStates } from "../../../../chunks/edges.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { P as Plus } from "../../../../chunks/plus.js";
import { L as Loader } from "../../../../chunks/loader.js";
import { S as Server } from "../../../../chunks/server.js";
import { I as Icon } from "../../../../chunks/theme-toggle.js";
import { T as Trash_2 } from "../../../../chunks/trash-2.js";
import { E as Eye } from "../../../../chunks/eye.js";
import { D as Download } from "../../../../chunks/download.js";
import { R as Refresh_cw, I as Info } from "../../../../chunks/refresh-cw.js";
function Map_pin($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "10", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "map-pin" },
    $$sanitized_props,
    {
      /**
       * @component @name MapPin
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTBjMCA0Ljk5My01LjUzOSAxMC4xOTMtNy4zOTkgMTEuNzk5YTEgMSAwIDAgMS0xLjIwMiAwQzkuNTM5IDIwLjE5MyA0IDE0Ljk5MyA0IDEwYTggOCAwIDAgMSAxNiAwIiAvPgogIDxjaXJjbGUgY3g9IjEyIiBjeT0iMTAiIHI9IjMiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/map-pin
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
function Network($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      { "x": "16", "y": "16", "width": "6", "height": "6", "rx": "1" }
    ],
    [
      "rect",
      { "x": "2", "y": "16", "width": "6", "height": "6", "rx": "1" }
    ],
    [
      "rect",
      { "x": "9", "y": "2", "width": "6", "height": "6", "rx": "1" }
    ],
    ["path", { "d": "M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" }],
    ["path", { "d": "M12 12V8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "network" },
    $$sanitized_props,
    {
      /**
       * @component @name Network
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB4PSIxNiIgeT0iMTYiIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHJ4PSIxIiAvPgogIDxyZWN0IHg9IjIiIHk9IjE2IiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiByeD0iMSIgLz4KICA8cmVjdCB4PSI5IiB5PSIyIiB3aWR0aD0iNiIgaGVpZ2h0PSI2IiByeD0iMSIgLz4KICA8cGF0aCBkPSJNNSAxNnYtM2ExIDEgMCAwIDEgMS0xaDEyYTEgMSAwIDAgMSAxIDF2MyIgLz4KICA8cGF0aCBkPSJNMTIgMTJWOCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/network
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
function infoLabel($$renderer, forId, labelText, infoText) {
  $$renderer.push(`<div class="flex items-center gap-1.5"><label${attr("for", forId)} class="block text-xs font-semibold text-muted-foreground">${escape_html(labelText)}</label> <div class="group relative flex items-center justify-center">`);
  Info($$renderer, {
    class: "h-3.5 w-3.5 text-muted-foreground cursor-help transition-colors hover:text-primary"
  });
  $$renderer.push(`<!----> <div class="pointer-events-none absolute bottom-full left-1/2 z-50 mb-2 w-64 -translate-x-6 scale-95 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100"><div class="rounded-lg bg-popover text-popover-foreground shadow-md border border-border p-3 text-xs text-left leading-relaxed font-normal whitespace-pre-line z-50">${escape_html(infoText)}</div> <div class="absolute -bottom-1.5 left-6 h-3 w-3 -translate-x-1/2 rotate-45 border-b border-r border-border bg-popover z-50"></div></div></div></div>`);
}
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let showCreateEdgeModal = false;
    let showViewEdgeModal = false;
    let showDeleteEdgeModal = false;
    let isSubmitting = false;
    let newEdge = {
      edgeId: "",
      name: "",
      location: "",
      hostServer: "127.0.0.1",
      hostPort: 8080,
      cn: "localhost",
      hostLocal: "127.0.0.1",
      dataBasePath: "/var/lib/edge.db",
      bufferLength: 20,
      logLevel: "INFO",
      maxNumberHandshakeAttempts: 3,
      frequencyMessagesPhase: 5,
      frequencyMessagesSafeMode: 20,
      handshakeTimeLimit: 30,
      phaseTimeLimit: 60,
      safeModeTimeLimit: 150,
      heartbeatBalanceModeTime: 20,
      heartbeatNormalTime: 45,
      heartbeatSafeModeTime: 60
    };
    $$renderer2.push(`<div class="space-y-6">`);
    Page_header($$renderer2, {
      title: "Dispositivos Edge",
      description: "Administra y supervisa tus dispositivos Edge"
    });
    $$renderer2.push(`<!----> <div class="flex items-center justify-between animate-slide-in"><div class="flex items-center gap-3"><div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30"><span class="text-sm text-muted-foreground">Total:</span> <span class="font-bold text-card-foreground">${escape_html(store_get($$store_subs ??= {}, "$edges", edges).length)} edges</span></div></div> <button class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm">`);
    Plus($$renderer2, { class: "h-4 w-4" });
    $$renderer2.push(`<!----> Nuevo Edge</button></div> `);
    if (store_get($$store_subs ??= {}, "$edgesLoading", edgesLoading) && store_get($$store_subs ??= {}, "$edges", edges).length === 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center justify-center py-20 text-muted-foreground gap-3">`);
      Loader($$renderer2, { class: "h-6 w-6 animate-spin" });
      $$renderer2.push(`<!----> <span class="text-sm">Cargando dispositivos...</span></div>`);
    } else if (store_get($$store_subs ??= {}, "$edges", edges).length === 0) {
      $$renderer2.push("<!--[1-->");
      Empty_state($$renderer2, {
        icon: Server,
        title: "Sin Edge Devices",
        description: "No tienes ningún dispositivo Edge configurado. Crea uno para comenzar a gestionar tu infraestructura IoT.",
        actionLabel: "Crear Edge Device",
        onAction: () => showCreateEdgeModal = true,
        children: ($$renderer3) => {
          $$renderer3.push(`<button class="mt-3 flex items-center gap-2 mx-auto text-sm text-muted-foreground hover:text-foreground transition-colors">`);
          Refresh_cw($$renderer3, { class: "h-3.5 w-3.5" });
          $$renderer3.push(`<!----> Reintentar conexión</button>`);
        }
      });
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-3"><!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$edges", edges));
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let edge = each_array[i];
        $$renderer2.push(`<div role="button" tabindex="0" class="stagger-item card-interactive group p-5 text-left w-full cursor-pointer"${attr_style(`animation-delay: ${stringify(i * 0.05)}s`)}><div class="flex items-start justify-between"><div class="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:scale-110 group-hover:from-primary/30">`);
        Server($$renderer2, { class: "h-7 w-7 text-primary" });
        $$renderer2.push(`<!----></div> `);
        Status_badge($$renderer2, {
          status: store_get($$store_subs ??= {}, "$edgeStates", edgeStates)[edge.edgeId] || "Inactive"
        });
        $$renderer2.push(`<!----></div> <h3 class="mt-4 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">${escape_html(edge.name)}</h3> `);
        if (edge.location) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">`);
          Map_pin($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----> ${escape_html(edge.location)}</div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <div class="mt-4 flex items-center justify-between border-t border-border pt-4"><div class="flex items-center gap-1.5 text-sm text-muted-foreground">`);
        Network($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----> <span>Ver redes</span></div> <div class="text-xs text-muted-foreground font-mono">ID: ${escape_html(edge.edgeId)}</div></div> <div class="mt-4 flex justify-end gap-2"><button title="Eliminar" class="flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-destructive transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20">`);
        Trash_2($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----></button> <button title="Ver configuración" class="flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/50">`);
        Eye($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----></button> <button title="Descargar configuración ZIP" class="flex items-center justify-center rounded-lg border border-border bg-card px-3 py-2 text-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:border-primary/50">`);
        Download($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----></button></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>  `);
    Modal($$renderer2, {
      open: showCreateEdgeModal,
      title: "Nuevo Edge Device",
      maxWidth: "max-w-3xl",
      onClose: () => showCreateEdgeModal = false,
      children: ($$renderer3) => {
        $$renderer3.push(`<form class="px-1 text-left"><div class="space-y-6"><div><h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Sistema</h3> <div class="grid grid-cols-2 gap-4"><div class="space-y-1.5">`);
        infoLabel($$renderer3, "create-edgeId", "ID del Edge", "Identificador unico del dispositivo Edge");
        $$renderer3.push(`<!----> <input id="create-edgeId" type="text"${attr("value", newEdge.edgeId)} class="input-field py-1.5 font-mono" required="" placeholder="edge-001"/></div> <div class="space-y-1.5">`);
        infoLabel($$renderer3, "create-name", "Nombre", "Identificacion informal para facilitar reconocimiento de los dispositivos");
        $$renderer3.push(`<!----> <input id="create-name" type="text"${attr("value", newEdge.name)} class="input-field py-1.5" required="" placeholder="Edge Gateway Sur"/></div> <div class="col-span-2 space-y-1.5">`);
        infoLabel($$renderer3, "create-ubic", "Ubicación", "Descripcion de la ubicacion donde esta el dispositivo fisicamente");
        $$renderer3.push(`<!----> <input id="create-ubic" type="text"${attr("value", newEdge.location)} class="input-field py-1.5" placeholder="Datacenter Principal"/></div> <div class="space-y-1.5">`);
        infoLabel($$renderer3, "create-cn", "CN del certificado de router", "Dominio del servidor al que se conecta el dispositivo Edge");
        $$renderer3.push(`<!----> <input id="create-cn" type="text"${attr("value", newEdge.cn)} class="input-field py-1.5 font-mono" placeholder="device.local"/></div> <div class="col-span-2 grid grid-cols-3 gap-3"><div class="space-y-1.5 flex-1">`);
        infoLabel($$renderer3, "create-hostServer", "Host Server", "Direccion IP o Hostname del servidor al que se conecta el dispositivo Edge");
        $$renderer3.push(`<!----> <input id="create-hostServer" type="text"${attr("value", newEdge.hostServer)} class="input-field py-1.5 font-mono"/></div> <div class="space-y-1.5 flex-[0.5]">`);
        infoLabel($$renderer3, "create-port", "Puerto", "Puerto para la conexion gRPC con el servidor (50051)");
        $$renderer3.push(`<!----> <input id="create-port" type="number"${attr("value", newEdge.hostPort)} class="input-field py-1.5 font-mono"/></div> <div class="space-y-1.5 flex-1">`);
        infoLabel($$renderer3, "create-hostLocal", "Host Local", "Direccion IP o Hostname local del dispositivo Edge");
        $$renderer3.push(`<!----> <input id="create-hostLocal" type="text"${attr("value", newEdge.hostLocal)} class="input-field py-1.5 font-mono"/></div></div> <div class="col-span-2 space-y-1.5">`);
        infoLabel($$renderer3, "create-db", "Ruta Base de Datos", "Path para la ubicacion de la base de datos en el almacenamiento del dispositivo Edge");
        $$renderer3.push(`<!----> <input id="create-db" type="text"${attr("value", newEdge.dataBasePath)} class="input-field py-1.5 font-mono text-xs"/></div> <div class="space-y-1.5">`);
        infoLabel($$renderer3, "create-buffer", "Tamaño Buffer", "Tamaño maximo del buffer de procesamiento batch");
        $$renderer3.push(`<!----> <input id="create-buffer" type="number" min="5" max="50"${attr("value", newEdge.bufferLength)} class="input-field py-1.5"/></div> <div class="space-y-1.5">`);
        infoLabel($$renderer3, "create-log", "Log", "Nivel de log del dispositivo Edge");
        $$renderer3.push(`<!----> `);
        $$renderer3.select(
          {
            id: "create-log",
            value: newEdge.logLevel,
            class: "input-field py-1.5 bg-background"
          },
          ($$renderer4) => {
            $$renderer4.option({ value: "DEBUG" }, ($$renderer5) => {
              $$renderer5.push(`Debug`);
            });
            $$renderer4.option({ value: "INFO" }, ($$renderer5) => {
              $$renderer5.push(`Info`);
            });
            $$renderer4.option({ value: "WARN" }, ($$renderer5) => {
              $$renderer5.push(`Warn`);
            });
          }
        );
        $$renderer3.push(`</div></div></div> <div class="border-t border-border"></div> <div><h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Protocolo</h3> <div class="grid grid-cols-2 gap-4 text-xs"><div class="space-y-1">`);
        infoLabel($$renderer3, "p-max-a", "Numero maximo de intentos en handshake (1-14)", "Numero maximo de intentos que hara el Edge para sincronizarse en el handshake con los dispositivos Hub");
        $$renderer3.push(`<!----> <input id="p-max-a" type="number" min="1" max="14"${attr("value", newEdge.maxNumberHandshakeAttempts)} class="input-field py-1"/></div> <div class="space-y-1">`);
        infoLabel($$renderer3, "p-fp", "Frecuencia de envio de mensajes en cualquier fase (seg)", "Cada cuanto tiempo en segundos deben enviarse mensajes cuando el protocolo se encuentra en alguna de las fases");
        $$renderer3.push(`<!----> <input id="p-fp" type="number" min="1"${attr("value", newEdge.frequencyMessagesPhase)} class="input-field py-1"/></div> <div class="space-y-1">`);
        infoLabel($$renderer3, "p-fs", "Frecuencia de envio de mensajes en safe mode (seg)", "Cada cuanto tiempo en segundos deben enviarse mensajes en safe mode");
        $$renderer3.push(`<!----> <input id="p-fs" type="number" min="1"${attr("value", newEdge.frequencyMessagesSafeMode)} class="input-field py-1"/></div> <div class="space-y-1">`);
        infoLabel($$renderer3, "p-th", "Tiempo limite de espera en handshake (15-60seg)", "Tiempo limite que el Edge espera para recibir las confirmaciones tras enviar un mensaje de HandshakeToHub al entrar en estados relacionados al handshake");
        $$renderer3.push(`<!----> <input id="p-th" type="number" min="15" max="60"${attr("value", newEdge.handshakeTimeLimit)} class="input-field py-1"/></div> <div class="space-y-1">`);
        infoLabel($$renderer3, "p-tp", "Tiempo limite de duracion de cualquier fase (30-120seg)", "Es el tiempo máximo asignado para que las fases activas (Alert, Data, Monitor) concluyan. El sistema espera recibir confirmaciones de colas vacías de al menos el 80% de los hubs dentro de este límite de tiempo antes de dar por expirada la fase");
        $$renderer3.push(`<!----> <input id="p-tp" type="number" min="30" max="120"${attr("value", newEdge.phaseTimeLimit)} class="input-field py-1"/></div> <div class="space-y-1">`);
        infoLabel($$renderer3, "p-ts", "Tiempo limite de duracion del modo safe mode (120-300seg)", "Es el tiempo máximo asignado para que el safe mode concluya. El sistema espera recibir confirmaciones de colas vacías de al menos el 70% de los hubs dentro de este límite de tiempo antes de dar por expirado el modo");
        $$renderer3.push(`<!----> <input id="p-ts" type="number" min="120" max="300"${attr("value", newEdge.safeModeTimeLimit)} class="input-field py-1"/></div> <div class="space-y-1">`);
        infoLabel($$renderer3, "p-hbb", "Heartbeat en balance mode (10-40seg)", "Cada cuanto tiempo el Edge envia el mensaje heartbeat a los hubs en estado de balanceo. Debe configurar este mismo tiempo en los dispositivos hubs a traves de la interfaz de configuracion");
        $$renderer3.push(`<!----> <input id="p-hbb" type="number" min="10" max="40"${attr("value", newEdge.heartbeatBalanceModeTime)} class="input-field py-1"/></div> <div class="space-y-1">`);
        infoLabel($$renderer3, "p-hbn", "Heartbeat en normal (30-60seg)", "Cada cuanto tiempo el Edge envia el mensaje heartbeat a los hubs en estado normal. Debe configurar este mismo tiempo en los dispositivos hubs a traves de la interfaz de configuracion");
        $$renderer3.push(`<!----> <input id="p-hbn" type="number" min="30" max="60"${attr("value", newEdge.heartbeatNormalTime)} class="input-field py-1"/></div> <div class="space-y-1 col-span-2">`);
        infoLabel($$renderer3, "p-hbs", "Heartbeat en safe mode (40-80seg)", "Cada cuanto tiempo el Edge envia el mensaje heartbeat a los hubs en safe mode. Debe configurar este mismo tiempo en los dispositivos hubs a traves de la interfaz de configuracion");
        $$renderer3.push(`<!----> <input id="p-hbs" type="number" min="40" max="80"${attr("value", newEdge.heartbeatSafeModeTime)} class="input-field py-1"/></div></div></div> `);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--></div> <div class="flex gap-3 pt-6 pb-2"><button type="button" class="btn-secondary flex-1 rounded-xl py-3 text-sm">Cancelar</button> <button type="submit"${attr("disabled", isSubmitting, true)} class="btn-primary flex-1 rounded-xl py-3 text-sm disabled:opacity-60 flex items-center justify-center gap-2">`);
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> Crear Edge</button></div></form>`);
      }
    });
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      open: showViewEdgeModal,
      title: "Configuración del Edge",
      maxWidth: "max-w-2xl",
      onClose: () => showViewEdgeModal = false,
      children: ($$renderer3) => {
        {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]-->`);
      }
    });
    $$renderer2.push(`<!----> `);
    Modal($$renderer2, {
      open: showDeleteEdgeModal,
      title: "Protección de Borrado",
      onClose: () => showDeleteEdgeModal = false,
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
