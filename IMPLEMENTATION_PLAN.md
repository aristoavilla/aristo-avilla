# Scroll Animation & Lazy Loading Implementation Plan

## Goal
Implement viewport-based fade animations and lazy loading for all page sections.

**Requirements:**
1. Each section fades in slowly when entering the viewport.
2. Each section fades out and becomes invisible again when leaving the viewport.
3. Implement lazy loading for each section (only load the component when it is near the viewport).
4. Sections that contain cards must show their cards sequentially from left to right with smooth, reasonably fast animations.

---

## Tech Stack
- **React 18** + **Vite**
- **Tailwind CSS**
- **Framer Motion** (already installed: `framer-motion`)

> **Do NOT install any new dependencies.** All work should be done with Framer Motion's existing APIs (`motion`, `useInView`, `AnimatePresence`, etc.).

---

## Step 1 — Create Reusable Animation Components

Create the following two new files. These will be imported by the section components and `App.tsx`.

### 1. `src/components/AnimatedSection.tsx`

Wraps any section with viewport-based fade-in/fade-out. Replaces the current `motion.section` usage.

```tsx
import { motion } from "framer-motion";

interface AnimatedSectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export default function AnimatedSection({
  children,
  id,
  className,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
```

**Behavior:**
- `once: false` → animation reverses when the section leaves the viewport.
- `amount: 0.2` → triggers when **20%** of the section is visible.
- `duration: 0.55` → slow, smooth fade.
- `y: 18` → subtle upward drift on enter.

---

### 2. `src/components/StaggerContainer.tsx`

Provides **left-to-right stagger** for card grids. In a CSS grid, children render in row-major order (left-to-right, top-to-bottom), so `staggerChildren` naturally produces the desired effect.

```tsx
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export function StaggerContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.15 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
}
```

**Behavior:**
- `staggerChildren: 0.1` → cards appear every **100 ms**.
- `duration: 0.4` per card → fast enough to feel snappy, slow enough to be smooth.
- `once: false` → cards reverse (fade out) when the container leaves the viewport.

---

## Step 2 — Create the Lazy Loading Wrapper

### `src/components/LazySection.tsx`

This component ensures:
1. The anchor `id` is **always** present in the DOM (so navigation links like `#service` still work).
2. The actual section component is **only mounted** when the user scrolls within **400 px** of the section.
3. Once mounted, the section stays mounted (so Framer Motion can fade it out gracefully when it leaves the viewport).

```tsx
import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

interface LazySectionProps {
  id: string;
  children: React.ReactNode;
  minHeight?: string;
}

export default function LazySection({
  id,
  children,
  minHeight = "50vh",
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isNear = useInView(ref, { once: false, margin: "400px" });
  const [hasBeenNear, setHasBeenNear] = useState(false);

  useEffect(() => {
    if (isNear) {
      setHasBeenNear(true);
    }
  }, [isNear]);

  return (
    <div ref={ref} id={id} style={{ minHeight: hasBeenNear ? undefined : minHeight }}>
      {hasBeenNear ? children : null}
    </div>
  );
}
```

> **Note:** `margin: "400px"` preloads the section **400 pixels before** it actually enters the viewport, giving Vite enough time to fetch the code-split chunk.

---

## Step 3 — Update `App.tsx`

Convert every section import to `React.lazy()` and wrap each section in `<LazySection>`.

**Full updated `src/App.tsx`:**

```tsx
import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import LazySection from "@/components/LazySection";
import ProjectDetail from "@/pages/ProjectDetail";

const Hero = lazy(() => import("@/components/Hero"));
const Services = lazy(() => import("@/components/Services"));
const WorkExperience = lazy(() => import("@/components/WorkExperience"));
const WhyHireMe = lazy(() => import("@/components/WhyHireMe"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

function SectionFallback() {
  return <div className="min-h-[50vh]" />;
}

function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen overflow-x-clip"
    >
      <Header />

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="about">
          <Hero />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="service">
          <Services />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="resume">
          <WorkExperience />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="why-hire-me">
          <WhyHireMe />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="project">
          <Portfolio />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="skills">
          <Testimonials />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="contact">
          <Contact />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectSlug" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
```

