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
            Fullstack Developer
          </h1>

          <div className="relative mt-10 grid items-center gap-6 md:grid-cols-[1fr_auto_1fr]">
            <div className="flex flex-col items-center gap-4 md:items-start">
              <p className="mx-auto max-w-[220px] text-sm text-[#5f6672] md:mx-0">
                Building fast, modern web applications from frontend to backend with clean, scalable code.
              </p>
              <div className="relative h-36 w-28 overflow-hidden rounded-2xl shadow-lg md:h-44 md:w-36">
                <img
                  src="https://i.ibb.co.com/fzG661gf/1.png"
                  alt="Aristo Avilla"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="relative mx-auto">
              <div className="absolute inset-x-0 bottom-0 h-36 rounded-t-[999px] bg-[#f5a565] md:h-44" />
              <div className="relative z-10 h-72 w-56 overflow-hidden rounded-[2.5rem] shadow-2xl md:h-80 md:w-64">
                <img
                  src="https://i.ibb.co.com/wZC9Zh8B/3.png"
                  alt="Aristo Avilla"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 md:items-end">
              <div className="text-center md:text-right">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-green-200 bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Available for work
                </span>
                <p className="mt-3 text-sm font-medium text-[#1f2937]">Remote · Indonesia</p>
                <p className="mt-1 text-xs text-[#5f6672]">Open to opportunities</p>
              </div>
              <div className="relative h-36 w-28 overflow-hidden rounded-2xl shadow-lg md:h-44 md:w-36">
                <img
                  src="https://i.ibb.co.com/BK3YYBFS/2.png"
                  alt="Aristo Avilla"
                  className="h-full w-full object-cover object-top"
                />
              </div>
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
