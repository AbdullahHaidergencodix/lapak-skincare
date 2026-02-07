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
