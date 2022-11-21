/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "public/**/*.html"],
  theme: {
    backgroundImage: {
      "hero-pattern": "url('/src/assets/bg/bg-books.jpg')",
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
    require("@tailwindcss/line-clamp"),
  ],
};
