import { writable, get } from 'svelte/store';
import { browser } from '$app/environment';

// Theme types
export type ThemeType = 'boy' | 'girl';

// Initialize from localStorage if available, default to 'boy'
const initialTheme: ThemeType = browser 
  ? (localStorage.getItem('babyTheme') as ThemeType || 'boy') 
  : 'boy';

// Create the store
export const theme = writable<ThemeType>(initialTheme);

// Update localStorage when theme changes
if (browser) {
  theme.subscribe(value => {
    localStorage.setItem('babyTheme', value);
    document.documentElement.setAttribute('data-theme', value);
  });
}

// Toggle function
export function toggleTheme() {
  // Get the new theme
  const newTheme: ThemeType = get(theme) === 'boy' ? 'girl' : 'boy';
  
  if (browser) {
    // Remove completion class if it exists
    document.documentElement.classList.remove('theme-transition-complete');
    
    // Apply new theme
    document.documentElement.setAttribute('data-theme', newTheme);
    
    // Add completion class after transition ends
    setTimeout(() => {
      document.documentElement.classList.add('theme-transition-complete');
    }, 350); // Slightly longer than transition duration
    
    // Force a browser repaint to apply all changes at once
    window.requestAnimationFrame(() => {
      // Then update the store
      theme.set(newTheme);
      localStorage.setItem('babyTheme', newTheme);
    });
  } else {
    // Fallback for SSR
    theme.set(newTheme);
  }
} 