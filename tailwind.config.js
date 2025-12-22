/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./apps/**/*.{html,ts}",
    "./libs/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
      colors: {
      primary_custom: 'rgba(68, 97, 242, 1)',
      black:'rgba(0, 0, 0, 1)',
      white:'#FFFFFF',
      gray:'#696F79',
      blue:'#4461F2',
      gray_light:'#979CA3',
      black_light:'#0F0F0F'
    },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
  },
  plugins: [],
};
