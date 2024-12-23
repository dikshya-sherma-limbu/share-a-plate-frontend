/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // custom colors added to the theme
      colors: {
        lightGreen: "#B2C9AD", //  color code
        darkGreen: "#4B5945",
      },
    },
  },
  plugins: [],
};
