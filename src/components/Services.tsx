import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      id: 1,
      title: "Frontend Development",
      imageLabel: "React + TypeScript",
    },
    {
      id: 2,
      title: "Backend Development",
      imageLabel: "Hono + Cloudflare",
    },
    {
      id: 3,
      title: "Full Stack Apps",
      imageLabel: "End-to-End",
    },
  ];

  return (
    <motion.section
      id="service"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.2 }}
      className="pb-16 md:pb-24"
    >
      <div className="content-wrap">
        <div className="grain overflow-hidden rounded-[2rem] bg-[#101217] p-6 text-white shadow-2xl md:p-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="section-title text-white">
              My <span className="text-[#ff7a3e]">Services</span>
            </h2>
            <p className="hidden max-w-sm text-sm text-white/75 md:block">
              Building reliable web applications with modern frameworks, clean APIs, and scalable infrastructure.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.id} className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-medium">{service.title}</h3>
                <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-[#f0f1f5] to-white p-3">
                  <div className="grid h-full grid-cols-2 gap-2">
                    <div className="rounded-lg bg-[#ebeef5]" />
                    <div className="rounded-lg bg-[#d9dfeb]" />
                    <div className="col-span-2 rounded-lg bg-[#cfd8ea]" />
                  </div>
                  <span className="absolute bottom-2 left-3 text-xs text-[#5f6672]">{service.imageLabel}</span>
                  <button className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#182138] text-lg">
                    ↗
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#ff7a3e]" />
            <span className="h-1.5 w-3 rounded-full bg-white/40" />
            <span className="h-1.5 w-3 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </motion.section>
  );
}
