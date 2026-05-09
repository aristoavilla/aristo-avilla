import AnimatedSection from "@/components/AnimatedSection";
import useTypeEffect from "@/hooks/useTypeEffect";

export default function Hero() {
  const { typedText, showCursor } = useTypeEffect("I'm Aristo, Fullstack Developer");
  const prefix = "I'm ";
  const name = "Aristo,";
  const prefixText = typedText.slice(0, Math.min(prefix.length, typedText.length));
  const nameText = typedText.slice(prefix.length, prefix.length + name.length);
  const roleText = typedText.slice(prefix.length + name.length);

  return (
    <AnimatedSection
      id="about"
      className="relative overflow-visible pb-8 pt-0 md:pb-12"
    >
      <div className="content-wrap">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-white/70 px-5 pb-0 pt-6 shadow-[0_24px_70px_rgba(24,33,56,0.12)] backdrop-blur md:min-h-[690px] md:rounded-[2.5rem] md:px-12 md:pt-10">
          <div className="absolute inset-x-[20%] top-8 h-40 rounded-[999px] bg-[#ff7a3e]/10 blur-3xl" />
          <div className="items-center gap-4 md:grid md:grid-cols-[0.98fr_1.02fr] md:gap-6">
            <div className="relative z-20 pt-1 text-center md:pt-0 md:text-left">
              <div className="mb-3 flex justify-center md:justify-start">
                <span className="rounded-full border border-black/20 bg-white px-4 py-1 text-xs">Hello!</span>
              </div>

              <h1 className="[font-family:var(--font-sora)] text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
                <span>{prefixText}</span>
                <span className="text-[#ff7a3e]">{nameText}</span>
                <br />
                <span>{roleText}</span>
                <span className={`ml-1 inline-block h-[1em] w-[0.15em] translate-y-[0.08em] bg-[#ff7a3e] ${showCursor ? "opacity-100" : "opacity-0"}`} />
              </h1>

              <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-[#6b7280] md:mx-0 md:text-base">
                I turn thoughtful interfaces into fast, reliable fullstack products with clean code and a sharp eye for detail.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-3 md:justify-start">
                <a href="#project" className="btn-primary shadow-xl">
                  Portfolio
                </a>
                <a href="#contact" className="btn-secondary shadow-xl">
                  Hire me
                </a>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-4 text-left">
                <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
                  <p className="[font-family:var(--font-sora)] text-2xl font-semibold">4+</p>
                  <p className="mt-1 text-xs text-[#6b7280]">Projects shipped</p>
                </div>
                <div className="rounded-2xl border border-black/5 bg-white/70 p-4 shadow-sm">
                  <p className="[font-family:var(--font-sora)] text-2xl font-semibold">Remote</p>
                  <p className="mt-1 text-xs text-[#6b7280]">Available worldwide</p>
                </div>
              </div>
            </div>

            <div className="relative z-10 mx-auto flex min-h-[420px] w-full justify-center self-end md:min-h-[620px] md:justify-end">
              <div className="absolute bottom-8 left-1/2 h-64 w-[88%] -translate-x-1/2 rounded-[999px] bg-[#f5a565]/75 blur-2xl md:bottom-16 md:h-80 md:w-[82%]" />

              <div className="relative mt-0 h-[440px] w-[330px] overflow-visible md:h-[640px] md:w-[500px]">
                <div className="absolute inset-x-4 bottom-6 h-20 rounded-[999px] bg-[#f5a565]/80 blur-xl md:bottom-12" />
                <div className="absolute inset-x-0 bottom-0 h-[92%] overflow-hidden rounded-[3rem] md:h-[95%]">
                  <img
                    src="https://cdn.jsdelivr.net/gh/aristoavilla/aristo-avilla@master/public/images/3.webp"
                    alt="Aristo Avilla"
                    width="480"
                    height="620"
                    loading="eager"
                    decoding="async"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
