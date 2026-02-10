sed -i '' 's/<BundlesSection bundles={bundles} products={products} onAddBundle={addBundle} \/>/<BundlesSection bundles={bundles} products={products} onAddBundle={addBundle} onQuickView={setQuickViewProduct} \/>/g' src/App.jsx

echo "✅ Fixed! Now deploying..."

git add -A && git commit -m "fix: pass onQuickView prop to BundlesSection" && git push origin main && npx vercel --prod --yes