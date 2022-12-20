/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'desktop-1': "url('@/assets/images/background/desktop-1.png')",
      },
    },
  },
  plugins: [],
}
