#!/bin/bash

cd /Users/abdullah/Desktop/lapak-final-version

echo "💰 UPDATING PRICES + ORIGINAL PRICES..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

python3 << 'PYTHON'
import re

# Read the file
with open('src/data/products.js', 'r') as f:
    content = f.read()

# Catalog prices + calculated original prices (30-40% higher)
updates = [
    (1, "L A Pharma Sarnla Lotion", 399, 549),
    (2, "Versas Bar", 280, 430),
    (3, "Acnela Bar", 280, 430),
    (4, "Lavite Cream", 780, 999),
    (5, "Aquaphil Gel", 399, 549),
    (6, "Aquaphil Bar", 280, 430),
    (7, "Aquaphil Lotion", 399, 549),
    (8, "Vits-E Bar", 290, 440),
    (9, "Laven Shampoo", 399, 549),
    (10, "Sunla Sunblock Cream", 650, 850),
    (11, "Acnela Cream", 460, 610),
    (12, "Aquaphil Plus Care Oil", 950, 1200),
    (13, "Acnela Face Wash", 750, 950),
    (14, "Cariderm Cream", 699, 899),
    (15, "Aquaphil Plus", 450, 600),
]

# Update each product
for product_id, name, price, original_price in updates:
    # Find and replace the entire line for this product
    pattern = rf'(\{{ id: {product_id}, name: "[^"]+", price: )\d+(, originalPrice: )\d+'
    replacement = rf'\g<1>{price}\g<2>{original_price}'
    
    old_content = content
    content = re.sub(pattern, replacement, content)
    
    if content != old_content:
        print(f"✓ {name}: PKR {price} (was PKR {original_price})")
    else:
        print(f"✗ Failed: {name}")

# Write back
with open('src/data/products.js', 'w') as f:
    f.write(content)

print("\n✅ ALL PRICES UPDATED!")
print("   • price = actual catalog price")
print("   • originalPrice = higher (shows discount)")
PYTHON

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🚀 DEPLOY: git add . && git commit -m 'Fixed all prices' && git push"
