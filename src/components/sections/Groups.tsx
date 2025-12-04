import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import {
  Mountain,
  ShieldAlert,
  Users,
  ArrowRight,
  TrendingUp,
  Calendar,
  GraduationCap,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const Groups = () => {
  const handleJoinClick = () => {
    window.location.href = "#"; // Replace with actual registration link
  };

  const stats = [
    { label: "Salidas", value: "200+", icon: Mountain },
    { label: "Miembros", value: "1034", icon: Users },
    { label: "Eventos", value: "120", icon: Calendar },
    { label: "Cursos", value: "10", icon: GraduationCap },
    { label: "Acciones", value: "8", icon: Heart },
  ];

  return (
    <section id="groups" className="py-24 bg-bari-cream">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-heading font-bold text-bari-dark">
            Nuestros Espacios
          </h2>
          <p className="text-lg text-bari-slate max-w-2xl mx-auto">
            Diferentes grupos para diferentes momentos. Elegí dónde querés
            participar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)]">
          {/* Main Card - Trekking Principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 row-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-bari-teal to-[#1a3c25] text-white border-none shadow-xl overflow-hidden group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CardHeader className="relative pb-2">
                <div className="flex justify-between items-start mb-3">
                  {/* Enhanced Badge */}
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      repeatType: "reverse",
                    }}
                    className="bg-bari-gold text-bari-dark px-4 py-2 rounded-full text-sm font-bold shadow-lg inline-flex items-center gap-2"
                  >
                    <span className="text-lg">🎉</span>
                    Acceso Libre / Gratuito
                  </motion.div>
                  <Mountain className="text-white/60" size={40} />
                </div>
                <CardTitle className="text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight">
                  Trekking Principal
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10 flex-grow flex flex-col justify-between ">
                <div className="space-y-4">
                  <p className="text-white/95 text-base md:text-lg leading-relaxed">
                    El corazón de Bari.Trekking. Organizamos salidas todo el año
                    para todos los niveles. Descubrí senderos, conocé gente
                    nueva y disfrutá de la montaña en un ambiente seguro.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                      🥾 Principiantes
                    </span>
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                      ⛰️ Intermedios
                    </span>
                    <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium">
                      🏔️ Avanzados
                    </span>
                  </div>
                </div>
                <div className="flex justify-end w-full">
                  <Button
                    onClick={handleJoinClick}
                    className="mt-4 bg-white text-bari-teal hover:bg-bari-cream font-bold py-6 rounded-full shadow-lg hover:shadow-xl transition-all text-lg group max-w-sm  self-end"
                    size="lg"
                  >
                    Unirme al Grupo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Stats Card - Community in Numbers */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <Card className="h-full bg-gradient-to-r from-bari-teal/10 to-bari-orange/10 border border-bari-teal/20 hover:shadow-lg transition-shadow">
              <CardContent className="py-6 h-full flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="text-bari-teal" size={24} />
                  <h3 className="text-xl font-bold text-bari-dark">
                    Nuestra Comunidad en Números
                  </h3>
                </div>
                <div className="grid grid-cols-5 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center mb-2">
                        <stat.icon className="text-bari-teal" size={24} />
                      </div>
                      <div className="text-2xl font-bold text-bari-dark">
                        {stat.value}
                      </div>
                      <div className="text-xs text-bari-slate">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Enhanced Prevention Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 lg:col-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-orange-50 to-white border-2 border-bari-orange/30 hover:border-bari-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bari-orange/10 rounded-full -mr-16 -mt-16" />
              <CardHeader className="relative">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-bari-orange/20 p-2 rounded-lg">
                    <ShieldAlert className="text-bari-orange" size={28} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-bari-dark">
                    Prevención y Seguridad
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-bari-dark text-base font-medium leading-relaxed">
                  Espacio dedicado a aprender y cuidarnos. Info sobre
                  equipamiento, clima y seguridad en montaña.
                </p>
                <div className="mt-4 inline-flex items-center gap-2 text-bari-orange text-sm font-semibold">
                  <ShieldAlert size={16} />
                  <span>Tu seguridad es prioridad</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { Groups };
