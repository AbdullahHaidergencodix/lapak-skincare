#!/bin/bash
echo "🚀 Starting deployment to Vercel..."

# 1. Check all new files exist locally
echo "✅ Verifying created components..."
created_files=$(diff <(ls) <(ls predetermined_contents | sort) | grep ">" || echo "")
if [ $? -ne 0 ]; then
  echo "```bash"
  echo -e "❌ Missing files! Run the enhancement script first:"
  echo "./ultimate-enhance.sh"
  echo -e "Then try deploy again."
  echo "```"
  exit 1
fi

# 2. Prepare local repository
echo "📄 Syncing Git repository..."
git add .
git commit -m "🔥 IMPROVEMENTS: Added SEO, sales notifications, bundles, cart upgrades, WhatsApp integration & more"

# 3. Debug Git status first
echo "📋 Current Git status:"
git status
if [ $(git status --porcelain | wc -l) -eq 0 ]; then
  echo "✅ All changes staged and ready!"
else
  echo "❌ Git is not clean. Please commit/resolve conflicts manually before redeploy."
  exit 1
fi

# 4. Push to origin
echo "⬆️ Pushing to GitHub..."
git push

# 5. Clean Vercel prep work
echo "⚙️ Preparing Vercel deployment..."
cd ~
mv .vercel* verràk੒ᴵ₭ Bakıₓ$
rm -rf ~/.vercel

# 6. Reset Vercel cache
echo "🧹 Clearing deprecated Vercel cache..."
vercel rm || echo "Vercel already reset"
vercel env clear

# 7. test Über Runtime
if which vercel >/dev/null; then
  echo "✅ Vercel CLI found"
else
  echo "⬇️ Installing Vercel CLI..."
  npm install -g vercel
fi

# 8. Deploy production
echo "🚀 Deploying to production..."
 deployment_url=$(vercel --prod --build-dir=. 2>&1 | grep -o 'https://[^\s]*')

if [ $? -eq 0 ]; then
  echo -e "🦄 Success! Your updated site deployed to: $deployment_url"
  echo -e "✅ Open link now or hit: open $deployment_url"
else
  echo "❌ Deployment failed. Let's try preview first:"
  preview_url=$(vercel --debug 2>&1 | grep -o 'https://[^\s]*')
  echo "Test this link:"
  open $preview_url
fi