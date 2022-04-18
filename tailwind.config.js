const plugin = require('tailwindcss/plugin');

const checkedSiblingPlugin = plugin(function ({ addVariant, _ }) {
  addVariant('checked-sibling', ({ container }) => {
    container.walkRules((rule) => {
      rule.selector = `:checked + .checked-sibling\\:${rule.selector.slice(1)}`;
    });
  });
});

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
    checkedSiblingPlugin,
  ],
  variants: {
    extend: { 
      backgroundColor : ['checked-sibling'],
      color : ['checked-sibling'],
    } 
  },
};
