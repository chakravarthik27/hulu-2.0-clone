module.exports = {
  content: [
    "./pages/**/*.{html,js,ts,jsx,tsx}",
    "./components/**/*.{html, js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        "3xl": "2000px",
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui',],
        'serif': ['ui-serif', 'Georgia', ],
        'mono': ['ui-monospace', 'SFMono-Regular',],
        'display': ['Oswald'],
        'body': ['"Open Sans"',],
      }
    }
  },
  plugins: [require('tailwind-scrollbar-hide')],
}
