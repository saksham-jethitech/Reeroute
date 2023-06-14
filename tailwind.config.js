/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        krub: ["Krub", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      height: {
        "vh-75": "75vh",
      },
    },
  },
  plugins: [],
};
