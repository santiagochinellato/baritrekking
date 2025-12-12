import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import { cn } from "../../lib/utils";
import { client, urlFor } from "../../lib/sanity";
import { useEffect, useState } from "react";

interface NavbarData {
  logo?: {
    asset: {
      _ref: string;
    };
  };
  links?: {
    name: string;
    href: string;
  }[];
  cta?: {
    text: string;
    link: string;
  };
  cta2?: {
    text: string;
    link: string;
  };
}

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbarData, setNavbarData] = useState<NavbarData | null>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const fetchNavbarData = async () => {
      try {
        const data = await client.fetch('*[_type == "navbar"][0]');
        setNavbarData(data);
      } catch (error) {
        console.error("Error fetching navbar data:", error);
      }
    };

    fetchNavbarData();
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = navbarData?.links || [
    { name: "Inicio", href: "#hero" },
    { name: "Requisitos", href: "#requirements" },
    { name: "Espacios", href: "#groups" },
    { name: "¿Cómo funciona?", href: "#how-it-works" },
  ];

  const logoSrc = navbarData?.logo
    ? urlFor(navbarData.logo).url()
    : "https://i.ibb.co/LfhB81V/btLogo.webp";

  const ctaText = navbarData?.cta?.text || "Unirme Ahora";
  const ctaLink = navbarData?.cta?.link || "#";

  const cta2Text = navbarData?.cta2?.text || "Acceso miembros";
  const cta2Link = navbarData?.cta2?.link || "#";

  const handleCTAClick = () => {
    window.location.href = ctaLink;
  };

  const handleCTA2Click = () => {
    window.location.href = cta2Link;
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "backdrop-blur-md bg-white/90 shadow-md py-3"
          : "bg-transparent py-4",
        isMobileMenuOpen ? "bg-transparent" : "" // Make transparent when menu open so full screen menu shows
      )}
    >
      <Container>
        <nav
          className={cn(
            "flex items-center transition-all duration-500",
            isScrolled ? "justify-between" : "justify-center"
          )}
        >
          {/* Logo - Animate presence */}
          <div
            className={cn(
              "transition-all duration-500 overflow-hidden",
              isScrolled ? "w-auto opacity-100 mr-auto" : "w-0 opacity-0"
            )}
          >
            <a href="#" className="flex items-center gap-2 group">
              <img
                src={logoSrc}
                alt="Bari.Trekking Logo"
                className={cn(
                  "transition-all duration-300",
                  isScrolled ? "w-12 sm:w-14 md:w-16 lg:w-20" : "w-0"
                )}
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-bari-orange",
                  isScrolled ? "text-bari-dark" : "text-white"
                )}
              >
                {link.name}
              </a>
            ))}
            <div className="px-14 flex gap-4">
              <Button
                onClick={handleCTAClick}
                className={cn(
                  "font-semibold shadow-lg transition-all",
                  isScrolled
                    ? "bg-bari-orange hover:bg-bari-orange/90 text-white"
                    : "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                )}
                size="sm"
              >
                {ctaText}
              </Button>
              <Button
                onClick={handleCTA2Click}
                className={cn(
                  "font-semibold shadow-lg transition-all",
                  isScrolled
                    ? "bg-bari-teal hover:bg-bari-teal/90 text-white"
                    : "bg-white/20 backdrop-blur-md border border-white/30 text-white hover:bg-white/30"
                )}
                size="sm"
              >
                {cta2Text}
              </Button>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden z-50 p-2 absolute right-4",
              !isScrolled && "top-4"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-bari-dark" size={32} /> // Always dark on open menu
            ) : (
              <Menu
                className={isScrolled ? "text-bari-dark" : "text-white"}
                size={24}
              />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center lg:hidden"
          >
            <div className="flex flex-col gap-6 p-6 w-full max-w-sm text-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  href={link.href}
                  className="text-bari-dark font-heading font-bold text-3xl hover:text-bari-orange transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 flex flex-col gap-4"
              >
                <Button
                  className="w-full bg-bari-orange hover:bg-bari-orange/90 py-4 text-xl font-bold shadow-xl"
                  onClick={() => {
                    handleCTAClick();
                    setIsMobileMenuOpen(false);
                  }}
                  size="lg"
                >
                  {ctaText}
                </Button>
                <Button
                  className="w-full bg-bari-teal hover:bg-bari-teal/90 py-4 text-xl font-bold shadow-xl"
                  onClick={() => {
                    handleCTA2Click();
                    setIsMobileMenuOpen(false);
                  }}
                  size="lg"
                >
                  {cta2Text}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export { Navbar };
