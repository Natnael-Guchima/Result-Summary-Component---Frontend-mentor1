/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/components/SubmitButton/index.js",
    "./src/components/SummaryRow/index.js",
    "./src/App.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          main: "#332ceb",
          light: "#6743ff",
        },
        secondary: "#303b59",
      },
    },
  },
  plugins: [],
};
