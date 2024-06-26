import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#ea580c',
        primaryDark: '#c2410c',
        primaryLight: '#fb923c',
        secondary: '#0284c7',
        secondaryDark: '#0369a1',
        secondaryLight: '#38bdf8',
        lightBg: '#f8fafc',
        darkBg: '#94a3b8',
        fontDark: '#0f172a',
        fontLight: '#f1f5f9',
      },
    },
  },
  plugins: [],
};
export default config;
