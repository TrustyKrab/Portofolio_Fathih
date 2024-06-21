/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: "#60A5FA",
        dark: "#111827",
        secondary: "#6B7280",
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}