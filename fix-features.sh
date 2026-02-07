cat > ~/Desktop/fix-colors.sh << 'EOF'
#!/bin/bash

cd ~/Desktop/lapak-final-version

cat > src/index.css << 'CSS'
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-gradient-to-br from-primary via-secondary to-secondary text-dark antialiased;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .gradient-text {
    @apply bg-gradient-to-r from-accent via-purple to-pink bg-clip-text text-transparent;
  }
  
  .glass {
    @apply bg-white/80 backdrop-blur-lg;
  }
}
CSS

echo "✅ Color fixed!"
EOF

chmod +x ~/Desktop/fix-colors.sh
~/Desktop/fix-colors.sh