# Update all .jpg to .webp in the entire src folder
sed -i '' 's/\.jpg/.webp/g' src/data/products.js
sed -i '' 's/\.jpg/.webp/g' src/components/*.jsx
sed -i '' 's/\.jpg/.webp/g' src/data/*.js

echo "✅ Done! Verifying..."
echo "Remaining .jpg references:"
grep -rn "\.jpg" src/
echo "---"
echo "Total .webp references:"
grep -c "\.webp" src/data/products.js