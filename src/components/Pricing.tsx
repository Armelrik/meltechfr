import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const packs = [
    {
      name: "Starter",
      price: "290€",
      period: "/projet",
      description: "Parfait pour démarrer votre présence digitale",
      features: [
        "Site vitrine responsive (5 pages)",
        "Design personnalisé",
        "Optimisation SEO de base",
        "Formulaire de contact",
        "Hébergement 1 an inclus",
        "Support email",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "490€",
      period: "/projet",
      description: "Pour des projets ambitieux et complets",
      features: [
        "Site web ou app mobile complète",
        "Design sur mesure premium",
        "SEO avancé & Analytics",
        "Espace client / admin",
        "Intégrations API",
        "Formation incluse",
        "Support prioritaire 6 mois",
        "Maintenance 3 mois offerte",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "Sur mesure",
      period: "",
      description: "Solution complète pour maximiser votre impact",
      features: [
        "Site + App mobile (iOS & Android)",
        "Design & UX/UI premium",
        "Fonctionnalités avancées illimitées",
        "Backend personnalisé",
        "Intégrations complexes",
        "Formation complète de l'équipe",
        "Support & maintenance 12 mois",
        "Évolutions continues",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-gradient">Prix</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des tarifs transparents adaptés à vos besoins et votre budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packs.map((pack, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-2xl relative animate-scale-in ${
                pack.popular ? "border-2 border-primary glow" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {pack.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="gradient-bg px-4 py-1 rounded-full text-white text-sm font-semibold">
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2">{pack.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {pack.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-gradient">
                    {pack.price}
                  </span>
                  {pack.period && (
                    <span className="text-muted-foreground">{pack.period}</span>
                  )}
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pack.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="glass p-1 rounded-full mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pack.popular ? "secondary" : "link"}
                size="lg"
                className="w-full"
                onClick={() => navigate("/contact")}
              >
                Choisir ce pack
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
