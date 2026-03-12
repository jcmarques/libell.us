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
        black: '#1A202C',
        primary: {
          50: '#F2F4F8',
          100: '#CED7E4',
          300: '#85A8F8',
          500: '#6884AC',
          600: '#536E96',
          700: '#435A7A',
          800: '#34465F',
        },
        neutral: {
          0: '#FFFFFF',
          1: '#EFF2F6',
          2: '#DEE5ED',
          6: '#9CB0C9',
          7: '#8CA2C0',
          10: '#486284',
        },
        gray: '#90A3BF',
      },
    },
  },
  plugins: [],
}
