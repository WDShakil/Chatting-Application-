/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", "sans-serif"],
      opensans: ["Open Sans", "sans-serif"],
    },
    extend: {
      maxWidth: {
        container: "1440px",
      },
    },
  },
  plugins: [],
};
