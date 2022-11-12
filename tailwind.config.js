/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        primary: "#3474fb",
        secondary: "#1c1c1c",
        dark: "#1B1B1B",
        modal: "#caced6",
      },
    },
  },
  plugins: [require("daisyui")],
};
