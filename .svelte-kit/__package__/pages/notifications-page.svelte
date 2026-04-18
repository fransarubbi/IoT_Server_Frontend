<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from '../components/page-header.svelte';
  import EmptyState from '../components/empty-state.svelte';
  import { notifications, notificationsLoading, notificationsError, notificationsActions } from '../stores/notifications';
  import {
    Bell,
    CheckCheck,
    AlertTriangle,
    AlertCircle,
    Info,
    CheckCircle,
    Loader,
  } from 'lucide-svelte';

  onMount(() => {
    notificationsActions.load();
  });

  const typeConfig: Record<string, { icon: typeof Info; bgColor: string; iconColor: string; borderColor: string }> = {
    info:    { icon: Info,          bgColor: 'bg-primary/10',     iconColor: 'text-primary',     borderColor: 'border-l-primary' },
    warning: { icon: AlertTriangle, bgColor: 'bg-warning/10',     iconColor: 'text-warning',     borderColor: 'border-l-warning' },
    error:   { icon: AlertCircle,   bgColor: 'bg-destructive/10', iconColor: 'text-destructive', borderColor: 'border-l-destructive' },
    success: { icon: CheckCircle,   bgColor: 'bg-success/10',     iconColor: 'text-success',     borderColor: 'border-l-success' },
  };

  async function markAsRead(id: number) {
    try {
      await notificationsActions.markRead(id);
    } catch {
      // error shown via $notificationsError
    }
  }

  async function markAllAsRead() {
    try {
      await notificationsActions.markAllRead();
    } catch {
      // error shown via $notificationsError
    }
  }

  function formatTimestamp(iso: string): string {
    const date = new Date(iso);
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
</script>

<div class="space-y-6">
  <PageHeader
    title="Notificaciones"
    description="Alertas y eventos del sistema IoT"
  />

  <!-- Action bar -->
  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      {#if $notifications.length > 0}
        <div class="flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-2.5">
          <span class="flex h-6 w-6 items-center justify-center rounded-full
                       bg-primary text-xs font-bold text-primary-foreground
                       animate-pulse">
            {$notifications.length}
          </span>
          <span class="text-sm font-semibold text-primary">pendientes</span>
        </div>
      {/if}
    </div>

    <div class="flex items-center gap-2">
      {#if $notifications.length > 0}
        <button
          onclick={markAllAsRead}
          disabled={$notificationsLoading}
          class="btn-secondary flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm disabled:opacity-60"
        >
          <CheckCheck class="h-4 w-4" />
          Marcar todo leído
        </button>
      {/if}
    </div>
  </div>

  {#if $notificationsLoading}
    <div class="flex items-center justify-center py-20 text-muted-foreground gap-3">
      <Loader class="h-6 w-6 animate-spin" />
      <span class="text-sm">Cargando notificaciones...</span>
    </div>
  {:else if $notifications.length === 0}
    <EmptyState
      icon={Bell}
      title="Sin notificaciones"
      description="No tienes notificaciones pendientes. El sistema te alertará cuando haya eventos importantes."
    />
  {:else}
    <div class="space-y-3">
      {#each $notifications as notification, i}
        {@const config = typeConfig[notification.type] ?? typeConfig.info}
        <div
          class="stagger-item group relative rounded-2xl border bg-card p-5
                 transition-all duration-300 hover:shadow-lg
                 border-l-4 {config.borderColor} border-border shadow-md"
          style="animation-delay: {i * 0.05}s"
        >
          <div class="flex gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl {config.bgColor}
                        transition-transform duration-200 group-hover:scale-110">
              <config.icon class="h-6 w-6 {config.iconColor}" />
            </div>

            <div class="flex-1 min-w-0">
              <div class="flex items-start justify-between gap-2">
                <div class="flex-1 min-w-0">
                  <p class="font-medium text-card-foreground leading-relaxed">
                    {notification.description}
                  </p>
                  {#if notification.edgeId}
                    <p class="mt-1 text-xs text-muted-foreground font-mono">
                      Edge: {notification.edgeId}
                    </p>
                  {/if}
                </div>

                <div class="flex shrink-0 items-center gap-1 opacity-0 transition-all duration-200
                            translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  <button
                    onclick={() => markAsRead(notification.id)}
                    class="rounded-lg p-2 text-muted-foreground transition-all duration-200
                           hover:bg-primary/10 hover:text-primary hover:scale-110"
                    title="Marcar como leído"
                  >
                    <CheckCheck class="h-4 w-4" />
                  </button>
                </div>
              </div>

              <p class="mt-3 text-xs text-muted-foreground">
                {formatTimestamp(notification.createdAt)}
              </p>
            </div>
          </div>

          <!-- Unread dot -->
          <div class="absolute right-5 top-5 h-2.5 w-2.5 rounded-full bg-primary animate-pulse"></div>
        </div>
      {/each}
    </div>
  {/if}
</div>
