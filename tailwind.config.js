/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        'blue': '#291f93',
        'orange': '#FC3912',
        'yellow': '#FCBB16',
        'background': '#FBEDC8'
      },
      fontFamily: {
        'lg-heading': ['Amiko', 'sans-serif'],
        'sm-heading': ['Asap'],
        'body': ['Biryani']
      }
    },
  plugins: [],
}