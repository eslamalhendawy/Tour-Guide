/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#364B69',
        secondary: '#795938',
        accent: '#613528',
        accent2: '#B0ACA3',
        postage: "#003441",
        brownOrange: "#E09955",
      },
    },
  },
  plugins: [],
}

