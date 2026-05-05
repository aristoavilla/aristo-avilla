import { motion } from "framer-motion";

export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      company: "Remote",
      position: "Junior Web Developer Assistant",
      years: "2026 - Present",
      description: "Working remotely to assist in building and maintaining web applications using modern fullstack technologies.",
    },
    {
      id: 2,
      company: "Vocational High School",
      position: "Top Graduate · Class of 2025",
      years: "Graduated 2025",
      description: "Graduated as one of the highest score achievers in the class of 2025 with a focus on software engineering.",
      achievements: ["Overall Score 90", "TOEIC 850 · Advanced English"],
    },
    {
      id: 3,
      company: "City-Level Competitions",
      position: "Competitions & Awards",
      years: "2024 – 2025",
      description: "Represented the school in city-level technology competitions across software and cybersecurity disciplines.",
      achievements: ["2nd Place · Business App Development", "3rd Place · Cybersecurity"],
    },
  ];

  return (
    <motion.section
      id="resume"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.26 }}
      className="pb-16 md:pb-24"
    >
      <div className="content-wrap">
        <h2 className="section-title text-center">
          My <span className="text-[#ff7a3e]">Experience & Education</span>
        </h2>

        <div className="mx-auto mt-10 max-w-5xl space-y-8">
          {experiences.map((exp) => (
            <div key={exp.id} className="grid gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-8">
              <div>
                <h3 className="text-2xl font-semibold text-[#1f2937]">{exp.company}</h3>
                <p className="text-sm text-[#6b7280]">{exp.years}</p>
              </div>

              <div className="relative flex justify-center">
                <span className="h-full w-px bg-[#cbd5e1]" />
                <span className="absolute top-2 h-4 w-4 rounded-full border-2 border-white bg-[#ff7a3e] shadow" />
              </div>

              <div>
                <h4 className="text-3xl font-semibold text-[#1f2937]">{exp.position}</h4>
                <p className="mt-2 text-sm text-[#6b7280]">{exp.description}</p>
                {"achievements" in exp && exp.achievements && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {exp.achievements.map((a) => (
                      <span key={a} className="rounded-full border border-[#ff7a3e]/30 bg-[#fff4ef] px-3 py-1 text-xs font-medium text-[#ff7a3e]">
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
