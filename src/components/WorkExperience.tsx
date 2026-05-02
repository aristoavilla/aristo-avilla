export default function WorkExperience() {
  const experiences = [
    {
      id: 1,
      company: "Cognizant, Mumbai",
      position: "Experience Designer",
      years: "Sep 2016 - July 2020",
    },
    {
      id: 2,
      company: "Sugee Pvt limited, Mumbai",
      position: "UI/UX Designer",
      years: "Sep 2020 - July 2023",
    },
    {
      id: 3,
      company: "Cineistox, Mumbai",
      position: "Lead UX Designer",
      years: "Sep 2023",
    },
  ];

  return (
    <section id="resume" className="pb-16 md:pb-24">
      <div className="content-wrap">
        <h2 className="section-title text-center">
          My <span className="text-[#ff7a3e]">Work Experience</span>
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
                <p className="mt-2 text-sm text-[#6b7280]">
                  Improving digital experiences through clean interaction patterns and modern visual language.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
