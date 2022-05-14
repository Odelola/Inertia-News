module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
    fontFamily:{
      'nunito': ['Nunito', 'sans-serif'],
      'zilla': ['Zilla Slab', 'serif']
    }
  },
  },
  plugins: [],
}
