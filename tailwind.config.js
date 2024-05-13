/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        beaver: "#9E7F66",
        codGray: "#111111",
        Mirage: "#17192B",
        ebonyClay: "#242B37",
        shuttleGray: "#5C6779"
      },
    },
  },
  plugins: [],
};
