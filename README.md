# BugSentry (formerly Sanjeevani) 🧠

<p align="center">
  <strong>Engineering Intelligence — Built for Speed & Precision</strong><br>
  <em>A state-of-the-art AI-powered DevOps and Engineering Intelligence platform.</em>
</p>

---

## 📖 Overview

BugSentry is a high-performance web dashboard and intelligence platform designed to analyze code changes, detect CI/CD failures, forecast system risks, and instantly suggest actionable fixes to engineering teams.

By combining real-time repository telemetry with AI-driven insights, BugSentry bridges the gap between raw codebase metrics and business value, providing unified transparency for both Developers and Executives.

The platform boasts a **premium dark-mode glassmorphism** UI, powered by WebGL 3D graphics, rich GSAP scroll-triggered animations, and a seamless locomotive-scroll integration.

---

## ⚡ Core Features

### 1. Role-Based Intelligence
BugSentry intelligently adapts its interface and insights based on the viewing role:
* **For Developers:** Granular code insights, isolated failure tracing, PR feedback automation, and auto-fixing of build/test loops.
* **For Managers/Executives:** Executive-level overviews detailing sprint impact analysis, financial pipeline trajectory, time-saved KPIs, and timeline velocity.

### 2. AI-Powered DevOps
* **Contextual Code Analysis:** Connect your GitHub/GitLab repositories. The AI engine instantly flags high-risk modules, redundant PR trends, and syntax warnings across different language runtimes.
* **Predictive Risk Engine:** Understands historical commit patterns and build failures to forecast whether a specific merge will cause future production degradation.

### 3. Real-Time Telemetry & Alerting
* **Downtime Risk Alerting:** Aggregates analytics on critical paths (e.g., payment gateways, auth clusters) and warns if changes occur without sufficient test coverage.
* **Integration Graphs:** Visual representations of API rate-limiting thresholds and runtime anomalies via built-in dashboard charts.

---

## 🎨 Immersive UX/UI & Animations Architecture

The platform prioritizes a cutting-edge user experience to match its powerful backend tools.
* **GSAP ScrollTriggers:** The main landing experience utilizes extensive `gsap` timeline animations to coordinate UI reveals. Features an intricate "Curtain Revealer" that seamlessly transitions the dark-green hero area into the feature showcase.
* **3D & WebGL Integration:** Through `@react-three/fiber`, the frontend renders real-time 3D models (like the core intelligence orb) seamlessly integrated into React components.
* **React Motion Dynamics:** Uses `framer-motion` for fluid component-level micro-interactions and hover states.
* **Locomotive Smooth Scroll:** Achieved via `@studio-freight/lenis`, making scroll-based WebGL & layer masking buttery smooth.

---

## 🛠 Technology Stack

### Core
* **React 19**
* **Vite** (Next-generation frontend tooling)

### Styling
* **Tailwind CSS (v4)** for robust utility-class architecture.
* **Vanilla CSS** for highly custom gradient masks and complex grid animations.
* **Radix UI Primitives** for accessible, unstyled UI components.
* **FontSource (Outfit)** for optimized, dynamic typography.
* **Remix Icon** for a consistent vector iconography library.

### Graphics & Animation
* **GSAP** & `@gsap/react`
* **Framer Motion**
* **Three.js** & `@react-three/drei`
* **Vanta.js**

---

## 📂 Exact Project Structure

```text
Team/Sanjeevani/
├── src/
│   ├── assets/
│   │   └── image/           # All high-fidelity mockups, UI screenshots, and background plates.
│   ├── components/
│   │   ├── effects/         # Reusable animation components
│   │   │   ├── AnimatedDots.jsx   # Hero particle effects
│   │   │   ├── HoverGrid.jsx      # Tracking light grids using GSAP
│   │   │   └── Logo3D.jsx         # WebGL/Three.js integrated 3D objects
│   │   ├── layout/          # Global shell pieces
│   │   │   ├── Navbar.jsx         # Sticky navigation with blur backdrops
│   │   │   └── Sidebar.jsx        # Slide-out command menu
│   │   └── sections/        # Main landing page sequential domains
│   │       ├── AboutSection.jsx       # Technical capability breakdown
│   │       ├── BlackSection.jsx       # Deep transition separator
│   │       ├── ContactSection.jsx     # Early-access CRM intake 
│   │       ├── DashboardSection.jsx   # Live dashboard interaction mockup
│   │       ├── DeliverySection.jsx    # Persona targeting layout
│   │       ├── FeaturesSection.jsx    # Scroll-triggered visual feature grids
│   │       ├── FooterSection.jsx      # Comprehensive site links
│   │       ├── LandingHero.jsx        # The landing hook and title container
│   │       ├── MaskScrollSection.jsx  # SVG Mask expansion sequence
│   │       ├── PhoneMockup.jsx        # 3D interactive device container
│   │       └── WhatsAppSection.jsx    # Real-time event notifications display
│   ├── hooks/
│   │   └── useCurtainGsap.js  # Dedicated timeline hook for the section transition 
│   ├── index.css              # Base styling, layer overrides
│   ├── App.jsx                # Layout orchestration and rendering
│   └── main.jsx               # React DOM hydration
└── package.json               # Full dependency resolution map
```

---

## 🚀 Installation & Local Development

### Prerequisites
* Ensure you have Node.js (v18+ recommended) installed.

### Setup Instructions
1. **Clone & Install**
   Navigate to the repository root and install dependencies.
   ```bash
   npm install
   ```

2. **Start the Development Server**
   Start Vite's ultra-fast hot-reloading development wrapper.
   ```bash
   npm run dev
   ```
   > 📍 The app will be served locally at `http://localhost:5173`. 

3. **Linting Context**
   To check for strict mode or accessibility warnings during development, run:
   ```bash
   npm run lint
   ```

4. **Production Build**
   To compile all JSX, bundle the WebGL dependencies, and optimize assets:
   ```bash
   npm run build
   ```
   *For deployment to platforms like Vercel, Netlify, or GH-pages, base configurations are supported.*

---

## 📌 Development Guide & Conventions

* **Section Architecture:** Each visual block of the landing page is isolated in `/sections/`. If you are modifying the Scroll-Spy tracking, ensure the wrapper `id` tags in `App.jsx` remain mapped to their corresponding Nav links.
* **Asset Loading:** High-resolution mockup images (e.g. `bugsentry_dashboard_mockup_trimmed.png`) should remain in `/assets/` and be imported statically to allow Vite to hash them for cache-busting.
* **Component Styling:** Global CSS is deliberately kept sparse (`index.css`). Use Tailwind for layout positioning padding; use inline styles specifically when binding to `gsap` values or performing runtime math for complex UI states (like dynamic gradients).

---

<p align="center">
  <i>Developed to bring unparalleled transparency to engineering pipelines.</i>
</p>
