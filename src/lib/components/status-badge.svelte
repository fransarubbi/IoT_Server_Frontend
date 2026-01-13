<script lang="ts">
  let { 
    status, 
    size = 'sm' 
  }: { 
    status: 'online' | 'offline' | 'warning' | 'active' | 'inactive' | 'valid' | 'expired' | 'revoked' | 'available' | 'deploying' | 'deprecated';
    size?: 'sm' | 'md';
  } = $props();

  const statusConfig: Record<string, { bg: string; text: string; dot: string; label: string; pulse?: boolean }> = {
    online: { bg: 'bg-success/15', text: 'text-success', dot: 'bg-success', label: 'En línea', pulse: true },
    offline: { bg: 'bg-destructive/15', text: 'text-destructive', dot: 'bg-destructive', label: 'Desconectado' },
    warning: { bg: 'bg-warning/15', text: 'text-warning', dot: 'bg-warning', label: 'Advertencia', pulse: true },
    active: { bg: 'bg-success/15', text: 'text-success', dot: 'bg-success', label: 'Activo', pulse: true },
    inactive: { bg: 'bg-muted', text: 'text-muted-foreground', dot: 'bg-muted-foreground', label: 'Inactivo' },
    valid: { bg: 'bg-success/15', text: 'text-success', dot: 'bg-success', label: 'Válido' },
    expired: { bg: 'bg-destructive/15', text: 'text-destructive', dot: 'bg-destructive', label: 'Expirado' },
    revoked: { bg: 'bg-warning/15', text: 'text-warning', dot: 'bg-warning', label: 'Revocado' },
    available: { bg: 'bg-success/15', text: 'text-success', dot: 'bg-success', label: 'Disponible' },
    deploying: { bg: 'bg-primary/15', text: 'text-primary', dot: 'bg-primary', label: 'Desplegando', pulse: true },
    deprecated: { bg: 'bg-muted', text: 'text-muted-foreground', dot: 'bg-muted-foreground', label: 'Obsoleto' },
  };

  const config = statusConfig[status] || statusConfig.offline;
  const sizeClasses = size === 'sm' ? 'px-2.5 py-1 text-xs' : 'px-3 py-1.5 text-sm';
</script>

<!-- Enhanced badge with pulse animation for active states -->
<span class="inline-flex items-center gap-1.5 rounded-full {config.bg} {config.text} {sizeClasses} font-medium
             transition-all duration-200 hover:scale-105">
  <span class="relative flex h-2 w-2">
    {#if config.pulse}
      <span class="absolute inline-flex h-full w-full animate-ping rounded-full {config.dot} opacity-75"></span>
    {/if}
    <span class="relative inline-flex h-2 w-2 rounded-full {config.dot}"></span>
  </span>
  {config.label}
</span>
