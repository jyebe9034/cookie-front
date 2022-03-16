module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    minHeight: {
      // header: 80px, footer: 120px
      content: 'calc(100vh - 80px - 120px)',
    },
  },
  plugins: [
    // eslint-disable-next-line global-require
    require('@tailwindcss/line-clamp'),
  ],
};
