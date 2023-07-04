/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        sans: ["Josefin Sans Variable", ...defaultTheme.fontFamily.sans],
        alata: ["Alata", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-bg-desktop": "url(/src/images/desktop/image-hero.jpg)",
        "hero-bg-mobile": "url(/src/images/mobile/image-hero.jpg)",
      },
    },
  },
  plugins: [],
};
