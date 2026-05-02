export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Lirante - Food Delivery Solution",
      category: "Landing Page",
    },
    {
      id: 2,
      title: "Sugee Asset Management",
      category: "Product Design",
    },
    {
      id: 3,
      title: "Cinetrade Mobile",
      category: "Animation",
    },
  ];

  const tags = ["Landing Page", "Product Design", "Animation", "Glassmorphism", "Cards"];

  return (
    <section id="project" className="pb-16 md:pb-24">
      <div className="content-wrap">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <h2 className="section-title max-w-xl">
            Let&apos;s have a look at my <span className="text-[#ff7a3e]">Portfolio</span>
          </h2>
          <button className="btn-primary px-5 py-2 text-sm">See all</button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.id} className="overflow-hidden rounded-3xl bg-white shadow-lg transition hover:-translate-y-1">
              <div className="relative h-52 bg-gradient-to-br from-[#f5f7fb] to-[#dfe7f6] p-4">
                <div className="grid h-full grid-cols-6 gap-2">
                  <div className="col-span-4 rounded-lg bg-white/80" />
                  <div className="col-span-2 rounded-lg bg-[#ced8eb]" />
                  <div className="col-span-2 rounded-lg bg-[#ced8eb]" />
                  <div className="col-span-4 rounded-lg bg-white/85" />
                </div>
                <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#ff7a3e] shadow">
                  ↗
                </button>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ff7a3e]">{project.category}</p>
                <h3 className="mt-1 text-xl font-semibold text-[#1f2937]">{project.title}</h3>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2">
          <span className="h-1.5 w-8 rounded-full bg-[#ff7a3e]" />
          <span className="h-1.5 w-3 rounded-full bg-[#d1d5db]" />
          <span className="h-1.5 w-3 rounded-full bg-[#d1d5db]" />
        </div>

        <div className="mt-6 flex flex-wrap justify-center gap-2">
          {tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#d1d5db] bg-white px-4 py-1.5 text-xs text-[#374151]">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 text-center">
          <h3 className="[font-family:var(--font-sora)] text-3xl font-semibold text-[#1f2937]">Lirante - Food Delivery Solution</h3>
          <p className="mx-auto mt-2 max-w-2xl text-sm text-[#6b7280]">
            A conversion-focused design system built for speed, consistency, and effortless user journeys.
          </p>
          <button className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#ff7a3e] text-white">
            ↗
          </button>
        </div>
      </div>
    </section>
  );
}
