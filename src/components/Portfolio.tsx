export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Learning Management System",
      category: "Full Stack",
      date: "March 2026",
      inProgress: false,
    },
    {
      id: 2,
      title: "To-do App with Better Stack",
      category: "Frontend",
      date: "April 2026",
      inProgress: false,
    },
    {
      id: 3,
      title: "Telegram Bot with AI Integration",
      category: "Backend / Bot",
      date: "2026",
      inProgress: false,
    },
    {
      id: 4,
      title: "Community Session Bookings",
      category: "Full Stack",
      date: "In Progress",
      inProgress: true,
    },
  ];

  const tags = ["Full Stack", "Frontend", "Backend", "Bot", "API", "In Progress"];

  return (
    <section id="project" className="pb-16 md:pb-24">
      <div className="content-wrap">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <h2 className="section-title max-w-xl">
            Let&apos;s have a look at my <span className="text-[#ff7a3e]">Portfolio</span>
          </h2>
          <button className="btn-primary px-5 py-2 text-sm">See all</button>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1">
              <div className="relative h-52 bg-gradient-to-br from-[#f5f7fb] to-[#dfe7f6] p-4">
                <div className="grid h-full grid-cols-6 gap-2">
                  <div className="col-span-4 rounded-lg bg-white/80" />
                  <div className="col-span-2 rounded-lg bg-[#ced8eb]" />
                  <div className="col-span-2 rounded-lg bg-[#ced8eb]" />
                  <div className="col-span-4 rounded-lg bg-white/85" />
                </div>
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
          ))}
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-xs text-[#374151]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 text-center">
          <h3 className="[font-family:var(--font-sora)] text-3xl font-semibold text-[#1f2937]">Community Session Bookings</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#6b7280]">
            A fullstack bookings platform currently in development — built with React, Hono, and PostgreSQL.
          </p>
          <button className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a3e] text-white">
            ↗
          </button>
        </div>
      </div>
    </section>
  );
}
