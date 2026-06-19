import "clsx";
import { _ as sanitize_props, $ as spread_props, a0 as slot, a1 as ensure_array_like, a2 as attr, a3 as stringify, a4 as attr_class, a5 as store_get, a6 as attr_style, a7 as unsubscribe_stores } from "../../../chunks/index2.js";
import { p as page } from "../../../chunks/stores.js";
import { a as auth, b as initials, f as fullName } from "../../../chunks/auth.svelte.js";
import { I as Icon, T as Theme_toggle } from "../../../chunks/theme-toggle.js";
import { L as Layout_dashboard } from "../../../chunks/layout-dashboard.js";
import { S as Server } from "../../../chunks/server.js";
import { S as Shield_check } from "../../../chunks/shield-check.js";
import { B as Bell } from "../../../chunks/bell.js";
import { e as escape_html } from "../../../chunks/context.js";
import "../../../chunks/api.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../chunks/state.svelte.js";
function Chevron_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "m9 18 6-6-6-6" }]];
  Icon($$renderer, spread_props([
    { name: "chevron-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ChevronRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtOSAxOCA2LTYtNi02IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/chevron-right
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
function Circle_question_mark($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" }],
    ["path", { "d": "M12 17h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-question-mark" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleQuestionMark
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNOS4wOSA5YTMgMyAwIDAgMSA1LjgzIDFjMCAyLTMgMy0zIDMiIC8+CiAgPHBhdGggZD0iTTEyIDE3aC4wMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/circle-question-mark
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
function Log_out($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m16 17 5-5-5-5" }],
    ["path", { "d": "M21 12H9" }],
    ["path", { "d": "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "log-out" },
    $$sanitized_props,
    {
      /**
       * @component @name LogOut
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTYgMTcgNS01LTUtNSIgLz4KICA8cGF0aCBkPSJNMjEgMTJIOSIgLz4KICA8cGF0aCBkPSJNOSAyMUg1YTIgMiAwIDAgMS0yLTJWNWEyIDIgMCAwIDEgMi0yaDQiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/log-out
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
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const navItems = [
      { id: "edge", label: "Edge", icon: Server },
      { id: "certificates", label: "Certificados", icon: Shield_check },
      { id: "notifications", label: "Notificaciones", icon: Bell },
      { id: "help", label: "Ayuda", icon: Circle_question_mark }
    ];
    $$renderer2.push(`<aside class="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border shadow-xl shadow-black/5"><div class="flex h-16 items-center gap-3 border-b border-sidebar-border px-5"><div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">`);
    Layout_dashboard($$renderer2, { class: "h-5 w-5 text-primary-foreground" });
    $$renderer2.push(`<!----> <span class="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span> <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span></span></div> <div><span class="text-lg font-bold text-sidebar-foreground">Manager</span> <span class="block text-[10px] font-medium text-primary uppercase tracking-wider">Dashboard</span></div></div> <nav class="flex-1 overflow-y-auto p-4"><p class="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Panel Principal</p> <div class="space-y-1"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<a${attr("href", `/${stringify(item.id)}`)}${attr_class(`stagger-item group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ease-out ${store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/" + item.id) ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"}`)}${attr_style(`animation-delay: ${stringify(i * 0.05)}s`)}><div class="relative">`);
      if (item.icon) {
        $$renderer2.push("<!--[-->");
        item.icon($$renderer2, {
          class: `h-4.5 w-4.5 transition-transform duration-200 ${store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/" + item.id) ? "" : "group-hover:scale-110"}`
        });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(`</div> <span class="flex-1 text-left">${escape_html(item.label)}</span> `);
      if (store_get($$store_subs ??= {}, "$page", page).url.pathname.startsWith("/" + item.id)) {
        $$renderer2.push("<!--[0-->");
        Chevron_right($$renderer2, { class: "h-4 w-4 animate-slide-in" });
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></a>`);
    }
    $$renderer2.push(`<!--]--></div></nav> <div class="border-t border-sidebar-border p-4 space-y-3"><div class="flex items-center gap-3 rounded-xl bg-sidebar-accent/50 p-3 border border-transparent transition-all duration-200 hover:border-primary/20 hover:bg-sidebar-accent"><div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold shadow-md shadow-primary/20">${escape_html(auth.profile ? initials(auth.profile) : "U")}</div> <div class="flex-1 min-w-0"><p class="truncate text-sm font-semibold text-sidebar-foreground">${escape_html(auth.profile ? fullName(auth.profile) : "Usuario")}</p> <p class="truncate text-xs text-muted-foreground">${escape_html(auth.profile?.email || "usuario@email.com")}</p></div></div> <div class="flex items-center gap-2">`);
    Theme_toggle($$renderer2);
    $$renderer2.push(`<!----> <button class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary border border-border px-3 py-2.5 text-sm font-medium text-foreground transition-all duration-200 ease-out hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20 active:scale-[0.98]">`);
    Log_out($$renderer2, {
      class: "h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
    });
    $$renderer2.push(`<!----> <span>Cerrar sesión</span></button></div></div></aside>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function _layout($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children } = $$props;
    $$renderer2.push(`<div class="min-h-screen bg-background"><div class="fixed inset-0 pointer-events-none overflow-hidden"><div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div></div> `);
    Sidebar($$renderer2);
    $$renderer2.push(`<!----> <main class="relative ml-64 min-h-screen p-8"><div class="mx-auto max-w-7xl animate-fade-in"><!---->`);
    {
      $$renderer2.push(`<div class="animate-fade-in">`);
      children($$renderer2);
      $$renderer2.push(`<!----></div>`);
    }
    $$renderer2.push(`<!----></div></main></div>`);
  });
}
export {
  _layout as default
};
