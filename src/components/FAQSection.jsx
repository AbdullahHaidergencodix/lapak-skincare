import React, { useState } from 'react'

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { q: "What payment methods do you accept?", a: "We accept Cash on Delivery (COD) across Pakistan. Payment via bank transfer and JazzCash/Easypaisa also available." },
    { q: "How long does shipping take?", a: "We ship within 24-48 hours. Delivery takes 2-4 business days for major cities, 4-7 days for other areas." },
    { q: "Do you offer free shipping?", a: "Yes! Free shipping on all orders above PKR 2,000. Orders below this have a flat shipping rate." },
    { q: "Are your products authentic?", a: "100% authentic. All products are from our own manufacturing under supervision of Dr. Fatima Abid." },
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
