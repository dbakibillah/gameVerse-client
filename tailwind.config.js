/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        c1: '#23BE0A', // Set the custom color name to p1
      },
    },
  },
  plugins: [require("daisyui")],
};
