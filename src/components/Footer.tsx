import { motion } from "framer-motion";

const socials = [
  { label: "Instagram", handle: "@aristoavilla", href: "https://instagram.com/aristoavilla" },
  { label: "GitHub", handle: "@aristoavilla", href: "https://github.com/aristoavilla" },
  { label: "LinkedIn", handle: "@aristoavilla", href: "https://linkedin.com/in/aristoavilla" },
  { label: "Facebook", handle: "Aristo Availa", href: "https://facebook.com/aristo.availa" },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.62 }}
      className="rounded-t-[2rem] bg-[#1b1c20] px-4 py-12 text-gray-300 md:px-8"
    >
      <div className="content-wrap">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <h2 className="[font-family:var(--font-sora)] text-4xl font-semibold text-white md:text-5xl">Lets Connect</h2>
          <button className="btn-primary px-6 py-2 text-sm">Hire me ↗</button>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-lg font-semibold text-white">ARISTO</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Fullstack web developer building fast, modern web applications with React, TypeScript, and Cloudflare-powered backends.
            </p>
            <div className="mt-4 flex flex-col gap-1">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-400 hover:text-[#ff7a3e]"
                >
                  {s.label} · {s.handle}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Navigation</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#about" className="hover:text-[#ff7a3e]">Home</a></li>
              <li><a href="#about" className="hover:text-[#ff7a3e]">About</a></li>
              <li><a href="#service" className="hover:text-[#ff7a3e]">Services</a></li>
              <li><a href="#resume" className="hover:text-[#ff7a3e]">Resume</a></li>
              <li><a href="#project" className="hover:text-[#ff7a3e]">Projects</a></li>
              <li><a href="#skills" className="hover:text-[#ff7a3e]">Skills</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="mailto:aristoavilla@gmail.com" className="hover:text-[#ff7a3e]">aristoavilla@gmail.com</a></li>
              <li><a href="tel:+6281234567890" className="hover:text-[#ff7a3e]">+62 812-3456-7890</a></li>
              <li><span>Indonesia</span></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-white">Get the latest information</h4>
            <form className="flex rounded-full bg-white p-1">
              <input
                type="email"
                placeholder="Email Address"
                className="h-10 flex-1 rounded-full px-3 text-sm text-gray-800 outline-none"
              />
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ff7a3e] text-white">➤</button>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
          <p>Copyright 2026 aristo.avilla. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-[#ff7a3e]">User Terms</a>
            <a href="#" className="hover:text-[#ff7a3e]">Conditions</a>
            <a href="#" className="hover:text-[#ff7a3e]">Privacy Policy</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
