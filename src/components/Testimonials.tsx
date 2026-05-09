import AnimatedSection from "@/components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

export default function TechStack() {
  const categories = [
    {
      name: "Frontend",
      skills: ["React", "Vite", "TypeScript", "Tailwind CSS", "Shadcn", "MaterialUI", "Formik"],
    },
    {
      name: "Backend",
      skills: ["Hono", "Drizzle ORM", "Cloudflare Workers + Queue", "Convex"],
    },
    {
      name: "Database & Storage",
      skills: ["PostgreSQL", "NeonDB", "Cloudflare R2"],
    },
    {
      name: "APIs",
      skills: ["Axios", "TanStack Query", "Postman", "Resend"],
    },
    {
      name: "Monitoring & Events",
      skills: ["Better Stack", "PostHog"],
    },
    {
      name: "AI Tools",
      skills: ["Claude Code", "GitHub Copilot", "ChatGPT", "Codex"],
    },
    {
      name: "Languages",
      skills: ["JavaScript", "TypeScript", "SQL"],
    },
    {
      name: "Deployment",
      skills: ["Vercel", "Cloudflare Worker"],
    },
  ];

  return (
    <AnimatedSection
      id="skills"
      className="pb-16 md:pb-24"
    >
      <div className="content-wrap">
        <div className="grain overflow-hidden rounded-[2rem] bg-[#101217] px-6 py-12 text-white md:px-8">
          <h2 className="text-center [font-family:var(--font-sora)] text-4xl font-semibold md:text-5xl">
            Tech Stack &amp;
            <br />
            <span className="text-[#ff7a3e]">Skills</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/70">
            Tools and technologies I use to build fast, reliable, and scalable applications.
          </p>

          <StaggerContainer className="mt-10 grid gap-5 md:grid-cols-2">
            {categories.map((cat) => (
              <StaggerItem key={cat.name}>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-[#ff7a3e]">{cat.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white/80"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </AnimatedSection>
  );
}
