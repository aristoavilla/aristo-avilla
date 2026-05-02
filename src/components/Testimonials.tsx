export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "CEO, Tech Startup",
      text: "Aristo transformed our product with exceptional design. Their attention to detail and user-centric approach made all the difference.",
      rating: 5,
    },
    {
      id: 2,
      name: "Mike Chen",
      title: "Product Manager, E-commerce",
      text: "Outstanding work! The design not only looks beautiful but also improved our conversion rates significantly.",
      rating: 5,
    },
    {
      id: 3,
      name: "Emma Wilson",
      title: "Founder, Digital Agency",
      text: "Working with Aristo was a pleasure. Professional, creative, and always delivers on time.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="pb-16 md:pb-24">
      <div className="content-wrap">
        <div className="grain overflow-hidden rounded-[2rem] bg-[#101217] px-6 py-12 text-white md:px-8">
          <h2 className="text-center [font-family:var(--font-sora)] text-4xl font-semibold md:text-5xl">
            Testimonials that
            <br />
            speak to my <span className="text-[#ff7a3e]">Results</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-sm text-white/70">
            Clients trust my process because every project starts with strategy and ends with outcomes.
          </p>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-4 flex gap-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-[#ff7a3e]">★</span>
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-white/80">{testimonial.text}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-[#ff7a3e]">{testimonial.title}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
