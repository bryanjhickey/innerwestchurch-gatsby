module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      padding: '1rem',
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
    '@tailwindcss/typography',
    '@tailwindcss/forms',
    '@tailwindcss/aspect-ratio',
  ],
};
