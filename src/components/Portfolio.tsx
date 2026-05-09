import AnimatedSection from "@/components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

export default function Portfolio() {
  const navigate = useNavigate();

  const tags = ["Full Stack", "Frontend", "Backend", "Bot", "API", "In Progress"];

  return (
    <AnimatedSection
      id="project"
      className="pb-16 md:pb-24"
    >
      <div className="content-wrap">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <h2 className="section-title max-w-xl">
            Let&apos;s have a look at my <span className="text-[#ff7a3e]">Portfolio</span>
          </h2>
          <button className="btn-primary px-5 py-2 text-sm">See all</button>
        </div>

        <StaggerContainer className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <StaggerItem key={project.id}>
              <article
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/project/${project.slug}`)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  navigate(`/project/${project.slug}`);
                }
              }}
              className="cursor-pointer overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1"
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-[#f5f7fb]">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                {project.inProgress && (
                  <span className="absolute left-3 top-3 rounded-full bg-[#ff7a3e] px-2.5 py-1 text-[10px] font-semibold text-white">
                    In Progress
                  </span>
                )}
                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#ff7a3e] shadow">
                  ↗
                </button>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ff7a3e]">{project.category}</p>
                <h3 className="mt-1 text-lg font-semibold text-[#1f2937]">{project.title}</h3>
                <p className="mt-1 text-xs text-[#9ca3af]">{project.date}</p>
              </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-xs text-[#374151]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 text-center">
          <h3 className="[font-family:var(--font-sora)] text-3xl font-semibold text-[#1f2937]">Komuna Community Website</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#6b7280]">
            A fullstack community platform currently in development — built with React, TypeScript, and a growing design system.
          </p>
          <button onClick={() => navigate("/project/komuna-community-website")} className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a3e] text-white">
            ↗
          </button>
        </div>
      </div>
    </AnimatedSection>
  );
}
