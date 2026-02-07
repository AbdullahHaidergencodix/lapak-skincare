cat > ~/Desktop/update-site.sh << 'EOF'
#!/bin/bash

cd ~/Desktop/lapak-final-version

echo "🔄 UPDATING YOUR LIVE SITE..."
echo ""

# Update config with new doctor name
cat > src/data/config.js << 'CONFIG'
export const whatsappNumber = '923054573962';
export const businessName = 'Lapak';
export const ownerName = 'Dr Fatima Abid';
export const ownerTitle = 'Skin Dermatologist';
export const city = 'Faisalabad';
export const since = '2012';
export const instagram = 'lapak.officials';
export const deliveryAreas = 'Nationwide Delivery Available';
export const businessHours = '24/7 Customer Support';
export const shippingFee = 150;
export const freeShippingThreshold = 2000;
export const bundleDiscountThreshold = 3;
export const bundleDiscountAmount = 200;
CONFIG

# Update products with new descriptions
cat > src/data/products.js << 'PRODUCTS'
const products = [
  { id: 1, name: "L A Pharma Sarnla Lotion", price: 549, originalPrice: 399, size: "60 ml", category: "Lotion", image: "/content/images/sarnla-lotion.jpg", description: "For dry itchy skin. Dermatologist-backed moisturizing lotion for daily relief.", badge: "Popular" },
  { id: 2, name: "Versas Bar", price: 430, originalPrice: 280, size: "75 gm", category: "Cleansing Bar", image: "/content/images/versas-bar.jpg", description: "For scabies, fungal infection. Medicated cleansing bar for skin conditions." },
  { id: 3, name: "Acnela Bar", price: 430, originalPrice: 280, size: "75 gm", category: "Acne Care", image: "/content/images/acnela-bar.jpg", description: "Medicated cleansing bar formulated for acne-prone skin.", badge: "Best Seller" },
  { id: 4, name: "Lavite Cream", price: 930, originalPrice: 780, size: "20 gm", category: "Moisturizer", image: "/content/images/lavite-cream.jpg", description: "For skin whitening & brightening. Advanced formula for radiant complexion.", badge: "Premium" },
  { id: 5, name: "Aquaphil Gel", price: 549, originalPrice: 399, size: "100 gm", category: "Hydration", image: "/content/images/aquaphil-gel.jpg", description: "Lightweight gel moisturizer for long-lasting hydration.", badge: "Best Seller" },
  { id: 6, name: "Aquaphil Bar", price: 430, originalPrice: 280, size: "75 gm", category: "Cleansing Bar", image: "/content/images/aquaphil-bar.jpg", description: "Soap-free cleansing bar for dry and sensitive skin.", badge: "Popular" },
  { id: 7, name: "Aquaphil Lotion", price: 549, originalPrice: 399, size: "60 ml", category: "Lotion", image: "/content/images/aquaphil-lotion.jpg", description: "Daily-use lotion providing deep moisturization.", badge: "Best Seller" },
  { id: 8, name: "Vits-E Bar", price: 440, originalPrice: 290, size: "75 gm", category: "Vitamin Care", image: "/content/images/vits-e-bar.jpg", description: "Vitamin-E enriched cleansing bar for skin nourishment." },
  { id: 9, name: "Laven Shampoo", price: 549, originalPrice: 399, size: "100 ml", category: "Hair Care", image: "/content/images/laven-shampoo.jpg", description: "Mild shampoo formulated for sensitive scalp and daily use." },
  { id: 10, name: "Sunla Sunblock Cream", price: 800, originalPrice: 650, size: "20 gm", category: "Sun Protection", image: "/content/images/sunla-sunblock.jpg", description: "Broad-spectrum sunblock for daily UV protection.", badge: "New" },
  { id: 11, name: "Acnela Cream", price: 610, originalPrice: 460, size: "20 gm", category: "Acne Treatment", image: "/content/images/acnela-cream.jpg", description: "Targeted acne treatment cream recommended by dermatologists.", badge: "Popular" },
  { id: 12, name: "Aquaphil Plus Care Oil", price: 1100, originalPrice: 950, size: "100 ml", category: "Body Oil", image: "/content/images/aquaphil-oil.jpg", description: "Intensive care oil for extremely dry and sensitive skin.", badge: "Premium" },
  { id: 13, name: "Acnela Face Wash", price: 900, originalPrice: 750, size: "50 ml", category: "Face Wash", image: "/content/images/acnela-facewash.jpg", description: "Gentle foaming face wash for acne-prone skin.", badge: "Best Seller" },
  { id: 14, name: "Cariderm Cream", price: 849, originalPrice: 699, size: "20 gm", category: "Dermatology Care", image: "/content/images/cariderm-cream.jpg", description: "For Melasma, Freckles, dark spots. Specialized brightening treatment.", badge: "Premium" },
  { id: 15, name: "Aquaphil Plus", price: 600, originalPrice: 450, size: "100 gm", category: "Moisturizer", image: "/content/images/aquaphil-plus.jpg", description: "Advanced moisturizing formula for long-term skin comfort.", badge: "Popular" }
];
export default products;
PRODUCTS

