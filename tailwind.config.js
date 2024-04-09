import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    screens: {
      desktop: { max: "1440px" },
      1285: { max: "1285.60px" },
      tablet: { max: "765px" },
      befT: { max: "630px" },
      bo: { max: "530px" },
      mobile: {max: "374px"}
    },
    extend: {
      colors: {
        "dark-blue": "#7C5DFA",
        "white-blue": "#9277FF",
        "light-dark-cite": "#1E2139",
        "light-dark": "#252945",
        "hover-white": "#DFE3FA",
        "opacity-white": "#888EB0",
        "light-violet": "#7E88C3",
        "dark-cite": "#0C0E16",
        "cite-red": "#EC5757",
        "opacity-red": "#9277FF",
        "light-bg": "#F8F8FB",
        "light-dark-cite-2": "#141625",
      },
    },
  },
  plugins: [daisyui],
};
