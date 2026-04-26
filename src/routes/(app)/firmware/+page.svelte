<script lang="ts">
  import PageHeader from '$lib/components/page-header.svelte';
  import Modal from '$lib/components/modal.svelte';
  import StatusBadge from '$lib/components/status-badge.svelte';
  import EmptyState from '$lib/components/empty-state.svelte';
  import type { Firmware } from '$lib/types';
  import Plus from 'lucide-svelte/icons/plus';
  import HardDrive from 'lucide-svelte/icons/hard-drive';
  import Download from 'lucide-svelte/icons/download';
  import Trash2 from 'lucide-svelte/icons/trash-2';
  import Upload from 'lucide-svelte/icons/upload';
  import Package from 'lucide-svelte/icons/package';
  import Cpu from 'lucide-svelte/icons/cpu';
  import Clock from 'lucide-svelte/icons/clock';
  import FileCode from 'lucide-svelte/icons/file-code';

  let firmwares = $state<Firmware[]>([
    {
      id: '1',
      name: 'Edge Core Firmware',
      version: '2.4.1',
      size: '24.5 MB',
      uploadedAt: new Date('2025-01-05'),
      status: 'available',
      targetDevices: ['Edge Gateway', 'Node Controller'],
      checksum: 'sha256:a1b2c3d4e5f6...'
    },
    {
      id: '2',
      name: 'Sensor Module',
      version: '1.8.3',
      size: '8.2 MB',
      uploadedAt: new Date('2025-01-02'),
      status: 'deploying',
      targetDevices: ['Temperature Sensor', 'Humidity Sensor'],
      checksum: 'sha256:f6e5d4c3b2a1...'
    },
    {
      id: '3',
      name: 'Network Bridge',
      version: '3.1.0',
      size: '15.7 MB',
      uploadedAt: new Date('2024-12-20'),
      status: 'available',
      targetDevices: ['Bridge Module'],
      checksum: 'sha256:1a2b3c4d5e6f...'
    },
    {
      id: '4',
      name: 'Legacy Controller',
      version: '1.2.0',
      size: '12.1 MB',
      uploadedAt: new Date('2024-06-15'),
      status: 'deprecated',
      targetDevices: ['Legacy Gateway'],
      checksum: 'sha256:6f5e4d3c2b1a...'
    },
  ]);

  let showUploadModal = $state(false);
  
  let newFirmwareName = $state('');
  let newFirmwareVersion = $state('');
  let selectedFile = $state<File | null>(null);

  function uploadFirmware() {
    if (!newFirmwareName.trim() || !newFirmwareVersion.trim()) return;
    
    const newFirmware: Firmware = {
      id: crypto.randomUUID(),
      name: newFirmwareName,
      version: newFirmwareVersion,
      size: selectedFile ? `${(selectedFile.size / (1024 * 1024)).toFixed(1)} MB` : '0 MB',
      uploadedAt: new Date(),
      status: 'available',
      targetDevices: [],
      checksum: `sha256:${crypto.randomUUID().substring(0, 12)}...`
    };
    
    firmwares = [newFirmware, ...firmwares];
    newFirmwareName = '';
    newFirmwareVersion = '';
    selectedFile = null;
    showUploadModal = false;
  }

  function deleteFirmware(id: string) {
    firmwares = firmwares.filter(f => f.id !== id);
  }

  function deprecateFirmware(id: string) {
    firmwares = firmwares.map(f => 
      f.id === id ? { ...f, status: 'deprecated' as const } : f
    );
  }

  function formatDate(date: Date): string {
    return new Intl.DateTimeFormat('es', { dateStyle: 'medium' }).format(date);
  }

  function handleFileSelect(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      selectedFile = target.files[0];
    }
  }
</script>

