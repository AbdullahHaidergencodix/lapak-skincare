import React from 'react'

function TrustSections() {
  return (
    <div className="py-16 bg-gradient-to-b from-violet-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Leadership */}
        <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">👩‍⚕️</div>
            <div>
              <h2 className="text-3xl font-black">Our Leadership</h2>
              <p className="text-white/80">A Decade of Skincare Excellence</p>
            </div>
          </div>
          
          <div className="grid gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-1">DR Fatima Abid</h3>
              <p className="text-purple-200 font-medium mb-3">Managing Director • Skincare & Aesthetic Professional</p>
              <p className="text-white/80 text-sm leading-relaxed">
                With over a decade at the forefront of skincare innovation, DR Fatima Abid brings professional skincare and aesthetic expertise to every product. Her hands-on approach ensures each formulation meets the highest standards of efficacy and safety.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold mb-1">Muhammad Abid Yasin</h3>
              <p className="text-purple-200 font-medium mb-3">CEO & Founder • LA Pakistan</p>
              <p className="text-white/80 text-sm leading-relaxed">
                Founded LA Pakistan in 2012 with a vision to make professional skincare accessible to everyone. As a prominent figure in Pakistani skincare and pharmaceutical industry, he ensures all products meet clinical standards and deliver real results.
              </p>
            </div>
          </div>
        </section>

        {/* Wholesale */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
          <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3">
            💼 Wholesale & Pharmacy Partnerships
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We specialize in wholesale distribution to pharmacies, clinics, and skincare professionals nationwide. Quality products with competitive pricing for your business.
          </p>
          <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 rounded-xl p-6">
            <h3 className="font-bold text-gray-800 mb-4">Partner Benefits:</h3>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-gray-600">
              <p className="flex items-center gap-2">✅ Competitive wholesale pricing</p>
              <p className="flex items-center gap-2">✅ Professional-grade products</p>
              <p className="flex items-center gap-2">✅ Reliable nationwide supply</p>
              <p className="flex items-center gap-2">✅ Dedicated support team</p>
            </div>
          </div>
        </section>

        {/* Shipping */}
        <section className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
          <h2 className="text-2xl font-black text-gray-800 mb-6 flex items-center gap-3">
            🚚 Shipping Information
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            We deliver premium skincare products across Pakistan - from Faisalabad to Karachi, Lahore, Islamabad, and beyond.
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-6">
            <div className="grid sm:grid-cols-2 gap-4 text-sm">
              <p className="flex items-start gap-2">🚚 <span><strong>Free shipping</strong> over PKR 2,000</span></p>
              <p className="flex items-start gap-2">💰 <span><strong>PKR 150</strong> flat rate shipping</span></p>
              <p className="flex items-start gap-2">🎁 <span><strong>Bundle discount</strong> 3+ items save PKR 200</span></p>
              <p className="flex items-start gap-2">📦 <span><strong>Secure packaging</strong> guaranteed</span></p>
            </div>
          </div>
        </section>

        {/* Location */}
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
          <h2 className="text-2xl font-black mb-4 flex items-center gap-3">
            📍 Visit Us
          </h2>
          <p className="text-white/90 text-lg font-medium mb-2">2-Z-3, FSR Madina Town</p>
          <p className="text-white/90 text-lg font-medium mb-4">Faisalabad, Pakistan 38000</p>
          <p className="text-white/70 text-sm">Contact us via WhatsApp for appointments and inquiries</p>
        </section>

      </div>
    </div>
  )
}

export default TrustSections
