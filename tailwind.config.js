/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "green": "#B0F2B4",
        "black": "#0D0D0D",
        "white": "#FDFDFD"
      }
    },
  },
  plugins: [],
}

