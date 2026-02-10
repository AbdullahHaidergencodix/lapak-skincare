export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        'glass-white': 'rgba(255, 255, 255, 0.2)',
        'glass-border': 'rgba(255, 255, 255, 0.3)',
      },
      backdropBlur: {
        'glass': '20px',
      },
    },
  },
  plugins: [],
}
