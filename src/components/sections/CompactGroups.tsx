import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import {
  Mountain,
  ShieldAlert,
  Wine,
  Coffee,
  Sparkles,
  Users,
  HeartHandshake,
  ArrowRight,
  Check,
  Calendar,
  GraduationCap,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const CompactGroups = () => {
  const handleJoinClick = () => {
    window.location.href = "#"; // Replace with actual registration link
  };

  const socialBenefits = [
    { name: "Bari.Wine", icon: Wine, emoji: "🍷", desc: "Catas de vino" },
    { name: "Relax Time", icon: Coffee, emoji: "🧉", desc: "Mates y eventos" },
    {
      name: "Bari.Bienestar",
      icon: Sparkles,
      emoji: "🧘🏻‍♀️",
      desc: "Yoga y meditación",
    },
    { name: "Bari.Red", icon: Users, emoji: "🤝", desc: "Red de apoyo" },
  ];

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
            Trekking gratuito para todos, club social con membresía opcional.
          </p>
        </motion.div>

        {/* Compact Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Card A: Trekking Principal - Large with integrated stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 row-span-2"
          >
            <Card className="h-full relative overflow-hidden border-none shadow-xl group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070')",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-bari-teal/95 to-emerald-900/95" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col text-white p-6 md:p-8">
                <CardHeader className="p-0 pb-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start items-center mb-3 gap-3">
                    <motion.div
                      initial={{ scale: 0.9 }}
                      animate={{ scale: 1 }}
                      transition={{
                        repeat: Infinity,
                        duration: 2,
                        repeatType: "reverse",
                      }}
                      className="bg-bari-gold text-bari-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg inline-flex items-center gap-1.5 sm:gap-2"
                    >
                      <span className="text-base sm:text-lg">🎉</span>
                      <span>Acceso Libre / Gratuito</span>
                    </motion.div>
                    <Mountain
                      className="text-white/60 hidden sm:block"
                      size={40}
                    />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-center sm:text-left">
                    Trekking Principal
                  </CardTitle>
                  <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
                    El corazón de Bari.Trekking. Organizamos salidas todo el año
                    para todos los niveles. Descubrí senderos, conocé gente
                    nueva y disfrutá de la montaña.
                  </p>
                </CardHeader>

                <CardContent className="p-0 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
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

                    {/* Integrated Stats */}
                    <div className="border-t border-white/20 pt-4 mt-6">
                      <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 sm:gap-4">
                        {stats.map((stat, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                          >
                            <div className="flex justify-center mb-1">
                              <stat.icon className="text-white/80" size={16} />
                            </div>
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                              {stat.value}
                            </div>
                            <div className="text-[10px] sm:text-xs text-white/70 font-medium uppercase tracking-wide">
                              {stat.label}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button
                    onClick={handleJoinClick}
                    className="mt-4 bg-white text-bari-teal hover:bg-bari-cream font-bold py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all text-base sm:text-lg group w-full sm:max-w-sm sm:mx-0"
                    size="lg"
                  >
                    Unirme al Grupo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Card B: Membresía & Vida Social - Tall */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1 row-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-bari-dark to-gray-800 text-white border-none shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
              <CardHeader className="pb-3">
                <div className="inline-block bg-bari-gold/20 text-bari-gold px-3 py-1 rounded-full text-xs font-bold mb-3">
                  MEMBRESÍA OPCIONAL
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold text-bari-gold">
                  Club Social
                </CardTitle>
                <p className="text-gray-400 text-sm mt-2">
                  Accedé a todos los grupos de vida social
                </p>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col justify-between">
                {/* Benefits List */}
                <div className="space-y-3 mb-6">
                  {socialBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xl">{benefit.emoji}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="font-semibold text-sm">
                          {benefit.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {benefit.desc}
                        </div>
                      </div>
                      <Check className="text-bari-gold" size={18} />
                    </motion.div>
                  ))}
                </div>

                {/* Sticky Footer: Price & Button */}
                <div className="border-t border-white/10 pt-6 mt-auto">
                  <div className="text-center mb-4">
                    <div className="text-4xl font-bold text-white">
                      $5.000
                      <span className="text-lg text-gray-400 font-normal">
                        /mes
                      </span>
                    </div>
                  </div>
                  <Button
                    onClick={handleJoinClick}
                    className="bg-bari-orange hover:bg-bari-orange/90 text-white w-full py-6 text-lg font-bold rounded-full"
                    size="lg"
                  >
                    Acceder Ahora
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Card C: Prevención y Seguridad - Larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1 row-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-orange-50 to-white border-2 border-bari-orange/30 hover:border-bari-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bari-orange/10 rounded-full -mr-16 -mt-16" />
              <div className="relative p-6">
                <div className="flex flex-col sm:flex-row sm:items-center items-start gap-4 mb-4">
                  <div className="bg-bari-orange/20 p-3 rounded-lg">
                    <ShieldAlert className="text-bari-orange" size={32} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-bari-dark">
                    Prevención y Seguridad
                  </CardTitle>
                </div>
                <p className="text-bari-dark text-sm sm:text-base font-medium leading-relaxed mb-4">
                  Espacio dedicado a aprender y cuidarnos. Info sobre
                  equipamiento, clima y seguridad en montaña.
                </p>
                <div className="inline-flex items-center gap-2 text-bari-orange text-xs sm:text-sm font-semibold">
                  <ShieldAlert size={16} />
                  <span>Tu seguridad es prioridad</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card D: Comunidad - Larger */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 row-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-green-50 to-white border-2 border-green-200 hover:border-green-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 p-6 md:p-8">
                <div className="bg-green-100 p-3 sm:p-4 rounded-xl flex-shrink-0">
                  <HeartHandshake className="text-green-600" size={32} />
                </div>
                <div className="flex-grow">
                  <CardTitle className="text-xl sm:text-2xl md:text-3xl font-bold text-bari-dark mb-2 sm:mb-3">
                    Comunidad
                  </CardTitle>
                  <p className="text-bari-dark text-sm sm:text-base md:text-lg font-medium leading-relaxed mb-3 sm:mb-4">
                    Acciones voluntarias, cuidado del entorno y proyectos
                    colaborativos para hacer la diferencia juntos.
                  </p>
                  <div className="inline-flex items-center gap-2 text-green-600 text-sm sm:text-base font-semibold">
                    <HeartHandshake size={18} />
                    <span>Juntos hacemos más</span>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { CompactGroups };
