import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        crimson: '#C8102E',
        midnight: '#1F1F2B',
        cloud: '#F7F7FB',
        gold: '#F5B041',
        teal: '#3AC7B7'
      },
      fontFamily: {
        display: ['var(--font-display)', 'cursive'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        focus: '0 0 0 3px rgba(60, 199, 183, 0.35)'
      }
    }
  },
  plugins: []
};

export default config;
