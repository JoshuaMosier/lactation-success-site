# src/lib/components/Navbar.svelte
<script lang="ts">
  import { page } from '$app/stores';
  let isMenuOpen = false;

  const toggleMenu = () => {
    isMenuOpen = !isMenuOpen;
  };

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/insurance', label: 'Insurance' },
    { href: '/faq', label: 'FAQs' },
    { href: '/contact', label: 'Contact' }
  ];
</script>

<nav class="bg-white shadow-sm fixed w-full top-0 z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between h-20">
      <div class="flex items-center">
        <a href="/" class="flex-shrink-0 flex items-center">
          <span class="text-2xl font-medium tracking-tight">
            <span class="text-pink-900">Lactation</span>
            <span class="text-pink-700">Success</span>
          </span>
        </a>
      </div>
      
      <!-- Desktop menu -->
      <div class="hidden md:flex items-center space-x-8">
        {#each navItems as item}
          <a
            href={item.href}
            class="text-gray-700 hover:text-pink-900 px-3 py-2 text-sm font-medium transition-colors duration-200 {$page.url.pathname === item.href ? 'text-pink-900 font-semibold' : ''}"
          >
            {item.label}
          </a>
        {/each}
      </div>

      <!-- Mobile menu button -->
      <div class="md:hidden flex items-center">
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
            class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-900 hover:bg-gray-50 {$page.url.pathname === item.href ? 'text-pink-900 bg-gray-50' : ''}"
          >
            {item.label}
          </a>
        {/each}
      </div>
    </div>
  {/if}
</nav>

<!-- Spacer to prevent content from being hidden under fixed navbar -->
<div class="h-20"></div>

<style>
  /* Add any custom styles here */
</style> 