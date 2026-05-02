import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WorkExperience from "@/components/WorkExperience";
import WhyHireMe from "@/components/WhyHireMe";
import Portfolio from "@/components/Portfolio";
import TechStack from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <main className="min-h-screen overflow-x-clip">
      <Header />
      <Hero />
      <Services />
      <WorkExperience />
      <WhyHireMe />
      <Portfolio />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
