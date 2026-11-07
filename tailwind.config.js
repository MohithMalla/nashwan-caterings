/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF9EE',
          100: '#FAF3DD',
          200: '#F5E6BA',
          300: '#ECC870',
          400: '#DEB24A',
          500: '#D4AF37', // primary champagne gold
          600: '#B89228',
          700: '#94721D',
          800: '#735718',
          900: '#543F14',
          champagne: '#ECC870',
          metallic: '#C5A059'
        },
        ivory: {
          DEFAULT: '#FDFBF7',
          50: '#FFFFFF',
          100: '#FDFBF7',
          200: '#F7F3EA',
          300: '#EFE8DA'
        },
        royal: {
          black: '#0A0A0A',
          dark: '#12100E',
          charcoal: '#1A1816',
          espresso: '#1E1915'
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Cinzel', 'serif'],
        display: ['Cinzel', '"Playfair Display"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ultra: '.3em'
      }
    },
  },
  plugins: [],
}
