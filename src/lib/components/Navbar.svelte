<script lang="ts">
  import { page } from '$app/stores';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';
  
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const closeMenu = () => {
    isMenuOpen = false;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/appointments', label: 'Appointments' },
    { href: '/insurance', label: 'Insurance' },
    { href: '/faq', label: 'FAQs' },
    { href: '/about', label: 'About Me' }
  ];
</script>

<nav class="bg-white shadow-sm fixed w-full top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20">
      <div class="flex items-center">
        <a href="/" class="flex-shrink-0 flex items-center">
          <span class="text-3xl md:text-4xl font-medium tracking-tight">
            <span class="text-theme-900">Lactation</span>
            <span class="text-theme-700">Success</span>
          </span>
        </a>
      </div>
      
      <!-- Desktop menu -->
      <div class="hidden md:flex items-center space-x-6">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-gray-700 hover:text-theme-800 px-4 py-2 text-lg font-medium transition-colors duration-200 hover:bg-theme-50 rounded-md {$page.url.pathname === item.href ? 'text-theme-800 bg-theme-50 font-semibold' : ''}"
          >
            {item.label}
          </a>
        {/each}
        
        <!-- Add theme toggle -->
        <ThemeToggle />
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center ml-2">
        <button
          on:click={toggleMenu}
          class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-900 focus:outline-none"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {#if isMenuOpen}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            {:else}
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            {/if}
          </svg>
        </button>
      </div>
    </div>
  </div>

  <!-- Mobile menu -->
  {#if isMenuOpen}
    <div class="md:hidden">
      <div class="pt-2 pb-3 space-y-1">
        {#each navItems as item}
          <a
            href={item.href}
            on:click={closeMenu}
            class="block px-4 py-3 text-xl font-medium text-gray-700 hover:text-blue-800 hover:bg-blue-50 transition-colors duration-200 {$page.url.pathname === item.href ? 'text-blue-800 bg-blue-50 font-semibold' : ''}"
          >
            {item.label}
          </a>
        {/each}
        
        <div class="px-4 py-3 flex justify-center">
          <ThemeToggle />
        </div>
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer to prevent content from being hidden under fixed navbar -->
<div class="h-20"></div>

<style>
  nav {
    border-bottom: 1px solid rgba(229, 231, 235, 0.5);
    backdrop-filter: blur(8px);
    background-color: rgba(255, 255, 255, 0.95);
  }
</style> 