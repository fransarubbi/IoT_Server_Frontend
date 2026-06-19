import { a4 as attr_class, a3 as stringify, Z as derived } from "./index2.js";
import { e as escape_html } from "./context.js";
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
    },
    Inactive: {
      bg: "bg-destructive/15",
      text: "text-destructive",
      dot: "bg-destructive",
      label: "Inactivo",
      pulse: true
    },
    Normal: {
      bg: "bg-success/15",
      text: "text-success",
      dot: "bg-success",
      label: "Normal"
    },
    Balance: {
      bg: "bg-warning/15",
      text: "text-warning",
      dot: "bg-warning",
      label: "Balance"
    },
    "Safe Mode": {
      bg: "bg-orange-500/15",
      text: "text-orange-500",
      dot: "bg-orange-500",
      label: "Safe Mode"
    }
  };
  const config = derived(() => statusConfig[status] || statusConfig.offline);
  const sizeClasses = derived(() => size === "sm" ? "px-2.5 py-1 text-xs" : "px-3 py-1.5 text-sm");
  $$renderer.push(`<span${attr_class(`inline-flex items-center gap-1.5 rounded-full ${stringify(config().bg)} ${stringify(config().text)} ${sizeClasses()} font-medium transition-all duration-200 hover:scale-105`)}><span class="relative flex h-2 w-2">`);
  if (config().pulse) {
    $$renderer.push("<!--[0-->");
    $$renderer.push(`<span${attr_class(`absolute inline-flex h-full w-full animate-ping rounded-full ${stringify(config().dot)} opacity-75`)}></span>`);
  } else {
    $$renderer.push("<!--[-1-->");
  }
  $$renderer.push(`<!--]--> <span${attr_class(`relative inline-flex h-2 w-2 rounded-full ${stringify(config().dot)}`)}></span></span> ${escape_html(config().label)}</span>`);
}
export {
  Status_badge as S
};
