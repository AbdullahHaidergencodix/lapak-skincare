#!/bin/bash

cd /Users/abdullah/Desktop/lapak-final-version

echo "🔧 UPDATING BRANDING..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

# Change Lapak to LA Pakistan
find src -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' 's/Lapak/LA Pakistan/g' {} +

# Remove L.A Pharma mentions
find src -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' 's/L\.A Pharma //g' {} +
find src -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' 's/L\.A Pharma//g' {} +
find src -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' 's/LA Pharma //g' {} +
find src -type f \( -name "*.js" -o -name "*.jsx" \) -exec sed -i '' 's/LA Pharma//g' {} +

echo "✅ BRANDING UPDATE COMPLETE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Changes made:"
echo "  • Lapak → LA Pakistan"
echo "  • Removed L.A Pharma / LA Pharma references"
echo ""
echo "🚀 NEXT STEPS:"
echo "1. Test: npm run dev"
echo "2. Deploy: git add . && git commit -m 'Updated branding' && git push"
