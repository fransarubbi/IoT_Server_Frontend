<script lang="ts">
  import type { Certificate } from '../types';

  let certificates: Certificate[] = [
    {
      id: '1',
      name: 'Certificado SSL Principal',
      type: 'SSL/TLS',
      expirationDate: new Date('2025-06-15'),
      status: 'valid'
    },
    {
      id: '2',
      name: 'Certificado API Gateway',
      type: 'SSL/TLS',
      expirationDate: new Date('2025-02-10'),
      status: 'expiring'
    },
    {
      id: '3',
      name: 'Certificado Dev',
      type: 'Self-signed',
      expirationDate: new Date('2024-11-30'),
      status: 'expired'
    }
  ];

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es-ES', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }

  function getStatusLabel(status: Certificate['status']): string {
    const labels = {
      valid: 'Válido',
      expiring: 'Por vencer',
      expired: 'Expirado'
    };
    return labels[status];
  }
</script>

<div class="page">
  <header class="page-header">
    <h2>Certificados</h2>
    <button class="btn-primary">+ Agregar Certificado</button>
  </header>

  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Tipo</th>
          <th>Fecha de Expiración</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {#each certificates as cert}
          <tr>
            <td class="name-cell">{cert.name}</td>
            <td>{cert.type}</td>
            <td>{formatDate(cert.expirationDate)}</td>
            <td>
              <span class="badge" class:valid={cert.status === 'valid'} 
                    class:expiring={cert.status === 'expiring'}
                    class:expired={cert.status === 'expired'}>
                {getStatusLabel(cert.status)}
              </span>
            </td>
            <td>
              <div class="actions">
                <button class="btn-icon" title="Ver">👁️</button>
                <button class="btn-icon" title="Descargar">⬇️</button>
                <button class="btn-icon" title="Eliminar">🗑️</button>
              </div>
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
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

  .table-container {
    background: var(--bg-primary);
    border: 1px solid var(--border-color);
    border-radius: 12px;
    overflow: hidden;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background: var(--bg-secondary);
  }

  th {
    text-align: left;
    padding: 1rem 1.5rem;
    font-weight: 600;
    color: var(--text-secondary);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  td {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--border-color);
    color: var(--text-primary);
  }

  .name-cell {
    font-weight: 500;
  }

  tbody tr:hover {
    background: var(--bg-hover);
  }

  .badge {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
  }

  .badge.valid {
    background: #d4edda;
    color: #155724;
  }

  [data-theme="dark"] .badge.valid {
    background: #1e4620;
    color: #90ee90;
  }

  .badge.expiring {
    background: #fff3cd;
    color: #856404;
  }

  [data-theme="dark"] .badge.expiring {
    background: #664d03;
    color: #ffc107;
  }

  .badge.expired {
    background: #f8d7da;
    color: #721c24;
  }

  [data-theme="dark"] .badge.expired {
    background: #58151c;
    color: #f8d7da;
  }

  .actions {
    display: flex;
    gap: 0.5rem;
  }

  .btn-icon {
    background: none;
    border: none;
    font-size: 1.125rem;
    cursor: pointer;
    padding: 0.375rem;
    border-radius: 6px;
    transition: background 0.2s;
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

  @media (max-width: 768px) {
    .table-container {
      overflow-x: auto;
    }
    
    th, td {
      padding: 0.75rem;
      font-size: 0.875rem;
    }
  }
</style>