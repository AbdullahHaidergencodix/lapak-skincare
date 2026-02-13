# 1. Replace Sarnla Lotion with Vits-E Bar in Daily Glow-Up bundle (change product id 1 to 8)
sed -i '' 's/Daily Glow-Up Routine.*productIds: \[1,/Daily Glow-Up Routine", productIds: [8,/g' src/data/bundles.js

# Alternative approach - just change the product ID in that bundle
sed -i '' '/Daily Glow/,/\]/s/\[1,/[8,/' src/data/bundles.js

# 2. Update FAQ answer - keep only till Dr. Fatima Abid
sed -i '' 's/under supervision of DR Fatima Abid and DR Muhammad Abid Yasin Ghumman/under supervision of Dr. Fatima Abid/g' src/components/FAQSection.jsx

# 3. Update Aquaphil Plus Hair Care Oil description
sed -i '' 's/Intensive care oil for extremely dry and sensitive skin/Intensive care oil for dry and itchy scalp/g' src/data/products.js

echo "✅ All 3 changes done! Verifying..."
echo ""
echo "=== Bundle check ==="
grep -A2 "Daily Glow" src/data/bundles.js
echo ""
echo "=== FAQ check ==="
grep -i "authentic" src/components/FAQSection.jsx
echo ""
echo "=== Aquaphil Oil check ==="
grep -A2 "Aquaphil Plus Hair" src/data/products.js