**Key changes:**
- All sections (except `Header` and `ProjectDetail`) are now `React.lazy()` imports.
- Each section is wrapped in `<Suspense fallback={<SectionFallback />}>` so React can show a blank placeholder while the chunk downloads.
- Each section is wrapped in `<LazySection id="...">` so it only mounts when near the viewport.
- `Header` is **not** lazy-loaded because it is needed immediately for navigation.
- `Footer` is lazy-loaded but does **not** need an `id` (no anchor link points to it), so you can skip the `id` prop if you prefer, though keeping it wrapped in `LazySection` is fine.

---

## Step 4 — Update Each Section Component

Replace the existing `motion.section` (or plain `<section>`) in each file with `AnimatedSection`. Where a section contains cards, wrap the grid in `StaggerContainer` and each card in `StaggerItem`.

### 4.1 `src/components/Hero.tsx`

- Replace `<motion.section ...>` with `<AnimatedSection ...>`.
- Remove the `initial`, `animate`, and `transition` props (they are now handled by `AnimatedSection`).
- **No cards** → no stagger needed.

**Before:**
```tsx
<motion.section
  id="about"
  initial={{ opacity: 0, y: 18 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.55, delay: 0.12 }}
  className="..."
>
```

**After:**
```tsx
<AnimatedSection
  id="about"
  className="relative overflow-visible pb-8 pt-0 md:pb-12"
>
```

> Keep the inner JSX unchanged.

---

### 4.2 `src/components/Services.tsx`

- Replace `<motion.section ...>` with `<AnimatedSection ...>`.
- Wrap the card grid (`<div className="grid gap-5 md:grid-cols-3">`) in `<StaggerContainer>`.
- Wrap each mapped card (`<div key={service.id} ...>`) in `<StaggerItem>`.

**Grid wrapper change:**
```tsx
<StaggerContainer className="grid gap-5 md:grid-cols-3">
  {services.map((service) => (
    <StaggerItem key={service.id}>
      <div className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
        {/* ... rest of card JSX ... */}
      </div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

> **Do not** change the card's inner markup; only add the wrappers.

---

### 4.3 `src/components/WorkExperience.tsx`

- Replace `<motion.section ...>` with `<AnimatedSection ...>`.
- **No card grid** → no stagger needed. The timeline items should fade as part of the whole section.
- Keep the inner JSX unchanged.

---

### 4.4 `src/components/WhyHireMe.tsx`

- Replace `<motion.section ...>` with `<AnimatedSection ...>`.
- **No cards** → no stagger needed.
- Keep the inner JSX unchanged.

---

### 4.5 `src/components/Portfolio.tsx`

- Replace `<motion.section ...>` with `<AnimatedSection ...>`.
- Wrap the project grid (`<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">`) in `<StaggerContainer>`.
- Wrap each mapped `<article>` in `<StaggerItem>`.

**Grid wrapper change:**
```tsx
<StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
  {projects.map((project) => (
    <StaggerItem key={project.id}>
      <article
        role="button"
        tabIndex={0}
        onClick={() => navigate(`/project/${project.slug}`)}
        // ... rest of props
        className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1"
      >
        {/* ... rest of article JSX ... */}
      </article>
    </StaggerItem>
  ))}
</StaggerContainer>
```

> The tags list and the "Komuna Community Website" promo block below the grid should **not** be inside `StaggerContainer`. Keep them outside so they fade with the section as a whole.

---

### 4.6 `src/components/Testimonials.tsx`

- Replace `<motion.section ...>` with `<AnimatedSection ...>`.
- Wrap the skills grid (`<div className="mt-10 grid gap-5 md:grid-cols-2">`) in `<StaggerContainer>`.
- Wrap each mapped category card (`<div key={cat.name} ...>`) in `<StaggerItem>`.

**Grid wrapper change:**
```tsx
<StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2">
  {categories.map((cat) => (
    <StaggerItem key={cat.name}>
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        {/* ... rest of card JSX ... */}
      </div>
    </StaggerItem>
  ))}
</StaggerContainer>
```

---

### 4.7 `src/components/Contact.tsx`

- Replace `<motion.section ...>` with `<AnimatedSection ...>`.
- **No cards** → no stagger needed.
- Keep the inner JSX unchanged.

