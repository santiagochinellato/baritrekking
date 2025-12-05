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
import { useSanity } from "../../hooks/useSanity";
import { urlFor } from "../../lib/sanity";

interface StatItem {
  label: string;
  value: string;
  icon: string;
}

interface BenefitItem {
  name: string;
  desc: string;
  emoji: string;
}

interface GroupsData {
  title: string;
  subtitle: string;
  trekkingCard: {
    title: string;
    description: string;
    badge: string;
    image: any;
    levels: string[];
    stats: StatItem[];
  };
  socialCard: {
    title: string;
    badge: string;
    description: string;
    price: string;
    benefits: BenefitItem[];
  };
  preventionCard: {
    title: string;
    description: string;
    tagline: string;
  };
  communityCard: {
    title: string;
    description: string;
    tagline: string;
  };
}

const CompactGroups = () => {
  const { data: groupsData } = useSanity<GroupsData>(`*[_type == "groups"][0]`);

  const handleJoinClick = () => {
    window.location.href = "#"; // Replace with actual registration link
  };

  // Helper to get icon component
  const getIcon = (
    iconName: string,
    size: number = 24,
    className: string = ""
  ) => {
    switch (iconName) {
      case "Mountain":
        return <Mountain size={size} className={className} />;
      case "Users":
        return <Users size={size} className={className} />;
      case "Calendar":
        return <Calendar size={size} className={className} />;
      case "GraduationCap":
        return <GraduationCap size={size} className={className} />;
      case "Heart":
        return <Heart size={size} className={className} />;
      case "Wine":
        return <Wine size={size} className={className} />;
      case "Coffee":
        return <Coffee size={size} className={className} />;
      case "Sparkles":
        return <Sparkles size={size} className={className} />;
      default:
        return <Users size={size} className={className} />;
    }
  };

  // Defaults
  const title = groupsData?.title || "Nuestros Espacios";
  const subtitle =
    groupsData?.subtitle ||
    "Trekking gratuito para todos, club social con membresía opcional.";

  // Trekking Card Defaults
  const trekking = groupsData?.trekkingCard || {
    title: "Trekking Principal",
    description:
      "El corazón de Bari.Trekking. Organizamos salidas todo el año para todos los niveles. Descubrí senderos, conocé gente nueva y disfrutá de la montaña.",
    badge: "Acceso Libre / Gratuito",
    levels: ["🥾 Principiantes", "⛰️ Intermedios", "🏔️ Avanzados"],
    stats: [
      { label: "Salidas", value: "200+", icon: "Mountain" },
      { label: "Miembros", value: "1034", icon: "Users" },
      { label: "Eventos", value: "120", icon: "Calendar" },
      { label: "Cursos", value: "10", icon: "GraduationCap" },
      { label: "Acciones", value: "8", icon: "Heart" },
    ],
  };
  const trekkingImage = groupsData?.trekkingCard?.image
    ? urlFor(groupsData.trekkingCard.image).width(1200).url()
    : "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070";

  // Social Card Defaults
  const social = groupsData?.socialCard || {
    title: "Club Social & Beneficios",
    badge: "MEMBRESÍA OPCIONAL",
    description: "Accedé a todos los grupos de vida social",
    price: "$5.000",
    benefits: [
      { name: "Bari.Wine", emoji: "🍷", desc: "Catas de vino" },
      { name: "Relax Time", emoji: "🧉", desc: "Mates y eventos" },
      { name: "Bari.Bienestar", emoji: "🧘🏻‍♀️", desc: "Yoga y meditación" },
      { name: "Bari.Red", emoji: "🤝", desc: "Red de apoyo" },
    ],
  };

  // Prevention Card Defaults
  const prevention = groupsData?.preventionCard || {
    title: "Prevención y Seguridad",
    description:
      "Espacio dedicado a aprender y cuidarnos. Info sobre equipamiento, clima y seguridad en montaña.",
    tagline: "Tu seguridad es prioridad",
  };

  // Community Card Defaults
  const community = groupsData?.communityCard || {
    title: "Comunidad",
    description:
      "Acciones voluntarias, cuidado del entorno y proyectos colaborativos. \nPorque la montaña se disfruta más cuando la cuidamos entre todos.",
    tagline: "Juntos hacemos más",
  };

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
            {title}
          </h2>
          <p className="text-lg text-bari-slate max-w-2xl mx-auto">
            {subtitle}
          </p>
        </motion.div>

        {/* Compact Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">
          {/* Card A: Trekking Principal - Large with integrated stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 row-span-2"
          >
            <Card className="h-full relative overflow-hidden border-none shadow-xl group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              {/* Background Image with Overlay */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('${trekkingImage}')`,
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
                      <span>{trekking.badge}</span>
                    </motion.div>
                    <Mountain
                      className="text-white/60 hidden sm:block"
                      size={40}
                    />
                  </div>
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-center sm:text-left">
                    {trekking.title}
                  </CardTitle>
                  <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
                    {trekking.description}
                  </p>
                </CardHeader>

                <CardContent className="p-0 space-y-6 flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex gap-2 flex-wrap border-b border-white/20 pb-4 justify-center lg:justify-start  ">
                      {trekking.levels.map((level, i) => (
                        <span
                          key={i}
                          className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium"
                        >
                          {level}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Integrated Stats */}
                  <div className=" pt-4 w-full">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                      {/* Featured Stat (Members) - Left Side (2 cols) */}
                      <div className="md:col-span-2 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner h-full">
                        <div className="flex items-center gap-3 mb-2">
                          {getIcon(
                            trekking.stats.find((s) => s.label === "Miembros")
                              ?.icon || "Users",
                            48,
                            "text-white w-10 h-10 lg:w-12 lg:h-12"
                          )}
                          <span className="text-lg font-bold text-white/90 uppercase tracking-widest">
                            Comunidad
                          </span>
                        </div>
                        <span className="text-5xl lg:text-6xl font-black text-white drop-shadow-sm leading-none my-2">
                          {
                            trekking.stats.find((s) => s.label === "Miembros")
                              ?.value
                          }
                        </span>
                        <span className="text-sm font-medium text-white/70">
                          Miembros registradas
                        </span>
                      </div>

                      {/* Other Stats - Right Side (2 cols) */}
                      <div className="md:col-span-2 flex flex-col gap-3">
                        {/* Row 1: Salidas & Eventos */}
                        <div className="grid grid-cols-2 gap-3 flex-1">
                          {trekking.stats
                            .filter((s) =>
                              ["Salidas", "Eventos"].includes(s.label)
                            )
                            .map((stat, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors"
                              >
                                {getIcon(stat.icon, 20, "text-white/80 mb-1")}
                                <span className="text-lg font-bold text-white">
                                  {stat.value}
                                </span>
                                <span className="text-[10px] uppercase font-medium text-white/60">
                                  {stat.label}
                                </span>
                              </div>
                            ))}
                        </div>
                        {/* Row 2: Cursos & Acciones */}
                        <div className="grid grid-cols-2 gap-3 flex-1">
                          {trekking.stats
                            .filter((s) =>
                              ["Cursos", "Acciones"].includes(s.label)
                            )
                            .map((stat, idx) => (
                              <div
                                key={idx}
                                className="flex flex-col items-center justify-center p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/5 hover:bg-white/10 transition-colors"
                              >
                                {getIcon(stat.icon, 20, "text-white/80 mb-1")}
                                <span className="text-lg font-bold text-white">
                                  {stat.value}
                                </span>
                                <span className="text-[10px] uppercase font-medium text-white/60">
                                  {stat.label}
                                </span>
                              </div>
                            ))}
                        </div>
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

          {/* Card B: Membresía & Vida Social - Tall Premium Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-1 row-span-2"
          >
            <Card className="h-full bg-gradient-to-br from-gray-900 via-bari-dark to-gray-900 text-white border-none shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden">
              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-bari-gold/5 via-transparent to-bari-orange/5 pointer-events-none" />

              <CardHeader className="pb-4 relative z-10">
                <div className="inline-block bg-gradient-to-r from-bari-gold to-amber-400 text-bari-dark px-4 py-1.5 rounded-full text-xs font-bold mb-4 shadow-lg text-center w-[80%] lg:w-64 m-auto">
                  {social.badge}
                </div>
                <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-bari-gold via-amber-300 to-bari-gold bg-clip-text text-transparent mb-2 text-center lg:text-left">
                  {social.title}
                </CardTitle>
                <p className="text-gray-400 text-sm text-center lg:text-left">
                  {social.description}
                </p>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col justify-between relative z-10">
                {/* Benefits List */}
                <div className="space-y-2.5 mb-6">
                  {social.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 transition-all group"
                    >
                      <div className="w-11 h-11 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <span className="text-2xl">{benefit.emoji}</span>
                      </div>
                      <div className="flex-grow">
                        <div className="font-bold text-sm text-white">
                          {benefit.name}
                        </div>
                        <div className="text-xs text-gray-400">
                          {benefit.desc}
                        </div>
                      </div>
                      <Check
                        className="text-bari-gold flex-shrink-0"
                        size={18}
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Price & CTA Footer */}
                <div className="border-t border-white/10 pt-6 mt-auto space-y-4">
                  <div className="text-center">
                    <div className="text-5xl font-black bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent mb-1">
                      {social.price}
                    </div>
                    <div className="text-sm text-gray-400 font-medium">
                      por mes
                    </div>
                  </div>
                  <Button
                    onClick={handleJoinClick}
                    className="bg-gradient-to-r from-bari-orange to-orange-600 hover:from-bari-orange/90 hover:to-orange-700 text-white w-full py-6 text-lg font-bold rounded-full shadow-xl hover:shadow-2xl transition-all"
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
            className="lg:col-span-1 row-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-orange-50 to-white border-2 border-bari-orange/30 hover:border-bari-orange hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-bari-orange/10 rounded-full -mr-16 -mt-16" />
              <div className="relative p-6">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 mb-4">
                  <div className="bg-bari-orange/20 p-3 rounded-lg">
                    <ShieldAlert className="text-bari-orange" size={32} />
                  </div>
                  <CardTitle className="text-xl sm:text-2xl font-bold text-bari-dark">
                    {prevention.title}
                  </CardTitle>
                </div>
                <p className="text-bari-dark text-sm sm:text-base lg:text-left text-center font-medium leading-relaxed mb-4">
                  {prevention.description}
                </p>
                <div className=" w-full inline-flex items-center justify-center lg:justify-start gap-2 text-bari-orange text-xs sm:text-sm font-semibold">
                  <ShieldAlert size={16} />
                  <span>{prevention.tagline}</span>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Card D: Comunidad - Enhanced Visual Weight */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:col-span-2 row-span-1"
          >
            <Card className="h-full bg-gradient-to-br from-green-50 via-white to-green-50 border-2 border-green-200 hover:border-green-400 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
              <div className="flex flex-col items-center text-center p-6 md:p-8">
                <div className="bg-green-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <HeartHandshake className="text-green-600" size={48} />
                </div>
                <div className="max-w-xl mx-auto">
                  <CardTitle className="text-2xl md:text-3xl font-bold text-bari-dark mb-3">
                    {community.title}
                  </CardTitle>
                  <p className="text-bari-dark text-base md:text-lg font-medium leading-relaxed mb-4 whitespace-pre-line">
                    {community.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-green-700 font-bold bg-green-100/50 px-4 py-2 rounded-full">
                    <HeartHandshake size={20} />
                    <span>{community.tagline}</span>
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
