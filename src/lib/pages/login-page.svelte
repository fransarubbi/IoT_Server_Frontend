<script lang="ts">
  import { theme } from '$lib/stores/theme';
  import { auth } from '$lib/stores/auth';
  import ThemeToggle from '$lib/components/theme-toggle.svelte';
  import { Server, Mail, Lock, ArrowRight, Eye, EyeOff, Cpu } from 'lucide-svelte';

  let email = $state('');
  let password = $state('');
  let showPassword = $state(false);
  let isLoading = $state(false);
  let error = $state('');

  let { onLogin }: { onLogin?: () => void } = $props();

  async function handleLogin() {
    if (!email || !password) {
      error = 'Por favor, completa todos los campos';
      return;
    }

    isLoading = true;
    error = '';

    await new Promise(resolve => setTimeout(resolve, 1000));

    auth.login({
      id: '1',
      name: 'Admin Usuario',
      email: email,
      role: 'admin'
    });

    isLoading = false;
    onLogin?.();
  }
</script>

<!-- Complete login page redesign with modern styling -->
<div class="relative flex min-h-screen items-center justify-center bg-background p-4 overflow-hidden">
  <!-- Animated background elements -->
  <div class="pointer-events-none absolute inset-0">
    <div class="absolute -left-1/4 -top-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-pulse"></div>
    <div class="absolute -bottom-1/4 -right-1/4 h-96 w-96 rounded-full bg-accent/10 blur-3xl animate-pulse" style="animation-delay: 1s"></div>
    <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-64 w-64 rounded-full bg-primary/5 blur-3xl"></div>
  </div>

  <!-- Grid pattern overlay -->
  <div class="pointer-events-none absolute inset-0 opacity-[0.02]"
       style="background-image: radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0); background-size: 40px 40px;">
  </div>

  <div class="relative w-full max-w-md animate-scale-in">
    <!-- Theme Toggle -->
    <div class="absolute -top-16 right-0">
      <ThemeToggle />
    </div>

    <!-- Login Card -->
    <div class="rounded-3xl border border-border bg-card/80 backdrop-blur-xl p-8 shadow-2xl shadow-black/10">
      <!-- Logo -->
      <div class="flex flex-col items-center text-center">
        <div class="relative">
          <div class="absolute inset-0 rounded-2xl bg-primary/30 blur-xl"></div>
          <div class="relative flex h-16 w-16 items-center justify-center rounded-2xl 
                      bg-gradient-to-br from-primary to-accent shadow-lg shadow-primary/30">
            <Cpu class="h-8 w-8 text-primary-foreground" />
          </div>
        </div>
        <h1 class="mt-6 text-2xl font-bold text-card-foreground">IoT Hub</h1>
        <p class="mt-2 text-sm text-muted-foreground">
          Inicia sesión para acceder al panel de control
        </p>
      </div>

      <!-- Form -->
      <form onsubmit={(e) => { e.preventDefault(); handleLogin(); }} class="mt-8 space-y-5">
        {#if error}
          <div class="rounded-xl bg-destructive/10 border border-destructive/20 p-4 text-sm text-destructive animate-shake">
            {error}
          </div>
        {/if}

        <div class="space-y-2">
          <label for="email" class="block text-sm font-medium text-card-foreground">
            Correo electrónico
          </label>
          <div class="relative group">
            <Mail class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground 
                         transition-colors group-focus-within:text-primary" />
            <input
              id="email"
              type="email"
              bind:value={email}
              placeholder="admin@empresa.com"
              class="input-field pl-11"
              required
            />
          </div>
        </div>

        <div class="space-y-2">
          <label for="password" class="block text-sm font-medium text-card-foreground">
            Contraseña
          </label>
          <div class="relative group">
            <Lock class="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground
                         transition-colors group-focus-within:text-primary" />
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              bind:value={password}
              placeholder="••••••••"
              class="input-field pl-11 pr-12"
              required
            />
            <button
              type="button"
              onclick={() => showPassword = !showPassword}
              class="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg
                     text-muted-foreground transition-all duration-200
                     hover:text-foreground hover:bg-secondary"
            >
              {#if showPassword}
                <EyeOff class="h-4 w-4" />
              {:else}
                <Eye class="h-4 w-4" />
              {/if}
            </button>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <label class="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" class="h-4 w-4 rounded border-input accent-primary 
                                          transition-transform group-hover:scale-110" />
            <span class="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Recordarme
            </span>
          </label>
          <button type="button" class="text-sm font-medium text-primary transition-all
                                       hover:text-primary/80 hover:underline underline-offset-4">
            ¿Olvidaste tu contraseña?
          </button>
        </div>

        <button
          type="submit"
          disabled={isLoading}
          class="btn-primary w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold
                 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {#if isLoading}
            <div class="h-5 w-5 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent"></div>
            Iniciando sesión...
          {:else}
            Iniciar sesión
            <ArrowRight class="h-4 w-4 transition-transform group-hover:translate-x-1" />
          {/if}
        </button>
      </form>

      <!-- Footer -->
      <div class="mt-8 border-t border-border pt-6 text-center">
        <p class="text-sm text-muted-foreground">
          ¿No tienes una cuenta?{' '}
          <button class="font-medium text-primary transition-colors hover:text-primary/80">
            Contactar administrador
          </button>
        </p>
      </div>
    </div>

    <!-- Version -->
    <p class="mt-8 text-center text-xs text-muted-foreground">
      IoT Hub v2.0.0 • © 2025
    </p>
  </div>
</div>
