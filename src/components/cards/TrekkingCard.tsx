import { motion } from "framer-motion";
import { Mountain, ArrowRight } from "lucide-react";
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
    prevention?: {
      title: string;
      description: string;
      tagline: string;
    };
  };
}

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
      className="lg:col-span-1 row-span-2"
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
                style={{
                  WebkitFontSmoothing: "antialiased",
                  backfaceVisibility: "hidden",
                }}
                className="bg-bari-gold text-bari-dark px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-bold shadow-lg inline-flex items-center gap-1.5 sm:gap-2 transform-gpu will-change-transform"
              >
                <span className="text-base sm:text-lg">🎉</span>
                <span>{data.badge}</span>
              </motion.div>
              <Mountain className="text-white/60 hidden sm:block" size={40} />
            </div>
            <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-3 sm:mb-4 text-center sm:text-left">
              {data.title}
            </CardTitle>
            <p className="text-white/95 text-sm sm:text-base leading-relaxed text-center sm:text-left">
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

            <div className="pt-4 w-full flex-grow">
              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {data.stats.slice(0, 4).map((stat, idx) => (
                  <div
                    key={idx}
                    className="bg-white/10 rounded-lg p-3 flex flex-col items-center justify-center text-center"
                  >
                    <span className="text-xl font-bold">{stat.value}</span>
                    <span className="text-xs text-white/70">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Prevention Section */}
              {data.prevention && (
                <div className="bg-white/10 rounded-xl p-4 border border-white/10 mb-4">
                  <h4 className="font-bold text-bari-gold mb-1 flex items-center gap-2">
                    🛡️ {data.prevention.title}
                  </h4>
                  <p className="text-xs text-white/80 leading-relaxed mb-2">
                    {data.prevention.description}
                  </p>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-white/60">
                    {data.prevention.tagline}
                  </div>
                </div>
              )}
            </div>

            <Button
              onClick={() => (window.location.href = data.buttonLink || "#")}
              className="mt-4 bg-white text-bari-teal hover:bg-bari-cream font-bold py-4 sm:py-6 rounded-full shadow-lg hover:shadow-xl transition-all text-base sm:text-lg group w-full"
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
