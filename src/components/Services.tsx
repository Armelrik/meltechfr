import { Button } from "@/components/ui/button";
import {
  Globe,
  Smartphone,
  Package,
  Wrench,
  GraduationCap,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import serviceWeb from "@/assets/service-web.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import service1 from "@/assets/service1.jpg";
import service2 from "@/assets/service2.jpg";
import service3 from "@/assets/service3.jpg";
import service4 from "@/assets/service4.jpg";
import service5 from "@/assets/service5.jpg";
import serviceSupport from "@/assets/service-support.jpg";
import { Helmet } from "react-helmet-async";

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      icon: Globe,
      title: "Création de sites web",
      description:
        "Sites vitrines, e-commerce, landing pages... Nous créons votre présence en ligne sur mesure.",
      image: service1,
    },
    {
      icon: Smartphone,
      title: "Applications mobiles",
      description:
        "Apps iOS et Android natives ou cross-platform pour atteindre vos utilisateurs partout.",
      image: service4,
    },
    {
      icon: Package,
      title: "Pack Site + App",
      description:
        "Solution complète pour une expérience digitale unifiée et cohérente.",
      image: service3,
    },
    {
      icon: Wrench,
      title: "Maintenance & Support",
      description:
        "Votre projet reste performant et sécurisé avec notre support technique continu.",
      image: serviceSupport,
    },
    {
      icon: GraduationCap,
      title: "Formation",
      description:
        "Prenez en main vos outils digitaux avec nos formations personnalisées.",
      image: service2,
    },
    {
      icon: Briefcase,
      title: "Business",
      description: "Offres personnalisées pour votre entreprise.",
      image: service5,
    },
  ];

  return (
    <>
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Nos <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Des solutions digitales complètes pour concrétiser vos ambitions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="glass-card p-6 rounded-2xl group cursor-pointer animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => navigate("/services")}
                >
                  <div className="relative overflow-hidden rounded-xl mb-6 h-48">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="glass p-3 rounded-lg">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>

                  <Button variant="secondary" className="w-full group">
                    En savoir plus
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
