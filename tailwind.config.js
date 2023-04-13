/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "poke-red": "#A61C3C",
        "poke-blue": "#2A75BB",
        "poke-yellow": "#FECA1B",
      },
    },
  },
  plugins: [],
};
