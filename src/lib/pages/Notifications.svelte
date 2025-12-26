<script lang="ts">
  import type { Notification } from '../types';

  let notifications: Notification[] = [
    {
      id: '1',
      type: 'success',
      message: 'Actualización de firmware completada en 18 dispositivos',
      timestamp: new Date('2024-12-26T10:30:00'),
      read: false
    },
    {
      id: '2',
      type: 'warning',
      message: 'Certificado SSL expirará en 45 días',
      timestamp: new Date('2024-12-26T08:15:00'),
      read: false
    },
    {
      id: '3',
      type: 'error',
      message: 'Fallo de conexión en Red de Pruebas',
      timestamp: new Date('2024-12-25T22:45:00'),
      read: true
    },
    {
      id: '4',
      type: 'info',
      message: 'Nuevo firmware v2.5.1 disponible',
      timestamp: new Date('2024-12-25T14:20:00'),
      read: true
    }
  ];

  function formatTime(date: Date): string {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `Hace ${days} día${days > 1 ? 's' : ''}`;
    if (hours > 0) return `Hace ${hours} hora${hours > 1 ? 's' : ''}`;
    return 'Hace unos minutos';
  }

  function markAsRead(id: string) {
    notifications = notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    );
  }

  function deleteNotification(id: string) {
    notifications = notifications.filter(n => n.id !== id);
  }

  function markAllAsRead() {
    notifications = notifications.map(n => ({ ...n, read: true }));
  }

  $: unreadCount = notifications.filter(n => !n.read).length;
</script>

<div class="page">
  <header class="page-header">
    <div>
      <h2>Notificaciones</h2>
      {#if unreadCount > 0}
        <span class="unread-badge">{unreadCount} sin leer</span>
      {/if}
    </div>
    {#if unreadCount > 0}
      <button class="btn-primary" on:click={markAllAsRead}>
        Marcar todas como leídas
      </button>
    {/if}
  </header>

  <div class="notifications-list">
    {#if notifications.length === 0}
      <div class="empty-state">
        <span class="empty-icon">📭</span>
        <p>No hay notificaciones</p>
      </div>
    {:else}
      {#each notifications as notif}
        <article 
          class="notification-card" 
          class:unread={!notif.read}
          class:success={notif.type === 'success'}
          class:warning={notif.type === 'warning'}
          class:error={notif.type === 'error'}
          class:info={notif.type === 'info'}
        >
          <div class="notification-icon">
            {#if notif.type === 'success'}✅{/if}
            {#if notif.type === 'warning'}⚠️{/if}
            {#if notif.type === 'error'}❌{/if}
            {#if notif.type === 'info'}ℹ️{/if}
          </div>
          
          <div class="notification-content">
            <p class="notification-message">{notif.message}</p>
            <span class="notification-time">{formatTime(notif.timestamp)}</span>
          </div>

          <div class="notification-actions">
            {#if !notif.read}
              <button 
                class="btn-icon" 
                on:click={() => markAsRead(notif.id)}
                title="Marcar como leída"
              >
                ✓
              </button>
            {/if}
            <button 
              class="btn-icon" 
              on:click={() => deleteNotification(notif.id)}
              title="Eliminar"
            >
              🗑️
            </button>
          </div>
        </article>
      {/each}
    {/if}
  </div>
</div>

<style>
  .page {
    max-width: 900px;
    margin: 0 auto;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  .page-header > div {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .unread-badge {
    background: var(--accent);
    color: white;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .notifications-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .notification-card {
    display: flex;
    gap: 1rem;
    padding: 1.25rem;
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    transition: all 0.2s;
    position: relative;
  }

  .notification-card.unread {
    border-left: 4px solid var(--accent);
    background: var(--bg-secondary);
  }

  .notification-card:hover {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }

  .notification-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .notification-content {
    flex: 1;
  }

  .notification-message {
    color: var(--text-primary);
    margin-bottom: 0.5rem;
    line-height: 1.5;
  }

  .notification-time {
    font-size: 0.8125rem;
    color: var(--text-secondary);
  }

  .notification-actions {
    display: flex;
    gap: 0.5rem;
    align-items: flex-start;
  }

  .btn-icon {
    background: none;
    border: none;
    font-size: 1rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 6px;
    transition: background 0.2s;
    color: var(--text-primary);
  }

  .btn-icon:hover {
    background: var(--bg-hover);
  }

  .btn-primary {
    padding: 0.625rem 1.25rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
    background: var(--accent);
    color: white;
  }

  .btn-primary:hover {
    background: var(--accent-hover);
  }

  .empty-state {
    text-align: center;
    padding: 4rem 2rem;
    color: var(--text-secondary);
  }

  .empty-icon {
    font-size: 4rem;
    display: block;
    margin-bottom: 1rem;
  }

  .empty-state p {
    font-size: 1.125rem;
  }

  @media (max-width: 768px) {
    .page-header {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .notification-card {
      flex-wrap: wrap;
    }

    .notification-actions {
      width: 100%;
      justify-content: flex-end;
    }
  }
</style>