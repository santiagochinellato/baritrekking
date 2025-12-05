import { motion } from "framer-motion";
import {
  Mountain,
  Users,
  Calendar,
  GraduationCap,
  Heart,
  ArrowRight,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/Card";
import { urlFor } from "../../lib/sanity";

interface StatItem {
  label: string;
  value: string;
  icon: string;
}

export interface TrekkingCardProps {
  data: {
    title: string;
    description: string;
    badge: string;
    image: unknown;
    levels: string[];
    stats: StatItem[];
    buttonText?: string;
    buttonLink?: string;
  };
}

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
    default:
      return <Users size={size} className={className} />;
  }
};

export const TrekkingCard = ({ data }: TrekkingCardProps) => {
  const trekkingImage = data.image
    ? urlFor(data.image).width(1200).auto("format").url()
    : "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=2070";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-2 row-span-2"
    >
      <Card className="h-full relative overflow-hidden border-none shadow-xl group hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${trekkingImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-bari-teal/95 to-emerald-900/95" />

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
                <span>{data.badge}</span>
              </motion.div>
              <Mountain className="text-white/60 hidden sm:block" size={40} />
            </div>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-3 sm:mb-4 text-center sm:text-left">
              {data.title}
            </CardTitle>
            <p className="text-white/95 text-sm sm:text-base md:text-lg leading-relaxed text-center sm:text-left">
              {data.description}
            </p>
          </CardHeader>

          <CardContent className="p-0 space-y-6 flex-grow flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex gap-2 flex-wrap border-b border-white/20 pb-4 justify-center lg:justify-start">
                {data.levels.map((level, i) => (
                  <span
                    key={i}
                    className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full font-medium"
                  >
                    {level}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 w-full">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="md:col-span-2 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-inner h-full">
                  <div className="flex items-center gap-3 mb-2">
                    {getIcon(
                      data.stats.find((s) => s.label === "Miembros")?.icon ||
                        "Users",
                      48,
                      "text-white w-10 h-10 lg:w-12 lg:h-12"
                    )}
                    <span className="text-lg font-bold text-white/90 uppercase tracking-widest">
                      Comunidad
                    </span>
                  </div>
                  <span className="text-5xl lg:text-6xl font-black text-white drop-shadow-sm leading-none my-2">
                    {data.stats.find((s) => s.label === "Miembros")?.value}
                  </span>
                  <span className="text-sm font-medium text-white/70">
                    Miembros registradas
                  </span>
                </div>

                <div className="md:col-span-2 flex flex-col gap-3">
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {data.stats
                      .filter((s) => ["Salidas", "Eventos"].includes(s.label))
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
                  <div className="grid grid-cols-2 gap-3 flex-1">
                    {data.stats
                      .filter((s) => ["Cursos", "Acciones"].includes(s.label))
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
              onClick={() => (window.location.href = data.buttonLink || "#")}
              className="mt-4 bg-white text-bari-teal hover:bg-bari-cream font-bold py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all text-base sm:text-lg group w-full sm:max-w-sm sm:mx-0"
              size="lg"
            >
              {data.buttonText || "Unirme al Grupo"}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </motion.div>
  );
};
