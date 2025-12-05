import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { Container } from "./Container";
import { cn } from "../../lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Inicio", href: "#hero" },
    { name: "Manifiesto", href: "#manifesto" },
    { name: "Espacios", href: "#groups" },
  ];

  const handleCTAClick = () => {
    window.location.href = "#"; // Replace with actual registration link
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
        isMobileMenuOpen ? "bg-white/95 " : ""
      )}
    >
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-all duration-300"
          >
            <motion.img
              src="https://i.ibb.co/LfhB81V/btLogo.webp"
              alt="Bari.Trekking Logo"
              className={cn(
                "transition-all duration-300",
                isScrolled
                  ? "w-12 sm:w-14 md:w-16 lg:w-20"
                  : "w-14 sm:w-16 md:w-20 lg:w-24"
              )}
              whileHover={{ scale: 1.05 }}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
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
              Unirme Ahora
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden z-50 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-bari-dark" : ""} size={24} />
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
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="absolute  h-[calc(100vh-4rem)] left-0 right-0 backdrop-blur-xl bg-white/95 shadow-2xl  md:hidden"
        >
          <div className="flex flex-col gap-1 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-bari-dark font-semibold text-lg hover:text-bari-teal py-3 px-4 rounded-lg hover:bg-bari-cream/50 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button
              className="w-full bg-bari-orange hover:bg-bari-orange/90 mt-4 py-6 text-lg font-bold"
              onClick={() => {
                handleCTAClick();
                setIsMobileMenuOpen(false);
              }}
              size="lg"
            >
              Unirme Ahora
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};

export { Navbar };
