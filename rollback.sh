#!/bin/bash

cd /Users/abdullah/Desktop/lapak-final-version

echo "⏪ ROLLING BACK ALL CHANGES..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# 1. Restore original App.jsx
echo "📄 Restoring App.jsx..."
cat > src/App.jsx << 'ENDAPP'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductGrid from './components/ProductGrid'
import TrustSections from './components/TrustSections'
import Footer from './components/Footer'
import Cart from './components/Cart'
import PromoBanner from './components/PromoBanner'
import { products } from './data/products'

function App() {
  const [cart, setCart] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)

  useEffect(() => {
    const savedCart = localStorage.getItem('lapakistan_cart')
    if (savedCart) {
      setCart(JSON.parse(savedCart))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('lapakistan_cart', JSON.stringify(cart))
  }, [cart])

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id)
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId))
  }

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(productId)
      return
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId
          ? { ...item, quantity: newQuantity }
          : item
      )
    )
  }

  return (
    <div className="min-h-screen bg-cream">
      <PromoBanner />
      <Header 
        cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
      />
      <Hero />
      <ProductGrid products={products} onAddToCart={addToCart} />
      <TrustSections />
      <Footer />
      <Cart
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cart}
        onUpdateQuantity={updateQuantity}
        onRemoveItem={removeFromCart}
      />
    </div>
  )
}

export default App
ENDAPP
echo "✓ App.jsx restored"

# 2. Restore original main.jsx
echo "📄 Restoring main.jsx..."
cat > src/main.jsx << 'ENDMAIN'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
ENDMAIN
echo "✓ main.jsx restored"

# 3. Restore original ProductCard.jsx
echo "📄 Restoring ProductCard.jsx..."
cat > src/components/ProductCard.jsx << 'ENDCARD'
import React from 'react'

function ProductCard({ product, onAddToCart }) {
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/400x400?text=Product+Image'
  }

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <div className="relative aspect-square overflow-hidden bg-light">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          onError={handleImageError}
          loading="lazy"
        />
      </div>

      <div className="p-4">
        {product.brand && (
          <p className="text-xs font-semibold text-purple uppercase tracking-wide mb-1">
            {product.brand}
          </p>
        )}

        <h3 className="font-bold text-dark text-lg mb-2 line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-sm text-accentDark mb-3 line-clamp-2">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between mt-4">
          <div>
            <p className="text-2xl font-black text-accent">
              PKR {product.price}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                PKR {product.originalPrice}
              </p>
            )}
          </div>
          
          <button
            onClick={() => onAddToCart(product)}
            className="bg-accent hover:bg-purple text-white px-4 py-2 rounded-xl font-bold transition-colors shadow-md hover:shadow-lg"
          >
            🛒 Add
          </button>
        </div>

        {product.originalPrice && product.originalPrice > product.price && (
          <div className="mt-3 inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
            🔥 Save PKR {product.originalPrice - product.price}
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductCard
ENDCARD
echo "✓ ProductCard.jsx restored"

# 4. Remove new component files
echo "🗑️ Removing new components..."
rm -f src/components/SEO.jsx
rm -f src/components/WhatsAppWidget.jsx
rm -f src/components/StockBadge.jsx
rm -f src/components/ProductReviews.jsx
echo "✓ Removed new components"

# 5. Restore products.js if it was modified
echo "📦 Checking products.js..."
if [ -f "src/data/products.js" ]; then
  python3 << 'PYTHON'
import os
import re

path = 'src/data/products.js'
with open(path, 'r') as f:
    content = f.read()

# Remove the wrapper if it exists
if 'originalProducts' in content:
    # Extract the original products array
    match = re.search(r'const originalProducts = (\[[\s\S]*?\])\s*// Add default', content)
    if match:
        original = match.group(1)
        with open(path, 'w') as f:
            f.write('export const products = ' + original)
        print("✓ Restored products.js to original")
    else:
        print("⚠ Could not parse products.js - may need manual check")
else:
    print("✓ products.js was not modified")
PYTHON
fi

# 6. Uninstall react-helmet-async if it was installed
echo "📦 Cleaning up dependencies..."
# npm uninstall react-helmet-async --silent 2>/dev/null || true

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ ROLLBACK COMPLETE!"
echo ""
echo "Removed:"
echo "  ✗ SEO component"
echo "  ✗ WhatsApp widget"
echo "  ✗ Stock badges"
echo "  ✗ Product reviews"
echo ""
echo "Restored:"
echo "  ✓ App.jsx"
echo "  ✓ main.jsx"
echo "  ✓ ProductCard.jsx"
echo "  ✓ products.js"
echo ""
echo "🔄 Your site is back to how it was before!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
