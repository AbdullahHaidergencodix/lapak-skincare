#!/bin/bash

echo "🚀 Final optimization & deployment script"
echo "=========================================="

# 1️⃣ OPTIMIZED INDEX.HTML WITH SEO
cat > index.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
  <meta name="theme-color" content="#667eea" />
  <meta name="description" content="LA Pakistan - Premium Skincare & Aesthetics by DR Fatima Abid. Professional skincare products trusted by families across Pakistan since 2012." />
  <meta name="keywords" content="skincare, pakistan, aesthetics, acne, moisturizer, sunblock, LA Pakistan, DR Fatima Abid" />
  <meta name="author" content="LA Pakistan" />
  
  <!-- Open Graph -->
  <meta property="og:title" content="LA Pakistan - Premium Skincare & Aesthetics" />
  <meta property="og:description" content="Professional skincare formulations trusted by families across Pakistan since 2012." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://lapakistan.com" />
  <meta property="og:image" content="/og-image.jpg" />
  
  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="LA Pakistan - Premium Skincare" />
  <meta name="twitter:description" content="Professional skincare formulations trusted by families across Pakistan." />
  
  <!-- Preconnect for performance -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
  
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
  <link rel="manifest" href="/manifest.json" />
  
  <title>LA Pakistan - Premium Skincare & Aesthetics</title>
</head>
<body>
  <div id="root"></div>
  <script type="module" src="/src/main.jsx"></script>
</body>
</html>
EOF

echo "✅ index.html optimized"

# 2️⃣ PWA MANIFEST
cat > public/manifest.json << 'EOF'
{
  "name": "LA Pakistan - Premium Skincare",
  "short_name": "LA Pakistan",
  "description": "Premium Skincare & Aesthetics",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#667eea",
  "theme_color": "#667eea",
  "icons": [
    { "src": "/favicon.png", "sizes": "64x64", "type": "image/png" },
    { "src": "/logo.png", "sizes": "192x192", "type": "image/png" },
    { "src": "/logo.png", "sizes": "512x512", "type": "image/png" }
  ]
}
EOF

echo "✅ PWA manifest"

# 3️⃣ OPTIMIZED CSS WITH ALL FIXES
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { 
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;
  }
  body {
    min-height: 100dvh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #ffd89b 100%);
    background-attachment: fixed;
    font-family: 'Inter', system-ui, -apple-system, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  /* Safe area for notched phones */
  .pb-safe { padding-bottom: env(safe-area-inset-bottom, 20px); }
  .pt-safe { padding-top: env(safe-area-inset-top, 0px); }
}

/* Glass Effects */
.glass {
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.glass-strong {
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.glass-card {
  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.4);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.45);
  transform: translateY(-5px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.18);
}

