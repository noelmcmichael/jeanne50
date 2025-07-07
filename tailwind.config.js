/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ocean-blue': '#00A7B5',
        'sunset-gold': '#FFD700',
        'sand': '#F5F5DC',
        'off-white': '#F8F8F8',
        'dark-text': '#333333',
      },
      fontFamily: {
        'heading': ['"Cormorant Garamond"', 'serif'],
        'body': ['"Poppins"', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
      keyframes: {
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
}