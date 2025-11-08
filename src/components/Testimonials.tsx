import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Gérard M.",
      role: "Restaurateur",
      content:
        "Avec seulement 4 plats vendus par jour, je couvre mon abonnement. Mon site et mon app sont toujours bien maintenus, et mon business a explosé grâce à la visibilité !",
      rating: 4,
    },
    {
      name: "Sophie L.",
      role: "Créatrice de mode",
      content:
        "L'équipe Meltech a transformé mon idée en une boutique en ligne magnifique. Les ventes ont augmenté de 250% en 3 mois. Un service exceptionnel !",
      rating: 3,
    },
    {
      name: "Marc D.",
      role: "Restaurateur",
      content:
        "Application de livraison parfaite, site moderne, et un support toujours disponible. Mes clients adorent commander via l'app. Merci Meltech !",
      rating: 4,
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Ils nous ont fait <span className="text-gradient">confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className="glass w-12 h-12 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-gradient">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
