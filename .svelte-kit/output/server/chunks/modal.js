import { _ as sanitize_props, $ as spread_props, a0 as slot, a4 as attr_class, a3 as stringify } from "./index2.js";
import { I as Icon } from "./theme-toggle.js";
import { e as escape_html } from "./context.js";
function X($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M18 6 6 18" }],
    ["path", { "d": "m6 6 12 12" }]
  ];
  Icon($$renderer, spread_props([
    { name: "x" },
    $$sanitized_props,
    {
      /**
       * @component @name X
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTggNiA2IDE4IiAvPgogIDxwYXRoIGQ9Im02IDYgMTIgMTIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/x
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
function Modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let {
      children,
      open = false,
      title,
      maxWidth = "max-w-lg",
      onClose
    } = $$props;
    if (open) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"><div class="absolute inset-0 bg-background/80 backdrop-blur-md cursor-pointer" role="button" tabindex="-1" aria-label="Close modal"></div> <div${attr_class(`relative z-10 m-auto w-full ${stringify(maxWidth)} max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-black/20 animate-scale-in`)}><div class="flex items-center justify-between mb-5"><h2 class="text-lg font-semibold text-card-foreground">${escape_html(title)}</h2> <button type="button" class="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive hover:rotate-90 active:scale-90" aria-label="Close">`);
      X($$renderer2, { class: "h-5 w-5" });
      $$renderer2.push(`<!----></button></div> `);
      if (children) {
        $$renderer2.push("<!--[0-->");
        children($$renderer2);
        $$renderer2.push(`<!---->`);
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></div></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]-->`);
  });
}
export {
  Modal as M
};
