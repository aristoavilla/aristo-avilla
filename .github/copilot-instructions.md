# Aristo Avilla Portfolio Website

## Project Overview
A modern, responsive portfolio website for Aristo Avilla, a Product Designer with 10+ years of experience. Built with Next.js, TypeScript, and Tailwind CSS for optimal performance and maintainability.

## Technology Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: npm
- **Deployment**: Vercel

## Project Structure
```
src/
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Navigation header
│   ├── Hero.tsx         # Hero section
│   ├── Services.tsx     # Services section
│   ├── WorkExperience.tsx
│   ├── WhyHireMe.tsx
│   ├── Portfolio.tsx    # Portfolio projects
│   ├── Testimonials.tsx # Client testimonials
│   ├── BlogPosts.tsx    # Blog section
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer

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
- `npm start` - Start production server
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
- Next.js automatic code splitting
- Image optimization (use next/image for images)
- CSS purging with Tailwind
- CSS-in-JS optimization

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

## Future Enhancements
- Add dynamic blog content
- Implement project filtering
- Add dark mode toggle
- Integrate CMS for content management
- Add analytics
- Implement contact form backend
