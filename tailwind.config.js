/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1f1f1f",
        secondary: "#3370f2",
      },
    },
  },
  plugins: [require("daisyui")],
};
