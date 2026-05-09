import AnimatedSection from "@/components/AnimatedSection";

export default function WhyHireMe() {
  return (
    <AnimatedSection
      className="pb-16 md:pb-24"
    >
      <div className="content-wrap">
        <div className="glass-panel relative overflow-hidden rounded-[2rem] p-6 md:min-h-[560px] md:p-10">
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
              <div className="absolute right-[-8%] bottom-[-12%] h-[420px] w-[320px] rounded-[3rem] bg-[#f5a565]/40 blur-3xl md:h-[540px] md:w-[410px]" />
              <div className="relative z-10 h-[380px] w-[300px] overflow-visible md:h-[500px] md:w-[390px]">
                <div className="absolute inset-x-6 bottom-8 h-24 rounded-[999px] bg-[#f5a565]/80 blur-xl" />
                <img
                  src="https://cdn.jsdelivr.net/gh/aristoavilla/aristo-avilla@master/public/images/1.webp"
                  alt="Aristo Avilla"
                  width="430"
                  height="620"
                  loading="lazy"
                  decoding="async"
                  className="absolute right-[-4%] bottom-0 h-[108%] w-[108%] -translate-y-8 object-contain object-bottom drop-shadow-[0_32px_60px_rgba(24,33,56,0.18)] md:right-[-8%] md:h-[120%] md:w-[120%] md:translate-y-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
