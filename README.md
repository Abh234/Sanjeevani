# BugSentry (landing site)

BugSentry is a React + Vite marketing landing page for an AI DevOps assistant. The site presents the product through a sequence of cinematic, scroll-driven sections focused on CI/CD failure analysis, deployment crash detection, AI explanations, and actionable fixes for engineering teams.

## Overview

The project is built as a single-page experience with a strong visual identity:

- Animated loading overlay before the main content is revealed
- Hero section with layered gradients, hover effects, and 3D branding
- Scroll-triggered GSAP transitions between major product story sections
- Problem/solution narrative (developer pain → BugSentry workflow)
- Product preview dashboard mock + mobile-style capability showcase
- Footer reveal with an additional animated curtain effect

## Tech Stack

- React 19
- Vite 8
- Tailwind CSS 4 via `@tailwindcss/vite`
- GSAP with `ScrollTrigger`
- Lenis for smooth scrolling
- Three.js with `@react-three/fiber` and `@react-three/drei`
- Framer Motion for motion utilities
- Remix Icon and Outfit font assets

## Project Structure

```text
Sanjeevani/
|-- public/
|   |-- favicon.svg
|   |-- robots.txt
|   |-- sitemap.xml
|   `-- _redirects
|-- src/
|   |-- assets/
|   |   |-- image/
|   |   `-- video/
|   |-- components/
|   |   |-- components/
|   |   |-- effects/
|   |   |-- layout/
|   |   `-- sections/
|   |-- constants/
|   |-- hooks/
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- eslint.config.js
|-- package.json
|-- vercel.json
`-- vite.config.js
```

## Main Application Flow

The page is composed in [`src/App.jsx`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/App.jsx) and follows this sequence:

1. `LoadingOverlay` introduces the brand and unlocks the page content.
2. `Navbar` remains available globally.
3. `LandingHero`, `FeaturesSection`, and `CubeGrid` form the opening animated block.
4. `BlackSection`, `WhatsAppSection`, and `MaskScrollSection` continue the product narrative (problem → solution → preview).
5. `DeliverySection`, `FooterSection`, and `CubeGridFooter` close the experience.
6. `Sidebar` and `DemoModal` provide interactive overlays.

## Important Folders

- [`src/components/sections`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/sections): page sections such as hero, features, delivery, and footer
- [`src/components/effects`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/effects): visual systems like loading overlays, 3D logos, and grid effects
- [`src/components/layout`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/layout): navigation and sidebar layout components
- [`src/hooks`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/hooks): GSAP and scroll orchestration hooks
- [`src/assets`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/assets): static images, SVGs, and video content

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm 9 or newer

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

The app will be available on the local Vite development server, usually `http://localhost:5173`.

### Create a Production Build

```bash
npm run build
```

### Preview the Production Build

```bash
npm run preview
```

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates the production bundle in `dist/`
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npm run deploy` publishes the built app using `gh-pages`

## Deployment Notes

This project already includes:

- [`vercel.json`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/vercel.json) for SPA rewrites on Vercel
- `base: '/'` in [`vite.config.js`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/vite.config.js)
- a `deploy` script that publishes `dist/` through GitHub Pages

If you deploy to a subpath instead of the domain root, update the `base` value in `vite.config.js`.

## Animation Architecture

Most motion behavior is organized through custom hooks in [`src/hooks`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/hooks):

- `useLenis` manages smooth scrolling
- `useCurtainGsap` controls the opening curtain transition
- `useSectionAnimations` coordinates section reveal timing
- `useBlackSectionGsap`, `useWhatsAppSectionGsap`, `useMaskScrollSectionGsap`, and `useFooterCurtainGsap` drive section-specific motion

When editing the page:

- Keep section IDs stable if they are used for anchors or ScrollTrigger logic
- Review related hook files before changing layout structure
- Test both desktop and mobile scrolling behavior after animation changes

## Customization Guide

Common places to update:

- Branding and hero messaging: [`src/components/sections/LandingHero.jsx`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/sections/LandingHero.jsx)
- Product positioning and phone mockup: [`src/components/sections/FeaturesSection.jsx`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/sections/FeaturesSection.jsx)
- Solution narrative section: [`src/components/sections/WhatsAppSection.jsx`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/sections/WhatsAppSection.jsx)
- Differentiation + CTA showcase: [`src/components/sections/DeliverySection.jsx`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/sections/DeliverySection.jsx)
- Footer links and contact details: [`src/components/sections/FooterSection.jsx`](/c:/Users/Lenovo/Desktop/NutriFusion%20X%20Project/Team/Sanjeevani/src/components/sections/FooterSection.jsx)

## Quality Checklist

Before shipping changes, it is a good idea to verify:

- `npm run lint` passes
- `npm run build` completes successfully
- scroll animations still trigger in the intended order
- modal, sidebar, and anchor navigation still work
- static assets load correctly in production

## Repository Notes

- The current README previously contained the default Vite starter content and some duplicated headings.
- This version is intended to serve as a cleaner project handoff document for development, maintenance, and deployment.
