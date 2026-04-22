<script lang="ts">
  import { onMount } from 'svelte';
  import PageHeader from '$lib/components/page-header.svelte';
  import Modal from '$lib/components/modal.svelte';
  import EmptyState from '$lib/components/empty-state.svelte';
  import type { CertificateRequest } from '$lib/types';
  import {
    certificates,
    certificatesLoading,
    certificatesError,
    certificatesGenerating,
    certificatesActions,
  } from '$lib/stores/certificates';
  import {
    Plus,
    ShieldCheck,
    ShieldOff,
    FileKey,
    AlertCircle,
    Loader,
    CheckCircle,
  } from 'lucide-svelte';

  onMount(() => {
    certificatesActions.load();
  });

  let showCreateModal = $state(false);
  let revokeConfirmId = $state<string | null>(null);
  let actionError = $state<string | null>(null);

  // Full CertificateRequest form
  let form = $state<CertificateRequest>({
    displayName: '',
    deviceType: 'edge',
    commonName: '',
    organization: '',
    country: '',
    sanDomain: '',
    validityDays: 365,
  });

  function resetForm() {
    form = {
      displayName: '',
      deviceType: 'edge',
      commonName: '',
      organization: '',
      country: '',
      sanDomain: '',
      validityDays: 365,
    };
    actionError = null;
  }

  async function generateCertificate() {
    if (!form.displayName.trim() || !form.commonName.trim()) return;
    actionError = null;
    try {
      await certificatesActions.generate({ ...form });
      resetForm();
      showCreateModal = false;
    } catch (err) {
      actionError = err instanceof Error ? err.message : String(err);
    }
  }

  async function revokeCertificate(id: string) {
    actionError = null;
    try {
      await certificatesActions.revoke(id);
      revokeConfirmId = null;
    } catch (err) {
      actionError = err instanceof Error ? err.message : String(err);
    }
  }

  function formatDate(iso: string): string {
    return new Intl.DateTimeFormat('es', { dateStyle: 'medium' }).format(new Date(iso));
  }

  function getDaysUntilExpiry(iso: string): number {
    return Math.ceil((new Date(iso).getTime() - Date.now()) / (1000 * 60 * 60 * 24));
  }

  const statusConfig: Record<string, { color: string; label: string }> = {
    valid:   { color: 'text-success',     label: 'Válido' },
    expired: { color: 'text-destructive', label: 'Expirado' },
    revoked: { color: 'text-muted-foreground', label: 'Revocado' },
  };
</script>

