export default function WhyHireMe() {
  return (
    <section className="pb-16 md:pb-24">
      <div className="content-wrap">
        <div className="glass-panel overflow-hidden rounded-[2rem] p-6 md:p-10">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="flex justify-center md:justify-start">
              <div className="relative">
                <div className="absolute bottom-0 left-0 h-52 w-52 rounded-[2rem] bg-[#f5a565]" />
                <div className="relative z-10 flex h-64 w-52 items-center justify-center rounded-[2rem] bg-gradient-to-b from-[#ff925c] to-[#ff7a3e] text-center text-white shadow-xl">
                  <div>
                    <p className="text-5xl font-semibold">AA</p>
                    <p className="text-sm">Product Designer</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="section-title">
                Why <span className="text-[#ff7a3e]">Hire me?</span>
              </h2>
              <p className="mt-4 max-w-lg text-sm text-[#6b7280]">
                I create product experiences that connect user needs with measurable business outcomes.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <p className="[font-family:var(--font-sora)] text-3xl font-semibold">450+</p>
                  <p className="text-xs text-[#6b7280]">Projects Completed</p>
                </div>
                <div>
                  <p className="[font-family:var(--font-sora)] text-3xl font-semibold">120+</p>
                  <p className="text-xs text-[#6b7280]">Happy Partners</p>
                </div>
              </div>

              <button className="btn-primary mt-8">Hire me</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
