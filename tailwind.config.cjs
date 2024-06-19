/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        comrmorant: ["Cormorant+Garamond", " Classic", "sans-serif"],
        proza: ["Proza+Libre", "sans-serif"],
      },
    },
  },
  plugins: [],
};
