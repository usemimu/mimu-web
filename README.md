# mìmú Web

A Vue.js application for the mìmú advertising network platform. Built with Vue 3, Vue Router, and Tailwind CSS.

## Features

-  **Custom Design System**: Uses the mìmú color palette (Clay, Moss, Gold, Neutral)
-  **Dark/Light Mode**: Fully functional theme switcher with localStorage persistence
-  **Component-Based**: Reusable components for consistency across the app
-  **Fast Development**: Powered by Vite for instant HMR
-  **Responsive**: Mobile-first design with Tailwind CSS
-  **Accessible**: Semantic HTML and proper ARIA attributes
-  **Typography**: Cormorant (display), Plus Jakarta Sans (body), JetBrains Mono (mono)
-  **Icons**: Phosphor Icons library

## Project Structure

```
mimu-web/
├── src/
│   ├── components/          # Reusable components
│   │   ├── Logo.vue         # Bouncing ball logo from M Logo Explorations
│   │   ├── Navigation.vue   # Main navigation bar
│   │   ├── Footer.vue       # Site footer
│   │   ├── BaseButton.vue   # Button component with variants
│   │   ├── BaseCard.vue     # Card component with variants
│   │   ├── BaseTag.vue      # Tag/badge component
│   │   └── LiveDot.vue      # Animated live indicator
│   ├── views/               # Page components
│   │   ├── HomePage.vue
│   │   ├── AdvertisersPage.vue
│   │   ├── HostsPage.vue
│   │   ├── PricingPage.vue
│   │   ├── NetworkPage.vue
│   │   └── AboutPage.vue
│   ├── composables/         # Vue composables
│   │   └── useTheme.js      # Theme management
│   ├── router/              # Vue Router configuration
│   │   └── index.js
│   ├── App.vue              # Root component
│   ├── main.js              # Application entry point
│   └── style.css            # Global styles and Tailwind imports
├── assets/                  # Static assets
│   └── colors_and_type.css  # Design system tokens
├── uploads/                 # Upload directory
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── postcss.config.js        # PostCSS configuration

```

## Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

Dependencies are already installed. If you need to reinstall:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use).

### Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview

Preview the production build:

```bash
npm run preview
```

## Component Usage

### Logo Component

The logo uses the bouncing ball design from `M Logo Explorations.html`:

```vue
<Logo :dark="isDark" :size="68" :show-wordmark="true" @click="handleClick" />
```

### Button Component

```vue
<BaseButton variant="primary" size="lg" @click="handleClick">
  Button Text
</BaseButton>
```

Variants: `primary`, `outline`, `ghost`
Sizes: `sm`, `md`, `lg`

### Card Component

```vue
<BaseCard :dark="isDark" rounded="lg" padding="md">
  Card content
</BaseCard>
```

### Tag Component

```vue
<BaseTag variant="clay" :dark="isDark">Tag Text</BaseTag>
```

Variants: `clay`, `moss`, `gold`

## Theme System

The app uses a composable for theme management:

```js
import { useTheme } from '@/composables/useTheme'

const { isDark, toggleTheme } = useTheme()
```

Theme preference is automatically saved to localStorage.

## Color Palette

- **Clay** (Primary): `#B55430` - Brand color for CTAs and highlights
- **Moss** (Secondary): `#2B7244` - Success states and positive actions
- **Gold** (Accent): `#B4881C` - Financial highlights and warnings
- **Neutral**: `#0E0D0B` to `#F7F5F2` - Text and backgrounds

## Typography

- **Display**: Cormorant - For headings and large text
- **Body**: Plus Jakarta Sans - For body text and UI elements
- **Mono**: JetBrains Mono - For code and technical data

## Routes

- `/` - Home page
- `/advertisers` - For Advertisers page
- `/hosts` - For Hosts page
- `/pricing` - Pricing page
- `/network` - Network page
- `/about` - About page

## License

See LICENSE file for details.
