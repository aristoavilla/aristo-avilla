import { motion } from "framer-motion";

export default function WhyHireMe() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.32 }}
      className="pb-16 md:pb-24"
    >
      <div className="content-wrap">
        <div className="glass-panel relative overflow-visible rounded-[2rem] p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1.1fr_0.9fr]">
            <div className="relative z-10">
              <h2 className="section-title">
                Why <span className="text-[#ff7a3e]">Hire me?</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm text-[#6b7280]">
                I build fullstack applications that are fast, maintainable, and solve real problems — from a clean UI down to the database and deployment.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="[font-family:var(--font-sora)] text-3xl font-semibold">4+</p>
                  <p className="text-xs text-[#6b7280]">Projects Built & Shipped</p>
                </div>
                <div>
                  <p className="[font-family:var(--font-sora)] text-3xl font-semibold">Remote</p>
                  <p className="text-xs text-[#6b7280]">Available Worldwide</p>
                </div>
              </div>

              <button className="btn-primary mt-8">Hire me</button>
            </div>

            <div className="relative flex justify-center md:justify-end">
              <div className="absolute right-[-12%] bottom-[-8%] h-[440px] w-[320px] rounded-[3rem] bg-[#f5a565]/40 blur-3xl md:h-[580px] md:w-[420px]" />
              <div className="relative z-10 h-[460px] w-[320px] overflow-visible md:h-[620px] md:w-[430px]">
                <div className="absolute inset-x-6 bottom-10 h-24 rounded-[999px] bg-[#f5a565]/80 blur-xl" />
                <img
                  src="https://i.ibb.co.com/fzG661gf/1.png"
                  alt="Aristo Avilla"
                  className="absolute right-[-6%] bottom-[-10%] h-[100%] w-[100%] object-contain object-bottom drop-shadow-[0_32px_60px_rgba(24,33,56,0.18)] md:right-[-14%] md:bottom-[-12%] md:h-[112%] md:w-[112%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
