/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'main' : ['Young Serif'],
      'primary':['Roboto'],
      'avg':['Poppins']
    },
    screens:{
      'sm':'540px',
      'md':'768px',
      'lg':'1024px',
      'xs':'1280'
    },
    extend: {},
  },
  plugins: [],
}