# Update Cart component with free shipping logic
cat > src/components/Cart.jsx << 'CART'
import React from 'react'
import { whatsappNumber, businessName, shippingFee, freeShippingThreshold, bundleDiscountThreshold, bundleDiscountAmount } from '../data/config'

function Cart({ isOpen, onClose, cart, onUpdateQuantity, onRemoveItem, onClearCart }) {
  if (!isOpen) return null

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  const bundleDiscount = totalItems >= bundleDiscountThreshold ? bundleDiscountAmount : 0
  const shipping = subtotal >= freeShippingThreshold ? 0 : (cart.length > 0 ? shippingFee : 0)
  const total = subtotal + shipping - bundleDiscount

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return

    let message = `*🛍️ New Order - ${businessName}*%0A%0A`
    message += `*ORDER DETAILS:*%0A`
    message += `━━━━━━━━━━━━━━━━━━━━%0A%0A`
    
    cart.forEach(item => {
      message += `📦 *${item.name}*%0A`
      message += `   Size: ${item.size}%0A`
      message += `   Qty: ${item.quantity}%0A`
      message += `   Price: PKR ${item.price} × ${item.quantity} = PKR ${item.price * item.quantity}%0A%0A`
    })
    
    message += `━━━━━━━━━━━━━━━━━━━━%0A`
    message += `💰 *Subtotal:* PKR ${subtotal}%0A`
    message += `🚚 *Shipping:* ${shipping === 0 ? 'FREE' : `PKR ${shipping}`}%0A`
    
    if (bundleDiscount > 0) {
      message += `🎉 *Bundle Discount (${totalItems} items):* -PKR ${bundleDiscount}%0A`
    }
    
    message += `━━━━━━━━━━━━━━━━━━━━%0A`
    message += `*TOTAL: PKR ${total}*%0A%0A`
    message += `Please confirm this order and provide delivery details. Thank you! 😊`

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <div className="fixed inset-0 bg-dark/60 backdrop-blur-sm z-50" onClick={onClose}></div>
      <div className="fixed right-0 top-0 h-full w-full sm:w-96 glass shadow-2xl z-50 flex flex-col border-l-4 border-accent">
        <div className="flex items-center justify-between p-4 border-b border-accent/20 bg-gradient-to-r from-accent/10 to-purple/10">
          <h2 className="text-xl font-bold gradient-text">Your Cart 🛒</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="flex-grow flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="text-accent text-lg font-medium">Your cart is empty</p>
              <p className="text-sm text-accentDark mt-2">Add some products to get started!</p>
            </div>
          </div>
        ) : (
          <>
            {subtotal >= freeShippingThreshold ? (
              <div className="bg-gradient-to-r from-green/20 to-cyan/20 border border-green p-3 m-4 rounded-xl">
                <p className="text-sm font-bold text-green flex items-center">
                  🎉 Congratulations! You get FREE SHIPPING!
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-orange/20 to-pink/20 border border-orange p-3 m-4 rounded-xl">
                <p className="text-sm font-bold text-orange flex items-center">
                  🚚 Add PKR {freeShippingThreshold - subtotal} more for FREE shipping!
                </p>
              </div>
            )}
            
            {totalItems >= bundleDiscountThreshold && (
              <div className="bg-gradient-to-r from-green/20 to-cyan/20 border border-green p-3 mx-4 mb-4 rounded-xl">
                <p className="text-sm font-bold text-green flex items-center">
                  🎉 Bundle Discount Applied! Save PKR {bundleDiscountAmount}
                </p>
              </div>
            )}

            <div className="flex-grow overflow-y-auto p-4 space-y-4">
              {cart.map(item => (
                <div key={item.id} className="glass rounded-xl p-4 border border-accent/20 hover:border-accent transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-dark text-sm flex-grow pr-2">{item.name}</h3>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="text-pink hover:text-dark transition-colors"
                      aria-label="Remove item"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <p className="text-xs text-accent mb-3">{item.size}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center justify-center font-bold"
                      >
                        -
                      </button>
                      <span className="w-8 text-center font-bold text-dark">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-secondary hover:bg-accent hover:text-white transition-colors flex items-center justify-center font-bold"
                      >
                        +
                      </button>
                    </div>
                    <span className="font-bold gradient-text">PKR {item.price * item.quantity}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-accent/20 p-4 space-y-3 bg-white/50">
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-dark">
                  <span>Subtotal ({totalItems} items)</span>
                  <span className="font-semibold">PKR {subtotal}</span>
                </div>
                <div className="flex justify-between text-dark">
                  <span>Shipping Fee</span>
                  <span className={`font-semibold ${shipping === 0 ? 'text-green' : ''}`}>
                    {shipping === 0 ? 'FREE 🎉' : `PKR ${shipping}`}
                  </span>
                </div>
                {bundleDiscount > 0 && (
                  <div className="flex justify-between text-green font-bold">
                    <span>Bundle Discount 🎉</span>
                    <span>-PKR {bundleDiscount}</span>
                  </div>
                )}
                <div className="border-t border-accent/20 pt-2"></div>
                <div className="flex justify-between items-center text-lg font-black">
                  <span className="gradient-text">Total</span>
                  <span className="gradient-text text-2xl">PKR {total}</span>
                </div>
              </div>
              
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-gradient-to-r from-green via-cyan to-green text-white py-4 rounded-xl font-bold hover:shadow-2xl hover:shadow-green/50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Checkout via WhatsApp</span>
              </button>
              
              <button
                onClick={onClearCart}
                className="w-full text-pink text-sm hover:text-dark transition-colors font-medium"
              >
                Clear Cart
              </button>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Cart
CART

# Update Hero with new doctor name
cat > src/components/Hero.jsx << 'HERO'
import React from 'react'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-accent via-purple to-pink py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-72 h-72 bg-cyan rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink rounded-full blur-3xl animate-pulse-slow"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-block bg-white/20 backdrop-blur-lg rounded-2xl px-6 py-3 mb-6">
          <p className="text-white font-bold text-sm sm:text-base">
            🏥 Trusted by Dr Fatima Abid - Skin Dermatologist
          </p>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white mb-6 tracking-tight animate-fade-in">
          ✨ Premium Medical Skincare
          <br />
          <span className="bg-white/20 px-6 py-2 rounded-2xl inline-block mt-4">
            Since 2012
          </span>
        </h2>
        <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed mb-4">
          Dermatologist-backed formulations trusted by professionals
        </p>
        <p className="text-lg text-white/80 mb-8">
          🚚 FREE Shipping on Orders Over PKR 2000 | 💼 Wholesale Available | ⏰ 24/7 Support
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => window.scrollTo({ top: 600, behavior: 'smooth' })}
            className="bg-white text-accent px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-110"
          >
            Shop Now 🛍️
          </button>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
            className="bg-green text-white px-8 py-4 rounded-full font-bold text-lg shadow-2xl hover:shadow-green/50 transition-all transform hover:scale-110 flex items-center space-x-2"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            <span>Wholesale Inquiry</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
HERO

# Update TrustSections with new doctor name
cat > src/components/TrustSections.jsx << 'TRUST'
import React from 'react'

function TrustSections() {
  return (
    <div className="bg-cream py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <section className="bg-gradient-to-br from-accent via-purple to-pink rounded-3xl p-8 sm:p-12 shadow-2xl text-white">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-4xl">
              👩‍⚕️
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-black">Dr Fatima Abid</h2>
              <p className="text-xl text-white/90">Skin Dermatologist | Since 2012</p>
            </div>
          </div>
          <p className="text-lg leading-relaxed mb-4">
            With over a decade of experience in dermatology, Dr Fatima Abid has been at the forefront of providing evidence-based skincare solutions to patients across Pakistan. Lapak represents her commitment to making professional-grade skincare accessible to everyone.
          </p>
          <p className="text-lg leading-relaxed">
            Each product in our range is carefully selected and recommended based on years of clinical experience and proven results. Trust the expertise that pharmacies and healthcare professionals rely on.
          </p>
        </section>

        <section className="bg-light rounded-xl p-8 shadow-sm border border-secondary">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-6">💼 Wholesale & Pharmacy Partnerships</h2>
          <p className="text-accentDark leading-relaxed mb-4">
            We specialize in wholesale distribution to pharmacies, clinics, and healthcare providers nationwide. Our main vision is to ensure quality dermatological products reach every corner of Pakistan through trusted pharmacy partners.
          </p>
          <div className="bg-gradient-to-r from-accent/10 to-purple/10 rounded-xl p-6 mb-4">
            <h3 className="font-bold text-lg text-dark mb-3">Benefits for Pharmacy Partners:</h3>
            <ul className="space-y-2 text-accentDark">
              <li>✅ Competitive wholesale pricing</li>
              <li>✅ Authentic dermatologist-backed products</li>
              <li>✅ Reliable nationwide supply chain</li>
              <li>✅ Professional support from Dr Abid's team</li>
              <li>✅ Flexible order quantities</li>
            </ul>
          </div>
          <p className="text-accentDark leading-relaxed">
            If you're a pharmacy owner or healthcare provider interested in stocking Lapak products, we'd love to partner with you. Contact us via WhatsApp for wholesale inquiries and pricing.
          </p>
        </section>

        <section className="bg-primary rounded-xl p-8 shadow-sm border border-secondary">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-6">🏥 Clinical Excellence</h2>
          <p className="text-accentDark leading-relaxed mb-4">
            Based in Faisalabad, Dr Abid has built a reputation for excellence in dermatological care. Lapak extends this commitment beyond the clinic, offering patients and customers access to the same quality products recommended during consultations.
          </p>
          <p className="text-accentDark leading-relaxed">
            Our formulations are chosen based on clinical efficacy, safety profiles, and real-world results. We believe in transparency, education, and empowering individuals to make informed decisions about their skin health.
          </p>
        </section>

        <section className="bg-light rounded-xl p-8 shadow-sm border border-secondary">
          <h2 className="text-2xl sm:text-3xl font-bold text-dark mb-6">🚚 Shipping Information</h2>
          <p className="text-accentDark leading-relaxed mb-4">
            Whether you're in Faisalabad, Karachi, Lahore, Islamabad, or any other city in Pakistan, we deliver premium skincare products right to your doorstep. Our logistics network ensures fast and reliable delivery across all provinces.
          </p>
          <div className="bg-gradient-to-r from-cyan/10 to-green/10 rounded-xl p-6">
            <h3 className="font-bold text-lg text-dark mb-3">🎁 Customer Perks:</h3>
            <ul className="space-y-2 text-accentDark">
              <li>🚚 FREE shipping on orders over PKR 2000</li>
              <li>💰 Flat PKR 150 shipping for orders under PKR 2000</li>
              <li>🎉 Bundle discount: Buy 3+ items, save PKR 200</li>
              <li>⏰ 24/7 customer support via WhatsApp</li>
              <li>📦 Secure packaging for product integrity</li>
              <li>✨ Authentic products guaranteed</li>
            </ul>
          </div>
        </section>

        <section className="bg-accent rounded-xl p-8 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-bold text-light mb-6">⚠️ Important Information</h2>
          <div className="text-cream leading-relaxed space-y-4 text-sm">
            <p>
              All products sold through Lapak are authentic and sourced through authorized channels. While our products are formulated with dermatological principles, individual results may vary based on skin type and condition.
            </p>
            <p>
              For personalized skincare advice or treatment of specific conditions, we recommend consulting with a qualified dermatologist. Dr Fatima Abid is available for consultations at her clinic in Faisalabad.
            </p>
            <p>
              Wholesale partners are expected to maintain product quality during storage and display. We provide guidance on proper storage conditions to ensure maximum efficacy.
            </p>
            <p>
              Discontinue use if you experience irritation or adverse reactions. Keep all products away from children. Store in cool, dry conditions away from direct sunlight.
            </p>
          </div>
        </section>

      </div>
    </div>
  )
}

export default TrustSections
TRUST

echo "✅ All changes made!"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 CHANGES SUMMARY:"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Doctor name: Dr Fatima Abid"
echo "✅ Sarnla Lotion: For dry itchy skin"
echo "✅ Versas Bar: For scabies, fungal infection"
echo "✅ Lavite Cream: For skin whitening & brightening"
echo "✅ Cariderm Cream: For Melasma, Freckles, dark spots"
echo "✅ FREE shipping on orders over PKR 2000"
echo "✅ PKR 150 shipping for orders under PKR 2000"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 PUSHING UPDATES TO GITHUB..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

git add .
git commit -m "Updated doctor name, product descriptions, and shipping policy"
git push

if [ $? -eq 0 ]; then
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "🎉 SUCCESS! UPDATES PUSHED!"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "⏳ Vercel is now rebuilding your site..."
    echo "   This takes 1-2 minutes"
    echo ""
    echo "✅ Your live site will update automatically at:"
    echo "   https://lapak-skincare.vercel.app"
    echo ""
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo "📚 HOW TO UPDATE IN FUTURE:"
    echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    echo ""
    echo "1. Make your changes to files"
    echo "2. Run these commands:"
    echo ""
    echo "   cd ~/Desktop/lapak-final-version"
    echo "   git add ."
    echo "   git commit -m 'describe your changes'"
    echo "   git push"
    echo ""
    echo "3. Wait 1-2 minutes - site updates automatically! 🚀"
    echo ""
else
    echo ""
    echo "❌ Push failed. Please check your internet connection."
    echo "   Try again: bash ~/Desktop/update-site.sh"
fi
EOF

chmod +x ~/Desktop/update-site.sh
bash ~/Desktop/update-site.sh