import { _ as sanitize_props, $ as spread_props, a0 as slot, a5 as store_get, a2 as attr, a1 as ensure_array_like, a4 as attr_class, a3 as stringify, a6 as attr_style, a7 as unsubscribe_stores } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/context.js";
import { P as Page_header } from "../../../../chunks/page-header.js";
import { E as Empty_state } from "../../../../chunks/empty-state.js";
import { n as notifications, a as notificationsLoading } from "../../../../chunks/notifications.js";
import { I as Icon } from "../../../../chunks/theme-toggle.js";
import { L as Loader } from "../../../../chunks/loader.js";
import { R as Refresh_cw, I as Info } from "../../../../chunks/refresh-cw.js";
import { C as Circle_alert } from "../../../../chunks/circle-alert.js";
import { B as Bell } from "../../../../chunks/bell.js";
function Check_check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 7 17l-5-5" }],
    ["path", { "d": "m22 10-7.5 7.5L13 16" }]
  ];
  Icon($$renderer, spread_props([
    { name: "check-check" },
    $$sanitized_props,
    {
      /**
       * @component @name CheckCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA3IDE3bC01LTUiIC8+CiAgPHBhdGggZD0ibTIyIDEwLTcuNSA3LjVMMTMgMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/check-check
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
function Message_square($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "message-square" },
    $$sanitized_props,
    {
      /**
       * @component @name MessageSquare
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjIgMTdhMiAyIDAgMCAxLTIgMkg2LjgyOGEyIDIgMCAwIDAtMS40MTQuNTg2bC0yLjIwMiAyLjIwMkEuNzEuNzEgMCAwIDEgMiAyMS4yODZWNWEyIDIgMCAwIDEgMi0yaDE2YTIgMiAwIDAgMSAyIDJ6IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/message-square
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
function Triangle_alert($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"
      }
    ],
    ["path", { "d": "M12 9v4" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "triangle-alert" },
    $$sanitized_props,
    {
      /**
       * @component @name TriangleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjEuNzMgMTgtOC0xNGEyIDIgMCAwIDAtMy40OCAwbC04IDE0QTIgMiAwIDAgMCA0IDIxaDE2YTIgMiAwIDAgMCAxLjczLTMiIC8+CiAgPHBhdGggZD0iTTEyIDl2NCIgLz4KICA8cGF0aCBkPSJNMTIgMTdoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/triangle-alert
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
    const typeConfig = {
      INFO: {
        icon: Info,
        bgColor: "bg-primary/10",
        iconColor: "text-primary",
        borderColor: "border-l-primary"
      },
      WARNING: {
        icon: Triangle_alert,
        bgColor: "bg-warning/10",
        iconColor: "text-warning",
        borderColor: "border-l-warning"
      },
      ERROR: {
        icon: Circle_alert,
        bgColor: "bg-destructive/10",
        iconColor: "text-destructive",
        borderColor: "border-l-destructive"
      },
      HELLO_WORLD: {
        icon: Message_square,
        bgColor: "bg-success/10",
        iconColor: "text-success",
        borderColor: "border-l-success"
      },
      FIRMWARE_OUTCOME: {
        icon: Refresh_cw,
        bgColor: "bg-indigo-500/10",
        iconColor: "text-indigo-500",
        borderColor: "border-l-indigo-500"
      }
    };
    function formatArgentinaTime(epochSeconds) {
      const date = new Date(Number(epochSeconds) * 1e3);
      const formatter = new Intl.DateTimeFormat("es-AR", {
        timeZone: "America/Argentina/Buenos_Aires",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour12: false
      });
      const parts = formatter.formatToParts(date);
      const getPart = (type) => parts.find((p) => p.type === type)?.value || "";
      return `${getPart("hour")}:${getPart("minute")}:${getPart("second")} ${getPart("day")}/${getPart("month")}/${getPart("year")}`;
    }
    $$renderer2.push(`<div class="space-y-6">`);
    Page_header($$renderer2, {
      title: "Notificaciones",
      description: "Alertas y eventos del sistema IoT"
    });
    $$renderer2.push(`<!----> <div class="flex items-center justify-between animate-slide-in"><div class="flex items-center gap-3">`);
    if (store_get($$store_subs ??= {}, "$notifications", notifications).length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5"><span class="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground animate-pulse">${escape_html(store_get($$store_subs ??= {}, "$notifications", notifications).length)}</span> <span class="text-sm font-semibold text-primary">pendientes</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <div class="flex items-center gap-2">`);
    if (store_get($$store_subs ??= {}, "$notifications", notifications).length > 0) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<button${attr("disabled", store_get($$store_subs ??= {}, "$notificationsLoading", notificationsLoading), true)} class="btn-secondary flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm disabled:opacity-60">`);
      Check_check($$renderer2, { class: "h-4 w-4" });
      $$renderer2.push(`<!----> Marcar todo leído</button>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div></div> `);
    if (store_get($$store_subs ??= {}, "$notificationsLoading", notificationsLoading)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center justify-center py-20 text-muted-foreground gap-3">`);
      Loader($$renderer2, { class: "h-6 w-6 animate-spin" });
      $$renderer2.push(`<!----> <span class="text-sm">Cargando notificaciones...</span></div>`);
    } else if (store_get($$store_subs ??= {}, "$notifications", notifications).length === 0) {
      $$renderer2.push("<!--[1-->");
      Empty_state($$renderer2, {
        icon: Bell,
        title: "Sin notificaciones",
        description: "No tienes notificaciones pendientes. El sistema te alertará cuando haya eventos importantes."
      });
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="space-y-3"><!--[-->`);
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$notifications", notifications));
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let notification = each_array[i];
        const config = typeConfig[notification.type] ?? typeConfig.INFO;
        $$renderer2.push(`<div${attr_class(`stagger-item group relative rounded-2xl border bg-card p-5 transition-all duration-300 hover:shadow-lg border-l-4 ${stringify(config.borderColor)} border-border shadow-md`)}${attr_style(`animation-delay: ${stringify(i * 0.05)}s`)}><div class="flex gap-4"><div${attr_class(`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stringify(config.bgColor)} transition-transform duration-200 group-hover:scale-110`)}>`);
        config.icon($$renderer2, { class: `h-6 w-6 ${stringify(config.iconColor)}` });
        $$renderer2.push(`<!----></div> <div class="flex-1 min-w-0"><div class="flex items-start justify-between gap-2"><div class="flex-1 min-w-0">`);
        if (notification.type === "HELLO_WORLD") {
          $$renderer2.push("<!--[0-->");
          const matchEdge = notification.description.match(/edge_id:\s*(\S+)/);
          const matchTs = notification.description.match(/timestamp:\s*(\d+)/);
          const edgeId = matchEdge ? matchEdge[1] : "Desconocido";
          const timestampStr = matchTs ? matchTs[1] : "0";
          $$renderer2.push(`<h4 class="font-semibold text-card-foreground text-base">Mensaje de Hello World</h4> <div class="mt-1.5 flex flex-col gap-1 text-sm text-muted-foreground"><span><strong class="font-medium">Edge:</strong> ${escape_html(edgeId)}</span> <span><strong class="font-medium">Timestamp:</strong> ${escape_html(formatArgentinaTime(timestampStr))}</span></div>`);
        } else if (notification.type === "FIRMWARE_OUTCOME") {
          $$renderer2.push("<!--[1-->");
          const matchNet = notification.description.match(/network_id:\s*(\S+)/);
          const matchPerc = notification.description.match(/percentage:\s*([\d.]+)/);
          const matchTs = notification.description.match(/timestamp:\s*(\d+)/);
          const networkId = matchNet ? matchNet[1] : "Desconocido";
          const percentage = matchPerc ? matchPerc[1] : "0";
          const timestampStr = matchTs ? matchTs[1] : "0";
          $$renderer2.push(`<h4 class="font-semibold text-card-foreground text-base">Resultado de actualización de firmware remota</h4> <div class="mt-1.5 flex flex-col gap-1 text-sm text-muted-foreground"><span><strong class="font-medium">Red:</strong> ${escape_html(networkId)}</span> <span><strong class="font-medium">Porcentaje de éxito:</strong> ${escape_html(percentage)}%</span> <span><strong class="font-medium">Timestamp:</strong> ${escape_html(formatArgentinaTime(timestampStr))}</span></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<p class="font-medium text-card-foreground leading-relaxed">${escape_html(notification.description)}</p>`);
        }
        $$renderer2.push(`<!--]--></div> <div class="flex shrink-0 items-center gap-1 opacity-0 transition-all duration-200 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"><button class="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:scale-110" title="Marcar como leído">`);
        Check_check($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----></button></div></div></div></div> <div class="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
