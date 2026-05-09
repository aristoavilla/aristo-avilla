import AnimatedSection from "@/components/AnimatedSection";
import { StaggerContainer, StaggerItem } from "@/components/StaggerContainer";

export default function BlogPosts() {
  const blogPosts = [
    {
      id: 1,
      title: "The Science of UX/UI Design",
      date: "15 Aug, 2024",
      category: "Design",
      image: "📐",
    },
    {
      id: 2,
      title: "Design System Best Practices",
      date: "10 Aug, 2024",
      category: "Design",
      image: "🎨",
    },
    {
      id: 3,
      title: "Web Design Trends 2024",
      date: "05 Aug, 2024",
      category: "Web Design",
      image: "🌐",
    },
  ];

  return (
    <AnimatedSection className="py-14 md:py-20">
      <div className="content-wrap">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <h2 className="section-title">
            From my
            <br />
            <span className="text-[#ff7a3e]">blog post</span>
          </h2>
          <button className="btn-primary px-5 py-2 text-sm">See all</button>
        </div>

        <StaggerContainer className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <StaggerItem key={post.id}>
              <article className="overflow-hidden rounded-2xl bg-white shadow-lg transition hover:-translate-y-1">
              <div className="relative h-56 p-4">
                <div className="h-full rounded-2xl bg-gradient-to-br from-[#d5dcf6] via-[#a4b6e8] to-[#7f97db]" />
                <button className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-[#182138] text-white">
                  ↗
                </button>
              </div>
              <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#ff7a3e]">{post.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-[#1f2937]">{post.title}</h3>
                <p className="mt-3 text-xs text-[#6b7280]">{post.date}</p>
              </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </AnimatedSection>
  );
}
