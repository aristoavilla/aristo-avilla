import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkExperience from "@/components/WorkExperience";
import WhyHireMe from "@/components/WhyHireMe";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ProjectDetail from "@/pages/ProjectDetail";

function HomePage() {
  return (
    <motion.main initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.35 }} className="min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <Services />
      <WorkExperience />
      <WhyHireMe />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
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
