# Aristo Avilla - Portfolio Website

A modern, professional portfolio website showcasing Aristo Avilla's work as a Product Designer. Built with cutting-edge web technologies for optimal performance and user experience.

## 🚀 Live Demo
[Visit Portfolio](https://aristo-avilla.vercel.app)

## ✨ Features

- **Responsive Design** - Optimized for all devices (mobile, tablet, desktop)
- **Modern UI** - Clean, professional design with smooth animations
- **Fast Performance** - Built with Next.js for optimal loading speeds
- **SEO Optimized** - Meta tags and structured data for better search visibility
- **TypeScript** - Type-safe code for better development experience
- **Tailwind CSS** - Utility-first CSS framework for rapid styling

## 📋 Sections

1. **Header** - Sticky navigation with smooth scrolling
2. **Hero** - Eye-catching introduction section
3. **Services** - Showcase of design services
4. **Work Experience** - Professional background and experience
5. **Why Hire Me** - Key statistics and value proposition
6. **Portfolio** - Featured projects and case studies
7. **Testimonials** - Client feedback and reviews
8. **Blog** - Latest articles and insights
9. **Contact** - Contact form and social links
10. **Footer** - Quick links and copyright information

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [npm](https://www.npmjs.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/aritoavilla/portfolio.git
   cd aristo-avilla
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
aristo-avilla/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles
│   └── components/             # React components
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── Services.tsx
│       ├── WorkExperience.tsx
│       ├── WhyHireMe.tsx
│       ├── Portfolio.tsx
│       ├── Testimonials.tsx
│       ├── BlogPosts.tsx
│       ├── Contact.tsx
│       └── Footer.tsx
├── package.json
├── tailwind.config.ts          # Tailwind configuration
├── postcss.config.js           # PostCSS configuration
├── tsconfig.json               # TypeScript configuration
└── next.config.js              # Next.js configuration
```

## 🎨 Customization

### Update Personal Information

**Hero Section** - Edit `src/components/Hero.tsx`:
```tsx
<h1>I'm <span className="text-orange-500">Aristo,</span> Product Designer</h1>
```

**Services** - Edit `src/components/Services.tsx`:
```tsx
const services = [
  { id: 1, title: "Your Service", ... }
]
```

**Portfolio** - Edit `src/components/Portfolio.tsx`:
```tsx
const projects = [
  { id: 1, title: "Your Project", ... }
]
```

### Modify Colors

Edit `tailwind.config.ts`:
```ts
theme: {
  extend: {
    colors: {
      primary: '#FF7A3E',      // Change primary color
      secondary: '#2A2A2A',    // Change secondary color
    },
  },
}
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint --fix` - Fix linting issues

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [https://vercel.com](https://vercel.com)
   - Click "New Project"
   - Select your GitHub repository
   - Click "Deploy"

3. **Custom Domain** (Optional)
   - Go to Project Settings
   - Navigate to Domains
   - Add your custom domain
   - Follow DNS configuration steps

### Environment Variables
Currently no environment variables are required. Add any if needed in the `.env.local` file.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📧 Contact

- Email: [contact@aristaavilla.com](mailto:contact@aritoavilla.com)
- LinkedIn: [Aristo Avilla](https://linkedin.com)
- Twitter: [@aritoavilla](https://twitter.com)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Thanks to Next.js, React, and Tailwind CSS communities
- Icons from emoji library

---

**Made with ❤️ by Aristo Avilla**
