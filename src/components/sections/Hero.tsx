import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  const scrollToManifesto = () => {
    document
      .getElementById("manifesto")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="public/realHero.webp"
          alt="Comunidad Bari.Trekking"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bari-dark/70 via-bari-dark/40 to-bari-dark/80" />
      </div>

      <Container className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight drop-shadow-2xl leading-tight">
            CONECTAR
            <br />
            COMPARTIR
            <br />
            <span className="text-bari-orange">SER COMUNIDAD</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            Somos residentes de Bariloche creando un espacio para encontrarnos,
            caminar y compartir experiencias.
          </p>

          <div className="pt-8">
            <Button
              onClick={scrollToManifesto}
              size="lg"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-all duration-300 group"
            >
              Explorá la Comunidad
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Hero };
