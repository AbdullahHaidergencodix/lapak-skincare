#!/bin/bash

cd /Users/abdullah/Desktop/lapak-final-version

echo "🔄 UPDATING DR FATIMA ABID'S TITLE..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

python3 << 'PYTHON'
import os
import re

files_updated = 0

# Search through all React/JS files
for root, dirs, files in os.walk('src'):
    for file in files:
        if file.endswith(('.js', '.jsx', '.ts', '.tsx', '.html')):
            filepath = os.path.join(root, file)
            
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original = content
                
                # Replace all variations of dermatologist title
                content = re.sub(
                    r'Skin\s+Dermatologist',
                    'Skin Care and Aesthetic Professional',
                    content,
                    flags=re.IGNORECASE
                )
                
                content = re.sub(
                    r'([Dd]ermatologist)(\s*\||\s*-|\s*,|\s*</)',
                    r'Skin Care and Aesthetic Professional\2',
                    content
                )
                
                # Replace in dermatology context
                content = re.sub(
                    r'(Dr\.?\s*Fatima\s+Abid[^.]*?)dermatologist',
                    r'\1Skin Care and Aesthetic Professional',
                    content,
                    flags=re.IGNORECASE
                )
                
                content = re.sub(
                    r'experience in dermatology',
                    'experience in skin care and aesthetics',
                    content,
                    flags=re.IGNORECASE
                )
                
                content = re.sub(
                    r'dermatological (care|products|solutions)',
                    r'skin care \1',
                    content,
                    flags=re.IGNORECASE
                )
                
                # Update phrases about dermatology expertise
                content = re.sub(
                    r'qualified dermatologist',
                    'qualified skin care and aesthetic professional',
                    content,
                    flags=re.IGNORECASE
                )
                
                if content != original:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    print(f"✓ Updated: {filepath}")
                    files_updated += 1
                    
            except Exception as e:
                pass

print(f"\n✅ Updated {files_updated} file(s)")
print("   All 'Dermatologist' → 'Skin Care and Aesthetic Professional'")
PYTHON

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 DEPLOY: git add . && git commit -m 'Updated professional title' && git push"
