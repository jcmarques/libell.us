/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        black: '#000000',
        dark: {
          DEFAULT: '#0a0e1a',
          section: '#0f1729',
          card: '#1e293b',
          border: '#334155',
        },
        accent: {
          DEFAULT: '#00BFFF',
          hover: '#33CCFF',
        },
        primary: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          600: '#000000',
          700: '#333333',
          800: '#1a1a1a',
        },
        neutral: {
          0: '#FFFFFF',
          1: '#F8F8F8',
          2: '#EFEFEF',
          6: '#CCCCCC',
          7: '#666666',
          10: '#1a1a1a',
        },
        gray: '#90A3BF',
      },
    },
  },
  plugins: [],
}
