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
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Meltech — Création de sites web sur mesure</title>
        <meta
          name="description"
          content="Agence digitale Meltech France — Sites web, Apps, UX/UI, conseil digital."
        />
        <meta property="og:image" content="/preview.png" />
      </Helmet>

      <div className="min-h-screen relative">
        <AnimatedBackground />
        <Navbar />
        <Hero />
        <Stats />
        <Services />
        <AISuggestion />
        <Pricing />
        <Testimonials />
        <ContactPage />
        <a
          href="https://wa.me/33761930969"
          className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg z-50 hover:scale-110 transition"
          aria-label="WhatsApp"
        >
          W
        </a>

        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Index;
