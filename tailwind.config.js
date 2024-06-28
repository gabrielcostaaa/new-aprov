/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'sans': ['Manrope'],
    },
    backgroundImage: {
      'sie': "url('/banner-aprov.jpg')"
    },
    colors: {
      'white': {
        DEFAULT: '#ffffff',
        50: '#f8f8ff',
        100: '#f5f5f9',
        200: '#f2f2f2',
      },
      'gray': {
        DEFAULT: '#d3d3d3',
        100: '#b3b3b3',
        200: '#808080',
        300: '#4d4d4d',

      },
      'aprov': {
        DEFAULT: '#EB5E28', // Flame
        50: '#F3EFE4', // Alabaster (pre-hovers)
        100: '#FFFCF2', // Floral white
        200: '#CCC5B9', // Timberwolf (hovers)
        300: '#403D39', // Black olive
        500: '#252422', // Eerie black
      },
      'interface': {
        'sucess': '#228B22',
        'error': '#B22222',
        'warning': '#DAA520',
        'alert': '#1E90FF',
      }
    }
  },
  plugins: [],
}
//TODO estudar motivo do material tailwind estar bugando meus estilos
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: ["./src/**/*.{js,jsx,ts,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// });

