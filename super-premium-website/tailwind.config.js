/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          100: "#FFF8E7",
          200: "#F5E6B8",
          300: "#D4AF37",
          400: "#C5A028",
          500: "#A68523",
          600: "#8B6F1E",
        },
        dark: {
          900: "#0A0A0A",
          800: "#111111",
          700: "#1A1A1A",
          600: "#222222",
          500: "#2A2A2A",
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        "fade-in": "fadeIn 1s ease-out forwards",
        "fade-in-delay": "fadeIn 1s ease-out 0.3s forwards",
        "fade-in-delay-2": "fadeIn 1s ease-out 0.6s forwards",
        "fade-in-delay-3": "fadeIn 1s ease-out 0.9s forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "slide-up-delay": "slideUp 0.8s ease-out 0.2s forwards",
        "slide-up-delay-2": "slideUp 0.8s ease-out 0.4s forwards",
        "gold-pulse": "goldPulse 3s ease-in-out infinite",
        "line-expand": "lineExpand 1.5s ease-out forwards",
        "subtle-float": "subtleFloat 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        goldPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        lineExpand: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        subtleFloat: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
