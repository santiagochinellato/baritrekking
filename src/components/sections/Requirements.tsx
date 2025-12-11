import { Container } from "../layout/Container";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "../ui/Button";
import { useSanity } from "../../hooks/useSanity";

interface RequirementsSourceData {
  requirementsTitle: string;
  requirementsIntro: string;
  requirementsList: string[];
  ctaText?: string;
  ctaLink?: string;
}

const Requirements = () => {
  const { data: sourceData } = useSanity<RequirementsSourceData>(
    `*[_type == "manifesto"][0]`
  );

  // Fallback to previous Manifesto data query if specific type doesn't exist yet,
  // or just use defaults matching the previous file.
  // For now using the same defaults as in Manifesto.

  const title = sourceData?.requirementsTitle || "¿Quiénes pueden sumarse?";
  const intro =
    sourceData?.requirementsIntro ||
    "Para mantener la esencia de nuestro grupo, tenemos algunos requisitos simples pero fundamentales:";
  const list = sourceData?.requirementsList || [
    "Vivir en Bariloche o Dina Huapi",
    "Respetar normas de convivencia y cuidado mutuo",
    "Cuidar el entorno y no dejar rastro",
    "Ser responsable de tu propia seguridad y equipo",
    "Aportar buena energía y ganas de participar",
  ];
  const ctaText =
    sourceData?.ctaText || "¿Cumplís los requisitos? Sumate Ahora";
  const ctaLink = sourceData?.ctaLink || "#";

  return (
    <section
      id="requisitos"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Background decorative - maybe distinct from Manifesto */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-bari-teal rounded-full blur-3xl" />
      </div>

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-gradient-to-br from-bari-teal/5 via-white to-bari-orange/5 rounded-3xl p-8 md:p-12 border-2 border-bari-teal/20 shadow-xl"
        >
          {/* Badge */}
          <div className="absolute w-[calc(100%-4rem)] lg:w-[calc(40%-2rem)] text-center -top-4 left-1/2 -translate-x-1/2 bg-bari-orange text-white px-6 py-2 rounded-full text-md md:text-[22px] font-bold shadow-lg ">
            ⚠️ Requisitos para sumarte
          </div>

          <div className="flex flex-col md:flex-row gap-8 items-center mt-4">
            <div className="flex-1 space-y-6">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-bari-dark text-center lg:text-left">
                {title}
              </h3>
              <p className="text-bari-dark text-lg font-medium">{intro}</p>
            </div>
            <div className="flex-1 w-full">
              <ul className="space-y-4">
                {list.map((item, index) => (
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
              onClick={() => (window.location.href = ctaLink)}
            >
              {ctaText}
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export { Requirements };
