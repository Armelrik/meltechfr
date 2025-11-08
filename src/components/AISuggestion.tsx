import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Sparkles, Send } from "lucide-react";
import { toast } from "sonner";

const AISuggestion = () => {
  const [description, setDescription] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const handleInputChange = (value: string) => {
    setDescription(value);

    // Simple keyword-based suggestions
    const keywords = value.toLowerCase();
    const newSuggestions: string[] = [];

    if (
      keywords.includes("e-commerce") ||
      keywords.includes("vente") ||
      keywords.includes("boutique")
    ) {
      newSuggestions.push("Ajouter un système de paiement sécurisé");
      newSuggestions.push("Intégrer une gestion de stock");
      newSuggestions.push("Mettre en place un système de livraison");
    }

    if (
      keywords.includes("blog") ||
      keywords.includes("article") ||
      keywords.includes("contenu")
    ) {
      newSuggestions.push("Créer un système de publication");
      newSuggestions.push("Ajouter un espace commentaires");
      newSuggestions.push("Optimiser pour le SEO");
    }

    if (
      keywords.includes("app") ||
      keywords.includes("mobile") ||
      keywords.includes("application")
    ) {
      newSuggestions.push("Version iOS et Android");
      newSuggestions.push("Notifications push");
      newSuggestions.push("Mode hors ligne");
    }

    if (keywords.includes("réservation") || keywords.includes("booking")) {
      newSuggestions.push("Calendrier de disponibilité");
      newSuggestions.push("Système de confirmation automatique");
      newSuggestions.push("Rappels par email");
    }

    setSuggestions(newSuggestions);
  };

  const handleSubmit = () => {
    if (!description.trim()) {
      toast.error("Veuillez décrire votre besoin");
      return;
    }

    // In a real app, this would send to contact@meltech.fr
    toast.success("Demande envoyée ! Nous vous recontacterons rapidement.");
    setDescription("");
    setSuggestions([]);
  };

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">Assisté par IA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Décrivez votre <span className="text-gradient">besoin</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Notre IA vous aide à préciser votre projet et vous suggère des
              fonctionnalités adaptées
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl animate-scale-in">
            <Textarea
              placeholder="Exemple : J'ai besoin d'un site e-commerce pour vendre des produits cosmétiques..."
              value={description}
              onChange={(e) => handleInputChange(e.target.value)}
              className="min-h-[150px] glass border-white/20 text-foreground placeholder:text-muted-foreground resize-none mb-6"
            />

            {suggestions.length > 0 && (
              <div className="mb-6 animate-fade-in">
                <h4 className="text-sm font-semibold mb-3 text-muted-foreground">
                  💡 Suggestions IA :
                </h4>
                <div className="space-y-2">
                  {suggestions.map((suggestion, index) => (
                    <div
                      key={index}
                      className="glass p-3 rounded-lg text-sm hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      ✓ {suggestion}
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Button
              variant="link"
              size="lg"
              className="w-full"
              onClick={handleSubmit}
            >
              <Send className="mr-2 w-4 h-4" />
              Envoyer ma demande
            </Button>

            <p className="text-xs text-muted-foreground text-center mt-4">
              Votre demande sera envoyée à contact@meltech.fr
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISuggestion;
