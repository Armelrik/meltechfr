import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import AISuggestion from "@/components/AISuggestion";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ContactPage from "./ContactPage";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <AISuggestion />
      <Pricing />
      <ContactPage />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
