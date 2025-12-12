import { motion, type Variants } from "framer-motion";
import { Container } from "../layout/Container";
import { useSanity } from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";
// import logoSrc from "../../assets/images/btLogo.webp";
import { Button } from "../ui/Button";

interface HeroData {
  title1: string;
  title2: string;
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

interface HeroProps {
  isLoading?: boolean;
}

const Hero = ({ isLoading = false }: HeroProps) => {
  const { data: heroData } = useSanity<HeroData>(`*[_type == "hero"][0]`);
  const { data: navbarData } = useSanity<NavbarData>(`*[_type == "navbar"][0]`);

  const logoSrc = navbarData?.logo
    ? urlFor(navbarData.logo).url()
    : "https://i.ibb.co/LfhB81V/btLogo.webp";

  // Default values while loading or if no data
  const subtitle =
    heroData?.subtitle ||
    "Somos residentes de Bariloche creando un espacio para encontrarnos, compartiendo senderos y experiencias que nos hacen bien.";
  const bgImage = heroData?.backgroundImage
    ? urlFor(heroData.backgroundImage).width(1920).url()
    : "/realHero.webp";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const titleWrapperVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger between title lines
      },
    },
  };

  const title1 = heroData?.title1 || "Somos mucho más que Trekking.";
  const title2 = heroData?.title2 || "Somos Comunidad.";

  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Comunidad Bari.Trekking"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bari-darkgreen/90 via-bari-darkgreen/20 to-bari-darkgreen/50" />
      </div>

      <Container className="relative z-10 text-center px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isLoading ? "hidden" : "visible"}
          className="space-y-4 md:space-y-8  mx-auto flex flex-col items-center"
        >
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-6"
          >
            <img
              src={logoSrc}
              alt="Bari Trekking Logo"
              className="w-48 md:w-56 drop-shadow-2xl"
            />
          </motion.div>

          <motion.h1
            variants={titleWrapperVariants}
            className="text-[26px] md:text-6xl font-heading font-bold text-white tracking-tight drop-shadow-2xl leading-tight w-full flex flex-col items-center uppercase drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          >
            <motion.span variants={itemVariants} className="text-bari-orange">
              {title1}
            </motion.span>
            <motion.span variants={itemVariants} className="text-bari-white">
              {title2}
            </motion.span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] text-lg md:text-2xl text-white/90 max-w-2xl mx-auto font-heading font-medium leading-relaxed"
          >
            {subtitle}
          </motion.p>

          <motion.div variants={itemVariants} whileHover={{ scale: 1.05 }}>
            <Button
              className="bg-bari-orange hover:bg-bari-orange/90 text-white font-bold text-lg px-8 py-4 rounded-full w- md:w-auto min-h-[48px] shadow-lg lg:hidden"
              onClick={() => (window.location.href = "#groups")}
            >
              Sumate si vivís acá
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Hero };
