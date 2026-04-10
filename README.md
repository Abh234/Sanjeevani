# BugSentry (Engineering Intelligence)

BugSentry (formerly Sanjeevani) is a state-of-the-art AI-powered DevOps and Engineering Intelligence platform. It provides a unified dashboard to analyze code changes, detect CI/CD failures, forecast system risks, and instantly suggest actionable fixes to developers and engineering managers.

## 🌟 Key Features

* **AI-Powered Code Analysis**: Connect your GitHub/GitLab repositories and let BugSentry's AI immediately flag high-risk modules and syntax warnings.
* **Role-Based Intelligence**: 
  * **For Developers**: Granular code insights, automated Pull Requests, and auto-fixing of failing tests.
  * **For Managers**: Executive-level overviews detailing sprint impact analysis, financial trajectory, and timeline velocity.
* **Real-time DevOps Telemetry**: Get instant alerts on downtime risks and API rate limiting incidents.
* **Premium UX/UI**: Immersive dark-mode glassmorphism interface powered by complex 3D renders, WebGL masking, and high-performance GSAP scroll animations.

## 🛠 Tech Stack

* **Frontend Framework**: React 19 + Vite
* **Styling**: Tailwind CSS (v4), Vanilla CSS, Radix UI Primitives
* **Animations & 3D**: 
  * `gsap` + `@gsap/react` for complex scroll triggers and timelines.
  * `framer-motion` for fluid component-level micro-interactions.
  * `three.js`, `@react-three/fiber` & `@react-three/drei` for interactive 3D WebGL scenes.
  * `@studio-freight/lenis` for buttery smooth locomotive scrolling.
* **Icons**: RemixIcon toolkit

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start the Development Server**
   ```bash
   npm run dev
   ```
   The site will be available locally at `http://localhost:5173`.

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📂 Project Structure Overview

- `src/components/sections`: Contains the main scrolling sections (Hero, Dashboard, Features, Delivery, Contact).
- `src/components/effects`: Contains advanced 3D elements and GL shaders (`Logo3D`, `AnimatedDots`, `HoverGrid`).
- `src/components/layout`: Contains base layout components like `Sidebar` and `Navbar`.
- `src/assets/image`: Contains all static and image assets.
