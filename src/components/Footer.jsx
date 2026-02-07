import React from 'react'
import { whatsappNumber, businessName, ownerName, ownerTitle, city, since, instagram, deliveryAreas, businessHours } from '../data/config'

function Footer() {
  const currentYear = new Date().getFullYear()
  
  const handleWhatsAppClick = () => {
    const message = `Hello Lapak! I have a question about your products.`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleWholesaleClick = () => {
    const message = `Hello! I'm interested in wholesale/pharmacy partnership with Lapak. Please share details about bulk pricing and supply terms.`
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  const handleInstagramClick = () => {
    window.open(`https://instagram.com/${instagram}`, '_blank')
  }

  return (
    <footer className="bg-gradient-to-br from-dark via-accentDark to-dark text-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-accent via-purple to-pink rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-2xl">L</span>
              </div>
              <div>
                <h3 className="text-2xl font-black">{businessName}</h3>
                <p className="text-sm text-light/70">Premium Skincare Since {since}</p>
              </div>
            </div>
            <p className="text-light/80 leading-relaxed mb-4">
              Dermatologist-backed skincare products trusted by professionals and customers nationwide.
            </p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center space-x-2">
                <span>👨‍⚕️</span>
                <span className="font-semibold">{ownerName}</span>
              </p>
              <p className="text-light/70 pl-6">{ownerTitle}</p>
              <p className="flex items-center space-x-2">
                <span>📍</span>
                <span>{city}, Pakistan</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Contact</h4>
            <div className="space-y-3">
              <button
                onClick={handleWhatsAppClick}
                className="w-full bg-green hover:bg-green/90 text-white px-4 py-3 rounded-xl font-medium transition-all flex items-center space-x-3 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span>Customer Support</span>
              </button>
              
              <button
                onClick={handleWholesaleClick}
                className="w-full bg-purple hover:bg-purple/90 text-white px-4 py-3 rounded-xl font-medium transition-all flex items-center space-x-3 group"
              >
                <span className="text-xl group-hover:scale-110 transition-transform">💼</span>
                <span>Wholesale Inquiry</span>
              </button>
              
              <button
                onClick={handleInstagramClick}
                className="w-full bg-gradient-to-r from-pink to-orange hover:opacity-90 text-white px-4 py-3 rounded-xl font-medium transition-all flex items-center space-x-3 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span>@{instagram}</span>
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Service Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                <span className="text-xl">🚚</span>
                <div>
                  <p className="font-semibold text-white">{deliveryAreas}</p>
                  <p className="text-light/70">Flat Rate: PKR 150</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                <span className="text-xl">⏰</span>
                <div>
                  <p className="font-semibold text-white">{businessHours}</p>
                  <p className="text-light/70">Always here to help</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                <span className="text-xl">💼</span>
                <div>
                  <p className="font-semibold text-white">Wholesale Available</p>
                  <p className="text-light/70">Pharmacy partnerships welcome</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 bg-white/5 rounded-lg p-3">
                <span className="text-xl">🎉</span>
                <div>
                  <p className="font-semibold text-white">Bundle Discounts</p>
                  <p className="text-light/70">Save PKR 200 on 3+ items</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-light/20 pt-8">
          <div className="text-center space-y-2">
            <p className="text-light/80">
              © {currentYear} <span className="font-bold">{businessName}</span> - Premium Dermatological Skincare
            </p>
            <p className="text-sm text-light/60">
              Trusted by DR {ownerName}, {ownerTitle} | Serving since {since}
            </p>
            <p className="text-xs text-light/50">
              All products are authentic and dermatologist-recommended
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