<div class="space-y-6">
  <PageHeader
    title="Certificados Digitales"
    description="Gestiona los certificados de autenticación mutua del sistema"
  />

  <!-- Stats bar -->
  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5 transition-all duration-200 hover:border-primary/30">
        <span class="text-sm text-muted-foreground">Total:</span>
        <span class="font-bold text-card-foreground">{$certificates.length}</span>
      </div>
      <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5">
        <span class="h-2 w-2 rounded-full bg-success"></span>
        <span class="text-sm font-semibold text-success">{$certificates.filter((c) => c.status === 'valid').length} válidos</span>
      </div>
      <div class="flex items-center gap-2 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-2.5">
        <span class="h-2 w-2 rounded-full bg-destructive"></span>
        <span class="text-sm font-semibold text-destructive">{$certificates.filter((c) => c.status === 'expired').length} expirados</span>
      </div>
    </div>

    <button
      onclick={() => { resetForm(); showCreateModal = true; }}
      class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
    >
      <Plus class="h-4 w-4" />
      Generar Certificado
    </button>
  </div>

  {#if $certificatesLoading}
    <div class="flex items-center justify-center py-20 text-muted-foreground gap-3">
      <Loader class="h-6 w-6 animate-spin" />
      <span class="text-sm">Cargando certificados...</span>
    </div>
  {:else if $certificates.length === 0}
    <EmptyState
      icon={ShieldCheck}
      title="Sin certificados"
      description="No hay certificados mTLS configurados. Genera uno para asegurar las comunicaciones de tu sistema."
      actionLabel="Generar Certificado"
      onAction={() => { resetForm(); showCreateModal = true; }}
    />
  {:else}
    <div class="rounded-2xl border border-border bg-card overflow-hidden shadow-sm animate-fade-in">
      <table class="w-full">
        <thead>
          <tr class="border-b border-border bg-muted/30">
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Certificado</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Tipo</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Estado</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Emisión</th>
            <th class="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">Expiración</th>
            <th class="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Acciones</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-border">
          {#each $certificates as cert, i}
            {@const sc = statusConfig[cert.status] ?? statusConfig.revoked}
            {@const daysUntil = getDaysUntilExpiry(cert.expiresAt)}
            <tr class="stagger-item group transition-colors hover:bg-muted/20" style="animation-delay: {i * 0.03}s">
              <td class="px-6 py-4">
                <div class="flex items-center gap-3">
                  <div class="flex h-10 w-10 items-center justify-center rounded-xl bg-muted/50 transition-all duration-200 group-hover:bg-primary/10">
                    <FileKey class="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <span class="font-medium text-card-foreground block">{cert.displayName}</span>
                    {#if cert.commonName}
                      <span class="text-xs text-muted-foreground font-mono">{cert.commonName}</span>
                    {/if}
                  </div>
                </div>
              </td>
              <td class="px-6 py-4">
                <span class="inline-flex items-center rounded-md bg-muted/50 px-2.5 py-1 text-xs font-medium text-card-foreground capitalize">
                  {cert.deviceType}
                </span>
              </td>
              <td class="px-6 py-4">
                <span class="text-sm font-semibold {sc.color}">{sc.label}</span>
              </td>
              <td class="px-6 py-4 text-sm text-muted-foreground">
                {formatDate(cert.issuedAt)}
              </td>
              <td class="px-6 py-4">
                <div class="text-sm">
                  <span class="text-card-foreground">{formatDate(cert.expiresAt)}</span>
                  {#if cert.status === 'valid' && daysUntil <= 30}
                    <span class="ml-2 rounded-md bg-warning/10 px-1.5 py-0.5 text-xs font-medium text-warning">
                      {daysUntil}d
                    </span>
                  {/if}
                </div>
              </td>
              <td class="px-6 py-4">
                <div class="flex items-center justify-end gap-1">
                  {#if cert.status === 'valid'}
                    {#if revokeConfirmId === cert.id}
                      <div class="flex items-center gap-2">
                        <span class="text-xs text-muted-foreground">¿Confirmar?</span>
                        <button
                          onclick={() => revokeCertificate(cert.id)}
                          class="rounded-lg px-2.5 py-1 text-xs font-semibold bg-destructive text-destructive-foreground hover:bg-destructive/90 transition-all"
                        >
                          Sí
                        </button>
                        <button
                          onclick={() => (revokeConfirmId = null)}
                          class="rounded-lg px-2.5 py-1 text-xs font-semibold btn-secondary"
                        >
                          No
                        </button>
                      </div>
                    {:else}
                      <button
                        onclick={() => (revokeConfirmId = cert.id)}
                        title="Revocar certificado"
                        class="rounded-lg p-2 text-muted-foreground transition-all duration-200 hover:bg-destructive/10 hover:text-destructive hover:scale-110"
                      >
                        <ShieldOff class="h-4 w-4" />
                      </button>
                    {/if}
                  {:else}
                    <span class="text-xs text-muted-foreground italic px-2">—</span>
                  {/if}
                </div>
              </td>
            </tr>
          {/each}
        </tbody>
      </table>
    </div>
  {/if}
</div>

<!-- Generate Certificate Modal -->
<Modal open={showCreateModal} title="Generar Nuevo Certificado mTLS" onClose={() => (showCreateModal = false)}>
  <form onsubmit={(e) => { e.preventDefault(); generateCertificate(); }} class="space-y-4 px-1">

    <div class="grid grid-cols-2 gap-3">
      <div class="col-span-2 space-y-1.5">
        <label for="cert-displayName" class="block text-sm font-medium text-card-foreground">Nombre para mostrar</label>
        <input id="cert-displayName" type="text" bind:value={form.displayName} class="input-field" required placeholder="Edge Gateway Alpha — mTLS" />
      </div>

      <div class="space-y-1.5">
        <label for="cert-deviceType" class="block text-sm font-medium text-card-foreground">Tipo de dispositivo</label>
        <select id="cert-deviceType" bind:value={form.deviceType} class="input-field bg-background">
          <option value="edge">Edge</option>
          <option value="hub">Hub</option>
          <option value="server">Server</option>
          <option value="ca">CA</option>
          <option value="client">Client</option>
        </select>
      </div>

      <div class="space-y-1.5">
        <label for="cert-validityDays" class="block text-sm font-medium text-card-foreground">Validez (días)</label>
        <input id="cert-validityDays" type="number" min="1" max="3650" bind:value={form.validityDays} class="input-field" required />
      </div>

      <div class="col-span-2 space-y-1.5">
        <label for="cert-cn" class="block text-sm font-medium text-card-foreground">Common Name (CN)</label>
        <input id="cert-cn" type="text" bind:value={form.commonName} class="input-field font-mono" required placeholder="edge-alpha.local" />
      </div>

      <div class="space-y-1.5">
        <label for="cert-org" class="block text-sm font-medium text-card-foreground">Organización</label>
        <input id="cert-org" type="text" bind:value={form.organization} class="input-field" required placeholder="Mi Empresa S.A." />
      </div>

      <div class="space-y-1.5">
        <label for="cert-country" class="block text-sm font-medium text-card-foreground">País (código ISO 2)</label>
        <input id="cert-country" type="text" bind:value={form.country} class="input-field font-mono uppercase" maxlength="2" required placeholder="AR" />
      </div>

      <div class="col-span-2 space-y-1.5">
        <label for="cert-san" class="block text-sm font-medium text-card-foreground">SAN Domain</label>
        <input id="cert-san" type="text" bind:value={form.sanDomain} class="input-field font-mono" required placeholder="edge-alpha.local" />
        <p class="text-xs text-muted-foreground">Subject Alternative Name — normalmente igual al CN para dispositivos IoT.</p>
      </div>
    </div>

    <p class="text-xs text-muted-foreground bg-muted/40 border border-border rounded-lg px-3 py-2">
      Al confirmar, el certificado se generará y descargará automáticamente como un archivo ZIP.
    </p>

    {#if actionError}
      <div class="flex items-center gap-2 rounded-lg bg-destructive/10 border border-destructive/20 px-3 py-2 text-xs text-destructive">
        <AlertCircle class="h-3.5 w-3.5 shrink-0" />
        {actionError}
      </div>
    {/if}

    <div class="flex gap-3 pt-2">
      <button
        type="button"
        onclick={() => (showCreateModal = false)}
        class="btn-secondary flex-1 rounded-xl py-3 text-sm"
      >
        Cancelar
      </button>
      <button
        type="submit"
        disabled={$certificatesGenerating}
        class="btn-primary flex-1 rounded-xl py-3 text-sm flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {#if $certificatesGenerating}
          <Loader class="h-4 w-4 animate-spin" />
          Generando…
        {:else}
          <CheckCircle class="h-4 w-4" />
          Generar y Descargar
        {/if}
      </button>
    </div>
  </form>
</Modal>
