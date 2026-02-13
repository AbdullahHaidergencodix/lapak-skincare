const products = [
  { 
    id: 1, 
    name: "Sarnla Lotion", 
    price: 399, 
    originalPrice: 549, 
    size: "60 ml", 
    category: "Lotion", 
    image: "/content/images/sarnla-lotion.webp", 
    description: "For dry itchy skin. Skin Care and Aesthetic Professional-backed moisturizing lotion for daily relief.", 
    badge: "Popular",
    stock: 9999,
    rating: 4.5,
    reviewCount: 48,
    reviews: [
      { name: "Sara Khan", rating: 5, comment: "Amazing for my dry skin! Noticed results within a week. Highly recommend!", verified: true, date: "2 weeks ago" },
      { name: "Ahmed Raza", rating: 4, comment: "Good product, absorbs quickly without leaving residue.", verified: true, date: "1 month ago" },
      { name: "Fatima Noor", rating: 5, comment: "Best lotion I've used for my sensitive skin.", verified: true, date: "1 month ago" }
    ]
  },
  { 
    id: 2, 
    name: "Versas Bar", 
    price: 280, 
    originalPrice: 430, 
    size: "75 gm", 
    category: "Cleansing Bar", 
    image: "/content/images/versas-bar.webp", 
    description: "For scabies, fungal infection. Medicated cleansing bar for skin conditions.",
    stock: 9999,
    rating: 4.2,
    reviewCount: 23,
    reviews: [
      { name: "Fatima Malik", rating: 4, comment: "Really helped with my skin condition. Doctor recommended.", verified: true, date: "3 weeks ago" },
      { name: "Usman Ali", rating: 5, comment: "Effective and gentle on skin.", verified: true, date: "1 month ago" }
    ]
  },
  { 
    id: 3, 
    name: "Acnela Bar", 
    price: 280, 
    originalPrice: 430, 
    size: "75 gm", 
    category: "Acne Care", 
    image: "/content/images/acnela-bar.webp", 
    description: "Medicated cleansing bar formulated for acne-prone skin.", 
    badge: "Best Seller",
    stock: 9999,
    rating: 4.8,
    reviewCount: 156,
    reviews: [
      { name: "Zainab Hassan", rating: 5, comment: "Best acne bar I've ever used! My skin cleared up in 2 weeks.", verified: true, date: "1 week ago" },
      { name: "Ali Shahzad", rating: 5, comment: "Highly recommend for acne-prone skin. Life changing!", verified: true, date: "2 weeks ago" },
      { name: "Hira Nawaz", rating: 4, comment: "Good results, gentle on skin. Will buy again.", verified: true, date: "3 weeks ago" },
      { name: "Bilal Ahmed", rating: 5, comment: "Finally something that works! Thank you LA Pakistan.", verified: true, date: "1 month ago" }
    ]
  },
  { 
    id: 4, 
    name: "Lavite Cream", 
    price: 780, 
    originalPrice: 999, 
    size: "20 gm", 
    category: "Moisturizer", 
    image: "/content/images/lavite-cream.webp", 
    description: "For skin whitening & brightening. Advanced formula for radiant complexion.", 
    badge: "Premium",
    stock: 9999,
    rating: 4.6,
    reviewCount: 89,
    reviews: [
      { name: "Ayesha Tariq", rating: 5, comment: "Noticeable brightening effect after just 1 week. Love it!", verified: true, date: "5 days ago" },
      { name: "Maria Bibi", rating: 4, comment: "Good cream, nice texture and smell.", verified: true, date: "2 weeks ago" }
    ]
  },
  { 
    id: 5, 
    name: "Aquaphil Gel", 
    price: 399, 
    originalPrice: 549, 
    size: "100 gm", 
    category: "Hydration", 
    image: "/content/images/aquaphil-gel.webp", 
    description: "Lightweight gel moisturizer for long-lasting hydration.", 
    badge: "Best Seller",
    stock: 9999,
    rating: 4.7,
    reviewCount: 112,
    reviews: [
      { name: "Maryam Aslam", rating: 5, comment: "Perfect for summer! Non-greasy and super hydrating.", verified: true, date: "1 week ago" },
      { name: "Sana Javed", rating: 5, comment: "My holy grail moisturizer. Please restock soon!", verified: true, date: "3 weeks ago" }
    ]
  },
  { 
    id: 6, 
    name: "Aquaphil Bar", 
    price: 280, 
    originalPrice: 430, 
    size: "75 gm", 
    category: "Cleansing Bar", 
    image: "/content/images/aquaphil-bar.webp", 
    description: "Soap-free cleansing bar for dry and sensitive skin.", 
    badge: "Popular",
    stock: 9999,
    rating: 4.4,
    reviewCount: 67,
    reviews: [
      { name: "Nadia Hussain", rating: 5, comment: "So gentle on my sensitive skin!", verified: true, date: "2 weeks ago" },
      { name: "Kamran Shah", rating: 4, comment: "Good quality, lasts long.", verified: true, date: "1 month ago" }
    ]
  },
  { 
    id: 7, 
    name: "Aquaphil Lotion", 
    price: 399, 
    originalPrice: 549, 
    size: "60 ml", 
    category: "Lotion", 
    image: "/content/images/aquaphil-lotion.webp", 
    description: "Daily-use lotion providing deep moisturization.", 
    badge: "Best Seller",
    stock: 9999,
    rating: 4.5,
    reviewCount: 94,
    reviews: [
      { name: "Rabia Iqbal", rating: 5, comment: "Perfect daily moisturizer. Not heavy at all.", verified: true, date: "1 week ago" }
    ]
  },
  { 
    id: 8, 
    name: "Vits-E Bar", 
    price: 290, 
    originalPrice: 440, 
    size: "75 gm", 
    category: "Vitamin Care", 
    image: "/content/images/vits-e-bar.webp", 
    description: "Vitamin-E enriched cleansing bar for skin nourishment.",
    stock: 9999,
    rating: 4.3,
    reviewCount: 38,
    reviews: [
      { name: "Asma Khalid", rating: 4, comment: "Good vitamin E soap. Skin feels nourished.", verified: true, date: "3 weeks ago" }
    ]
  },
  { 
    id: 9, 
    name: "Laven Shampoo", 
    price: 399, 
    originalPrice: 549, 
    size: "100 ml", 
    category: "Hair Care", 
    image: "/content/images/laven-shampoo.webp", 
    description: "Mild shampoo formulated for sensitive scalp and daily use.",
    stock: 9999,
    rating: 4.1,
    reviewCount: 29,
    reviews: [
      { name: "Farhan Malik", rating: 4, comment: "Good for sensitive scalp. No irritation.", verified: true, date: "2 weeks ago" }
    ]
  },
  { 
    id: 10, 
    name: "Sunla Sunblock Cream", 
    price: 650, 
    originalPrice: 850, 
    size: "20 gm", 
    category: "Sun Protection", 
    image: "/content/images/sunla-sunblock.webp", 
    description: "Broad-spectrum sunblock for daily UV protection.", 
    badge: "New",
    stock: 9999,
    rating: 4.6,
    reviewCount: 51,
    reviews: [
      { name: "Saba Qamar", rating: 5, comment: "No white cast! Perfect under makeup.", verified: true, date: "4 days ago" },
      { name: "Imran Khan", rating: 4, comment: "Good sun protection, lightweight formula.", verified: true, date: "1 week ago" }
    ]
  },
  { 
    id: 11, 
    name: "Acnela Cream", 
    price: 460, 
    originalPrice: 610, 
    size: "20 gm", 
    category: "Acne Treatment", 
    image: "/content/images/acnela-cream.webp", 
    description: "Targeted acne treatment cream by LA Pakistan for effective results.", 
    badge: "Popular",
    stock: 9999,
    rating: 4.7,
    reviewCount: 103,
    reviews: [
      { name: "Huma Nawaz", rating: 5, comment: "Cleared my acne in 3 weeks! Amazing product.", verified: true, date: "1 week ago" },
      { name: "Danish Ali", rating: 5, comment: "Recommended by LA Pakistan experts and it works!", verified: true, date: "2 weeks ago" }
    ]
  },
  { 
    id: 12, 
    name: "Aquaphil Plus Hair Care Oil", 
    price: 950, 
    originalPrice: 1200, 
    size: "100 ml", 
    category: "Hair Oil", 
    image: "/content/images/aquaphil-oil.webp", 
    description: "Intensive care oil for dry and itchy scalp.", 
    badge: "Premium",
    stock: 9999,
    rating: 4.8,
    reviewCount: 45,
    reviews: [
      { name: "Kiran Fatima", rating: 5, comment: "Best body oil ever! My dry skin is finally happy.", verified: true, date: "1 week ago" }
    ]
  },
  { 
    id: 13, 
    name: "Acnela Face Wash", 
    price: 750, 
    originalPrice: 950, 
    size: "50 ml", 
    category: "Face Wash", 
    image: "/content/images/acnela-facewash.webp", 
    description: "Gentle foaming face wash for acne-prone skin.", 
    badge: "Best Seller",
    stock: 9999,
    rating: 4.6,
    reviewCount: 128,
    reviews: [
      { name: "Amna Riaz", rating: 5, comment: "Perfect face wash for oily acne prone skin!", verified: true, date: "3 days ago" },
      { name: "Waqar Ahmed", rating: 4, comment: "Good product, controls oil well.", verified: true, date: "1 week ago" }
    ]
  },
  { 
    id: 14, 
    name: "Cariderm Cream", 
    price: 699, 
    originalPrice: 899, 
    size: "20 gm", 
    category: "Skin Care", 
    image: "/content/images/cariderm-cream.webp", 
    description: "For Melasma, Freckles, dark spots. Specialized brightening treatment.", 
    badge: "Premium",
    stock: 9999,
    rating: 4.5,
    reviewCount: 76,
    reviews: [
      { name: "Bushra Ansari", rating: 5, comment: "My dark spots are fading! So happy with results.", verified: true, date: "2 weeks ago" }
    ]
  },
  { 
    id: 15, 
    name: "Aquaphil Plus Ointment", 
    price: 450, 
    originalPrice: 600, 
    size: "100 gm", 
    category: "Moisturizer", 
    image: "/content/images/aquaphil-plus.webp", 
    description: "Advanced moisturizing formula for long-term skin comfort.", 
    badge: "Popular",
    stock: 9999,
    rating: 4.4,
    reviewCount: 82,
    reviews: [
      { name: "Saima Noor", rating: 4, comment: "Great moisturizer for daily use.", verified: true, date: "1 week ago" }
    ]
  },
  { 
    id: 16, 
    name: "Glybeta Plus", 
    price: 690, 
    originalPrice: 900, 
    size: "30 Tablets", 
    category: "Supplement", 
    image: "/content/images/glybeta-plus.webp", 
    description: "Nutritional supplement for healthy skin, nails, hair and eyes.", 
    badge: "New",
    stock: 9999,
    rating: 4.7,
    reviewCount: 32,
    reviews: [
      { name: "Nadia Hussain", rating: 5, comment: "Great supplement! My hair and nails are much stronger now.", verified: true, date: "1 week ago" },
      { name: "Kamran Sheikh", rating: 4, comment: "Good results after 2 weeks of use.", verified: true, date: "2 weeks ago" }
    ]
  },
];

export default products;
