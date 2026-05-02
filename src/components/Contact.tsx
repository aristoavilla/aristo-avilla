export default function Contact() {
  return (
    <section id="contact" className="pb-10 md:pb-14">
      <div className="content-wrap">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="[font-family:var(--font-sora)] text-4xl font-semibold text-[#1f2937] md:text-5xl">
            Have an Awesome Project
            <br />
            Idea? <span className="text-[#ff7a3e]">Let&apos;s Discuss</span>
          </h2>

          <form className="mx-auto mt-8 flex max-w-3xl flex-col gap-3 rounded-full bg-white p-2 shadow-lg md:flex-row">
            <input
              type="email"
              placeholder="Enter Email Address"
              className="h-12 flex-1 rounded-full border border-[#e5e7eb] px-5 text-sm outline-none focus:border-[#ff7a3e]"
            />
            <button type="submit" className="btn-primary h-12 px-8">
              Send
            </button>
          </form>

          <div className="mt-4 flex flex-wrap justify-center gap-6 text-xs text-[#4b5563]">
            <span>+91 9876543210</span>
            <span>aristo.avilla@email.com</span>
            <span>Mumbai, Maharashtra</span>
          </div>
        </div>
      </div>

      <div className="mt-10 overflow-hidden border-y border-[#111827] bg-[#ff7a3e] py-2 text-[#111827]">
        <div className="whitespace-nowrap text-center text-2xl font-medium">
          UX Design ✦ App Design ✦ Dashboard ✦ Wireframe ✦ User Research ✦
        </div>
      </div>
    </section>
  );
}
