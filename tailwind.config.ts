import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ochre: {
          50: '#fef8f0',
          100: '#fef0d9',
          200: '#fcdeb3',
          300: '#f9c682',
          400: '#f5a84f',
          500: '#f18c2e',
          600: '#e2701a',
          700: '#bb5717',
          800: '#95461a',
          900: '#783b18',
        },
        terracotta: {
          50: '#fef5f3',
          100: '#fde8e4',
          200: '#fbd4cd',
          300: '#f7b4a8',
          400: '#f28a77',
          500: '#e8654f',
          600: '#d64a32',
          700: '#b33a26',
          800: '#943224',
          900: '#7a2f23',
        },
        'deep-green': {
          50: '#f0f9f4',
          100: '#dcf2e5',
          200: '#bce4cd',
          300: '#8fcfab',
          400: '#5bb382',
          500: '#369663',
          600: '#277a4f',
          700: '#216242',
          800: '#1d4f37',
          900: '#19422f',
        },
        earth: {
          50: '#faf7f2',
          100: '#f4ede0',
          200: '#e8d9c0',
          300: '#d9be98',
          400: '#c99d6f',
          500: '#be8554',
          600: '#af7048',
          700: '#925a3d',
          800: '#784b38',
          900: '#624030',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'pattern-zimbabwe': 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23f18c2e\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
      },
    },
  },
  plugins: [],
}
export default config

