/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./App.tsx",
    "./.storybook/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
};
