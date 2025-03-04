/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Boy theme colors
        boy: {
          50: '#eff6ff',
          100: '#e1eaf4',
          200: '#c3d5e9',
          300: '#a4c0dd',
          400: '#86abd2',
          500: '#6896c7',
          600: '#4a81bb',
          700: '#2c6cb0',
          800: '#1e5694',
          900: '#1a365d'
        },
        // Girl theme colors
        girl: {
          50: '#fffafc',
          100: '#f9e6ee',
          200: '#f4d2e1',
          300: '#eeafc9',
          400: '#e58bb4',
          500: '#db6497',
          600: '#d04783',
          700: '#b93268',
          800: '#9c2b57',
          900: '#82254a'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      },
      backgroundImage: {
        'gradient-to-b': 'linear-gradient(to bottom, var(--tw-gradient-stops))',
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    function({ addUtilities, theme, e }) {
      const themeColors = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];
      
      const fromUtilities = themeColors.reduce((acc, value) => {
        acc[`.from-theme-${value}`] = {
          '--tw-gradient-from': `var(--color-primary-${value})`,
          '--tw-gradient-to': 'rgb(255 255 255 / 0)',
          '--tw-gradient-stops': 'var(--tw-gradient-from), var(--tw-gradient-to)',
        };
        return acc;
      }, {});
      
      addUtilities(fromUtilities);
    },
  ]
} 