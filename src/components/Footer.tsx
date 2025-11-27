import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="glass-strong border-t border-white/10 mt-20 relative z-10"
    >
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="text-gradient font-bold text-2xl mb-4">Meltech</div>
            <p className="text-muted-foreground text-sm mb-4">
              Votre partenaire digital pour créer des sites web et applications
              mobiles sur mesure.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Nos services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-muted-foreground">Création de sites web</li>
              <li className="text-muted-foreground">Applications mobiles</li>
              <li className="text-muted-foreground">Pack Site + App</li>
              <li className="text-muted-foreground">Maintenance & Support</li>
              <li className="text-muted-foreground">Formation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:contact@meltech.fr"
                  className="hover:text-foreground transition-colors"
                >
                  contact@meltech.fr
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <a href="https://wa.me/33761930969">+33 7 61 93 09 69</a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>78500 Sartrouville, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Meltech France. Tous droits réservés.
          </div>

          <div className="flex gap-6">
            <Link
              to="/mentions-legales"
              className="hover:text-foreground transition-colors"
            >
              Mentions légales
            </Link>

            <Link
              to="/politique-de-confidentialite"
              className="hover:text-foreground transition-colors"
            >
              Politique de confidentialité
            </Link>

            <Link to="/cgv" className="hover:text-foreground transition-colors">
              CGV
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
