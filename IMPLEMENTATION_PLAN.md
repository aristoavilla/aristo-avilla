# Portfolio Website Revision - Implementation Plan for Sub-Agent

## 🎯 Overview
This plan guides implementation of the current portfolio revisions. Work should be completed via CLI/terminal commands using npm scripts and Vite dev server.

**New revision (May 2026) included in this plan:**
- Hero image should sit behind the `Portfolio` / `Hire me` buttons (buttons overlay image)
- Hero “frame/border” around the picture should be invisible
- Services cards should include tidy brand logos (React, TypeScript, Cloudflare, optional Hono)
- Footer social usernames should be replaced with linked logo icons (Brandfetch)
- Footer WhatsApp number should be `+62-877-1655-2425`

---

## SUB-AGENT DRIVEN WORKFLOW (RECOMMENDED)

Use the Explore sub-agent to quickly locate exact components and patterns before editing.

**Suggested Explore prompts:**
- "Find the Hero section buttons and hero image markup. Where are z-index and positioning set?" (quick)
- "Find Services cards and how the service items are rendered; identify where to inject brand logos." (quick)
- "Find Footer socials/phone number and update to logo icons + WhatsApp." (quick)

Then implement changes locally and validate using the CLI commands in the final phase.

---

## PHASE 1: SETUP & DEPENDENCIES

### Task 1.1: Install Animation Dependencies
**CLI Command:**
```bash
npm install framer-motion
```

**Why:** Needed for smooth page load animations and typing effect. Framer-motion is industry standard for React animations.

### Task 1.2: Verify Dev Server Ready
**CLI Command:**
```bash
npm run dev
```

**Expected Output:** Vite dev server running on http://localhost:3000

---

## PHASE 2: HERO SECTION REFACTOR

### Task 2.1: Update Hero.tsx - Center Picture with Overlapping Buttons
**File:** `src/components/Hero.tsx`

**Changes Required:**
1. Change grid layout from 3-column to single column centered
2. Remove left description div
3. Remove right "Available for work" status div
4. Move picture to center and increase size (from 280px height to ~400px)
5. Make picture overflow/extend beyond current boundaries
6. Reposition "Portfolio" and "Hire me" buttons to overlap the picture
7. Buttons should be positioned absolutely near bottom of hero section
8. Ensure buttons are visually above the picture (z-index)
9. Remove any visible frame/border around the picture (no border/ring; avoid strong shadow that reads like a frame)
8. Keep "Hello!" badge above
9. Keep main heading "I'm Aristo, Fullstack Developer"
10. Add typing animation to heading (see Task 4.1)

**Key CSS Classes:**
- `position: relative` on hero container
- `position: absolute` on button container
- Increase image from `md:h-80 md:w-64` to larger dimensions
- Z-index layering: image below buttons

**Implementation Note:** Picture should extend visually into the Portfolio section for design impact.

---

## PHASE 2B: SERVICES CARD LOGOS (MAY 2026)

### Task 2B.1: Add Brand Logos in Services Cards
**File:** `src/components/Services.tsx`

**Goal:** In "My Services" cards, show tidy brand logos:
- Frontend: React + TypeScript
- Backend: Cloudflare + (optional) Hono
- Full Stack: all logos used above

**Logo sources (provided):**
- React: `https://cdn.brandfetch.io/idREYlLkpD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746616583363`
- TypeScript: `https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772354699784`
- Cloudflare: `https://cdn.brandfetch.io/idJ3Cg8ymG/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667589504295`

**Hono logo (optional):**
- Use Brandfetch Logo API domain format if needed: `https://cdn.brandfetch.io/hono.dev?c=1bxid64Mup7aczewSAYMX`
- If it doesn’t render correctly, omit Hono (per requirements)

**UI guidance:**
- Keep logos aligned and sized consistently (e.g. small icon chips/pills)
- Ensure contrast if using "dark" logo variants (place on a dark chip background)

---

## PHASE 2C: FOOTER SOCIAL ICONS + WHATSAPP (MAY 2026)

### Task 2C.1: Replace Social Handles with Icon Links
**File:** `src/components/Footer.tsx`

**Goal:** Replace social media username text with logo icons wrapped by links.

**Implementation notes:**
- Use Brandfetch Logo API domain format: `https://cdn.brandfetch.io/<domain>?c=<clientId>`
- Wrap each icon with `<a href=... target="_blank" rel="noopener noreferrer">`
- Add `aria-label` for accessibility

### Task 2C.2: Update WhatsApp Number
**Files:**
- `src/components/Footer.tsx`
- `src/components/Contact.tsx` (if the number is displayed there)

**Goal:** Change displayed number to `+62-877-1655-2425` and make it a WhatsApp link.

