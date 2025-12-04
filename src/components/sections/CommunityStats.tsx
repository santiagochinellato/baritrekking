import { Container } from "../layout/Container";
import { Mountain, Users, Calendar, GraduationCap, Heart } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  {
    id: 1,
    label: "Salidas a la Montaña",
    value: 200,
    icon: Mountain,
    color: "text-bari-teal",
  },
  {
    id: 2,
    label: "Miembros Activos",
    value: 1034,
    icon: Users,
    color: "text-bari-orange",
  },
  {
    id: 3,
    label: "Eventos Sociales",
    value: 120,
    icon: Calendar,
    color: "text-bari-gold",
  },
  {
    id: 4,
    label: "Cursos Compartidos",
    value: 10,
    icon: GraduationCap,
    color: "text-indigo-600",
  },
  {
    id: 5,
    label: "Acciones Benéficas",
    value: 8,
    icon: Heart,
    color: "text-red-500",
  },
];

const CountUp = ({ end, duration = 2 }: { end: number; duration?: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
};

const CommunityStats = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-bari-cream to-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-bari-dark mb-4">
            Nuestra Comunidad en Números
          </h2>
          <p className="text-lg text-bari-slate max-w-2xl mx-auto">
            Cada salida, cada encuentro, cada acción construye algo más grande
            que nosotros.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="mb-4 flex justify-center">
                <div
                  className={`w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center ${stat.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon size={32} />
                </div>
              </div>
              <div className="text-4xl md:text-5xl font-bold text-bari-dark mb-2">
                <CountUp end={stat.value} />
              </div>
              <div className="text-sm text-bari-slate font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export { CommunityStats };
