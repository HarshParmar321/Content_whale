
# Content Whale - Next.js Application

A modern content writing services platform built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Next.js 14** - Latest version with App Router and improved performance
- **React 18** - Latest React version with enhanced capabilities
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **API Routes** - Built-in API endpoints for content management
- **Responsive Design** - Mobile-first approach with responsive layouts
- **Component Architecture** - Reusable UI components with proper organization

## 🎯 Project Overview

Content Whale is a comprehensive content writing services platform offering:
- Content Writing Services
- SEO Writing Solutions
- Translation Services
- Blog Writing
- Lead Generation Content
- Custom Pricing Calculator

## 📋 Prerequisites

- Node.js (v18.x or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository and navigate to the project directory

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:4028](http://localhost:4028) with your browser to see the application.

## 📁 Project Structure

```
content-whale/
├── public/                     # Static assets
│   ├── images/                # Image assets and icons
│   └── favicon.ico           # Site favicon
├── src/
│   ├── app/                  # App router components
│   │   ├── api/              # API routes
│   │   │   └── content/      # Content management API
│   │   ├── layout.tsx        # Root layout component
│   │   └── page.tsx          # Main landing page
│   ├── components/           # Reusable UI components
│   │   ├── common/           # Common components
│   │   │   └── Header.tsx    # Site header
│   │   └── ui/               # UI components
│   │       ├── Button.tsx    # Custom button component
│   │       ├── Dropdown.tsx  # Dropdown component
│   │       └── Slider.tsx    # Slider component
│   └── styles/               # Global styles
│       ├── index.css         # Main stylesheet
│       └── tailwind.css      # Tailwind configuration
├── next.config.mjs           # Next.js configuration
├── package.json              # Project dependencies and scripts
├── postcss.config.js         # PostCSS configuration
├── tailwind.config.js        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## 🎨 Key Components

### Landing Page Features
- Hero section with service overview
- Testimonials carousel
- Pricing calculator for different services
- Featured blog posts section
- Service highlights and benefits
- Call-to-action sections

### API Endpoints
- `/api/content` - Provides content data including:
  - Testimonials
  - Pricing plans for different services
  - Featured posts
  - Service configurations

### UI Components
- **Button**: Customizable button with variants and icon support
- **Dropdown**: Interactive dropdown for forms
- **Slider**: Content slider/carousel functionality
- **Header**: Navigation and branding component

## 🎨 Styling

This project uses Tailwind CSS with:
- Custom color palette matching brand guidelines
- Responsive design utilities for mobile-first development
- Custom gradients and visual effects
- Typography scale with custom fonts (Inter, Lato, Poppins)
- Component-specific styling patterns

## 📦 Available Scripts

- `npm run dev` - Start development server on port 4028
- `npm run build` - Build the application for production
- `npm run start` - Start the development server
- `npm run serve` - Start the production server
- `npm run format` - Format code with Prettier
- `npm run type-check` - Run TypeScript type checking

## 🔧 Configuration

### Port Configuration
The application runs on port 4028 by default, configured in package.json scripts.

### TypeScript Configuration
- Strict mode enabled
- Path aliases configured (`@/*` maps to `./src/*`)
- Next.js plugin integration

### Build Configuration
- Production browser source maps enabled
- Custom webpack configuration for component tagging
- TypeScript build error handling

## 🚀 Deployment

### Development Deployment
```bash
npm run build
npm run serve
```

### Production Deployment
The application is configured for deployment on Replit with:
- Optimized build process
- Static asset handling
- API route configuration

## 🔗 API Integration

The application includes a content management API that provides:
- Dynamic testimonials
- Service pricing information
- Featured content
- Flexible pricing calculators for different service types

## 📱 Responsive Design

The application features:
- Mobile-first responsive design
- Adaptive layouts for different screen sizes
- Touch-friendly interactions
- Optimized images and assets

## 🧩 Development

### Adding New Components
Components should be placed in:
- `src/components/ui/` for reusable UI elements
- `src/components/common/` for shared layout components

### Styling Guidelines
- Use Tailwind CSS utility classes
- Follow the existing color scheme and typography
- Maintain consistent spacing and layout patterns


## 🤝 Contributing

1. Follow the existing code style and patterns
2. Use TypeScript for type safety
3. Ensure responsive design compatibility
4. Test across different screen sizes
5. Maintain consistent component architecture

---

**Content Whale** - Professional content writing services platform
