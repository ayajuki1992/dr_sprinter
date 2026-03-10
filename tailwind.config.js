/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'caution': '#fbbf24', // The Mechanic Yellow
        'garage': '#050505',  // Pure Black
        'steel': '#18181b',   // Card Surface
      },
      fontFamily: {
        'display': ['Archivo Black', 'sans-serif'],
      }
    },
  },
  plugins: [],
}