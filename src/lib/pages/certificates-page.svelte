<script lang="ts">
  import PageHeader from '$lib/components/page-header.svelte';
  import Modal from '$lib/components/modal.svelte';
  import StatusBadge from '$lib/components/status-badge.svelte';
  import EmptyState from '$lib/components/empty-state.svelte';
  import type { Certificate } from '$lib/types';
  import { 
    Plus, 
    ShieldCheck, 
    Download, 
    Trash2, 
    Copy,
    Check,
    Key,
    FileKey,
    Building
  } from 'lucide-svelte';

  let certificates = $state<Certificate[]>([
    {
      id: '1',
      name: 'Root CA Certificate',
      type: 'ca',
      status: 'valid',
      issuedAt: new Date('2024-01-15'),
      expiresAt: new Date('2034-01-15'),
      fingerprint: 'SHA256:a1b2c3d4e5f6...'
    },
    {
      id: '2',
      name: 'Server Gateway mTLS',
      type: 'server',
      status: 'valid',
      issuedAt: new Date('2024-06-01'),
      expiresAt: new Date('2025-06-01'),
      fingerprint: 'SHA256:f6e5d4c3b2a1...'
    },
    {
      id: '3',
      name: 'Client Device Auth',
      type: 'client',
      status: 'expired',
      issuedAt: new Date('2023-01-01'),
      expiresAt: new Date('2024-01-01'),
      fingerprint: 'SHA256:1a2b3c4d5e6f...'
    },
    {
      id: '4',
      name: 'Legacy System Cert',
      type: 'client',
      status: 'revoked',
      issuedAt: new Date('2023-06-15'),
      expiresAt: new Date('2025-06-15'),
      fingerprint: 'SHA256:6f5e4d3c2b1a...'
    },
  ]);

  let showCreateModal = $state(false);
  let copiedId = $state<string | null>(null);

  let newCertName = $state('');
  let newCertType = $state<'client' | 'server' | 'ca'>('client');

  function createCertificate() {
    if (!newCertName.trim()) return;
    
    const newCert: Certificate = {
      id: crypto.randomUUID(),
      name: newCertName,
      type: newCertType,
      status: 'valid',
      issuedAt: new Date(),
      expiresAt: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
      fingerprint: `SHA256:${crypto.randomUUID().substring(0, 12)}...`
    };
    
    certificates = [...certificates, newCert];
    newCertName = '';
    newCertType = 'client';
    showCreateModal = false;
  }

  function deleteCertificate(id: string) {
    certificates = certificates.filter(c => c.id !== id);
  }

  function copyFingerprint(cert: Certificate) {
    navigator.clipboard.writeText(cert.fingerprint);
    copiedId = cert.id;
    setTimeout(() => copiedId = null, 2000);
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es', { dateStyle: 'medium' }).format(date);
  }

  function getDaysUntilExpiry(date: Date): number {
    return Math.ceil((date.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  }

  const typeConfig: Record<string, { icon: typeof Key; label: string; color: string }> = {
    ca: { icon: Building, label: 'CA', color: 'text-accent' },
    server: { icon: ShieldCheck, label: 'Servidor', color: 'text-primary' },
    client: { icon: Key, label: 'Cliente', color: 'text-success' },
  };
</script>

<div class="space-y-6">
  <PageHeader 
    title="Certificados mTLS"
    description="Gestiona los certificados de autenticación mutua del sistema"
  />

  <!-- Enhanced stats bar with animations -->
  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5
                  transition-all duration-200 hover:border-primary/30">
        <span class="text-sm text-muted-foreground">Total:</span>
        <span class="font-bold text-card-foreground">{certificates.length}</span>
      </div>
      <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5">
        <span class="h-2 w-2 rounded-full bg-success"></span>
        <span class="text-sm font-semibold text-success">{certificates.filter(c => c.status === 'valid').length} válidos</span>
      </div>
      <div class="flex items-center gap-2 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-2.5">
        <span class="h-2 w-2 rounded-full bg-destructive"></span>
        <span class="text-sm font-semibold text-destructive">{certificates.filter(c => c.status === 'expired').length} expirados</span>
      </div>
    </div>
    
    <button
      onclick={() => showCreateModal = true}
      class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
    >
      <Plus class="h-4 w-4" />
      Nuevo Certificado
    </button>
  </div>

  {#if certificates.length === 0}
    <EmptyState
      icon={ShieldCheck}
      title="Sin certificados"
      description="No hay certificados mTLS configurados. Crea uno para asegurar las comunicaciones de tu sistema."
      actionLabel="Crear Certificado"
      onAction={() => showCreateModal = true}
    />
  {:else}
    <!-- Enhanced table with modern styling -->
    <div class="rounded-2xl border border-border bg-card overflow-hidden shadow-sm animate-fade-in">
      <table class="w-full">
        <thead>
          <tr class="border-b border-border bg-muted/30">
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Certificado</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tipo</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estado</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Emisión</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expiración</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Fingerprint</th>
            <th class="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          {#each certificates as cert, i}
            {@const config = typeConfig[cert.type]}
            {@const daysUntil = getDaysUntilExpiry(cert.expiresAt)}
            <tr class="stagger-item group transition-colors hover:bg-muted/20" style="animation-delay: {i * 0.03}s">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50
                              transition-all duration-200 group-hover:bg-primary/10">
                    <FileKey class="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <span class="font-medium text-card-foreground">{cert.name}</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center gap-2">
                  <config.icon class="h-4 w-4 {config.color}" />
                  <span class="text-sm text-card-foreground">{config.label}</span>
                </div>
              </td>
              <td class="px-6 py-4">
                <StatusBadge status={cert.status} />
              </td>
              <td class="px-6 py-4 text-sm text-muted-foreground">
                {formatDate(cert.issuedAt)}
              </td>
              <td class="px-6 py-4">
                <div class="text-sm">
                  <span class="text-card-foreground">{formatDate(cert.expiresAt)}</span>
                  {#if cert.status === 'valid' && daysUntil <= 30}
                    <span class="ml-2 rounded-md bg-warning/10 px-1.5 py-0.5 text-xs font-medium text-warning">
                      {daysUntil} días
                    </span>
                  {/if}
                </div>
              </td>
              <td class="px-6 py-4">
                <button
                  onclick={() => copyFingerprint(cert)}
                  class="flex items-center gap-2 rounded-lg bg-muted/50 px-3 py-1.5 
                         font-mono text-xs text-muted-foreground 
                         transition-all duration-200 hover:bg-primary/10 hover:text-primary"
                >
                  <span class="max-w-[100px] truncate">{cert.fingerprint}</span>
                  {#if copiedId === cert.id}
                    <Check class="h-3.5 w-3.5 text-success" />
                  {:else}
                    <Copy class="h-3.5 w-3.5" />
                  {/if}
                </button>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center justify-end gap-1">
                  <button class="rounded-lg p-2 text-muted-foreground transition-all duration-200
                                 hover:bg-primary/10 hover:text-primary hover:scale-110">
                    <Download class="h-4 w-4" />
                  </button>
                  <button 
                    onclick={() => deleteCertificate(cert.id)}
                    class="rounded-lg p-2 text-muted-foreground transition-all duration-200
                           hover:bg-destructive/10 hover:text-destructive hover:scale-110"
                  >
                    <Trash2 class="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<!-- Create Certificate Modal -->
<Modal open={showCreateModal} title="Nuevo Certificado mTLS" onClose={() => showCreateModal = false}>
  <form onsubmit={(e) => { e.preventDefault(); createCertificate(); }} class="space-y-5">
    <div class="space-y-2">
      <label for="cert-name" class="block text-sm font-medium text-card-foreground">
        Nombre del Certificado
      </label>
      <input
        id="cert-name"
        type="text"
        bind:value={newCertName}
        placeholder="Mi Certificado..."
        class="input-field"
        required
      />
    </div>
    
    <fieldset class="space-y-2">
      <legend class="block text-sm font-medium text-card-foreground">
        Tipo de Certificado
      </legend>
      <div class="grid grid-cols-3 gap-3" role="radiogroup" aria-label="Tipo de certificado">
        {#each Object.entries(typeConfig) as [type, config]}
          <button
            type="button"
            onclick={() => newCertType = type as 'client' | 'server' | 'ca'}
            role="radio"
            aria-checked={newCertType === type}
            class="flex flex-col items-center gap-2 rounded-xl border-2 p-4 
                   transition-all duration-200
                   {newCertType === type 
                     ? 'border-primary bg-primary/5 shadow-md shadow-primary/10' 
                     : 'border-border hover:border-primary/50 hover:bg-muted/50'}"
          >
            <config.icon class="h-6 w-6 {config.color} transition-transform duration-200
                                {newCertType === type ? 'scale-110' : ''}" />
            <span class="text-sm font-medium text-card-foreground">{config.label}</span>
          </button>
        {/each}
      </div>
    </fieldset>
    
    <div class="flex gap-3 pt-2">
      <button
        type="button"
        onclick={() => showCreateModal = false}
        class="btn-secondary flex-1 rounded-xl py-3 text-sm"
      >
        Cancelar
      </button>
      <button type="submit" class="btn-primary flex-1 rounded-xl py-3 text-sm">
        Generar Certificado
      </button>
    </div>
  </form>
</Modal>
