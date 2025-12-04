import { Container } from "../layout/Container";
import {
  Mountain,
  Users,
  Calendar,
  GraduationCap,
  Heart,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: "Salidas", value: "200+", icon: Mountain },
  { label: "Miembros", value: "1034", icon: Users },
  { label: "Eventos", value: "120", icon: Calendar },
  { label: "Cursos", value: "10", icon: GraduationCap },
  { label: "Acciones", value: "8", icon: Heart },
];

const StatsTicker = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-bari-teal/5 via-bari-cream to-bari-orange/5 border-y border-bari-teal/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <TrendingUp className="text-bari-teal" size={20} />
          <h3 className="text-sm font-bold text-bari-dark uppercase tracking-wide">
            Nuestra Comunidad en Números
          </h3>
        </motion.div>

        <div className="grid grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-2">
                <div className="w-12 h-12 rounded-full bg-bari-teal/10 flex items-center justify-center">
                  <stat.icon className="text-bari-teal" size={20} />
                </div>
              </div>
              <div className="text-3xl md:text-4xl font-bold text-bari-dark mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-bari-slate font-medium uppercase tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { StatsTicker };
