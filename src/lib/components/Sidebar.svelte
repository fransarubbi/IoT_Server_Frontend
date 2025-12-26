<script lang="ts">
  import { currentPage } from '../stores/navigation';
  import { theme } from '../stores/theme';
  import type { PageType } from '../types';
  import { Network, ShieldCheck, HardDrive, Bell, Sun, Moon } from 'lucide-svelte';
  import type { ComponentType } from 'svelte';

  interface MenuItem {
    id: PageType;
    label: string;
    icon: ComponentType; 
  }

  const menuItems: MenuItem[] = [
    { id: 'networks', label: 'Redes', icon: Network },       // El "mundito"
    { id: 'certificates', label: 'Certificados', icon: ShieldCheck },
    { id: 'firmware', label: 'Firmware', icon: HardDrive },
    { id: 'notifications', label: 'Notificaciones', icon: Bell }
  ];

  function toggleTheme() {
    theme.update(t => t === 'light' ? 'dark' : 'light');
  }

  function selectPage(pageId: PageType) {
    currentPage.set(pageId);
  }
</script>

<aside class="sidebar">
  <div class="sidebar-header">
    <h1>IoT Admin</h1>
    <button 
      class="theme-toggle" 
      on:click={toggleTheme}
      aria-label="Cambiar tema"
    >
      <svelte:component this={$theme === 'light' ? Moon : Sun} size={24} />
    </button>
  </div>

  <nav class="menu">
    {#each menuItems as item}
      <button
        class="menu-item"
        class:active={$currentPage === item.id}
        on:click={() => selectPage(item.id)}
      >
        <span class="icon">
            <svelte:component this={item.icon} size={20} />
        </span>
        <span class="label">{item.label}</span>
      </button>
    {/each}
  </nav>

  <div class="sidebar-footer">
    <p class="version">v1.0.0</p>
  </div>
</aside>



<style>
  .sidebar {
    width: var(--sidebar-width);
    background: var(--bg-primary);
    backdrop-filter: blur(10px);
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    transition: background 0.3s;
  }

  .sidebar-header {
    padding: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--accent);
  }

  .theme-toggle {
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 8px;
    transition: background 0.2s;
    color: var(--text-primary);
  }

  .theme-toggle:hover {
    background: var(--bg-hover);
  }

  .menu {
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .menu-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.875rem 1rem;
    background: none;
    border: none;
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s;
    text-align: left;
  }

  .menu-item:hover {
    background: var(--bg-hover);
  }

  .menu-item.active {
    background: var(--accent);
    color: white;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem; 
    height: 1.5rem; /* Asegurar altura para centrado vertical */
  }

  .sidebar-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid var(--border-color);
  }

  .version {
    font-size: 0.75rem;
    color: var(--text-secondary);
  }

  @media (max-width: 768px) {
    .sidebar {
      width: 100%;
      max-width: 280px;
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      z-index: 100;
    }
  }
</style>