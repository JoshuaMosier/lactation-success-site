<script lang="ts">
  import { inject } from '@vercel/analytics';
  import { SpeedInsights } from '@vercel/speed-insights/svelte';
  
  // Initialize analytics
  inject();
</script>

<slot />
<SpeedInsights /> 