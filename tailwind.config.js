/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neon-purple': '#6d28d9',
        'neon-blue': '#3b82f6',
        'dark-bg': '#1e1b4b',
        'light-gray': '#f3f4f6',
      },
    },
  },
  plugins: [],
}
