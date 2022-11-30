/** @type {import('tailwindcss').Config} */
module.exports = {
  safelist: [
    // Safelist only colors used by vantage components in production
    ...require("./src/lib-components/utils/safelist").vantageSafelist([
      "red",
      "blue",
    ]),
  ],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
