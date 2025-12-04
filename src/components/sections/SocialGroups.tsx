import { Container } from "../layout/Container";
import { Card, CardContent, CardTitle } from "../ui/Card";
import { Coffee, Wine, Sparkles, Users, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "../ui/Button";

const SocialGroups = () => {
  const handleJoinClick = () => {
    window.location.href = "#"; // Replace with actual registration link
  };

  return (
    <section id="social-groups" className="py-24 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-4xl font-heading font-bold text-bari-dark">
            Grupos Sociales
          </h2>
          <p className="text-lg text-bari-slate max-w-2xl mx-auto">
            Más allá del trekking, espacios para conectar y compartir intereses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Membership Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-2 lg:col-span-3"
          >
            <Card className="bg-gradient-to-br from-bari-dark to-gray-800 text-white border-none shadow-xl">
              <CardContent className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-3 text-bari-gold">
                      Membresía Social
                    </h3>
                    <p className="text-gray-300 text-lg mb-4">
                      Accedé a todos los grupos sociales y de bienestar con una
                      única membresía.
                    </p>
                    <div className="inline-flex items-baseline gap-2">
                      <span className="text-5xl font-bold">$5.000</span>
                      <span className="text-gray-400">/mes</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button
                      onClick={handleJoinClick}
                      className="bg-bari-orange hover:bg-bari-orange/90 text-white px-8 py-6 text-lg font-bold"
                      size="lg"
                    >
                      Acceder Ahora
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Social Group Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full bg-gradient-to-br from-teal-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-bari-teal/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-bari-teal/10 rounded-full flex items-center justify-center">
                  <Coffee className="text-bari-teal" size={32} />
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-bari-dark">
                  Relax Time
                </CardTitle>
                <p className="text-bari-slate mb-4">
                  Mates al lago, afters en cervecerías y eventos sociales para
                  conocernos fuera de la montaña.
                </p>
                <div className="text-sm text-bari-teal font-semibold">
                  Incluido en membresía
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full bg-gradient-to-br from-red-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-red-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <Wine className="text-[#722F37]" size={32} />
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-bari-dark">
                  Bari.Wine
                </CardTitle>
                <p className="text-bari-slate mb-4">
                  Catas de vino, visitas a bodegas y encuentros para disfrutar
                  de los mejores vinos patagónicos.
                </p>
                <div className="text-sm text-bari-teal font-semibold">
                  Incluido en membresía
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full bg-gradient-to-br from-indigo-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-indigo-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-indigo-100 rounded-full flex items-center justify-center">
                  <Sparkles className="text-indigo-500" size={32} />
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-bari-dark">
                  Bari.Bienestar
                </CardTitle>
                <p className="text-bari-slate mb-4">
                  Yoga, meditación, talleres de autoconocimiento y actividades
                  para el bienestar integral.
                </p>
                <div className="text-sm text-bari-teal font-semibold">
                  Incluido en membresía
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Card className="h-full bg-gradient-to-br from-blue-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-blue-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="text-blue-500" size={32} />
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-bari-dark">
                  Bari.Red
                </CardTitle>
                <p className="text-bari-slate mb-4">
                  Red de apoyo comunitario, consultas y ayuda práctica entre
                  miembros.
                </p>
                <div className="text-sm text-bari-teal font-semibold">
                  Incluido en membresía
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <Card className="h-full bg-gradient-to-br from-green-50 to-white hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-green-200">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <HeartHandshake className="text-green-600" size={32} />
                </div>
                <CardTitle className="text-xl font-bold mb-3 text-bari-dark">
                  Comunidad
                </CardTitle>
                <p className="text-bari-slate mb-4">
                  Acciones voluntarias, cuidado del entorno y proyectos
                  colaborativos.
                </p>
                <div className="text-sm text-bari-teal font-semibold">
                  Incluido en membresía
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export { SocialGroups };
