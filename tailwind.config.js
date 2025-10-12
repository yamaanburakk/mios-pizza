/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pizza-red': '#dc2626',
        'pizza-red-dark': '#991b1b',
        'pizza-green': '#25D366', // WhatsApp yeşili
        'pizza-green-dark': '#128C7E',
        'pizza-yellow': '#fbbf24',
        'pizza-gold': '#d4af37',
        'whatsapp': '#25D366',
        'whatsapp-dark': '#128C7E',
        'instagram': '#E4405F',
        'instagram-dark': '#C13584',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shine': 'shine 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
