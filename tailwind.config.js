/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          page: 'var(--theme-bg-page)',
          text: 'var(--theme-text)',
          'text-heading': 'var(--theme-text-heading)',
          'text-muted': 'var(--theme-text-muted)',
          border: 'var(--theme-border)',
          card: 'var(--theme-card)',
          'card-hover': 'var(--theme-card-hover)',
          accent: 'var(--theme-accent)',
          'accent-muted': 'var(--theme-accent-muted)',
        },
      },
    },
  },
  plugins: [],
} 