import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#0f1117',
          surface: '#1a1d27',
          elevated: '#22263a',
          border: '#2e3247',
        },
        primary: {
          DEFAULT: '#6366f1',
          hover: '#818cf8',
          muted: '#3730a3',
        },
        accent: {
          DEFAULT: '#22d3ee',
          hover: '#67e8f9',
        },
        success: '#4ade80',
        warning: '#fbbf24',
        error: '#f87171',
        text: {
          DEFAULT: '#e2e8f0',
          muted: '#94a3b8',
          faint: '#475569',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'Menlo', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e2e8f0',
            maxWidth: 'none',
            a: { color: '#6366f1' },
            strong: { color: '#f1f5f9' },
            h1: { color: '#f1f5f9' },
            h2: { color: '#f1f5f9' },
            h3: { color: '#f1f5f9' },
            h4: { color: '#f1f5f9' },
            code: {
              color: '#22d3ee',
              backgroundColor: '#1a1d27',
              borderRadius: '0.25rem',
              padding: '0.125rem 0.25rem',
            },
          },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-down': 'slideDown 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', maxHeight: '0' },
          '100%': { opacity: '1', maxHeight: '1000px' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
