<script lang="ts">
  import { currentPage, type Page } from '$lib/stores/navigation';
  import { auth } from '$lib/stores/auth';
  import ThemeToggle from './theme-toggle.svelte';
  import { 
    Server, 
    ShieldCheck, 
    Bell, 
    HardDrive, 
    LogOut,
    ChevronRight,
    Cpu
  } from 'lucide-svelte';

  const navItems: { id: Page; label: string; icon: typeof Server }[] = [
    { id: 'edge', label: 'Edge', icon: Server },
    { id: 'certificates', label: 'Certificados', icon: ShieldCheck },
    { id: 'notifications', label: 'Notificaciones', icon: Bell },
    { id: 'firmware', label: 'Firmware', icon: HardDrive },
  ];

  function navigate(page: Page) {
    currentPage.set(page);
  }

  let { onLogout }: { onLogout?: () => void } = $props();
</script>

<!-- Complete sidebar redesign with modern styling and animations -->
<aside class="fixed left-0 top-0 z-40 flex h-screen w-64 flex-col 
              bg-sidebar border-r border-sidebar-border
              shadow-xl shadow-black/5">
  <!-- Logo -->
  <div class="flex h-16 items-center gap-3 border-b border-sidebar-border px-5">
    <div class="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg shadow-primary/30">
      <Cpu class="h-5 w-5 text-primary-foreground" />
      <!-- Pulse animation -->
      <span class="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
        <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
        <span class="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span>
      </span>
    </div>
    <div>
      <span class="text-lg font-bold text-sidebar-foreground">IoT Hub</span>
      <span class="block text-[10px] font-medium text-primary uppercase tracking-wider">Dashboard</span>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="flex-1 overflow-y-auto p-4">
    <p class="mb-3 px-3 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
      Panel Principal
    </p>
    <div class="space-y-1">
      {#each navItems as item, i}
        <button
          onclick={() => navigate(item.id)}
          class="stagger-item group flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium
                 transition-all duration-200 ease-out
                 {$currentPage === item.id 
                   ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/25' 
                   : 'text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent'}"
          style="animation-delay: {i * 0.05}s"
        >
          <div class="relative">
            <item.icon class="h-4.5 w-4.5 transition-transform duration-200 {$currentPage === item.id ? '' : 'group-hover:scale-110'}" />
          </div>
          <span class="flex-1 text-left">{item.label}</span>
          {#if $currentPage === item.id}
            <ChevronRight class="h-4 w-4 animate-slide-in" />
          {/if}
        </button>
      {/each}
    </div>
  </nav>

  <!-- User Section -->
  <div class="border-t border-sidebar-border p-4 space-y-3">
    <!-- User card -->
    <div class="flex items-center gap-3 rounded-xl bg-sidebar-accent/50 p-3 
                border border-transparent transition-all duration-200
                hover:border-primary/20 hover:bg-sidebar-accent">
      <div class="relative flex h-10 w-10 items-center justify-center rounded-xl 
                  bg-gradient-to-br from-primary to-accent text-primary-foreground font-semibold
                  shadow-md shadow-primary/20">
        {$auth?.name?.charAt(0).toUpperCase() || 'U'}
      </div>
      <div class="flex-1 min-w-0">
        <p class="truncate text-sm font-semibold text-sidebar-foreground">
          {$auth?.name || 'Usuario'}
        </p>
        <p class="truncate text-xs text-muted-foreground">
          {$auth?.email || 'usuario@email.com'}
        </p>
      </div>
    </div>
    
    <!-- Actions -->
    <div class="flex items-center gap-2">
      <ThemeToggle />
      <button
        onclick={() => onLogout?.()}
        class="flex flex-1 items-center justify-center gap-2 rounded-xl 
               bg-secondary border border-border px-3 py-2.5 
               text-sm font-medium text-foreground
               transition-all duration-200 ease-out
               hover:bg-destructive hover:text-destructive-foreground hover:border-destructive
               hover:shadow-lg hover:shadow-destructive/20
               active:scale-[0.98]"
      >
        <LogOut class="h-4 w-4 transition-transform duration-200 group-hover:-translate-x-0.5" />
        <span>Cerrar sesión</span>
      </button>
    </div>
  </div>
</aside>
