/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        LavenderBlue:'#CCD5FF',
        OperaMauve:'#C884A6',
        PinkLavender:'#E7BBE3',
        SlateBlue:'#817DFF',
        RoseBonbon:'#F04B9E',
        darkerIndigo: '#0C374D',
        Indigo:'#0D3D56',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
};
