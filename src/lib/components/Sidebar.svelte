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
    { id: 'networks', label: 'Redes', icon: Network },       
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
  /* Contenedor del Sidebar con efecto cristal */
  .sidebar {
    width: var(--sidebar-width);
    background: color-mix(in srgb, var(--bg-primary), transparent 10%); 
    border-right: 1px solid var(--border-color);
    display: flex;
    flex-direction: column;
    transition: all 0.5s ease;
    
    /* (Blur) detrás del sidebar */
    backdrop-filter: blur(12px); 
    -webkit-backdrop-filter: blur(12px);
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
    /* Un pequeño degradado en el texto del título */
    background: linear-gradient(120deg, var(--text-primary), var(--accent));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

  /* ESTILOS DE LOS ITEMS DEL MENÚ */
  .menu-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.875rem 1rem;
    background: transparent; /* Fondo transparente por defecto */
    border: 1px solid transparent; /* Borde invisible para evitar saltos */
    border-radius: 12px; /* Bordes más redondeados */
    color: var(--text-secondary); /* Color apagado por defecto */
    font-size: 0.9375rem;
    font-weight: 500;
    cursor: pointer;
    
    /* Transición suave para todos los cambios */
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    position: relative;
    overflow: hidden;
  }

  /* Efecto Hover (Sutil) */
  .menu-item:hover {
    background: rgba(255, 255, 255, 0.05); /* Blanco muy tenue */
    color: var(--text-primary);
    transform: translateX(4px); /* Pequeño desplazamiento a la derecha */
  }

  /* ESTADO ACTIVO (Aquí está la magia) */
  .menu-item.active {
    /* Gradiente horizontal suave usando tu color de acento */
    background: linear-gradient(90deg, 
      rgba(13, 110, 253, 0.15) 0%, 
      rgba(13, 110, 253, 0.05) 100%
    );
    
    color: var(--accent); /* El texto se pinta del color acento */
    border-color: rgba(13, 110, 253, 0.3); /* Borde sutil */
    
    /* Pequeño resplandor (Glow) */
    box-shadow: 0 0 15px rgba(13, 110, 253, 0.1);
  }

  /* Barrita indicadora a la izquierda del item activo */
  .menu-item.active::before {
    content: '';
    position: absolute;
    left: 0;
    top: 20%;
    bottom: 20%;
    width: 3px;
    background: var(--accent);
    border-radius: 0 4px 4px 0;
    box-shadow: 0 0 8px var(--accent);
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem; 
    height: 1.5rem;
    /* El icono también transiciona */
    transition: transform 0.2s;
  }

  /* El icono activo brilla un poco más */
  .menu-item.active .icon {
    transform: scale(1.1);
    filter: drop-shadow(0 0 5px rgba(13, 110, 253, 0.4));
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