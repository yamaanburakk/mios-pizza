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
        // Ana palet: koyu yeşil, kiremit, açık krem
        'dark-green': '#1B4332',
        'dark-green-dark': '#0D2818',
        terracotta: '#C45C3E',
        'terracotta-dark': '#A63D2E',
        cream: '#F5F0E6',
        'cream-dark': '#E8E0D5',
        // Eski sınıf adlarıyla uyumluluk (yeni palete yönlendirme)
        'pizza-red': '#C45C3E',
        'pizza-red-dark': '#A63D2E',
        'pizza-green': '#1B4332',
        'pizza-green-dark': '#0D2818',
        'pizza-yellow': '#F5F0E6',
        'pizza-gold': '#C45C3E',
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