.glass-dark {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Animations */
@keyframes float { 
  0%, 100% { transform: translateY(0); } 
  50% { transform: translateY(-10px); } 
}
@keyframes fade-in { 
  from { opacity: 0; transform: translateY(20px); } 
  to { opacity: 1; transform: translateY(0); } 
}
@keyframes slide-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes glow { 
  0%, 100% { opacity: 0.5; } 
  50% { opacity: 0.8; } 
}
@keyframes pulse-soft {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}

.animate-float { animation: float 6s ease-in-out infinite; }
.animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
.animate-slide-up { animation: slide-up 0.5s ease-out forwards; }
.animate-glow { animation: glow 3s ease-in-out infinite; }
.animate-pulse-soft { animation: pulse-soft 2s ease-in-out infinite; }

/* Skeleton loading */
.skeleton {
  background: linear-gradient(90deg, rgba(255,255,255,0.1) 25%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0.1) 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Utilities */
::selection { background: rgba(255, 255, 255, 0.3); }

.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.line-clamp-1 { display: -webkit-box; -webkit-line-clamp: 1; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
.line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }

/* Fix iOS input zoom */
@media (max-width: 768px) { 
  input, select, textarea { font-size: 16px !important; }
}

/* Section scroll offset */
section[id] { scroll-margin-top: 100px; }

/* Touch targets */
@media (max-width: 768px) {
  button, a { min-height: 44px; }
}

/* Reduce motion for accessibility */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
EOF

echo "✅ CSS optimized"

# 4️⃣ CART DRAWER COMPONENT
cat > src/components/CartDrawer.jsx << 'EOF'
import React from 'react'

function CartDrawer({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const isFreeShipping = total >= 2000

  if (!isOpen) return null

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md glass-strong z-[90] flex flex-col animate-slide-up">
        {/* Header */}
        <div className="p-5 border-b border-white/20 flex items-center justify-between bg-gradient-to-r from-purple-600 to-pink-500">
          <h2 className="text-xl font-bold text-white">Your Cart ({cartItems.length})</h2>
          <button onClick={onClose} className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        {/* Free shipping bar */}
        <div className="px-5 py-3 bg-white/20">
          {isFreeShipping ? (
            <p className="text-green-700 text-sm font-medium text-center">🎉 You've unlocked FREE shipping!</p>
          ) : (
            <div>
              <p className="text-gray-700 text-sm text-center mb-2">Add PKR {(2000 - total).toLocaleString()} more for FREE shipping</p>
              <div className="h-2 bg-white/50 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all" style={{ width: `${Math.min((total / 2000) * 100, 100)}%` }} />
              </div>
            </div>
          )}
        </div>

        {/* Cart items */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🛒</div>
              <p className="text-gray-600 font-medium">Your cart is empty</p>
              <p className="text-gray-500 text-sm mt-1">Add some products to get started!</p>
              <button onClick={onClose} className="mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-medium">
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map(item => (
              <div key={item.id} className="flex gap-4 p-3 bg-white/50 rounded-2xl">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-white/50"
                  onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="80" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f0f0f0" width="80" height="80"/%3E%3C/svg%3E' }} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{item.name}</h4>
                  <p className="text-xs text-gray-500">{item.size}</p>
                  <p className="text-purple-700 font-bold mt-1">PKR {item.price.toLocaleString()}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded-lg bg-white/80 text-gray-600 font-bold hover:bg-white transition-colors">-</button>
                    <span className="w-8 text-center font-medium text-gray-800">{item.quantity}</span>
                    <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded-lg bg-white/80 text-gray-600 font-bold hover:bg-white transition-colors">+</button>
                    <button onClick={() => onRemoveItem(item.id)} className="ml-auto p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="p-5 border-t border-white/20 bg-white/30 space-y-4">
            <div className="flex justify-between text-lg font-bold text-gray-800">
              <span>Total:</span>
              <span className="text-purple-700">PKR {total.toLocaleString()}</span>
            </div>
            {!isFreeShipping && <p className="text-xs text-gray-500 text-center">+ Shipping calculated at checkout</p>}
            <button onClick={onCheckout} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]">
              Checkout via WhatsApp 💬
            </button>
            <p className="text-xs text-gray-500 text-center">Secure checkout • Cash on Delivery available</p>
          </div>
        )}
      </div>
    </>
  )
}

export default CartDrawer
EOF

echo "✅ CartDrawer"

# 5️⃣ QUICK VIEW MODAL
cat > src/components/QuickViewModal.jsx << 'EOF'
import React, { useState } from 'react'
import StarRating from './StarRating'

function QuickViewModal({ product, isOpen, onClose, onAddToCart, onToggleWishlist, isWishlisted }) {
  const [quantity, setQuantity] = useState(1)
  
  if (!isOpen || !product) return null

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product)
    }
    onClose()
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80]" onClick={onClose} />
      <div className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-3xl md:max-h-[90vh] glass-strong rounded-3xl z-[90] overflow-hidden animate-fade-in">
        <button onClick={onClose} className="absolute top-4 right-4 p-2 rounded-xl bg-white/50 text-gray-600 hover:bg-white/80 transition-colors z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto">
          {/* Image */}
          <div className="md:w-1/2 aspect-square md:aspect-auto relative bg-gradient-to-br from-purple-100 to-pink-100">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover"
              onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="400" height="400" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f5f5f5" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="%23999" font-size="16"%3EProduct Image%3C/text%3E%3C/svg%3E' }} />
            {discount > 0 && <span className="absolute top-4 left-4 px-3 py-1.5 bg-rose-500 text-white text-sm font-bold rounded-full">-{discount}%</span>}
            {product.badge && <span className="absolute top-4 left-20 px-3 py-1.5 bg-white/90 text-purple-700 text-sm font-bold rounded-full shadow">{product.badge}</span>}
          </div>

          {/* Details */}
          <div className="md:w-1/2 p-6 md:p-8 flex flex-col bg-white/50">
            <span className="text-purple-600 text-sm font-semibold bg-purple-100/80 px-3 py-1 rounded-full w-fit mb-3">{product.category}</span>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{product.name}</h2>
            
            <div className="flex items-center gap-3 mb-4">
              <StarRating rating={product.rating || 4.5} />
              <span className="text-sm text-gray-500">({product.reviewCount || 0} reviews)</span>
            </div>

            <p className="text-gray-600 mb-6 flex-grow">{product.description}</p>

            {product.benefits && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {product.benefits.map((benefit, i) => (
                    <span key={i} className="text-xs bg-green-100/80 text-green-700 px-3 py-1 rounded-full">✓ {benefit}</span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-purple-700">PKR {product.price.toLocaleString()}</span>
                <span className="text-lg text-gray-400 line-through">PKR {product.originalPrice.toLocaleString()}</span>
              </div>
              
              <p className="text-sm text-gray-500">Size: <span className="font-medium text-gray-700">{product.size}</span></p>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/80 rounded-xl p-1">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors">-</button>
                  <span className="w-10 text-center font-semibold text-gray-800">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="w-10 h-10 rounded-lg bg-gray-100 text-gray-600 font-bold hover:bg-gray-200 transition-colors">+</button>
                </div>
                <button onClick={() => onToggleWishlist(product.id)}
                  className={`p-3 rounded-xl transition-colors ${isWishlisted ? 'bg-pink-500 text-white' : 'bg-white/80 text-pink-500 hover:bg-pink-100'}`}>
                  <svg className="w-6 h-6" fill={isWishlisted ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>

              <button onClick={handleAddToCart} className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-bold text-lg shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]">
                Add to Cart - PKR {(product.price * quantity).toLocaleString()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default QuickViewModal
EOF

echo "✅ QuickViewModal"

# 6️⃣ WISHLIST MODAL
cat > src/components/WishlistModal.jsx << 'EOF'
import React from 'react'

function WishlistModal({ isOpen, onClose, wishlistItems, onRemoveFromWishlist, onAddToCart, products }) {
  if (!isOpen) return null

  const wishlistProducts = products.filter(p => wishlistItems.includes(p.id))

  return (
    <>
      <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[80]" onClick={onClose} />
      <div className="fixed top-0 right-0 bottom-0 w-full max-w-md glass-strong z-[90] flex flex-col animate-slide-up">
        <div className="p-5 border-b border-white/20 flex items-center justify-between bg-gradient-to-r from-pink-500 to-rose-500">
          <h2 className="text-xl font-bold text-white">Wishlist ({wishlistProducts.length})</h2>
          <button onClick={onClose} className="p-2 rounded-xl bg-white/20 text-white hover:bg-white/30 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-5 space-y-4 scrollbar-hide">
          {wishlistProducts.length === 0 ? (
            <div className="text-center py-10">
              <div className="text-6xl mb-4">💕</div>
              <p className="text-gray-600 font-medium">Your wishlist is empty</p>
              <p className="text-gray-500 text-sm mt-1">Save items you love!</p>
              <button onClick={onClose} className="mt-6 px-6 py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-xl font-medium">
                Browse Products
              </button>
            </div>
          ) : (
            wishlistProducts.map(product => (
              <div key={product.id} className="flex gap-4 p-3 bg-white/50 rounded-2xl">
                <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-xl bg-white/50"
                  onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="80" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f0f0f0" width="80" height="80"/%3E%3C/svg%3E' }} />
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-gray-800 text-sm line-clamp-1">{product.name}</h4>
                  <p className="text-xs text-gray-500">{product.size}</p>
                  <p className="text-purple-700 font-bold mt-1">PKR {product.price.toLocaleString()}</p>
                  <div className="flex gap-2 mt-2">
                    <button onClick={() => { onAddToCart(product); onRemoveFromWishlist(product.id) }} className="flex-1 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs rounded-lg font-medium">
                      Add to Cart
                    </button>
                    <button onClick={() => onRemoveFromWishlist(product.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  )
}

export default WishlistModal
EOF

echo "✅ WishlistModal"

# 7️⃣ TOAST NOTIFICATION
cat > src/components/Toast.jsx << 'EOF'
import React, { useEffect } from 'react'

function Toast({ message, type = 'success', isVisible, onClose }) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  if (!isVisible) return null

  const bgColor = type === 'success' ? 'from-green-500 to-emerald-500' : 
                  type === 'error' ? 'from-red-500 to-rose-500' : 
                  'from-purple-500 to-pink-500'

  return (
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-slide-up">
      <div className={`px-6 py-3 bg-gradient-to-r ${bgColor} text-white rounded-full shadow-xl flex items-center gap-3`}>
        {type === 'success' && <span>✓</span>}
        {type === 'error' && <span>✕</span>}
        <span className="font-medium">{message}</span>
      </div>
    </div>
  )
}

export default Toast
EOF

echo "✅ Toast"

# 8️⃣ PRODUCTS SECTION
cat > src/components/ProductsSection.jsx << 'EOF'
import React, { useState, useMemo } from 'react'
import ProductCard from './ProductCard'

function ProductsSection({ products, onAddToCart, onQuickView, onToggleWishlist, wishlist, searchQuery }) {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('default')

  const categories = ['All', ...new Set(products.map(p => p.category))]

  const filteredProducts = useMemo(() => {
    let result = [...products]
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(p => 
        p.name.toLowerCase().includes(query) || 
        p.description.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query)
      )
    }
    
    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter(p => p.category === selectedCategory)
    }
    
    // Sort
    switch (sortBy) {
      case 'price-low': result.sort((a, b) => a.price - b.price); break
      case 'price-high': result.sort((a, b) => b.price - a.price); break
      case 'rating': result.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break
      case 'name': result.sort((a, b) => a.name.localeCompare(b.name)); break
      default: break
    }
    
    return result
  }, [products, selectedCategory, sortBy, searchQuery])

  return (
    <section id="products" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Our Products</h2>
          <p className="text-white/80 max-w-xl mx-auto">Professional skincare solutions for every skin type</p>
        </div>

        {/* Filters */}
        <div className="glass-strong rounded-2xl p-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map(cat => (
                <button key={cat} onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg' : 'bg-white/50 text-gray-700 hover:bg-white/70'}`}>
                  {cat}
                </button>
              ))}
            </div>
            
            {/* Sort */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 bg-white/80 rounded-xl text-gray-700 text-sm font-medium border-0 focus:outline-none focus:ring-2 focus:ring-purple-400">
              <option value="default">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="glass-strong rounded-2xl p-12 text-center">
            <p className="text-xl text-gray-600">No products found</p>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.05}s` }}>
                <ProductCard
                  product={product}
                  onAddToCart={onAddToCart}
                  onQuickView={onQuickView}
                  onToggleWishlist={onToggleWishlist}
                  isWishlisted={wishlist.includes(product.id)}
                />
              </div>
            ))}
          </div>
        )}
        
        <p className="text-center text-white/60 text-sm mt-8">Showing {filteredProducts.length} of {products.length} products</p>
      </div>
    </section>
  )
}

export default ProductsSection
EOF

echo "✅ ProductsSection"

# 9️⃣ REVIEWS SECTION
cat > src/components/ReviewsSection.jsx << 'EOF'
import React from 'react'
import StarRating from './StarRating'

function ReviewsSection({ products }) {
  const allReviews = products
    .filter(p => p.reviews && p.reviews.length > 0)
    .flatMap(p => p.reviews.map(r => ({ ...r, productName: p.name })))
    .slice(0, 8)

  return (
    <section id="reviews" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Customer Reviews</h2>
          <p className="text-white/80">See what our customers are saying</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allReviews.map((review, index) => (
            <div key={index} className="glass-card rounded-2xl p-5 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-800 text-sm">{review.name}</p>
                  <p className="text-xs text-gray-500">{review.date}</p>
                </div>
                {review.verified && <span className="ml-auto text-xs text-green-600 bg-green-100/80 px-2 py-0.5 rounded-full">✓ Verified</span>}
              </div>
              <StarRating rating={review.rating} size="sm" />
              <p className="text-gray-600 text-sm mt-3 line-clamp-3">{review.comment}</p>
              <p className="text-xs text-purple-600 mt-2 font-medium">{review.productName}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection
EOF

echo "✅ ReviewsSection"

# 🔟 FAQ SECTION
cat > src/components/FAQSection.jsx << 'EOF'
import React, { useState } from 'react'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: "What payment methods do you accept?", a: "We accept Cash on Delivery (COD) across Pakistan. Payment via bank transfer and JazzCash/Easypaisa also available." },
    { q: "How long does shipping take?", a: "We ship within 24-48 hours. Delivery takes 2-4 business days for major cities, 4-7 days for other areas." },
    { q: "Do you offer free shipping?", a: "Yes! Free shipping on all orders above PKR 2,000. Orders below this have a flat shipping rate." },
    { q: "Are your products authentic?", a: "100% authentic. All products are from our own manufacturing under supervision of DR Fatima Abid and DR Muhammad Abid Yasin Ghumman." },
    { q: "Can I return a product?", a: "Yes, we accept returns within 7 days if the product is unopened and in original packaging. Contact us via WhatsApp." },
    { q: "Do you offer wholesale pricing?", a: "Yes! We offer special wholesale rates for bulk orders. Contact us on WhatsApp for wholesale inquiries." },
  ]

  return (
    <section id="faq" className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">FAQ</h2>
          <p className="text-white/80">Got questions? We've got answers</p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 text-left flex items-center justify-between gap-4">
                <span className="font-semibold text-gray-800">{faq.q}</span>
                <svg className={`w-5 h-5 text-purple-600 transition-transform ${openIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 text-gray-600 animate-fade-in">{faq.a}</div>
              )}
            </div>
          ))}
        </div>

        <div className="glass-strong rounded-2xl p-6 mt-8 text-center">
          <p className="text-gray-700 mb-4">Still have questions?</p>
          <a href="https://wa.me/923054573962" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl font-semibold shadow-lg">
            💬 Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}

export default FAQSection
EOF

echo "✅ FAQSection"

# 1️⃣1️⃣ BUNDLES SECTION
cat > src/components/BundlesSection.jsx << 'EOF'
import React from 'react'

function BundlesSection({ bundles, products, onAddBundle }) {
  if (!bundles || bundles.length === 0) return null

  return (
    <section id="bundles" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Value Bundles</h2>
          <p className="text-white/80">Save more with our curated bundles</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle, index) => {
            const bundleProducts = bundle.products?.map(id => products.find(p => p.id === id)).filter(Boolean) || []
            
            return (
              <div key={bundle.id} className="glass-card rounded-3xl overflow-hidden animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="relative h-48 bg-gradient-to-br from-purple-500/30 to-pink-500/30">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex -space-x-4">
                      {bundleProducts.slice(0, 3).map((p, i) => (
                        <img key={p.id} src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded-xl border-2 border-white shadow-lg"
                          style={{ transform: `rotate(${(i - 1) * 5}deg)` }}
                          onError={(e) => { e.target.src = 'data:image/svg+xml,%3Csvg width="80" height="80" xmlns="http://www.w3.org/2000/svg"%3E%3Crect fill="%23f0f0f0" width="80" height="80"/%3E%3C/svg%3E' }} />
                      ))}
                    </div>
                  </div>
                  {bundle.badge && <span className="absolute top-4 left-4 px-3 py-1.5 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs font-bold rounded-full shadow-lg">{bundle.badge}</span>}
                </div>
                
                <div className="p-5 bg-white/50">
                  <h3 className="font-bold text-gray-800 text-lg mb-2">{bundle.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{bundle.description}</p>
                  
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    {bundleProducts.map(p => (
                      <span key={p.id} className="text-xs bg-purple-100/80 text-purple-700 px-2 py-1 rounded-full">{p.name}</span>
                    ))}
                  </div>
                  
                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-2xl font-bold text-purple-700">PKR {bundle.price.toLocaleString()}</span>
                    <span className="text-gray-400 line-through">PKR {bundle.originalPrice.toLocaleString()}</span>
                    <span className="text-xs text-green-600 font-semibold bg-green-100/80 px-2 py-1 rounded-full">Save PKR {bundle.savings}</span>
                  </div>
                  
                  <button onClick={() => onAddBundle(bundle, bundleProducts)} className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    Add Bundle to Cart
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default BundlesSection
EOF

echo "✅ BundlesSection"

# 1️⃣2️⃣ TRENDING SECTION
cat > src/components/TrendingSection.jsx << 'EOF'
import React from 'react'
import ProductCard from './ProductCard'

function TrendingSection({ products, onAddToCart, onQuickView, onToggleWishlist, wishlist }) {
  const trending = products.filter(p => p.badge === 'Best Seller' || p.badge === 'Popular').slice(0, 4)

  if (trending.length === 0) return null

  return (
    <section id="trending" className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg mb-3">Trending Now 🔥</h2>
          <p className="text-white/80">Our most loved products</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {trending.map((product, index) => (
            <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onQuickView={onQuickView}
                onToggleWishlist={onToggleWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingSection
EOF

echo "✅ TrendingSection"

# 1️⃣3️⃣ BUNDLES DATA
cat > src/data/bundles.js << 'EOF'
const bundles = [
  {
    id: 'b1',
    name: 'Acne Care Complete Kit',
    description: 'Everything you need for clear, acne-free skin',
    products: [3, 11, 13],
    originalPrice: 1490,
    price: 1199,
    savings: 291,
    badge: 'Best Seller'
  },
  {
    id: 'b2',
    name: 'Hydration Essentials',
    description: 'Deep moisturizing combo for dry skin',
    products: [5, 6, 7],
    originalPrice: 1078,
    price: 899,
    savings: 179,
    badge: 'Popular'
  },
  {
    id: 'b3',
    name: 'Daily Glow Routine',
    description: 'For radiant, glowing skin every day',
    products: [1, 4, 10],
    originalPrice: 1829,
    price: 1499,
    savings: 330,
    badge: 'Premium'
  }
]

export default bundles
EOF

echo "✅ Bundles data"

# 1️⃣4️⃣ MAIN APP
cat > src/App.jsx << 'EOF'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import TrustBadges from './components/TrustBadges'
import TrendingSection from './components/TrendingSection'
import BundlesSection from './components/BundlesSection'
import ProductsSection from './components/ProductsSection'
import ReviewsSection from './components/ReviewsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import MobileBottomNav from './components/MobileBottomNav'
import CartDrawer from './components/CartDrawer'
import WishlistModal from './components/WishlistModal'
import QuickViewModal from './components/QuickViewModal'
import Toast from './components/Toast'
import products from './data/products'
import bundles from './data/bundles'

function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [quickViewProduct, setQuickViewProduct] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  const [toast, setToast] = useState({ message: '', type: 'success', visible: false })

  // Load from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('lapak-cart')
    const savedWishlist = localStorage.getItem('lapak-wishlist')
    if (savedCart) setCart(JSON.parse(savedCart))
    if (savedWishlist) setWishlist(JSON.parse(savedWishlist))
  }, [])

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('lapak-cart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    localStorage.setItem('lapak-wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const showToast = (message, type = 'success') => {
    setToast({ message, type, visible: true })
  }

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id)
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
      }
      return [...prev, { ...product, quantity: 1 }]
    })
    showToast(`${product.name} added to cart!`)
  }

  const updateQuantity = (id, quantity) => {
    if (quantity < 1) {
      setCart(prev => prev.filter(item => item.id !== id))
    } else {
      setCart(prev => prev.map(item => item.id === id ? { ...item, quantity } : item))
    }
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id))
    showToast('Item removed from cart', 'info')
  }

  const toggleWishlist = (id) => {
    setWishlist(prev => {
      if (prev.includes(id)) {
        showToast('Removed from wishlist', 'info')
        return prev.filter(i => i !== id)
      }
      showToast('Added to wishlist! 💕')
      return [...prev, id]
    })
  }

  const addBundle = (bundle, bundleProducts) => {
    bundleProducts.forEach(p => addToCart(p))
    showToast(`${bundle.name} added to cart!`)
  }

  const handleCheckout = () => {
    const items = cart.map(item => `• ${item.name} (${item.size}) x${item.quantity} - PKR ${(item.price * item.quantity).toLocaleString()}`).join('\n')
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const message = `🛒 *New Order from LA Pakistan*\n\n${items}\n\n*Total: PKR ${total.toLocaleString()}*\n\nPlease confirm my order!`
    window.open(`https://wa.me/923054573962?text=${encodeURIComponent(message)}`, '_blank')
  }

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="min-h-screen pb-20 md:pb-0">
      <Header
        cartCount={cartCount}
        onCartClick={() => setIsCartOpen(true)}
        wishlistCount={wishlist.length}
        onWishlistClick={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main>
        <Hero />
        <TrustBadges />
        <TrendingSection products={products} onAddToCart={addToCart} onQuickView={setQuickViewProduct} onToggleWishlist={toggleWishlist} wishlist={wishlist} />
        <BundlesSection bundles={bundles} products={products} onAddBundle={addBundle} />
        <ProductsSection products={products} onAddToCart={addToCart} onQuickView={setQuickViewProduct} onToggleWishlist={toggleWishlist} wishlist={wishlist} searchQuery={searchQuery} />
        <ReviewsSection products={products} />
        <FAQSection />
      </main>

      <Footer />
      <MobileBottomNav cartCount={cartCount} onCartClick={() => setIsCartOpen(true)} />

      <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} cartItems={cart} onUpdateQuantity={updateQuantity} onRemoveItem={removeFromCart} onCheckout={handleCheckout} />
      <WishlistModal isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} wishlistItems={wishlist} onRemoveFromWishlist={toggleWishlist} onAddToCart={addToCart} products={products} />
      <QuickViewModal product={quickViewProduct} isOpen={!!quickViewProduct} onClose={() => setQuickViewProduct(null)} onAddToCart={addToCart} onToggleWishlist={toggleWishlist} isWishlisted={quickViewProduct ? wishlist.includes(quickViewProduct.id) : false} />
      <Toast message={toast.message} type={toast.type} isVisible={toast.visible} onClose={() => setToast(prev => ({ ...prev, visible: false }))} />
    </div>
  )
}

