import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpeg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Accueil", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const handleNavClick = (path: string) => {
    setIsOpen(false);
    if (path === location.pathname) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleCTA = () => {
    if (location.pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } else {
      navigate("/contact");
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-strong shadow-lg" : "glass"
      } border-b border-white/10`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavClick("/")}
            className="flex items-center space-x-3 group"
          >
            <img
              src={logo}
              alt="Meltech France Logo"
              className="h-12 w-12 object-contain transition-transform group-hover:scale-110 group-hover:rotate-3"
            />
            <span className="text-xl font-bold text-foreground hidden sm:block">
              Meltech France
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive(link.path)
                    ? "bg-white/20 text-foreground font-semibold scale-105"
                    : "text-muted-foreground hover:bg-white/10 hover:text-foreground hover:scale-105"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button Desktop */}
          <div className="hidden md:block">
            <Button
              variant="secondary"
              size="default"
              onClick={handleCTA}
              className="group"
            >
              <span className="group-hover:scale-110 inline-block transition-transform">
                Se lancer
              </span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg glass-card transition-all hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 animate-scale-in" />
            ) : (
              <Menu className="h-6 w-6 animate-scale-in" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 rounded-lg transition-all animate-fade-in ${
                    isActive(link.path)
                      ? "bg-white/20 text-foreground font-semibold"
                      : "text-muted-foreground hover:bg-white/10 hover:text-foreground"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                variant="secondary"
                size="default"
                className="mt-4 animate-fade-in"
                style={{ animationDelay: "0.3s" }}
                onClick={handleCTA}
              >
                Se lancer
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
