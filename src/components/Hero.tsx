import { motion } from "framer-motion";
import useTypeEffect from "@/hooks/useTypeEffect";

export default function Hero() {
  const { typedText, showCursor } = useTypeEffect("I'm Aristo, Fullstack Developer");
  const prefix = "I'm ";
  const name = "Aristo,";
  const prefixText = typedText.slice(0, Math.min(prefix.length, typedText.length));
  const nameText = typedText.slice(prefix.length, prefix.length + name.length);
  const roleText = typedText.slice(prefix.length + name.length);

  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.12 }}
      className="relative overflow-visible pb-16 pt-4 md:pb-24"
    >
      <div className="content-wrap">
        <div className="relative mx-auto max-w-5xl overflow-visible pb-24 md:pb-32">
          <div className="mb-5 flex justify-center">
            <span className="rounded-full border border-black/20 bg-white px-4 py-1 text-xs">Hello!</span>
          </div>

          <h1 className="text-center [font-family:var(--font-sora)] text-4xl font-bold leading-tight md:text-7xl">
            <span>{prefixText}</span>
            <span className="text-[#ff7a3e]">{nameText}</span>
            <br />
            <span>{roleText}</span>
            <span className={`ml-1 inline-block h-[1em] w-[0.15em] translate-y-[0.08em] bg-[#ff7a3e] ${showCursor ? "opacity-100" : "opacity-0"}`} />
          </h1>

          <div className="relative mt-10 flex justify-center -mb-10 md:-mb-14">
            <div className="relative z-10 w-full max-w-3xl">
              <div className="absolute left-1/2 top-[46%] h-56 w-[90%] -translate-x-1/2 rounded-[999px] bg-[#f5a565]/80 blur-2xl md:h-80" />

              <div className="relative mx-auto h-[420px] w-[320px] overflow-visible md:h-[520px] md:w-[420px]">
                <div className="absolute inset-x-4 bottom-6 h-20 rounded-[999px] bg-[#f5a565]/80 blur-xl" />
                <div className="absolute inset-x-0 bottom-0 h-[86%] overflow-hidden rounded-[3rem] shadow-none md:h-[90%]">
                  <img
                    src="https://i.ibb.co.com/wZC9Zh8B/3.png"
                    alt="Aristo Avilla"
                    className="h-full w-full object-cover object-top"
                  />
                </div>

                <div className="absolute inset-x-0 bottom-10 z-20 flex justify-center gap-3 md:bottom-12">
                  <a href="#project" className="btn-primary shadow-xl">
                    Portfolio
                  </a>
                  <a href="#contact" className="btn-secondary shadow-xl">
                    Hire me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
