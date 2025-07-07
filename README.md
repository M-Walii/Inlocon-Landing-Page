# Inlocon Landing Page

A modern, responsive landing page built with **Next.js (App Router)**, featuring professional UI/UX, i18n, and robust component structure.

---

## 🚀 Features

- **Next.js App Router** (TypeScript)
- Responsive, accessible, and clean UI
- Modular sections and common components
- Light/dark theme support
- Internationalization (i18n) with English and German
- Unit tests for components and hooks (Jest + React Testing Library)

---

## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/M-Walii/Inlocon-Landing-Page.git
   cd inlocon-landing-page
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser:**
   - Visit [http://localhost:3000](http://localhost:3000)

---

## 🏗️ Project Structure

```
src/
  app/                # Next.js app directory (layout, pages, global styles)
  components/
    common/           # Reusable UI components (Button, Section, ScrollToTopButton)
    layout/           # Layout components (Header, Footer, Providers, MobileDrawer)
    sections/         # Main landing page sections (Hero, Blog, OurPortal, etc.)
  hooks/              # Custom React hooks (useTheme, useLanguage)
  locales/            # i18n translation files (en.json, de.json)
  utils/              # Utility functions (e.g., cn.ts)
public/
  assets/images/png/  # Logos, icons, and images (icon.png is the favicon)
```

---

## 🧩 Main Sections

- **Hero:** Landing headline, description, and call-to-action.
- **HowItWorks:** Step-by-step explanation of the platform.
- **WhyChooseInlocon:** Key benefits and differentiators.
- **ExtraFeatures:** Additional features for users.
- **WhatWeOffer:** Overview of offerings and pricing.
- **Groups:** Target user groups.
- **OurPortal:** Portal stats and consultation CTA.
- **Blog:** Latest articles and insights.
- **Testimonials:** Client feedback and reviews.
- **TrustedBy:** Logos of trusted partners/clients.
- **CallToAction:** Prominent CTA for trial/demo.

---

## 🧱 Common Components

- **Button:** Reusable button with variants and sizes.
- **Section:** Wrapper for consistent section layout.
- **ScrollToTopButton:** Floating button to scroll to top.

---

## 🧩 Layout Components

- **Header:** Navigation, language switcher, theme toggle.
- **Footer:** Company info, links, social, legal.
- **Providers:** Context providers for theme, language, etc.
- **MobileDrawer:** Responsive mobile navigation.

---

## 🪝 Custom Hooks

- **useTheme:** Light/dark mode state and toggler (persists in localStorage).
- **useLanguage:** Language state, translation function, and i18n support (persists in localStorage).

---

## 🌐 Internationalization (i18n)

- **Languages:** English (`en.json`), German (`de.json`)
- **Usage:** All UI text is translated using the `useLanguage` hook and nested translation keys.

---

## 🧪 Testing

- **Framework:** Jest + React Testing Library
- **Tested:** All major components and hooks
- **Run all tests:**
  ```bash
  npm test
  ```
- **Run a specific test file:**
  ```bash
  npx jest src/components/common/Button.test.tsx
  ```
- **Test files:** Colocated with components/hooks (e.g., `Button.test.tsx`, `useTheme.test.tsx`)

---

## 🖼️ Favicon & Branding

- **Favicon:** Set via `<link rel="icon" href="/assets/images/png/icon.png" />` in `src/app/layout.tsx`
- **To change:** Replace `public/assets/images/png/icon.png` with your own (preferably PNG with transparency).

---

## 📦 Deployment

- Standard Next.js deployment (Netlify)

**Feel free to customize this README for your team or open source!**
