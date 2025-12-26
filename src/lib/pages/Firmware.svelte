<script lang="ts">
  import type { Firmware } from '../types';

  let firmwares: Firmware[] = [
    {
      id: '1',
      version: '2.5.1',
      releaseDate: new Date('2024-12-15'),
      devices: 18,
      size: '4.2 MB'
    },
    {
      id: '2',
      version: '2.5.0',
      releaseDate: new Date('2024-11-28'),
      devices: 12,
      size: '4.1 MB'
    },
    {
      id: '3',
      version: '2.4.8',
      releaseDate: new Date('2024-10-10'),
      devices: 6,
      size: '3.9 MB'
    }
  ];

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    }).format(date);
  }
</script>

<div class="page">
  <header class="page-header">
    <div>
      <h2>Gestión de Firmware</h2>
      <p class="subtitle">Administra las versiones de firmware de tus dispositivos IoT</p>
    </div>
    <button class="btn-primary">+ Subir Firmware</button>
  </header>

  <div class="firmware-list">
    {#each firmwares as firmware}
      <div class="firmware-card">
        <div class="firmware-main">
          <div class="version-info">
            <span class="version-badge">v{firmware.version}</span>
            <div class="meta">
              <span class="date">{formatDate(firmware.releaseDate)}</span>
              <span class="size">{firmware.size}</span>
            </div>
          </div>
          
          <div class="device-count">
            <div class="count-number">{firmware.devices}</div>
            <div class="count-label">Dispositivos</div>
          </div>
        </div>

        <div class="firmware-actions">
          <button class="btn-action">📥 Descargar</button>
          <button class="btn-action">📤 Implementar</button>
          <button class="btn-action">📊 Estadísticas</button>
        </div>
      </div>
    {/each}
  </div>

  <div class="info-panel">
    <h3>Información</h3>
    <div class="info-items">
      <div class="info-item">
        <span class="info-icon">💡</span>
        <div>
          <strong>Versiones múltiples</strong>
          <p>Puedes tener diferentes versiones de firmware ejecutándose simultáneamente.</p>
        </div>
      </div>
      <div class="info-item">
        <span class="info-icon">🔄</span>
        <div>
          <strong>Actualizaciones OTA</strong>
          <p>Implementa actualizaciones over-the-air de manera segura.</p>
        </div>
      </div>
      <div class="info-item">
        <span class="info-icon">✅</span>
        <div>
          <strong>Validación</strong>
          <p>Todos los firmwares son verificados antes de la implementación.</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .page {
    max-width: 1400px;
    margin: 0 auto;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.25rem;
  }

  .subtitle {
    color: var(--text-secondary);
    font-size: 0.9375rem;
  }

  .firmware-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .firmware-card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.2s;
  }

  .firmware-card:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .firmware-main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  .version-info {
    display: flex;
    align-items: center;
    gap: 1.5rem;
  }

  .version-badge {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
  }

  .meta {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .device-count {
    text-align: center;
    padding: 0.75rem 1.5rem;
    background: var(--bg-secondary);
    border-radius: 10px;
  }

  .count-number {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--accent);
  }

  .count-label {
    font-size: 0.75rem;
    color: var(--text-secondary);
    margin-top: 0.25rem;
  }

  .firmware-actions {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
  }

  .btn-action {
    padding: 0.5rem 1rem;
    background: var(--bg-secondary);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    color: var(--text-primary);
  }

  .btn-action:hover {
    background: var(--bg-hover);
    transform: translateY(-1px);
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

  .info-panel {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
  }

  .info-panel h3 {
    font-size: 1.125rem;
    margin-bottom: 1rem;
    color: var(--text-primary);
  }

  .info-items {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .info-item {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
  }

  .info-icon {
    font-size: 1.5rem;
    flex-shrink: 0;
  }

  .info-item strong {
    display: block;
    margin-bottom: 0.25rem;
    color: var(--text-primary);
  }

  .info-item p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
  }

  @media (max-width: 768px) {
    .firmware-main {
      flex-direction: column;
      align-items: flex-start;
      gap: 1rem;
    }

    .version-info {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    .device-count {
      align-self: stretch;
    }
  }
</style>