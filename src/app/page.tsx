"use client";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkExperience from "@/components/WorkExperience";
import WhyHireMe from "@/components/WhyHireMe";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import BlogPosts from "@/components/BlogPosts";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <Services />
      <WorkExperience />
      <WhyHireMe />
      <Portfolio />
      <Testimonials />
      <BlogPosts />
      <Contact />
      <Footer />
    </main>
  );
}
