#!/bin/bash

cd /Users/abdullah/Desktop/lapak-final-version

echo "════════════════════════════════════════════════════════════════"
echo "🔍 CURRENT PROJECT STATE - COPY EVERYTHING BELOW THIS LINE"
echo "════════════════════════════════════════════════════════════════"
echo ""

echo "📁 DIRECTORY STRUCTURE:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
tree -L 3 src/ 2>/dev/null || find src/ -type f -name "*.jsx" -o -name "*.js" | head -30
echo ""

echo "📦 PACKAGE.JSON DEPENDENCIES:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "package.json" ]; then
  cat package.json | grep -A 20 '"dependencies"' | head -25
else
  echo "⚠️ package.json not found"
fi
echo ""

echo "📄 APP.JSX (MAIN FILE):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/App.jsx" ]; then
  cat src/App.jsx
else
  echo "⚠️ App.jsx not found"
fi
echo ""

echo "📄 MAIN.JSX (ENTRY POINT):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/main.jsx" ]; then
  cat src/main.jsx
else
  echo "⚠️ main.jsx not found"
fi
echo ""

echo "📄 PRODUCTCARD.JSX:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/components/ProductCard.jsx" ]; then
  cat src/components/ProductCard.jsx
else
  echo "⚠️ ProductCard.jsx not found"
fi
echo ""

echo "📄 PRODUCTGRID.JSX:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/components/ProductGrid.jsx" ]; then
  cat src/components/ProductGrid.jsx
else
  echo "⚠️ ProductGrid.jsx not found"
fi
echo ""

echo "📦 PRODUCTS DATA:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
for file in src/data/products.js src/data/productsData.js src/products.js src/data/products.jsx; do
  if [ -f "$file" ]; then
    echo "Found: $file"
    cat "$file" | head -50
    echo "... (showing first 50 lines)"
    break
  fi
done
echo ""

echo "📄 HEADER.JSX:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/components/Header.jsx" ]; then
  cat src/components/Header.jsx | head -50
  echo "... (showing first 50 lines)"
else
  echo "⚠️ Header.jsx not found"
fi
echo ""

echo "📄 HERO.JSX:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "src/components/Hero.jsx" ]; then
  cat src/components/Hero.jsx | head -40
  echo "... (showing first 40 lines)"
else
  echo "⚠️ Hero.jsx not found"
fi
echo ""

echo "🎨 TAILWIND CONFIG:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "tailwind.config.js" ]; then
  cat tailwind.config.js
else
  echo "⚠️ tailwind.config.js not found"
fi
echo ""

echo "⚙️ VITE CONFIG:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
if [ -f "vite.config.js" ]; then
  cat vite.config.js
else
  echo "⚠️ vite.config.js not found"
fi
echo ""

echo "🔍 CHECKING FOR ERRORS IN BROWSER CONSOLE:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "👉 Open browser console (F12) and paste any red errors here"
echo ""

echo "════════════════════════════════════════════════════════════════"
echo "✅ COPY EVERYTHING ABOVE THIS LINE AND PASTE TO ME"
echo "════════════════════════════════════════════════════════════════"
echo ""
echo "After pasting this to me, tell me what features you want:"
echo "  • SEO optimization"
echo "  • WhatsApp widget"
echo "  • Product reviews"
echo "  • Stock badges"
echo "  • Or anything else!"
echo ""
