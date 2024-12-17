/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      'primary': '#F8B90E',
      'secondary': '#970F00',
      'background': '#F0E6CE',
      'title': '#474141',
      'babaganoush': '#F0E6CE',
      'ajiamarillo': '#FFBB00',
      'muhamara': '#970F00',
      'mayonesa': '#F6DA9D',
},
    extend: {
      fontFamily: {
        sans: [
          "Montserrat",
          "Inter Variable",
          "Inter",
          ...defaultTheme.fontFamily.sans,],

      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
