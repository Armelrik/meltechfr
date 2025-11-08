import { Button } from "@/components/ui/button";
import { Rocket, Eye } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center animate-fade-in-up">
        <div className="glass-strong max-w-4xl mx-auto p-12 rounded-3xl glow">
          <div className="mb-8 inline-block">
            <div className="glass px-6 py-2 rounded-full border border-white/20">
              <span className="text-gradient font-bold text-lg">
                Meltech France
              </span>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Mettre vos idées en <span className="text-gradient">lumière</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Créateurs de sites web et applications mobiles sur mesure. De l'idée
            au lancement, nous donnons vie à vos projets digitaux.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              variant="secondary"
              size="lg"
              className="group"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Rocket className="mr-2 group-hover:translate-x-1 transition-transform" />
              Se lancer
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              <Eye className="mr-2" />
              Voir nos options
            </Button>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
        <div
          className="absolute bottom-40 right-20 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
