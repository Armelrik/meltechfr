import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import AnimatedBackground from "@/components/AnimatedBackground";
import Footer from "@/components/Footer";

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (
      !formData.name ||
      !formData.email ||
      !formData.projectType ||
      !formData.description
    ) {
      toast.error("Veuillez remplir tous les champs obligatoires");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "0fc3fd7e-3751-466f-9b3f-4ff92f348e4b", // Replace with your Web3Forms access key
          subject: `Nouveau contact: ${formData.projectType}`,
          from_name: formData.name,
          email: formData.email,
          message: `
          Nom: ${formData.name}
          Email: ${formData.email}
          Téléphone: ${formData.phone || "Non fourni"}
          Type de projet: ${formData.projectType}
          Budget: ${formData.budget || "Non spécifié"}

Description:
${formData.description}
          `,
          to: "contact@meltech.fr",
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message envoyé ! Nous vous recontacterons rapidement.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          budget: "",
          description: "",
        });
      } else {
        toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Erreur lors de l'envoi. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative">
      <AnimatedBackground />
      <Navbar />

      <div id="contact" className="container mx-auto px-4 py-20 pt-32">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contactez-<span className="text-gradient">nous</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vous avez un projet ? Discutons-en ensemble et donnons vie à vos
              idées
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:contact@meltech.fr"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      contact@meltech.fr
                    </a>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Téléphone</h3>
                    <p className="text-muted-foreground">+33 7 61 93 09 69</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-2xl">
                <div className="flex items-start gap-4">
                  <div className="glass p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Adresse</h3>
                    <p className="text-muted-foreground">
                      Rue Saint-Exupery
                      <br />
                      78500 Sartrouville, France
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="glass-card p-4 rounded-2xl h-64">
                <div className="w-full h-full rounded-xl overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937586!2d2.2944813!3d48.8738219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fec70fb1d8f%3A0x40b82c3688c9460!2sArc%20de%20Triomphe!5e0!3m2!1sen!2sfr!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-scale-in">
              <form
                onSubmit={handleSubmit}
                className="glass-card p-8 rounded-2xl space-y-6"
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Nom complet *
                    </label>
                    <Input
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="glass border-white/20"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      type="email"
                      placeholder="votre@email.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="glass border-white/20"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      placeholder="+33 6 12 34 56 78"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="glass border-white/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Type de projet *
                    </label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, projectType: value })
                      }
                    >
                      <SelectTrigger className="glass border-white/20">
                        <SelectValue placeholder="Sélectionnez" />
                      </SelectTrigger>
                      <SelectContent className="glass-strong border-white/20">
                        <SelectItem value="website">Site web</SelectItem>
                        <SelectItem value="mobile">
                          Application mobile
                        </SelectItem>
                        <SelectItem value="pack">Pack Site + App</SelectItem>
                        <SelectItem value="maintenance">Maintenance</SelectItem>
                        <SelectItem value="other">Autre</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Budget estimé
                  </label>
                  <Select
                    value={formData.budget}
                    onValueChange={(value) =>
                      setFormData({ ...formData, budget: value })
                    }
                  >
                    <SelectTrigger className="glass border-white/20">
                      <SelectValue placeholder="Sélectionnez une fourchette" />
                    </SelectTrigger>
                    <SelectContent className="glass-strong border-white/20">
                      <SelectItem value="<1k">Moins de 300€</SelectItem>
                      <SelectItem value="1k-3k">300€ - 1000€</SelectItem>
                      <SelectItem value="3k-5k">1000€ - 5000€</SelectItem>
                      <SelectItem value="5k-10k">5000€ - 10000€</SelectItem>
                      <SelectItem value="10k+">Plus de 10000€</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Description du projet *
                  </label>
                  <Textarea
                    placeholder="Décrivez-nous votre projet en détail..."
                    value={formData.description}
                    onChange={(e) =>
                      setFormData({ ...formData, description: e.target.value })
                    }
                    className="min-h-[200px] glass border-white/20 resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  <Send className="mr-2 w-4 h-4" />
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  * Champs obligatoires
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ContactPage;