export default App
EOF

echo "✅ App.jsx"

# 1️⃣5️⃣ VERCEL CONFIG
cat > vercel.json << 'EOF'
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ],
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" }
      ]
    },
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
EOF

echo "✅ vercel.json"

# 1️⃣6️⃣ BUILD & DEPLOY
echo ""
echo "📦 Building project..."
npm run build

if [ $? -eq 0 ]; then
  echo "✅ Build successful!"
  
  echo ""
  echo "📤 Pushing to Git..."
  git add .
  git commit -m "🚀 Final optimization: glassmorphism UI, responsive, SEO, PWA ready"
  git push origin main
  
  if [ $? -eq 0 ]; then
    echo "✅ Pushed to Git!"
    
    echo ""
    echo "🌐 Deploying to Vercel..."
    npx vercel --prod --yes
    
    if [ $? -eq 0 ]; then
      echo ""
      echo "════════════════════════════════════════════════════════════"
      echo "🎉 DEPLOYMENT COMPLETE!"
      echo "════════════════════════════════════════════════════════════"
    else
      echo "⚠️ Vercel deploy may need manual trigger"
    fi
  else
    echo "❌ Git push failed"
  fi
else
  echo "❌ Build failed - fix errors first"
fi

echo ""
echo "📋 WHAT WAS DONE:"
echo "  ✅ SEO meta tags & Open Graph"
echo "  ✅ PWA manifest"
echo "  ✅ Optimized CSS with animations"
echo "  ✅ Cart drawer with free shipping bar"
echo "  ✅ Quick view modal"
echo "  ✅ Wishlist modal"
echo "  ✅ Toast notifications"
echo "  ✅ Products section with filters & sort"
echo "  ✅ Reviews section"
echo "  ✅ FAQ accordion"
echo "  ✅ Bundles section"
echo "  ✅ Trending section"
echo "  ✅ LocalStorage persistence"
echo "  ✅ WhatsApp checkout"
echo "  ✅ Responsive design"
echo "  ✅ Safe area for notched phones"
echo "  ✅ Reduced motion accessibility"
echo "  ✅ Vercel caching headers"
echo "  ✅ Git push + Vercel deploy"