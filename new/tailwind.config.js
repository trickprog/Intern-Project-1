/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        Rubik :['Rubik','sans-serif'],
        Poppins:['Poppins, sans-serif'],
      },
        colors :{
          'color1' :'#013B8D',
          'color2' :'#717171',
          'color3':'#E6EBFF',
          'color4':'rgba(1, 59, 141, 0.4)',
          'white' : '#FFFFFF',
        },
        
    },
  },
  plugins: [],
}
