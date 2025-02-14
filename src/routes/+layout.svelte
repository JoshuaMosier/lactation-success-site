<script lang="ts">
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  
  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>Lactation Success | Professional Breastfeeding Support</title>
  <meta name="description" content="Professional in-home and virtual breastfeeding support by Carolyn Mosier APRN, IBCLC, RLC" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<slot /> 