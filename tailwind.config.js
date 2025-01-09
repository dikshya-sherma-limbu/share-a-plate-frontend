/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50: "#f6f7f5",
          100: "#e3e7e0",
          200: "#c7d0c2",
          300: "#a5b39d",
          400: "#859A7B",
          500: "#6B8162",
          600: "#54664D",
          700: "#445340",
          800: "#374335",
          900: "#2E372D",
        },
        silver: "#ecebff",
        lightGreen: "#B2C9AD", //  color code
        darkGreen: "#4B5945",
      },
    },
  },
  plugins: [],
};
