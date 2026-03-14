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
        content: '#004553',
        brand: '#003035',
        dark: {
          DEFAULT: '#003035',
          section: '#002a2e',
          card: '#004046',
          border: '#0d5c63',
        },
        accent: {
          DEFAULT: '#003035',
          hover: '#0d5c63',
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