---

### 4.8 `src/components/Footer.tsx`

- Replace `<motion.footer ...>` with `<AnimatedSection ...>` (or keep `<motion.footer>` directly updated with `whileInView`).
- **No card stagger** needed; the footer should fade as a single block.

Because `AnimatedSection` renders a `<section>` tag, you should **not** use it for the footer. Instead, update the existing `<motion.footer>` directly:

```tsx
<motion.footer
  initial={{ opacity: 0, y: 18 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.55 }}
  className="rounded-t-[2rem] bg-[#1b1c20] px-4 py-12 text-gray-300 md:px-8"
>
```

---

### 4.9 `src/components/BlogPosts.tsx`

- This component currently uses a plain `<section>`. Replace it with `<AnimatedSection>`.
- Wrap the blog grid (`<div className="grid gap-5 md:grid-cols-3">`) in `<StaggerContainer>`.
- Wrap each mapped `<article>` in `<StaggerItem>`.
- **Add the missing `framer-motion` import** (this file currently does not import it).

**Full updated wrapper structure:**
```tsx
import AnimatedSection from "@/components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

// ... inside component:
<AnimatedSection className="py-14 md:py-20">
  <div className="content-wrap">
    {/* title & button */}

    <StaggerContainer className="grid gap-5 md:grid-cols-3">
      {blogPosts.map((post) => (
        <StaggerItem key={post.id}>
          <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1">
            {/* ... article JSX ... */}
          </article>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </div>
</AnimatedSection>
```

---

## Step 5 — Cleanup

1. **Remove unused `framer-motion` imports** from section files if they no longer directly use `motion`.
   - Files using only `AnimatedSection` and `StaggerContainer` no longer need `import { motion } from "framer-motion"`.
   - `Footer.tsx` still needs `motion` because it uses `<motion.footer>` directly.
   - `Hero.tsx` no longer needs `motion` (unless it uses it elsewhere).

2. **Verify `src/app/page.tsx` is unused.**
   - `main.tsx` imports `App.tsx`, not `page.tsx`.
   - **Leave `page.tsx` untouched** to avoid breaking anything.

---

## Step 6 — Testing Checklist

After implementing, run the dev server (`npm run dev`) and verify:

- [ ] **Hero** fades in on page load. When scrolled completely out of view, it fades out. Scrolling back up makes it fade in again.
- [ ] **Services** only appears (and its network chunk loads) when you scroll near it. Its 3 cards appear sequentially left-to-right.
- [ ] **WorkExperience** fades in/out as a whole section.
- [ ] **WhyHireMe** fades in/out as a whole section.
- [ ] **Portfolio** cards appear sequentially left-to-right. The section fades out when scrolled past.
- [ ] **Testimonials** (TechStack) cards appear sequentially left-to-right.
- [ ] **BlogPosts** cards appear sequentially left-to-right.
- [ ] **Contact** fades in/out as a whole section.
- [ ] **Footer** fades in/out as a whole section.
- [ ] **Anchor links** (e.g., clicking "Services" in the nav/footer) still scroll correctly to each section.
- [ ] **Build passes** (`npm run build` completes without errors).

---

## Animation Timing Reference

| Element | Duration | Delay / Stagger | Movement |
|---------|----------|-----------------|----------|
| Section fade | `0.55s` | — | `y: 18 → 0` |
| Card stagger gap | — | `0.1s` | — |
| Individual card | `0.4s` | — | `y: 12 → 0` |
| Viewport trigger | — | — | `amount: 0.2` (20% visible) |
| Lazy preload margin | — | — | `400px` before viewport |

---

## Notes for the Implementing Agent

- **Do not** add `exit` animations via `AnimatePresence`. `whileInView` with `once: false` handles both enter and exit automatically.
- **Do not** change any CSS class names or Tailwind utility classes inside the sections unless strictly necessary for the animation wrappers.
- If a section feels like it re-animates too aggressively while scrolling, increase `amount` (e.g., to `0.3` or `0.4`) so it requires more visibility before fading in.
- The `Hero` is at the top, so it will be in view immediately. Its chunk will load on mount, which is expected.
