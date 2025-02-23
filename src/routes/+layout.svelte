<script lang="ts">
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>Lactation Success | Professional Breastfeeding Support</title>
  <meta name="description" content="Professional in-home and telehealth breastfeeding support by Carolyn Mosier APRN, IBCLC, RLC" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />
  
  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
</div> 