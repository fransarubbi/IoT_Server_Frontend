import { _ as sanitize_props, $ as spread_props, a0 as slot, a2 as attr } from "../../../../chunks/index2.js";
import { P as Page_header } from "../../../../chunks/page-header.js";
import "../../../../chunks/api.js";
import { I as Icon } from "../../../../chunks/theme-toggle.js";
import { D as Download } from "../../../../chunks/download.js";
function File_text($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
      }
    ],
    ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
    ["path", { "d": "M10 9H8" }],
    ["path", { "d": "M16 13H8" }],
    ["path", { "d": "M16 17H8" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-text" },
    $$sanitized_props,
    {
      /**
       * @component @name FileText
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAyMmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg4YTIuNCAyLjQgMCAwIDEgMS43MDQuNzA2bDMuNTg4IDMuNTg4QTIuNCAyLjQgMCAwIDEgMjAgOHYxMmEyIDIgMCAwIDEtMiAyeiIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJNMTAgOUg4IiAvPgogIDxwYXRoIGQ9Ik0xNiAxM0g4IiAvPgogIDxwYXRoIGQ9Ik0xNiAxN0g4IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-text
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
    let isDownloading = false;
    $$renderer2.push(`<div class="space-y-6 animate-slide-in">`);
    Page_header($$renderer2, {
      title: "Documentación",
      description: "Centro de ayuda y recursos del sistema"
    });
    $$renderer2.push(`<!----> <div class="max-w-2xl"><div class="rounded-2xl border bg-card text-card-foreground shadow-sm"><div class="p-6"><div class="flex items-start gap-4"><div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">`);
    File_text($$renderer2, { class: "h-6 w-6" });
    $$renderer2.push(`<!----></div> <div class="space-y-4"><div><h3 class="text-lg font-semibold leading-none tracking-tight">Manual del Sistema</h3> <p class="mt-2 text-sm text-muted-foreground leading-relaxed">Descargue la documentación completa del sistema para comprender el funcionamiento del mismo, configuración, despliegue y puesta en marcha.</p></div> `);
    {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--> <button${attr("disabled", isDownloading, true)} class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/25">`);
    {
      $$renderer2.push("<!--[-1-->");
      Download($$renderer2, { class: "h-4 w-4" });
      $$renderer2.push(`<!----> <span>Descargar</span>`);
    }
    $$renderer2.push(`<!--]--></button></div></div></div></div></div></div>`);
  });
}
export {
  _page as default
};
