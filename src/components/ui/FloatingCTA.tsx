import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./Button";

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button after scrolling down 300px
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleClick = () => {
    window.location.href = "#"; // Replace with actual registration link
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
            <span className="font-bold">Unirme Ahora</span>
            <ArrowUp className="h-5 w-5 group-hover:translate-y-[-2px] transition-transform" />
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { FloatingCTA };
