import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { Button } from "../../ui/Button";

interface RequirementsListProps {
  title: string;
  intro: string;
  list: string[];
  ctaText?: string;
  ctaLink?: string;
}

export const RequirementsList = ({
  title,
  intro,
  list,
  ctaText,
  ctaLink,
}: RequirementsListProps) => {
  return (
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
          onClick={() => (window.location.href = ctaLink || "#")}
        >
          {ctaText || "¿Cumplís los requisitos? Sumate Ahora"}
        </Button>
      </div>
    </motion.div>
  );
};
