import { motion } from "framer-motion";
import { Container } from "../layout/Container";
import { useSanity } from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";

interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: unknown;
}

interface NavbarData {
  logo?: {
    asset: {
      _ref: string;
    };
  };
}

const Hero = () => {
  const { data: heroData } = useSanity<HeroData>(`*[_type == "hero"][0]`);
  const { data: navbarData } = useSanity<NavbarData>(`*[_type == "navbar"][0]`);

  const logoSrc = navbarData?.logo
    ? urlFor(navbarData.logo).url()
    : "https://i.ibb.co/LfhB81V/btLogo.webp";

  // Default values while loading or if no data
  // const title = heroData?.title || "CONECTAR COMPARTIR SER COMUNIDAD";
  const subtitle =
    heroData?.subtitle ||
    "Somos residentes de Bariloche creando un espacio para encontrarnos, caminar y compartir experiencias.";
  const bgImage = heroData?.backgroundImage
    ? urlFor(heroData.backgroundImage).width(1920).url()
    : "public/realHero.webp";

  // Function to render title with line breaks if it contains them, or custom logic
  // For now, we'll assume the user enters the full string.
  // If we want to maintain the specific styling of "SER COMUNIDAD" in orange,
  // we might need a Portable Text field or simple string splitting.
  // Let's try to parse the default title structure if it matches.

  const renderTitle = () => {
    if (!heroData?.title) {
      return (
        <>
          <span className="text-bari-orange drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
            CONECTAR
          </span>
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
        <span className="text-bari-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">
          {words[0]}
        </span>
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
        <div className="absolute inset-0 bg-gradient-to-b from-bari-teal/90 via-bari-teal/20 to-bari-teal/50" />
      </div>

      <Container className="relative z-10 text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center mb-6"
          >
            <img
              src={logoSrc}
              alt="Bari Trekking Logo"
              className="w-40 md:w-40 lg:w-56 drop-shadow-2xl"
            />
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white tracking-tight drop-shadow-2xl leading-tight">
            {renderTitle()}
          </h1>

          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto font-heading font-medium leading-relaxed">
            {subtitle}
          </p>
        </motion.div>
      </Container>
    </section>
  );
};

export { Hero };
