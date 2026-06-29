import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#e8edf5',
          100: '#c5d1e6',
          200: '#9fb2d4',
          400: '#5579b0',
          600: '#1B3A6B',
          800: '#102344',
          900: '#080f1e',
        },
      },
      fontFamily: {
        display: ['var(--font-bricolage)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
      },
    },
  },
  plugins: [],
}

export default config
