/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/client/**/*.{js,ts,jsx,tsx}",
    "./src/client/index.css"
  ],
  theme: {
    // colors: {
    //   'white': '#fff',
    //   'black': '#000000',
    //   'lilac': '#CFB8FF',
    //   'grey': {
    //     100: '#FBFBFB',
    //     200: '#F0F0F0',
    //     400: '#D9D9D9',
    //     500: '#B8B8B8',
    //     600: '#8A8A8A',
    //     700: '#5F5F5F',
    //     800: '#060606'
    //   }
    // },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['Nunito', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}