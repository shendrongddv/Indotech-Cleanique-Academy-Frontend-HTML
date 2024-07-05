/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
