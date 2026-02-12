# 1. Testimonials.jsx - line 30
sed -i '' 's/I trust their dermatologist-backed products/I trust their science-backed products from Obliege Pharmaceutical/g' src/components/Testimonials.jsx

# 2. PromoBanner.jsx - line 9
sed -i '' 's/Dermatologist Recommended by DR Fatima Abid/Recommended by Dr. Fatima Abid - Director Medical Affairs, Obliege Group/g' src/components/PromoBanner.jsx

# 3. Footer.jsx - line 18
sed -i '' 's/Skin Dermatologist/CEO, Obliege Pharmaceutical/g' src/components/Footer.jsx

# 4. FAQ.jsx - line 25
sed -i '' 's/consulting with a dermatologist/consulting with a skincare professional/g' src/components/FAQ.jsx

# 5 & 6. TrustSections.jsx - lines 29 and 31
sed -i '' 's/CEO \& Founder • Skin Dermatologist/CEO \& Founder • Obliege Pharmaceutical/g' src/components/TrustSections.jsx
sed -i '' 's/As a Skin Dermatologist, he ensures/As a prominent figure in Pakistani skincare and pharmaceutical industry, he ensures/g' src/components/TrustSections.jsx

# 7. products.js - line 194 (review comment)
sed -i '' 's/Dermatologist recommended and it works!/Recommended by LA Pakistan experts and it works!/g' src/data/products.js

# 8. products.js - line 238 (category)
sed -i '' 's/Dermatology Care/Skin Care/g' src/data/products.js

# 9. config.js - line 10
sed -i '' 's/Skin Dermatologist/CEO, Obliege Pharmaceutical/g' src/data/config.js

echo "✅ All dermatologist references updated!"

# Verify changes
grep -rni "dermat" src/ | grep -v ".backup"