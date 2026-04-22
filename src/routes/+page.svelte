<script lang="ts">
  import { goto } from '$app/navigation';
  import { isAuthenticated, authLoading } from '$lib/stores/auth';

  $effect(() => {
    if (!$authLoading) {
      if ($isAuthenticated) {
        goto('/edge');
      } else {
        goto('/login');
      }
    }
  });
</script>

<div class="flex min-h-screen items-center justify-center bg-background">
  <div class="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
</div>
