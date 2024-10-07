/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#BBBBCB',
        'design': '#64ffda',
        'secondary': '#64FFDA',
        'back': '#0A192F',
        'htext': '#ccd6f6',
        'ptext': '#8892b0',
        'third': '#E7F5FF',
      },
      fontFamily: {
        'pop': ["Poppins"],
        'robo': ['Roboto Slab'],
        
      },
      maxWidth: {
        'container': '1140px',
      },
      spacing: {
        'w806': '806px',
        'w270': '270px',

      }
    },
  },
  plugins: [],
}

