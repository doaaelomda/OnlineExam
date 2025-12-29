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
      black_light:'#0F0F0F',
      black_dark:'#535353',
      success:'#11CE19',
      black_white:'#1D1B201F',
      blue_base:'#02369C',
      blue_red:'#CC1010',
      warning_color:'#FEF2F2',
      red_600:'#DC2626'
    },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
  },
  plugins: [],
};
