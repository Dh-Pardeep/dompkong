/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '575.9px',
      'md': '767.9px',
      'lg': '991.9px',
      'xl': '1200px',
      'xxl': '1400px',
    },
    fontFamily:{
      'Montserrat':['Montserrat','sans-serif'],
      'Azo':['Azo','sans-serif'],
    },
    extend: {
      boxShadow: {
        'Card': '0px 4px 16px 0px #EDDA60',
      }
    },
  },
  plugins: [],
}

