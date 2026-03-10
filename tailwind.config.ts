import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'midnight-emerald': '#0D2B1F',
        'warm-charcoal': '#1C1C1A',
        'soft-grey': '#F0F0EE',
        'warm-ivory': '#FAF8F3',
        'pure-white': '#FFFFFF',
        'bronze-accent': '#A0784A',
        'bronze-light': '#C4976A',
        'charcoal-text': '#2C2C2A',
      },
      fontFamily: {
        serif: ['var(--font-playfair-display)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
