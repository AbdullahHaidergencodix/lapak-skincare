cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { 
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  
  body {
    min-height: 100dvh;
    min-height: -webkit-fill-available;
    background: linear-gradient(135deg, #fce4ec 0%, #f8bbd9 20%, #f48fb1 40%, #ce93d8 60%, #b39ddb 80%, #e1bee7 100%);
    background-attachment: fixed;
    font-family: 'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    overscroll-behavior-y: contain;
  }

  .pb-safe { padding-bottom: max(env(safe-area-inset-bottom, 20px), 20px); }
  .pt-safe { padding-top: env(safe-area-inset-top, 0px); }
  .pl-safe { padding-left: env(safe-area-inset-left, 0px); }
  .pr-safe { padding-right: env(safe-area-inset-right, 0px); }
  .mb-safe { margin-bottom: env(safe-area-inset-bottom, 0px); }
  
  .scroll-touch {
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
  }
}

/* Glass Effects - Feminine Pink Tints */
.glass {
  background: rgba(255, 240, 245, 0.35);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 182, 193, 0.4);
  box-shadow: 0 8px 32px rgba(219, 112, 147, 0.15);
  transform: translateZ(0);
  will-change: transform;
}

.glass-strong {
  background: rgba(255, 240, 245, 0.5);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 182, 193, 0.5);
  box-shadow: 0 8px 32px rgba(219, 112, 147, 0.2);
  transform: translateZ(0);
}

.glass-card {
  background: rgba(255, 245, 248, 0.4);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 182, 193, 0.4);
  box-shadow: 0 8px 32px rgba(219, 112, 147, 0.12);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
  transform: translateZ(0);
}

@media (hover: hover) {
  .glass-card:hover {
    background: rgba(255, 240, 245, 0.55);
    transform: translateY(-5px) translateZ(0);
    box-shadow: 0 20px 40px rgba(219, 112, 147, 0.22);
  }
}

@media (hover: none) {
  .glass-card:active {
    background: rgba(255, 240, 245, 0.6);
    transform: scale(0.98) translateZ(0);
    transition: transform 0.1s ease;
  }
}

.glass-dark {
  background: rgba(131, 52, 113, 0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 182, 193, 0.2);
}

/* Mobile Touch States */
.touch-active {
  -webkit-tap-highlight-color: transparent;
}

.touch-active:active {
  opacity: 0.7;
  transform: scale(0.97);
}

.btn-mobile {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
  user-select: none;
  -webkit-user-select: none;
}

.btn-mobile:active {
  transform: scale(0.96);
  transition: transform 0.1s ease;
}

/* Animations */
@keyframes float { 
  0%, 100% { transform: translateY(0) translateZ(0); } 
  50% { transform: translateY(-10px) translateZ(0); } 
}

@keyframes fade-in { 
  from { opacity: 0; transform: translateY(20px) translateZ(0); } 
  to { opacity: 1; transform: translateY(0) translateZ(0); } 
}

@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px) translateZ(0); }
  to { opacity: 1; transform: translateY(0) translateZ(0); }
}

@keyframes slide-in-right {
  from { opacity: 0; transform: translateX(100%) translateZ(0); }
  to { opacity: 1; transform: translateX(0) translateZ(0); }
}

@keyframes slide-in-bottom {
  from { transform: translateY(100%) translateZ(0); }
  to { transform: translateY(0) translateZ(0); }
}

@keyframes glow { 
  0%, 100% { opacity: 0.5; } 
  50% { opacity: 0.8; } 
}

