import { _ as sanitize_props, $ as spread_props, a0 as slot, a1 as ensure_array_like, a6 as attr_style, a2 as attr, a3 as stringify } from "../../../../chunks/index2.js";
import { P as Page_header } from "../../../../chunks/page-header.js";
import { M as Modal } from "../../../../chunks/modal.js";
import { S as Status_badge } from "../../../../chunks/status-badge.js";
import { E as Empty_state } from "../../../../chunks/empty-state.js";
import { I as Icon } from "../../../../chunks/theme-toggle.js";
import { C as Cpu } from "../../../../chunks/cpu.js";
import { D as Download } from "../../../../chunks/download.js";
import { T as Trash_2 } from "../../../../chunks/trash-2.js";
import { e as escape_html } from "../../../../chunks/context.js";
function Clock($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 6v6l4 2" }],
    ["circle", { "cx": "12", "cy": "12", "r": "10" }]
  ];
  Icon($$renderer, spread_props([
    { name: "clock" },
    $$sanitized_props,
    {
      /**
       * @component @name Clock
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgNnY2bDQgMiIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/clock
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
function File_code($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"
      }
    ],
    ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
    ["path", { "d": "M10 12.5 8 15l2 2.5" }],
    ["path", { "d": "m14 12.5 2 2.5-2 2.5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-code" },
    $$sanitized_props,
    {
      /**
       * @component @name FileCode
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNiAyMmEyIDIgMCAwIDEtMi0yVjRhMiAyIDAgMCAxIDItMmg4YTIuNCAyLjQgMCAwIDEgMS43MDQuNzA2bDMuNTg4IDMuNTg4QTIuNCAyLjQgMCAwIDEgMjAgOHYxMmEyIDIgMCAwIDEtMiAyeiIgLz4KICA8cGF0aCBkPSJNMTQgMnY1YTEgMSAwIDAgMCAxIDFoNSIgLz4KICA8cGF0aCBkPSJNMTAgMTIuNSA4IDE1bDIgMi41IiAvPgogIDxwYXRoIGQ9Im0xNCAxMi41IDIgMi41LTIgMi41IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/file-code
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
function Hard_drive($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["line", { "x1": "22", "x2": "2", "y1": "12", "y2": "12" }],
    [
      "path",
      {
        "d": "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"
      }
    ],
    ["line", { "x1": "6", "x2": "6.01", "y1": "16", "y2": "16" }],
    [
      "line",
      { "x1": "10", "x2": "10.01", "y1": "16", "y2": "16" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "hard-drive" },
    $$sanitized_props,
    {
      /**
       * @component @name HardDrive
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8bGluZSB4MT0iMjIiIHgyPSIyIiB5MT0iMTIiIHkyPSIxMiIgLz4KICA8cGF0aCBkPSJNNS40NSA1LjExIDIgMTJ2NmEyIDIgMCAwIDAgMiAyaDE2YTIgMiAwIDAgMCAyLTJ2LTZsLTMuNDUtNi44OUEyIDIgMCAwIDAgMTYuNzYgNEg3LjI0YTIgMiAwIDAgMC0xLjc5IDEuMTF6IiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+CiAgPGxpbmUgeDE9IjEwIiB4Mj0iMTAuMDEiIHkxPSIxNiIgeTI9IjE2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/hard-drive
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
function Package($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"
      }
    ],
    ["path", { "d": "M12 22V12" }],
    ["polyline", { "points": "3.29 7 12 12 20.71 7" }],
    ["path", { "d": "m7.5 4.27 9 5.15" }]
  ];
  Icon($$renderer, spread_props([
    { name: "package" },
    $$sanitized_props,
    {
      /**
       * @component @name Package
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTEgMjEuNzNhMiAyIDAgMCAwIDIgMGw3LTRBMiAyIDAgMCAwIDIxIDE2VjhhMiAyIDAgMCAwLTEtMS43M2wtNy00YTIgMiAwIDAgMC0yIDBsLTcgNEEyIDIgMCAwIDAgMyA4djhhMiAyIDAgMCAwIDEgMS43M3oiIC8+CiAgPHBhdGggZD0iTTEyIDIyVjEyIiAvPgogIDxwb2x5bGluZSBwb2ludHM9IjMuMjkgNyAxMiAxMiAyMC43MSA3IiAvPgogIDxwYXRoIGQ9Im03LjUgNC4yNyA5IDUuMTUiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/package
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
function Upload($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 3v12" }],
    ["path", { "d": "m17 8-5-5-5 5" }],
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "upload" },
    $$sanitized_props,
    {
      /**
       * @component @name Upload
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgM3YxMiIgLz4KICA8cGF0aCBkPSJtMTcgOC01LTUtNSA1IiAvPgogIDxwYXRoIGQ9Ik0yMSAxNXY0YTIgMiAwIDAgMS0yIDJINWEyIDIgMCAwIDEtMi0ydi00IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/upload
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
    let firmwares = [
      {
        id: "1",
        name: "Edge Core Firmware",
        version: "2.4.1",
        size: "24.5 MB",
        uploadedAt: /* @__PURE__ */ new Date("2025-01-05"),
        status: "available",
        targetDevices: ["Edge Gateway", "Node Controller"],
        checksum: "sha256:a1b2c3d4e5f6..."
      },
      {
        id: "2",
        name: "Sensor Module",
        version: "1.8.3",
        size: "8.2 MB",
        uploadedAt: /* @__PURE__ */ new Date("2025-01-02"),
        status: "deploying",
        targetDevices: ["Temperature Sensor", "Humidity Sensor"],
        checksum: "sha256:f6e5d4c3b2a1..."
      },
      {
        id: "3",
        name: "Network Bridge",
        version: "3.1.0",
        size: "15.7 MB",
        uploadedAt: /* @__PURE__ */ new Date("2024-12-20"),
        status: "available",
        targetDevices: ["Bridge Module"],
        checksum: "sha256:1a2b3c4d5e6f..."
      },
      {
        id: "4",
        name: "Legacy Controller",
        version: "1.2.0",
        size: "12.1 MB",
        uploadedAt: /* @__PURE__ */ new Date("2024-06-15"),
        status: "deprecated",
        targetDevices: ["Legacy Gateway"],
        checksum: "sha256:6f5e4d3c2b1a..."
      }
    ];
    let showUploadModal = false;
    let newFirmwareName = "";
    let newFirmwareVersion = "";
    function formatDate(date) {
      return new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(date);
    }
    $$renderer2.push(`<div class="space-y-6">`);
    Page_header($$renderer2, {
      title: "Gestión de Firmware",
      description: "Administra las versiones de firmware para tus dispositivos IoT"
    });
    $$renderer2.push(`<!----> <div class="flex items-center justify-between animate-slide-in"><div class="flex items-center gap-3"><div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30">`);
    Package($$renderer2, { class: "h-4 w-4 text-primary" });
    $$renderer2.push(`<!----> <span class="text-sm text-muted-foreground">Total:</span> <span class="font-bold text-card-foreground">${escape_html(firmwares.length)} versiones</span></div> <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5"><span class="h-2 w-2 rounded-full bg-success"></span> <span class="text-sm font-semibold text-success">${escape_html(firmwares.filter((f) => f.status === "available").length)} disponibles</span></div></div> <button class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm">`);
    Upload($$renderer2, { class: "h-4 w-4" });
    $$renderer2.push(`<!----> Subir Firmware</button></div> `);
    if (firmwares.length === 0) {
      $$renderer2.push("<!--[0-->");
      Empty_state($$renderer2, {
        icon: Hard_drive,
        title: "Sin firmware",
        description: "No hay versiones de firmware cargadas. Sube una nueva versión para comenzar.",
        actionLabel: "Subir Firmware",
        onAction: () => showUploadModal = true
      });
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="grid gap-4 lg:grid-cols-2"><!--[-->`);
      const each_array = ensure_array_like(firmwares);
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let firmware = each_array[i];
        $$renderer2.push(`<div class="stagger-item card-interactive group p-6"${attr_style(`animation-delay: ${stringify(i * 0.05)}s`)}><div class="flex items-start justify-between"><div class="flex items-center gap-4"><div class="relative"><div class="absolute inset-0 rounded-2xl bg-primary/20 blur-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div> <div class="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-transform duration-300 group-hover:scale-110">`);
        Cpu($$renderer2, { class: "h-7 w-7 text-primary" });
        $$renderer2.push(`<!----></div></div> <div><div class="flex items-center gap-3"><h3 class="font-semibold text-card-foreground">${escape_html(firmware.name)}</h3> <span class="rounded-lg bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">v${escape_html(firmware.version)}</span></div> <div class="mt-1">`);
        Status_badge($$renderer2, { status: firmware.status });
        $$renderer2.push(`<!----></div></div></div></div> <div class="mt-5 grid grid-cols-2 gap-3"><div class="rounded-xl bg-muted/30 p-4 transition-colors duration-200 hover:bg-muted/50"><div class="flex items-center gap-2 text-xs text-muted-foreground">`);
        File_code($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----> Tamaño</div> <p class="mt-1.5 font-semibold text-card-foreground">${escape_html(firmware.size)}</p></div> <div class="rounded-xl bg-muted/30 p-4 transition-colors duration-200 hover:bg-muted/50"><div class="flex items-center gap-2 text-xs text-muted-foreground">`);
        Clock($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----> Subido</div> <p class="mt-1.5 font-semibold text-card-foreground">${escape_html(formatDate(firmware.uploadedAt))}</p></div></div> `);
        if (firmware.targetDevices.length > 0) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="mt-4"><p class="text-xs text-muted-foreground mb-2">Dispositivos compatibles:</p> <div class="flex flex-wrap gap-1.5"><!--[-->`);
          const each_array_1 = ensure_array_like(firmware.targetDevices);
          for (let $$index = 0, $$length2 = each_array_1.length; $$index < $$length2; $$index++) {
            let device = each_array_1[$$index];
            $$renderer2.push(`<span class="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors duration-200 hover:bg-primary/10 hover:text-primary">${escape_html(device)}</span>`);
          }
          $$renderer2.push(`<!--]--></div></div>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <div class="mt-5 flex gap-2 opacity-0 transition-all duration-300 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0"><button class="btn-primary flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs">`);
        Download($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----> Descargar</button> `);
        if (firmware.status !== "deprecated") {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<button class="flex items-center justify-center rounded-xl border border-border bg-card px-4 py-2.5 text-xs font-medium text-muted-foreground transition-all duration-200 hover:bg-warning/10 hover:text-warning hover:border-warning/30">Deprecar</button>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--> <button class="flex items-center justify-center rounded-xl border border-border bg-card px-4 py-2.5 text-destructive transition-all duration-200 hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20">`);
        Trash_2($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----></button></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Modal($$renderer2, {
      open: showUploadModal,
      title: "Subir Nuevo Firmware",
      onClose: () => showUploadModal = false,
      children: ($$renderer3) => {
        $$renderer3.push(`<form class="space-y-5"><div class="space-y-2"><label for="firmware-name" class="block text-sm font-medium text-card-foreground">Nombre del Firmware</label> <input id="firmware-name" type="text"${attr("value", newFirmwareName)} placeholder="Edge Core Firmware..." class="input-field" required=""/></div> <div class="space-y-2"><label for="firmware-version" class="block text-sm font-medium text-card-foreground">Versión</label> <input id="firmware-version" type="text"${attr("value", newFirmwareVersion)} placeholder="1.0.0" class="input-field font-mono" required=""/></div> <div class="space-y-2"><label for="firmware-file" class="block text-sm font-medium text-card-foreground">Archivo de Firmware</label> <div class="relative"><input type="file" accept=".bin,.hex,.fw" class="hidden" id="firmware-file"/> <label for="firmware-file" class="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed border-input bg-muted/20 p-8 transition-all duration-200 hover:border-primary hover:bg-primary/5"><div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">`);
        Upload($$renderer3, { class: "h-6 w-6 text-primary" });
        $$renderer3.push(`<!----></div> <div class="text-center">`);
        {
          $$renderer3.push("<!--[-1-->");
          $$renderer3.push(`<p class="text-sm font-medium text-card-foreground">Click para seleccionar o arrastra un archivo</p> <p class="text-xs text-muted-foreground mt-1">.bin, .hex, .fw</p>`);
        }
        $$renderer3.push(`<!--]--></div></label></div></div> <div class="flex gap-3 pt-2"><button type="button" class="btn-secondary flex-1 rounded-xl py-3 text-sm">Cancelar</button> <button type="submit" class="btn-primary flex-1 rounded-xl py-3 text-sm">Subir Firmware</button></div></form>`);
      }
    });
    $$renderer2.push(`<!---->`);
  });
}
export {
  _page as default
};
