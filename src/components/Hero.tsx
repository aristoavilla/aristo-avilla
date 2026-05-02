export default function Hero() {
  return (
    <section id="about" className="pb-16 pt-4 md:pb-24">
      <div className="content-wrap">
        <div className="relative mx-auto max-w-5xl">
          <div className="mb-5 flex justify-center">
            <span className="rounded-full border border-black/20 bg-white px-4 py-1 text-xs">Hello!</span>
          </div>

          <h1 className="text-center [font-family:var(--font-sora)] text-4xl font-bold leading-tight md:text-7xl">
            I&apos;m <span className="text-[#ff7a3e]">Aristo,</span>
            <br />
            Product Designer
          </h1>

          <div className="relative mt-10 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="text-center md:text-left">
              <p className="mx-auto max-w-[220px] text-sm text-[#5f6672] md:mx-0">
                Aristo&apos;s design process balances business goals, usability, and visual identity.
              </p>
            </div>

            <div className="relative mx-auto">
              <div className="absolute inset-x-0 bottom-0 h-36 rounded-t-[999px] bg-[#f5a565] md:h-44" />
              <div className="relative z-10 flex h-72 w-56 items-center justify-center rounded-[2.5rem] bg-gradient-to-b from-[#ff9058] to-[#ff7a3e] shadow-2xl md:h-80 md:w-64">
                <div className="text-center text-white">
                  <p className="text-5xl font-semibold">AA</p>
                  <p className="mt-1 text-sm opacity-90">Aristo Avilla</p>
                </div>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-[#ff7a3e]">★★★★★</p>
              <p className="[font-family:var(--font-sora)] text-4xl font-semibold text-[#1f2937]">10 Years</p>
              <p className="text-xs text-[#5f6672]">Experience</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-3">
            <button className="btn-primary">Portfolio</button>
            <button className="btn-secondary">Hire me</button>
          </div>
        </div>
      </div>
    </section>
  );
}
