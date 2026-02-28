<script lang="ts">
  import { dev } from '$app/environment';
  import { injectAnalytics } from '@vercel/analytics/sveltekit';
  import '../app.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import Footer from '$lib/components/Footer.svelte';
  
  injectAnalytics({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
  <title>Lactation Success LLC | Professional Breastfeeding Support</title>
  <meta name="description" content="Professional in-home and telehealth breastfeeding support by Carolyn Mosier APRN, IBCLC, RLC" />
  <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="/favicon.ico" sizes="any" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
</svelte:head>

<div class="min-h-screen flex flex-col">
  <Navbar />

  <!-- Pause Banner -->
  <div class="bg-amber-50 border-b border-amber-200">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <p class="text-center text-amber-800 font-medium text-sm sm:text-base">
        Lactation Success is currently not accepting new appointments. Please check back soon for updates.
      </p>
    </div>
  </div>

  <main class="flex-grow">
    <slot />
  </main>

  <Footer />
</div> 