import { Y as sanitize_props, Z as rest_props, _ as attributes, $ as clsx, a0 as ensure_array_like, a1 as element, a2 as slot, a3 as bind_props, a4 as spread_props, a5 as store_get, a6 as unsubscribe_stores, a7 as attr_class, a8 as stringify, a9 as attr_style, X as derived, aa as attr } from "../../chunks/renderer.js";
import { w as writable } from "../../chunks/index.js";
import { f as fallback, e as escape_html } from "../../chunks/equality.js";
import "clsx";
const currentPage = writable("edge");
const pageParams = writable({});
function navigateTo(page, params = {}) {
  pageParams.set(params);
  currentPage.set(page);
}
function createAuthStore() {
  const { subscribe, set, update } = writable(null);
  return {
    subscribe,
    login: (user) => set(user),
    logout: () => set(null),
    update: (data) => update((u) => u ? { ...u, ...data } : null)
  };
}
const auth = createAuthStore();
const isBrowser = typeof window !== "undefined";
function createThemeStore() {
  const defaultTheme = isBrowser ? localStorage.getItem("theme") || "dark" : "dark";
  const { subscribe, set, update } = writable(defaultTheme);
  return {
    subscribe,
    toggle: () => {
      update((current) => {
        const newTheme = current === "dark" ? "light" : "dark";
        if (isBrowser) {
          localStorage.setItem("theme", newTheme);
          document.documentElement.classList.toggle("dark", newTheme === "dark");
        }
        return newTheme;
      });
    },
    set: (theme2) => {
      if (isBrowser) {
        localStorage.setItem("theme", theme2);
        document.documentElement.classList.toggle("dark", theme2 === "dark");
      }
      set(theme2);
    },
    init: () => {
      if (isBrowser) {
        const saved = localStorage.getItem("theme");
        const theme2 = saved || "dark";
        document.documentElement.classList.toggle("dark", theme2 === "dark");
        set(theme2);
      }
    }
  };
}
const theme = createThemeStore();
const defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
function Icon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "name",
    "color",
    "size",
    "strokeWidth",
    "absoluteStrokeWidth",
    "iconNode"
  ]);
  $$renderer.component(($$renderer2) => {
    let name = fallback($$props["name"], void 0);
    let color = fallback($$props["color"], "currentColor");
    let size = fallback($$props["size"], 24);
    let strokeWidth = fallback($$props["strokeWidth"], 2);
    let absoluteStrokeWidth = fallback($$props["absoluteStrokeWidth"], false);
    let iconNode = fallback($$props["iconNode"], () => [], true);
    const mergeClasses = (...classes) => classes.filter((className, index, array) => {
      return Boolean(className) && array.indexOf(className) === index;
    }).join(" ");
    $$renderer2.push(`<svg${attributes(
      {
        ...defaultAttributes,
        ...$$restProps,
        width: size,
        height: size,
        stroke: color,
        "stroke-width": absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        class: clsx(mergeClasses("lucide-icon", "lucide", name ? `lucide-${name}` : "", $$sanitized_props.class))
      },
      void 0,
      void 0,
      void 0,
      3
    )}><!--[-->`);
    const each_array = ensure_array_like(iconNode);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let [tag, attrs] = each_array[$$index];
      element($$renderer2, tag, () => {
        $$renderer2.push(`${attributes({ ...attrs }, void 0, void 0, void 0, 3)}`);
      });
    }
    $$renderer2.push(`<!--]--><!--[-->`);
    slot($$renderer2, $$props, "default", {});
    $$renderer2.push(`<!--]--></svg>`);
    bind_props($$props, {
      name,
      color,
      size,
      strokeWidth,
      absoluteStrokeWidth,
      iconNode
    });
  });
}
function Arrow_left($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "m12 19-7-7 7-7" }],
    ["path", { "d": "M19 12H5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-left" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowLeft
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJtMTIgMTktNy03IDctNyIgLz4KICA8cGF0aCBkPSJNMTkgMTJINSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/arrow-left
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
function Arrow_right($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M5 12h14" }],
    ["path", { "d": "m12 5 7 7-7 7" }]
  ];
  Icon($$renderer, spread_props([
    { name: "arrow-right" },
    $$sanitized_props,
    {
      /**
       * @component @name ArrowRight
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJtMTIgNSA3IDctNyA3IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/arrow-right
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
function Bell($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10.268 21a2 2 0 0 0 3.464 0" }],
    [
      "path",
      {
        "d": "M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "bell" },
    $$sanitized_props,
    {
      /**
       * @component @name Bell
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAuMjY4IDIxYTIgMiAwIDAgMCAzLjQ2NCAwIiAvPgogIDxwYXRoIGQ9Ik0zLjI2MiAxNS4zMjZBMSAxIDAgMCAwIDQgMTdoMTZhMSAxIDAgMCAwIC43NC0xLjY3M0MxOS40MSAxMy45NTYgMTggMTIuNDk5IDE4IDhBNiA2IDAgMCAwIDYgOGMwIDQuNDk5LTEuNDExIDUuOTU2LTIuNzM4IDcuMzI2IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/bell
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
function Circle_alert($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["line", { "x1": "12", "x2": "12", "y1": "8", "y2": "12" }],
    [
      "line",
      { "x1": "12", "x2": "12.01", "y1": "16", "y2": "16" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "circle-alert" },
    $$sanitized_props,
    {
      /**
       * @component @name CircleAlert
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMiIgeTE9IjgiIHkyPSIxMiIgLz4KICA8bGluZSB4MT0iMTIiIHgyPSIxMi4wMSIgeTE9IjE2IiB5Mj0iMTYiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/circle-alert
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
function Cpu($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M17 20v2" }],
    ["path", { "d": "M17 2v2" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M2 17h2" }],
    ["path", { "d": "M2 7h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "M20 17h2" }],
    ["path", { "d": "M20 7h2" }],
    ["path", { "d": "M7 20v2" }],
    ["path", { "d": "M7 2v2" }],
    [
      "rect",
      { "x": "4", "y": "4", "width": "16", "height": "16", "rx": "2" }
    ],
    [
      "rect",
      { "x": "8", "y": "8", "width": "8", "height": "8", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "cpu" },
    $$sanitized_props,
    {
      /**
       * @component @name Cpu
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMjB2MiIgLz4KICA8cGF0aCBkPSJNMTIgMnYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAyMHYyIiAvPgogIDxwYXRoIGQ9Ik0xNyAydjIiIC8+CiAgPHBhdGggZD0iTTIgMTJoMiIgLz4KICA8cGF0aCBkPSJNMiAxN2gyIiAvPgogIDxwYXRoIGQ9Ik0yIDdoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTJoMiIgLz4KICA8cGF0aCBkPSJNMjAgMTdoMiIgLz4KICA8cGF0aCBkPSJNMjAgN2gyIiAvPgogIDxwYXRoIGQ9Ik03IDIwdjIiIC8+CiAgPHBhdGggZD0iTTcgMnYyIiAvPgogIDxyZWN0IHg9IjQiIHk9IjQiIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgcng9IjIiIC8+CiAgPHJlY3QgeD0iOCIgeT0iOCIgd2lkdGg9IjgiIGhlaWdodD0iOCIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/cpu
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
function Download($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 15V3" }],
    ["path", { "d": "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" }],
    ["path", { "d": "m7 10 5 5 5-5" }]
  ];
  Icon($$renderer, spread_props([
    { name: "download" },
    $$sanitized_props,
    {
      /**
       * @component @name Download
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMTVWMyIgLz4KICA8cGF0aCBkPSJNMjEgMTV2NGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnYtNCIgLz4KICA8cGF0aCBkPSJtNyAxMCA1IDUgNS01IiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/download
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
function Eye($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"
      }
    ],
    ["circle", { "cx": "12", "cy": "12", "r": "3" }]
  ];
  Icon($$renderer, spread_props([
    { name: "eye" },
    $$sanitized_props,
    {
      /**
       * @component @name Eye
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMi4wNjIgMTIuMzQ4YTEgMSAwIDAgMSAwLS42OTYgMTAuNzUgMTAuNzUgMCAwIDEgMTkuODc2IDAgMSAxIDAgMCAxIDAgLjY5NiAxMC43NSAxMC43NSAwIDAgMS0xOS44NzYgMCIgLz4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/eye
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
function Info($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "10" }],
    ["path", { "d": "M12 16v-4" }],
    ["path", { "d": "M12 8h.01" }]
  ];
  Icon($$renderer, spread_props([
    { name: "info" },
    $$sanitized_props,
    {
      /**
       * @component @name Info
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMCIgLz4KICA8cGF0aCBkPSJNMTIgMTZ2LTQiIC8+CiAgPHBhdGggZD0iTTEyIDhoLjAxIiAvPgo8L3N2Zz4K) - https://lucide.dev/icons/info
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
function Layout_dashboard($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      { "width": "7", "height": "9", "x": "3", "y": "3", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "5", "x": "14", "y": "3", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "9", "x": "14", "y": "12", "rx": "1" }
    ],
    [
      "rect",
      { "width": "7", "height": "5", "x": "3", "y": "16", "rx": "1" }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "layout-dashboard" },
    $$sanitized_props,
    {
      /**
       * @component @name LayoutDashboard
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI5IiB4PSIzIiB5PSIzIiByeD0iMSIgLz4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI1IiB4PSIxNCIgeT0iMyIgcng9IjEiIC8+CiAgPHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iOSIgeD0iMTQiIHk9IjEyIiByeD0iMSIgLz4KICA8cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSI1IiB4PSIzIiB5PSIxNiIgcng9IjEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/layout-dashboard
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
function Loader($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M12 2v4" }],
    ["path", { "d": "m16.2 7.8 2.9-2.9" }],
    ["path", { "d": "M18 12h4" }],
    ["path", { "d": "m16.2 16.2 2.9 2.9" }],
    ["path", { "d": "M12 18v4" }],
    ["path", { "d": "m4.9 19.1 2.9-2.9" }],
    ["path", { "d": "M2 12h4" }],
    ["path", { "d": "m4.9 4.9 2.9 2.9" }]
  ];
  Icon($$renderer, spread_props([
    { name: "loader" },
    $$sanitized_props,
    {
      /**
       * @component @name Loader
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTIgMnY0IiAvPgogIDxwYXRoIGQ9Im0xNi4yIDcuOCAyLjktMi45IiAvPgogIDxwYXRoIGQ9Ik0xOCAxMmg0IiAvPgogIDxwYXRoIGQ9Im0xNi4yIDE2LjIgMi45IDIuOSIgLz4KICA8cGF0aCBkPSJNMTIgMTh2NCIgLz4KICA8cGF0aCBkPSJtNC45IDE5LjEgMi45LTIuOSIgLz4KICA8cGF0aCBkPSJNMiAxMmg0IiAvPgogIDxwYXRoIGQ9Im00LjkgNC45IDIuOSAyLjkiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/loader
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
function Moon($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"
      }
    ]
  ];
  Icon($$renderer, spread_props([
    { name: "moon" },
    $$sanitized_props,
    {
      /**
       * @component @name Moon
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAuOTg1IDEyLjQ4NmE5IDkgMCAxIDEtOS40NzMtOS40NzJjLjQwNS0uMDIyLjYxNy40Ni40MDIuODAzYTYgNiAwIDAgMCA4LjI2OCA4LjI2OGMuMzQ0LS4yMTUuODI1LS4wMDQuODAzLjQwMSIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/moon
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
function Plus($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [["path", { "d": "M5 12h14" }], ["path", { "d": "M12 5v14" }]];
  Icon($$renderer, spread_props([
    { name: "plus" },
    $$sanitized_props,
    {
      /**
       * @component @name Plus
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNNSAxMmgxNCIgLz4KICA8cGF0aCBkPSJNMTIgNXYxNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/plus
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
function Server($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "2",
        "rx": "2",
        "ry": "2"
      }
    ],
    [
      "rect",
      {
        "width": "20",
        "height": "8",
        "x": "2",
        "y": "14",
        "rx": "2",
        "ry": "2"
      }
    ],
    ["line", { "x1": "6", "x2": "6.01", "y1": "6", "y2": "6" }],
    ["line", { "x1": "6", "x2": "6.01", "y1": "18", "y2": "18" }]
  ];
  Icon($$renderer, spread_props([
    { name: "server" },
    $$sanitized_props,
    {
      /**
       * @component @name Server
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iOCIgeD0iMiIgeT0iMiIgcng9IjIiIHJ5PSIyIiAvPgogIDxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSI4IiB4PSIyIiB5PSIxNCIgcng9IjIiIHJ5PSIyIiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjYiIHkyPSI2IiAvPgogIDxsaW5lIHgxPSI2IiB4Mj0iNi4wMSIgeTE9IjE4IiB5Mj0iMTgiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/server
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
function Shield_check($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    [
      "path",
      {
        "d": "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"
      }
    ],
    ["path", { "d": "m9 12 2 2 4-4" }]
  ];
  Icon($$renderer, spread_props([
    { name: "shield-check" },
    $$sanitized_props,
    {
      /**
       * @component @name ShieldCheck
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMjAgMTNjMCA1LTMuNSA3LjUtNy42NiA4Ljk1YTEgMSAwIDAgMS0uNjctLjAxQzcuNSAyMC41IDQgMTggNCAxM1Y2YTEgMSAwIDAgMSAxLTFjMiAwIDQuNS0xLjIgNi4yNC0yLjcyYTEuMTcgMS4xNyAwIDAgMSAxLjUyIDBDMTQuNTEgMy44MSAxNyA1IDE5IDVhMSAxIDAgMCAxIDEgMXoiIC8+CiAgPHBhdGggZD0ibTkgMTIgMiAyIDQtNCIgLz4KPC9zdmc+Cg==) - https://lucide.dev/icons/shield-check
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
function Sun($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["circle", { "cx": "12", "cy": "12", "r": "4" }],
    ["path", { "d": "M12 2v2" }],
    ["path", { "d": "M12 20v2" }],
    ["path", { "d": "m4.93 4.93 1.41 1.41" }],
    ["path", { "d": "m17.66 17.66 1.41 1.41" }],
    ["path", { "d": "M2 12h2" }],
    ["path", { "d": "M20 12h2" }],
    ["path", { "d": "m6.34 17.66-1.41 1.41" }],
    ["path", { "d": "m19.07 4.93-1.41 1.41" }]
  ];
  Icon($$renderer, spread_props([
    { name: "sun" },
    $$sanitized_props,
    {
      /**
       * @component @name Sun
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSI0IiAvPgogIDxwYXRoIGQ9Ik0xMiAydjIiIC8+CiAgPHBhdGggZD0iTTEyIDIwdjIiIC8+CiAgPHBhdGggZD0ibTQuOTMgNC45MyAxLjQxIDEuNDEiIC8+CiAgPHBhdGggZD0ibTE3LjY2IDE3LjY2IDEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJNMiAxMmgyIiAvPgogIDxwYXRoIGQ9Ik0yMCAxMmgyIiAvPgogIDxwYXRoIGQ9Im02LjM0IDE3LjY2LTEuNDEgMS40MSIgLz4KICA8cGF0aCBkPSJtMTkuMDcgNC45My0xLjQxIDEuNDEiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/sun
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
function Trash_2($$renderer, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const iconNode = [
    ["path", { "d": "M10 11v6" }],
    ["path", { "d": "M14 11v6" }],
    ["path", { "d": "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" }],
    ["path", { "d": "M3 6h18" }],
    ["path", { "d": "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" }]
  ];
  Icon($$renderer, spread_props([
    { name: "trash-2" },
    $$sanitized_props,
    {
      /**
       * @component @name Trash2
       * @description Lucide SVG icon component, renders SVG Element with children.
       *
       * @preview ![img](data:image/svg+xml;base64,PHN2ZyAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogIHdpZHRoPSIyNCIKICBoZWlnaHQ9IjI0IgogIHZpZXdCb3g9IjAgMCAyNCAyNCIKICBmaWxsPSJub25lIgogIHN0cm9rZT0iIzAwMCIgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNmZmY7IGJvcmRlci1yYWRpdXM6IDJweCIKICBzdHJva2Utd2lkdGg9IjIiCiAgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIgogIHN0cm9rZS1saW5lam9pbj0icm91bmQiCj4KICA8cGF0aCBkPSJNMTAgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTQgMTF2NiIgLz4KICA8cGF0aCBkPSJNMTkgNnYxNGEyIDIgMCAwIDEtMiAySDdhMiAyIDAgMCAxLTItMlY2IiAvPgogIDxwYXRoIGQ9Ik0zIDZoMTgiIC8+CiAgPHBhdGggZD0iTTggNlY0YTIgMiAwIDAgMSAyLTJoNGEyIDIgMCAwIDEgMiAydjIiIC8+Cjwvc3ZnPgo=) - https://lucide.dev/icons/trash-2
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
function Theme_toggle($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    $$renderer2.push(`<button class="group relative flex h-10 w-10 items-center justify-center rounded-xl bg-secondary border border-border transition-all duration-300 ease-out hover:bg-primary/10 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background active:scale-95" aria-label="Toggle theme"><div class="relative h-5 w-5">`);
    if (store_get($$store_subs ??= {}, "$theme", theme) === "dark") {
      $$renderer2.push("<!--[0-->");
      Sun($$renderer2, {
        class: "h-5 w-5 text-warning transition-all duration-300 group-hover:rotate-45 group-hover:scale-110"
      });
    } else {
      $$renderer2.push("<!--[-1-->");
      Moon($$renderer2, {
        class: "h-5 w-5 text-primary transition-all duration-300 group-hover:-rotate-12 group-hover:scale-110"
      });
    }
    $$renderer2.push(`<!--]--></div> <div class="absolute inset-0 rounded-xl bg-primary/0 transition-all duration-300 group-hover:bg-primary/5"></div></button>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Sidebar($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const navItems = [
      { id: "edge", label: "Edge", icon: Server },
      { id: "certificates", label: "Certificados", icon: Shield_check },
      { id: "notifications", label: "Notificaciones", icon: Bell }
    ];
    $$renderer2.push(`<aside class="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col bg-sidebar border-r border-sidebar-border shadow-xl shadow-black/5"><div class="flex h-16 items-center gap-3 border-b border-sidebar-border px-5"><div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">`);
    Layout_dashboard($$renderer2, { class: "h-5 w-5 text-primary-foreground" });
    $$renderer2.push(`<!----> <span class="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span> <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span></span></div> <div><span class="text-lg font-bold text-sidebar-foreground">Manager</span> <span class="block text-[10px] font-medium text-primary uppercase tracking-wider">Dashboard</span></div></div> <nav class="flex-1 overflow-y-auto p-4"><p class="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Panel Principal</p> <div class="space-y-1"><!--[-->`);
    const each_array = ensure_array_like(navItems);
    for (let i = 0, $$length = each_array.length; i < $$length; i++) {
      let item = each_array[i];
      $$renderer2.push(`<button${attr_class(`stagger-item group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ease-out ${stringify(store_get($$store_subs ??= {}, "$currentPage", currentPage) === item.id || store_get($$store_subs ??= {}, "$currentPage", currentPage) === "edge-networks" && item.id === "edge" ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent")}`)}${attr_style(`animation-delay: ${stringify(i * 0.05)}s`)}><div class="relative">`);
      if (item.icon) {
        $$renderer2.push("<!--[-->");
        item.icon($$renderer2, {
          class: `h-4.5 w-4.5 transition-transform duration-200 ${stringify(store_get($$store_subs ??= {}, "$currentPage", currentPage) === item.id ? "" : "group-hover:scale-110")}`
        });
        $$renderer2.push("<!--]-->");
      } else {
        $$renderer2.push("<!--[!-->");
        $$renderer2.push("<!--]-->");
      }
      $$renderer2.push(`</div> <span class="flex-1 text-left">${escape_html(item.label)}</span> `);
      if (store_get($$store_subs ??= {}, "$currentPage", currentPage) === item.id) {
        $$renderer2.push("<!--[0-->");
        Chevron_right($$renderer2, { class: "h-4 w-4 animate-slide-in" });
      } else {
        $$renderer2.push("<!--[-1-->");
      }
      $$renderer2.push(`<!--]--></button>`);
    }
    $$renderer2.push(`<!--]--></div></nav> <div class="border-t border-sidebar-border p-4 space-y-3"><div class="flex items-center gap-3 rounded-xl bg-sidebar-accent/50 p-3 border border-transparent transition-all duration-200 hover:border-primary/20 hover:bg-sidebar-accent"><div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold shadow-md shadow-primary/20">${escape_html(store_get($$store_subs ??= {}, "$auth", auth)?.name?.charAt(0).toUpperCase() || "U")}</div> <div class="flex-1 min-w-0"><p class="truncate text-sm font-semibold text-sidebar-foreground">${escape_html(store_get($$store_subs ??= {}, "$auth", auth)?.name || "Usuario")}</p> <p class="truncate text-xs text-muted-foreground">${escape_html(store_get($$store_subs ??= {}, "$auth", auth)?.email || "usuario@email.com")}</p></div></div> <div class="flex items-center gap-2">`);
    Theme_toggle($$renderer2);
    $$renderer2.push(`<!----> <button class="flex flex-1 items-center justify-center gap-2 rounded-xl bg-secondary border border-border px-3 py-2.5 text-sm font-medium text-foreground transition-all duration-200 ease-out hover:bg-destructive hover:text-destructive-foreground hover:border-destructive hover:shadow-lg hover:shadow-destructive/20 active:scale-[0.98]">`);
    Log_out($$renderer2, {
      class: "h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5"
    });
    $$renderer2.push(`<!----> <span>Cerrar sesión</span></button></div></div></aside>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Page_header($$renderer, $$props) {
  let { title, description } = $$props;
  $$renderer.push(`<div class="flex items-start justify-between animate-slide-in"><div><h1 class="text-2xl font-bold tracking-tight text-foreground bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text">${escape_html(title)}</h1> `);
  if (description) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<p class="mt-1.5 text-sm text-muted-foreground max-w-xl">${escape_html(description)}</p>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div> `);
  Theme_toggle($$renderer);
  $$renderer.push(`<!----></div>`);
}
function Modal($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    let { children, open = false, title, onClose } = $$props;
    if (open) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in"><div class="absolute inset-0 bg-background/80 backdrop-blur-md cursor-pointer" role="button" tabindex="-1" aria-label="Close modal"></div> <div class="relative z-10 m-auto w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl border border-border bg-card p-6 shadow-2xl shadow-black/20 animate-scale-in"><div class="flex items-center justify-between mb-5"><h2 class="text-lg font-semibold text-card-foreground">${escape_html(title)}</h2> <button type="button" class="flex h-9 w-9 items-center justify-center rounded-xl text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive hover:rotate-90 active:scale-90" aria-label="Close">`);
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
function Status_badge($$renderer, $$props) {
  let { status, size = "sm" } = $$props;
  const statusConfig = {
    online: {
      bg: "bg-success/15",
      text: "text-success",
      dot: "bg-success",
      label: "En línea",
      pulse: true
    },
    offline: {
      bg: "bg-destructive/15",
      text: "text-destructive",
      dot: "bg-destructive",
      label: "Desconectado"
    },
    warning: {
      bg: "bg-warning/15",
      text: "text-warning",
      dot: "bg-warning",
      label: "Advertencia",
      pulse: true
    },
    active: {
      bg: "bg-success/15",
      text: "text-success",
      dot: "bg-success",
      label: "Activo",
      pulse: true
    },
    inactive: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      dot: "bg-muted-foreground",
      label: "Inactivo"
    },
    valid: {
      bg: "bg-success/15",
      text: "text-success",
      dot: "bg-success",
      label: "Válido"
    },
    expired: {
      bg: "bg-destructive/15",
      text: "text-destructive",
      dot: "bg-destructive",
      label: "Expirado"
    },
    revoked: {
      bg: "bg-warning/15",
      text: "text-warning",
      dot: "bg-warning",
      label: "Revocado"
    },
    available: {
      bg: "bg-success/15",
      text: "text-success",
      dot: "bg-success",
      label: "Disponible"
    },
    deploying: {
      bg: "bg-primary/15",
      text: "text-primary",
      dot: "bg-primary",
      label: "Desplegando",
      pulse: true
    },
    deprecated: {
      bg: "bg-muted",
      text: "text-muted-foreground",
      dot: "bg-muted-foreground",
      label: "Obsoleto"
    }
  };
  const config = statusConfig[status] || statusConfig.offline;
  const sizeClasses = size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm";
  $$renderer.push(`<span${attr_class(`inline-flex items-center gap-1.5 rounded-full ${stringify(config.bg)} ${stringify(config.text)} ${stringify(sizeClasses)} font-medium transition-all duration-200 hover:scale-105`)}><span class="relative flex h-2 w-2">`);
  if (config.pulse) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<span${attr_class(`absolute inline-flex h-full w-full animate-ping rounded-full ${stringify(config.dot)} opacity-75`)}></span>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <span${attr_class(`relative inline-flex h-2 w-2 rounded-full ${stringify(config.dot)}`)}></span></span> ${escape_html(config.label)}</span>`);
}
function Empty_state($$renderer, $$props) {
  let { icon, title, description, actionLabel, onAction } = $$props;
  const SvelteComponent = derived(() => icon);
  $$renderer.push(`<div class="flex flex-col items-center justify-center py-16 text-center animate-fade-in"><div class="relative"><div class="absolute inset-0 rounded-full bg-primary/20 blur-2xl scale-150"></div> <div class="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/20 shadow-lg shadow-primary/10">`);
  if (SvelteComponent()) {
    $$renderer.push("<!--[-->");
    SvelteComponent()($$renderer, { class: "h-10 w-10 text-primary" });
    $$renderer.push("<!--]-->");
  } else {
    $$renderer.push("<!--[!-->");
    $$renderer.push("<!--]-->");
  }
  $$renderer.push(`</div></div> <h3 class="mt-6 text-xl font-semibold text-foreground">${escape_html(title)}</h3> <p class="mt-2 max-w-sm text-sm text-muted-foreground leading-relaxed">${escape_html(description)}</p> `);
  if (actionLabel && onAction) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<button class="mt-8 btn-primary rounded-xl px-6 py-3 text-sm">${escape_html(actionLabel)}</button>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
const edges = writable([]);
const edgesLoading = writable(false);
function Edge_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let showCreateEdgeModal = false;
    let showViewEdgeModal = false;
    let showDeleteEdgeModal = false;
    let isSubmitting = false;
    let newEdge = {
      edgeId: "",
      name: "",
      ubication: "",
      hostServer: "127.0.0.1",
      port: "8080",
      cn: "localhost",
      hostLocal: "127.0.0.1",
      dbPath: "/var/lib/edge.db",
      bufferSize: 20,
      rustLog: "Info",
      maxAttempts: 3,
      frequencyPhase: 5,
      frequencySafeMode: 20,
      timeoutHandshake: 30,
      timeoutPhase: 60,
      timeoutSafeMode: 150,
      timeBetweenHeartbeatsBalanceMode: 20,
      timeBetweenHeartbeatsNormal: 45,
      timeBetweenHeartbeatsSafeMode: 60
    };
    $$renderer2.push(`<div class="space-y-6">`);
    Page_header($$renderer2, {
      title: "Dispositivos Edge",
      description: "Administra y supervisa tus dispositivos Edge"
    });
    $$renderer2.push(`<!----> <div class="flex items-center justify-between animate-slide-in"><div class="flex items-center gap-3"><div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30"><span class="text-sm text-muted-foreground">Total:</span> <span class="font-bold text-card-foreground">${escape_html(store_get($$store_subs ??= {}, "$edges", edges).length)} edges</span></div> `);
    if (store_get($$store_subs ??= {}, "$edges", edges).some((e) => e.status === "online")) {
      $$renderer2.push("<!--[0-->");
      $$renderer2.push(`<div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5"><span class="relative flex h-2 w-2"><span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-success"></span></span> <span class="text-sm font-semibold text-success">${escape_html(store_get($$store_subs ??= {}, "$edges", edges).filter((e) => e.status === "online").length)} en línea</span></div>`);
    } else {
      $$renderer2.push("<!--[-1-->");
    }
    $$renderer2.push(`<!--]--></div> <button class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm">`);
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
        onAction: () => showCreateEdgeModal = true
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
        if (edge.status) {
          $$renderer2.push("<!--[0-->");
          Status_badge($$renderer2, { status: edge.status });
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <h3 class="mt-4 text-lg font-semibold text-card-foreground transition-colors group-hover:text-primary">${escape_html(edge.name)}</h3> `);
        if (edge.ubication) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<div class="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">`);
          Map_pin($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----> ${escape_html(edge.ubication)}</div>`);
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
    $$renderer2.push(`<!--]--></div> `);
    Modal($$renderer2, {
      open: showCreateEdgeModal,
      title: "Nuevo Edge Device",
      onClose: () => showCreateEdgeModal = false,
      children: ($$renderer3) => {
        $$renderer3.push(`<form class="px-1 text-left"><div class="space-y-6"><div><h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Sistema</h3> <div class="grid grid-cols-2 gap-3"><div class="space-y-1.5"><label for="create-edgeId" class="block text-xs font-semibold text-muted-foreground">ID del Edge</label> <input id="create-edgeId" type="text"${attr("value", newEdge.edgeId)} class="input-field py-1.5 font-mono" required="" placeholder="edge-001"/></div> <div class="space-y-1.5"><label for="create-name" class="block text-xs font-semibold text-muted-foreground">Nombre</label> <input id="create-name" type="text"${attr("value", newEdge.name)} class="input-field py-1.5" required="" placeholder="Edge Gateway Sur"/></div> <div class="col-span-2 space-y-1.5"><label for="create-ubic" class="block text-xs font-semibold text-muted-foreground">Ubicación</label> <input id="create-ubic" type="text"${attr("value", newEdge.ubication)} class="input-field py-1.5" placeholder="Datacenter Principal"/></div> <div class="space-y-1.5"><label for="create-cn" class="block text-xs font-semibold text-muted-foreground">CN</label> <input id="create-cn" type="text"${attr("value", newEdge.cn)} class="input-field py-1.5 font-mono" placeholder="device.local"/></div> <div class="col-span-2 grid grid-cols-3 gap-2"><div class="space-y-1.5 flex-1"><label for="create-hostServer" class="block text-xs font-semibold text-muted-foreground">Host Server</label> <input id="create-hostServer" type="text"${attr("value", newEdge.hostServer)} class="input-field py-1.5 font-mono"/></div> <div class="space-y-1.5 flex-[0.5]"><label for="create-port" class="block text-xs font-semibold text-muted-foreground">Puerto</label> <input id="create-port" type="text"${attr("value", newEdge.port)} class="input-field py-1.5 font-mono"/></div> <div class="space-y-1.5 flex-1"><label for="create-hostLocal" class="block text-xs font-semibold text-muted-foreground">Host Local</label> <input id="create-hostLocal" type="text"${attr("value", newEdge.hostLocal)} class="input-field py-1.5 font-mono"/></div></div> <div class="col-span-2 space-y-1.5"><label for="create-db" class="block text-xs font-semibold text-muted-foreground">Ruta Base de Datos</label> <input id="create-db" type="text"${attr("value", newEdge.dbPath)} class="input-field py-1.5 font-mono text-xs"/></div> <div class="space-y-1.5"><label for="create-buffer" class="block text-xs font-semibold text-muted-foreground">Tamaño Buffer (5-50)</label> <input id="create-buffer" type="number" min="5" max="50"${attr("value", newEdge.bufferSize)} class="input-field py-1.5"/></div> <div class="space-y-1.5"><label for="create-log" class="block text-xs font-semibold text-muted-foreground">Log</label> `);
        $$renderer3.select(
          {
            id: "create-log",
            value: newEdge.rustLog,
            class: "input-field py-1.5 bg-background"
          },
          ($$renderer4) => {
            $$renderer4.option({ value: "Debug" }, ($$renderer5) => {
              $$renderer5.push(`Debug`);
            });
            $$renderer4.option({ value: "Info" }, ($$renderer5) => {
              $$renderer5.push(`Info`);
            });
            $$renderer4.option({ value: "Error" }, ($$renderer5) => {
              $$renderer5.push(`Error`);
            });
          }
        );
        $$renderer3.push(`</div></div></div> <div class="border-t border-border"></div> <div><h3 class="text-sm uppercase tracking-wider font-bold text-primary mb-3">Configuración de Protocolo</h3> <div class="grid grid-cols-2 gap-3 text-xs"><div class="space-y-1"><label for="p-max-a" class="block font-semibold text-muted-foreground">Nº máximo intentos (1-10)</label> <input id="p-max-a" type="number" min="1" max="10"${attr("value", newEdge.maxAttempts)} class="input-field py-1"/></div> <div class="space-y-1"><label for="p-fp" class="block font-semibold text-muted-foreground">Frec. msjs en fase (1-10m)</label> <input id="p-fp" type="number" min="1" max="10"${attr("value", newEdge.frequencyPhase)} class="input-field py-1"/></div> <div class="space-y-1"><label for="p-fs" class="block font-semibold text-muted-foreground">Frec. safe mode (10-40s)</label> <input id="p-fs" type="number" min="10" max="40"${attr("value", newEdge.frequencySafeMode)} class="input-field py-1"/></div> <div class="space-y-1"><label for="p-th" class="block font-semibold text-muted-foreground">T Límite handshake (15-60s)</label> <input id="p-th" type="number" min="15" max="60"${attr("value", newEdge.timeoutHandshake)} class="input-field py-1"/></div> <div class="space-y-1"><label for="p-tp" class="block font-semibold text-muted-foreground">T Límite fases (30-120s)</label> <input id="p-tp" type="number" min="30" max="120"${attr("value", newEdge.timeoutPhase)} class="input-field py-1"/></div> <div class="space-y-1"><label for="p-ts" class="block font-semibold text-muted-foreground">T Límite safe mode (120-300s)</label> <input id="p-ts" type="number" min="120" max="300"${attr("value", newEdge.timeoutSafeMode)} class="input-field py-1"/></div> <div class="space-y-1"><label for="p-hbb" class="block font-semibold text-muted-foreground">Heartbeat b-mode (10-40s)</label> <input id="p-hbb" type="number" min="10" max="40"${attr("value", newEdge.timeBetweenHeartbeatsBalanceMode)} class="input-field py-1"/></div> <div class="space-y-1"><label for="p-hbn" class="block font-semibold text-muted-foreground">Heartbeat normal (30-60s)</label> <input id="p-hbn" type="number" min="30" max="60"${attr("value", newEdge.timeBetweenHeartbeatsNormal)} class="input-field py-1"/></div> <div class="space-y-1 col-span-2"><label for="p-hbs" class="block font-semibold text-muted-foreground">Heartbeat safe mode (40-80s)</label> <input id="p-hbs" type="number" min="40" max="80"${attr("value", newEdge.timeBetweenHeartbeatsSafeMode)} class="input-field py-1"/></div></div></div> `);
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
const certificates = writable([]);
const certificatesLoading = writable(false);
const certificatesGenerating = writable(false);
function Certificates_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let showCreateModal = false;
    let revokeConfirmId = null;
    let actionError = null;
    let form = {
      displayName: "",
      deviceType: "edge",
      commonName: "",
      organization: "",
      country: "",
      sanDomain: "",
      validityDays: 365
    };
    function resetForm() {
      form = {
        displayName: "",
        deviceType: "edge",
        commonName: "",
        organization: "",
        country: "",
        sanDomain: "",
        validityDays: 365
      };
      actionError = null;
    }
    function formatDate(iso) {
      return new Intl.DateTimeFormat("es", { dateStyle: "medium" }).format(new Date(iso));
    }
    function getDaysUntilExpiry(iso) {
      return Math.ceil((new Date(iso).getTime() - Date.now()) / (1e3 * 60 * 60 * 24));
    }
    const statusConfig = {
      valid: { color: "text-success", label: "Válido" },
      expired: { color: "text-destructive", label: "Expirado" },
      revoked: { color: "text-muted-foreground", label: "Revocado" }
    };
    $$renderer2.push(`<div class="space-y-6">`);
    Page_header($$renderer2, {
      title: "Certificados Digitales",
      description: "Gestiona los certificados de autenticación mutua del sistema"
    });
    $$renderer2.push(`<!----> <div class="flex items-center justify-between animate-slide-in"><div class="flex items-center gap-3"><div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30"><span class="text-sm text-muted-foreground">Total:</span> <span class="font-bold text-card-foreground">${escape_html(store_get($$store_subs ??= {}, "$certificates", certificates).length)}</span></div> <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5"><span class="h-2 w-2 rounded-full bg-success"></span> <span class="text-sm font-semibold text-success">${escape_html(store_get($$store_subs ??= {}, "$certificates", certificates).filter((c) => c.status === "valid").length)} válidos</span></div> <div class="flex items-center gap-2 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-2.5"><span class="h-2 w-2 rounded-full bg-destructive"></span> <span class="text-sm font-semibold text-destructive">${escape_html(store_get($$store_subs ??= {}, "$certificates", certificates).filter((c) => c.status === "expired").length)} expirados</span></div></div> <button class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm">`);
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
      const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$certificates", certificates));
      for (let i = 0, $$length = each_array.length; i < $$length; i++) {
        let cert = each_array[i];
        const sc = statusConfig[cert.status] ?? statusConfig.revoked;
        const daysUntil = getDaysUntilExpiry(cert.expiresAt);
        $$renderer2.push(`<tr class="stagger-item group transition-colors hover:bg-muted/20"${attr_style(`animation-delay: ${stringify(i * 0.03)}s`)}><td class="px-6 py-4"><div class="flex items-center gap-3"><div class="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 transition-all duration-200 group-hover:bg-primary/10">`);
        File_key($$renderer2, {
          class: "h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors"
        });
        $$renderer2.push(`<!----></div> <div><span class="font-medium text-card-foreground block">${escape_html(cert.displayName)}</span> `);
        if (cert.commonName) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="text-xs text-muted-foreground font-mono">${escape_html(cert.commonName)}</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></div></td><td class="px-6 py-4"><span class="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-1 text-xs font-medium text-card-foreground capitalize">${escape_html(cert.deviceType)}</span></td><td class="px-6 py-4"><span${attr_class(`text-sm font-semibold ${stringify(sc.color)}`)}>${escape_html(sc.label)}</span></td><td class="px-6 py-4 text-sm text-muted-foreground">${escape_html(formatDate(cert.issuedAt))}</td><td class="px-6 py-4"><div class="text-sm"><span class="text-card-foreground">${escape_html(formatDate(cert.expiresAt))}</span> `);
        if (cert.status === "valid" && daysUntil <= 30) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<span class="ml-2 rounded-md bg-warning/10 px-1.5 py-0.5 text-xs font-medium text-warning">${escape_html(daysUntil)}d</span>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div></td><td class="px-6 py-4"><div class="flex items-center justify-end gap-1">`);
        if (cert.status === "valid") {
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
            $$renderer4.option({ value: "edge" }, ($$renderer5) => {
              $$renderer5.push(`Edge`);
            });
            $$renderer4.option({ value: "hub" }, ($$renderer5) => {
              $$renderer5.push(`Hub`);
            });
            $$renderer4.option({ value: "server" }, ($$renderer5) => {
              $$renderer5.push(`Server`);
            });
            $$renderer4.option({ value: "ca" }, ($$renderer5) => {
              $$renderer5.push(`CA`);
            });
            $$renderer4.option({ value: "client" }, ($$renderer5) => {
              $$renderer5.push(`Client`);
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
const notifications = writable([]);
const notificationsLoading = writable(false);
function Notifications_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    const typeConfig = {
      info: {
        icon: Info,
        bgColor: "bg-primary/10",
        iconColor: "text-primary",
        borderColor: "border-l-primary"
      },
      warning: {
        icon: Triangle_alert,
        bgColor: "bg-warning/10",
        iconColor: "text-warning",
        borderColor: "border-l-warning"
      },
      error: {
        icon: Circle_alert,
        bgColor: "bg-destructive/10",
        iconColor: "text-destructive",
        borderColor: "border-l-destructive"
      },
      success: {
        icon: Circle_check_big,
        bgColor: "bg-success/10",
        iconColor: "text-success",
        borderColor: "border-l-success"
      }
    };
    function formatTimestamp(iso) {
      const date = new Date(iso);
      const now = /* @__PURE__ */ new Date();
      const diff = now.getTime() - date.getTime();
      const minutes = Math.floor(diff / 6e4);
      const hours = Math.floor(diff / 36e5);
      const days = Math.floor(diff / 864e5);
      if (minutes < 60) return `Hace ${minutes} min`;
      if (hours < 24) return `Hace ${hours}h`;
      if (days < 7) return `Hace ${days} días`;
      return new Intl.DateTimeFormat("es", { dateStyle: "short" }).format(date);
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
        const config = typeConfig[notification.type] ?? typeConfig.info;
        $$renderer2.push(`<div${attr_class(`stagger-item group relative rounded-2xl border bg-card p-5 transition-all duration-300 hover:shadow-lg border-l-4 ${stringify(config.borderColor)} border-border shadow-md`)}${attr_style(`animation-delay: ${stringify(i * 0.05)}s`)}><div class="flex gap-4"><div${attr_class(`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${stringify(config.bgColor)} transition-transform duration-200 group-hover:scale-110`)}>`);
        config.icon($$renderer2, { class: `h-6 w-6 ${stringify(config.iconColor)}` });
        $$renderer2.push(`<!----></div> <div class="flex-1 min-w-0"><div class="flex items-start justify-between gap-2"><div class="flex-1 min-w-0"><p class="font-medium text-card-foreground leading-relaxed">${escape_html(notification.description)}</p> `);
        if (notification.edgeId) {
          $$renderer2.push("<!--[0-->");
          $$renderer2.push(`<p class="mt-1 text-xs text-muted-foreground font-mono">Edge: ${escape_html(notification.edgeId)}</p>`);
        } else {
          $$renderer2.push("<!--[-1-->");
        }
        $$renderer2.push(`<!--]--></div> <div class="flex shrink-0 items-center gap-1 opacity-0 transition-all duration-200 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"><button class="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-primary hover:scale-110" title="Marcar como leído">`);
        Check_check($$renderer2, { class: "h-4 w-4" });
        $$renderer2.push(`<!----></button></div></div> <p class="mt-3 text-xs text-muted-foreground">${escape_html(formatTimestamp(notification.createdAt))}</p></div></div> <div class="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></div></div>`);
      }
      $$renderer2.push(`<!--]--></div>`);
    }
    $$renderer2.push(`<!--]--></div>`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
function Firmware_page($$renderer, $$props) {
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
const networks = writable([]);
const networksLoading = writable(false);
function Edge_networks_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let edgeId = derived(() => store_get($$store_subs ??= {}, "$pageParams", pageParams).edgeId);
    let currentEdge = derived(() => store_get($$store_subs ??= {}, "$edges", edges).find((e) => e.edgeId === edgeId()));
    let showCreateNetworkModal = false;
    let newNetworkId = "";
    let newNetworkName = "";
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
          $$renderer2.push(`<!----></div> <span${attr_class(`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${stringify(network.active ? "bg-success/10 text-success border border-success/20" : "bg-muted text-muted-foreground border border-border")}`)}><span${attr_class(`h-1.5 w-1.5 rounded-full ${stringify(network.active ? "bg-success" : "bg-muted-foreground")}`)}></span> ${escape_html(network.active ? "Activa" : "Inactiva")}</span></div> <div class="flex-1"><h4 class="mt-4 font-semibold text-lg text-card-foreground">${escape_html(network.name)}</h4> <p class="text-xs text-muted-foreground font-mono mt-0.5">ID: ${escape_html(network.networkId)}</p> <div class="mt-4 space-y-2 text-sm bg-muted/40 p-3 rounded-lg"><div class="flex justify-between items-center"><span class="text-muted-foreground text-xs uppercase tracking-wider font-semibold">Hubs</span> <div class="flex items-center justify-center bg-primary/10 text-primary font-bold px-2.5 py-0.5 rounded-full">${escape_html(network.hubCount)}</div></div></div></div> <div class="mt-5 border-t border-border pt-4"><button class="w-full btn-primary flex flex-1 items-center justify-between gap-1.5 rounded-lg py-2.5 px-4 text-xs font-semibold mb-2"><span>Ver Hubs</span> `);
          Arrow_right($$renderer2, { class: "h-4 w-4" });
          $$renderer2.push(`<!----></button> <button class="w-full flex items-center justify-center gap-1.5 rounded-lg py-2.5 px-3 text-xs mb-2 transition-all duration-200 ease-out active:scale-[0.98] font-medium border bg-blue-950/30 hover:bg-blue-900/50 text-white dark:text-blue-400 border-blue-800 shadow-sm hover:shadow-md">`);
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
        $$renderer3.push(`<form class="space-y-4 px-1"><div class="space-y-1.5"><label for="new-network-id" class="block text-sm font-medium text-card-foreground">ID de la Red</label> <input id="new-network-id" type="text"${attr("value", newNetworkId)} class="input-field font-mono" required="" placeholder="RED-001"/></div> <div class="space-y-1.5"><label for="new-network-name" class="block text-sm font-medium text-card-foreground">Nombre</label> <input id="new-network-name" type="text"${attr("value", newNetworkName)} class="input-field" required="" placeholder="Red de Sensores Planta A"/></div> `);
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
const hubs = writable([]);
const hubsLoading = writable(false);
const hubsError = writable(null);
const hubsSaving = writable(null);
function Network_hubs_page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    let edgeId = derived(() => store_get($$store_subs ??= {}, "$pageParams", pageParams).edgeId);
    let networkId = derived(() => store_get($$store_subs ??= {}, "$pageParams", pageParams).networkId);
    let currentEdge = derived(() => store_get($$store_subs ??= {}, "$edges", edges).find((e) => e.edgeId === edgeId()));
    let currentNetwork = derived(() => store_get($$store_subs ??= {}, "$networks", networks).find((n) => n.networkId === networkId()));
    function goBack() {
      navigateTo("edge-networks", { edgeId: edgeId() });
    }
    let showInfoModal = false;
    let showEditModal = false;
    let formHub = {
      hubId: "",
      deviceName: "",
      wifiSsid: "",
      wifiPassword: "",
      mqttUri: "",
      sample: "",
      energyMode: "Normal"
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
          $$renderer2.push(`<!--]--></div> <div class="mt-4 flex-1"><h4 class="text-2xl font-bold tracking-tight text-card-foreground">${escape_html(hub.hubId)}</h4> <div class="mt-2 space-y-1"><p class="text-sm text-card-foreground/80">${escape_html(hub.deviceName)}</p> <div${attr_class(`inline-block mt-2 px-2.5 py-0.5 rounded-full border ${hub.energyMode === "Bajo consumo" ? "bg-success/10 border-success/20 text-success" : hub.energyMode === "Balanceado" ? "bg-blue-500/10 border-blue-500/20 text-blue-500" : hub.energyMode === "Performance" ? "bg-destructive/10 border-destructive/20 text-destructive" : "bg-accent/10 border-accent/20 text-accent"}`)}><span class="text-[10px] font-medium">Modo Energía: ${escape_html(hub.energyMode)}</span></div></div></div> <div class="mt-6 flex gap-2 border-t border-border pt-4"><button class="btn-secondary flex flex-1 items-center justify-center gap-1.5 rounded-lg py-2.5 text-xs font-medium" aria-label="Ver información del Hub">`);
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
            $$renderer4.option({ value: "Bajo consumo" }, ($$renderer5) => {
              $$renderer5.push(`Bajo consumo`);
            });
            $$renderer4.option({ value: "Balanceado" }, ($$renderer5) => {
              $$renderer5.push(`Balanceado`);
            });
            $$renderer4.option({ value: "Performance" }, ($$renderer5) => {
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
function Dashboard_layout($$renderer, $$props) {
  var $$store_subs;
  const pages = {
    edge: Edge_page,
    "edge-networks": Edge_networks_page,
    certificates: Certificates_page,
    notifications: Notifications_page,
    firmware: Firmware_page,
    "network-hubs": Network_hubs_page
  };
  let SvelteComponent = derived(() => pages[store_get($$store_subs ??= {}, "$currentPage", currentPage)]);
  $$renderer.push(`<div class="min-h-screen bg-background"><div class="fixed inset-0 pointer-events-none overflow-hidden"><div class="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div> <div class="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"></div></div> `);
  Sidebar($$renderer);
  $$renderer.push(`<!----> <main class="relative ml-64 min-h-screen p-8"><div class="mx-auto max-w-7xl animate-fade-in"><!---->`);
  {
    $$renderer.push(`<div class="animate-fade-in">`);
    if (SvelteComponent()) {
      $$renderer.push("<!--[-->");
      SvelteComponent()($$renderer, {});
      $$renderer.push("<!--]-->");
    } else {
      $$renderer.push("<!--[!-->");
      $$renderer.push("<!--]-->");
    }
    $$renderer.push(`</div>`);
  }
  $$renderer.push(`<!----></div></main></div>`);
  if ($$store_subs) unsubscribe_stores($$store_subs);
}
function Login_page($$renderer, $$props) {
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
    $$renderer2.push(`<!----> <input id="email" type="email"${attr("value", email)} placeholder="correo@gmail.com" class="input-field pl-11" required=""/></div></div> <div class="space-y-2"><label for="password" class="block text-sm font-medium text-card-foreground">Contraseña</label> <div class="relative group">`);
    Lock($$renderer2, {
      class: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground\n                         transition-colors group-focus-within:text-primary"
    });
    $$renderer2.push(`<!----> <input id="password"${attr("type", "password")}${attr("value", password)} placeholder="••••••••" class="input-field pl-11 pr-12" required=""/> <button type="button" class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-muted-foreground transition-all duration-200 hover:text-foreground hover:bg-secondary">`);
    {
      $$renderer2.push("<!--[-1-->");
      Eye($$renderer2, { class: "h-4 w-4" });
    }
    $$renderer2.push(`<!--]--></button></div></div> <button type="submit"${attr("disabled", isLoading, true)} class="btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold disabled:cursor-not-allowed disabled:opacity-50">`);
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
function _page($$renderer, $$props) {
  $$renderer.component(($$renderer2) => {
    var $$store_subs;
    if (store_get($$store_subs ??= {}, "$auth", auth)) {
      $$renderer2.push("<!--[0-->");
      Dashboard_layout($$renderer2);
    } else {
      $$renderer2.push("<!--[-1-->");
      Login_page($$renderer2);
    }
    $$renderer2.push(`<!--]-->`);
    if ($$store_subs) unsubscribe_stores($$store_subs);
  });
}
export {
  _page as default
};
