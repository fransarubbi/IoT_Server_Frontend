import { Z as derived } from "./index2.js";
import { e as escape_html } from "./context.js";
function Empty_state($$renderer, $$props) {
  let { icon, title, description, actionLabel, onAction, children } = $$props;
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
  $$renderer.push(`<!--]--> `);
  if (children) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<div class="mt-4 w-full">`);
    children($$renderer);
    $$renderer.push(`<!----></div>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--></div>`);
}
export {
  Empty_state as E
};
