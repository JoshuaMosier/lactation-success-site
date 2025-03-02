<script lang="ts">
  import { theme, toggleTheme } from '$lib/stores/theme';
  import { fly } from 'svelte/transition';
  import { quintOut } from 'svelte/easing';
</script>

<div class="flex items-center">
  <button 
    on:click={toggleTheme}
    class="relative inline-flex h-8 w-32 items-center rounded-full border-2 transition-colors duration-[var(--theme-transition-duration)] ease-in-out focus:outline-none"
    class:border-boy-300={$theme === 'boy'}
    class:border-girl-300={$theme === 'girl'}
    class:bg-boy-100={$theme === 'boy'}
    class:bg-girl-100={$theme === 'girl'}
    aria-label={$theme === 'boy' ? "Switch to girl theme" : "Switch to boy theme"}
    aria-pressed={$theme === 'girl'}
  >
    <!-- Fixed text labels -->
    <div class="absolute inset-0 flex">
      <div class="flex w-1/2 items-center justify-center">
        <span class={`z-10 text-sm font-medium transition-colors duration-[var(--theme-transition-duration)] ${$theme === 'boy' ? 'text-boy-600' : 'text-gray-400'}`}>
          Blue
        </span>
      </div>
      <div class="flex w-1/2 items-center justify-center">
        <span class={`z-10 text-sm font-medium transition-colors duration-[var(--theme-transition-duration)] ${$theme === 'girl' ? 'text-girl-600' : 'text-gray-400'}`}>
          Pink
        </span>
      </div>
    </div>

    <!-- Sliding thumb -->
    <span 
      class="absolute h-6 w-[50%] rounded-full bg-white shadow-md transition-all duration-[var(--theme-transition-duration)] ease-in-out"
      class:translate-x-[100%]={$theme === 'girl'}
      class:translate-x-0={$theme === 'boy'}
    />
  </button>
</div>