<div class="space-y-6">
  <PageHeader 
    title="Gestión de Firmware"
    description="Administra las versiones de firmware para tus dispositivos IoT"
  />

  <!-- Enhanced stats bar -->
  <div class="flex items-center justify-between animate-slide-in">
    <div class="flex items-center gap-3">
      <div class="flex items-center gap-2 rounded-xl bg-card border border-border px-4 py-2.5
                  transition-all duration-200 hover:border-primary/30">
        <Package class="h-4 w-4 text-primary" />
        <span class="text-sm text-muted-foreground">Total:</span>
        <span class="font-bold text-card-foreground">{firmwares.length} versiones</span>
      </div>
      <div class="flex items-center gap-2 rounded-xl bg-success/10 border border-success/20 px-4 py-2.5">
        <span class="h-2 w-2 rounded-full bg-success"></span>
        <span class="text-sm font-semibold text-success">{firmwares.filter(f => f.status === 'available').length} disponibles</span>
      </div>
    </div>
    
    <button
      onclick={() => showUploadModal = true}
      class="btn-primary flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm"
    >
      <Upload class="h-4 w-4" />
      Subir Firmware
    </button>
  </div>

  {#if firmwares.length === 0}
    <EmptyState
      icon={HardDrive}
      title="Sin firmware"
      description="No hay versiones de firmware cargadas. Sube una nueva versión para comenzar."
      actionLabel="Subir Firmware"
      onAction={() => showUploadModal = true}
    />
  {:else}
    <div class="grid gap-4 lg:grid-cols-2">
      {#each firmwares as firmware, i}
        <!-- Enhanced firmware cards with animations -->
        <div class="stagger-item card-interactive group p-6" style="animation-delay: {i * 0.05}s">
          <div class="flex items-start justify-between">
            <div class="flex items-center gap-4">
              <div class="relative">
                <div class="absolute inset-0 rounded-2xl bg-primary/20 blur-lg opacity-0 
                            transition-opacity duration-300 group-hover:opacity-100"></div>
                <div class="relative flex h-14 w-14 items-center justify-center rounded-2xl 
                            bg-gradient-to-br from-primary/20 to-primary/10
                            transition-transform duration-300 group-hover:scale-110">
                  <Cpu class="h-7 w-7 text-primary" />
                </div>
              </div>
              <div>
                <div class="flex items-center gap-3">
                  <h3 class="font-semibold text-card-foreground">{firmware.name}</h3>
                  <span class="rounded-lg bg-muted px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    v{firmware.version}
                  </span>
                </div>
                <div class="mt-1">
                  <StatusBadge status={firmware.status} />
                </div>
              </div>
            </div>
          </div>

          <div class="mt-5 grid grid-cols-2 gap-3">
            <div class="rounded-xl bg-muted/30 p-4 transition-colors duration-200 hover:bg-muted/50">
              <div class="flex items-center gap-2 text-xs text-muted-foreground">
                <FileCode class="h-4 w-4" />
                Tamaño
              </div>
              <p class="mt-1.5 font-semibold text-card-foreground">{firmware.size}</p>
            </div>
            <div class="rounded-xl bg-muted/30 p-4 transition-colors duration-200 hover:bg-muted/50">
              <div class="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock class="h-4 w-4" />
                Subido
              </div>
              <p class="mt-1.5 font-semibold text-card-foreground">{formatDate(firmware.uploadedAt)}</p>
            </div>
          </div>

          {#if firmware.targetDevices.length > 0}
            <div class="mt-4">
              <p class="text-xs text-muted-foreground mb-2">Dispositivos compatibles:</p>
              <div class="flex flex-wrap gap-1.5">
                {#each firmware.targetDevices as device}
                  <span class="rounded-lg bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground
                               transition-colors duration-200 hover:bg-primary/10 hover:text-primary">
                    {device}
                  </span>
                {/each}
              </div>
            </div>
          {/if}

          <div class="mt-5 flex gap-2 opacity-0 transition-all duration-300 
                      translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
            <button class="btn-primary flex flex-1 items-center justify-center gap-1.5 rounded-xl py-2.5 text-xs">
              <Download class="h-4 w-4" />
              Descargar
            </button>
            {#if firmware.status !== 'deprecated'}
              <button 
                onclick={() => deprecateFirmware(firmware.id)}
                class="flex items-center justify-center rounded-xl border border-border bg-card 
                       px-4 py-2.5 text-xs font-medium text-muted-foreground
                       transition-all duration-200 hover:bg-warning/10 hover:text-warning hover:border-warning/30"
              >
                Deprecar
              </button>
            {/if}
            <button 
              onclick={() => deleteFirmware(firmware.id)}
              class="flex items-center justify-center rounded-xl border border-border bg-card 
                     px-4 py-2.5 text-destructive transition-all duration-200
                     hover:bg-destructive hover:text-destructive-foreground hover:border-destructive
                     hover:shadow-lg hover:shadow-destructive/20"
            >
              <Trash2 class="h-4 w-4" />
            </button>
          </div>
        </div>
      {/each}
    </div>
  {/if}
</div>

<!-- Upload Firmware Modal -->
<Modal open={showUploadModal} title="Subir Nuevo Firmware" onClose={() => showUploadModal = false}>
  <form onsubmit={(e) => { e.preventDefault(); uploadFirmware(); }} class="space-y-5">
    <div class="space-y-2">
      <label for="firmware-name" class="block text-sm font-medium text-card-foreground">
        Nombre del Firmware
      </label>
      <input
        id="firmware-name"
        type="text"
        bind:value={newFirmwareName}
        placeholder="Edge Core Firmware..."
        class="input-field"
        required
      />
    </div>
    
    <div class="space-y-2">
      <label for="firmware-version" class="block text-sm font-medium text-card-foreground">
        Versión
      </label>
      <input
        id="firmware-version"
        type="text"
        bind:value={newFirmwareVersion}
        placeholder="1.0.0"
        class="input-field font-mono"
        required
      />
    </div>
    
    <div class="space-y-2">
      <label for="firmware-file" class="block text-sm font-medium text-card-foreground">
        Archivo de Firmware
      </label>
      <div class="relative">
        <input
          type="file"
          onchange={handleFileSelect}
          accept=".bin,.hex,.fw"
          class="hidden"
          id="firmware-file"
        />
        <label
          for="firmware-file"
          class="flex cursor-pointer flex-col items-center justify-center gap-3 
                 rounded-xl border-2 border-dashed border-input bg-muted/20 p-8 
                 transition-all duration-200 hover:border-primary hover:bg-primary/5"
        >
          <div class="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
            <Upload class="h-6 w-6 text-primary" />
          </div>
          <div class="text-center">
            {#if selectedFile}
              <p class="font-medium text-card-foreground">{selectedFile.name}</p>
              <p class="text-sm text-muted-foreground">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
            {:else}
              <p class="text-sm font-medium text-card-foreground">
                Click para seleccionar o arrastra un archivo
              </p>
              <p class="text-xs text-muted-foreground mt-1">.bin, .hex, .fw</p>
            {/if}
          </div>
        </label>
      </div>
    </div>
    
    <div class="flex gap-3 pt-2">
      <button
        type="button"
        onclick={() => showUploadModal = false}
        class="btn-secondary flex-1 rounded-xl py-3 text-sm"
      >
        Cancelar
      </button>
      <button type="submit" class="btn-primary flex-1 rounded-xl py-3 text-sm">
        Subir Firmware
      </button>
    </div>
  </form>
</Modal>