**Suggested link format:**
- `https://wa.me/6287716552425`

---

## PHASE 3: WHY HIRE ME SECTION REFACTOR

### Task 3.1: Update WhyHireMe.tsx - Large Overlapping Picture
**File:** `src/components/WhyHireMe.tsx`

**Changes Required:**
1. Replace current image - KEEP URL SAME but styling changes: `https://i.ibb.co.com/fzG661gf/1.png`
2. Make picture significantly larger (suggested: 500px+ height)
3. Allow picture to overflow outside the glass-panel box
4. Picture should extend beyond right/bottom edges
5. Position picture to overlap content area
6. Consider using `overflow: visible` on container
7. Use negative margins or absolute positioning for overflow effect

**Current Image URL:**
- `https://i.ibb.co.com/fzG661gf/1.png`

**Implementation Note:** This is the left picture from original Hero section, now repositioned here with bigger size.

---

## PHASE 4: ANIMATION IMPLEMENTATION

### Task 4.1: Typing Effect on Hero Heading
**File:** `src/components/Hero.tsx`

**Implementation:**
1. Create custom React hook: `useTypeEffect.ts` in `src/hooks/`
2. Text to animate: "I'm Aristo, Fullstack Developer"
3. Features:
   - Characters appear one by one
   - Blinking text cursor at end
   - Cursor speed: 500ms blink
   - Typing speed: 50ms per character
   - Auto-play on component mount
4. Replace static h1 text with animated version
5. Keep color styling (orange "Aristo," part)

**Hook Location:** `src/hooks/useTypeEffect.ts`

### Task 4.2: Stagger Animation - Elements Appear One by One
**Files:** All section components
**Implementation:**
1. Add stagger animation on page load
2. Each major section fades and slides in
3. Delay between sections: 150-200ms
4. Sections affected:
   - Header
   - Hero
   - Services
   - WorkExperience
   - WhyHireMe
   - Portfolio
   - Testimonials
   - Contact
   - Footer
5. Use framer-motion AnimatePresence + motion.div wrapper
6. Trigger: once on initial page load

**Pattern to Use:**
```tsx
import { motion } from 'framer-motion';

<motion.section
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.1, duration: 0.5 }}
>
  {/* content */}
</motion.section>
```

---

## PHASE 5: PORTFOLIO GRID UPDATES

### Task 5.1: Update Portfolio.tsx - Add Project Images
**File:** `src/components/Portfolio.tsx`

**Changes:**
1. Replace gradient placeholders with actual project images
2. Add new field to projects array: `image` (URL)
3. Update projects data:

```
Projects Array:
1. Learning Management System
   - Card & Details Image: https://i.ibb.co.com/F4crGzPZ/image.png
   - Link: (not provided - use placeholder "#")
   - Category: Full Stack
   - Date: March 2026
   
2. To-do with Better Stack Tools
   - Card Image: https://i.ibb.co.com/twdv3s8y/image.png
   - Details Images: 
     * https://i.ibb.co.com/WNnLrs6m/image.png
     * https://i.ibb.co.com/8gjQxZsj/image.png
   - Link: https://vercel.com/aristoavilla-6377s-projects/better-stack-to-do-claude-2-frontend
   - Category: Frontend
   - Date: April 2026
   
3. Telegram Bot with AI Integration
   - Card Image: https://i.ibb.co.com/rnzyc9L/Helsinquay-Cover.png
   - Details Image: https://i.ibb.co.com/Cp04PcTM/image.png
   - Link: https://t.me/HelsinquayBot
   - Category: Backend / Bot
   - Date: 2026
   
4. Komuna Community Website
   - Card Image: Use dummy placeholder image
   - Details Image: Use dummy placeholder image
   - Link: null (no link)
   - Category: Full Stack
   - Date: In Progress
```

4. Render images in card component instead of gradient
5. Images should have aspect-ratio: 16/9 or 4/3 (decide based on design)
6. Add `onClick` handler to route to detail page

---

## PHASE 6: CREATE PROJECT DETAIL PAGES

### Task 6.1: Create Dynamic Routing Structure
**Create New Files:**

1. `src/pages/ProjectDetail.tsx` - Route handler component
   - Uses URL parameter `:projectId` or `:projectSlug`
   - Loads project data from projects array
   - Renders ProjectDetailTemplate

2. `src/components/ProjectDetailTemplate.tsx` - Reusable detail page layout
   - Follows main design reference (header, hero image, content, call-to-action)
   - Props: `project` object with all details
   - Sections:
     * Hero image (full-width, responsive)
     * Project title
     * Category badges
     * Project description
     * Technology stack list
     * Featured images
     * Call-to-action button (links to project)