@keyframes pulse-soft {
  0%, 100% { transform: scale(1) translateZ(0); }
  50% { transform: scale(1.05) translateZ(0); }
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

@keyframes bounce-in {
  0% { transform: scale(0.3) translateZ(0); opacity: 0; }
  50% { transform: scale(1.05) translateZ(0); }
  70% { transform: scale(0.9) translateZ(0); }
  100% { transform: scale(1) translateZ(0); opacity: 1; }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 0.4s ease-out forwards; }
.animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
.animate-slide-in-right { animation: slide-in-right 0.3s ease-out forwards; }
.animate-slide-in-bottom { animation: slide-in-bottom 0.3s ease-out forwards; }
.animate-glow { animation: glow 3s ease-in-out infinite; }
.animate-pulse-soft { animation: pulse-soft 2s ease-in-out infinite; }
.animate-bounce-in { animation: bounce-in 0.5s ease-out forwards; }

.skeleton {
  background: linear-gradient(90deg, rgba(255,182,193,0.2) 25%, rgba(255,182,193,0.4) 50%, rgba(255,182,193,0.2) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Selection - Pink */
::selection { background: rgba(236, 72, 153, 0.3); }

/* Scrollbar */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.scrollbar-thin::-webkit-scrollbar { width: 4px; }
.scrollbar-thin::-webkit-scrollbar-track { background: transparent; }
.scrollbar-thin::-webkit-scrollbar-thumb { background: rgba(236, 72, 153, 0.3); border-radius: 4px; }

/* Line clamp */
.line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

@media (max-width: 768px) { 
  input, select, textarea { 
    font-size: 16px !important;
    border-radius: 12px;
  }
  
  input:focus, select:focus, textarea:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.3);
  }
}

section[id] { scroll-margin-top: 100px; }

@media (max-width: 768px) {
  button, a, [role="button"] { 
    min-height: 44px;
    min-width: 44px;
  }
  
  .tap-target {
    position: relative;
  }
  
  .tap-target::before {
    content: '';
    position: absolute;
    top: -8px;
    right: -8px;
    bottom: -8px;
    left: -8px;
  }
}

@media (max-width: 640px) {
  .mobile-px { padding-left: 16px; padding-right: 16px; }
  .mobile-py { padding-top: 24px; padding-bottom: 24px; }
  .mobile-gap { gap: 12px; }
  .mobile-text-sm { font-size: 14px; }
  .mobile-text-base { font-size: 16px; }
}

img {
  content-visibility: auto;
}

img[loading="lazy"] {
  opacity: 0;
  transition: opacity 0.3s ease;
}

img[loading="lazy"].loaded,
img[loading="lazy"]:not([src=""]) {
  opacity: 1;
}

@supports (-webkit-touch-callout: none) {
  .h-screen-ios {
    height: -webkit-fill-available;
  }
  
  .min-h-screen-ios {
    min-height: -webkit-fill-available;
  }
}

button, .no-select {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.gpu-accelerate {
  transform: translateZ(0);
  backface-visibility: hidden;
  perspective: 1000px;
}

.mobile-drawer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 90vh;
  max-height: 90dvh;
  border-radius: 24px 24px 0 0;
  padding-bottom: env(safe-area-inset-bottom, 20px);
}

@supports not (backdrop-filter: blur(20px)) {
  .glass, .glass-strong, .glass-card {
    background: rgba(255, 240, 245, 0.95);
  }
}

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

@media print {
  .no-print { display: none !important; }
  body { background: white !important; }
  .glass, .glass-strong, .glass-card { 
    background: white !important;
    box-shadow: none !important;
  }
}
EOF

echo "✅ Feminine color scheme applied!"
echo ""
echo "🎀 Color Palette:"
echo "   Background: Soft pink → Rose → Mauve → Lavender gradient"
echo "   Glass: Blush pink tints with rose borders"
echo "   Shadows: Rose/pink undertones"
echo "   Accents: Pink (#ec4899) highlights"
echo ""
echo "💅 Changes made:"
echo "   • Body gradient: Soft feminine pinks & lavenders"
echo "   • Glass effects: Rose-tinted backgrounds"
echo "   • Borders: Pink/rose colored"
echo "   • Shadows: Warm pink undertones"
echo "   • Selection color: Pink"
echo "   • Focus rings: Pink"
echo "   • Scrollbar: Pink accent"