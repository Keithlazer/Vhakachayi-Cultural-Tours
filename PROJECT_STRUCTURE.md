# VHAKACHAYI Cultural Tours - Project Structure

## Complete File Structure

```
Vhakachayi-Cultural-Tours/
├── app/                          # Next.js 14 App Router
│   ├── api/                      # API routes
│   │   ├── booking/
│   │   │   └── route.ts         # Booking submission endpoint
│   │   ├── contact/
│   │   │   └── route.ts         # Contact form endpoint
│   │   └── payment/
│   │       └── create-intent/
│   │           └── route.ts     # Payment intent creation
│   ├── about/
│   │   └── page.tsx             # About Us page
│   ├── blog/
│   │   ├── [id]/
│   │   │   └── page.tsx         # Individual blog post
│   │   └── page.tsx             # Blog listing
│   ├── booking/
│   │   └── page.tsx             # Multi-step booking system
│   ├── community-impact/
│   │   └── page.tsx             # Impact tracking page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   ├── cultural-protocols/
│   │   └── page.tsx             # Cultural guidelines
│   ├── experiences/
│   │   ├── [id]/
│   │   │   └── page.tsx         # Experience detail page
│   │   └── page.tsx             # Experience listing
│   ├── itineraries/
│   │   ├── [id]/
│   │   │   └── page.tsx         # Itinerary detail page
│   │   └── page.tsx             # Itinerary listing
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   ├── not-found.tsx             # 404 page
│   └── page.tsx                  # Home page
│
├── components/                   # React components
│   ├── CTASection.tsx           # Call-to-action section
│   ├── CommunityImpactTracker.tsx # Impact metrics
│   ├── CulturalJourney.tsx      # Cultural journey section
│   ├── CulturalProtocolQuiz.tsx # Mandatory protocol quiz
│   ├── ExperienceGrid.tsx       # Experience grid
│   ├── Footer.tsx               # Site footer
│   ├── Hero.tsx                 # Hero section
│   ├── InteractiveMap.tsx        # Map component
│   ├── LanguageProvider.tsx     # Language context
│   ├── LanguageSelector.tsx     # Language switcher
│   ├── Navigation.tsx            # Site navigation
│   ├── PackingListGenerator.tsx # Packing checklist
│   └── Testimonials.tsx          # Testimonials section
│
├── lib/                          # Utility libraries
│   ├── constants.ts              # App constants
│   ├── currency-utils.ts         # Currency conversion
│   ├── date-utils.ts             # Date utilities
│   ├── sanity.ts                 # Sanity CMS client
│   └── utils.ts                  # General utilities
│
├── sanity/                       # Sanity CMS schemas
│   └── schema/
│       ├── elder.ts              # Elder/guide schema
│       ├── experience.ts         # Experience schema
│       └── index.ts              # Schema exports
│
├── types/                         # TypeScript types
│   └── index.ts                  # Type definitions
│
├── public/                        # Static assets
│   └── images/                   # Image assets
│
├── scripts/                       # Setup scripts
│   ├── setup.sh                  # Bash setup script
│   └── setup.ps1                 # PowerShell setup script
│
├── .vscode/                       # VS Code settings
│   ├── extensions.json           # Recommended extensions
│   └── settings.json             # Editor settings
│
├── .env.example                  # Environment variables template
├── .eslintrc.json                # ESLint configuration
├── .gitignore                    # Git ignore rules
├── CONTRIBUTING.md               # Contribution guidelines
├── LICENSE                       # License file
├── middleware.ts                 # Next.js middleware
├── next-env.d.ts                 # Next.js TypeScript definitions
├── next.config.js                # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.js             # PostCSS configuration
├── PROJECT_STRUCTURE.md          # This file
├── README.md                     # Project documentation
├── tailwind.config.ts            # Tailwind CSS configuration
└── tsconfig.json                 # TypeScript configuration
```

## Key Features by Directory

### `/app` - Pages & Routes
- **Home**: Hero, experience grid, testimonials
- **Experiences**: Filterable listings with detail pages
- **Itineraries**: Signature multi-day journeys
- **Booking**: 4-step process with protocol quiz
- **Blog**: Stories and cultural content
- **About**: Founder story, team, values
- **Contact**: Form with WhatsApp integration
- **Cultural Protocols**: Respect guidelines
- **Community Impact**: Transparent benefit tracking
- **API Routes**: Contact, booking, payment endpoints

### `/components` - Reusable Components
- Navigation with mega-menu
- Language selector (EN/SN/ND)
- Hero with cultural dichotomy
- Experience grid with filtering
- Cultural protocol quiz
- Testimonials (diaspora/international/local)
- Impact tracker
- Interactive map
- Packing list generator

### `/lib` - Utilities
- Sanity CMS client
- Currency conversion
- Date utilities (cultural calendar)
- Constants (languages, currencies, etc.)

### `/sanity` - CMS Schemas
- Experience content type
- Elder/guide profiles
- (Extendable for blog, itinerary, etc.)

## Setup Instructions

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your API keys
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## Next Steps

1. ✅ Project structure complete
2. ⏳ Set up Sanity CMS project
3. ⏳ Configure Stripe payment API
4. ⏳ Add EcoCash/OneMoney integration
5. ⏳ Add images to `/public/images/`
6. ⏳ Review translations with native speakers
7. ⏳ Deploy to Vercel

## Important Notes

- **Cultural Sensitivity Override**: All decisions honor tradition first
- **Elder Review Required**: Content must be reviewed by advisory board
- **Multilingual**: Full support for English, Shona, Ndebele
- **Accessibility**: Screen reader compatible, keyboard navigation

---

**Brand Mantra**: *"The old ways carry the deepest magic."*

