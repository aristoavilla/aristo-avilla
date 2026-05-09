import { Suspense, lazy } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import LazySection from "@/components/LazySection";
import ProjectDetail from "@/pages/ProjectDetail";

const Hero = lazy(() => import("@/components/Hero"));
const Services = lazy(() => import("@/components/Services"));
const WorkExperience = lazy(() => import("@/components/WorkExperience"));
const WhyHireMe = lazy(() => import("@/components/WhyHireMe"));
const Portfolio = lazy(() => import("@/components/Portfolio"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

function SectionFallback() {
  return <div className="min-h-[50vh]" />;
}

function HomePage() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35 }}
      className="min-h-screen overflow-x-clip"
    >
      <Header />

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="about">
          <Hero />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="service">
          <Services />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="resume">
          <WorkExperience />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="why-hire-me">
          <WhyHireMe />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="project">
          <Portfolio />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="skills">
          <Testimonials />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <LazySection id="contact">
          <Contact />
        </LazySection>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <Footer />
      </Suspense>
    </motion.main>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:projectSlug" element={<ProjectDetail />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
