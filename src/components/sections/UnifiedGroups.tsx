import { Container } from "../layout/Container";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import {
  Mountain,
  ShieldAlert,
  Coffee,
  Wine,
  Sparkles,
  Users,
  HeartHandshake,
  ArrowRight,
  TrendingUp,
  Calendar,
  GraduationCap,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const UnifiedGroups = () => {
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
            Trekking gratuito para todos, grupos sociales con membresía
            opcional.
          </p>
        </motion.div>

        {/* Unified Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Trekking Principal - Hero Card with Background Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:col-span-2 row-span-2"
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
                <CardHeader className="p-0 pb-2">
                  <div className="flex justify-between items-start mb-3">
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
                  <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                    Trekking Principal
                  </CardTitle>
                </CardHeader>

                <CardContent className="p-0 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <p className="text-white/95 text-base md:text-lg leading-relaxed">
                      El corazón de Bari.Trekking. Organizamos salidas todo el
                      año para todos los niveles.
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
                  <Button
                    onClick={handleJoinClick}
                    className="mt-4 bg-white text-bari-teal hover:bg-bari-cream font-bold py-6 rounded-full shadow-lg hover:shadow-xl transition-all text-lg group max-w-sm mx-auto"
                    size="lg"
                  >
                    Unirme al Grupo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
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

          {/* Prevention Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
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

          {/* Membership Card - Now integrated in grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 lg:col-span-2 row-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-bari-dark to-gray-800 text-white border-none shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <CardContent className="p-8 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-bari-gold/20 text-bari-gold px-3 py-1 rounded-full text-xs font-bold mb-4">
                    MEMBRESÍA SOCIAL
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 text-bari-gold">
                    $5.000
                    <span className="text-lg text-gray-400 font-normal">
                      /mes
                    </span>
                  </h3>
                  <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                    Accedé a todos los grupos sociales y de bienestar. Una llave
                    para conectar más allá del trekking.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-bari-gold rounded-full" />
                      <span>Eventos y mates al lago</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-bari-gold rounded-full" />
                      <span>Catas de vino</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-bari-gold rounded-full" />
                      <span>Yoga y bienestar</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-300">
                      <div className="w-1.5 h-1.5 bg-bari-gold rounded-full" />
                      <span>Red de apoyo y comunidad</span>
                    </div>
                  </div>
                </div>
                <Button
                  onClick={handleJoinClick}
                  className="bg-bari-orange hover:bg-bari-orange/90 text-white w-full py-6 text-lg font-bold"
                  size="lg"
                >
                  Acceder Ahora
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Group Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full bg-gradient-to-br from-teal-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-bari-teal/20">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-bari-teal/10 rounded-full flex items-center justify-center">
                  <Coffee className="text-bari-teal" size={32} />
                </div>
                <CardTitle className="text-lg font-bold mb-2 text-bari-dark">
                  Relax Time
                </CardTitle>
                <p className="text-bari-slate text-sm">
                  Mates al lago y eventos sociales
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full bg-gradient-to-br from-red-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-red-200">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <Wine className="text-[#722F37]" size={32} />
                </div>
                <CardTitle className="text-lg font-bold mb-2 text-bari-dark">
                  Bari.Wine
                </CardTitle>
                <p className="text-bari-slate text-sm">
                  Catas de vino patagónico
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card className="h-full bg-gradient-to-br from-indigo-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-indigo-200">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-indigo-500" size={32} />
                </div>
                <CardTitle className="text-lg font-bold mb-2 text-bari-dark">
                  Bari.Bienestar
                </CardTitle>
                <p className="text-bari-slate text-sm">Yoga y meditación</p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-blue-200">
              <CardContent className="p-6 text-center h-full flex flex-col justify-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="text-blue-500" size={32} />
                </div>
                <CardTitle className="text-lg font-bold mb-2 text-bari-dark">
                  Bari.Red
                </CardTitle>
                <p className="text-bari-slate text-sm">
                  Red de apoyo comunitario
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="lg:col-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-green-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-green-200">
              <CardContent className="p-6 flex items-center gap-4 h-full">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="text-green-600" size={32} />
                </div>
                <div>
                  <CardTitle className="text-lg font-bold mb-1 text-bari-dark">
                    Comunidad
                  </CardTitle>
                  <p className="text-bari-slate text-sm">
                    Acciones voluntarias y cuidado del entorno
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { UnifiedGroups };
