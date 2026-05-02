# Aristo Avilla Portfolio Website

## Project Overview
A modern, responsive portfolio website for Aristo Avilla, a Product Designer with 10+ years of experience. Built with React, TypeScript, Tailwind CSS, and Vite for optimal performance and maintainability.

## Technology Stack
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Package Manager**: npm
- **Deployment**: Vercel

## Project Structure
```
src/
├── main.tsx         # Entry point
├── App.tsx          # Root component
├── app/
│   └── globals.css  # Global styles
└── components/
    ├── Header.tsx       # Navigation header
    ├── Hero.tsx         # Hero section
    ├── Services.tsx     # Services section
    ├── WorkExperience.tsx
    ├── WhyHireMe.tsx
    ├── Portfolio.tsx    # Portfolio projects
    ├── Testimonials.tsx # Client testimonials
    ├── BlogPosts.tsx    # Blog section
    ├── Contact.tsx      # Contact form
    └── Footer.tsx       # Footer
```

## Key Features
- Responsive design (mobile, tablet, desktop)
- Smooth scrolling navigation
- Hero section with call-to-action
- Services showcase
- Work experience timeline
- Portfolio/projects grid
- Client testimonials
- Blog post previews
- Contact form
- Social media links
- Dark footer section

## Color Scheme
- Primary: Orange (#FF7A3E)
- Secondary: Dark Gray (#2A2A2A)
- Accent: Light Gray (#F5F5F5)

## Development Commands
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Getting Started

### Installation
1. Navigate to project directory
2. Install dependencies: `npm install`
3. Start development server: `npm run dev`
4. Open http://localhost:3000 in browser

### Customization
- Update personal information in Hero and Footer components
- Add portfolio projects in Portfolio.tsx
- Update testimonials in Testimonials.tsx
- Modify blog posts in BlogPosts.tsx
- Add social media links in Contact.tsx

## Deployment to Vercel

### Prerequisites
- GitHub account
- Vercel account

### Steps
1. Push code to GitHub repository
2. Connect repository to Vercel
3. Vercel will auto-deploy on pushes
4. Configure custom domain if needed

### Environment Variables
Currently no environment variables required.

## Performance Optimization
- Vite fast module resolution
- Code splitting with dynamic imports
- Image optimization (use standard img tags or React lazy loading)
- CSS purging with Tailwind
- Tree shaking of unused code

## Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contact & Social Links
Update the following in relevant components:
- Social media handles
- Email address
- Phone number
- LinkedIn profile
- Twitter/X handle
- Dribbble portfolio

## Fonts
Fonts are loaded from Google Fonts via CDN in index.html:
- Poppins: 400, 500, 600, 700, 800
- Sora: 400, 600, 700

CSS variables for fonts are defined in globals.css as `--font-poppins` and `--font-sora`.

## Future Enhancements
- Add dynamic blog content
- Implement project filtering
- Add dark mode toggle
- Integrate CMS for content management
- Add analytics
- Implement contact form backend

