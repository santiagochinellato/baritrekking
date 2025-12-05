import { Container } from "../layout/Container";
import { Heart, Users, ShieldCheck, Mountain } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";
import { useSanity } from "../../hooks/useSanity";

interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

interface ManifestoData {
  title: string;
  description: string;
  highlight: string;
  values: ValueItem[];
  requirementsTitle: string;
  requirementsIntro: string;
  requirementsList: string[];
}

const Manifesto = () => {
  const { data: manifestoData } = useSanity<ManifestoData>(
    `*[_type == "manifesto"][0]`
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // Helper to get icon component
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return <Users size={40} />;
      case "Heart":
        return <Heart size={40} />;
      case "Mountain":
        return <Mountain size={40} />;
      default:
        return <Users size={40} />;
    }
  };

  // Helper for icon colors
  const getIconStyles = (iconName: string) => {
    switch (iconName) {
      case "Users":
        return "bg-bari-teal/10 text-bari-teal group-hover:bg-bari-teal";
      case "Heart":
        return "bg-bari-orange/10 text-bari-orange group-hover:bg-bari-orange";
      case "Mountain":
        return "bg-bari-gold/10 text-bari-gold group-hover:bg-bari-gold";
      default:
        return "bg-bari-teal/10 text-bari-teal group-hover:bg-bari-teal";
    }
  };

  // Defaults
  const title = manifestoData?.title || "Volver a lo Simple";
  const description =
    manifestoData?.description ||
    "Bari.Trekking nace de la necesidad de conectar con la montaña, conocer gente real y generar vínculos genuinos.";
  const highlight =
    manifestoData?.highlight || "No somos una empresa. Somos una comunidad.";

  const values = manifestoData?.values || [
    {
      title: "Comunidad Real",
      description:
        "Facilitamos encuentros reales en la naturaleza y en la vida cotidiana. Sin guías, construyendo entre todos.",
      icon: "Users",
    },
    {
      title: "Valores Claros",
      description:
        "Respeto, Compromiso, Responsabilidad y Comunicación son los pilares que sostienen nuestro espacio.",
      icon: "Heart",
    },
    {
      title: "Autonomía",
      description:
        "Cada miembro es responsable de su seguridad, equipo y decisiones. Promovemos la montaña consciente.",
      icon: "Mountain",
    },
  ];

  const reqTitle =
    manifestoData?.requirementsTitle || "¿Quiénes pueden sumarse?";
  const reqIntro =
    manifestoData?.requirementsIntro ||
    "Para mantener la esencia de nuestro grupo, tenemos algunos requisitos simples pero fundamentales:";
  const reqList = manifestoData?.requirementsList || [
    "Vivir en Bariloche o Dina Huapi",
    "Respetar normas de convivencia y cuidado mutuo",
    "Cuidar el entorno y no dejar rastro",
    "Ser responsable de tu propia seguridad y equipo",
    "Aportar buena energía y ganas de participar",
  ];

  return (
    <section id="manifesto" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-bari-teal rounded-full blur-3xl" />
        <div className="absolute top-1/2 right-0 w-64 h-64 bg-bari-orange rounded-full blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-heading font-bold text-bari-dark mb-8 "
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-bari-slate leading-relaxed"
          >
            {description}
            <span className="block mt-4 font-medium text-bari-teal">
              {highlight}
            </span>
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center space-y-4 group cursor-pointer"
            >
              <motion.div
                className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center transition-all group-hover:text-white group-hover:shadow-lg ${getIconStyles(
                  value.icon
                )}`}
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {getIcon(value.icon)}
              </motion.div>
              <h3 className="text-xl font-bold text-bari-dark ">
                {value.title}
              </h3>
              <p className="text-bari-slate">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Requirements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-bari-teal/5 via-white to-bari-orange/5 rounded-3xl p-8 md:p-12 border-2 border-bari-teal/20 shadow-xl"
        >
          {/* Badge */}
          <div className="absolute w-[calc(100%-4rem)] lg:w-[calc(50%-4rem)] text-center -top-4 left-1/2 -translate-x-1/2 bg-bari-orange text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
            ⚠️ Requisitos Importantes
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center mt-4">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-bari-dark text-center lg:text-left">
                {reqTitle}
              </h3>
              <p className="text-bari-dark text-lg font-medium">{reqIntro}</p>
            </div>
            <div className="flex-1 w-full">
              <ul className="space-y-4">
                {reqList.map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 group"
                  >
                    <ShieldCheck className="w-6 h-6 text-bari-teal flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                    <span className="text-bari-dark font-medium text-lg">
                      {item}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA inside requirements */}
          <div className="mt-8 text-center">
            <Button
              className="bg-bari-teal hover:bg-bari-teal/90 text-white font-bold shadow-lg hover:shadow-xl transition-all"
              size="lg"
              onClick={() => (window.location.href = "#")}
            >
              ¿Cumplís los requisitos? Sumate Ahora
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Manifesto };
