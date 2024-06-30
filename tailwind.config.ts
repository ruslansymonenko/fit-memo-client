import type { Config } from 'tailwindcss';
import { HEADER_HEIGHT, FOOTER_HEIGHT } from './src/consts/app.consts';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/screens/**/*.{js,ts,jsx,tsx,mdx}',
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
        mediumBg: '#f1f5f9',
        darkBg: '#94a3b8',
        fontDark: '#0f172a',
        fontLight: '#f1f5f9',
      },
      height: {
        navbarHeight: `${HEADER_HEIGHT}px`,
        footerHeight: `${FOOTER_HEIGHT}px`,
        pageHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      },
      minHeight: {
        pageHeight: `calc(100vh - ${FOOTER_HEIGHT}px)`,
      },
      padding: {
        navbarHeight: `${HEADER_HEIGHT}px`,
      },
    },
  },
  plugins: [],
};
export default config;
