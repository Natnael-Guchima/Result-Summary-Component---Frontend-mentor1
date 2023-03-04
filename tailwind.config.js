/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#241fa5",
          light: "#5139f5",
        },
        secondary: "#303b59",
      },
    },
  },
  plugins: [],
};
