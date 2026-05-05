export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  date: string;
  summary: string;
  description: string;
  image: string;
  gallery: string[];
  link: string | null;
  technologies: string[];
  status: string;
  inProgress: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "learning-management-system",
    title: "Learning Management System",
    category: "Full Stack",
    date: "March 2026",
    summary: "A learning platform built to organize courses, assignments, and learner progress in a single system.",
    description:
      "A modern learning management system focused on structured course delivery, learner tracking, and administration workflows for educators and students.",
    image: "https://i.ibb.co.com/F4crGzPZ/image.png",
    gallery: ["https://i.ibb.co.com/F4crGzPZ/image.png"],
    link: "https://lms-project-frontend-ashy.vercel.app/",
    technologies: ["React", "TypeScript", "Hono", "PostgreSQL"],
    status: "Delivered",
    inProgress: false,
  },
  {
    id: 2,
    slug: "to-do-with-better-stack-tools",
    title: "To-do with Better Stack Tools",
    category: "Frontend",
    date: "April 2026",
    summary: "A task management experience connected to Better Stack tooling and polished for fast daily use.",
    description:
      "A focused to-do application with a clean interface, practical task flows, and visual monitoring-friendly design cues for a lightweight productivity workflow.",
    image: "https://i.ibb.co.com/twdv3s8y/image.png",
    gallery: ["https://i.ibb.co.com/WNnLrs6m/image.png", "https://i.ibb.co.com/8gjQxZsj/image.png"],
    link: "https://vercel.com/aristoavilla-6377s-projects/better-stack-to-do-claude-2-frontend",
    technologies: ["React", "Tailwind CSS", "Better Stack"],
    status: "Live",
    inProgress: false,
  },
  {
    id: 3,
    slug: "telegram-bot-with-ai-integration",
    title: "Telegram Bot with AI Integration",
    category: "Backend / Bot",
    date: "2026",
    summary: "An AI-assisted Telegram bot for conversational automation and utility workflows.",
    description:
      "A Telegram bot experience that blends AI responses with operational commands to support rich, automated conversations and practical assistant-style interactions.",
    image: "https://i.ibb.co.com/rnzyc9L/Helsinquay-Cover.png",
    gallery: ["https://i.ibb.co.com/Cp04PcTM/image.png"],
    link: "https://t.me/HelsinquayBot",
    technologies: ["Telegram Bot API", "AI Integration", "Node.js"],
    status: "Shipped",
    inProgress: false,
  },
  {
    id: 4,
    slug: "komuna-community-website",
    title: "Komuna Community Website",
    category: "Full Stack",
    date: "In Progress",
    summary: "A community platform in active development with a focus on belonging, discovery, and participation.",
    description:
      "A community website currently in progress, designed to support a more expressive web presence for people to connect, explore events, and participate in shared interests.",
    image: "https://placehold.co/1200x900/f2f2f2/1f2937?text=Komuna+Community+Website",
    gallery: ["https://placehold.co/1200x900/f2f2f2/1f2937?text=Komuna+Community+Website"],
    link: null,
    technologies: ["React", "TypeScript", "Design System"],
    status: "In Progress",
    inProgress: true,
  },
];

export const getProjectBySlug = (slug: string) => projects.find((project) => project.slug === slug);
