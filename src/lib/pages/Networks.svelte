<script lang="ts">
  import type { Networks } from '../types';
  

  let networks: Networks[] = [
    {
      id: '1',
      name: 'Red Principal',
      status: 'active',
      devices: 24,
      lastUpdate: new Date('2024-12-20')
    },
    {
      id: '2',
      name: 'Red Secundaria',
      status: 'active',
      devices: 12,
      lastUpdate: new Date('2024-12-22')
    },
    {
      id: '3',
      name: 'Red de Pruebas',
      status: 'inactive',
      devices: 5,
      lastUpdate: new Date('2024-12-15')
    }
  ];

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).format(date);
  }
</script>


<div class="page">
  <header class="page-header">
    <h2>Redes IoT</h2>
    <button class="btn-primary">+ Nueva Red</button>
  </header>

  <div class="cards-grid">
    {#each networks as network}
      <article class="card">
        <div class="card-header">
          <h3>{network.name}</h3>
          <span class="status" class:active={network.status === 'active'}>
            {network.status === 'active' ? 'Activa' : 'Inactiva'}
          </span>
        </div>
        <div class="card-body">
          <div class="info-row">
            <span class="label">Dispositivos:</span>
            <span class="value">{network.devices}</span>
          </div>
          <div class="info-row">
            <span class="label">Última actualización:</span>
            <span class="value">{formatDate(network.lastUpdate)}</span>
          </div>
        </div>
        <div class="card-footer">
          <button class="btn-secondary">Ver detalles</button>
          <button class="btn-secondary">Configurar</button>
        </div>
      </article>
    {/each}
  </div>
</div>

<style>
  .page {
    margin: 0 auto;
    max-width: none; 
    width: 100%;
    height: 100%;
  }

  .page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
  }

  h2 {
    font-size: 1.875rem;
    font-weight: 700;
    color: var(--text-primary);
  }

  .cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 1.5rem;
  }

  .card {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    padding: 1.5rem;
    transition: transform 0.2s, box-shadow 0.2s;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--text-primary);
  }

  .status {
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    background: #dc3545;
    color: white;
  }

  .status.active {
    background: #28a745;
  }

  .card-body {
    margin-bottom: 1.5rem;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
  }

  .label {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }

  .value {
    color: var(--text-primary);
    font-weight: 500;
  }

  .card-footer {
    display: flex;
    gap: 0.75rem;
  }

  .btn-primary, .btn-secondary {
    padding: 0.625rem 1.25rem;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    font-size: 0.875rem;
  }

  .btn-primary {
    background: var(--accent);
    color: white;
  }

  .btn-primary:hover {
    background: var(--accent-hover);
  }

  .btn-secondary {
    background: var(--bg-secondary);
    color: var(--text-primary);
    border: 1px solid var(--border-color);
    flex: 1;
  }

  .btn-secondary:hover {
    background: var(--bg-hover);
  }

  @media (max-width: 768px) {
    .cards-grid {
      grid-template-columns: 1fr;
    }
  }
</style>