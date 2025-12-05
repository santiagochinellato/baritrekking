import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./Button";
import { useSanity } from "../../hooks/useSanity";

interface NavbarData {
  cta: {
    text: string;
    link: string;
  };
}

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { data: navbarData } = useSanity<NavbarData>(`*[_type == "navbar"][0]`);

  const ctaText = navbarData?.cta?.text || "Unirme Ahora";
  const ctaLink = navbarData?.cta?.link || "#";

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;

      const footerRect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if footer is visible in the viewport
      // calculated by checking if the top of the footer is less than the window height
      const isFooterVisible = footerRect.top < windowHeight;

      if (window.pageYOffset > 300 && !isFooterVisible) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.location.href = ctaLink;
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40 md:hidden"
        >
          <Button
            onClick={handleClick}
            className="bg-bari-orange hover:bg-bari-orange/90 text-white rounded-full shadow-2xl px-6 py-3 flex items-center gap-2 group"
            size="lg"
          >
            <span className="font-bold">{ctaText}</span>
            <ArrowUp className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { FloatingCTA };
