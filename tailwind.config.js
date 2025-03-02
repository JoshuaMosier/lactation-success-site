/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        // Boy theme colors
        boy: {
          50: '#f0f5fa',
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
          50: '#fef1f7',
          100: '#fee5f0',
          200: '#fecce3',
          300: '#ffa2cb',
          400: '#fe77b3',
          500: '#f83c96',
          600: '#e91e79',
          700: '#ca0c61',
          800: '#a70d52',
          900: '#8c0f47'
        },
        // Theme-neutral colors (keep your existing warm colors)
        warm: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          700: '#977669',
          800: '#846358',
          900: '#43302b'
        }
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif']
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
} 