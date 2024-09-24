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
        'secondary': '#64FFDA',
        'back': '#0A192F',
        'htext': '#ccd6f6',
        'ptext': '#8892b0',
      },
      fontFamily: {
        'pop': ["Poppins"],
        
      },
      maxWidth: {
        'container': '1140px',
      },
    },
  },
  plugins: [],
}

