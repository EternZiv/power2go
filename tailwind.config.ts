import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

/**
 * Tailwind configuration for the Power2Go premium redesign.
 * It defines custom brand colors extracted from the logo and website,
 * extends font families with Inter (used in layout), and adds utilities
 * for glassmorphism and subtle motion effects.
 */
const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/**/*.html',
    // Include any custom components or utilities
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        // Brand palette – adjust hex values as needed to match the official logo
        brand: {
          blue: '#0066FF', // primary blue
          teal: '#00C5B7', // secondary teal
          dark: '#0A0A0A', // dark background
          light: '#F5F7FA', // light background for sections
          green: '#22c55e', // accent green
        },
        // Utility colors for hover states
        'brand-blue': '#0066FF',
        'brand-blue-hover': '#0052CC',
        'brand-teal': '#00C5B7',
        'brand-teal-hover': '#009E93',
      },
      fontFamily: {
        // Primary sans‑serif – Inter imported via next/font in layout.tsx
        sans: ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
      },
      backdropBlur: {
        // Custom blur utilities used in glassmorphism components
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
      },
      animation: {
        // Simple pulse for background decorative elements
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
