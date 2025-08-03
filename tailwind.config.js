module.exports = {
  content: [
    "./index.html",
    "./script.js",
    "./styles.css",
  ],
  safelist: [
    "card-open-styles",
    "card-open",
    "gap-x-6",
    "flex-1",
    "overflow-y-auto"
  ],
  theme: {
    extend: {
      colors: {
        'theme-periwinkle': '#CCCCFF',
        'theme-purple':      '#8D76AB',
        'theme-lilac':       '#c3b4f0',
        'theme-lilac-dark':  '#b0a0e0',
        'theme-pink':        '#C548E8',
        'theme-hotpink':     '#ED4599',
        'card-bg':           '#fdeff9',
        'card-text':         '#c533c0',
        'modal-border':      '#ffb3de',
        'letter-pink':       '#ED4599',
        'letter-hotpink':    '#DD4ADD',
        'theme-yellow-pale': '#FFFFCC',
      },
      fontFamily: {
        // ==================================================================
        // ▼▼▼ CAMBIO: Añadimos una nueva fuente para el cuerpo del texto ▼▼▼
        'adobe-body': ['"new-main-font"', 'sans-serif'], // Nombre genérico, ver notas abajo
        // ▲▲▲ CAMBIO ▲▲▲
        // ==================================================================
        
        'poppins':    ['poppins', 'sans-serif'],
        'montserrat': ['montserrat', 'sans-serif'],
        'chaloops':   ['chaloops', 'sans-serif'], // Nombre en minúsculas por consistencia
        'casablanca': ['casablanca-urw', 'serif'],
        'rokkitt':    ['rokkitt', 'serif'],
        'gothic':     ['Century Gothic Pro', 'sans-serif'],
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(141, 118, 171, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(141, 118, 171, 0.08) 1px, transparent 1px)
        `,
        'flower-border': "url('img/flower-border-seamless.png')",
      },
      keyframes: {
        fall: {
          'from': { transform: 'translateY(-10vh) rotate(0deg)', opacity: '1' },
          'to':   { transform: 'translateY(110vh) rotate(360deg)', opacity: '0' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0', transform: 'scale(0.5)' },
          '50%':      { opacity: '1', transform: 'scale(1.2)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to':   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to':   { opacity: '1' },
        },
        slideUp: {
          'from': { transform: 'translateY(50px)', opacity: '0' },
          'to':   { transform: 'translateY(0)', opacity: '1' },
        },
        trailFadeOut: {
          'from': { opacity: '0.7', transform: 'scale(1)' },
          'to':   { opacity: '0',   transform: 'scale(0)' },
        },
        borderFlow: {
          'from': { 'stroke-dashoffset': '2000' },
          'to':   { 'stroke-dashoffset': '0'    },
        },
        spinButton: {
          'from': { transform: 'translate(-50%, -50%) rotate(0deg)' },
          'to':   { transform: 'translate(-50%, -50%) rotate(360deg)' },
        },
      },
      animation: {
        'fall':         'fall linear infinite',
        'sparkle':      'sparkle ease-in-out infinite',
        'fade-in-up':   'fadeInUp 1s 0.5s ease-out forwards',
        'fade-in':      'fadeIn 0.3s ease',
        'slide-up':     'slideUp 0.4s ease-out',
        'trail-fade':   'trailFadeOut 0.8s ease-out forwards',
        'border-flow':  'borderFlow 120s linear infinite',
        'spin-button':  'spinButton 3s linear infinite',
      },
    },
  },
  plugins: [],
}