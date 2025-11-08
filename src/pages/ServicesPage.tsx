import {
  Globe,
  Smartphone,
  Package,
  Wrench,
  GraduationCap,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceSupport from "@/assets/service-support.jpg";
import service1 from "@/assets/service1.jpg";
import service2 from "@/assets/service2.jpg";
import service3 from "@/assets/service3.jpg";
import service4 from "@/assets/service4.jpg";
import service5 from "@/assets/service5.jpg";

const ServicesPage = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Globe,
      title: "Création de sites web",
      description:
        "Sites vitrines, e-commerce, landing pages... Nous créons votre présence en ligne sur mesure avec les dernières technologies.",
      image: service1,
      features: [
        "Design responsive et moderne",
        "Optimisation SEO avancée",
        "Performance et rapidité",
        "Sécurité renforcée",
        "Intégrations API",
        "CMS personnalisé",
        "Multi-langues",
        "Analytics intégré",
      ],
      examples: [
        "Sites vitrines corporate",
        "E-commerce / Boutiques en ligne",
        "Landing pages marketing",
        "Portails web d'entreprise",
      ],
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description:
        "Développement d'applications iOS et Android natives ou cross-platform pour atteindre vos utilisateurs partout.",
      image: service4,
      features: [
        "iOS & Android natif",
        "React Native / Flutter",
        "UI/UX optimisée mobile",
        "Notifications push",
        "Mode hors ligne",
        "Géolocalisation",
        "Paiements in-app",
        "Synchronisation cloud",
      ],
      examples: [
        "Apps de livraison",
        "Réseaux sociaux",
        "E-commerce mobile",
        "Apps de productivité",
      ],
    },
    {
      icon: Package,
      title: "Pack Site + App",
      description:
        "Solution complète pour une expérience digitale unifiée et cohérente sur tous les supports.",
      image: service3,
      features: [
        "Design unifié web & mobile",
        "Backend partagé",
        "Synchronisation temps réel",
        "Gestion centralisée",
        "Support multi-plateforme",
        "Déploiement coordonné",
        "Formation complète",
        "Maintenance globale",
      ],
      examples: [
        "Plateformes e-learning",
        "Marketplaces",
        "Services SaaS",
        "Apps de réservation",
      ],
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Votre projet reste performant, sécurisé et à jour avec notre support technique continu.",
      image: serviceSupport,
      features: [
        "Mises à jour régulières",
        "Surveillance 24/7",
        "Sauvegardes automatiques",
        "Corrections de bugs",
        "Optimisations performance",
        "Support technique dédié",
        "Évolutions fonctionnelles",
        "Rapports mensuels",
      ],
      examples: [
        "Maintenance préventive",
        "Support technique",
        "Mises à jour de sécurité",
        "Évolutions continues",
      ],
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description:
        "Prenez en main vos outils digitaux avec nos formations personnalisées adaptées à votre équipe.",
      image: service2,
      features: [
        "Formation sur mesure",
        "Sessions en présentiel ou distanciel",
        "Documentation complète",
        "Supports de cours",
        "Exercices pratiques",
        "Certification",
        "Suivi post-formation",
        "Hotline dédiée",
      ],
      examples: [
        "Prise en main CMS",
        "Gestion des contenus",
        "Administration technique",
        "Best practices digitales",
      ],
    },
  ];

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 pt-32 relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Nos services <span className="text-gradient">détaillés</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Des solutions digitales complètes pour transformer vos idées en
              succès
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          <div className="space-y-20">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                  } gap-12 items-center animate-fade-in`}
                >
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="glass-card p-4 rounded-2xl">
                      <div className="relative overflow-hidden rounded-xl h-[400px]">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-6 left-6 glass p-4 rounded-xl">
                          <Icon className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2">
                    <h2 className="text-4xl font-bold mb-4">{service.title}</h2>
                    <p className="text-xl text-muted-foreground mb-8">
                      {service.description}
                    </p>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Fonctionnalités clés
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {service.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="glass p-1 rounded-full">
                              <Check className="w-3 h-3 text-primary" />
                            </div>
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">
                        Exemples d'utilisation
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.examples.map((example, i) => (
                          <div
                            key={i}
                            className="glass px-4 py-2 rounded-full text-sm"
                          >
                            {example}
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={() => navigate("/contact")}
                    >
                      Demander un devis
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
