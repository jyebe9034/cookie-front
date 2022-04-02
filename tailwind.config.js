module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily: {
      display: ['Fredoka One', 'cursive'],
    },
    colors: {
      ...require('tailwindcss/colors'),
      naver: '#02d564',
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
};
