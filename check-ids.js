// Quick check - run in browser console
const requiredIds = ['home', 'flash-sale', 'products', 'trending', 'bundles', 'reviews', 'faq'];
requiredIds.forEach(id => {
  const el = document.getElementById(id);
  console.log(`${id}: ${el ? '✅ Found' : '❌ Missing'}`);
});
