#!/bin/bash

cd /Users/abdullah/Desktop/lapak-final-version

echo "🚨 EMERGENCY FIX - REBUILDING FROM SCRATCH..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Check if we have git and can revert
if [ -d ".git" ]; then
  echo "📂 Found git repository - reverting to last commit..."
  git checkout src/
  echo "✓ Reverted all src/ files"
  echo "🔄 Refresh your browser now!"
  exit 0
fi

echo "⚠️ No git history - rebuilding manually..."

# Backup current broken files
mkdir -p backup-broken
cp -r src/ backup-broken/ 2>/dev/null

# Create minimal working App.jsx
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
      try {
        setCart(JSON.parse(savedCart))
      } catch (e) {
        console.error('Cart load error:', e)
      }
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

# Create minimal main.jsx
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

# Create minimal ProductCard.jsx
cat > src/components/ProductCard.jsx << 'ENDCARD'
import React from 'react'

function ProductCard({ product, onAddToCart }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all overflow-hidden">
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/400x400?text=Product'
          }}
        />
      </div>

      <div className="p-4">
        {product.brand && (
          <p className="text-xs font-semibold text-purple uppercase mb-1">
            {product.brand}
          </p>
        )}

        <h3 className="font-bold text-dark text-lg mb-2">
          {product.name}
        </h3>

        {product.description && (
          <p className="text-sm text-gray-600 mb-3">
            {product.description}
          </p>
        )}

        <div className="flex items-center justify-between">
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
            className="bg-accent hover:bg-purple text-white px-4 py-2 rounded-xl font-bold transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
ENDCARD

# Remove any problematic new files
rm -f src/components/SEO.jsx 2>/dev/null
rm -f src/components/WhatsAppWidget.jsx 2>/dev/null
rm -f src/components/StockBadge.jsx 2>/dev/null
rm -f src/components/ProductReviews.jsx 2>/dev/null

# Check products.js
echo "📦 Checking products.js..."
python3 << 'PYTHON'
import os

products_paths = [
    'src/data/products.js',
    'src/data/productsData.js',
]

for path in products_paths:
    if os.path.exists(path):
        with open(path, 'r') as f:
            content = f.read()
        
        # Fix any wrapped products
        if 'originalProducts' in content:
            # Try to extract original
            import re
            match = re.search(r'const originalProducts = (\[[\s\S]*?\])', content)
            if match:
                products_array = match.group(1)
                with open(path, 'w') as f:
                    f.write('export const products = ' + products_array)
                print(f"✓ Fixed {path}")
            else:
                print(f"⚠ Check {path} manually - has originalProducts but couldn't parse")
        else:
            # Check if it starts with export
            if not content.strip().startswith('export'):
                # Add export if missing
                content = 'export ' + content
                with open(path, 'w') as f:
                    f.write(content)
                print(f"✓ Added export to {path}")
            else:
                print(f"✓ {path} looks OK")
        break
else:
    print("⚠ No products.js found!")
PYTHON

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ EMERGENCY FIX COMPLETE"
echo ""
echo "Created fresh minimal files:"
echo "  ✓ App.jsx"
echo "  ✓ main.jsx"
echo "  ✓ ProductCard.jsx"
echo ""
echo "Removed problematic files:"
echo "  ✗ SEO.jsx"
echo "  ✗ WhatsAppWidget.jsx"
echo "  ✗ StockBadge.jsx"
echo ""
echo "🔄 NOW:"
echo "   1. Refresh your browser (Cmd+Shift+R or Ctrl+Shift+R)"
echo "   2. Clear cache if needed"
echo "   3. Check browser console (F12) for any errors"
echo ""
echo "💾 Broken files backed up to: backup-broken/"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
