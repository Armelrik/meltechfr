import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Lock } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";

/**
 * ⚠️ SECURITY WARNING ⚠️
 * This implementation uses hardcoded credentials stored in the code.
 * This is EXTREMELY INSECURE and should NEVER be used in production.
 * Anyone can view the source code and discover these credentials.
 * Use proper authentication with Lovable Cloud for production apps.
 */

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  // ⚠️ HARDCODED CREDENTIALS - INSECURE ⚠️
  const ADMIN_USERNAME = "armel";
  const ADMIN_PASSWORD = "love@1992";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate network delay
    setTimeout(() => {
      if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        // ⚠️ localStorage can be easily manipulated by attackers
        localStorage.setItem("admin_auth", "true");
        toast({
          title: "Connexion réussie",
          description: "Bienvenue dans l'espace administration",
        });
        navigate("/admin/dashboard");
      } else {
        toast({
          title: "Erreur de connexion",
          description: "Identifiants incorrects",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 500);
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="glass-strong p-8 rounded-2xl w-full max-w-md space-y-6 animate-fade-in-up border border-white/20">
          <div className="text-center space-y-2">
            <div className="flex justify-center">
              <div className="glass-card p-4 rounded-full">
                <Lock className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Administration</h1>
            <p className="text-muted-foreground">Connectez-vous pour gérer le site</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Nom d'utilisateur</Label>
              <Input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Entrez votre nom d'utilisateur"
                required
                className="glass-card border-white/20"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre mot de passe"
                required
                className="glass-card border-white/20"
              />
            </div>

            <Button
              type="submit"
              variant="hero"
              className="w-full"
              disabled={isLoading}
            >
              {isLoading ? "Connexion..." : "Se connecter"}
            </Button>
          </form>

          <div className="text-center">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="text-muted-foreground hover:text-foreground"
            >
              Retour au site
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
