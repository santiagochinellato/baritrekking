import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { Container } from "../layout/Container";
import { ChevronDown } from "lucide-react";
import { useSanity } from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";

interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: unknown;
  ctaText: string;
}

const Hero = () => {
  const { data: heroData } = useSanity<HeroData>(`*[_type == "hero"][0]`);

  const scrollToManifesto = () => {
    document
      .getElementById("manifesto")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  // Default values while loading or if no data
  // const title = heroData?.title || "CONECTAR COMPARTIR SER COMUNIDAD";
  const subtitle =
    heroData?.subtitle ||
    "Somos residentes de Bariloche creando un espacio para encontrarnos, caminar y compartir experiencias.";
  const bgImage = heroData?.backgroundImage
    ? urlFor(heroData.backgroundImage).width(1920).url()
    : "public/realHero.webp";
  const ctaText = heroData?.ctaText || "Explorá la Comunidad";

  // Function to render title with line breaks if it contains them, or custom logic
  // For now, we'll assume the user enters the full string.
  // If we want to maintain the specific styling of "SER COMUNIDAD" in orange,
  // we might need a Portable Text field or simple string splitting.
  // Let's try to parse the default title structure if it matches.

  const renderTitle = () => {
    if (!heroData?.title) {
      return (
        <>
          <span className="text-bari-orange drop-shadow-lg">CONECTAR</span>
          <br />
          COMPARTIR
          <br />
          SER COMUNIDAD
        </>
      );
    }

    const words = heroData.title.split(" ");
    return (
      <>
        <span className="text-bari-orange drop-shadow-lg">{words[0]}</span>
        {words.length > 1 && " " + words.slice(1).join(" ")}
      </>
    );
  };

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Comunidad Bari.Trekking"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bari-teal/50 via-bari-teal/20 to-bari-teal/60" />
      </div>

      <Container className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white tracking-tight drop-shadow-2xl leading-tight">
            {renderTitle()}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-light leading-relaxed">
            {subtitle}
          </p>

          <div className="pt-8">
            <Button
              onClick={scrollToManifesto}
              size="lg"
              className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6 rounded-full transition-all duration-300 group"
            >
              {ctaText}
              <ChevronDown className="ml-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Hero };
