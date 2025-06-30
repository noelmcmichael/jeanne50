/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Darkula Orange - primary accent color
        primary: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#CC7832', // Main Darkula orange
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        // Darkula Blue - secondary accent
        accent: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#6897BB', // Darkula blue
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        // Darkula background and text colors
        darkula: {
          50: '#BBBBBB',  // Light text
          100: '#A9B7C6', // Default text
          200: '#808080', // Comments
          300: '#555555', // Borders
          400: '#3C3F41', // Lighter backgrounds
          500: '#313335', // Default background
          600: '#2B2B2B', // Darker background
          700: '#1E1E1E', // Darkest background
          800: '#214283', // Selection background
          900: '#0D1117', // Deepest black
        },
        // Darkula green
        success: {
          500: '#6A8759', // Darkula green
          600: '#5a7348',
        },
        // Darkula yellow
        warning: {
          500: '#FFC66D', // Darkula yellow
          600: '#e6b05c',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        'gradient-shift': 'gradient-shift 8s ease-in-out infinite',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%': { 
            boxShadow: '0 0 20px rgba(204, 120, 50, 0.4), 0 0 40px rgba(104, 151, 187, 0.2)' 
          },
          '100%': { 
            boxShadow: '0 0 40px rgba(204, 120, 50, 0.6), 0 0 80px rgba(104, 151, 187, 0.4)' 
          },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'gradient-shift': {
          '0%, 100%': { 
            background: 'linear-gradient(45deg, #CC7832, #6897BB, #6A8759)'
          },
          '33%': { 
            background: 'linear-gradient(45deg, #6897BB, #6A8759, #CC7832)'
          },
          '66%': { 
            background: 'linear-gradient(45deg, #6A8759, #CC7832, #6897BB)'
          },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'darkula-gradient': 'linear-gradient(135deg, #CC7832 0%, #6897BB 50%, #6A8759 100%)',
        'hero-pattern': 'radial-gradient(circle at 1px 1px, rgba(169, 183, 198, 0.1) 1px, transparent 0)',
      },
      fontFamily: {
        'display': ['Inter', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'system-ui', 'sans-serif'],
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}