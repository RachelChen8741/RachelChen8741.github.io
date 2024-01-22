const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'blossom': "url('/Users/rachelchen/personal-website/flower.png')",
      },
      colors: {
        rose: '#db2777',
      },
    },
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('active', ['&:active', '&.router-link-active']);
    })
  ],
};
