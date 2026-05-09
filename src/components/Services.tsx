import AnimatedSection from "@/components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

export default function Services() {
  const brandfetchClientId = "1bxid64Mup7aczewSAYMX";

  const reactLogo = "https://cdn.brandfetch.io/idREYlLkpD/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1746616583363";
  const typescriptLogo = "https://cdn.brandfetch.io/idKX_Hb7va/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1772354699784";
  const cloudflareLogo = "https://cdn.brandfetch.io/idJ3Cg8ymG/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667589504295";
  const honoLogo = `https://cdn.brandfetch.io/hono.dev?c=${brandfetchClientId}`;

  const services = [
    {
      id: 1,
      title: "Frontend Development",
      imageLabel: "React + TypeScript",
      logos: [
        { alt: "React", src: reactLogo },
        { alt: "TypeScript", src: typescriptLogo },
      ],
    },
    {
      id: 2,
      title: "Backend Development",
      imageLabel: "Hono + Cloudflare",
      logos: [
        { alt: "Cloudflare", src: cloudflareLogo },
        { alt: "Hono", src: honoLogo },
      ],
    },
    {
      id: 3,
      title: "Full Stack Apps",
      imageLabel: "End-to-End",
      logos: [
        { alt: "React", src: reactLogo },
        { alt: "TypeScript", src: typescriptLogo },
        { alt: "Cloudflare", src: cloudflareLogo },
        { alt: "Hono", src: honoLogo },
      ],
    },
  ];

  return (
    <AnimatedSection
      id="service"
      className="pt-4 pb-16 md:pt-6 md:pb-24"
    >
      <div className="content-wrap">
        <div className="grain overflow-hidden rounded-[2rem] bg-[#101217] p-6 text-white shadow-2xl md:p-8">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="section-title text-white">
              My <span className="text-[#ff7a3e]">Services</span>
            </h2>
            <p className="hidden max-w-sm text-sm text-white/75 md:block">
              Building reliable web applications with modern frameworks, clean APIs, and scalable infrastructure.
            </p>
          </div>

          <StaggerContainer className="grid gap-5 md:grid-cols-3">
            {services.map((service) => (
              <StaggerItem key={service.id}>
                <div className="rounded-3xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <h3 className="mb-4 text-xl font-medium">{service.title}</h3>
                <div className="relative h-52 overflow-hidden rounded-2xl bg-gradient-to-br from-[#f0f1f5] to-white p-3">
                  <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-2">
                    {service.logos.map((logo) => (
                      <span
                        key={logo.alt}
                        className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#101217] p-2"
                        title={logo.alt}
                      >
                        <img src={logo.src} alt={logo.alt} className="h-5 w-auto" loading="lazy" />
                      </span>
                    ))}
                  </div>

                  <div className="grid h-full grid-cols-2 gap-2">
                    <div className="rounded-lg bg-[#ebeef5]" />
                    <div className="rounded-lg bg-[#d9dfeb]" />
                    <div className="col-span-2 rounded-lg bg-[#cfd8ea]" />
                  </div>
                  <span className="absolute bottom-2 left-3 text-xs text-[#5f6672]">{service.imageLabel}</span>
                  <button className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#182138] text-lg">
                    ↗
                  </button>
                </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className="mt-6 flex justify-center gap-2">
            <span className="h-1.5 w-8 rounded-full bg-[#ff7a3e]" />
            <span className="h-1.5 w-3 rounded-full bg-white/40" />
            <span className="h-1.5 w-3 rounded-full bg-white/30" />
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
