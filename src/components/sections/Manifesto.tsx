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
        "Generamos espacios que facilitan encuentros reales en la naturaleza y en la vida cotidiana con el aporte de cada integrante.",
      icon: "Users",
    },
    {
      title: "Actividades autogestivas",
      description:
        "Formada por Residentes de Bariloche, donde cada salida la propone un miembro y cada uno es responsable de su seguridad y cuidado.",
      icon: "Compass",
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

  // Force icons for specific titles to ensure they match content regardless of CMS data
  const values = rawValues.map((value) => {
    if (value.title === "Actividades autogestivas") {
      return { ...value, icon: "Compass" };
    }
    if (value.title === "Autonomía responsable") {
      return { ...value, icon: "Shield" };
    }
    return value;
  });

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

        <ManifestoValues values={values} />
      </Container>
    </section>
  );
};

export { Manifesto };
