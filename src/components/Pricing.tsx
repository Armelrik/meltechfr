import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pricing = () => {
  const navigate = useNavigate();

  const packs = [
    {
      name: "Starter",
      price: "190€",
      period: "",
      description: "Idéal pour une première présence en ligne professionnelle",
      features: [
        "Site vitrine responsive (jusqu’à 5 pages)",
        "Design personnalisé selon votre marque",
        "Formulaire de contact intelligent",
        "Optimisation SEO de base",
        "Hébergement 1 an inclus",
        "Création de 2 emails professionnels",
        "Support et maintenance gratuits les 3 premiers mois",
        "Option maintenance : dès 50€/mois ensuite",
      ],
      popular: false,
    },
    {
      name: "Pro",
      price: "490€",
      period: "",
      description: "Conçu pour les entreprises ambitieuses",
      features: [
        "Site web complet + espace client ou admin",
        "Design sur mesure premium",
        "Optimisation SEO avancée & Google Analytics",
        "Intégrations API & outils externes",
        "Formation à la gestion du site",
        "Hébergement 1 an inclus",
        "10 emails professionnels",
        "Support et maintenance gratuits 3 mois",
        "Option maintenance : dès 100€/mois ensuite",
      ],
      popular: true,
    },
    {
      name: "Premium",
      price: "Sur devis",
      period: "Dès 1 000 €",
      description: "Solution digitale complète et évolutive",
      features: [
        "Site web + Application mobile (iOS & Android)",
        "Design & UX/UI premium",
        "Fonctionnalités avancées illimitées",
        "Backend personnalisé et sécurisation avancée",
        "Formation complète de l’équipe",
        "Hébergement & support 1 an inclus",
        "Évolutions continues et mises à jour planifiées",
        "Option maintenance : dès 150€/mois après 3 mois offerts",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Nos <span className="text-gradient">Packs One-Off</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des offres clés en main avec 3&nbsp;mois de maintenance gratuite,
            puis un abonnement simple et flexible.
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
                <p className="text-sm text-muted-foreground ">
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
                variant={pack.popular ? "secondary" : "outline"}
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
