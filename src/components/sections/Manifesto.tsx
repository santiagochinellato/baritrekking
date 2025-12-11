import { Container } from "../layout/Container";
import { motion } from "framer-motion";
import { useSanity } from "../../hooks/useSanity";
import { ManifestoValues } from "./manifesto/ManifestoValues";

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
  ctaText?: string;
  ctaLink?: string;
}

const Manifesto = () => {
  const { data: manifestoData } = useSanity<ManifestoData>(
    `*[_type == "manifesto"][0]`
  );

  // Defaults
  const title = manifestoData?.title || "Volver a lo Simple";
  const description =
    manifestoData?.description ||
    "Bari.Trekking nace de la necesidad de conectar con la montaña, conocer gente real y generar vínculos genuinos.";
  const highlight =
    manifestoData?.highlight || "No somos una empresa. Somos una comunidad.";

  const rawValues = manifestoData?.values || [
    {
      title: "Comunidad Real",
      description:
        "Gereramos espacios que facilitan encuentros reales en la naturaleza y en la vida cotidiana con el aporte de cada integrante.",
      icon: "Users",
    },
    {
      title: "Actividades autogestivas",
      description:
        "Formada por Residentes de Bariloche, donde cada salida la propone un miembro y cada uno es responsable de su seguridad y cuidado.",
      icon: "Map",
    },
    {
      title: "Valores Claros",
      description:
        "Funcionamos desde valores que cuidan el espacio: Respeto, Compromiso, Responsabilidad y Comunicación.",
      icon: "Heart",
    },
    {
      title: "Autonomía responsable",
      description:
        "Cada miembro es responsable de su seguridad, equipo y decisiones. Promovemos el respeto entre Miembros y con la Naturaleza.",
      icon: "Shield",
    },
  ];

  const finalValues = (manifestoData?.values || rawValues).map((value) => {
    if (value.title.includes("Actividades autogestivas")) {
      return { ...value, icon: "Map" };
    }
    if (value.title.includes("Autonomía")) {
      return { ...value, icon: "Shield" };
    }
    return value;
  });

  return (
    <section
      id="manifesto"
      className="py-12 md:py-24 bg-white relative overflow-hidden"
    >
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="topo"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M0 100 C 20 0 50 0 100 100 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect
            width="100%"
            height="100%"
            fill="url(#topo)"
            className="text-bari-dark"
          />
        </svg>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-bari-teal/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-bari-orange/5 rounded-full blur-3xl" />
      </div>

      <Container>
        <div className="max-w-4xl mx-auto text-center mb-16 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-heading font-black text-bari-dark tracking-tight mb-6"
          >
            {title}
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="inline-block"
          >
            <span className="text-2xl md:text-4xl font-heading font-bold bg-gradient-to-r from-bari-teal via-bari-darkgreen to-bari-teal bg-clip-text text-transparent hover:scale-105 transition-transform cursor-default block py-2">
              {highlight}
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-bari-slate/80 mt-6 leading-relaxed max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        </div>

        <div className="relative z-10">
          <ManifestoValues values={finalValues} />
        </div>
      </Container>
    </section>
  );
};

export { Manifesto };
