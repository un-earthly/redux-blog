/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        metalMania: ['Metal Mania', 'cursive'],
        metal: ['Metal', 'cursive'],
      },
    },
  },
  plugins: [require("daisyui")],
}