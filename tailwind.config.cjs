/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1A88DB',
      },
    },
    fontSize: {
      none: '0',
      xs: '0.75rem', // 12px
      sm: '0.875rem', // 14px
      base: '1rem', // 16px
      xl: '1.125rem', // 18px - h5
      '2xl': '1.25rem', // 20px - h4
      '3xl': '1.5rem', // 24px - h3
      '4xl': '1.625rem', // 26px - h2
      '5xl': '2rem', // 32px - h1
      '6xl': '2.625rem', // 42px
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
};
