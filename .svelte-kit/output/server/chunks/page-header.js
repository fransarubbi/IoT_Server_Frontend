import { e as escape_html } from "./context.js";
import "clsx";
import { T as Theme_toggle } from "./theme-toggle.js";
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
export {
  Page_header as P
};
