module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    extend: {
      colors: {
        primary: '#28a0aa',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
  ],
};