### Task 6.2: Set Up Client-Side Routing
**File:** `src/App.tsx` or create `src/router.tsx`

**Options:**
- Option A: Use React Router (lightweight)
- Option B: Use TanStack Router
- Option C: Hash-based routing (simplest, no server needed)

**Recommended:** React Router for flexibility
```bash
npm install react-router-dom
```

**Routes Needed:**
- `/` - Home (existing)
- `/project/:id` - Individual project detail page

### Task 6.3: Update Portfolio Card Click Handler
**File:** `src/components/Portfolio.tsx`

**Changes:**
1. Add click handler to each project card
2. Navigate to `/project/{projectId}`
3. Or make image/card clickable independently

---

## PHASE 7: BACKGROUND ENHANCEMENT

### Task 7.1: Add Abstract Background Motif
**Files:** 
- `src/app/globals.css` - Add background layer
- OR `src/App.tsx` - Add background component

**Implementation:**
1. Add subtle abstract SVG or pattern background
2. Keep minimalist style (not too prominent)
3. Suggested options:
   - Geometric shapes (circles, blobs) at low opacity (5-15%)
   - Gradient mesh background
   - Subtle grid or dot pattern
4. Avoid: Loud colors, busy patterns, distracting effects
5. Color: Keep neutral (grays, blacks) or match theme orange at very low opacity
6. Apply to `body` or create BackgroundDecorations component

**Pattern Suggestion:**
```css
background: linear-gradient(135deg, rgba(255, 122, 62, 0.03) 0%, rgba(0, 0, 0, 0.02) 100%);
/* Add subtle geometric SVG overlay */
```

---

## PHASE 8: TESTING & VERIFICATION

### Task 8.1: CLI Tests
**Run:**
```bash
npm run dev
```

**Verify:**
1. ✓ Typing animation works on Hero heading
2. ✓ Stagger animation visible on page load
3. ✓ Hero section: single centered picture, buttons overlap
4. ✓ WhyHireMe section: large overlapping picture visible
5. ✓ Portfolio cards show project images
6. ✓ Portfolio cards are clickable
7. ✓ Clicking card navigates to detail page
8. ✓ Detail page displays project info correctly
9. ✓ Links work (external project links from detail page)
10. ✓ Background has subtle motif
11. ✓ All responsive breakpoints work

### Task 8.2: Build Production
**CLI Command:**
```bash
npm run build
```

**Verify:** No build errors, all assets included

---

## FILE STRUCTURE CHANGES

### New Files to Create:
```
src/
├── hooks/
│   └── useTypeEffect.ts (typing animation hook)
├── pages/
│   └── ProjectDetail.tsx (detail page component)
├── components/
│   ├── ProjectDetailTemplate.tsx (reusable detail layout)
│   └── (modified) Portfolio.tsx
│   └── (modified) Hero.tsx
│   └── (modified) WhyHireMe.tsx
└── (modified) App.tsx (routing)
```

### Modified Files:
- `src/App.tsx` - Add routing
- `src/components/Hero.tsx` - Center picture, overlap buttons, typing animation
- `src/components/WhyHireMe.tsx` - Large overlapping picture
- `src/components/Portfolio.tsx` - Add images, click handlers
- `src/app/globals.css` - Background styling
- `package.json` - New dependencies (framer-motion, router)

---

## PRIORITY ORDER (Recommended Execution)

1. **FIRST:** Install dependencies (Task 1.1)
2. **SECOND:** Hero section refactor + typing effect (Tasks 2.1, 4.1)
3. **THIRD:** Why Hire Me section update (Task 3.1)
4. **FOURTH:** Stagger animations (Task 4.2)
5. **FIFTH:** Portfolio grid images (Task 5.1)
6. **SIXTH:** Project detail pages + routing (Tasks 6.1, 6.2, 6.3)
7. **SEVENTH:** Background enhancements (Task 7.1)
8. **EIGHTH:** Testing (Task 8.1, 8.2)

---

## NOTES FOR SUB-AGENT

- All image URLs are provided by the user - use them exactly as specified
- Design reference mentioned: ensure all detail pages follow main site design consistency
- Keep Tailwind CSS as styling approach
- Minimize breaking changes to existing components
- Test on multiple breakpoints (mobile, tablet, desktop)
- Preserve existing functionality while adding new features
- Use TypeScript for type safety
- Following responsive design principles (existing Tailwind pattern)
- Use CLI commands to test: `npm run dev` and `npm run build`
- All work should be CLI-driven and verifiable via terminal output

---

## CLI QUICK REFERENCE

```bash
# Start development
npm run dev

# Build production
npm run build

# Preview build
npm run preview

# Lint code
npm run lint

# Install new package
npm install package-name
```
