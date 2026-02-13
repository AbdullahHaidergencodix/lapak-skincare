# Update footer text
sed -i '' 's/DR Fatima Abid/Dr. Fatima Abid/g' src/components/Footer.jsx
sed -i '' 's/Skincare & Aesthetic Professional/Director Medical Affairs/g' src/components/Footer.jsx
sed -i '' 's/Muhammad Abid Yasin/Muhammad Abid Yasin Ghumman/g' src/components/Footer.jsx
sed -i '' 's/CEO\/Pharmaceutical/CEO/g' src/components/Footer.jsx

echo "✅ Done! Verifying..."
grep -n "Fatima\|Muhammad\|CEO\|Director" src/components/Footer.jsx