import { _ as sanitize_props, $ as spread_props, a0 as slot, a5 as store_get, a1 as ensure_array_like, a6 as attr_style, a4 as attr_class, a3 as stringify, a7 as unsubscribe_stores, Z as derived, a2 as attr } from "../../../../chunks/index2.js";
import { e as escape_html } from "../../../../chunks/context.js";
import { P as Page_header } from "../../../../chunks/page-header.js";
import { M as Modal } from "../../../../chunks/modal.js";
import { E as Empty_state } from "../../../../chunks/empty-state.js";
import { w as writable } from "../../../../chunks/index.js";
import "../../../../chunks/api.js";
import { P as Plus } from "../../../../chunks/plus.js";
import { L as Loader } from "../../../../chunks/loader.js";
import { I as Icon } from "../../../../chunks/theme-toggle.js";
import { S as Shield_check } from "../../../../chunks/shield-check.js";
import { C as Circle_alert } from "../../../../chunks/circle-alert.js";
function Circle_check_big($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M21.801 10A10 10 0 1 1 17 3.335" }],
    ["path", { "d": "m9 11 3 3L22 4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-check-big" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleCheckBig
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjEuODAxIDEwQTEwIDEwIDAgMSAxIDE3IDMuMzM1IiAvPgogIDxwYXRoIGQ9Im05IDExIDMgM0wyMiA0IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/circle-check-big
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
function File_key($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M10.65 22H18a2 2 0 0 0 2-2V8a2.4 2.4 0 0 0-.706-1.706l-3.588-3.588A2.4 2.4 0 0 0 14 2H6a2 2 0 0 0-2 2v10.1"
      }
    ],
    ["path", { "d": "M14 2v5a1 1 0 0 0 1 1h5" }],
    ["path", { "d": "m10 15 1 1" }],
    ["path", { "d": "m11 14-4.586 4.586" }],
    ["circle", { "cx": "5", "cy": "20", "r": "2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "file-key" },
    $$sanitized_props,
    {
      /**
       * @component @name FileKey
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuNjUgMjJIMThhMiAyIDAgMCAwIDItMlY4YTIuNCAyLjQgMCAwIDAtLjcwNi0xLjcwNmwtMy41ODgtMy41ODhBMi40IDIuNCAwIDAgMCAxNCAySDZhMiAyIDAgMCAwLTIgMnYxMC4xIiAvPgogIDxwYXRoIGQ9Ik0xNCAydjVhMSAxIDAgMCAwIDEgMWg1IiAvPgogIDxwYXRoIGQ9Im0xMCAxNSAxIDEiIC8+CiAgPHBhdGggZD0ibTExIDE0LTQuNTg2IDQuNTg2IiAvPgogIDxjaXJjbGUgY3g9IjUiIGN5PSIyMCIgcj0iMiIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/file-key
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
function Shield_off($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m2 2 20 20" }],
    [
      "path",
      {
        "d": "M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71"
      }
    ],
    [
      "path",
      {
        "d": "M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "shield-off" },
    $$sanitized_props,
    {
      /**
       * @component @name ShieldOff
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMiAyIDIwIDIwIiAvPgogIDxwYXRoIGQ9Ik01IDVhMSAxIDAgMCAwLTEgMXY3YzAgNSAzLjUgNy41IDcuNjcgOC45NGExIDEgMCAwIDAgLjY3LjAxYzIuMzUtLjgyIDQuNDgtMS45NyA1LjktMy43MSIgLz4KICA8cGF0aCBkPSJNOS4zMDkgMy42NTJBMTIuMjUyIDEyLjI1MiAwIDAgMCAxMS4yNCAyLjI4YTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXY3YTkuNzg0IDkuNzg0IDAgMCAxLS4wOCAxLjI2NCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-off
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
const certificates = writable([]);
const certificatesLoading = writable(false);
const certificatesGenerating = writable(false);
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let showCreateModal = false;
    let revokeConfirmId = null;
    let actionError = null;
    let form = {
      displayName: "",
      deviceType: "EDGE",
      commonName: "",
      organization: "",
      country: "",
      sanDomain: "",
      validityDays: 365
    };
    function resetForm() {
      form = {
        displayName: "",
        deviceType: "EDGE",
        commonName: "",
        organization: "",
        country: "",
        sanDomain: "",
        validityDays: 365
      };
      actionError = null;
    }
    function formatDate(ts) {
      return new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(ts));
    }
    function getDaysUntilExpiry(ts) {
      return Math.ceil((ts - Date.now()) / (1e3 * 60 * 60 * 24));
    }
    const statusConfig = {
      VALID: { color: "text-success", label: "Válido" },
      EXPIRED: { color: "text-destructive", label: "Expirado" },
      REVOKED: { color: "text-muted-foreground", label: "Revocado" }
    };
    let sortedCertificates = derived(() => [
      ...store_get($$store_subs ??= {}, "$certificates", certificates)
    ].sort((a, b) => {
      const order = { "VALID": 1, "REVOKED": 2, "EXPIRED": 3 };
      return (order[a.status] ?? 4) - (order[b.status] ?? 4);
    }));
    $$renderer2.push(`<div class="space-y-6">`);
    Page_header($$renderer2, {
      title: "Certificados Digitales",
      description: "Gestiona los certificados de autenticación mutua del sistema"
    });
    $$renderer2.push(`<!----> <div class="flex items-center justify-between animate-slide-in"><div class="flex items-center gap-3"><div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30"><span class="text-sm text-muted-foreground">Total:</span> <span class="font-bold text-card-foreground">${escape_html(store_get($$store_subs ??= {}, "$certificates", certificates).length)}</span></div> <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5"><span class="h-2 w-2 rounded-full bg-success"></span> <span class="text-sm font-semibold text-success">${escape_html(store_get($$store_subs ??= {}, "$certificates", certificates).filter((c) => c.status === "VALID").length)} válidos</span></div> <div class="flex items-center gap-2 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-2.5"><span class="h-2 w-2 rounded-full bg-destructive"></span> <span class="text-sm font-semibold text-destructive">${escape_html(store_get($$store_subs ??= {}, "$certificates", certificates).filter((c) => c.status === "EXPIRED").length)} expirados</span></div> <div class="flex items-center gap-2 rounded-xl bg-muted/10 border border-border px-4 py-2.5"><span class="h-2 w-2 rounded-full bg-muted-foreground"></span> <span class="text-sm font-semibold text-muted-foreground">${escape_html(store_get($$store_subs ??= {}, "$certificates", certificates).filter((c) => c.status === "REVOKED").length)} revocados</span></div></div> <button class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm">`);
    Plus($$renderer2, { class: "h-4 w-4" });
    $$renderer2.push(`<!----> Generar Certificado</button></div> `);
    if (store_get($$store_subs ??= {}, "$certificatesLoading", certificatesLoading)) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center justify-center py-20 text-muted-foreground gap-3">`);
      Loader($$renderer2, { class: "h-6 w-6 animate-spin" });
      $$renderer2.push(`<!----> <span class="text-sm">Cargando certificados...</span></div>`);
    } else if (store_get($$store_subs ??= {}, "$certificates", certificates).length === 0) {
      $$renderer2.push("<!--[1-->");
      Empty_state($$renderer2, {
        icon: Shield_check,
        title: "Sin certificados",
        description: "No hay certificados mTLS configurados. Genera uno para asegurar las comunicaciones de tu sistema.",
        actionLabel: "Generar Certificado",
        onAction: () => {
          resetForm();
          showCreateModal = true;
        }
      });
    } else {
      $$renderer2.push("<!--[-1-->");
      $$renderer2.push(`<div class="rounded-2xl border border-border bg-card overflow-hidden shadow-sm animate-fade-in"><table class="w-full"><thead><tr class="border-b border-border bg-muted/30"><th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Certificado</th><th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tipo</th><th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estado</th><th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Emisión</th><th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expiración</th><th class="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Acciones</th></tr></thead><tbody class="divide-y divide-border"><!--[-->`);
      const each_array = ensure_array_like(sortedCertificates());
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let cert = each_array[i];
        const sc = statusConfig[cert.status] ?? statusConfig.REVOKED;
        const daysUntil = getDaysUntilExpiry(cert.expirationDate);
        $$renderer2.push(`<tr class="stagger-item group transition-colors hover:bg-muted/20"${attr_style(`animation-delay: ${stringify(i * 0.03)}s`)}><td class="px-6 py-4"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 transition-all duration-200 group-hover:bg-primary/10">`);
        File_key($$renderer2, {
          class: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
        });
        $$renderer2.push(`<!----></div> <div><span class="font-medium text-card-foreground block">${escape_html(cert.displayName)}</span></div></div></td><td class="px-6 py-4"><span class="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-1 text-xs font-medium text-card-foreground capitalize">${escape_html(cert.deviceType)}</span></td><td class="px-6 py-4"><span${attr_class(`text-sm font-semibold ${stringify(sc.color)}`)}>${escape_html(sc.label)}</span></td><td class="px-6 py-4 text-sm text-muted-foreground">${escape_html(formatDate(cert.emissionDate))}</td><td class="px-6 py-4"><div class="text-sm"><span class="text-card-foreground">${escape_html(formatDate(cert.expirationDate))}</span> `);
        if (cert.status === "VALID" && daysUntil <= 30) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="ml-2 rounded-md bg-warning/10 px-1.5 py-0.5 text-xs font-medium text-warning">${escape_html(daysUntil)}d</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></td><td class="px-6 py-4"><div class="flex items-center justify-end gap-1">`);
        if (cert.status === "VALID") {
          $$renderer2.push("<!--[0-->");
          if (revokeConfirmId === cert.id) {
            $$renderer2.push("<!--[0-->");
            $$renderer2.push(`<div class="flex items-center gap-2"><span class="text-xs text-muted-foreground">¿Confirmar?</span> <button class="rounded-lg px-2.5 py-1 text-xs font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all">Sí</button> <button class="rounded-lg px-2.5 py-1 text-xs font-semibold btn-secondary">No</button></div>`);
          } else {
            $$renderer2.push("<!--[-1-->");
            $$renderer2.push(`<button title="Revocar certificado" class="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive hover:scale-110">`);
            Shield_off($$renderer2, { class: "h-4 w-4" });
            $$renderer2.push(`<!----></button>`);
          }
          $$renderer2.push(`<!--]-->`);
        } else {
          $$renderer2.push("<!--[-1-->");
          $$renderer2.push(`<span class="text-xs text-muted-foreground italic px-2">—</span>`);
        }
        $$renderer2.push(`<!--]--></div></td></tr>`);
      }
      $$renderer2.push(`<!--]--></tbody></table></div>`);
    }
    $$renderer2.push(`<!--]--></div> `);
    Modal($$renderer2, {
      open: showCreateModal,
      title: "Generar Nuevo Certificado mTLS",
      onClose: () => showCreateModal = false,
      children: ($$renderer3) => {
        $$renderer3.push(`<form class="space-y-4 px-1"><div class="grid grid-cols-2 gap-3"><div class="col-span-2 space-y-1.5"><label for="cert-displayName" class="block text-sm font-medium text-card-foreground">Nombre para mostrar</label> <input id="cert-displayName" type="text"${attr("value", form.displayName)} class="input-field" required="" placeholder="Edge Gateway Alpha — mTLS"/></div> <div class="space-y-1.5"><label for="cert-deviceType" class="block text-sm font-medium text-card-foreground">Tipo de dispositivo</label> `);
        $$renderer3.select(
          {
            id: "cert-deviceType",
            value: form.deviceType,
            class: "input-field bg-background"
          },
          ($$renderer4) => {
            $$renderer4.option({ value: "EDGE" }, ($$renderer5) => {
              $$renderer5.push(`Edge`);
            });
            $$renderer4.option({ value: "HUB" }, ($$renderer5) => {
              $$renderer5.push(`Hub`);
            });
            $$renderer4.option({ value: "ROUTER" }, ($$renderer5) => {
              $$renderer5.push(`Router`);
            });
          }
        );
        $$renderer3.push(`</div> <div class="space-y-1.5"><label for="cert-validityDays" class="block text-sm font-medium text-card-foreground">Validez (días)</label> <input id="cert-validityDays" type="number" min="1" max="3650"${attr("value", form.validityDays)} class="input-field" required=""/></div> <div class="col-span-2 space-y-1.5"><label for="cert-cn" class="block text-sm font-medium text-card-foreground">Common Name (CN)</label> <input id="cert-cn" type="text"${attr("value", form.commonName)} class="input-field font-mono" required="" placeholder="edge-alpha.local"/></div> <div class="space-y-1.5"><label for="cert-org" class="block text-sm font-medium text-card-foreground">Organización</label> <input id="cert-org" type="text"${attr("value", form.organization)} class="input-field" required="" placeholder="Mi Empresa S.A."/></div> <div class="space-y-1.5"><label for="cert-country" class="block text-sm font-medium text-card-foreground">País (código ISO 2)</label> <input id="cert-country" type="text"${attr("value", form.country)} class="input-field font-mono uppercase" maxlength="2" required="" placeholder="AR"/></div> <div class="col-span-2 space-y-1.5"><label for="cert-san" class="block text-sm font-medium text-card-foreground">SAN Domain</label> <input id="cert-san" type="text"${attr("value", form.sanDomain)} class="input-field font-mono" required="" placeholder="edge-alpha.local"/> <p class="text-xs text-muted-foreground">Subject Alternative Name — normalmente igual al CN para dispositivos IoT.</p></div></div> <p class="text-xs text-muted-foreground bg-muted/40 border border-border rounded-lg px-3 py-2">Al confirmar, el certificado se generará y descargará automáticamente como un archivo ZIP.</p> `);
        if (actionError) {
          $$renderer3.push("<!--[0-->");
          $$renderer3.push(`<div class="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive">`);
          Circle_alert($$renderer3, { class: "h-3.5 w-3.5 shrink-0" });
          $$renderer3.push(`<!----> ${escape_html(actionError)}</div>`);
        } else {
          $$renderer3.push("<!--[-1-->");
        }
        $$renderer3.push(`<!--]--> <div class="flex gap-3 pt-2"><button type="button" class="btn-secondary flex-1 rounded-xl py-3 text-sm">Cancelar</button> <button type="submit"${attr("disabled", store_get($$store_subs ??= {}, "$certificatesGenerating", certificatesGenerating), true)} class="btn-primary flex-1 rounded-xl py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60">`);
        if (store_get($$store_subs ??= {}, "$certificatesGenerating", certificatesGenerating)) {
          $$renderer3.push("<!--[0-->");
          Loader($$renderer3, { class: "h-4 w-4 animate-spin" });
          $$renderer3.push(`<!----> Generando…`);
        } else {
          $$renderer3.push("<!--[-1-->");
          Circle_check_big($$renderer3, { class: "h-4 w-4" });
          $$renderer3.push(`<!----> Generar y Descargar`);
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
