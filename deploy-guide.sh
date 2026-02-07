cat > ~/Desktop/deploy-guide.sh << 'EOF'
#!/bin/bash

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 STEP-BY-STEP DEPLOYMENT GUIDE"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "We'll use VERCEL (100% FREE, unlimited bandwidth, perfect for React)"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 1: Install Git (if not installed)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Check if Git is installed:"
echo "  git --version"
echo ""
echo "If not installed, download from: https://git-scm.com/downloads"
echo ""
read -p "Press Enter when Git is ready..."

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 2: Configure Git (First time only)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Enter your name:"
read git_name
echo "Enter your email:"
read git_email

git config --global user.name "$git_name"
git config --global user.email "$git_email"

echo "✅ Git configured!"
echo ""
read -p "Press Enter to continue..."

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 3: Initialize Git Repository"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

cd ~/Desktop/lapak-final-version

# Create .gitignore
cat > .gitignore << 'GITIGNORE'
# Dependencies
node_modules
package-lock.json

# Production
dist
build

# Environment
.env
.env.local
.env.production

# IDE
.vscode
.idea
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
*.log
npm-debug.log*
GITIGNORE

git init
git add .
git commit -m "Initial commit - Lapak Skincare E-commerce"

echo "✅ Git repository initialized!"
echo ""
read -p "Press Enter to continue..."

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 4: Create GitHub Account & Repository"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Go to: https://github.com/signup"
echo "2. Create a FREE account (if you don't have one)"
echo "3. After login, click '+' (top right) → 'New repository'"
echo "4. Repository name: lapak-skincare"
echo "5. Make it PUBLIC"
echo "6. DON'T initialize with README"
echo "7. Click 'Create repository'"
echo ""
echo "8. Copy the repository URL (looks like: https://github.com/YOUR-USERNAME/lapak-skincare.git)"
echo ""
read -p "Paste your GitHub repository URL here: " repo_url

git remote add origin "$repo_url"
git branch -M main
git push -u origin main

echo ""
echo "✅ Code pushed to GitHub!"
echo ""
read -p "Press Enter to continue..."

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "STEP 5: Deploy to Vercel (The Easy Part!)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. Go to: https://vercel.com/signup"
echo "2. Click 'Continue with GitHub'"
echo "3. Authorize Vercel to access your GitHub"
echo "4. On dashboard, click 'Add New...' → 'Project'"
echo "5. Find 'lapak-skincare' and click 'Import'"
echo "6. Vercel will auto-detect it's a Vite project"
echo "7. Click 'Deploy' (don't change any settings)"
echo ""
echo "⏳ Wait 1-2 minutes for deployment..."
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎉 YOUR SITE WILL BE LIVE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Your site URL will be something like:"
echo "  https://lapak-skincare.vercel.app"
echo ""
echo "✅ FREE FEATURES YOU GET:"
echo "   • Unlimited bandwidth"
echo "   • Free SSL certificate (HTTPS)"
echo "   • Auto-deploy on every git push"
echo "   • Global CDN (super fast)"
echo "   • Custom domain support (free)"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "📝 UPDATING YOUR SITE (After first deploy):"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Whenever you make changes:"
echo ""
echo "  cd ~/Desktop/lapak-final-version"
echo "  git add ."
echo "  git commit -m 'Updated products'"  # or any message"
echo "  git push"
echo ""
echo "Vercel will automatically rebuild and deploy! ⚡"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🌐 BONUS: Add Custom Domain (Optional)"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "1. In Vercel dashboard, go to your project"
echo "2. Click 'Settings' → 'Domains'"
echo "3. Add your domain (like: lapak.pk)"
echo "4. Follow the DNS instructions provided"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🎊 CONGRATULATIONS! YOU'RE LIVE!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "Share your site with the world! 🌍"
echo ""
EOF

chmod +x ~/Desktop/deploy-guide.sh
bash ~/Desktop/deploy-guide.sh