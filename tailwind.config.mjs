/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      yellow: {
        50: "#B68EDC",
        100: "#DE9ECA",
        400: "#D6B8DE",
        500: "#BA99E0",
      }, // Accent colors, used mainly for star color, heading and buttons
      orange: {
        100: "#E18280",
        200: "#C3716F",
        300: "#A55F5E",
        400: "#E34034",
        500: "#DB6946",
        600: "#E05A58",
      }, // Primary colors, used mainly for links, buttons and svg icons
      highlight: {
        50: "#f7f5bc",
        100: "#ece75f",
        400: "#e6b400",
        500: "#e47200",
      },
      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },

    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),

    require("tailwindcss-animate"),
    flowbite.plugin(),
  ],
};
