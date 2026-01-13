<script lang="ts">
  import PageHeader from '$lib/components/page-header.svelte';
  import EmptyState from '$lib/components/empty-state.svelte';
  import type { Notification } from '$lib/types';
  import { 
    Bell, 
    CheckCheck,
    AlertTriangle,
    AlertCircle,
    Info,
    CheckCircle,
    Trash2,
    X
  } from 'lucide-svelte';

  let notifications = $state<Notification[]>([
    {
      id: '1',
      type: 'error',
      title: 'Edge Gateway Gamma desconectado',
      message: 'El dispositivo Edge Gateway Gamma ha perdido conexión. Última conexión hace 24 horas.',
      timestamp: new Date(Date.now() - 3600000),
      read: false
    },
    {
      id: '2',
      type: 'warning',
      title: 'Certificado próximo a expirar',
      message: 'El certificado "Server Gateway mTLS" expirará en 30 días. Considera renovarlo.',
      timestamp: new Date(Date.now() - 7200000),
      read: false
    },
    {
      id: '3',
      type: 'success',
      title: 'Firmware desplegado exitosamente',
      message: 'La versión 2.4.1 del firmware ha sido desplegada en 156 dispositivos.',
      timestamp: new Date(Date.now() - 86400000),
      read: true
    },
    {
      id: '4',
      type: 'info',
      title: 'Nueva actualización disponible',
      message: 'Hay una nueva versión del firmware (v2.5.0) disponible para descargar.',
      timestamp: new Date(Date.now() - 172800000),
      read: true
    },
    {
      id: '5',
      type: 'warning',
      title: 'Alta latencia detectada',
      message: 'Se ha detectado alta latencia en la red "Red Industrial" del Edge Gateway Alpha.',
      timestamp: new Date(Date.now() - 259200000),
      read: true
    },
  ]);

  const typeConfig: Record<string, { icon: typeof Info; bgColor: string; iconColor: string; borderColor: string }> = {
    info: { icon: Info, bgColor: 'bg-primary/10', iconColor: 'text-primary', borderColor: 'border-l-primary' },
    warning: { icon: AlertTriangle, bgColor: 'bg-warning/10', iconColor: 'text-warning', borderColor: 'border-l-warning' },
    error: { icon: AlertCircle, bgColor: 'bg-destructive/10', iconColor: 'text-destructive', borderColor: 'border-l-destructive' },
    success: { icon: CheckCircle, bgColor: 'bg-success/10', iconColor: 'text-success', borderColor: 'border-l-success' },
  };

  function markAsRead(id: string) {
    notifications = notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    );
  }

  function markAllAsRead() {
    notifications = notifications.map(n => ({ ...n, read: true }));
  }

  function deleteNotification(id: string) {
    notifications = notifications.filter(n => n.id !== id);
  }

  function clearAll() {
    notifications = [];
  }

  function formatTimestamp(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);

    if (minutes < 60) return `Hace ${minutes} min`;
    if (hours < 24) return `Hace ${hours}h`;
    if (days < 7) return `Hace ${days} días`;
    return new Intl.DateTimeFormat('es', { dateStyle: 'short' }).format(date);
  }

  const unreadCount = $derived(notifications.filter(n => !n.read).length);
</script>

<div class="space-y-6">
  <PageHeader 
    title="Notificaciones"
    description="Alertas y eventos del sistema IoT"
  />

  <!-- Enhanced action bar with animations -->
  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      {#if unreadCount > 0}
        <div class="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5">
          <span class="flex h-6 w-6 items-center justify-center rounded-full 
                       bg-primary text-xs font-bold text-primary-foreground
                       animate-pulse">
            {unreadCount}
          </span>
          <span class="text-sm font-semibold text-primary">sin leer</span>
        </div>
      {/if}
    </div>
    
    <div class="flex items-center gap-2">
      {#if unreadCount > 0}
        <button
          onclick={markAllAsRead}
          class="btn-secondary flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm"
        >
          <CheckCheck class="h-4 w-4" />
          Marcar todo leído
        </button>
      {/if}
      {#if notifications.length > 0}
        <button
          onclick={clearAll}
          class="flex items-center gap-2 rounded-xl border border-border bg-card 
                 px-4 py-2.5 text-sm font-medium text-destructive
                 transition-all duration-200 hover:bg-destructive/10 hover:border-destructive/30"
        >
          <Trash2 class="h-4 w-4" />
          Limpiar todo
        </button>
      {/if}
    </div>
  </div>

  {#if notifications.length === 0}
    <EmptyState
      icon={Bell}
      title="Sin notificaciones"
      description="No tienes notificaciones pendientes. El sistema te alertará cuando haya eventos importantes."
    />
  {:else}
    <div class="space-y-3">
      {#each notifications as notification, i}
        {@const config = typeConfig[notification.type]}
        <!-- Enhanced notification cards with animations -->
        <div 
          class="stagger-item group relative rounded-2xl border bg-card p-5 
                 transition-all duration-300 hover:shadow-lg
                 {notification.read 
                   ? 'border-border opacity-70 hover:opacity-100' 
                   : `border-l-4 ${config.borderColor} border-border shadow-md`}"
          style="animation-delay: {i * 0.05}s"
        >
          <div class="flex gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl {config.bgColor}
                        transition-transform duration-200 group-hover:scale-110">
              <config.icon class="h-6 w-6 {config.iconColor}" />
            </div>
            
            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <div>
                  <h4 class="font-semibold {notification.read ? 'text-muted-foreground' : 'text-card-foreground'}">
                    {notification.title}
                  </h4>
                  <p class="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {notification.message}
                  </p>
                </div>
                
                <div class="flex shrink-0 items-center gap-1 opacity-0 transition-all duration-200 
                            translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  {#if !notification.read}
                    <button
                      onclick={() => markAsRead(notification.id)}
                      class="rounded-lg p-2 text-muted-foreground transition-all duration-200
                             hover:bg-primary/10 hover:text-primary hover:scale-110"
                      title="Marcar como leído"
                    >
                      <CheckCheck class="h-4 w-4" />
                    </button>
                  {/if}
                  <button
                    onclick={() => deleteNotification(notification.id)}
                    class="rounded-lg p-2 text-muted-foreground transition-all duration-200
                           hover:bg-destructive/10 hover:text-destructive hover:scale-110"
                    title="Eliminar"
                  >
                    <X class="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <p class="mt-3 text-xs text-muted-foreground">
                {formatTimestamp(notification.timestamp)}
              </p>
            </div>
          </div>
          
          {#if !notification.read}
            <div class="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></div>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
</div>
