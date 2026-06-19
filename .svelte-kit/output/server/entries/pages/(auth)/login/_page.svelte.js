import { _ as sanitize_props, $ as spread_props, a0 as slot, a2 as attr } from "../../../../chunks/index2.js";
import { I as Icon, T as Theme_toggle } from "../../../../chunks/theme-toggle.js";
import "../../../../chunks/api.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "@sveltejs/kit/internal/server";
import "../../../../chunks/state.svelte.js";
import { L as Layout_dashboard } from "../../../../chunks/layout-dashboard.js";
import { E as Eye } from "../../../../chunks/eye.js";
import { A as Arrow_right } from "../../../../chunks/arrow-right.js";
function Lock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "18",
        "height": "11",
        "x": "3",
        "y": "11",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["path", { "d": "M7 11V7a5 5 0 0 1 10 0v4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "lock" },
    $$sanitized_props,
    {
      /**
       * @component @name Lock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMTgiIGhlaWdodD0iMTEiIHg9IjMiIHk9IjExIiByeD0iMiIgcnk9IjIiIC8+CiAgPHBhdGggZD0iTTcgMTFWN2E1IDUgMCAwIDEgMTAgMHY0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/lock
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
function Mail($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" }],
    [
      "rect",
      { "x": "2", "y": "4", "width": "20", "height": "16", "rx": "2" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "mail" },
    $$sanitized_props,
    {
      /**
       * @component @name Mail
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMjIgNy04Ljk5MSA1LjcyN2EyIDIgMCAwIDEtMi4wMDkgMEwyIDciIC8+CiAgPHJlY3QgeD0iMiIgeT0iNCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjE2IiByeD0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/mail
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
    let email = "";
    let password = "";
    let isLoading = false;
    $$renderer2.push(`<div class="relative flex min-h-screen items-center justify-center bg-background p-4 overflow-hidden"><div class="pointer-events-none absolute inset-0"><div class="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse"></div> <div class="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse" style="animation-delay: 1s"></div> <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div></div> <div class="pointer-events-none absolute inset-0 opacity-[0.02]" style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;"></div> <div class="relative w-full max-w-md animate-scale-in"><div class="absolute -top-16 right-0">`);
    Theme_toggle($$renderer2);
    $$renderer2.push(`<!----></div> <div class="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 shadow-2xl shadow-black/10"><div class="flex flex-col items-center text-center"><div class="relative"><div class="absolute inset-0 rounded-2xl bg-primary/30 blur-xl"></div> <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">`);
    Layout_dashboard($$renderer2, { class: "h-8 w-8 text-primary-foreground" });
    $$renderer2.push(`<!----></div></div> <h1 class="mt-6 text-2xl font-bold text-card-foreground">Manager</h1> <p class="mt-2 text-sm text-muted-foreground">Inicia sesión para acceder al panel de control</p></div> <form class="mt-8 space-y-5">`);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <div class="space-y-2"><label for="email" class="block text-sm font-medium text-card-foreground">Correo electrónico</label> <div class="relative group">`);
    Mail($$renderer2, {
      class: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground \n                         transition-colors group-focus-within:text-primary"
    });
    $$renderer2.push(`<!----> <input id="email" type="email"${attr("value", email)} placeholder="correo@gmail.com" class="input-field pl-11" autocomplete="email" required=""${attr("disabled", isLoading, true)}/></div></div> <div class="space-y-2"><label for="password" class="block text-sm font-medium text-card-foreground">Contraseña</label> <div class="relative group">`);
    Lock($$renderer2, {
      class: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground\n                         transition-colors group-focus-within:text-primary"
    });
    $$renderer2.push(`<!----> <input id="password"${attr("type", "password")}${attr("value", password)} placeholder="••••••••" class="input-field pl-11 pr-12" autocomplete="current-password" required=""${attr("disabled", isLoading, true)}/> <button type="button"${attr("aria-label", "Mostrar contraseña")} class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-secondary">`);
    {
      $$renderer2.push("<!--[-1-->");
      Eye($$renderer2, { class: "h-4 w-4" });
    }
    $$renderer2.push(`<!--]--></button></div></div> <button id="login-submit-btn" type="submit"${attr("disabled", isLoading, true)} class="btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50">`);
    {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`Iniciar sesión `);
      Arrow_right($$renderer2, {
        class: "h-4 w-4 transition-transform group-hover:translate-x-1"
      });
      $$renderer2.push(`<!---->`);
    }
    $$renderer2.push(`<!--]--></button></form></div></div></div>`);
  });
}
export {
  _page as default
};
