#!/bin/bash
# Setup script for VHAKACHAYI Cultural Tours

echo "🏔️  Setting up VHAKACHAYI Cultural Tours..."

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create .env.local from example
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local from .env.example..."
    cp .env.example .env.local
    echo "⚠️  Please update .env.local with your API keys!"
else
    echo "✓ .env.local already exists"
fi

# Create public/images directory if it doesn't exist
mkdir -p public/images

echo ""
echo "✅ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Update .env.local with your API keys"
echo "2. Set up your Sanity CMS project"
echo "3. Configure Stripe and payment APIs"
echo "4. Add images to public/images/"
echo "5. Run 'npm run dev' to start development server"
echo ""
echo "The old ways carry the deepest magic. 🧙"

