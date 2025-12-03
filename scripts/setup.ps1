# PowerShell setup script for VHAKACHAYI Cultural Tours

Write-Host "🏔️  Setting up VHAKACHAYI Cultural Tours..." -ForegroundColor Cyan

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
npm install

# Create .env.local from example
if (-Not (Test-Path .env.local)) {
    Write-Host "📝 Creating .env.local from .env.example..." -ForegroundColor Yellow
    Copy-Item .env.example .env.local
    Write-Host "⚠️  Please update .env.local with your API keys!" -ForegroundColor Red
} else {
    Write-Host "✓ .env.local already exists" -ForegroundColor Green
}

# Create public/images directory if it doesn't exist
if (-Not (Test-Path public/images)) {
    New-Item -ItemType Directory -Path public/images | Out-Null
}

Write-Host ""
Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:"
Write-Host "1. Update .env.local with your API keys"
Write-Host "2. Set up your Sanity CMS project"
Write-Host "3. Configure Stripe and payment APIs"
Write-Host "4. Add images to public/images/"
Write-Host "5. Run 'npm run dev' to start development server"
Write-Host ""
Write-Host "The old ways carry the deepest magic. 🧙" -ForegroundColor Magenta

