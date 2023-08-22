/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary

        "soft-blue": "hsl(231, 69%, 60%)",
        "soft-red": "hsl(0, 94%, 66%)",
        //Neutral

        grayishblue: "hsl(229, 8%, 60%)",
        "very-dark-blue": "hsl(229, 31%, 21%) ",
      },
      screens: {
        md: "54.375em",
        rwd: "87.5em",
      },
      fontSize: {
        normal: "1.125rem",
      },
    },
  },
  plugins: [],
};
