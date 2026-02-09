#!/bin/bash

cd /Users/abdullah/Desktop/lapak-final-version

echo "🔧 FIXING ALL DR ABID REFERENCES..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

python3 << 'PYTHON'
import os
import re

files_updated = 0

for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.html')):
            filepath = os.path.join(root, file)
            
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original = content
                
                # Replace "Dr Abid" when NOT already "Dr Fatima Abid"
                content = re.sub(
                    r'\bDr\.?\s+Abid(?!\s+Yasin)(?!\s*Fatima)\b',
                    'Dr Fatima Abid',
                    content,
                    flags=re.IGNORECASE
                )
                
                # Fix "skin care care" typo
                content = re.sub(
                    r'skin care care',
                    'skin care',
                    content,
                    flags=re.IGNORECASE
                )
                
                # Replace Dr Abid's team/clinic references
                content = re.sub(
                    r"Dr Abid's",
                    "Dr Fatima Abid's",
                    content
                )
                
                if content != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"✓ Updated: {filepath}")
                    files_updated += 1
                    
            except Exception as e:
                print(f"✗ Error in {filepath}: {e}")

if files_updated == 0:
    print("⚠ No changes made - checking TrustSections directly...")
else:
    print(f"\n✅ Updated {files_updated} file(s)")
    print("   'Dr Abid' → 'Dr Fatima Abid'")
    print("   Fixed 'skin care care' typo")
PYTHON

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 DEPLOY: git add . && git commit -m 'Fixed doctor references' && git push"
