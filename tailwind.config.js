/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#6E6E6E', // Gris oscuro (color dominante)
        secondary: '#FFFFFF', // Blanco (color secundario)
        accent: '#000000', // Negro profundo (color de acento)
        neutral: '#A6A6A6', // Gris medio (color neutro)
      },
     fontFamily: {
        title: ['"Bebas Neue"', 'sans-serif'],
        body: ['"Bodoni Moda"', 'serif'],
      },
    },
  },
  plugins: [],
};
