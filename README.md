# VHAKACHAYI Cultural Tours Website

**Where Ancient Stories Meet Modern Adventure**

A tourism website targeting locals, diaspora, and international travellers with a focus on authentic Zimbabwean cultural immersion combined with high-quality adventure experiences.

## 🎯 Project Overview

VHAKACHAYI Cultural Tours is built to honor tradition while creating transformative experiences. The website features:

- **Multilingual Support**: English, Shona (ChiShona), and Ndebele (isiNdebele)
- **Cultural Protocol Integration**: Mandatory quiz and guidelines for respectful engagement
- **Community-First Approach**: Transparent benefit distribution and impact tracking
- **Authentic Experiences**: Elder-guided journeys to sacred sites and cultural immersion

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn
- Sanity CMS account (for content management)
- Stripe account (for international payments)
- EcoCash/OneMoney API access (for local payments)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Vhakachayi-Cultural-Tours
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Fill in your API keys and configuration values.

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router pages
│   ├── about/             # About Us page
│   ├── blog/              # Stories/Blog pages
│   ├── booking/           # Booking system
│   ├── community-impact/  # Impact tracking
│   ├── contact/           # Contact page
│   ├── cultural-protocols/# Cultural guidelines
│   ├── experiences/       # Experience listings
│   └── itineraries/       # Signature itineraries
├── components/            # React components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── LanguageProvider.tsx
│   └── ...
├── lib/                   # Utility functions
│   ├── sanity.ts          # Sanity CMS client
│   └── utils.ts           # Helper functions
└── public/                # Static assets
```

## 🌍 Multilingual Support

The website supports three languages:
- **English** (en) - Primary
- **Shona** (sn) - ChiShona
- **Ndebele** (nd) - isiNdebele

Language switching is available via the navigation header. Translations are managed through the `LanguageProvider` component.

## 🎨 Design System

### Color Palette

- **Ochre**: Primary brand color (`#f18c2e`)
- **Terracotta**: Secondary accent (`#e8654f`)
- **Deep Green**: Nature/adventure (`#369663`)
- **Earth**: Neutral base (`#be8554`)

### Typography

- Primary: Inter (system font fallback)
- Display: Custom font for headings

## 🔐 Cultural Sensitivity

**CRITICAL**: This project operates under a **Cultural Sensitivity Override**:

> Any design, development, or visitor decision that conflicts with cultural protocols (determined by elder advisory board) takes precedence over technical or business requirements. The website must first honor tradition, then optimize for conversion.

### Key Protocols

1. **Sacred Sites**: Proper permits, elder guidance, respectful behavior
2. **Photography**: Explicit permission required, respect "no"
3. **Elder Interaction**: Proper greetings, listen more than speak
4. **Community Respect**: Act as a guest, support local economies
5. **Cultural Learning**: Open mind, respect oral traditions

See `/cultural-protocols` for complete guidelines.

## 💳 Payment Integration

### Supported Methods

1. **Stripe** (International)
   - Credit/debit cards
   - USD primary currency

2. **EcoCash/OneMoney** (Local/Diaspora)
   - Mobile money payments
   - ZWL currency support

### Implementation

Payment integration is structured but requires API keys. See `app/booking/page.tsx` for the booking flow.

## 📊 Content Management

### Sanity CMS

The project is configured for Sanity CMS integration:

1. Set up a Sanity project
2. Configure schemas for:
   - Experiences
   - Blog posts
   - Elder profiles
   - Itineraries
   - Cultural content

3. Update `lib/sanity.ts` with your project credentials

### Content Types

- **Experiences**: Cultural immersion, mountain climbing, nature, food
- **Itineraries**: Signature multi-day journeys
- **Blog Posts**: Stories, elder interviews, cultural deep-dives
- **Elders**: Guide profiles with lineages and expertise

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

### Environment Variables Required

- Sanity CMS credentials
- Stripe keys
- Payment API keys
- Cloudinary (for images)
- Analytics domain

## 📈 Success Metrics

Primary: **50 confirmed bookings within 3 months of launch**

Additional metrics:
- Community impact: Elders employed, $ distributed
- Cultural respect: Protocol adherence rate
- Diaspora engagement: % bookings from diaspora
- Return rate: % visitors booking multiple experiences

## 🤝 Contributing

### Cultural Review Process

All changes must be reviewed by:
1. Technical review (code quality)
2. **Cultural review (elder advisory board)** - REQUIRED
3. Community feedback

### Development Guidelines

1. Honor cultural protocols in all decisions
2. Test multilingual functionality
3. Ensure accessibility (screen readers, etc.)
4. Verify cultural sensitivity of content
5. Test payment flows thoroughly

## 📝 License

See LICENSE file for details.

## 🙏 Acknowledgments

- Elder Advisory Board for cultural guidance
- Partner communities for authentic experiences
- All contributors who honor tradition while building

## 📞 Support

- Email: info@vhakachayi.com
- WhatsApp: +263 77 123 4567
- Website: [vhakachayi.com](https://vhakachayi.com)

---

**Brand Mantra**: *"The old ways carry the deepest magic."*

This website is built with deep respect for Zimbabwean culture, traditions, and communities. Every feature prioritizes cultural honor over conversion optimization.

