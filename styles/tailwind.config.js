/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'bg-primary':   '#0a0a0f',
        'bg-secondary': '#111118',
        'bg-tertiary':  '#1a1a24',
      },
      fontFamily: {
        sans:  ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'blue-sm': '0 1px 2px 0 rgb(59 130 246 / 0.3)',
        'blue-md': '0 4px 6px -1px rgb(59 130 246 / 0.3)',
        'blue-lg': '0 10px 15px -3px rgb(59 130 246 / 0.3)',
        'blue-xl': '0 20px 25px -5px rgb(59 130 246 / 0.5)',
        'glow':    '0 0 20px rgba(59, 130, 246, 0.15), 0 0 60px rgba(59, 130, 246, 0.1)',
      },
      backdropBlur: { xs: '2px' },
      keyframes: {
        'meteor-effect': {
          '0%':   { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
          '70%':  { opacity: '1' },
          '100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
        },
        'fade-slide-in': {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%':      { opacity: '0.8' },
        },
      },
      animation: {
        'meteor-effect':   'meteor-effect 5s linear infinite',
        'fade-slide-in-1': 'fade-slide-in 0.6s ease-out 0.1s both',
        'fade-slide-in-2': 'fade-slide-in 0.6s ease-out 0.3s both',
        'fade-slide-in-3': 'fade-slide-in 0.6s ease-out 0.5s both',
        'fade-slide-in-4': 'fade-slide-in 0.6s ease-out 0.7s both',
        'float':           'float 3s ease-in-out infinite',
        'pulse-glow':      'pulse-glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
