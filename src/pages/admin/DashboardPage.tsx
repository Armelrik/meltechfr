import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { LogOut, Image, Menu, Mail, DollarSign, Users } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import Navbar from "@/components/Navbar";

const DashboardPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogout = () => {
    localStorage.removeItem("admin_auth");
    toast({
      title: "Déconnexion réussie",
      description: "À bientôt !",
    });
    navigate("/admin/login");
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({
        title: "Image uploadée",
        description: `L'image ${type} a été mise à jour avec succès`,
      });
    }
  };

  const handleSave = (section: string) => {
    toast({
      title: "Modifications sauvegardées",
      description: `Les changements de la section ${section} ont été enregistrés`,
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      <Navbar />
      
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="glass-strong p-8 rounded-2xl border border-white/20 animate-fade-in-up">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">
                  Tableau de bord Admin
                </h1>
                <p className="text-muted-foreground">
                  Gérez le contenu de votre site web
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleLogout}
                className="glass-card border-white/20"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Déconnexion
              </Button>
            </div>

            <Tabs defaultValue="images" className="space-y-6">
              <TabsList className="glass-card border border-white/20">
                <TabsTrigger value="images">
                  <Image className="mr-2 h-4 w-4" />
                  Images
                </TabsTrigger>
                <TabsTrigger value="navbar">
                  <Menu className="mr-2 h-4 w-4" />
                  Navbar
                </TabsTrigger>
                <TabsTrigger value="contact">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact
                </TabsTrigger>
                <TabsTrigger value="pricing">
                  <DollarSign className="mr-2 h-4 w-4" />
                  Tarifs
                </TabsTrigger>
                <TabsTrigger value="testimonials">
                  <Users className="mr-2 h-4 w-4" />
                  Témoignages
                </TabsTrigger>
              </TabsList>

              {/* Images Tab */}
              <TabsContent value="images" className="space-y-6">
                <div className="glass-card p-6 rounded-xl border border-white/20 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Gestion des images</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="logo">Logo</Label>
                      <Input
                        id="logo"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "logo")}
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="hero-bg">Image d'arrière-plan Hero</Label>
                      <Input
                        id="hero-bg"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "hero")}
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service-web">Image Service Web</Label>
                      <Input
                        id="service-web"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "service-web")}
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service-mobile">Image Service Mobile</Label>
                      <Input
                        id="service-mobile"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "service-mobile")}
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service-support">Image Service Support</Label>
                      <Input
                        id="service-support"
                        type="file"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, "service-support")}
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>
                  </div>

                  <Button onClick={() => handleSave("images")} variant="hero">
                    Sauvegarder les images
                  </Button>
                </div>
              </TabsContent>

              {/* Navbar Tab */}
              <TabsContent value="navbar" className="space-y-6">
                <div className="glass-card p-6 rounded-xl border border-white/20 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Configuration Navbar</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="site-name">Nom du site</Label>
                      <Input
                        id="site-name"
                        defaultValue="Meltech France"
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="cta-text">Texte du bouton CTA</Label>
                      <Input
                        id="cta-text"
                        defaultValue="Se lancer"
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>
                  </div>

                  <Button onClick={() => handleSave("navbar")} variant="hero">
                    Sauvegarder la navbar
                  </Button>
                </div>
              </TabsContent>

              {/* Contact Tab */}
              <TabsContent value="contact" className="space-y-6">
                <div className="glass-card p-6 rounded-xl border border-white/20 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Informations de contact</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        defaultValue="contact@meltech.fr"
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        defaultValue="+33 1 23 45 67 89"
                        className="glass-card border-white/20 mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address">Adresse</Label>
                      <Textarea
                        id="address"
                        defaultValue="123 Avenue des Champs-Élysées, 75008 Paris, France"
                        className="glass-card border-white/20 mt-2"
                        rows={3}
                      />
                    </div>
                  </div>

                  <Button onClick={() => handleSave("contact")} variant="hero">
                    Sauvegarder les contacts
                  </Button>
                </div>
              </TabsContent>

              {/* Pricing Tab */}
              <TabsContent value="pricing" className="space-y-6">
                <div className="glass-card p-6 rounded-xl border border-white/20 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Gestion des tarifs</h3>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-4">
                      <h4 className="font-semibold">Pack Starter</h4>
                      <Input
                        placeholder="Prix"
                        defaultValue="499€"
                        className="glass-card border-white/20"
                      />
                      <Textarea
                        placeholder="Description"
                        className="glass-card border-white/20"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Pack Pro</h4>
                      <Input
                        placeholder="Prix"
                        defaultValue="999€"
                        className="glass-card border-white/20"
                      />
                      <Textarea
                        placeholder="Description"
                        className="glass-card border-white/20"
                        rows={4}
                      />
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-semibold">Pack Premium</h4>
                      <Input
                        placeholder="Prix"
                        defaultValue="1999€"
                        className="glass-card border-white/20"
                      />
                      <Textarea
                        placeholder="Description"
                        className="glass-card border-white/20"
                        rows={4}
                      />
                    </div>
                  </div>

                  <Button onClick={() => handleSave("pricing")} variant="hero">
                    Sauvegarder les tarifs
                  </Button>
                </div>
              </TabsContent>

              {/* Testimonials Tab */}
              <TabsContent value="testimonials" className="space-y-6">
                <div className="glass-card p-6 rounded-xl border border-white/20 space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Témoignages clients</h3>
                  
                  <div className="space-y-6">
                    <div className="space-y-4 p-4 glass-card rounded-lg">
                      <h4 className="font-semibold">Témoignage 1</h4>
                      <Input
                        placeholder="Nom du client"
                        defaultValue="Gérard"
                        className="glass-card border-white/20"
                      />
                      <Input
                        placeholder="Profession"
                        defaultValue="Vendeur de garba"
                        className="glass-card border-white/20"
                      />
                      <Textarea
                        placeholder="Témoignage"
                        className="glass-card border-white/20"
                        rows={3}
                      />
                    </div>

                    <Button variant="outline" className="glass-card border-white/20">
                      Ajouter un témoignage
                    </Button>
                  </div>

                  <Button onClick={() => handleSave("testimonials")} variant="hero">
                    Sauvegarder les témoignages
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
