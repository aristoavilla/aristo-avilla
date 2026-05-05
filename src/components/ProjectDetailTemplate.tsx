import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import type { Project } from "@/data/projects";

interface ProjectDetailTemplateProps {
  project: Project;
}

export default function ProjectDetailTemplate({ project }: ProjectDetailTemplateProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen pb-16 pt-8 md:pb-24 md:pt-12"
    >
      <div className="content-wrap">
        <div className="mx-auto max-w-6xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-[#1f2937] shadow-sm transition hover:border-[#ff7a3e] hover:text-[#ff7a3e]"
          >
            <ArrowLeft size={16} />
            Back to home
          </Link>

          <div className="mt-8 overflow-hidden rounded-[2rem] bg-white shadow-[0_24px_80px_rgba(24,33,56,0.12)]">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#f4f4f4]">
              <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-[1.2fr_0.8fr] md:p-10">
              <div>
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-[#fff4ef] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#ff7a3e]">
                    {project.category}
                  </span>
                  <span className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs font-medium text-[#4b5563]">
                    {project.date}
                  </span>
                  <span className="rounded-full bg-[#f3f4f6] px-3 py-1 text-xs font-medium text-[#4b5563]">
                    {project.status}
                  </span>
                </div>

                <h1 className="mt-5 [font-family:var(--font-sora)] text-4xl font-semibold leading-tight text-[#1f2937] md:text-5xl">
                  {project.title}
                </h1>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#6b7280] md:text-base">
                  {project.description}
                </p>

                <div className="mt-8">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9ca3af]">
                    Featured Images
                  </h2>
                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    {project.gallery.map((image) => (
                      <div key={image} className="overflow-hidden rounded-2xl bg-[#f4f4f4] shadow-sm">
                        <img src={image} alt={`${project.title} preview`} className="h-full w-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <aside className="space-y-6 rounded-[1.5rem] bg-[#101217] p-6 text-white md:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff7a3e]">Overview</p>
                  <p className="mt-3 text-sm leading-7 text-white/75">{project.summary}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ff7a3e]">Tech Stack</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span key={technology} className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/80">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm font-medium text-white">Project Link</p>
                  <p className="mt-2 text-sm text-white/70">
                    {project.link ? "Open the live project or source destination from here." : "No live link is available for this project yet."}
                  </p>

                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#ff7a3e] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#ee641f]"
                    >
                      Visit Project
                      <ExternalLink size={16} />
                    </a>
                  ) : (
                    <span className="mt-4 inline-flex rounded-full border border-white/15 px-5 py-3 text-sm font-medium text-white/60">
                      Coming soon
                    </span>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </motion.main>
  );
}
